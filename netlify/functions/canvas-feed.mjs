// netlify/functions/canvas-feed.mjs
//
// Reads a calendar feed on PlanIt's behalf and hands the raw .ics text back to
// the page.
//
// The file is still called canvas-feed because that is the address the app and
// the shipped iOS build already point at. It is not Canvas only: it will read
// any site's published calendar, so a Google Calendar a teacher shares, a
// school's athletics calendar, or an SAT or AP prep course's schedule all work
// the same way.
//
// It exists because a browser cannot read most calendar feeds directly: the
// sites publishing them send no CORS headers. This runs on the server, where
// that restriction does not apply.
//
// No environment variables and no setup. The .mjs extension is required:
// Netlify only reads `export default` from a .mjs file, or from a .js file in a
// repo whose package.json says "type": "module".
//
// Reading an address a visitor supplies means this could be pointed at things
// it has no business reading, so every request has to clear four gates:
//
//   1. https only, on the standard port.
//   2. The host must resolve entirely to public internet addresses. No
//      localhost, no private network, no cloud metadata service.
//   3. Redirects are followed by hand, and each hop goes through gate 2 again.
//   4. The reply has to actually be a calendar. Anything that is not iCalendar
//      is thrown away rather than passed back.
//
// Gates 2 and 3 resolve the name and then fetch by name, which leaves a narrow
// window where DNS could answer differently the second time. Closing that
// completely means connecting to the address directly, which breaks
// certificate checking. Gate 4 is what makes the gap unexploitable in
// practice: an internal service would have to answer with a valid iCalendar
// document.
//
// The feed address is a secret in its own right, since anyone holding it can
// read that student's assignments. It is never logged.

import { lookup } from 'node:dns/promises';
import net from 'node:net';

const MAX_URL = 600;
const MAX_BYTES = 4_000_000;
const MAX_HOPS = 4;
const TIMEOUT_MS = 12000;

// Everything that is not a routable public IPv4 address.
function publicV4(ip) {
  const p = ip.split('.').map(Number);
  if (p.length !== 4 || p.some((n) => !Number.isInteger(n) || n < 0 || n > 255)) return false;
  const [a, b] = p;
  if (a === 0) return false;                             // this network
  if (a === 10) return false;                            // private
  if (a === 127) return false;                           // loopback
  if (a === 169 && b === 254) return false;              // link local, incl. 169.254.169.254
  if (a === 172 && b >= 16 && b <= 31) return false;     // private
  if (a === 192 && b === 168) return false;              // private
  if (a === 192 && b === 0) return false;                // protocol assignments, test net
  if (a === 192 && b === 88) return false;               // 6to4 relay anycast
  if (a === 198 && (b === 18 || b === 19)) return false; // benchmarking
  if (a === 198 && b === 51) return false;               // test net 2
  if (a === 203 && b === 0) return false;                // test net 3
  if (a === 100 && b >= 64 && b <= 127) return false;    // carrier grade NAT
  if (a >= 224) return false;                            // multicast and reserved
  return true;
}

function publicIp(ip) {
  if (net.isIPv4(ip)) return publicV4(ip);
  if (!net.isIPv6(ip)) return false;
  const h = ip.toLowerCase();
  if (h === '::' || h === '::1') return false;
  // ::ffff:10.0.0.1 and friends are IPv4 wearing a hat
  const mapped = /^(?:::ffff:)([0-9.]+)$/.exec(h);
  if (mapped) return publicV4(mapped[1]);
  if (/^f[cd]/.test(h)) return false;          // unique local
  if (/^fe[89ab]/.test(h)) return false;       // link local
  if (/^ff/.test(h)) return false;             // multicast
  if (h.startsWith('64:ff9b:')) return false;  // NAT64
  if (h.startsWith('2002:')) return false;     // 6to4, can wrap a private v4
  if (/^2001:0{0,4}:/.test(h)) return false;   // Teredo
  return true;
}

// True only when every address the hostname resolves to is public.
async function hostIsPublic(hostname) {
  const bare = hostname.replace(/^\[/, '').replace(/\]$/, '');
  if (net.isIP(bare)) return publicIp(bare);
  let addrs;
  try {
    addrs = await lookup(hostname, { all: true, verbatim: true });
  } catch {
    return false;
  }
  if (!addrs.length) return false;
  return addrs.every((a) => publicIp(a.address));
}

// Shared checks, run on the address the student gave and on every redirect.
async function vet(raw, base) {
  let u;
  try {
    u = new URL(String(raw).trim().replace(/^webcal:/i, 'https:'), base);
  } catch {
    return { bad: 'That is not a web address.' };
  }
  if (u.protocol !== 'https:') {
    return { bad: 'The feed address has to start with https.' };
  }
  if (u.port && u.port !== '443') {
    return { bad: 'That address uses an unusual port, so PlanIt will not read it.' };
  }
  if (!(await hostIsPublic(u.hostname))) {
    return { bad: 'That address is not a public website.' };
  }
  return { url: u };
}

export default async (req) => {
  const reply = (body, status, type) =>
    new Response(body, {
      status,
      headers: {
        'content-type': type || 'text/plain; charset=utf-8',
        // the page and the function are same origin on Netlify; this is here
        // for the iOS build, which runs from capacitor://localhost
        'access-control-allow-origin': '*',
        'cache-control': 'no-store'
      }
    });

  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'access-control-allow-origin': '*',
        'access-control-allow-headers': 'content-type',
        'access-control-allow-methods': 'POST, OPTIONS'
      }
    });
  }
  if (req.method !== 'POST') return reply('Method not allowed', 405);

  let url;
  try {
    ({ url } = await req.json());
  } catch {
    return reply('Bad request body', 400);
  }
  if (!url || typeof url !== 'string' || url.length > MAX_URL) {
    return reply('No feed address', 400);
  }

  let next = await vet(url);
  if (next.bad) return reply(next.bad, 400);

  // Redirects by hand, so a feed that bounces through a short link cannot land
  // somewhere the first check would have refused.
  let res;
  for (let hop = 0; ; hop++) {
    try {
      res = await fetch(next.url.toString(), {
        headers: {
          accept: 'text/calendar, text/plain;q=0.9, */*;q=0.1',
          'user-agent': 'PlanIt/1.0 (+https://planitforever.com)'
        },
        redirect: 'manual',
        signal: AbortSignal.timeout(TIMEOUT_MS)
      });
    } catch (e) {
      return reply(
        e && e.name === 'TimeoutError'
          ? 'That site took too long to answer. Try again in a minute.'
          : 'Could not reach that site.',
        502
      );
    }

    if (res.status < 300 || res.status > 399) break;

    const loc = res.headers.get('location');
    if (!loc) break;
    if (hop >= MAX_HOPS) return reply('That address redirects too many times.', 502);

    const step = await vet(loc, next.url.toString());
    if (step.bad) return reply('That address redirects somewhere PlanIt will not follow.', 400);
    next = step;
  }

  if (res.status === 401 || res.status === 403) {
    return reply(
      'That site refused the address. If the calendar is private, copy a fresh feed address from it.',
      403
    );
  }
  if (res.status === 404) {
    return reply('That site does not recognise that address any more.', 404);
  }
  if (!res.ok) return reply('That site answered with an error (' + res.status + ').', 502);

  const len = Number(res.headers.get('content-length') || 0);
  if (len > MAX_BYTES) return reply('That feed is too large to read.', 413);

  const text = await res.text();
  if (text.length > MAX_BYTES) return reply('That feed is too large to read.', 413);

  if (!/BEGIN:VCALENDAR/i.test(text)) {
    const page = /^\s*<(?:!doctype|html|\?xml)/i.test(text.trim());
    return reply(
      page
        ? 'That address gave back a web page rather than a calendar. Look on the page for a link ' +
            'saying iCal, ICS, Subscribe or Calendar Feed, and copy that address instead.'
        : 'That address did not return a calendar.',
      422
    );
  }

  return reply(text, 200, 'text/calendar; charset=utf-8');
};
