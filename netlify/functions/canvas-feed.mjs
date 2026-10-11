// netlify/functions/canvas-feed.js
//
// Fetches a Canvas calendar feed on PlanIt's behalf.
//
// Canvas serves its .ics feeds without CORS headers, so a browser cannot read
// one directly however the request is made. This runs on the server, where that
// restriction does not apply, and hands the raw calendar text back to the page.
//
// The feed URL is a secret in its own right: anyone holding it can read that
// student's assignments. So this function refuses to fetch anything that is not
// a Canvas calendar feed, never logs the URL, and sends nothing anywhere else.

const FEED_PATH = /^\/feeds\/calendars\/[A-Za-z0-9_.-]+\.ics$/;

// Canvas runs on instructure.com for hosted schools; a few districts put it on
// their own domain, so a canvas.* or *.canvas.* host is allowed as well.
function allowedHost(host) {
  const h = host.toLowerCase();
  if (h === 'instructure.com' || h.endsWith('.instructure.com')) return true;
  if (h === 'canvaslms.com' || h.endsWith('.canvaslms.com')) return true;
  return h.split('.').includes('canvas');
}

export default async (req) => {
  const reply = (body, status, type) =>
    new Response(body, {
      status,
      headers: {
        'content-type': type || 'text/plain; charset=utf-8',
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
  if (!url || typeof url !== 'string' || url.length > 500) {
    return reply('No feed address', 400);
  }

  let parsed;
  try {
    parsed = new URL(url.trim().replace(/^webcal:/i, 'https:'));
  } catch {
    return reply('That is not a web address.', 400);
  }
  if (parsed.protocol !== 'https:') {
    return reply('The feed address has to start with https.', 400);
  }
  if (!allowedHost(parsed.hostname)) {
    return reply('That address is not a Canvas calendar feed.', 400);
  }
  if (!FEED_PATH.test(parsed.pathname)) {
    return reply(
      'That looks like a Canvas page rather than the calendar feed. ' +
      'In Canvas open Calendar, press Calendar Feed, and copy the address it shows.',
      400
    );
  }

  let res;
  try {
    res = await fetch(parsed.toString(), {
      headers: { accept: 'text/calendar, text/plain', 'user-agent': 'PlanIt/1.0' },
      redirect: 'follow',
      signal: AbortSignal.timeout(12000)
    });
  } catch (e) {
    return reply(
      e && e.name === 'TimeoutError'
        ? 'Canvas took too long to answer. Try again in a minute.'
        : 'Could not reach Canvas.',
      502
    );
  }

  if (res.status === 401 || res.status === 403) {
    return reply('Canvas refused that feed address. Copy a fresh one from Canvas.', 403);
  }
  if (res.status === 404) {
    return reply('Canvas does not recognise that feed address any more.', 404);
  }
  if (!res.ok) return reply('Canvas answered with an error (' + res.status + ').', 502);

  const text = await res.text();
  if (text.length > 2000000) return reply('That feed is too large to read.', 413);
  if (!/BEGIN:VCALENDAR/i.test(text)) {
    return reply('That address did not return a calendar.', 422);
  }
  return reply(text, 200, 'text/calendar; charset=utf-8');
};
