<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>PlanIt</title>
<script>
/* The palette lives in the planner save, which loads over the network, so the
   last choice is mirrored to one small key and read here. Without this the
   page paints light cream for a moment before a dark theme takes over. */
(function(){
  var T = {
    terracotta:['#F9F6F0','#171C22'], sage:['#F5F6EF','#171B17'],
    iris:['#F4F3F9','#171724'],       rosewood:['#FAF3F2','#1D1618'],
    coastal:['#F2F7FA','#121A1F'],    matcha:['#F5F3EB','#1A1A17'],
    graphite:['#F3F1EC','#15161A']
  };
  try{
    var a = JSON.parse(localStorage.getItem('planit:appearance:v1') || '{}');
    var pair = T[a.palette] || T.terracotta;
    var dark = a.mode === 'dark' || (a.mode === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);
    var paper = a.bg || pair[dark ? 1 : 0];
    var r = document.documentElement;
    r.setAttribute('data-theme', dark ? 'dark' : 'light');
    r.style.colorScheme = dark ? 'dark' : 'light';
    r.style.setProperty('--paper', paper);
    var m = document.createElement('meta');
    m.name = 'theme-color'; m.content = paper;
    document.head.appendChild(m);
  }catch(e){}
})();
</script>
<link rel="icon" type="image/png" sizes="512x512" href="favicon.png?v=3">
<link rel="shortcut icon" type="image/png" href="favicon.png?v=3">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png?v=3">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..800&family=Hanken+Grotesk:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Caveat:wght@500;600;700&display=swap" rel="stylesheet">
<style>
  /* Starting values only. applyAppearance() writes the live palette onto <html>
     as soon as the planner loads, and the boot script above paints the page
     colour before that. Defined once here so nothing needs a hardcoded hex. */
  :root{
    --paper:#F9F6F0;
    --card:#FFFDF9;
    --soft:#F3EEE4;
    --surface:#EAE1D4;
    --ink:#1F2B38;
    --ink60:#3C4A59;
    --ink35:#576574;
    --line:#CABBA5;
    --accent:#C14D33;
    --accent2:#B99B7E;
    --accent-ink:#FFFFFF;
    --paper-rgb:249, 246, 240;
    --accent-soft:rgba(193,77,51,.12);
    --rule-soft:rgba(179,56,42,.09);
    --rule-line:rgba(179,56,42,.30);
    --list-soft:rgba(81,126,100,.09);
    --brag-soft:rgba(161,104,40,.09);
    --brag-line:rgba(161,104,40,.30);
    --watch-glow:rgba(51,125,146,.55);
    --rule:#B3382A;
    --brag:#A16828;
    --list:#517E64;
    --org:#53769A;
    --lock:#C34E41;
    --set:#637589;
    --watch:#337D92;
    --t-test:#C34E41;
    --t-deadline:#A16828;
    --t-birthday:#517E64;
    --t-meeting:#53769A;
    --t-other:#637589;
    --gut:62px;
    --r:3px;
  }
  *{box-sizing:border-box}
  html,body,#root{height:100%}
  html,body{max-width:100%;overflow-x:hidden}
  /* The planner is a fixed-height app whose panes scroll inside it, which makes
     <body> a scroll container. A long marketing page needs the opposite: the
     document itself has to scroll, or window.scrollY never moves and every
     anchor link, the pinned nav and the scroll animation stop working. */
  html.pagescroll,html.pagescroll body,html.pagescroll #root{height:auto;min-height:100%}
  html.pagescroll body,html.pagescroll #root{overflow:visible}
  html.pagescroll{overflow-x:hidden}
  svg,img{max-width:100%}
  input,textarea,select{max-width:100%}
  @supports (height:100dvh){ html,body,#root{height:100dvh} }
  body.dragging{overflow:hidden;touch-action:none}
  body.dragging .grid-inner,body.dragging .block,body.dragging .tray-item{touch-action:none}
  button{touch-action:manipulation}
  body{
    margin:0; background:var(--paper); color:var(--ink);
    font-family:"Hanken Grotesk", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    font-size:15px; line-height:1.45;
    -webkit-font-smoothing:antialiased;
  }
  h1,h2,h3,.display{font-family:"Bricolage Grotesque",sans-serif;font-weight:800;font-variation-settings:"wdth" 88;
    letter-spacing:-.022em;margin:0;line-height:1.08}
  .mono{font-family:"DM Mono", ui-monospace, monospace; font-variant-numeric:tabular-nums}
  button{font:inherit;color:inherit;cursor:pointer}
  input,textarea,select{font:inherit;color:inherit}
  :focus-visible{outline:2.5px solid var(--accent); outline-offset:2px; border-radius:2px}
  ::-webkit-scrollbar{width:10px;height:10px}
  ::-webkit-scrollbar-thumb{background:var(--line);border-radius:99px;border:3px solid transparent;background-clip:content-box}
  ::-webkit-scrollbar-thumb:hover{background:var(--ink35);background-clip:content-box;border:3px solid transparent}

  /* ---------- shell ---------- */
  /* In the app, iOS draws under the status bar and the home indicator, so the
     layout keeps clear of both. On the web these insets are zero. */
  .app{display:flex;height:100%;overflow:hidden;max-width:100vw;
    padding-top:env(safe-area-inset-top,0px);
    box-sizing:border-box}
  /* the inset lives inside the scrolling area, so the pane itself reaches the
     bottom of the screen instead of leaving a band of background below it */
  .pane-body{padding-bottom:calc(40px + env(safe-area-inset-bottom,0px))}
  /* The gap sits on body so it covers every screen, signed in or not. Fixed
     elements are positioned against the viewport, so they shift separately. */
  html.needs-status-gap body{padding-top:52px;box-sizing:border-box}
  html.needs-status-gap .menubtn{top:62px}
  .menubtn{top:calc(10px + env(safe-area-inset-top,0px))}
  .listtoggle{top:calc(18px + env(safe-area-inset-top,0px))}
  .shieldlist{top:calc(64px + env(safe-area-inset-top,0px))}
  .rail{
    width:210px;flex:none;padding:18px 0 18px 14px;display:flex;flex-direction:column;gap:6px;
    background:var(--surface);border-right:1px solid var(--line);
  }
  .brand{display:flex;align-items:center;gap:10px;padding:2px 8px 16px 4px}
  .logomark{flex:none;object-fit:contain;border-radius:2px}
  .brand b{font-family:"Bricolage Grotesque",sans-serif;font-weight:800;font-size:26px;letter-spacing:-.03em;white-space:nowrap}
  .tab{
    position:relative;display:flex;align-items:center;gap:11px;
    padding:11px 12px;margin-right:0;border:0;background:transparent;text-align:left;
    border-radius:3px 0 0 3px;color:var(--ink60);font-weight:500;transition:background .16s, color .16s;
  }
  /* a short colour rule instead of an icon: the same identity cue, no clip art */
  .tab .tabrule{width:3px;height:26px;border-radius:2px;background:var(--tabcolor);opacity:.35;
    flex:none;transition:opacity .16s}
  .tab.on .tabrule{opacity:1}
  .tab .lbl{font-family:"Bricolage Grotesque",sans-serif;font-variation-settings:"wdth" 92;font-weight:700;
    font-size:15.5px;letter-spacing:-.012em}
  .tab .sub{display:block;font-size:11.5px;color:var(--ink35);font-weight:400}
  .tab:hover{background:var(--soft);color:var(--ink)}
  .tab.on{background:var(--card);color:var(--ink);box-shadow:-1px 0 0 var(--line) inset, 0 -1px 0 var(--line), 0 1px 0 var(--line)}
  .tab.on::before{content:none}
  .tab.on::after{content:"";position:absolute;right:-1px;top:0;bottom:0;width:14px;background:var(--card)}
  .tab[disabled]{opacity:.45;cursor:not-allowed}
  .rail-foot{margin-top:auto;padding:12px;font-size:11.5px;color:var(--ink35);line-height:1.5}

  .pane{
    flex:1;min-width:0;background:var(--card);border:0;
    display:flex;flex-direction:column;overflow:hidden
  }
  .pane-head{padding:22px 26px 0;flex:none}
  .title-wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
  h1{font-size:30px;font-weight:800;position:relative;display:inline-block;z-index:0}
  h1::after{
    content:"";position:absolute;left:-6px;right:-8px;bottom:2px;height:12px;z-index:-1;
    background:var(--accent2);opacity:.6;transform:skewX(-11deg) rotate(-.5deg);border-radius:1px}
  .tagline{color:var(--ink60);font-size:13.5px;margin-top:4px}
  .tape{display:flex;gap:3px;margin:18px 0 0;padding:3px;background:var(--surface);border-radius:3px;width:fit-content;max-width:100%;overflow-x:auto}
  .tape button{
    border:1px solid transparent;background:transparent;padding:8px 16px;border-radius:2px;
    font-weight:600;font-size:13.5px;color:var(--ink60);white-space:nowrap
  }
  .tape button.on{background:var(--card);color:var(--ink);border-color:var(--line);position:relative}
  .tape button.on::after{content:"";position:absolute;left:14px;right:14px;bottom:4px;height:2.5px;border-radius:2px;background:var(--accent)}
  .pane-body{--panepad:18px;flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;
    overscroll-behavior:contain;padding:var(--panepad) 26px 40px}
  .dayhead{position:sticky;top:calc(var(--panepad) * -1);z-index:6;background:var(--card);
    margin:calc(var(--panepad) * -1) 0 14px;padding:var(--panepad) 0 12px;
    border-bottom:1px solid var(--line)}
  .divider{height:1px;background:var(--line);margin:16px 0 0}

  /* ---------- bits ---------- */
  .btn{border:1px solid var(--line);background:var(--card);padding:8px 16px;border-radius:999px;
    font-weight:500;font-size:13.5px;display:inline-flex;align-items:center;gap:7px;transition:.14s}
  .btn:hover{border-color:var(--ink35)}
  /* the filled button is ink, so the section colours stay identity and never
     compete with the one action that matters on a screen */
  .btn.primary{background:var(--ink);border-color:var(--ink);color:var(--paper);font-weight:500}
  .btn.primary:hover{opacity:.88}
  .btn.ghost{border-color:transparent;background:transparent;color:var(--ink60)}
  .btn.ghost:hover{color:var(--ink);text-decoration:underline;text-underline-offset:3px}
  .btn.sm{padding:5px 13px;font-size:12.5px}
  .btn.danger{color:var(--rule);border-color:var(--rule-line)}
  .btn.danger:hover{border-color:var(--rule)}
  .chip{border:1px solid var(--line);background:var(--card);padding:5px 11px;border-radius:99px;font-size:12.5px;font-weight:600;color:var(--ink60)}
  .chip.on{background:var(--accent);border-color:transparent;color:var(--accent-ink)}
  .row{display:flex;align-items:center;gap:10px}
  .spread{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
  .eyebrow{font-size:12.5px;color:var(--ink35);font-weight:500;letter-spacing:0}
  .card{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:16px}
  .card.soft{background:var(--soft)}
  .empty{border:1px dashed var(--line);border-radius:var(--r);padding:30px 22px;text-align:center;color:var(--ink60)}
  .empty b{display:block;font-family:"Bricolage Grotesque",sans-serif;font-size:16px;color:var(--ink);margin-bottom:5px}
  .field{display:block;margin-bottom:12px}
  .field > span{display:block;font-size:12px;font-weight:600;color:var(--ink60);margin-bottom:5px}
  .field input,.field textarea,.field select{
    width:100%;padding:9px 11px;border:1px solid var(--line);border-radius:3px;background:var(--soft);transition:.14s
  }
  .field input:focus,.field textarea:focus,.field select:focus{background:var(--card);border-color:var(--accent);outline:none;box-shadow:0 0 0 3px var(--accent-soft)}
  .field textarea{resize:vertical;min-height:70px}
  /* iOS gives date and time inputs a wide intrinsic size, and a grid or flex
     child will not shrink below that unless told to, which is what pushed
     inputs past the edge of their card. minmax(0,…) and min-width:0 fix it
     everywhere at once. */
  .grid2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:0 12px}
  .grid2 > *,.row > *{min-width:0}
  input,select,textarea{max-width:100%;min-width:0}
  .card,.cardbody,.modal-body,.authcard,.field{min-width:0}
  /* icons only, one row, the labels made this section scroll */
  .erow{display:flex;align-items:center;gap:4px;background:var(--soft);border:1px solid var(--line);
    border-radius:99px;padding:4px;width:100%}
  .echip{flex:1 1 0;min-width:0;display:grid;place-items:center;height:40px;border:0;
    background:transparent;border-radius:99px;padding:0;transition:.16s}
  .echip svg,.echip span{pointer-events:none}
  .echip:hover{background:rgba(0,0,0,.05)}
  .echip.on{background:var(--accent)}
  .echip.on svg path{fill:#fff}
  .echip.on span{color:#fff;opacity:1}
  .navdate{display:flex;align-items:center;gap:2px;border:1px solid var(--line);border-radius:3px;padding:2px;background:var(--card)}
  .navdate button{border:0;background:transparent;padding:6px 10px;border-radius:3px;color:var(--ink60);font-size:15px;line-height:1}
  .navdate button:hover{background:var(--soft);color:var(--ink)}
  .navdate .cur{padding:5px 12px;font-weight:700;font-size:13.5px;min-width:150px;text-align:center;font-family:"Bricolage Grotesque",sans-serif}

  /* ---------- modal ---------- */
  .scrim{position:fixed;inset:0;background:rgba(22,25,27,.52);display:flex;align-items:center;justify-content:center;padding:18px;z-index:80;animation:fade .16s ease}
  @keyframes fade{from{opacity:0}}
  .modal{background:var(--card);border:1px solid var(--line);border-radius:3px;width:min(560px,100%);max-height:88vh;overflow:auto;animation:pop .18s cubic-bezier(.2,.8,.3,1)}
  @keyframes pop{from{transform:translateY(10px) scale(.98);opacity:.4}}
  .modal-head{padding:18px 20px 0;display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
  .modal-head h3{font-size:19px;font-weight:700}
  .modal-body{padding:16px 20px}
  .modal-foot{padding:0 20px 18px;display:grid;grid-auto-flow:column;grid-auto-columns:max-content;
    justify-content:end;align-items:center;gap:9px}
  .modal-foot > *{width:auto;min-width:0}
  .x{border:0;background:transparent;color:var(--ink35);font-size:20px;line-height:1;padding:4px 8px;border-radius:3px}
  .x:hover{background:var(--soft);color:var(--ink)}

  /* ---------- schedule ---------- */
  .sched-wrap{display:grid;grid-template-columns:minmax(0,1fr) 268px;gap:18px;align-items:start}
  .sched-wrap > *{min-width:0}
  .grid-scroll{border:1px solid var(--line);border-radius:var(--r);overflow:hidden;background:var(--card)}
  .grid-inner{position:relative;user-select:none;touch-action:pan-y}
  .hourrow{display:grid;grid-template-columns:var(--gut) 1fr;height:58px;border-top:1px solid var(--line)}
  .hourrow:first-child{border-top:0}
  .hourrow .h{font-size:11px;color:var(--ink35);padding:5px 10px 0;text-align:right;border-right:1px solid var(--line)}
  .hourrow .slot{position:relative}
  .hourrow .slot::after{content:"";position:absolute;left:0;right:0;top:50%;border-top:1px dashed var(--line)}
  .blocks{position:absolute;inset:0 0 0 var(--gut);pointer-events:none}
  .block{
    position:absolute;pointer-events:auto;border-radius:3px;padding:6px 9px;overflow:hidden;
    background:var(--bc-soft, var(--accent-soft));border-left:3.5px solid var(--accent);cursor:grab;touch-action:pan-y;
    transition:border-color .14s
  }
  .block:hover{border-color:var(--ink35)}
  .block.dragging{cursor:grabbing;box-shadow:0 0 0 2px var(--ink);z-index:5;opacity:.94}
  .block .bt{font-weight:600;font-size:13px;line-height:1.25;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .block .bm{font-size:10.5px;color:var(--ink60);margin-top:1px}
  .block.done .bt{text-decoration:line-through;opacity:.55}
  .daypicks{display:flex;gap:7px}
  .daypick{width:36px;height:36px;border-radius:99px;border:1.5px solid var(--line);background:var(--card);
    font-weight:700;font-size:13px;color:var(--ink60);padding:0;transition:.14s}
  .daypick:hover{border-color:var(--accent)}
  .daypick.on{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}
  .blockcolors{display:flex;gap:7px;flex-wrap:wrap}
  .bc{width:28px;height:28px;border-radius:99px;border:2px solid transparent;padding:0;cursor:pointer;
    box-shadow:0 0 0 1px var(--line) inset;transition:.14s}
  .bc:hover{transform:scale(1.08)}
  .bc.on{border-color:var(--ink)}
  .bc.none{background:repeating-linear-gradient(45deg,var(--card),var(--card) 4px,var(--line) 4px,var(--line) 8px)}
  .onweek{display:inline-block;margin-left:6px;padding:0 4px;border-radius:2px;font-size:9px;
    font-weight:700;letter-spacing:.04em;background:currentColor;color:var(--card);opacity:.65;vertical-align:1px}
  .cdot{width:7px;height:7px;border-radius:99px;display:inline-block;margin-right:5px;vertical-align:1px}
  .anchor{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:9px 14px;font-size:12.5px;font-weight:600;
    background:linear-gradient(90deg,var(--accent-soft),transparent);border:1px solid var(--line);cursor:pointer;transition:.14s}
  .anchor:hover{background:var(--accent-soft)}
  .anchor.wake{border-radius:var(--r) var(--r) 0 0;border-bottom:0}
  .anchor.sleep{border-radius:0 0 var(--r) var(--r);border-top:0;background:linear-gradient(90deg,transparent,var(--accent-soft))}
  .anchor .mono{color:var(--ink60);font-weight:500}
  .grid-scroll{border-radius:0}
  .asleep{position:absolute;left:var(--gut);right:0;background:repeating-linear-gradient(135deg,var(--soft),var(--soft) 6px,var(--line) 6px,var(--line) 12px);pointer-events:none;z-index:1}
  .nowline{position:absolute;left:var(--gut);right:0;height:2px;background:var(--rule);z-index:6;pointer-events:none}
  .nowline::before{content:"";position:absolute;left:-4px;top:-3px;width:8px;height:8px;border-radius:99px;background:var(--rule)}
  .tray{position:sticky;top:0;border-radius:var(--r);transition:.14s}
  .tray.over{outline:2px dashed var(--accent);outline-offset:6px;background:var(--accent-soft)}
  .traydrop{margin-bottom:8px;padding:9px 11px;border-radius:3px;background:var(--accent);
    color:var(--accent-ink);font-size:12.5px;font-weight:600;text-align:center}
  .tray-item{display:flex;gap:8px;align-items:flex-start;padding:9px 10px;border:1px solid var(--line);border-radius:3px;margin-bottom:8px;background:var(--soft);cursor:grab;touch-action:pan-y}
  .tray-item:hover{border-color:var(--ink35);background:var(--card)}
  /* The label that follows the pointer while a task is being dragged. It must
     not be called .ghost: that also matches .btn.ghost, which would hand every
     Cancel and Close button position:fixed and pointer-events:none. */
  .draglabel{position:fixed;z-index:90;pointer-events:none;background:var(--accent);color:var(--accent-ink);padding:7px 11px;border-radius:3px;font-size:13px;font-weight:600;opacity:.96}

  /* ---------- month ---------- */
  .month{display:grid;grid-template-columns:repeat(7,1fr);border:1px solid var(--line);border-radius:var(--r);overflow:hidden;background:var(--line);gap:1px}
  .dow{background:var(--surface);padding:8px 10px;font-size:11px;font-weight:600;color:var(--ink35);text-transform:uppercase;letter-spacing:.08em}
  .cell{background:var(--card);min-height:104px;padding:7px 8px;text-align:left;border:0;display:block;transition:background .12s}
  .cell:hover{background:var(--soft)}
  .cell{min-width:0}
  .cell .dnum{font-size:12.5px;font-weight:600;color:var(--ink60);font-family:"DM Mono",monospace}
  .cell.out{background:var(--soft)}
  .cell.out .dnum{color:var(--ink35);opacity:.6}
  .cell.today .dnum{background:var(--accent);color:var(--accent-ink);border-radius:2px;padding:1px 6px;display:inline-block}
  .ev{display:flex;align-items:center;gap:5px;margin-top:4px;font-size:11.5px;line-height:1.25}
  .ev .dot{width:7px;height:7px;border-radius:99px;flex:none}
  .ev .evt{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  /* ticked off: still there, visibly behind you */
  .ev .tick{width:9px;height:9px;border-radius:0;background:none;color:var(--ink35)}
  .ev.done{opacity:.6}
  .ev.done .evt{text-decoration:line-through;color:var(--ink35)}
  .pill.done{opacity:.6}
  .pill.done b{text-decoration:line-through;color:var(--ink35)}
  .legend{display:flex;gap:14px;flex-wrap:wrap;font-size:12px;color:var(--ink60)}
  .legend i{width:9px;height:9px;border-radius:99px;display:inline-block;margin-right:5px}

  /* ---------- week ---------- */
  .week{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:10px}
  .daycol{min-width:0;border:1px solid var(--line);border-radius:3px;overflow:hidden;min-height:180px;display:flex;flex-direction:column}
  .daycol h4{background:var(--surface);padding:7px 9px;font-size:12px;font-weight:700;border-bottom:1px solid var(--line);font-family:"Bricolage Grotesque",sans-serif}
  .daycol h4 small{display:block;font-weight:500;color:var(--ink35);font-family:"DM Mono",monospace;font-size:10px}
  .daycol.is-today h4{background:var(--accent-soft)}
  .daycol.dropping{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
  .weektray{margin-top:16px;padding:12px;border:1.5px dashed var(--line);border-radius:var(--r);
    background:var(--soft);transition:.14s}
  .weektray.over{border-color:var(--accent);border-style:solid;background:var(--accent-soft)}
  .pill.draggable,.ev.draggable{cursor:grab;touch-action:pan-y}
  .pill.draggable:active,.ev.draggable:active{cursor:grabbing}
  .cell.dropping{background:var(--accent-soft);box-shadow:inset 0 0 0 2px var(--accent)}
  .weektray-items{display:flex;gap:8px;flex-wrap:wrap}
  .inboxrow{display:flex;align-items:center;gap:10px;padding:9px 10px;background:var(--card);
    border:1px solid var(--line);border-radius:3px;margin-bottom:7px}
  .inboxrow:last-child{margin-bottom:0}
  .inboxrow .txt{flex:1;min-width:0}
  .inboxrow .txt b{font-size:13.5px;font-weight:600;display:block;word-break:break-word}
  .inboxrow .meta{font-size:11.5px;color:var(--ink35);margin-top:1px}
  .inboxrow.done .txt b{text-decoration:line-through;color:var(--ink35)}
  .grabber{border:0;background:transparent;padding:2px 4px;color:var(--ink35);cursor:grab;
    touch-action:pan-y;display:grid;place-items:center;flex:none}
  .grabber:active{cursor:grabbing}
  .weekchip{display:inline-flex;align-items:center;gap:7px;padding:8px 12px;border:1px solid var(--line);
    background:var(--card);border-radius:99px;font-size:13px;font-weight:600;cursor:grab;touch-action:pan-y;
    max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .weekchip:hover{border-color:var(--accent)}
  .weekchip:active{cursor:grabbing}
  .daycol .inner{padding:8px;display:grid;grid-template-rows:1fr;gap:6px;flex:1;min-height:0}
  .daypills{display:grid;grid-auto-rows:min-content;gap:6px;align-content:start;min-height:0}
  .pill{border-radius:3px;padding:5px 7px;font-size:11.5px;line-height:1.3;border-left:3px solid;overflow-wrap:anywhere}
  .wkbottom{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:20px}
  @media (max-width:960px){.wkbottom{grid-template-columns:1fr}}

  /* ---------- todo ---------- */
  .todo{display:flex;align-items:center;gap:11px;padding:11px 12px;border:1px solid var(--line);border-radius:3px;margin-bottom:8px;background:var(--card);transition:.14s}
  .todo-actions{margin-left:auto;display:grid;grid-auto-flow:column;grid-auto-columns:max-content;align-items:center;gap:6px}
  .ec-actions{margin-left:auto;display:grid;grid-auto-flow:column;grid-auto-columns:max-content;align-items:center;gap:8px}
  .todo:hover{border-color:var(--ink35)}
  .check{width:21px;height:21px;flex:none;align-self:center;border-radius:2px;border:1.8px solid var(--ink35);background:var(--card);display:grid;place-items:center;transition:.14s;padding:0;line-height:0}
  .iconbtn{width:28px;height:28px;flex:none;padding:0;display:grid;place-items:center;border:0;background:transparent;color:var(--ink35);border-radius:3px;line-height:0;transition:.14s}
  .iconbtn:hover{background:var(--accent-soft);color:var(--rule)}
  .check:hover{border-color:var(--accent)}
  .check.on{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}
  .todo .txt{flex:1;min-width:0}
  .todo .txt b{font-weight:600;font-size:14px;display:block;word-break:break-word}
  .todo.done .txt b{text-decoration:line-through;color:var(--ink35)}
  .todo .meta{font-size:11.5px;color:var(--ink35);margin-top:2px}
  .carrytoggle{display:flex;align-items:flex-start;gap:10px;padding:11px 13px;margin-bottom:12px;
    border:1px solid var(--line);border-radius:3px;background:var(--soft);cursor:pointer}
  .carrytoggle input{width:16px;height:16px;margin-top:2px;flex:none}
  .carrytoggle b{font-size:13.5px;display:block}
  .carrytoggle small{display:block;color:var(--ink35);font-size:12px;margin-top:1px;line-height:1.45}
  .addbar{display:flex;gap:8px;margin-bottom:14px}
  .addwrap{flex:1;position:relative;display:flex;align-items:center}
  .addplus{position:absolute;left:13px;font-size:19px;line-height:1;font-weight:600;
    color:var(--accent);opacity:.75;pointer-events:none}
  .addbar input{flex:1;padding:12px 14px 12px 34px;border:2px dashed var(--accent);border-radius:3px;
    background:var(--accent-soft);color:var(--ink);transition:.15s}
  .addbar input::placeholder{color:var(--ink60);opacity:.9}
  .addbar input:focus{background:var(--card);border-style:solid;outline:none;
    box-shadow:0 0 0 3px var(--accent-soft)}
  .addbar.shake input{animation:nudge .45s cubic-bezier(.36,.07,.19,.97)}
  @keyframes nudge{
    10%,90%{transform:translateX(-2px)} 20%,80%{transform:translateX(4px)}
    30%,50%,70%{transform:translateX(-7px)} 40%,60%{transform:translateX(7px)}
  }
  .bar{height:6px;border-radius:99px;background:var(--surface);overflow:hidden}
  .bar i{display:block;height:100%;background:var(--accent);border-radius:99px;transition:width .3s}

  /* ---------- brag ---------- */
  .ec{cursor:default;user-select:none;display:grid;grid-template-columns:minmax(0,1fr) 230px;gap:0;border:1px solid var(--line);border-radius:var(--r);margin-bottom:12px;overflow:hidden;background:var(--card)}
  .ec .main{padding:16px 18px;min-width:0}
  .ec .side{user-select:text;background:var(--soft);border-left:1px solid var(--line);padding:14px 16px;font-size:12.5px;color:var(--ink60);line-height:1.5}
  .ec h3{font-size:17px;font-weight:700;overflow-wrap:anywhere}
  .energy{display:inline-flex;align-items:center;gap:5px;padding:5px 10px;border-radius:99px;
    font-size:12.5px;font-weight:700;border:1px solid transparent}
  .energy i{font-style:normal;font-weight:500;opacity:.65}
  .energy.sm{padding:2px 6px;font-size:11px;gap:3px}
  .energy.low{background:var(--soft);color:var(--list);border-color:var(--line)}
  .energy.near{background:var(--soft);color:var(--brag);border-color:var(--brag)}
  .energy.over{background:var(--soft);color:var(--rule);border-color:var(--rule)}
  .batt{flex:none}
  .blockenergy{display:inline-flex;align-items:center;gap:3px;margin-left:7px;font-weight:600;vertical-align:-3px}
  .cellbatt.low{color:var(--list)} .cellbatt.near{color:var(--brag)} .cellbatt.over{color:var(--rule)}
  .daycol h4 .spread{align-items:center;gap:6px}
  .metatag{font-size:11.5px;font-weight:600;padding:4px 9px;border-radius:99px;
    background:var(--soft);border:1px solid var(--line);color:var(--ink60)}
  .metatag.strong{background:var(--accent-soft);border-color:transparent;color:var(--accent)}
  .chipdiv{width:1px;height:22px;background:var(--line);margin:0 3px;display:inline-block}
  .ecdesc{margin:12px 0 0;font-size:13.5px;line-height:1.6;color:var(--ink60)}
  .counter{font-family:"DM Mono",monospace;font-size:10.5px;color:var(--ink35);font-weight:500}
  .counter.over{color:var(--rule)}
  .field > span.spread{display:flex;align-items:center;justify-content:space-between;gap:10px}
  .ec .org{color:var(--ink60);font-size:13px;margin-top:1px}
  .prio{display:inline-flex;gap:2.5px;align-items:center;flex:none}
  .prio i{width:6px;height:13px;flex:none;border-radius:2px;background:var(--line);display:block}
  .prio i.on{background:var(--brag)}
  .livedot{width:6px;height:6px;border-radius:99px;background:currentColor;display:block;flex:none}
  .avail.good{color:var(--list);display:flex;align-items:center;gap:5px}
  .navdate button svg{display:block}
  .tagline-badge{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:600;padding:3px 8px;border-radius:99px;background:var(--soft);color:var(--list);border:1px solid var(--line)}
  .tagline-badge.past{background:var(--soft);color:var(--ink60)}
  .award{display:inline-flex;align-items:center;gap:5px;font-size:12px;padding:4px 9px;border-radius:3px;background:var(--soft);color:var(--brag);border:1px solid var(--line)}

  /* ---------- lock ---------- */
  .lockgrid{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:20px;align-items:start}
  .lockgrid > *{min-width:0}
  .dial{display:grid;place-items:center;padding:14px 0 4px}
  .dial-num{font-family:"DM Mono",monospace;font-size:52px;font-weight:500;letter-spacing:-.03em}
  .presets{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
  .soundtoggle{border:1px solid var(--line);background:var(--card);border-radius:99px;padding:6px 18px;
    font-size:12.5px;font-weight:700;color:var(--ink60);margin-top:14px;transition:.14s}
  .soundtoggle:hover{border-color:var(--ink35)}
  .soundtoggle.on{background:var(--ink);border-color:var(--ink);color:var(--paper)}
  .modeswitch{display:inline-flex;gap:3px;padding:3px;background:var(--soft);border:1px solid var(--line);border-radius:3px}
  .modeswitch button{border:1px solid transparent;background:transparent;padding:7px 18px;border-radius:2px;font-weight:600;font-size:13px;color:var(--ink60)}
  .modeswitch button.on{background:var(--card);color:var(--ink);border-color:var(--line)}
  .modeswitch button:disabled{opacity:.5;cursor:not-allowed}
  .dial-num.onbreak{color:var(--list)}
  .cycledots{display:flex;gap:5px;justify-content:center;align-items:center;margin:-4px 0 14px}
  .cycledots i{width:9px;height:9px;border-radius:99px;background:var(--line);display:block}
  .cycledots i.done{background:var(--accent)}
  .cycledots i.now{background:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
  .pomofields{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:6px}
  .pomofield{display:flex;flex-direction:column;gap:5px;align-items:center}
  .pomofield span{font-size:11.5px;font-weight:500;color:var(--ink35)}
  .pomofield input{width:74px;text-align:center;padding:8px;border:1px solid var(--line);border-radius:3px;background:var(--soft);font-weight:700;font-size:15px}
  .pomofield input:disabled{opacity:.55}
  .timerbtns{display:grid;grid-auto-flow:column;grid-auto-columns:max-content;justify-content:center;
    align-items:center;gap:9px;margin-top:18px}
  .timerbtns > *{width:auto;min-width:0}
  .shield{position:fixed;inset:0;z-index:9999;background:#201718;color:#fff;display:flex;
    align-items:flex-start;justify-content:center;padding:24px;text-align:center;isolation:isolate;
    overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
  .shieldinner{margin:auto;display:flex;flex-direction:column;align-items:center;gap:6px;width:100%;max-width:620px}
  .shield .big{font-family:"DM Mono",monospace;font-size:min(19vw,120px);font-weight:500;letter-spacing:-.04em;line-height:1}
  .shield .sub{color:var(--shield-dim,#BDB6B2);max-width:420px;font-size:14px}
  .listtoggle{position:fixed;top:18px;right:18px;border:1px solid rgba(255,255,255,.25);
    background:rgba(255,255,255,.1);color:#fff;border-radius:99px;padding:8px 15px;font-weight:600;font-size:13px}
  .listtoggle:hover{background:rgba(255,255,255,.18)}
  .shieldlist{position:fixed;top:64px;right:18px;bottom:18px;width:min(320px,calc(100vw - 36px));
    background:rgba(16,19,19,.86);border:1px solid rgba(255,255,255,.14);border-radius:3px;
    padding:16px;overflow:auto;text-align:left;z-index:2}
  .shieldlist b{font-size:15px}
  .shieldnote{color:rgba(255,255,255,.55);font-size:12px;margin:0 0 12px}
  .shieldtabs{display:grid;grid-auto-flow:column;grid-auto-columns:max-content;gap:3px;padding:3px;
    background:rgba(255,255,255,.08);border-radius:3px}
  .shieldtabs button{border:0;background:transparent;color:rgba(255,255,255,.6);padding:5px 11px;
    border-radius:3px;font-size:12px;font-weight:600}
  .shieldtabs button.on{background:rgba(255,255,255,.18);color:#fff}
  .slsched{border-left:3px solid;padding:8px 0 8px 10px;margin-bottom:8px}
  .slsched .sltitle{font-size:13.5px;margin-top:1px}
  .slsched.done{opacity:.45}
  .slrow{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.08)}
  .slrow:last-child{border-bottom:0}
  .sltitle{flex:1;min-width:0;font-size:13.5px;word-break:break-word}
  .sltime{font-size:11px;color:rgba(255,255,255,.5)}
  .slrow.done .sltitle{text-decoration:line-through;opacity:.5}
  .shieldlist .check{background:transparent;border-color:rgba(255,255,255,.4)}
  .freezes{text-align:center;font-size:18px;line-height:1.2;flex:none}
  .freezes small{display:block;font-size:11px;color:var(--ink35);font-family:"DM Mono",monospace}
  .shieldbtns{display:grid;grid-auto-flow:column;grid-auto-columns:max-content;gap:10px;justify-content:center;margin-top:18px}
  .shield .btn{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.24);color:#fff}
  @media (max-width:560px){ .shieldbtns{grid-auto-flow:row} .shieldbtns .btn{width:100%;justify-content:center} }
  .shield .btn:hover{background:rgba(255,255,255,.18)}
  .roomcode{font-size:24px;font-weight:500;letter-spacing:.14em;display:block;margin-top:2px}
  .member{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:10px;
    padding:9px 10px;border:1px solid var(--line);border-radius:3px;margin-bottom:8px}
  .memberwho{min-width:0}
  .memberwho b{font-size:13.5px;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .memberwho .mono{font-size:11.5px;color:var(--ink35)}
  .memberactions{display:grid;grid-auto-flow:column;grid-auto-columns:max-content;align-items:center;gap:6px}
  .memberactions > *{position:relative;z-index:1}
  .avatar{width:32px;height:32px;border-radius:99px;display:grid;place-items:center;font-family:"Bricolage Grotesque",sans-serif;font-weight:700;font-size:14px;line-height:1;color:#fff;flex:none;overflow:hidden;text-transform:uppercase}
  .status{font-size:11px;font-weight:600;padding:2px 8px;border-radius:99px;background:var(--soft);color:var(--ink60)}
  .status.focusing{background:var(--accent-soft);color:var(--accent)}

  .toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%);background:var(--ink);color:var(--paper);padding:10px 16px;border-radius:3px;font-size:13.5px;z-index:95;animation:pop .2s}

  /* ---------- auth ---------- */
  .tutlayer{position:fixed;inset:0;z-index:8000;pointer-events:none}
  .tutdim{position:absolute;inset:0;background:rgba(22,25,27,.62);pointer-events:auto}
  .tutspot{position:absolute;border-radius:3px;pointer-events:none;transition:all .3s cubic-bezier(.3,.8,.3,1);
    box-shadow:0 0 0 9999px rgba(22,25,27,.62), 0 0 0 3px #fff, 0 0 26px 6px rgba(255,255,255,.45)}
  .tutcard{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);pointer-events:auto;
    background:var(--card);border-radius:3px;width:min(440px,calc(100vw - 32px));max-height:80vh;overflow:auto;
    padding:24px 24px 20px;text-align:center;transition:all .3s}
  .tutcard.bottom{top:auto;bottom:22px;transform:translateX(-50%)}
  .tutcard.top{top:22px;transform:translateX(-50%)}
  .estep{display:inline-flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center}
  .estep button{width:40px;height:40px;border-radius:3px;border:1px solid var(--line);background:var(--card);
    font-size:20px;font-weight:700;color:var(--ink60);padding:0;line-height:1}
  .estep button:hover{border-color:var(--accent);color:var(--ink)}
  .estep input{width:76px;text-align:center;font-family:"DM Mono",monospace;font-size:22px;
    font-weight:600;padding:8px;border:1px solid var(--line);border-radius:3px;background:var(--soft)}
  .esteprec{width:100%;font-size:11.5px;color:var(--org);font-weight:600}
  .energybtn{border:0;background:transparent;padding:0}
  .eslider{position:relative;padding:6px 0 24px}
  .eslider input{position:relative;width:100%;padding:0;z-index:1;background:transparent}
  .eband{position:absolute;top:6px;height:18px;border-radius:2px;background:var(--brag-soft);
    border:1.5px solid var(--brag-line)}
  .escale{position:relative;display:flex;justify-content:space-between;font-size:10.5px;
    color:var(--ink35);font-family:"DM Mono",monospace;margin-top:4px}
  .erec{position:absolute;transform:translateX(-50%);color:var(--org);font-weight:600;white-space:nowrap}
  .tutdots{display:flex;gap:5px;justify-content:center;margin-bottom:20px}
  .tutdots i{width:7px;height:7px;border-radius:99px;background:var(--line);display:block;transition:.2s}
  .tutdots i.done{background:var(--step);opacity:.4}
  .tutdots i.on{width:22px;background:var(--step)}
  .tutcard h2{font-size:22px;font-weight:800;margin-bottom:8px}
  .tutcard p{color:var(--ink60);font-size:14.5px;line-height:1.6;margin:0 0 18px}
  .tutbtns{display:flex;gap:9px;justify-content:center;margin-top:18px}
  .tutskip{display:block;margin:14px auto 0;border:0;background:transparent;color:var(--ink35);font-size:12.5px}
  .tutskip:hover{color:var(--ink60);text-decoration:underline}
  .streak{color:var(--brag) !important;font-weight:600}
  .streakbig{font-size:32px;line-height:1}
  .streakwrap{position:fixed;inset:0;z-index:8500;background:rgba(12,10,20,.72);display:grid;
    place-items:center;padding:20px;animation:fade .25s ease}
  .streakcard{background:var(--card);border-radius:3px;padding:32px 28px 26px;width:min(340px,100%);
    text-align:center;animation:popin .4s cubic-bezier(.2,.9,.3,1.2)}
  @keyframes popin{from{transform:scale(.82) translateY(14px);opacity:0}}
  .streakflame{font-size:72px;line-height:1;margin-bottom:6px;
    animation:flicker 2.4s ease-in-out infinite;transform-origin:50% 90%}
  @keyframes flicker{0%,100%{transform:scale(1) rotate(-1deg)}50%{transform:scale(1.07) rotate(1deg)}}
  .streakflame.frozen{animation:none;filter:drop-shadow(0 0 14px var(--watch-glow))}
  .streakflame.out{animation:goingout 2.6s ease-in forwards}
  @keyframes goingout{
    0%{transform:scale(1);opacity:1;filter:grayscale(0)}
    55%{transform:scale(.7) rotate(4deg);opacity:.75;filter:grayscale(.4)}
    100%{transform:scale(.34);opacity:.28;filter:grayscale(1)}
  }
  .streaknum{font-size:56px;font-weight:800;letter-spacing:-.04em;line-height:1}
  .streakcard.frozen .streaknum{color:var(--watch)}
  .streakcard.out .streaknum{color:var(--ink35)}
  .streakword{font-size:14px;color:var(--ink35);font-weight:500;margin-top:4px}
  .streakline{color:var(--ink60);font-size:14px;line-height:1.55;margin:14px 0 0}
  .crash{max-width:520px;margin:12vh auto;padding:28px 24px;text-align:center}
  .crash h2{font-size:22px;font-weight:800;margin-bottom:6px}
  .crash p{color:var(--ink60);font-size:14px;margin:0 0 16px}
  .crash pre{text-align:left;white-space:pre-wrap;background:var(--soft);border:1px solid var(--rule);color:var(--rule);
    border-radius:3px;padding:12px 14px;font-size:12px;margin:0 0 18px;overflow:auto;max-height:200px}
  .booting{display:flex;flex-direction:column;gap:14px;align-items:center;justify-content:center;height:100%;color:var(--ink35);padding:24px;text-align:center}
  .bootslow{max-width:380px;font-size:13px;line-height:1.55;color:var(--ink60);background:var(--soft);border:1px solid var(--line);border-radius:3px;padding:12px 14px}
  .dbwarn{position:fixed;left:50%;transform:translateX(-50%);top:10px;z-index:96;
    background:var(--card);border:1px solid var(--rule);color:var(--rule);
    font-size:12.5px;padding:8px 14px;border-radius:99px}
  .authpage{height:100%;overflow:auto;background:var(--paper);display:flex;flex-direction:column}
  .topnav{display:flex;align-items:center;justify-content:space-between;padding:16px 28px;
    border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--card);z-index:10}
  .tn-brand{display:flex;align-items:center;gap:11px}
  .tn-brand b{font-family:"Bricolage Grotesque",sans-serif;font-weight:800;font-size:26px;letter-spacing:-.03em}
  .beta{font-family:"DM Mono",monospace;font-size:11px;color:var(--ink35);
    font-weight:400;text-transform:lowercase;letter-spacing:.01em;align-self:center}
  .tn-actions{display:flex;gap:6px}
  .tn-link{border:0;background:transparent;padding:8px 14px;border-radius:3px;font-weight:600;font-size:14px;color:var(--ink60)}
  .tn-link:hover{background:var(--soft);color:var(--ink)}
  .tn-link.on{color:var(--org)}

  .authwrap{flex:1;display:flex;min-height:0}
  .authleft{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
    padding:48px 30px;background:var(--paper)}
  .lead{text-align:center;margin-bottom:24px}
  .leadmark{display:flex;align-items:center;justify-content:center;gap:14px}
  .leadmark b{font-family:"Bricolage Grotesque",sans-serif;font-weight:800;font-size:40px;letter-spacing:-.035em}

  .authcard{width:min(408px,100%);background:var(--card);border:1px solid var(--line);
    border-radius:3px;overflow:hidden}
  .cardbody{padding:30px 30px 26px}
  .cardbody h2{font-size:25px;font-weight:800;letter-spacing:-.024em}
  .csub{color:var(--ink60);font-size:14px;margin:7px 0 22px;line-height:1.5}
  .cmail{font-size:14.5px;margin:-16px 0 20px;display:flex;align-items:center;gap:7px}
  .editmail{border:0;background:transparent;color:var(--org);font-size:14px;padding:2px 5px;border-radius:2px}
  .editmail:hover{background:var(--accent-soft)}
  .lastused{text-align:right;font-size:12px;color:var(--ink35);margin-bottom:5px}
  .gslot{display:flex;justify-content:center;min-height:44px}
  .gbtn{width:100%;display:flex;align-items:center;justify-content:center;gap:11px;padding:11px;
    border:1px solid var(--line);background:var(--card);border-radius:999px;font-weight:500;
    font-size:14.5px;transition:.14s}
  .abtn{color:var(--ink)}
  .gbtn:hover{background:var(--soft);border-color:var(--ink35)}
  .or{display:flex;align-items:center;gap:14px;margin:18px 0;color:var(--ink35);font-size:12px}
  .or::before,.or::after{content:"";height:1px;background:var(--line);flex:1}
  .flabel{display:block;font-size:13.5px;font-weight:600;margin:0 0 7px}
  .finput{width:100%;padding:11px 13px;border:1px solid var(--line);border-radius:2px;
    background:var(--card);margin-bottom:16px;transition:.14s}
  .finput::placeholder{color:var(--ink35)}
  .finput:focus{border-color:var(--ink);outline:none;box-shadow:0 0 0 3px var(--accent-soft)}
  .pillbtn{width:100%;display:flex;align-items:center;justify-content:center;gap:9px;padding:13px;
    border:0;border-radius:999px;background:var(--ink);color:var(--paper);font-weight:500;
    font-size:15px;margin-top:6px;transition:.14s}
  .pillbtn:hover{opacity:.88}
  .pillbtn:disabled{opacity:.4;cursor:not-allowed}
  .pillbtn span{opacity:.7;font-size:12px}
  .undertext{display:block;width:100%;margin-top:14px;border:0;background:transparent;
    color:var(--ink60);font-weight:500;font-size:14.5px;padding:6px}
  .undertext:hover{text-decoration:underline}
  .cardfoot{border-top:1px solid var(--line);background:var(--soft);padding:16px;text-align:center;
    font-size:14px;color:var(--ink60)}
  .cardfoot button{border:0;background:transparent;color:var(--ink);font-weight:600;padding:0 2px;
    text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:2px}

  .otp{display:flex;gap:10px;justify-content:center;margin:22px 0 14px}
  .otpbox{width:52px;height:60px;text-align:center;font-family:"DM Mono",monospace;
    font-size:23px;border:1px solid var(--line);border-radius:2px;background:var(--card);transition:.14s}
  .otpbox:focus{border-color:var(--ink);outline:none;box-shadow:0 0 0 3px var(--accent-soft)}
  .resend{display:block;width:100%;border:0;background:transparent;color:var(--ink60);font-size:14px;padding:6px;margin-bottom:14px}
  .resend:hover:not(:disabled){text-decoration:underline}
  .resend:disabled{color:var(--ink35);cursor:default}

  .formerr{background:var(--rule-soft);border-left:3px solid var(--rule);color:var(--rule);
    padding:9px 12px;border-radius:0 2px 2px 0;font-size:13px;margin:0 0 14px}
  .softwarn{font-size:12.5px;color:var(--rule);background:var(--rule-soft);
    border-left:3px solid var(--rule);border-radius:0 2px 2px 0;padding:8px 11px;margin-top:8px;line-height:1.45}
  .formnote{background:var(--list-soft);border-left:3px solid var(--list);color:var(--list);
    padding:9px 12px;border-radius:0 2px 2px 0;font-size:13px;margin:0 0 14px}
  .verifybox{background:var(--soft);border:1px solid var(--line);border-radius:2px;
    padding:20px;margin:4px 0 18px}
  .verifybox p{margin:0;color:var(--ink60);font-size:13.5px;line-height:1.55}
  .spamwarn{background:var(--brag-soft);border-left:3px solid var(--brag);border-radius:0 2px 2px 0;
    padding:11px 14px;font-size:12.5px;color:var(--brag);line-height:1.55;margin:0 0 16px;text-align:left}
  .spamwarn b{display:block;margin-bottom:2px}
  .avail{font-size:12px;font-weight:600;margin:-10px 0 14px;min-height:16px}
  .avail.good{color:var(--list)}
  .avail.bad{color:var(--rule)}
  .avail.hint{color:var(--ink35);font-weight:500}
  .forgot{display:block;margin:-6px 0 16px auto;border:0;background:transparent;color:var(--ink60);
    font-size:13px;font-weight:500;padding:4px}
  .forgot:hover{text-decoration:underline}
  .demo{background:var(--soft);border:1px solid var(--line);border-radius:2px;padding:12px 14px;
    font-size:12.5px;color:var(--ink60);line-height:1.55;text-align:center}
  .demo b{display:block;margin-bottom:3px;color:var(--ink)}
  .demo-code{font-family:"DM Mono",monospace;font-size:18px;letter-spacing:.14em;color:var(--ink)}
  code{font-family:"DM Mono",monospace;font-size:11.5px;background:var(--soft);
    border:1px solid var(--line);padding:1px 5px;border-radius:3px}
  .pwwrap{position:relative}
  .peek{position:absolute;right:7px;top:21px;transform:translateY(-50%);border:0;background:transparent;
    font-size:12.5px;font-weight:500;color:var(--ink60);padding:5px 8px;border-radius:2px}
  .peek:hover{background:var(--soft);color:var(--ink)}
  .strength{display:flex;align-items:center;gap:10px;margin:-8px 0 16px;font-size:12px;color:var(--ink60)}
  .sbar{display:flex;gap:3px;flex:1}
  .sbar i{height:3px;flex:1;background:var(--line)}
  .sbar i.on{background:var(--brag)}
  .sbar i.on.s3,.sbar i.on.s4{background:var(--list)}
  .ok{color:var(--list);font-weight:700}
  .consent{display:grid;gap:10px;margin:4px 0 16px;text-align:left}
  .consent label{display:flex;align-items:flex-start;gap:9px;font-size:12.5px;color:var(--ink60);line-height:1.5}
  .consent input{width:16px;height:16px;margin-top:1px;flex:none}
  .inlink{border:0;background:transparent;padding:0;color:var(--ink);font-weight:500;
    font-size:12.5px;text-decoration:underline}
  .fineprint{font-size:11.5px;color:var(--ink35);line-height:1.55;margin:20px auto 0;max-width:404px}
  .gnote{background:var(--soft);border-left:3px solid var(--accent);border-radius:0 2px 2px 0;
    padding:11px 13px;font-size:12.5px;color:var(--ink60);line-height:1.55;text-align:left}
  .gnote b{display:block;color:var(--ink);font-size:13px;margin-bottom:3px}

  .rank{display:inline-block;min-width:19px;font-family:"DM Mono",monospace;font-size:11px;
    color:var(--ink35);margin-right:8px}

  .rail-bottom{margin-top:auto;display:flex;flex-direction:column;gap:6px}
  .rail-bottom .tab{margin-bottom:2px}
  .rail-account{display:flex;align-items:center;gap:9px;padding:9px 10px;border-radius:3px;border-top:1px solid var(--line);margin-top:4px;padding-top:12px}
  .rail-account:hover{background:var(--soft)}
  .rail-account .who{flex:1;min-width:0}
  .rail-account .who b{display:block;font-size:13px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .rail-account .who small{display:block;font-size:10.5px;color:var(--ink35);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .rail-foot{margin-top:0;padding:4px 12px 12px;font-size:11.5px;color:var(--ink35);line-height:1.5}
  .resetlink{display:block;margin-top:8px;border:0;background:transparent;padding:0;font-size:11.5px;color:var(--ink35);text-decoration:underline}
  .resetlink:hover{color:var(--rule)}

  @media (max-width:1000px){
    .authleft{padding:34px 22px}
  }
  @media (max-width:560px){
    /* the block editor has to fit without a long scroll */
    .modal .grid2{grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:9px}
    .modal .field{margin-bottom:12px}
    .modal .field > span{font-size:12.5px}
    .modal input,.modal select,.modal textarea{padding:9px 11px}
    .modal .row .chip{padding:6px 11px;font-size:12.5px}
    .daypicks{gap:5px}
    .daypick{width:calc((100% - 30px)/7);height:34px;font-size:12px}
    .blockcolors{gap:6px}
    .modal textarea{min-height:60px}
  }
  @media (max-width:520px){
    .topnav{padding:13px 16px}
    .cardbody{padding:24px 20px 22px}
    .otp{gap:7px}
    .otpbox{width:44px;height:54px;font-size:21px}
  }
  @media (max-width:720px){
    .rail-account{padding:9px 10px}
  }


  /* ---------- settings ---------- */
  .rolecard{display:flex;align-items:flex-start;gap:13px;width:100%;text-align:left;padding:15px;
    border:1.5px solid var(--line);background:var(--card);border-radius:3px;margin-bottom:10px;transition:.14s}
  .rolecard:hover{border-color:var(--ink35)}
  .rolecard.on{border-color:var(--org);box-shadow:0 0 0 3px var(--accent-soft)}
  .rolecard b{display:block;font-size:15px}
  .rolecard small{display:block;color:var(--ink35);font-size:12.5px;margin-top:2px;line-height:1.45}
  /* The scope question that appears once the baseline stepper has been moved. */
  .basescope{margin-top:16px;padding-top:15px;border-top:1px dashed var(--line)}
  .basescope .rolecard{padding:12px 13px}
  /* ---- theme picker: a stack of rows, each showing its own real colours ---- */
  .themelist{display:grid;gap:0;border:1px solid var(--line);border-radius:3px;overflow:hidden}
  .themerow{display:flex;align-items:center;gap:13px;width:100%;text-align:left;border:0;
    border-bottom:1px solid var(--line);background:var(--card);padding:11px 13px;transition:background .14s}
  .themerow:last-child{border-bottom:0}
  .themerow:hover{background:var(--soft)}
  .themerow.on{background:var(--soft)}
  .themerow.on .themename b{color:var(--ink)}
  .themeswatch{display:flex;flex:none;border:1px solid var(--line);border-radius:2px;overflow:hidden}
  .themeswatch i{display:block;width:17px;height:30px}
  .themename{flex:1;min-width:0}
  .themename b{display:block;font-size:14.5px;font-weight:600;letter-spacing:-.01em}
  .themename small{display:block;font-size:12px;color:var(--ink35);margin-top:1px}
  .thememark{flex:none;width:18px;color:var(--accent);display:grid;place-items:center}
  .colorrow{display:flex;align-items:center;justify-content:space-between;padding:9px 0;
    border-bottom:1px solid var(--line);font-size:14px;font-weight:500}
  .colorrow:last-of-type{border-bottom:0}
  .colorrow input[type=color]{width:44px;height:28px;padding:0;border:1px solid var(--line);
    border-radius:3px;background:none;cursor:pointer}
  .respaper{background:#fff;border:1px solid var(--line);border-radius:3px;padding:18px 18px 12px;
    color:#111;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;max-height:330px;overflow:auto}
  .rhead{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;padding-bottom:10px}
  .rhead h2{font-size:19px;font-weight:800;text-transform:uppercase;margin:0;line-height:1;color:#111}
  .rcontact{text-align:right;font-size:9.5px;line-height:1.6;color:#333;white-space:nowrap}
  .rsec{border-top:2px solid #111;padding:8px 0 2px}
  .rsec h3{font-size:12px;font-weight:800;text-transform:uppercase;margin:0 0 6px;padding-left:8px;color:#111}
  .rart{padding-left:8px;margin-bottom:9px}
  .rwhen{font-size:8.5px;color:#444}
  .rwhat{font-size:11.5px;font-weight:700;color:#111}
  .rwhere{font-size:9.5px;color:#222}
  .rnote{font-size:8.5px;color:#444;margin-top:1px}
  .respaper ul{margin:3px 0 0;padding-left:14px}
  .respaper li{font-size:9px;color:#222;margin-bottom:1px}
  .redu{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px;padding-left:8px;margin-bottom:7px}
  .pickhead{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:10px;margin-bottom:6px}
  .pickhead b{font-size:13.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .pickrow{display:flex;align-items:flex-start;gap:10px;padding:7px 0;cursor:pointer}
  .pickrow input{width:16px;height:16px;margin-top:2px;flex:none}
  .pickrow b{font-size:13.5px;font-weight:600;display:block}
  .pickrow small{display:block;color:var(--ink35);font-size:12px;margin-top:1px}
  .respreview{white-space:pre-wrap;font-family:"DM Mono",monospace;font-size:11.5px;line-height:1.6;
    background:var(--soft);border:1px solid var(--line);border-radius:3px;padding:14px;margin:0;
    max-height:280px;overflow:auto;color:var(--ink60)}
  .childrow{display:flex;align-items:center;gap:12px;padding:12px;border:1px solid var(--line);
    border-radius:3px;margin-bottom:8px;background:var(--card)}
  .childrow.on{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
  .childrow .txt{flex:1;min-width:0}
  .childrow b{font-size:14.5px}
  .childrow .meta{font-size:12px;color:var(--ink35);margin-top:1px}
  .viewonly .btn{vertical-align:middle}
  .linkbanner{margin-top:14px;display:flex;align-items:center;justify-content:space-between;gap:12px;
    flex-wrap:wrap;background:var(--soft);border:1px solid var(--line);color:var(--ink);border-radius:3px;
    padding:9px 10px 9px 13px;font-size:13px;font-weight:600}
  .tabcount{position:absolute;top:9px;right:9px;min-width:17px;height:17px;padding:0 4px;border-radius:99px;
    background:var(--rule);color:#fff;font-size:10.5px;font-weight:700;font-style:normal;display:grid;
    place-items:center;line-height:1}
  .reportgrid{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:22px;align-items:start}
  @media (max-width:1000px){.reportgrid{grid-template-columns:1fr}}
  .chartrow{display:flex;align-items:flex-end;gap:10px;height:150px}
  .chartrow.dense{gap:3px}
  .chartrow.dense .chartbar{grid-template-rows:0 1fr 16px}
  .chartrow.dense .chartbar span{font-size:9px;white-space:nowrap;overflow:visible}
  .chartbar{display:grid;grid-template-rows:16px 1fr 18px;align-items:end;justify-items:center;
    gap:5px;flex:1;height:100%}
  .chartbar.today i{opacity:1;box-shadow:0 0 0 3px var(--accent-soft)}
  .chartbar b{font-size:10.5px;color:var(--ink35);font-weight:500}
  .chartbar i{width:100%;max-width:34px;border-radius:2px 2px 2px 2px;background:var(--accent);opacity:.75;display:block;align-self:end}
  .chartbar span{font-size:11px;color:var(--ink35);align-self:center}
  .histrow{display:flex;align-items:flex-end;gap:10px;margin-bottom:18px;padding:12px;
    border:1px solid var(--line);border-radius:3px;background:var(--soft)}
  .histbar{display:grid;grid-template-rows:1fr 16px;align-items:end;justify-items:center;gap:6px;flex:1}
  .histbar i{width:100%;max-width:26px;border-radius:2px 2px 2px 2px;background:var(--accent);opacity:.75;display:block}
  .histbar span{font-size:10.5px;color:var(--ink35)}
  .nowcard{display:flex;align-items:center;gap:12px;padding:13px 15px;border:1px solid var(--line);
    border-radius:3px;background:var(--soft);margin-bottom:14px}
  .nowcard b{font-size:14px}
  .nowdot{width:10px;height:10px;border-radius:99px;background:var(--line);flex:none}
  .nowdot.on{background:var(--list);box-shadow:0 0 0 4px var(--accent-soft)}
  .reqcard{border:1px solid var(--line);border-left:3px solid var(--accent);border-radius:3px;
    padding:14px;margin-bottom:10px;background:var(--soft)}
  .newsitem{display:flex;gap:12px;padding:14px 0;border-bottom:1px solid var(--line)}
  .newsitem:last-child{border-bottom:0}
  .newstag{font-family:"DM Mono",monospace;font-size:10.5px;text-transform:lowercase;
    padding:2px 7px;border-radius:3px;background:var(--soft);border:1px solid var(--line);color:var(--ink60)}
  .newsitem.fresh .newstag{background:var(--accent-soft);border-color:transparent;color:var(--accent)}
  .tabdot{position:absolute;top:11px;right:11px;width:8px;height:8px;border-radius:99px;background:var(--rule)}
  .viewonly{margin-top:14px;background:var(--soft);border:1px solid var(--watch);color:var(--watch);
    border-radius:3px;padding:9px 13px;font-size:12.5px;font-weight:600}
  .readonly .btn.primary,.readonly .addbar,.readonly .iconbtn,
  .readonly .ec-actions .btn,.readonly .todo-actions .btn,.readonly .tray-item .btn,
  .readonly .anchor,.readonly .reactbar{display:none !important}
  .readonly .check{pointer-events:none;opacity:.55}
  .readonly .block,.readonly .tray-item,.readonly .cell{cursor:default}
  .setblock{margin-bottom:26px}
  .sethint{color:var(--ink60);font-size:13px;margin:6px 0 10px}
  .setblock .eyebrow{margin-bottom:8px}
  .switchrow{display:flex;align-items:center;justify-content:space-between;gap:14px;cursor:pointer}
  .switchrow b{display:block;font-size:14px}
  .switchrow small{display:block;color:var(--ink35);font-size:12px;margin-top:2px}
  .switchrow input{width:18px;height:18px;flex:none}
  .lockednote{background:var(--soft);border:1px solid var(--line);border-radius:3px;padding:12px 14px;font-size:13px;color:var(--ink60);line-height:1.55}
  .legalrow{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 0;border-bottom:1px solid var(--line)}
  .legalrow:last-child{border-bottom:0}
  .legalrow b{font-size:14px}
  .legalrow small{display:block;color:var(--ink35);font-size:12px;margin-top:2px}
  /* ---- calendar feed panel, under the monthly calendar ---- */
  .cvpanel{border:1px solid var(--line);border-radius:3px;background:var(--card);overflow:hidden}
  .cvhead{display:flex;align-items:center;gap:12px;width:100%;text-align:left;border:0;
    background:transparent;padding:13px 14px}
  .cvhead:hover{background:var(--soft)}
  .cvrule{width:3px;height:30px;border-radius:2px;background:var(--org);flex:none}
  .cvtitle{flex:1;min-width:0}
  .cvtitle b{display:block;font-size:14.5px;font-weight:600;letter-spacing:-.01em}
  .cvtitle small{display:block;font-size:12.5px;color:var(--ink35);margin-top:1px}
  .cvchev{flex:none;color:var(--ink35);display:grid;place-items:center}
  .cvbody{border-top:1px solid var(--line);padding:15px 14px 16px}
  .cvlist{list-style:none;margin:0 0 14px;padding:0;border:1px solid var(--line);border-radius:3px}
  .cvlist li{display:flex;align-items:center;gap:12px;flex-wrap:wrap;
    padding:11px 12px;border-bottom:1px solid var(--line)}
  .cvlist li:last-child{border-bottom:0}
  .cvinfo{flex:1;min-width:0}
  .cvinfo b{display:block;font-size:13.5px;font-weight:600;overflow:hidden;
    text-overflow:ellipsis;white-space:nowrap}
  .cvinfo small{display:block;font-size:11.5px;color:var(--ink35);margin-top:1px}
  .cvbtns{display:flex;gap:7px;flex:none}
  .cvadd{border-top:1px solid var(--line);padding-top:14px;margin-top:2px}
  .cvlist + .cvadd{margin-top:0}
  /* The feeds keep themselves current, so this line reports; it does not ask. */
  .cvstatus{display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin:0 0 14px}
  .cvstate{flex:1;min-width:180px;font-size:12.5px;color:var(--ink35)}
  .cvdot{flex:none;width:7px;height:7px;border-radius:99px;background:var(--line)}
  .cvdot.on{background:var(--accent);animation:cvpulse 1.1s ease-in-out infinite}
  @keyframes cvpulse{0%,100%{opacity:.35}50%{opacity:1}}
  @media (prefers-reduced-motion: reduce){ .cvdot.on{animation:none;opacity:1} }
  .cvsteps{margin:0 0 14px;font-size:13px;color:var(--ink60);line-height:1.6;max-width:62ch}
  .cvsteps b{color:var(--ink)}
  /* where to find a feed: the three places students actually have one */
  .cvwhere{margin:0 0 16px;padding:0;max-width:62ch;
    display:grid;grid-template-columns:auto 1fr;gap:4px 14px;align-items:baseline}
  .cvwhere dt{font-size:12px;font-weight:700;color:var(--ink);white-space:nowrap}
  .cvwhere dd{margin:0;font-size:12.5px;color:var(--ink35);line-height:1.5}
  .cvwhere dd b{color:var(--ink60);font-weight:600}
  @media(max-width:520px){
    .cvwhere{grid-template-columns:1fr;gap:1px}
    .cvwhere dd{margin-bottom:9px}
  }
  .cvfine{margin:12px 0 0;font-size:12px;color:var(--ink35);line-height:1.55;max-width:62ch}

  .legaldoc{font-size:13.5px;line-height:1.65;color:var(--ink60)}
  .legaldoc h4{font-family:"Bricolage Grotesque",sans-serif;font-size:14.5px;color:var(--ink);margin:20px 0 5px}
  .legaldoc h4:first-of-type{margin-top:12px}
  .legaldoc p{margin:0 0 8px;max-width:68ch}
  .legaldoc p:last-child{margin-bottom:0}
  .legaldate{font-family:"DM Mono",monospace;font-size:12px;color:var(--ink35);
    padding-bottom:12px;border-bottom:1px solid var(--line)}
  .legaldoc ul{margin:0 0 10px;padding-left:18px}
  .legaldoc li{margin-bottom:3px}
  .plans{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:14px}
  .plan{border:1px solid var(--line);border-radius:var(--r);padding:20px 18px;background:var(--card);position:relative}
  .plan.best{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
  .planflag{position:absolute;top:-10px;left:18px;background:var(--accent);color:var(--accent-ink);
    font-size:10.5px;font-weight:700;padding:3px 9px;border-radius:99px;letter-spacing:.04em}
  .planname{font-size:13px;color:var(--ink35);font-weight:500}
  .planprice{font-size:30px;font-weight:800;letter-spacing:-.03em;margin:4px 0 12px}
  .planprice small{font-size:13px;font-weight:500;color:var(--ink35)}
  .plan ul{list-style:none;padding:0;margin:0 0 16px;font-size:13px;color:var(--ink60)}
  .plan li{padding:5px 0 5px 18px;position:relative;line-height:1.45}
  .plan li::before{content:"";position:absolute;left:2px;top:12px;width:8px;height:4px;
    border-left:2px solid var(--accent);border-bottom:2px solid var(--accent);transform:rotate(-45deg)}
  .planalt{margin-top:12px;padding-top:12px;border-top:1px solid var(--line);font-size:12.5px;color:var(--ink60)}
  .procard{border:1px solid var(--line);border-radius:var(--r);padding:22px;background:var(--card)}
  .prohead{display:flex;align-items:flex-start;justify-content:space-between;gap:14px;margin-bottom:16px}
  .prohead h3{font-family:"Bricolage Grotesque",sans-serif;font-size:22px;font-weight:800;margin-top:2px}
  .proprice{font-family:"Bricolage Grotesque",sans-serif;font-size:26px;font-weight:800}
  .proprice small{font-size:13px;font-weight:500;color:var(--ink35)}
  .prolist{list-style:none;padding:0;margin:0 0 20px;font-size:14px;color:var(--ink60)}
  .prolist li{padding:7px 0 7px 24px;position:relative;line-height:1.5}
  .prolist li::before{content:"";position:absolute;left:2px;top:15px;width:9px;height:5px;
    border-left:2px solid var(--accent);border-bottom:2px solid var(--accent);transform:rotate(-45deg)}
  a.btn.wide{text-decoration:none}


  /* ---------- avatar + study seats ---------- */
  .initial{border-radius:99px;display:grid;place-items:center;flex:none;color:#fff;
    font-family:"Bricolage Grotesque",sans-serif;font-weight:700;line-height:1;text-transform:uppercase}
  .railav{border:1px solid var(--line)}
  .seatinitial{width:100%;height:100%;display:grid;place-items:center;color:#fff;
    font-family:"Bricolage Grotesque",sans-serif;font-weight:800;font-size:38px;text-transform:uppercase}
  .seats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:26px 0 4px;width:min(560px,92vw)}
  .seat{position:relative;aspect-ratio:1;border-radius:3px;overflow:hidden;
    background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14)}
  .seatmedia{position:absolute;inset:0}
  .seatname{position:absolute;left:0;right:0;bottom:0;padding:22px 8px 8px;text-align:center;
    font-size:12px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
    background:linear-gradient(transparent,rgba(0,0,0,.6))}
  .seat.live{border-color:rgba(255,255,255,.45)}
  .seat.me{outline:2px solid rgba(255,255,255,.55);outline-offset:-2px}
  .seat.empty{display:grid;place-items:center;color:rgba(255,255,255,.35);font-size:11.5px;
    letter-spacing:.1em;text-transform:uppercase;border-style:dashed;aspect-ratio:1}
  .seatvid{width:100%;height:100%;object-fit:cover;background:#000;display:block}
  .seatvid.mirror{transform:scaleX(-1)}
  .seatnote{position:absolute;top:8px;left:50%;transform:translateX(-50%);font-size:10px;
    letter-spacing:.06em;padding:3px 8px;border-radius:99px;background:rgba(0,0,0,.5);white-space:nowrap}
  .burst{position:absolute;left:50%;bottom:30%;font-family:"Bricolage Grotesque",sans-serif;font-weight:700;
    font-size:17px;letter-spacing:-.01em;line-height:1;pointer-events:none;color:#fff;
    animation:floatup 2.2s cubic-bezier(.2,.7,.3,1) forwards}
  @keyframes floatup{
    0%{transform:translate(-50%,8px);opacity:0}
    16%{transform:translate(-50%,-2px);opacity:1}
    100%{transform:translate(-50%,-74px);opacity:0}
  }
  .reactbar{display:grid;grid-auto-flow:column;grid-auto-columns:max-content;gap:8px;justify-content:center;margin-top:22px}
  .reactbar button{padding:8px 18px;border-radius:999px;border:1px solid rgba(255,255,255,.26);
    background:rgba(255,255,255,.08);color:#fff;font-size:13px;font-weight:500;transition:.14s}
  .reactbar button:hover{background:rgba(255,255,255,.17)}
  .reactbar button:active{transform:scale(.96)}
  @media (max-width:560px){
    .seats{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
    .seatname{font-size:11px;padding:18px 6px 6px}
  }

  /* ---------- dark theme ---------- */
  /* The palette tokens carry both modes, so there is almost nothing left to
     override here. These are the rules where dark is a different decision,
     not a different colour: a translucent white hover needs a dark surface
     under it, and the month grid inverts which side the hairline sits on. */
  [data-theme="dark"] .pill{background:var(--soft) !important;color:var(--ink60)}
  [data-theme="dark"] .asleep{background:repeating-linear-gradient(135deg,
    var(--paper),var(--paper) 6px,var(--soft) 6px,var(--soft) 12px)}
  [data-theme="dark"] .respaper,[data-theme="dark"] .respaper *{color-scheme:light}

  @media (max-width:960px){
    .sched-wrap,.lockgrid{grid-template-columns:1fr}
    .ec{grid-template-columns:1fr}
    .ec .side{border-left:0;border-top:1px solid var(--line)}
    .week{grid-template-columns:repeat(2,minmax(0,1fr))}
  }
  /* Netlify's deploy badge, if the plan adds one. Hidden on every screen. */
  [id*="netlify" i], [class*="netlify" i], .netlify-badge, #netlify-badge,
  a[href*="netlify.com/?utm"], div[data-netlify-badge]{display:none !important}
  /* sits above the home indicator, out of the way of the schedule */
  .fab{position:fixed;right:18px;bottom:calc(18px + env(safe-area-inset-bottom,0px));z-index:60;
    width:58px;height:58px;border-radius:50%;border:0;background:var(--accent);color:var(--accent-ink);
    font-size:32px;font-weight:300;line-height:1;padding:0 0 4px;
    transition:.14s}
  .fab:active{transform:scale(.94)}
  .menubtn{display:none}
  @media (max-width:720px){
    /* the rail slides away entirely, so the planner gets the whole screen */
    .rail{position:fixed;left:0;top:0;bottom:0;width:216px;padding:16px 0 16px 12px;z-index:70;
      background:var(--surface);transform:translateX(-102%);transition:transform .25s cubic-bezier(.3,.8,.3,1);
      box-shadow:none}
    .railopen .rail{transform:none;border-right:1px solid var(--line)}
    .railscrim{position:fixed;inset:0;z-index:65;background:rgba(22,25,27,.45);animation:fade .2s ease}
    .pane{border:0}
    .menubtn{display:grid;place-items:center;position:fixed;left:10px;top:10px;z-index:80;
      width:38px;height:38px;border-radius:3px;border:1px solid var(--line);background:var(--card);
      color:var(--ink)}
    /* the menu button sits over the top-left corner, so the section name
       steps aside for it while everything below keeps the left margin */
    .title-wrap{padding-left:46px;min-height:38px;align-items:center}
    /* the wordmark goes; the mark alone is enough at this size */
    .brand b{display:none}
    .brand{justify-content:flex-start;padding:2px 0 14px 4px}
    .brand .logomark{width:52px !important;height:52px !important}
    /* page subtitles and section hints are noise on a small screen */
    .tagline,.sethint{display:none}
    .pane-head{padding:16px 14px 0}
    .pane-body{padding:14px 14px 40px}
    h1{font-size:23px}
    .month .cell{min-height:74px}
    .week{grid-template-columns:1fr}
    .navdate .cur{min-width:110px;font-size:12.5px}
  }
  @media (max-width:560px){
    .modal-foot,.timerbtns{grid-auto-flow:row;grid-auto-columns:auto;justify-content:stretch}
    .modal-foot > *,.timerbtns > *{width:100%;justify-content:center}
    :root{--gut:46px}
    .pane-head{padding:14px 12px 0}
    .title-wrap{padding-left:48px}
    .dayhead{padding-bottom:10px}
    .pane-body{--panepad:12px;padding:var(--panepad) 12px 40px}
    .pane{border-radius:3px 0 0 3px}
    .grid2{grid-template-columns:minmax(0,1fr)}
    /* but times and dates stay paired in a dialog, so the editor stays short */
    .modal .grid2{grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:9px}
    .modal-body{padding:14px 16px}
    .modal-head{padding:16px 16px 0}
    .modal-foot{padding:0 16px 16px}
    .hourrow .h{font-size:10px;padding:4px 6px 0}
    .cell{min-height:66px;padding:5px 5px}
    .cell .ev{font-size:10px;gap:3px;margin-top:3px}
    .cell .dnum{font-size:11px}
    .dow{padding:6px 5px;font-size:10px}
    .dial-num{font-size:44px}
    .spread{gap:10px}
    .navdate .cur{min-width:96px}
    h1{font-size:21px}
    .ec .side{padding:12px 14px}
  }
  /* ================= LANDING PAGE ================= */
  .lpage{min-height:100%;background:var(--paper);position:relative}
  .lpage main{display:block;position:relative;z-index:1}
  .anchorpoint{position:relative;top:-70px}
  .sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
  .lhero,.lopen,.lall,.ldemo,.lfeat,.lmerge,.ldevices,.lteam,.lsup,.lend{
    max-width:1140px;margin:0 auto;padding:0 32px}
  .lpage h2{font-size:clamp(25px,3.2vw,40px);line-height:1.08;letter-spacing:-.028em;max-width:010ch;max-width:21ch}
  .lpage h3{font-size:17px;letter-spacing:-.014em}
  /* the swipe behind a planner heading reads as clutter at marketing sizes */
  .lpage h1::after,.startpage h1::after{content:none}

  /* reveal on scroll, collapsed when motion is unwelcome */
  .reveal{opacity:0;transform:translateY(18px);transition:opacity .62s cubic-bezier(.2,.7,.3,1),transform .62s cubic-bezier(.2,.7,.3,1)}
  .reveal.in{opacity:1;transform:none}

  /* ---- stationery drifting behind everything ---- */
  .stationery{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden;color:var(--ink)}
  .stationery svg{position:absolute;opacity:.085;will-change:transform}
  .st-pad{width:300px;top:96vh;left:-70px;transform:rotate(-11deg);animation:drift1 26s ease-in-out infinite alternate}
  .st-pencil{width:88px;top:188vh;right:-18px;transform:rotate(16deg);animation:drift2 31s ease-in-out infinite alternate}
  .st-clip{width:150px;top:292vh;left:58%;transform:rotate(-24deg);animation:drift3 24s ease-in-out infinite alternate}
  @keyframes drift1{to{transform:rotate(-7deg) translate(26px,-30px)}}
  @keyframes drift2{to{transform:rotate(10deg) translate(-22px,34px)}}
  @keyframes drift3{to{transform:rotate(-19deg) translate(18px,-26px)}}

  /* ---- nav, pinned ---- */
  .lnav{position:sticky;top:0;z-index:50;display:flex;align-items:center;gap:22px;
    padding:12px 32px;background:transparent;border-bottom:1px solid transparent;
    transition:background .25s ease,border-color .25s ease}
  .lnav.solid{background:var(--paper);border-bottom-color:var(--line)}
  .lnav-brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:inherit;
    flex:none;border:0;background:transparent;padding:0}
  .lnav-brand b{font-family:"Bricolage Grotesque",sans-serif;font-variation-settings:"wdth" 88;
    font-weight:800;font-size:23px;letter-spacing:-.03em}
  .lnav-links{display:flex;gap:2px;margin-left:10px;flex:1}
  .lnav-links a{color:var(--ink60);text-decoration:none;font-size:14.5px;font-weight:500;
    padding:8px 13px;border-radius:2px}
  .lnav-links a:hover{color:var(--ink);background:var(--soft)}
  .lnav-cta{display:flex;align-items:center;gap:10px;flex:none}
  .lnav-login{border:0;background:transparent;color:var(--ink60);font-size:14px;font-weight:500;padding:7px 6px}
  .lnav-login:hover{color:var(--ink);text-decoration:underline;text-underline-offset:3px}
  .lnav-burger{display:none;flex-direction:column;gap:4px;border:1px solid var(--line);
    background:var(--card);border-radius:2px;padding:9px 8px}
  .lnav-burger i{display:block;width:16px;height:1.5px;background:var(--ink)}

  /* ---- hero over the photograph ---- */
  .lhero{position:relative;max-width:none;padding:0;min-height:min(86vh,760px);
    display:flex;align-items:flex-end;margin-top:-66px}
  .lhero-photo{position:absolute;inset:0;overflow:hidden}
  .hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 62%}
  .hero-dark{display:none}
  [data-theme="dark"] .hero-light{display:none}
  [data-theme="dark"] .hero-dark{display:block}
  /* the page colour fades up over the photo so the headline always has ground */
  .lhero-veil{position:absolute;inset:0;background:
    linear-gradient(180deg, rgba(var(--paper-rgb), .62) 0%,
                            rgba(var(--paper-rgb), .30) 38%,
                            rgba(var(--paper-rgb), .88) 78%,
                            rgba(var(--paper-rgb), 1) 100%)}
  .lhero-in{position:relative;z-index:1;max-width:1140px;margin:0 auto;width:100%;
    padding:0 32px 76px;opacity:0;transform:translateY(16px);
    transition:opacity .7s cubic-bezier(.2,.7,.3,1),transform .7s cubic-bezier(.2,.7,.3,1)}
  .lhero-in.in{opacity:1;transform:none}
  .lhero h1{font-size:clamp(34px,5vw,62px);line-height:1.02;letter-spacing:-.042em;max-width:24ch}
  .lhero-sub{margin:20px 0 0;font-size:clamp(15px,1.5vw,18px);line-height:1.55;
    color:var(--ink60);max-width:46ch}
  .lhero-cta{display:flex;align-items:center;gap:18px;margin-top:28px;flex-wrap:wrap}
  .lbig{padding:13px 24px;font-size:15.5px}
  .lhero-alt{border:0;background:transparent;color:var(--ink60);font-size:14.5px;font-weight:500;padding:6px 2px}
  .lhero-alt:hover{color:var(--ink);text-decoration:underline;text-underline-offset:3px}
  .lhero-ios{margin:18px 0 0;font-size:13px;color:var(--ink35)}

  /* ---- the handwritten line ---- */
  .hand{position:relative;display:inline-block;font-family:"Caveat",cursive;
    font-weight:600;line-height:1.1;color:var(--accent)}
  .hand-text{display:inline-block;clip-path:inset(0 100% 0 0)}
  .hand.writing .hand-text{animation:write 2.2s cubic-bezier(.32,.12,.3,1) var(--hand-delay,0ms) forwards}
  .hand-nib{position:absolute;left:0;bottom:.12em;width:2px;height:.82em;background:var(--accent);
    opacity:0;border-radius:2px}
  .hand.writing .hand-nib{animation:nib 2.2s cubic-bezier(.32,.12,.3,1) var(--hand-delay,0ms) forwards}
  .hand.done .hand-text{clip-path:none;animation:none}
  .hand.done .hand-nib{display:none}
  @keyframes write{from{clip-path:inset(0 100% 0 0)} to{clip-path:inset(0 -2% 0 0)}}
  /* the nib rides along the right edge of the reveal */
  @keyframes nib{
    0%{opacity:0;left:0}
    7%{opacity:.85}
    92%{opacity:.85}
    100%{opacity:0;left:100%}
  }

  /* ---- opener ---- */
  .lopen{padding-top:86px;padding-bottom:84px}
  .lopen-k{margin:0 0 14px;font-family:"DM Mono",monospace;font-size:11.5px;color:var(--ink35)}
  .lpage .lopen-h{font-size:clamp(42px,7.4vw,92px);line-height:1;letter-spacing:-.022em;max-width:none;margin:0}
  .lopen-cols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:48px;margin-top:38px;
    padding-top:26px;border-top:1px solid var(--line)}
  .lopen-cols p{margin:0;font-size:16px;line-height:1.7;color:var(--ink60);max-width:46ch}
  .lopen-cols p:first-child{color:var(--ink)}

  /* ---- all in one ---- */
  .lall{padding-top:20px;padding-bottom:80px;text-align:center}
  .lall h2{max-width:none;margin:0 auto;font-size:clamp(26px,3.6vw,46px)}
  .lall > p{margin:20px auto 0;color:var(--ink60);font-size:15.5px;line-height:1.6;max-width:52ch}
  /* a blank on the page that keeps filling itself in */
  .carousel{position:relative;display:inline-grid;vertical-align:baseline;color:var(--accent);
    justify-items:center;padding:0 .18em;border-bottom:3px solid currentColor;overflow:hidden}
  .carousel-ghost{visibility:hidden;grid-area:1/1}
  .carousel-w{grid-area:1/1;opacity:0;transform:translateY(.3em) rotate(1.2deg);
    transition:opacity .3s ease,transform .36s cubic-bezier(.2,.8,.3,1);white-space:nowrap}
  .carousel-w.on{opacity:1;transform:none}
  .carousel-w.out{opacity:0;transform:translateY(-.3em) rotate(-1.2deg)}
  .lall-row{list-style:none;display:flex;flex-wrap:wrap;justify-content:center;gap:0;
    margin:34px 0 0;padding:18px 0 0;border-top:1px solid var(--line)}
  .lall-row li{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:500;
    color:var(--ink60);padding:4px 18px}
  .lall-row i{width:3px;height:15px;border-radius:2px}

  /* ---- the live demo ---- */
  .ldemo{padding-top:16px;padding-bottom:86px}
  .ldemo-head{max-width:620px;margin-bottom:26px}
  .ldemo-head p{margin:16px 0 0;color:var(--ink60);font-size:15px;line-height:1.65}
  .demo-wrap{position:relative;touch-action:none}
  .demo-bar{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:12px}
  .demo-try{font-family:"Caveat",cursive;font-size:24px;font-weight:600;color:var(--accent);
    display:inline-flex;align-items:center;gap:8px}
  .demo-try::after{content:"";width:34px;height:1.5px;background:var(--accent);opacity:.6}
  .demo-tips{flex:1;min-width:240px;font-size:12.5px;color:var(--ink35);line-height:1.5}
  .demo-app{display:grid;grid-template-columns:260px minmax(0,1fr);gap:18px;align-items:start}
  .demo-tray{min-width:0}
  .demo-grid{max-height:430px;overflow-y:auto;overscroll-behavior:contain;transition:outline-color .14s}
  .demo-grid.demo-over{outline:2px dashed var(--accent);outline-offset:3px}
  .demo-rename{width:100%;font:inherit;font-weight:600;font-size:13px;border:0;padding:0;
    background:transparent;color:var(--ink);outline:none}
  .demo-ghost{position:fixed;z-index:60;pointer-events:none;background:var(--ink);color:var(--paper);
    padding:6px 11px;border-radius:2px;font-size:12.5px;font-weight:600;opacity:.95}
  .stillwrap{pointer-events:none}

  /* ---- feature sections ---- */
  .lfeat{display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:56px;
    align-items:center;padding-top:76px;padding-bottom:76px;border-top:1px solid var(--line)}
  .lfeat.flip .lfeat-text{order:2}
  .lfeat.flip .lfeat-art{order:1}
  .lfeat-text{min-width:0}
  .lfeat-art{min-width:0}
  .lfeat h2{margin:12px 0 0}
  .lfeat-text p{margin:16px 0 0;color:var(--ink60);font-size:15px;line-height:1.65;max-width:52ch}
  .lfeat-tight{padding-top:0;border-top:0}
  .lf-name{display:inline-flex;align-items:center;gap:9px;font-family:"Bricolage Grotesque",sans-serif;
    font-variation-settings:"wdth" 90;font-weight:700;font-size:15px;letter-spacing:-.012em;color:var(--fc)}
  .lf-name::before{content:"";width:3px;height:17px;border-radius:2px;background:var(--fc)}
  .panelshot{background:var(--card);border:1px solid var(--line);border-radius:3px;padding:14px}
  .bragyear{display:grid;grid-template-columns:48px minmax(0,1fr);gap:0;align-items:start}
  .bragy{font-size:11px;color:var(--ink35);padding-top:16px}

  /* Lock It keeps the dark room it has in the app */
  .lfeat-lock{max-width:none;padding:0;border-top:0;background:#1D1618;color:#F2EBEA;
    margin:40px 0;display:block}
  .lfeat-lock > *{max-width:1140px;margin:0 auto;padding:0 32px}
  .lfeat-lock .lfeat-text{padding-top:72px}
  .lfeat-lock h2{color:#FBF6F4}
  .lfeat-lock p{color:rgba(242,235,234,.74)}
  .lf-name-dark{color:#E79484}
  .lf-name-dark::before{background:#E79484}
  .lock-art{padding-bottom:76px;padding-top:30px;position:relative}
  .lock-art .vslot{max-width:760px}
  .lock-report{position:absolute;right:0;bottom:6px;width:min(330px,40%);z-index:2}
  .repcard{background:var(--card);border:1px solid var(--line);border-radius:3px;padding:14px;
    color:var(--ink)}

  /* ---- video slots ---- */
  .vslot{margin:0;position:relative}
  .vslot-frame{position:relative;border:1px solid var(--line);border-radius:3px;overflow:visible;
    background:var(--soft);aspect-ratio:16/10}
  .vslot-frame video{width:100%;height:100%;object-fit:cover;border-radius:2px;display:block}
  .vslot-empty{position:absolute;inset:0;display:grid;place-content:center;justify-items:center;
    gap:7px;text-align:center;padding:24px;border-radius:2px;
    background:repeating-linear-gradient(135deg,var(--soft),var(--soft) 10px,var(--card) 10px,var(--card) 20px)}
  .vslot-badge{font-family:"DM Mono",monospace;font-size:10.5px;color:var(--ink35);
    border:1px solid var(--line);border-radius:99px;padding:2px 10px;background:var(--card)}
  .vslot-empty b{font-size:16px;letter-spacing:-.01em;color:var(--ink)}
  .vslot-empty span:last-child{font-size:12.5px;color:var(--ink35);max-width:30ch;line-height:1.5}
  .lfeat-lock .vslot-frame{border-color:rgba(255,255,255,.16);background:rgba(255,255,255,.05)}
  .lfeat-lock .vslot-empty{background:repeating-linear-gradient(135deg,
    rgba(255,255,255,.03),rgba(255,255,255,.03) 10px,rgba(255,255,255,.07) 10px,rgba(255,255,255,.07) 20px)}
  .lfeat-lock .vslot-empty b{color:#FBF6F4}
  .lfeat-lock .vslot-empty span:last-child{color:rgba(242,235,234,.6)}
  .lfeat-lock .vslot-badge{background:transparent;border-color:rgba(255,255,255,.22);color:rgba(242,235,234,.6)}

  /* ---- scatter into one calendar ---- */
  .lmerge{padding-top:86px;padding-bottom:86px;border-top:1px solid var(--line);
    display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:56px;align-items:center}
  .lmerge-text p{margin:16px 0 0;color:var(--ink60);font-size:15px;line-height:1.65;max-width:48ch}
  .lmerge-stage{position:relative;height:430px;min-width:0}
  .lmerge-slots{position:absolute;inset:0;border:1px solid var(--line);border-radius:3px;
    background:var(--card);display:grid;grid-template-rows:repeat(6,1fr)}
  .lmerge-slot{border-top:1px solid var(--line)}
  .lmerge-slot:first-child{border-top:0}
  .lmerge-chip{position:absolute;left:8%;right:8%;z-index:2;
    background:var(--soft);border:1px solid var(--line);border-left:3px solid;border-radius:0 2px 2px 0;
    padding:9px 12px;font-size:13px;font-weight:600;color:var(--ink);
    transform:translate(calc(var(--sx) * (1 - var(--k))), calc(var(--sy) * (1 - var(--k))))
              rotate(calc(var(--sr) * (1 - var(--k))));
    box-shadow:none}

  /* ---- devices ---- */
  .ldevices{padding-top:86px;padding-bottom:40px;border-top:1px solid var(--line)}
  .ldevices-head{max-width:640px}
  .ldevices-head p{margin:16px 0 0;color:var(--ink60);font-size:15px;line-height:1.65}
  .ldevices-stage{display:grid;grid-template-columns:minmax(0,1fr) 250px;gap:30px;
    align-items:end;margin-top:42px}
  .shot-inner{transform-origin:top left}
  .shot-view{overflow:hidden}
  .shot-desktop{border:1px solid var(--line);border-radius:4px;overflow:hidden;background:var(--card)}
  .shot-chrome{display:flex;align-items:center;gap:6px;padding:8px 12px;background:var(--surface);
    border-bottom:1px solid var(--line)}
  .shot-chrome i{width:9px;height:9px;border-radius:99px;background:var(--line);display:block}
  .shot-chrome span{margin-left:10px;font-size:10.5px;color:var(--ink35)}
  .phone-frame{border:9px solid var(--ink);border-radius:30px;overflow:hidden;background:var(--ink)}
  .phone-screen{overflow:hidden;border-radius:21px;background:var(--paper);position:relative}
  .phone-status{display:flex;justify-content:space-between;padding:7px 16px 3px;font-size:11px;
    color:var(--ink35)}
  .phone-menu{position:absolute;left:22px;top:46px;display:flex;flex-direction:column;gap:4px;
    border:1px solid var(--line);background:var(--card);border-radius:3px;padding:9px 8px}
  .phone-menu i{display:block;width:16px;height:1.5px;background:var(--ink)}

  /* ---- team ---- */
  .lteam{padding-top:86px;padding-bottom:84px;border-top:1px solid var(--line)}
  .lteam-head{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:48px;align-items:end}
  .lteam-head p{margin:0;color:var(--ink60);font-size:15px;line-height:1.65;max-width:50ch}
  .lteam-list{list-style:none;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
    gap:0;margin:42px 0 0;padding:0}
  .lteam-list li{padding:22px 26px 0 0;border-top:2px solid var(--ink);
    opacity:0;transform:translateY(14px);transition:opacity .6s ease,transform .6s ease}
  .lteam.in .lteam-list li{opacity:1;transform:none}
  .lteam-list li + li{padding-left:26px;border-left:1px solid var(--line)}
  .lteam-n{display:block;font-size:11.5px;color:var(--ink35);margin-bottom:10px}
  .lteam-list h3{margin:0}
  .lteam-r{display:block;font-size:12.5px;color:var(--accent);margin-top:3px;font-weight:500}
  .lteam-list p{margin:10px 0 0;font-size:13.5px;color:var(--ink60);line-height:1.6}
  .lteam-close{margin:40px 0 0;padding-top:22px;border-top:1px solid var(--line);
    font-family:"Bricolage Grotesque",sans-serif;font-variation-settings:"wdth" 90;font-weight:700;
    font-size:clamp(17px,2vw,22px);letter-spacing:-.02em;color:var(--ink);max-width:44ch}

  /* ---- support ---- */
  .lsup{padding-top:86px;padding-bottom:84px;border-top:1px solid var(--line)}
  .lsup-head p{margin:14px 0 0;color:var(--ink60);font-size:15px}
  .lsup-list{list-style:none;margin:34px 0 0;padding:0;border-top:1px solid var(--line)}
  .lsup-list li{border-bottom:1px solid var(--line)}
  .lsup-list button{display:flex;align-items:center;justify-content:space-between;gap:18px;
    width:100%;text-align:left;border:0;background:transparent;padding:17px 2px;
    font-size:16px;font-weight:600;letter-spacing:-.012em;color:var(--ink)}
  .lsup-list button:hover{color:var(--accent)}
  .lsup-list i{flex:none;color:var(--ink35)}
  .lsup-list p{margin:0 0 18px;font-size:14.5px;line-height:1.65;color:var(--ink60);max-width:64ch}
  .lsup-mail{margin-top:26px;font-size:14px;color:var(--ink60)}
  .lsup-mail a{color:var(--ink)}

  /* ---- closing and footer ---- */
  .lend{text-align:center;padding-top:88px;padding-bottom:88px;border-top:1px solid var(--line)}
  .lend h2{margin:0 auto;max-width:none}
  .lend p{margin:16px auto 28px;color:var(--ink60);font-size:15.5px;line-height:1.6;max-width:46ch}
  .lfoot{background:var(--surface);border-top:1px solid var(--line);position:relative;z-index:1}
  .lfoot-top{max-width:1140px;margin:0 auto;padding:50px 32px 34px;display:grid;
    grid-template-columns:minmax(0,1fr) minmax(0,1.25fr);gap:52px}
  .lfoot-get h3{margin:0;font-size:clamp(21px,2.4vw,27px);letter-spacing:-.02em}
  .lfoot-get p{margin:10px 0 18px;font-size:14px;color:var(--ink60);max-width:34ch;line-height:1.6}
  .lfoot-social{display:grid;gap:8px;max-width:330px}
  .lfoot-social a{display:flex;align-items:center;justify-content:space-between;gap:14px;
    border:1px solid var(--line);background:var(--card);border-radius:999px;
    padding:10px 18px;text-decoration:none;color:var(--ink);transition:.14s}
  .lfoot-social a:hover{border-color:var(--ink);transform:translateY(-1px)}
  .lfoot-social b{font-size:14px;font-weight:600}
  .lfoot-social span{font-size:12.5px;color:var(--ink35)}
  .lfoot-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:34px}
  .lfoot h4{font-family:"Bricolage Grotesque",sans-serif;font-size:12.5px;font-weight:700;
    color:var(--ink);margin:0 0 10px}
  .lfoot button{display:block;border:0;background:transparent;padding:4px 0;font-size:13.5px;
    color:var(--ink60);text-align:left}
  .lfoot button:hover{color:var(--ink);text-decoration:underline;text-underline-offset:3px}
  .lfoot-base{max-width:1140px;margin:0 auto;padding:14px 32px 24px;display:flex;
    justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:12.5px;color:var(--ink35);
    border-top:1px solid var(--line)}
  .lfoot-base a{color:var(--ink35)}

  /* ---- start planning ---- */
  .startpage{min-height:100%;background:var(--paper);display:flex;flex-direction:column}
  .startwrap{flex:1;max-width:1040px;margin:0 auto;width:100%;padding:60px 32px 70px;
    display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:52px;align-items:start}
  .startmain h1{font-size:clamp(32px,4.4vw,52px);letter-spacing:-.035em;line-height:1.02}
  .startsub{margin:18px 0 0;font-size:16px;color:var(--ink60);line-height:1.6;max-width:40ch}
  .startcta{display:flex;gap:12px;margin-top:28px;flex-wrap:wrap}
  .startsteps{list-style:none;margin:34px 0 0;padding:22px 0 0;border-top:1px solid var(--line);
    display:grid;gap:11px}
  .startsteps li{display:flex;align-items:center;gap:12px;font-size:14px;color:var(--ink60)}
  .startsteps span{width:22px;height:22px;flex:none;display:grid;place-items:center;font-size:11px;
    border:1px solid var(--line);border-radius:99px;color:var(--ink35)}
  .startios{background:var(--card);border:1px solid var(--line);border-left:3px solid var(--accent);
    border-radius:0 3px 3px 0;padding:26px 26px 24px}
  .startios-k{font-family:"DM Mono",monospace;font-size:11px;color:var(--accent)}
  .startios h2{margin:10px 0 0;font-size:clamp(20px,2.4vw,26px);max-width:none}
  .startios p{margin:14px 0 0;font-size:14px;color:var(--ink60);line-height:1.65}
  .startios ul{margin:16px 0 0;padding-left:18px}
  .startios li{font-size:13.5px;color:var(--ink60);line-height:1.6;margin-bottom:5px}
  .startios-note{margin-top:18px;padding-top:14px;border-top:1px solid var(--line);
    font-size:13px;color:var(--ink35)}
  .startios-note b{color:var(--ink)}

  /* ---- the shine on every primary call to action ---- */
  .shine{position:relative;overflow:hidden;isolation:isolate;
    box-shadow:0 0 0 0 var(--accent-soft);transition:transform .16s cubic-bezier(.2,.8,.3,1),box-shadow .22s ease}
  .shine::after{content:"";position:absolute;top:-60%;bottom:-60%;width:38%;left:-50%;
    background:linear-gradient(100deg,transparent,rgba(255,255,255,.42),transparent);
    transform:skewX(-18deg);animation:sweep 3.6s cubic-bezier(.4,0,.2,1) infinite;pointer-events:none}
  .shine:hover{transform:translateY(-2px) scale(1.02);box-shadow:0 0 0 7px var(--accent-soft)}
  .shine:active{transform:translateY(0) scale(.99)}
  @keyframes sweep{0%{left:-50%}38%{left:125%}100%{left:125%}}

  /* ---- after the demo: the hand-off ---- */
  .ldemo-after{display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap;
    margin-top:34px;padding:28px 26px;border:1px solid var(--line);border-radius:3px;
    background:var(--card);text-align:center}
  .ldemo-after h3{margin:0;font-size:clamp(19px,2.4vw,27px);letter-spacing:-.02em}
  .ldemo-after em{font-style:normal;color:var(--accent);
    font-family:"Caveat",cursive;font-size:1.34em;font-weight:700;letter-spacing:0}

  /* ---- where a dragged item will land ---- */
  .demo-drop{position:absolute;left:calc(var(--gut) + 6px);right:12px;z-index:1;
    border:1.5px dashed var(--accent);background:var(--accent-soft);border-radius:3px;
    pointer-events:none}

  /* ---- List It plus Organize It, together ---- */
  .lmerge-names{display:flex;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap}
  .lmerge-plus{color:var(--ink35);font-size:15px}
  .lmerge-text p + p{margin-top:12px}

  /* ---- Brag It ---- */
  .lbrag{align-items:start}
  .lbrag-art{display:grid;gap:18px}
  .lbrag-out{display:flex;align-items:center;gap:14px;margin-top:24px;padding:16px 18px;
    border:1px solid var(--brag);border-left-width:3px;border-radius:0 3px 3px 0;
    background:var(--brag-soft)}
  .lbrag-out b{display:block;font-size:16px;letter-spacing:-.014em;color:var(--ink)}
  .lbrag-out span{display:block;font-size:13px;color:var(--ink60);margin-top:2px;line-height:1.5}
  .lbrag-arrow{flex:none;width:30px;height:30px;border-radius:99px;background:var(--brag);
    position:relative}
  .lbrag-arrow::before,.lbrag-arrow::after{content:"";position:absolute;background:var(--card)}
  .lbrag-arrow::before{left:14px;top:8px;width:2px;height:13px;border-radius:2px}
  .lbrag-arrow::after{left:10px;top:15px;width:10px;height:2px;border-radius:2px;
    transform:rotate(45deg);transform-origin:right center}
  .lbrag .ec{margin-bottom:10px}
  .lbrag .ec:last-child{margin-bottom:0}

  /* ---- View It ---- */
  .lwatch-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px}
  .lwatch-pts{list-style:none;margin:20px 0 0;padding:0}
  .lwatch-pts li{padding:11px 0;border-top:1px solid var(--line);font-size:14px;
    color:var(--ink60);line-height:1.55}
  .lwatch-pts b{color:var(--ink);font-weight:600}

  /* ---- photographs behind two sections ---- */
  .llock-photo{position:absolute;inset:0;overflow:hidden;z-index:0;max-width:none;padding:0;margin:0}
  .llock-photo img{width:100%;height:100%;object-fit:cover;opacity:.3}
  .lfeat-lock{position:relative;overflow:hidden}
  .lfeat-lock > *:not(.llock-photo){position:relative;z-index:1}
  .lend{position:relative;overflow:hidden}
  .lend-photo{position:absolute;inset:0;z-index:0}
  .lend-photo img{width:100%;height:100%;object-fit:cover;object-position:50% 42%}
  .lend-veil{position:absolute;inset:0;background:
    linear-gradient(180deg, rgba(var(--paper-rgb), .97) 0%,
                            rgba(var(--paper-rgb), .80) 46%,
                            rgba(var(--paper-rgb), .95) 100%)}
  .lend-in{position:relative;z-index:1}

  /* ---- social: a logo you can hit, with the handle under it ---- */
  .lfoot-social{display:flex;gap:26px;max-width:none}
  .lfoot-social a{display:grid;justify-items:center;gap:8px;text-decoration:none;color:var(--ink);
    border:0;background:transparent;padding:0;border-radius:0;transition:transform .16s cubic-bezier(.2,.8,.3,1)}
  .soc-badge{width:54px;height:54px;display:grid;place-items:center;border-radius:16px;
    border:1px solid var(--line);background:var(--card);color:var(--ink);
    transition:background .18s ease,color .18s ease,border-color .18s ease}
  .lfoot-social a:hover{transform:translateY(-3px)}
  .lfoot-social a:hover .soc-badge{background:var(--ink);color:var(--paper);border-color:var(--ink)}
  .soc-h{font-size:11.5px;color:var(--ink35)}

  /* ---- landing: tablet ---- */
  @media (max-width:1000px){
    .lnav{position:sticky}
    .lnav-links{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;gap:0;
      background:var(--card);border-bottom:1px solid var(--line);padding:6px 0;margin:0}
    .lnav-links.open{display:flex}
    .lnav-links a{padding:13px 32px;border-radius:0}
    .lnav-burger{display:flex}
    .lhero{min-height:min(78vh,660px)}
    .lopen-cols,.lteam-head{grid-template-columns:minmax(0,1fr);gap:22px}
    .demo-app{grid-template-columns:minmax(0,1fr);gap:14px}
    .demo-grid{max-height:380px}
    .lfeat,.lmerge{grid-template-columns:minmax(0,1fr);gap:32px}
    .lfeat.flip .lfeat-text,.lfeat.flip .lfeat-art{order:0}
    .lfeat-tight{display:none}
    .lock-report{position:static;width:auto;margin-top:16px}
    .ldevices-stage{grid-template-columns:minmax(0,1fr);gap:34px;justify-items:center}
    .shot-phone{max-width:250px}
    .lbrag{align-items:stretch}
    .lwatch-stats{grid-template-columns:repeat(3,minmax(0,1fr))}
    .lteam-list{grid-template-columns:minmax(0,1fr)}
    .lteam-list li,.lteam-list li + li{padding:20px 0 22px;border-left:0;border-top:1px solid var(--line)}
    .lteam-list li:first-child{border-top:2px solid var(--ink)}
    .lfoot-top{grid-template-columns:minmax(0,1fr);gap:34px}
    .startwrap{grid-template-columns:minmax(0,1fr);gap:32px}
  }
  /* ---- landing: phone ---- */
  @media (max-width:640px){
    .lhero-in,.lopen,.lall,.ldemo,.lfeat,.lmerge,.ldevices,.lteam,.lsup,.lend{
      padding-left:18px;padding-right:18px}
    .lnav{padding:10px 18px}
    .lnav-links a{padding:13px 18px}
    .lfeat-lock > *{padding-left:18px;padding-right:18px}
    .lopen,.lall,.ldemo,.lfeat,.lmerge,.ldevices,.lteam,.lsup,.lend{
      padding-top:58px;padding-bottom:58px}
    .lhero-in{padding-bottom:54px}
    .lopen-cols{gap:16px}
    .demo-tips{display:none}
    .demo-grid{max-height:330px}
    .lfoot-cols{grid-template-columns:minmax(0,1fr);gap:24px}
    .lfoot-top{padding:34px 18px 26px}
    .lfoot-base{padding:14px 18px 22px}
    .lmerge-stage{height:360px}
    .ldemo-after{padding:22px 16px;gap:16px}
    .lwatch-stats{grid-template-columns:minmax(0,1fr);gap:8px}
    .lbrag-out{padding:14px}
    .lfoot-social{gap:12px}
    .startwrap{padding:38px 18px 50px}
    .stationery svg{opacity:.06}
  }
  @media (prefers-reduced-motion:reduce){
    .stationery svg{animation:none}
    .shine::after{animation:none;display:none}
    .shine:hover{transform:none}
    .lhero-in,.reveal,.lteam-list li{transition:none}
  }

  /* the sign-in page's wordmark goes back to the homepage */
  .tn-home{border:0;background:transparent;padding:0;gap:11px}
  .tn-home:hover b{text-decoration:underline;text-underline-offset:4px}

  body,.rail,.pane,.dow,.daycol h4,.tape,.card,.modal{
    transition:background-color .2s ease, border-color .2s ease, color .2s ease}
  @media (prefers-reduced-motion:reduce){*{animation-duration:.01ms !important;transition-duration:.01ms !important}}
</style>
</head>
<body>
<div id="root"></div>

<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.2/babel.min.js"></script>

<script type="text/babel" data-presets="react">
const {useState,useEffect,useRef,useMemo,useCallback} = React;

/* ==========================================================================
   SETUP: paste your Firebase config below and sign-up works.

   1. console.firebase.google.com → Add project (turn Analytics off).
   2. Build → Authentication → Get started.
      Sign-in method → enable "Email/Password" and "Google".
   3. Authentication → Settings → Authorized domains → Add domain →
      your GitHub Pages host, e.g. callacys200.github.io
   4. Project settings (gear icon) → Your apps → Web (</>) → register the
      app → copy the firebaseConfig values into the object below.

   Firebase sends the confirmation and password-reset emails itself.
   No email provider, no API key in this file, no monthly send limit to
   manage, free for up to 50,000 people a month.
   ========================================================================== */
const CONFIG = {
  FIREBASE: {
    apiKey: 'AIzaSyCw0qtpFhT7-_bhfHK3nRnOPnrS7Fsd0IU',
    authDomain: 'planit-3692c.firebaseapp.com',
    projectId: 'planit-3692c',
    storageBucket: 'planit-3692c.firebasestorage.app',
    messagingSenderId: '251892096957',
    appId: '1:251892096957:web:5d43f69563e0318fddbcd4'
  },
  // Optional. A Stripe Payment Link makes the Pro button live, Stripe hosts
  // the checkout page, so no server is needed. Leave empty to show it as
  // "not available yet" instead of pretending to sell something.
  // Your own account's user ID, from Firebase Console → Authentication → Users.
  // Fill this in and Settings shows you where signups are coming from.
  // The team account: sign up with this username and it gets the Numbers tab.
  ADMIN_USERNAME: 'admin',
  ADMIN_UID: 'YTj1DEgryLUe2zpJmiOaGdY32Rd2',
  // Stripe Payment Links. Leave empty and the buttons say "coming soon"
  // instead of pretending to take money.
  PRO_CHECKOUT_URL: '',          // $10 / month
  PRO_YEAR_CHECKOUT_URL: '',     // $110 / year
  GIFT_CHECKOUT_URL: '',         // gift a year to someone else
  FREEZE_CHECKOUT_URL: '',       // 5 streak freezes
  PRO_PRICE: '$6',
  // Shown at the bottom of the privacy policy and terms.
  CONTACT_EMAIL: 'PlanIt.forever1@gmail.com',
  // Where the Netlify functions live. The website calls them on its own origin;
  // the iOS app runs on capacitor://localhost and has no server of its own, so
  // it has to call them here by name. Change this if the domain changes.
  SITE_ORIGIN: 'https://planitforever.com',
  // Homepage videos. Drop the files next to index.html and put their names
  // here; until then the page shows a labelled slot instead of a broken frame.
  VIDEO_BRAGIT: '',              // e.g. 'bragit.mp4'
  VIDEO_ROOMS:  '',              // e.g. 'studyrooms.mp4'
  // Set true to print video connection steps to the browser console.
  DEBUG_VIDEO: true,
  // Optional TURN relay. Roughly 10–20% of networks (school wifi especially)
  // block direct connections, and those calls only work through a relay.
  // Free tiers: metered.ca or Cloudflare Calls. Example:
  // TURN: {urls:'turn:standard.relay.metered.ca:80', username:'...', credential:'...'}
  TURN: null
};

/* ============ date helpers ============ */
const pad = n => String(n).padStart(2,'0');
const iso = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const parseISO = s => { const [y,m,d] = s.split('-').map(Number); return new Date(y, m-1, d); };
const addDays = (d,n) => { const x = new Date(d); x.setDate(x.getDate()+n); return x; };
const addMonths = (d,n) => { const x = new Date(d.getFullYear(), d.getMonth()+n, 1); return x; };
const startOfWeek = d => addDays(d, -d.getDay());
const weekKey = d => iso(startOfWeek(d));
const monthKey = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}`;
const sameDay = (a,b) => iso(a) === iso(b);
const DOW = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const MON = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const fmtDay = d => `${DOW[d.getDay()]}, ${MON[d.getMonth()].slice(0,3)} ${d.getDate()}`;
const fmtWeek = d => { const s = startOfWeek(d), e = addDays(s,6);
  return `${MON[s.getMonth()].slice(0,3)} ${s.getDate()} – ${MON[e.getMonth()].slice(0,3)} ${e.getDate()}`; };
const fmtMonth = d => `${MON[d.getMonth()]} ${d.getFullYear()}`;
const toMin = t => { const [h,m] = t.split(':').map(Number); return h*60+m; };
const toTime = m => `${pad(Math.floor(m/60))}:${pad(m%60)}`;
const pretty = t => { const [h,m] = t.split(':').map(Number);
  const ap = h >= 12 ? 'pm' : 'am'; const hh = h%12 === 0 ? 12 : h%12;
  return m === 0 ? `${hh}${ap}` : `${hh}:${pad(m)}${ap}`; };
const uid = () => Math.random().toString(36).slice(2,10);

const hexRgba = (hex, a) => {
  const h = String(hex).replace('#','');
  const n = h.length === 3 ? h.split('').map(c => c+c).join('') : h;
  const r = parseInt(n.slice(0,2),16), g = parseInt(n.slice(2,4),16), b = parseInt(n.slice(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
};
const hexToHsl = hex => {
  const h0 = String(hex).replace('#','');
  const n = h0.length === 3 ? h0.split('').map(c => c+c).join('') : h0;
  const [r,g,b] = [0,2,4].map(i => parseInt(n.slice(i,i+2),16)/255);
  const mx = Math.max(r,g,b), mn = Math.min(r,g,b), d = mx - mn;
  const l = (mx+mn)/2;
  let h = 0, sat = 0;
  if(d){
    sat = d / (1 - Math.abs(2*l - 1));
    h = mx === r ? ((g-b)/d + (g < b ? 6 : 0)) : mx === g ? (b-r)/d + 2 : (r-g)/d + 4;
    h *= 60;
  }
  return [Math.round(h), Math.round(sat*100), Math.round(l*100)];
};
const hsl = (h,s,l) => `hsl(${h}, ${s}%, ${l}%)`;

const relLum = hex => {
  const h = String(hex).replace('#','');
  const n = h.length === 3 ? h.split('').map(c => c+c).join('') : h;
  const [r,g,b] = [0,2,4].map(i => parseInt(n.slice(i,i+2),16)/255)
    .map(c => c <= .03928 ? c/12.92 : Math.pow((c+.055)/1.055, 2.4));
  return .2126*r + .7152*g + .0722*b;
};
// Pale accents get dark text instead of white, so a pastel palette stays pastel
// rather than having to be darkened until white text works on it.
const inkOn = hex => (1.05/(relLum(hex)+0.05)) >= 3.0 ? '#FFFFFF' : '#16191B';
// Tints are mixed from the live accent rather than stored separately, so every
// palette gets its own soft fill without another seven values to keep in step.
const rgbParts = hex => {
  const h = String(hex).replace('#','');
  if(h.length !== 6) return '249, 246, 240';
  const n = parseInt(h, 16);
  return `${(n>>16)&255}, ${(n>>8)&255}, ${n&255}`;
};
const withAlpha = (hex, a) => {
  const h = String(hex).replace('#','');
  if(h.length !== 6) return `rgba(0,0,0,${a})`;
  const n = parseInt(h, 16);
  return `rgba(${(n>>16)&255},${(n>>8)&255},${n&255},${a})`;
};

// Colours for time blocks. Named so the picker reads as choices rather than
// swatches, and dark enough that the label stays readable on the tint.
// The ids are what gets saved on a block, so they stay put forever. The actual
// colour comes from whichever palette is on, which is why they are numbered
// here rather than named: 'Navy' would be a lie under half the themes.
const BLOCK_COLORS = [
  {id:'indigo', hex:'#C24E34'}, {id:'green',  hex:'#8E6D4C'}, {id:'amber',  hex:'#53779B'},
  {id:'pink',   hex:'#507D63'}, {id:'blue',   hex:'#9E6727'}, {id:'purple', hex:'#327B90'},
  {id:'teal',   hex:'#906C5C'}, {id:'rust',   hex:'#647589'}, {id:'slate',  hex:'#C34B55'},
];
// Returns a CSS variable rather than a fixed colour, so changing the palette
// in Settings repaints every block on every calendar at once.
const blockHex = id => id && BLOCK_COLORS.some(c => c.id === id) ? `var(--bc-${id})` : null;

// Energy levels. 0 is the default so a task you never think about costs nothing.
const ENERGY = [[-1,'Relax'], [0,'None'], [1,'Low'], [2,'Medium'], [3,'High']];

function LotusIcon({size = 15}){
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{flex:'none'}}>
      <path d="M12 3.5c2.1 2.6 2.7 5.2 2.7 7.9S13.6 17 12 18c-1.6-1-2.7-3.6-2.7-6.6S9.9 6.1 12 3.5z" fill="#E4679A"/>
      <path d="M3.6 8.8c3.1.5 5.3 2.6 6.3 5.7.6 1.9.5 3.4.2 4-2.9-.3-5.7-2.9-6.3-6-.2-1.3-.2-2.6-.2-3.7z" fill="#F4A3C4"/>
      <path d="M20.4 8.8c-3.1.5-5.3 2.6-6.3 5.7-.6 1.9-.5 3.4-.2 4 2.9-.3 5.7-2.9 6.3-6 .2-1.3.2-2.6.2-3.7z" fill="#F4A3C4"/>
      <path d="M4.5 19.6c2.3 1 4.8 1.6 7.5 1.6s5.2-.6 7.5-1.6" stroke="#E4679A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

// One flame, growing with the level rather than repeating.
function FireIcon({level = 1}){
  const size = [0, 12, 15, 19][Math.max(1, Math.min(3, level))];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{flex:'none'}}>
      <path d="M12 1.5c1.1 3.7 4.8 5.8 4.8 10.6a4.8 4.8 0 0 1-9.6 0c0-2.1 1-3.7 2.1-4.8 0 2.1 1.1 3.2 2.1 3.7C11 8.2 11.5 4.7 12 1.5z" fill="#E23B28"/>
      <path d="M12 11.6c.7 1.7 2.1 2.5 2.1 4.3a2.1 2.1 0 0 1-4.2 0c0-1.3.7-2 1.3-2.6.1 1 .5 1.4.8 1.6-.1-1.3.1-2.3 0-3.3z" fill="#FFB547"/>
    </svg>
  );
}

function BellIcon({size = 13}){
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" style={{flex:'none'}}>
      <path d="M8 1.6a4 4 0 0 0-4 4v2.6L2.8 10.4h10.4L12 8.2V5.6a4 4 0 0 0-4-4z"
        fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M6.4 12.3a1.7 1.7 0 0 0 3.2 0" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function FreezeIcon({size = 15}){
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" style={{flex:'none'}}>
      <g stroke="#3E8CD8" strokeWidth="1.3" strokeLinecap="round">
        <path d="M8 1.5v13M2.4 4.75l11.2 6.5M13.6 4.75l-11.2 6.5"/>
        <path d="M8 4.3 6.6 2.9M8 4.3l1.4-1.4M8 11.7l-1.4 1.4M8 11.7l1.4 1.4"/>
      </g>
    </svg>
  );
}

const EnergyIcon = ({v}) => v < 0 ? <LotusIcon /> : v > 0 ? <FireIcon level={v} /> : <span style={{opacity:.5}}>–</span>;

// Cost is the level once per half hour: low is 1 for 30 minutes and 2 for an
// hour, medium 2 and 4, high 3 and 6. Unscheduled tasks count as half an hour.
const taskHalves = t => {
  if(!t.start || !t.end) return 1;
  return ((((toMin(t.end) - toMin(t.start)) % 1440) + 1440) % 1440) / 30;
};
const taskEnergy = t => Math.round((t.energy || 0) * taskHalves(t) * 10) / 10;
const fmtE = n => Number.isInteger(n) ? String(n) : n.toFixed(1);

const energyLabel = v => (ENERGY.find(e => e[0] === (v || 0)) || ENERGY[1])[1];
const DEFAULT_BASE = 27;

// Under budget reads green, near it orange, well over it red.
const energyState = (total, base) =>
  total < base - 5 ? 'low' : total <= base + 5 ? 'near' : 'over';

const dayEnergy = (tasks, dk) => Math.round(tasks
  .filter(t => t.scope === 'daily' && occursOn(t, dk) && !isDone(t, dk))
  .reduce((a,t) => a + taskEnergy(t), 0) * 10) / 10;

function EnergyPill({total, base, small}){
  const st = energyState(total, base);
  return (
    <span className={'energy ' + st + (small ? ' sm' : '')}
      title={`${total} of ${base} energy used today`}>
      <Battery fill={base ? Math.max(0, Math.min(1, total/base)) : 0} />
      {fmtE(total)}<i>/{base}</i>
    </span>
  );
}

const ENERGY_MIN = 1, ENERGY_MAX = 50, REC_LO = 25, REC_HI = 30;

// Stepper rather than a slider: a slider is fiddly on a phone and imprecise
// with a 1–50 range.
function EnergyStepper({value, onChange, small}){
  const set = v => { onChange(Math.max(ENERGY_MIN, Math.min(ENERGY_MAX, v))); buzz('light'); };
  return (
    <div className={'estep' + (small ? ' sm' : '')}>
      <button onClick={() => set(value - 1)} aria-label="Less">−</button>
      <input type="number" min={ENERGY_MIN} max={ENERGY_MAX} value={value}
        onChange={e => onChange(Math.max(ENERGY_MIN, Math.min(ENERGY_MAX, +e.target.value || ENERGY_MIN)))} />
      <button onClick={() => set(value + 1)} aria-label="More">+</button>
      <span className="esteprec">{REC_LO}–{REC_HI} recommended</span>
    </div>
  );
}

function EnergyBaseEditor({value, onClose, onApply}){
  const [v, setV] = useState(value);
  return (
    <Modal title="Daily energy baseline" onClose={onClose}>
      <p style={{marginTop:0, color:'var(--ink60)', fontSize:13.5}}>
        How much a normal day holds for you. Days turn orange within 5 of this and red past it.
      </p>
      <div style={{textAlign:'center', margin:'6px 0 18px'}}>
        <EnergyStepper value={v} onChange={setV} />
      </div>
      <div className="eyebrow" style={{marginBottom:8}}>Apply this to</div>
      <button className="rolecard" onClick={() => onApply(v, 'future')}>
        <span><b>Today and future days</b><small>Days before today keep the number they had.</small></span>
      </button>
      <button className="rolecard" onClick={() => onApply(v, 'all')}>
        <span><b>Every day, past included</b><small>Replaces your baseline everywhere.</small></span>
      </button>
    </Modal>
  );
}

function EnergySlider({value, onChange}){
  const pct = v => (v - ENERGY_MIN) / (ENERGY_MAX - ENERGY_MIN) * 100;
  return (
    <div className="eslider">
      <div className="eband" style={{left:pct(REC_LO) + '%', width:(pct(REC_HI) - pct(REC_LO)) + '%'}}
        title="What we recommend" />
      <input type="range" min={ENERGY_MIN} max={ENERGY_MAX} value={value}
        onChange={e => onChange(+e.target.value)} />
      <div className="escale">
        <span>{ENERGY_MIN}</span>
        <span className="erec" style={{left:pct((REC_LO + REC_HI)/2) + '%'}}>{REC_LO}–{REC_HI} recommended</span>
        <span>{ENERGY_MAX}</span>
      </div>
    </div>
  );
}

function Battery({fill = 0, size = 14}){
  const w = Math.round(11 * Math.max(0, Math.min(1, fill)));
  return (
    <svg width={size + 4} height={size} viewBox="0 0 18 14" aria-hidden="true" className="batt">
      <rect x="0.6" y="0.6" width="14.8" height="12.8" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="16" y="4.5" width="2" height="5" rx="1" fill="currentColor"/>
      {w > 0 && <rect x="2" y="2" width={w} height="10" rx="1.5" fill="currentColor"/>}
    </svg>
  );
}

const REPEATS = [
  ['none','Does not repeat'], ['daily','Every day'], ['weekdays','Every weekday'],
  ['weekly','Every week'], ['monthly','Every month'],
];
const repeatLabel = r => (REPEATS.find(x => x[0] === r) || REPEATS[0])[1];
const DAY_LETTERS = ['S','M','T','W','T','F','S'];
const repeatText = t => {
  const d = t.repeatDays || [];
  if(d.length === 7) return 'every day';
  if(d.length === 5 && [1,2,3,4,5].every(x => d.includes(x))) return 'weekdays';
  if(d.length) return d.slice().sort().map(x => DOW[x].slice(0,3)).join(', ');
  return repeatLabel(t.repeat).toLowerCase();
};

// Changing one occurrence of a repeating task. 'one' splits that day off as its
// own task, 'future' ends the series the day before and starts a new one, and
// 'all' edits the series itself.
function applyRepeatEdit({orig, next, scope, occ, add, update}){
  if(scope === 'all' || occ === orig.date) {
    if(scope !== 'one') return update(orig.id, next);
  }
  if(scope === 'one'){
    update(orig.id, {skipDates:[...(orig.skipDates || []), occ]});
    const {id, ...rest} = next;
    return add({...rest, date:occ, repeat:'none', repeatDays:[], skipDates:[], doneDates:[], repeatUntil:null});
  }
  update(orig.id, {repeatUntil: iso(addDays(parseISO(occ), -1))});
  const {id, ...rest} = next;
  add({...rest, date:occ, skipDates:[], doneDates:[]});
}
function applyRepeatDelete({orig, scope, occ, update, remove}){
  if(scope === 'all' || (scope === 'future' && occ === orig.date)) return remove(orig.id);
  if(scope === 'one') return update(orig.id, {skipDates:[...(orig.skipDates || []), occ]});
  update(orig.id, {repeatUntil: iso(addDays(parseISO(occ), -1))});
}

// One stored record, expanded on the fly. Nothing is duplicated in storage, so
// changing a repeating item changes every future copy of it at once.
const occursOn = (item, dk) => {
  const base = item.date;
  if(!base) return false;
  if((item.skipDates || []).includes(dk)) return false;          // removed for just that day
  const days = item.repeatDays || [];
  const r = item.repeat || 'none';
  if(!days.length && r === 'none') return dk === base;
  if(dk < base) return false;
  if(item.repeatUntil && dk > item.repeatUntil) return false;
  const d = parseISO(dk);
  if(days.length) return days.includes(d.getDay());
  // older entries saved before weekday picking existed
  const b = parseISO(base);
  if(r === 'daily')    return true;
  if(r === 'weekdays') return d.getDay() >= 1 && d.getDay() <= 5;
  if(r === 'weekly')   return d.getDay() === b.getDay();
  if(r === 'monthly')  return d.getDate() === b.getDate();
  return dk === base;
};
const isRepeat = item => !!((item.repeatDays || []).length || (item.repeat && item.repeat !== 'none'));

// A repeating task is ticked off per day, not once for the whole series.
const isDone = (t, dk) => isRepeat(t) ? (t.doneDates || []).includes(dk) : !!t.done;
const toggleDone = (t, dk) => {
  if(!isRepeat(t)) return {done: !t.done};
  const list = t.doneDates || [];
  return {doneDates: list.includes(dk) ? list.filter(x => x !== dk) : [...list, dk]};
};

const ROW = 58;
const DEFAULT_DAY = {wake:'07:00', sleep:'23:00'};
const DEFAULT_SETTINGS = {notify:{on:false, before:10}};
const EV_TYPES = [
  {id:'test',     label:'Test or quiz', color:'var(--t-test)'},
  {id:'deadline', label:'Deadline',     color:'var(--t-deadline)'},
  {id:'birthday', label:'Birthday',     color:'var(--t-birthday)'},
  {id:'meeting',  label:'Meeting',      color:'var(--t-meeting)'},
  {id:'other',    label:'Other',        color:'var(--t-other)'},
];
const evColor = t => (EV_TYPES.find(e => e.id === t) || EV_TYPES[4]).color;
const evLabel = t => (EV_TYPES.find(e => e.id === t) || EV_TYPES[4]).label;

/* On the month grid a date is a coloured dot until it is ticked off, and a
   tick afterwards. The dot carries the kind; once it is done the kind matters
   less than the fact that it is behind you. */
const EvMark = ({type, done}) => done
  ? <svg className="dot tick" width="9" height="9" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2 6.4l2.6 2.6L10 3.4" stroke="currentColor" strokeWidth="2.6"
        fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
  : <span className="dot" style={{background:evColor(type)}} />;

/* ============ storage ============
   Tries the artifact storage API first, then falls back to localStorage so the
   file keeps working when you open or host it yourself. */
const DB = {
  async get(key, shared){
    try { const r = await window.storage.get(key, !!shared); if(r) return r.value; } catch(e){}
    try { return localStorage.getItem(key); } catch(e){ return null; }
  },
  async set(key, val, shared){
    let ok = false;
    try { await window.storage.set(key, val, !!shared); ok = true; } catch(e){}
    try { localStorage.setItem(key, val); ok = true; } catch(e){}
    return ok;
  },
  async del(key, shared){
    try { await window.storage.delete(key, !!shared); } catch(e){}
    try { localStorage.removeItem(key); } catch(e){}
  }
};
const dataKey = uid2 => `planit:data:v1:${uid2}`;

async function loadStore(userId){
  const raw = await DB.get(dataKey(userId));
  if(raw){ try { return JSON.parse(raw); } catch(e){ return null; } }
  // first sign-in on a browser that used PlanIt before accounts existed
  const legacy = await DB.get('planit:data:v1');
  if(legacy){ try { return JSON.parse(legacy); } catch(e){} }
  return null;
}

async function saveStore(userId, data){
  await DB.set(dataKey(userId), JSON.stringify(data));
}

// Stored as one JSON string rather than nested fields: it's a single small
// document, it round-trips exactly, and there is nothing to query on.
async function pushPlanner(userId, data){
  await withTimeout(db().collection('planner').doc(userId).set({
    json: JSON.stringify(data), at: Date.now()
  }, {merge:true}), 10000);
}

async function fetchPlanner(uid){
  try{
    const d = await withTimeout(db().collection('planner').doc(uid).get());
    if(!d.exists) return null;
    return {data: JSON.parse(d.data().json), at: d.data().at || 0};
  }catch(e){ return null; }
}

function watchPlanner(childId, cb){
  return db().collection('planner').doc(childId).onSnapshot(
    d => {
      if(!d.exists) return cb({empty:true});
      try{ cb({data: JSON.parse(d.data().json), at: d.data().at, status: d.data().status || null}); }
      catch(e){ cb({error:'Their planner could not be read.'}); }
    },
    err => cb({error: err.code === 'permission-denied'
      ? 'Permission denied. Republish the Firestore rules, then reload.'
      : (err.message || 'Could not reach the database.')})
  );
}
function seed(){
  return {
    tasks:  [],
    events: [],
    ecs:    [],
    lock:   { sessions:0, minutes:0, seconds:0, day: iso(new Date()) },
    settings: {...DEFAULT_SETTINGS},
    day:    null   // null means we still need to ask
  };
}

/* ============ small components ============ */
function Modal({title, onClose, children, footer}){
  useEffect(() => { buzz('light'); }, []);
  useEffect(() => {
    const k = e => { if(e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [onClose]);
  return (
    <div className="scrim" onMouseDown={e => { if(e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
        <div className="modal-head"><h3>{title}</h3><button className="x" onClick={onClose} aria-label="Close">×</button></div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-foot">{footer}</div>}
      </div>
    </div>
  );
}
const Field = ({label, children}) => <label className="field"><span>{label}</span>{children}</label>;
const Empty = ({title, hint}) => <div className="empty"><b>{title}</b>{hint}</div>;
function DateNav({label, onPrev, onNext, onToday}){
  return (
    <div className="row" style={{gap:8}}>
      <div className="navdate">
        <button onClick={onPrev} aria-label="Previous"><IconArrow dir="left" /></button>
        <div className="cur">{label}</div>
        <button onClick={onNext} aria-label="Next"><IconArrow /></button>
      </div>
      <button className="btn sm" onClick={onToday}>Today</button>
    </div>
  );
}
const ARROW_D = {
  right:"M4.5 2.5L8 6l-3.5 3.5",
  left: "M7.5 2.5L4 6l3.5 3.5",
  down: "M2.5 4.5L6 8l3.5-3.5",
  up:   "M2.5 7.5L6 4l3.5 3.5",
};
const IconArrow = ({dir = 'right'}) => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" style={{flex:'none'}}>
    <path d={ARROW_D[dir] || ARROW_D.right}
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconOut = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" style={{flex:'none'}}>
    <path d="M6 14H3.5A1.5 1.5 0 0 1 2 12.5v-9A1.5 1.5 0 0 1 3.5 2H6M10.5 11L14 8l-3.5-3M14 8H6"
      fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconGrip = () => (
  <svg width="10" height="14" viewBox="0 0 10 14" aria-hidden="true" style={{flex:'none', opacity:.5}}>
    {[2,7,12].map(y => [2.5,7.5].map(x => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.2" fill="currentColor" />))}
  </svg>
);

const IconCheck = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" style={{flex:'none'}}>
    <path d="M2 6.4l2.6 2.6L10 3.4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XBtn = ({onClick, label = 'Delete'}) => (
  <button className="iconbtn" onClick={onClick} aria-label={label} title={label}>
    <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2.5 2.5l7 7M9.5 2.5l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </button>
);

const Check = ({on, onClick}) => (
  <button className={'check' + (on ? ' on' : '')} onClick={onClick} aria-pressed={on} aria-label="Mark done">
    {on && <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6.4l2.6 2.6L10 3.4" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
  </button>
);

/* ============ ORGANIZE IT: daily ============ */
function Daily({date, setDate, tasks, update, remove, add, toast, day, setDay, energyBase, onEditBase}){
  const dk = iso(date);
  const dayTasks = tasks.filter(t => t.scope === 'daily' && occursOn(t, dk));
  const tray = dayTasks.filter(t => !t.start);
  const [drag, setDrag] = useState(null);
  const [ghost, setGhost] = useState(null);
  const [editing, setEditing] = useState(null);
  const [dayEdit, setDayEdit] = useState(false);
  const [overTray, setOverTray] = useState(false);
  const gridRef = useRef(null);
  const [nowTop, setNowTop] = useState(null);

  // the day runs from wake to sleep, and can cross midnight
  const wakeM = toMin(day.wake), sleepRaw = toMin(day.sleep);
  const startM = Math.floor(wakeM/60)*60;
  let endM = Math.ceil(sleepRaw/60)*60;
  if(endM <= startM) endM += 1440;
  const sleepM = sleepRaw <= wakeM ? sleepRaw + 1440 : sleepRaw;
  const span = endM - startM;

  const norm = m => m < startM ? m + 1440 : m;             // absolute minute on this day's timeline
  const clampM = m => Math.max(startM, Math.min(endM, m));
  const wire = m => toTime(((m % 1440) + 1440) % 1440);    // back to a clock time string
  const topOf = m => (norm(m) - startM)/60*ROW;

  const scheduled = dayTasks.filter(t => t.start && norm(toMin(t.start)) < endM);
  const outside = dayTasks.filter(t => t.start && norm(toMin(t.start)) >= endM);

  useEffect(() => {
    const tick = () => {
      const n = new Date();
      if(!sameDay(n, date)) return setNowTop(null);
      const m = norm(n.getHours()*60 + n.getMinutes());
      setNowTop(m < startM || m > endM ? null : (m - startM)/60*ROW);
    };
    tick(); const i = setInterval(tick, 60000); return () => clearInterval(i);
  }, [date, startM, endM]);

  const yToMin = y => {
    const r = gridRef.current.getBoundingClientRect();
    const raw = startM + ((y - r.top) / ROW) * 60;
    return clampM(Math.round(raw/5)*5);
  };

  const pending = useRef(null);

  useEffect(() => {
    document.body.classList.remove('dragging');   // clear any stuck scroll lock
    const clear = () => {
      if(pending.current){ clearTimeout(pending.current); pending.current = null; }
      document.body.classList.remove('dragging');
    };
    window.addEventListener('pagehide', clear);
    document.addEventListener('visibilitychange', clear);
    return () => {
      window.removeEventListener('pagehide', clear);
      document.removeEventListener('visibilitychange', clear);
      clear();
    };
  }, []);

  const beginDrag = (pt, task, mode) => {
    buzz('medium');
    const offset = mode === 'move' ? yToMin(pt.clientY) - norm(toMin(task.start)) : 0;
    document.body.classList.add('dragging');
    setDrag({id:task.id, mode, offset, task});
    if(mode === 'place') setGhost({x:pt.clientX, y:pt.clientY, label:task.title});
  };

  // On a phone a swipe has to scroll the day, so only a press-and-hold picks a
  // block up. Moving before the hold completes means you meant to scroll.
  const onDown = (e, task, mode) => {
    if(e.pointerType === 'touch'){
      const sx = e.clientX, sy = e.clientY;
      const stop = () => {
        if(pending.current) clearTimeout(pending.current);
        pending.current = null;
        window.removeEventListener('pointermove', watch);
        window.removeEventListener('pointerup', stop);
        window.removeEventListener('pointercancel', stop);
      };
      const watch = m => {
        if(Math.abs(m.clientY - sy) > 10 || Math.abs(m.clientX - sx) > 10) stop();
      };
      window.addEventListener('pointermove', watch);
      window.addEventListener('pointerup', stop);
      window.addEventListener('pointercancel', stop);
      pending.current = setTimeout(() => {
        stop();
        buzz('medium');
        beginDrag({clientX:sx, clientY:sy}, task, mode);
      }, 260);
      return;
    }
    e.preventDefault();
    beginDrag(e, task, mode);
  };

  useEffect(() => {
    if(!drag) return;
    const overTrayNow = (x, y) => {
      const el = document.elementFromPoint(x, y);
      return !!(el && el.closest && el.closest('[data-tray]'));
    };
    const move = e => {
      if(drag.mode === 'place'){ setGhost(g => g && {...g, x:e.clientX, y:e.clientY}); return; }
      if(drag.mode === 'move') setOverTray(overTrayNow(e.clientX, e.clientY));
      const m = yToMin(e.clientY);
      if(drag.mode === 'move'){
        const s0 = norm(toMin(drag.task.start));
        const dur = Math.max(15, norm(toMin(drag.task.end)) - s0);
        const s = Math.max(startM, Math.min(endM - dur, m - drag.offset));
        update(drag.id, {start:wire(s), end:wire(s+dur)});
      }
    };
    const up = e => {
      // dropped back on the tray: it keeps its name and colour, loses its time
      if(drag.mode === 'move' && overTrayNow(e.clientX, e.clientY)){
        buzz('light');
        update(drag.id, {start:null, end:null});
        toast('Moved to unscheduled');
        setOverTray(false);
        document.body.classList.remove('dragging');
        setDrag(null);
        return;
      }
      setOverTray(false);
      if(drag.mode === 'place'){
        const r = gridRef.current.getBoundingClientRect();
        const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
        if(inside){
          const s = yToMin(e.clientY);
          update(drag.id, {start:wire(s), end:wire(Math.min(endM, s+60))});
          buzz('light');
          toast('Added to the schedule');
        }
        setGhost(null);
      }
      document.body.classList.remove('dragging');
      setDrag(null);
    };
    const hold = ev => ev.preventDefault();
    // Leaving the tab mid-drag means pointerup never arrives, which would
    // otherwise leave the page permanently unscrollable on return.
    const bail = () => { document.body.classList.remove('dragging'); setGhost(null); setDrag(null); };
    const onHide = () => { if(document.hidden) bail(); };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
    window.addEventListener('blur', bail);
    document.addEventListener('visibilitychange', onHide);
    document.addEventListener('touchmove', hold, {passive:false});
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
      window.removeEventListener('blur', bail);
      document.removeEventListener('visibilitychange', onHide);
      document.removeEventListener('touchmove', hold);
      document.body.classList.remove('dragging');
    };
  }, [drag, update, toast, startM, endM]);

  // lane assignment for overlapping blocks
  // Blocks only share width with things they actually overlap. Previously one
  // clash anywhere in the day squeezed every block, which read as everything
  // overlapping. Touching edges (one ends 1:45, the next starts 1:45) don't.
  const laid = useMemo(() => {
    const items = scheduled.map(t => {
      const a = norm(toMin(t.start));
      return {...t, s:a, e:Math.max(norm(toMin(t.end)), a + 1)};
    }).sort((a,b) => a.s - b.s || a.e - b.e);

    const out = [];
    let cluster = [], clusterEnd = -1;
    const flush = () => {
      if(!cluster.length) return;
      const lanes = [];
      cluster.forEach(it => {
        let idx = lanes.findIndex(end => end <= it.s);
        if(idx === -1){ idx = lanes.length; lanes.push(it.e); } else lanes[idx] = it.e;
        it.lane = idx;
      });
      cluster.forEach(it => out.push({...it, lanes:lanes.length}));
      cluster = []; clusterEnd = -1;
    };
    items.forEach(it => {
      if(cluster.length && it.s >= clusterEnd) flush();   // >= so edges don't clash
      cluster.push(it);
      clusterEnd = Math.max(clusterEnd, it.e);
    });
    flush();

    // A one-minute block would be a single pixel, so short blocks are drawn
    // taller, but never so tall that they cover the next block in their lane.
    return out.map(it => {
      const nextInLane = out
        .filter(o => o.lane === it.lane && o.s >= it.e)
        .reduce((best, o) => (best === null || o.s < best) ? o.s : best, null);
      const room = nextInLane === null ? Infinity : (nextInLane - it.s)/60*ROW - 2;
      const natural = (it.e - it.s)/60*ROW - 2;
      return {...it, h: Math.max(6, Math.min(Math.max(natural, 20), room))};
    });
  }, [scheduled, startM]);

  // The earliest slot that doesn't collide with anything, looking from the end
  // of the first thing on the day. School 8–4 means the next block lands at 4.
  const firstFree = (dur = 60) => {
    const busy = scheduled
      .map(t => {
        const a = norm(toMin(t.start));
        return {s:a, e:Math.max(norm(toMin(t.end)), a + 15)};
      })
      .sort((a,b) => a.s - b.s);
    if(busy.length === 0) return clampM(Math.round(wakeM/5)*5);
    let cur = busy[0].e;
    for(let i = 1; i < busy.length; i++){
      if(cur + dur <= busy[i].s) break;      // the gap here is big enough
      cur = Math.max(cur, busy[i].e);
    }
    return Math.max(startM, Math.min(endM - dur, cur));
  };

  const newBlock = () => {
    const s0 = firstFree(60);
    setEditing({id:null, title:'', start:wire(s0), end:wire(Math.min(endM, s0 + 60)), date:dk});
  };

  const hours = [];
  for(let m = startM; m < endM; m += 60) hours.push(m);

  // shaded strips for the minutes before waking and after sleeping
  const preTop = (wakeM - startM)/60*ROW;
  const postTop = (sleepM - startM)/60*ROW;

  return (
    <div>
      <div className="spread dayhead">
        <DateNav label={fmtDay(date)} onPrev={() => setDate(addDays(date,-1))} onNext={() => setDate(addDays(date,1))} onToday={() => setDate(new Date())} />
        <div className="row" style={{gap:8}}>
          <button data-tour="energy" className="energybtn" disabled={!onEditBase}
            onClick={() => onEditBase && onEditBase()}
            title={onEditBase ? 'Change your baseline' : 'Viewing only'}>
            <EnergyPill total={dayEnergy(tasks, dk)} base={energyBase} />
          </button>
        </div>
      </div>

      <button className="fab" onClick={newBlock} aria-label="New time block" title="New time block">+</button>

      <div className="sched-wrap" data-tour="schedule">
        <div>
          <div className="anchor wake" data-tour="dayhours" onClick={() => setDayEdit(true)} role="button" tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setDayEdit(true)}>
            <span>Wake up</span><span className="mono">{pretty(day.wake)}</span>
          </div>
          <div className="grid-scroll">
            <div className="grid-inner" ref={gridRef}>
              {hours.map(m => (
                <div className="hourrow" key={m}>
                  <div className="h mono">{pretty(wire(m))}</div>
                  <div className="slot" onDoubleClick={e => {
                    const clicked = yToMin(e.clientY);
                    // If something is already scheduled earlier in the day, start
                    // at the first gap instead of leaving an accidental hole.
                    const hasEarlier = scheduled.some(t => norm(toMin(t.start)) < clicked);
                    const s0 = hasEarlier ? firstFree(60) : clicked;
                    setEditing({id:null, title:'', start:wire(s0), end:wire(Math.min(endM, s0+60)), date:dk});
                  }} />
                </div>
              ))}
              {preTop > 0 && <div className="asleep" style={{top:0, height:preTop}} />}
              {postTop < span/60*ROW && <div className="asleep" style={{top:postTop, bottom:0}} />}
              {nowTop !== null && <div className="nowline" style={{top:nowTop}} />}
              <div className="blocks">
                {laid.map(t => {
                  const w = 100/t.lanes;
                  return (
                    <div key={t.id}
                      className={'block' + (drag && drag.id === t.id ? ' dragging' : '') + (isDone(t, dk) ? ' done' : '')}
                      style={{top:(t.s - startM)/60*ROW + 1, height:t.h,
                              left:`calc(${t.lane*w}% + 6px)`, width:`calc(${w}% - 12px)`,
                              ...(blockHex(t.color) ? {
                                '--bc-soft': `var(--bc-${t.color}-soft)`,
                                borderLeftColor: blockHex(t.color)
                              } : {})}}
                      onPointerDown={e => onDown(e, t, 'move')}
                      onDoubleClick={() => setEditing(t)}>
                      <div className="bt">{t.title}</div>
                      <div className="bm mono">
                        {pretty(t.start)} – {pretty(t.end)}
                        {t.onWeek && <span className="onweek" title="Shown on the weekly calendar">W</span>}
                        {isRepeat(t) && <span className="onweek" title={repeatText(t)}>↻</span>}
                        {t.remind && <span className="onweek" title="Reminder on"><BellIcon size={11} /></span>}
                        {t.energy ? <span className="blockenergy" title={`${energyLabel(t.energy)} energy`}>
                          {fmtE(taskEnergy(t))} <EnergyIcon v={t.energy} /></span> : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="anchor sleep" onClick={() => setDayEdit(true)} role="button" tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setDayEdit(true)}>
            <span>Sleep</span><span className="mono">{pretty(day.sleep)}</span>
          </div>
        </div>

        <div className={'tray' + (overTray ? ' over' : '')} data-tray>
          <div className="eyebrow" style={{marginBottom:8}}>Unscheduled, from List It</div>
          {overTray && <div className="traydrop">Drop to unschedule</div>}
          {tray.length === 0
            ? <div className="empty" style={{padding:'18px 14px',fontSize:13}}><b>Nothing waiting</b>Everything on today's list has a time.</div>
            : tray.map(t => (
              <div key={t.id} className="tray-item" onPointerDown={e => onDown(e, t, 'place')} title="Drag onto the schedule">
                <span style={{color:'var(--ink35)',marginTop:3}}><IconGrip /></span>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontWeight:600,fontSize:13.5}}>{t.title}</div>
                  <div style={{fontSize:11,color:'var(--ink35)'}}>Drag to place, or</div>
                  <button className="btn sm" style={{marginTop:5}} onClick={() => {
                    const s0 = firstFree(60);
                    update(t.id, {start:wire(s0), end:wire(Math.min(endM, s0 + 60))});
                    toast(`Placed at ${pretty(wire(s0))}. Drag to adjust`);
                  }}>Auto-place</button>
                </div>
              </div>
            ))}

          {outside.length > 0 && (
            <div style={{marginTop:14}}>
              <div className="eyebrow" style={{marginBottom:8}}>Outside your waking hours</div>
              {outside.map(t => (
                <div key={t.id} className="tray-item" style={{cursor:'default'}}>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontWeight:600,fontSize:13.5}}>{t.title}</div>
                    <div className="mono" style={{fontSize:11,color:'var(--ink35)'}}>{pretty(t.start)} – {pretty(t.end)}</div>
                    <button className="btn sm" style={{marginTop:5}} onClick={() => update(t.id, {start:null, end:null})}>Unschedule</button>
                  </div>
                </div>
              ))}
            </div>
          )}


        </div>
      </div>

      {ghost && <div className="draglabel" style={{left:ghost.x+12, top:ghost.y-14}}>{ghost.label}</div>}

      {dayEdit && <DayEditor day={day} onClose={() => setDayEdit(false)}
        onSave={d => { setDay(d); setDayEdit(false); toast('Day updated'); }} />}

      {editing && <BlockEditor block={editing} day={day} occ={dk} add={add} update={update} remove={remove}
        onClose={() => setEditing(null)}
        onSave={b => {
          if(b.id) update(b.id, b); else add({...b, scope:'daily', done:false});
          setEditing(null);
        }}
        onDelete={id => { remove(id); setEditing(null); }} />}
    </div>
  );
}

function DayEditor({day, onClose, onSave, first}){
  const [f, setF] = useState(day);
  const set = (k,v) => setF(p => ({...p,[k]:v}));
  const wm = toMin(f.wake), sm0 = toMin(f.sleep);
  const awake = ((sm0 <= wm ? sm0 + 1440 : sm0) - wm)/60;
  const crosses = sm0 <= wm;
  return (
    <Modal title={first ? 'When does your day run?' : 'Your wake and sleep times'} onClose={onClose}
      footer={<>
        {!first && <button className="btn ghost" onClick={onClose}>Cancel</button>}
        <button className="btn primary" onClick={() => onSave(f)}>{first ? 'Start planning' : 'Save times'}</button>
      </>}>
      <p style={{marginTop:0,color:'var(--ink60)',fontSize:13.5}}>
        Your daily schedule starts and ends here instead of a fixed 6am to 11pm. These two repeat every day. Change them any time from the Daily view.
      </p>
      <div className="grid2">
        <Field label="I wake up at"><input type="time" value={f.wake} onChange={e => set('wake', e.target.value)} /></Field>
        <Field label="I go to sleep at"><input type="time" value={f.sleep} onChange={e => set('sleep', e.target.value)} /></Field>
      </div>
      <div className="card" style={{fontSize:13,color:'var(--ink60)'}}>
        That's <b style={{color:'var(--ink)'}}>{awake % 1 === 0 ? awake : awake.toFixed(1)} hours</b> awake
        {crosses ? ', running past midnight, so the grid keeps going into the early hours.' : '.'}
        {awake < 6 && <span style={{display:'block',marginTop:5,color:'var(--rule)'}}>That's a short day. Double-check the times are right.</span>}
      </div>
      <div className="row" style={{gap:7,marginTop:12,flexWrap:'wrap'}}>
        <span className="eyebrow" style={{marginRight:2}}>Quick set</span>
        {[['Early bird','05:30','21:30'],['School day','07:00','23:00'],['Night owl','09:00','01:30']].map(([l,w,s]) => (
          <button key={l} className="chip" onClick={() => setF({wake:w, sleep:s})}>{l}</button>
        ))}
      </div>
    </Modal>
  );
}

function BlockEditor({block, day, onClose, onSave, onDelete, occ, add, update, remove}){
  const legacyDays = () => {
    const r = block.repeat || 'none', b = block.date ? parseISO(block.date).getDay() : 0;
    if(r === 'daily') return [0,1,2,3,4,5,6];
    if(r === 'weekdays') return [1,2,3,4,5];
    if(r === 'weekly') return [b];
    return [];
  };
  const [f, setF] = useState({title:block.title||'', start:block.start||day.wake,
    end:block.end||day.sleep, date:block.date, color:block.color || null,
    onWeek: !!block.onWeek, energy: block.energy || 0, remind: !!block.remind,
    repeatDays: (block.repeatDays && block.repeatDays.length) ? block.repeatDays : legacyDays(),
    repeatUntil: block.repeatUntil || ''});
  const [err, setErr] = useState('');
  const [custom, setCustom] = useState(false);
  const [asking, setAsking] = useState(null);     // null | 'save' | 'delete'
  const set = (k,v) => setF(p => ({...p,[k]:v}));
  const durOf = p => (((toMin(p.end) - toMin(p.start)) % 1440) + 1440) % 1440 || 60;
  const setStart = v => setF(p => {
    const dur = durOf(p);
    return {...p, start:v, end: toTime((toMin(v) + dur) % 1440)};
  });
  const setLength = mins => setF(p => ({...p, end: toTime((toMin(p.start) + mins) % 1440)}));
  const toggleDay = d => setF(p => ({...p, repeatDays: p.repeatDays.includes(d)
    ? p.repeatDays.filter(x => x !== d) : [...p.repeatDays, d].sort()}));

  const wasRepeating = block.id && isRepeat(block);
  const payload = () => ({...block, ...f, title:f.title.trim(),
    repeat:'none', repeatUntil: f.repeatDays.length ? (f.repeatUntil || null) : null});

  const save = () => {
    if(!f.title.trim()) return setErr('Give it a name first.');
    if(wasRepeating && occ) return setAsking('save');
    onSave(payload());
  };
  const del = () => {
    if(wasRepeating && occ) return setAsking('delete');
    onDelete(block.id);
  };
  const scoped = scope => {
    if(asking === 'save') applyRepeatEdit({orig:block, next:payload(), scope, occ, add, update});
    else applyRepeatDelete({orig:block, scope, occ, update, remove});
    onClose();
  };

  // keep the time, move the day
  const nextDay = () => {
    const d0 = iso(addDays(parseISO(f.date || iso(new Date())), 1));
    onSave({...payload(), date:d0});
  };

  if(asking) return (
    <Modal title={asking === 'save' ? 'Change a repeating task' : 'Delete a repeating task'} onClose={() => setAsking(null)}>
      <p style={{marginTop:0, color:'var(--ink60)', fontSize:13.5}}>
        "{block.title}" repeats. Which days should this {asking === 'save' ? 'change' : 'removal'} apply to?
      </p>
      <button className="rolecard" onClick={() => scoped('one')}>
        <span><b>Just {fmtDay(parseISO(occ))}</b><small>Every other day stays as it was.</small></span>
      </button>
      <button className="rolecard" onClick={() => scoped('future')}>
        <span><b>This day and every one after</b><small>Earlier days are left alone.</small></span>
      </button>
      <button className="rolecard" onClick={() => scoped('all')}>
        <span><b>Every day it repeats</b><small>The whole series, past and future.</small></span>
      </button>
    </Modal>
  );

  return (
    <Modal title={block.id ? 'Edit time block' : 'New time block'} onClose={onClose}
      footer={<>
        {block.id && <button className="btn danger" onClick={del}>Delete</button>}
        <button className="btn primary" onClick={save}>Save block</button>
      </>}>
      <Field label="What are you doing?"><input autoFocus value={f.title}
        onChange={e => { set('title', e.target.value); setErr(''); }}
        onKeyDown={e => { if(e.key === 'Enter'){ e.preventDefault(); e.target.blur(); } }}
        placeholder="Enter what you're doing here" /></Field>
      {err && <div className="formerr">{err}</div>}
      <div className="grid2">
        <Field label="Starts"><input type="time" value={f.start} onChange={e => setStart(e.target.value)} /></Field>
        <Field label="Ends"><input type="time" value={f.end} onChange={e => set('end', e.target.value)} /></Field>
      </div>

      <div className="field">
        <span className="spread">How long<span className="counter">{durOf(f)} min</span></span>
        <div className="row" style={{gap:7, flexWrap:'wrap'}}>
          {[1,15,30,60,90].map(n => (
            <button key={n} className={'chip' + (!custom && durOf(f) === n ? ' on' : '')}
              onClick={() => { setCustom(false); setLength(n); }}>{n} min</button>
          ))}
          <button className={'chip' + (custom ? ' on' : '')} onClick={() => setCustom(true)}>Custom</button>
        </div>
        {custom && (
          <div className="row" style={{gap:8, marginTop:10}}>
            <input type="number" min="1" max="1440" value={durOf(f)} style={{width:110}}
              onChange={e => setLength(Math.max(1, Math.min(1440, +e.target.value || 1)))} />
            <span style={{fontSize:13, color:'var(--ink60)'}}>minutes</span>
          </div>
        )}
      </div>

      <div className="field">
        <span className="spread">How much energy will it take?
          <span className="counter">{fmtE(taskEnergy(f))} for this length</span></span>
        <div className="erow">
          {ENERGY.map(([v,l]) => (
            <button key={v} className={'echip' + ((f.energy || 0) === v ? ' on' : '')}
              onClick={() => set('energy', v)} title={l} aria-label={l}><EnergyIcon v={v} /></button>
          ))}
        </div>
      </div>

      <Field label="Date"><input type="date" value={f.date} onChange={e => set('date', e.target.value)} /></Field>

      <div className="field">
        <span className="spread">Repeats on
          <span className="counter">{f.repeatDays.length ? repeatText(f) : 'does not repeat'}</span></span>
        <div className="daypicks">
          {DAY_LETTERS.map((l, d) => (
            <button key={d} className={'daypick' + (f.repeatDays.includes(d) ? ' on' : '')}
              onClick={() => toggleDay(d)} aria-label={DOW[d]} title={DOW[d]}>{l}</button>
          ))}
        </div>
      </div>
      {f.repeatDays.length > 0 && (
        <Field label="Repeat until (optional)">
          <input type="date" value={f.repeatUntil || ''} onChange={e => set('repeatUntil', e.target.value)} />
        </Field>
      )}

      <label className="row" style={{gap:9,margin:'2px 0 12px',fontSize:13.5,fontWeight:500,alignItems:'flex-start'}}>
        <input type="checkbox" checked={f.onWeek} onChange={e => set('onWeek', e.target.checked)}
          style={{width:16,height:16,marginTop:2,flex:'none'}} />
        <span>Show this on the weekly calendar</span>
      </label>

      <label className="row" style={{gap:9,margin:'0 0 16px',fontSize:13.5,fontWeight:500,alignItems:'flex-start'}}>
        <input type="checkbox" checked={f.remind} onChange={e => set('remind', e.target.checked)}
          style={{width:16,height:16,marginTop:2,flex:'none'}} />
        <span>Remind me before this starts</span>
      </label>
      <div className="field">
        <span>Colour</span>
        <div className="blockcolors">
          {BLOCK_COLORS.map((c, i) => (
            <button key={c.id} className={'bc' + (f.color === c.id ? ' on' : '')}
              style={{background:`var(--bc-${c.id})`}} onClick={() => set('color', c.id)}
              title={`Colour ${i + 1}`} aria-label={`Colour ${i + 1}`} />
          ))}
        </div>
      </div>
      {block.id && (
        <div className="row" style={{gap:8, flexWrap:'wrap'}}>
          {!isRepeat(block) && <button className="btn sm" onClick={nextDay}>Move to the next day</button>}
          <button className="btn sm" onClick={() => onSave({...payload(), start:null, end:null})}>Move back to unscheduled</button>
        </div>
      )}
    </Modal>
  );
}

/* ============ ORGANIZE IT: weekly ============ */
function Weekly({date, setDate, tasks, events, addEvent, updateEvent, removeEvent, setDaily, update, remove, add, day, toast, energyBase, baseFor}){
  const s = startOfWeek(date);
  const days = Array.from({length:7}, (_,i) => addDays(s,i));
  const wk = weekKey(date);
  const inWeek = d => { const x = parseISO(d); return x >= s && x < addDays(s,7); };
  const weekEvents = days.flatMap(d => {
    const k = iso(d);
    return events.filter(e => occursOn(e, k)).map(e => ({...e, on:k}));
  });
  const weekTodos = tasks.filter(t => t.scope === 'weekly' && t.anchor === wk);
  const [newEv, setNewEv] = useState(null);
  const [editTask, setEditTask] = useState(null);
  const [editOcc, setEditOcc] = useState(null);
  const [editEv, setEditEv] = useState(null);

  // Things from List It that aren't on the week yet: unscheduled items from
  // these seven days, plus this week's goals.
  // Every day task in this week, whether or not it's on the calendar. Putting
  // something on the week shouldn't take it out of the list you manage it from.
  const inbox = tasks.filter(t => t.scope === 'daily' && inWeek(t.date))
    .sort((a,b) => (a.date || '').localeCompare(b.date || '')
      || (a.start || '~').localeCompare(b.start || '~'));

  const [drag, setDrag] = useState(null);
  const [ghost, setGhost] = useState(null);
  const [overDay, setOverDay] = useState(null);
  const hold = useRef(null);

  const beginDrag = (pt, task, from) => {
    setDrag({task, from});
    setGhost({x:pt.clientX, y:pt.clientY, label:task.title});
  };

  const onGrab = (e, task, from = 'tray') => {
    if(e.pointerType === 'touch'){
      const sx = e.clientX, sy = e.clientY;
      const stop = () => {
        clearTimeout(hold.current); hold.current = null;
        window.removeEventListener('pointermove', watch);
        window.removeEventListener('pointerup', stop);
      };
      const watch = m => {
        if(Math.abs(m.clientY - sy) > 10 || Math.abs(m.clientX - sx) > 10) stop();
      };
      window.addEventListener('pointermove', watch);
      window.addEventListener('pointerup', stop);
      hold.current = setTimeout(() => {
        stop();
        buzz('medium');
        beginDrag({clientX:sx, clientY:sy}, task, from);
      }, 260);
      return;
    }
    e.preventDefault();
    beginDrag(e, task, from);
  };

  useEffect(() => {
    if(!drag) return;
    const dayUnder = (x, y) => {
      const el = document.elementFromPoint(x, y);
      const col = el && el.closest ? el.closest('[data-day]') : null;
      return col ? col.getAttribute('data-day') : null;
    };
    const overTray = (x, y) => {
      const el = document.elementFromPoint(x, y);
      return !!(el && el.closest && el.closest('[data-tray]'));
    };
    const move = e => {
      setGhost(g => g && {...g, x:e.clientX, y:e.clientY});
      setOverDay(overTray(e.clientX, e.clientY) ? 'tray' : dayUnder(e.clientX, e.clientY));
    };
    const up = e => {
      const dk2 = dayUnder(e.clientX, e.clientY);
      if(overTray(e.clientX, e.clientY)){
        if(drag.from === 'day'){
          update(drag.task.id, {onWeek:false});
          toast('Taken off the week');
        }
      } else if(dk2){
        update(drag.task.id, {scope:'daily', date:dk2, onWeek:true, anchor:null});
        buzz('light');
        toast(`Moved to ${DOW[parseISO(dk2).getDay()]}`);
      }
      setDrag(null); setGhost(null); setOverDay(null);
      document.body.classList.remove('dragging');
    };
    const block = ev => ev.preventDefault();
    document.body.classList.add('dragging');
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
    document.addEventListener('touchmove', block, {passive:false});
    const bail = () => { setDrag(null); setGhost(null); setOverDay(null); document.body.classList.remove('dragging'); };
    window.addEventListener('blur', bail);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
      window.removeEventListener('blur', bail);
      document.removeEventListener('touchmove', block);
      document.body.classList.remove('dragging');
    };
  }, [drag, update, toast]);

  return (
    <div>
      <div className="spread dayhead">
        <DateNav label={fmtWeek(date)} onPrev={() => setDate(addDays(date,-7))} onNext={() => setDate(addDays(date,7))} onToday={() => setDate(new Date())} />
        <button className="btn primary" onClick={() => setNewEv({title:'', date:iso(date), type:'deadline', note:''})}>+ Add to the week</button>
      </div>

      <div className="week" data-tour="week">
        {days.map(d => {
          const dk = iso(d);
          const evs = events.filter(e => occursOn(e, dk));
          const blocks = tasks.filter(t => t.scope === 'daily' && t.onWeek && occursOn(t, dk));
          return (
            <div key={dk} data-day={dk}
              className={'daycol' + (sameDay(d, new Date()) ? ' is-today' : '') + (overDay === dk ? ' dropping' : '')}>
              <h4>
                <span className="spread">
                  <span>{DOW[d.getDay()]}<small>{MON[d.getMonth()].slice(0,3)} {d.getDate()}</small></span>
                  <EnergyPill small total={dayEnergy(tasks, dk)} base={baseFor ? baseFor(dk) : energyBase} />
                </span>
              </h4>
              <div className="inner">
                <div className="daypills">
                {evs.map(e => (
                  <div key={e.id} className={'pill draggable' + (isDone(e, dk) ? ' done' : '')}
                    onDoubleClick={() => setEditEv(e)}
                    title="Double-click to edit"
                    style={{borderLeftColor:evColor(e.type), background:'var(--soft)'}}>
                    <b style={{fontWeight:600}}>{e.title}</b>
                    <div style={{color:'var(--ink35)',fontSize:10.5}}>
                      {isDone(e, dk) ? 'Done' : evLabel(e.type)}</div>
                  </div>
                ))}
                {blocks.slice(0,4).map(t => (
                  <div key={t.id} className="pill draggable"
                    onPointerDown={e => onGrab(e, t, 'day')} onDoubleClick={() => { setEditTask(t); setEditOcc(dk); }}
                    title="Double-click to edit · drag to another day"
                    style={{borderLeftColor: blockHex(t.color) || 'var(--line)', background:'var(--soft)', color:'var(--ink60)'}}>
                    {t.start && <span className="mono" style={{fontSize:10}}>{pretty(t.start)} </span>}{t.title}
                  </div>
                ))}
                {evs.length === 0 && blocks.length === 0 && <div style={{fontSize:11.5,color:'var(--ink35)'}}>Clear</div>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={'weektray' + (overDay === 'tray' ? ' over' : '')} data-tray>
        <div className="eyebrow" style={{marginBottom:8}}>
          From List It. Drag onto a day to put it on the week, or back here to take it off
        </div>
        {inbox.length === 0
          ? <span style={{fontSize:12.5,color:'var(--ink35)'}}>Nothing on this week's lists yet.</span>
          : inbox.map(t => {
            const done = isDone(t, t.date);
            return (
              <div key={t.id} className={'inboxrow' + (done ? ' done' : '')}
                onDoubleClick={ev => { if(!ev.target.closest('button')) { setEditTask(t); setEditOcc(t.date); } }}
                title="Double-click to edit">
                <button className="grabber" onPointerDown={e => onGrab(e, t, t.onWeek ? 'day' : 'tray')}
                  title="Drag onto a day"><IconGrip /></button>
                <Check on={done} onClick={() => update(t.id, toggleDone(t, t.date))} />
                <div className="txt">
                  <b>{t.title}</b>
                  <div className="meta">
                    {blockHex(t.color) && <i className="cdot" style={{background:blockHex(t.color)}} />}
                    {t.onWeek ? `On ${DOW[parseISO(t.date).getDay()]}` : 'Not on the week'}
                    {t.start ? ` · ${pretty(t.start)}` : ''}
                    {isRepeat(t) ? ` · ${repeatText(t)}` : ''}
                  </div>
                </div>
                <div className="todo-actions">
                  <button className="btn sm" onClick={() => { setEditTask(t); setEditOcc(t.date); }}>Edit</button>
                  <XBtn onClick={() => remove(t.id)} />
                </div>
              </div>
            );
          })}
      </div>

      {ghost && <div className="draglabel" style={{left:ghost.x+12, top:ghost.y-14}}>{ghost.label}</div>}

      <div className="divider" style={{margin:'22px 0 18px'}} />
      <div className="wkbottom">
        <div>
          <div className="eyebrow" style={{marginBottom:9}}>Deadlines &amp; meetings this week</div>
          {weekEvents.length === 0
            ? <Empty title="Nothing on the calendar yet" hint="Add a due date, test, or meeting to see it here." />
            : weekEvents.map(e => {
              const done = isDone(e, e.on);
              return (
                <div key={e.id + e.on} className={'todo' + (done ? ' done' : '')} style={{alignItems:'center'}}
                  onDoubleClick={ev2 => { if(!ev2.target.closest('button')) setEditEv(e); }}
                  title="Double-click to edit">
                  <Check on={done} onClick={() => updateEvent(e.id, toggleDone(e, e.on))} />
                  <div className="txt">
                    <b>{e.title}</b>
                    <div className="meta">
                      {evLabel(e.type)} · {fmtDay(parseISO(e.on))}
                      {isRepeat(e) ? ` · ${repeatText(e)}` : ''}{e.note ? ` · ${e.note}` : ''}
                    </div>
                  </div>
                  <div className="todo-actions"><XBtn onClick={() => removeEvent(e.id)} label="Remove" /></div>
                </div>
              );
            })}
        </div>
        <div>
          <div className="eyebrow" style={{marginBottom:9}}>Week goals, from List It</div>
          {weekTodos.length === 0
            ? <Empty title="No weekly goals set" hint="Head to List It → Weekly to add them." />
            : weekTodos.map(t => (
              <div key={t.id} className={'todo' + (t.done ? ' done' : '')} style={{alignItems:'center'}}>
                <Check on={t.done} onClick={() => update(t.id, {done:!t.done})} />
                <div className="txt"><b>{t.title}</b></div>
                <span className="status">{t.done ? 'Done' : 'Open'}</span>
              </div>
            ))}
        </div>
      </div>

      {newEv && <EventEditor ev={newEv} onClose={() => setNewEv(null)}
        onSave={e => { addEvent(e); setNewEv(null); }} />}

      {editEv && <EventEditor ev={editEv} onClose={() => setEditEv(null)}
        onSave={e => { updateEvent(e.id, e); setEditEv(null); }}
        onDelete={() => { removeEvent(editEv.id); setEditEv(null); }} />}

      {editTask && <BlockEditor block={editTask} day={day || DEFAULT_DAY} occ={editOcc || editTask.date}
        add={add} update={update} remove={remove} onClose={() => setEditTask(null)}
        onSave={b => { update(b.id, b); setEditTask(null); }}
        onDelete={id => { remove(id); setEditTask(null); }} />}
    </div>
  );
}

/* ---- calendar feeds ----
   Any site that publishes a read-only iCalendar (.ics) feed can be read:
   Canvas (Calendar -> Calendar Feed), a Google Calendar a teacher shares, a
   school sports calendar, an SAT or AP prep course's schedule. Each event
   lands on the monthly calendar.

   The fetch goes through a small Netlify function, because almost none of
   these sites send CORS headers, so a browser cannot read them directly. See
   netlify/functions/canvas-feed.mjs, which keeps its original name because
   the shipped iOS build already points at that address. */

// Resolved when it is called, not when the file loads: isNativeApp is defined
// further down, and in the app a relative path would point at the bundle
// instead of at the site.
const canvasEndpoint = () =>
  (isNativeApp() ? CONFIG.SITE_ORIGIN.replace(/\/+$/, '') : '') + '/.netlify/functions/canvas-feed';

// RFC 5545 folds long lines by starting the continuation with a space or tab.
// Unfolding has to happen before anything is parsed or long titles get cut.
function icsUnfold(text){
  return String(text).replace(/\r\n/g, '\n').replace(/\r/g, '\n')
    .replace(/\n[ \t]/g, '');
}

// Escaped commas, semicolons and newlines come back as themselves.
function icsText(v){
  return String(v || '')
    .replace(/\\n/gi, ' ')
    .replace(/\\([,;\\])/g, '$1')
    .trim();
}

// DTSTART;VALUE=DATE:20261014            -> all day, local
// DTSTART:20261014T235900Z               -> an instant, converted to local
// DTSTART;TZID=America/New_York:2026...  -> read as local wall time
function icsDate(name, value){
  const v = String(value || '').trim();
  const dateOnly = /^(\d{4})(\d{2})(\d{2})$/.exec(v);
  if(dateOnly){
    return {date:`${dateOnly[1]}-${dateOnly[2]}-${dateOnly[3]}`, allDay:true};
  }
  const stamp = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z)?$/.exec(v);
  if(!stamp) return null;
  const [, y, mo, d, h, mi, se, zulu] = stamp;
  const dt = zulu
    ? new Date(Date.UTC(+y, +mo - 1, +d, +h, +mi, +se))
    : new Date(+y, +mo - 1, +d, +h, +mi, +se);
  if(isNaN(dt.getTime())) return null;
  const p = n => String(n).padStart(2, '0');
  return {
    date: `${dt.getFullYear()}-${p(dt.getMonth() + 1)}-${p(dt.getDate())}`,
    time: `${p(dt.getHours())}:${p(dt.getMinutes())}`,
    allDay: false
  };
}

/* Works out what kind of entry an imported event is.

   A due date has no length: Canvas and most assignment feeds either leave out
   DTEND or set it equal to DTSTART. Something with a real span is a thing you
   turn up to, so it reads as an event rather than a deadline. A summary saying
   test, quiz or exam beats both, because that is the one students most want
   to see coming. */
function icsType(summary, start, end){
  if(/\b(test|quiz|exam|midterm|final|finals)\b/i.test(summary || '')) return 'test';
  if(start && end && !start.allDay && !end.allDay){
    const span = (end.date + 'T' + (end.time || '00:00')) !== (start.date + 'T' + (start.time || '00:00'));
    if(span) return 'other';
  }
  return 'deadline';
}

/* Returns one entry per event, already in the shape the monthly calendar
   stores: {cid, title, date, time, note, type}. Anything without a usable
   date or title is dropped rather than guessed at. */
function parseICS(text){
  const lines = icsUnfold(text).split('\n');
  const out = [];
  let cur = null;
  for(const raw of lines){
    const line = raw.trim();
    if(!line) continue;
    if(/^BEGIN:VEVENT$/i.test(line)){ cur = {}; continue; }
    if(/^END:VEVENT$/i.test(line)){
      if(cur && cur.start && cur.summary){
        out.push({
          cid: cur.uid || (cur.summary + '@' + cur.start.date),
          title: cur.summary.slice(0, 140),
          date: cur.start.date,
          time: cur.start.allDay ? null : cur.start.time,
          note: (cur.course || '').slice(0, 80),
          type: icsType(cur.summary, cur.start, cur.end)
        });
      }
      cur = null; continue;
    }
    if(!cur) continue;
    const split = line.indexOf(':');
    if(split < 1) continue;
    const key = line.slice(0, split);
    const value = line.slice(split + 1);
    const name = key.split(';')[0].toUpperCase();
    if(name === 'UID')          cur.uid = value.trim().slice(0, 160);
    else if(name === 'SUMMARY') cur.summary = icsText(value);
    else if(name === 'DTSTART') cur.start = icsDate(name, value);
    else if(name === 'DTEND')   cur.end = icsDate(name, value);
    else if(name === 'LOCATION' && !cur.course) cur.course = icsText(value);
    else if(name === 'DESCRIPTION' && !cur.course){
      // Canvas puts the course name in brackets at the end of the summary on
      // some installs and in the description on others.
      const m = /\[([^\]]{2,60})\]\s*$/.exec(icsText(value));
      if(m) cur.course = m[1];
    }
  }
  // a Canvas summary often ends with "[Course name]", so it becomes the note
  out.forEach(e => {
    const m = /^(.*?)\s*\[([^\]]{2,60})\]$/.exec(e.title);
    if(m){ e.title = m[1].trim(); if(!e.note) e.note = m[2].trim(); }
  });
  return out;
}

/* Merges a fetched feed into the stored events. Matching is by cid, so syncing
   twice updates in place instead of doubling everything up, and a Canvas item
   that has been deleted upstream goes away. Anything the student typed
   themselves is left completely alone. */
/* Several feeds can be connected at once: a school Canvas, a second campus, a
   club's calendar, an SAT course. Each imported date remembers which feed it
   came from, so one feed can be synced or removed without disturbing the
   others. Dates saved before feeds existed have no `feed` and belong to the
   first one. The stored shape still says canvas throughout, so a planner saved
   by an older build opens unchanged. */
const LEGACY_FEED = 'f0';
const feedOf = e => e.feed || LEGACY_FEED;
const isCanvas = e => e && e.source === 'canvas';

// Reads whichever shape the planner was saved in. The single-feed settings.canvas
// from an older build is presented as one feed rather than migrated, so an older
// build can still open the same save.
const feedsOf = st => {
  const list = (st && st.canvasFeeds) || null;
  if(list && list.length) return list;
  const one = st && st.canvas;
  if(one && one.url) return [{id:LEGACY_FEED, url:one.url, name:'', at:one.at, count:one.count}];
  return [];
};
// Unnamed feeds are called after the site they came from, which is usually
// enough to tell two of them apart at a glance.
const feedLabel = f => {
  if(f.name) return f.name;
  try {
    const h = new URL(f.url).hostname.replace(/^www\./, '');
    if(/\.instructure\.com$/i.test(h)) return h.replace(/\.instructure\.com$/i, '') + ' (Canvas)';
    if(/^calendar\.google\.com$/i.test(h)) return 'Google Calendar';
    if(/(^|\.)outlook\.(office|live)\.com$/i.test(h)) return 'Outlook';
    return h;
  }
  catch(e){ return 'Calendar'; }
};

function mergeFeed(events, feedId, fetched){
  const others = (events || []).filter(e => !isCanvas(e) || feedOf(e) !== feedId);
  const old = {};
  (events || []).filter(e => isCanvas(e) && feedOf(e) === feedId)
    .forEach(e => { old[e.cid] = e; });
  const next = fetched.map(f => {
    const prev = old[f.cid];
    const row = {
      id: (prev && prev.id) || uid(),
      source: 'canvas',
      feed: feedId,
      cid: f.cid,
      title: f.title,
      date: f.date,
      type: (prev && prev.type) || f.type,     // keep a type they changed
      note: f.note || '',
      time: f.time || null,
      // Ticking an assignment off is the student's own work, not the feed's,
      // so it has to survive every later check or the ticks vanish overnight.
      done: !!(prev && prev.done)
    };
    // only carried when it exists: Firestore refuses a field set to undefined
    if(prev && prev.doneDates) row.doneDates = prev.doneDates;
    return row;
  });
  return {
    events: [...others, ...next],
    added: next.filter(n => !old[n.cid]).length,
    removed: Object.keys(old).filter(k => !fetched.some(f => f.cid === k)).length,
    total: next.length
  };
}

// Takes one feed's dates away and leaves every other feed, and everything the
// student typed, exactly where it was.
function dropFeed(events, feedId){
  return (events || []).filter(e => !(isCanvas(e) && feedOf(e) === feedId));
}
const countFeed = (events, feedId) =>
  (events || []).filter(e => isCanvas(e) && feedOf(e) === feedId).length;

async function fetchCanvas(url){
  let res, body;
  try{
    res = await fetch(canvasEndpoint(), {
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({url})
    });
    body = await res.text();
  }catch(e){
    throw new Error("Could not reach PlanIt's calendar helper. Check your connection and try again.");
  }

  // If the helper is missing, the host answers with its own 404 page. Showing
  // that raw dumps a screenful of HTML into the error box, so it is named for
  // what it is: the site is deployed but the function beside it is not.
  const looksLikePage = /^\s*<(!doctype|html)/i.test(body || '');
  if(res.status === 404 && looksLikePage){
    throw new Error(
      'The calendar helper is not on the server yet. It lives at ' +
      'netlify/functions/canvas-feed.mjs and has to be deployed before a feed can be read.');
  }
  if(looksLikePage){
    throw new Error('The calendar helper answered with a web page instead of a calendar.');
  }
  if(!res.ok){
    const msg = (body || '').trim();
    throw new Error(msg && msg.length < 300 ? msg : 'Could not read that feed.');
  }
  if(!/BEGIN:VCALENDAR/i.test(body || '')){
    throw new Error('That address did not return a calendar.');
  }
  return parseICS(body);
}

/* ---- keeping feeds current on their own ----

   A feed is a subscription, not an import, so pressing a button to collect
   your own homework is work the planner should be doing. Every connected feed
   is checked when the planner opens, when you come back to the tab, when the
   connection returns, and twice an hour while it is open.

   Two things keep that from being expensive. Checks are throttled per feed
   against a clock kept on this device, so opening the planner four times in an
   hour is still one check. And the planner is only written to when a date
   actually changed, so a quiet feed costs one request and no upload. */
const FEED_MAX_AGE = 30 * 60 * 1000;        // how stale a feed may get
const FEED_EVERY   = 30 * 60 * 1000;        // how often to look while open
const CHECK_KEY    = 'planit:feedcheck:v1';

// When each feed was last looked at. Device local on purpose: it is a throttle,
// not planner data, and it must not travel between devices or cause an upload.
const readChecks = () => {
  try { return JSON.parse(localStorage.getItem(CHECK_KEY) || '{}') || {}; }
  catch(e){ return {}; }
};
const writeChecks = m => { try { localStorage.setItem(CHECK_KEY, JSON.stringify(m)); } catch(e){} };

// What one feed's dates amount to right now. Two identical signatures mean
// there is nothing worth saving.
const feedSig = rows => rows
  .map(e => [e.cid, e.title, e.date, e.time || '', e.note || '', e.type || ''].join('\u0001'))
  .sort()
  .join('\u0002');

function useFeedSync({settings, setSettings, events, setEvents, enabled}){
  const [busy, setBusy] = useState(false);
  const [at, setAt] = useState(null);
  const [err, setErr] = useState('');
  const running = useRef(false);
  // The running check reads the newest planner rather than the one it started
  // with. The setters live here too: App rebuilds them every render, and
  // depending on their identity would restart the timer on every keystroke.
  const now = useRef(null);
  now.current = {settings, events, setSettings, setEvents};

  const run = useCallback(async force => {
    if(!enabled || running.current) return;
    const feeds = feedsOf(now.current.settings);
    if(!feeds.length) return;
    if(typeof navigator !== 'undefined' && navigator.onLine === false) return;

    const checks = readChecks();
    const stale = f => !checks[f.id] || Date.now() - checks[f.id] > FEED_MAX_AGE;
    const due = force ? feeds : feeds.filter(stale);
    if(!due.length) return;

    running.current = true;
    setBusy(true); setErr('');

    let rows = now.current.events || [];
    let list = feeds;
    let changed = false, trouble = '';

    for(const f of due){
      try{
        const fetched = await fetchCanvas(f.url);
        const before = feedSig(rows.filter(e => isCanvas(e) && feedOf(e) === f.id));
        const out = mergeFeed(rows, f.id, fetched);
        const after = feedSig(out.events.filter(e => isCanvas(e) && feedOf(e) === f.id));
        if(before !== after){
          rows = out.events;
          list = list.map(x => x.id === f.id ? {...x, at:Date.now(), count:out.total} : x);
          changed = true;
        }
        checks[f.id] = Date.now();
      }catch(e){
        // One unreachable feed must not stop the others, and a feed that is
        // merely offline should be tried again soon rather than in half an hour.
        trouble = e.message || 'Could not read that feed.';
      }
    }

    writeChecks(checks);
    if(changed){
      now.current.setEvents(rows);
      now.current.setSettings({...(now.current.settings || {}), canvasFeeds:list, canvas:null});
    }
    running.current = false;
    setBusy(false); setAt(Date.now()); setErr(trouble);
  }, [enabled]);

  useEffect(() => {
    if(!enabled) return;
    let alive = true;
    const tick = () => { if(alive) run(false); };
    const onVisible = () => { if(document.visibilityState === 'visible') tick(); };
    const t = setTimeout(tick, 1200);                 // let the planner settle first
    const i = setInterval(tick, FEED_EVERY);
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('online', tick);
    return () => {
      alive = false;
      clearTimeout(t); clearInterval(i);
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('online', tick);
    };
  }, [enabled, run]);

  // The panel shows the device's clock, which is the honest answer to "when did
  // you last look", rather than when a date last changed.
  const lastCheck = useMemo(() => {
    const m = readChecks();
    const times = feedsOf(settings).map(f => m[f.id]).filter(Boolean);
    return times.length ? Math.max(...times) : null;
  }, [settings, at, busy]);

  return {busy, err, lastCheck, check: () => run(true)};
}

/* The panel that lives under the monthly calendar, and the notice that points
   at it once. Both are deliberately quiet: useful to the students whose school
   or course publishes a calendar, irrelevant to everyone else. */
function CanvasPanel({settings, setSettings, events, setEvents, toast, sync}){
  const feeds = feedsOf(settings);
  const [open, setOpen] = useState(feeds.length > 0);
  const [adding, setAdding] = useState(feeds.length === 0);
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [busy, setBusy] = useState('');              // '' | 'add'
  const [err, setErr] = useState('');
  const [note, setNote] = useState('');
  const total = (events || []).filter(isCanvas).length;
  const checking = busy === 'add' || (sync && sync.busy);

  const saveFeeds = next => setSettings({...settings, canvasFeeds:next, canvas:null});

  // Connecting a new feed is the one read the panel does itself: there is no
  // feed to keep current until this has worked once. Everything after it is
  // handled by useFeedSync.
  const connect = async feedUrl => {
    setBusy('add'); setErr(''); setNote('');
    try{
      const fetched = await fetchCanvas(feedUrl);
      const id = 'f' + uid();
      const out = mergeFeed(events, id, fetched);
      setEvents(out.events);
      const row = {id, url:feedUrl, name:name.trim(), at:Date.now(), count:out.total};
      saveFeeds([...feeds, row]);
      const marks = readChecks(); marks[id] = Date.now(); writeChecks(marks);
      setNote(`${feedLabel(row)} is connected. ${out.total} ${out.total === 1 ? 'date' : 'dates'}, ` +
              `and it will keep itself up to date from now on.`);
      setUrl(''); setName(''); setAdding(false);
      toast('Feed connected');
    }catch(e){ setErr(e.message || 'Could not read that feed.'); }
    setBusy('');
  };

  const remove = feed => {
    const n = countFeed(events, feed.id);
    if(!window.confirm(
      `Remove ${feedLabel(feed)} and the ${n} ${n === 1 ? 'date' : 'dates'} it added? ` +
      `Your own dates and any other feed stay.`)) return;
    setEvents(dropFeed(events, feed.id));
    const left = feeds.filter(f => f.id !== feed.id);
    saveFeeds(left);
    if(left.length === 0) setAdding(true);
    setNote(''); setErr('');
    toast('Feed removed');
  };

  return (
    <div className="cvpanel">
      <button className="cvhead" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span className="cvrule" />
        <span className="cvtitle">
          <b>Calendar feeds</b>
          <small>{feeds.length
            ? `${feeds.length} ${feeds.length === 1 ? 'feed' : 'feeds'}, ${total} ${total === 1 ? 'date' : 'dates'}`
            : 'Pull due dates from Canvas, a shared calendar or a course site onto this calendar'}</small>
        </span>
        <span className="cvchev" aria-hidden="true"><IconArrow dir={open ? 'up' : 'down'} /></span>
      </button>

      {open && (
        <div className="cvbody">
          {feeds.length > 0 && (
            <ul className="cvlist">
              {feeds.map(f => {
                const n = countFeed(events, f.id);
                return (
                  <li key={f.id}>
                    <span className="cvinfo">
                      <b>{feedLabel(f)}</b>
                      <small>
                        {n} {n === 1 ? 'date' : 'dates'}
                        {f.at ? `, last changed ${agoText(f.at)}` : ''}
                      </small>
                    </span>
                    <span className="cvbtns">
                      <button className="btn sm danger" disabled={checking} onClick={() => remove(f)}>
                        Remove
                      </button>
                    </span>
                  </li>
                );
              })}
            </ul>
          )}

          {/* The feeds look after themselves, so this reports rather than asks. */}
          {feeds.length > 0 && (
            <div className="cvstatus">
              <span className={'cvdot' + (checking ? ' on' : '')} aria-hidden="true" />
              <span className="cvstate">
                {checking
                  ? 'Checking for new dates…'
                  : sync && sync.lastCheck
                    ? `Checked ${agoText(sync.lastCheck)}. These update on their own.`
                    : 'These update on their own.'}
              </span>
              {sync && !checking && (
                <button className="btn sm ghost" onClick={sync.check}>Check now</button>
              )}
            </div>
          )}

          {(err || (sync && sync.err)) && <div className="formerr">{err || sync.err}</div>}
          {note && <div className="formnote">{note}</div>}

          {adding ? (
            <div className="cvadd">
              <p className="cvsteps">
                Any site that publishes a calendar feed works. The address usually ends in
                <b> .ics</b>, and the link to it says iCal, ICS, Subscribe or Calendar Feed. Every
                feed is read only: PlanIt sees the dates and can never change anything at the other
                end.
              </p>
              <dl className="cvwhere">
                <dt>Canvas</dt>
                <dd>Calendar, then <b>Calendar Feed</b> at the bottom right.</dd>
                <dt>Google Calendar</dt>
                <dd>Settings for that calendar, then <b>Secret address in iCal format</b>.</dd>
                <dt>A course or club site</dt>
                <dd>Look for an iCal or Subscribe link. SAT and AP prep schedules usually have one.</dd>
              </dl>
              <label className="flabel" htmlFor="cvurl">Calendar feed address</label>
              <input id="cvurl" className="finput" value={url} onChange={e => setUrl(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && url.trim() && connect(url.trim())}
                spellCheck="false" inputMode="url"
                placeholder="https://… ending in .ics" />
              <label className="flabel" htmlFor="cvname">Name for this feed, if you want one</label>
              <input id="cvname" className="finput" value={name} onChange={e => setName(e.target.value)}
                placeholder="School, SAT prep, robotics…" maxLength={32} />
              <div className="row" style={{gap:8, flexWrap:'wrap'}}>
                <button className="btn primary" disabled={!!busy || !url.trim()}
                  onClick={() => connect(url.trim())}>
                  {busy === 'add' ? 'Reading the feed…' : 'Connect this feed'}
                </button>
                {feeds.length > 0 && (
                  <button className="btn" disabled={!!busy}
                    onClick={() => { setAdding(false); setErr(''); }}>Cancel</button>
                )}
              </div>
            </div>
          ) : (
            <div className="row" style={{gap:8, flexWrap:'wrap'}}>
              <button className="btn" disabled={checking} onClick={() => { setAdding(true); setNote(''); }}>
                Add another feed
              </button>
            </div>
          )}

          <p className="cvfine">
            Due dates arrive as deadlines, anything that runs for a stretch of time arrives as an
            event, and anything with test, quiz or exam in the name arrives as a test. All of them
            can be recoloured or retyped like any other date, and the change survives every later
            check. A connected feed is checked when you open PlanIt and twice an hour while it is
            open: new dates appear, dates your teacher deleted go away, and nothing you typed
            yourself is ever touched. Removing a feed takes away only that feed's dates.
          </p>
        </div>
      )}
    </div>
  );
}

// "synced 4 minutes ago", without a date library
const agoText = at => {
  const m = Math.round((Date.now() - at)/60000);
  if(m < 1) return 'just now';
  if(m < 60) return m + (m === 1 ? ' minute ago' : ' minutes ago');
  const h = Math.round(m/60);
  if(h < 24) return h + (h === 1 ? ' hour ago' : ' hours ago');
  const d = Math.round(h/24);
  return d + (d === 1 ? ' day ago' : ' days ago');
};

function CanvasNotice({onOpen, onClose}){
  return (
    <Modal title="Bring your due dates in" onClose={onClose}
      footer={<>
        <button className="btn ghost" onClick={onClose}>Not now</button>
        <button className="btn primary" onClick={onOpen}>Show me <IconArrow /></button>
      </>}>
      <p style={{marginTop:0, color:'var(--ink60)', fontSize:14, lineHeight:1.6}}>
        If your school or your course publishes a calendar, PlanIt can read it and put every due
        date straight onto your monthly calendar, so you are not copying them across by hand.
      </p>
      <p style={{color:'var(--ink60)', fontSize:14, lineHeight:1.6}}>
        Canvas, a Google Calendar a teacher shares, a club's schedule, an SAT or AP prep course.
        Anything with an iCal or Calendar Feed link.
      </p>
      <p style={{color:'var(--ink60)', fontSize:14, lineHeight:1.6}}>
        Connect it once and it keeps itself current, so new assignments turn up without you doing
        anything. You can connect as many as you like and remove any of them on its own. Every feed
        is read only: PlanIt sees the dates and cannot change anything at the other end.
      </p>
      <div className="gnote">
        <b>Where to find it later</b>
        Organize It, Monthly, at the bottom of the calendar.
      </div>
    </Modal>
  );
}

/* ============ ORGANIZE IT: monthly ============ */
function Monthly({date, setDate, events, addEvent, updateEvent, removeEvent, setEvents,
  setDaily, toast, tasks, update, remove, energyBase, baseFor, settings, setSettings, canvasOpen,
  feedSync}){
  const first = new Date(date.getFullYear(), date.getMonth(), 1);
  const gridStart = startOfWeek(first);
  const cells = Array.from({length:42}, (_,i) => addDays(gridStart,i));
  const [editing, setEditing] = useState(null);
  const [open, setOpen] = useState(null);
  const monthGoals = (tasks || []).filter(t => t.scope === 'monthly' && t.anchor === monthKey(date));
  const [drag, setDrag] = useState(null);
  const [ghost, setGhost] = useState(null);
  const [overDay, setOverDay] = useState(null);
  const moved = useRef(false);
  const hold = useRef(null);

  const grabEvent = (e, ev) => {
    e.stopPropagation();
    const start = pt => { moved.current = false; setDrag(ev); setGhost({x:pt.clientX, y:pt.clientY, label:ev.title}); };
    if(e.pointerType === 'touch'){
      const sx = e.clientX, sy = e.clientY;
      const stop = () => {
        clearTimeout(hold.current);
        window.removeEventListener('pointermove', watch);
        window.removeEventListener('pointerup', stop);
      };
      const watch = m => { if(Math.abs(m.clientY-sy) > 10 || Math.abs(m.clientX-sx) > 10) stop(); };
      window.addEventListener('pointermove', watch);
      window.addEventListener('pointerup', stop);
      hold.current = setTimeout(() => {
        stop();
        buzz('medium');
        start({clientX:sx, clientY:sy});
      }, 260);
      return;
    }
    e.preventDefault();
    start(e);
  };

  useEffect(() => {
    if(!drag) return;
    const dayUnder = (x,y) => {
      const el = document.elementFromPoint(x, y);
      const c = el && el.closest ? el.closest('[data-day]') : null;
      return c ? c.getAttribute('data-day') : null;
    };
    const move = e => {
      moved.current = true;
      setGhost(g => g && {...g, x:e.clientX, y:e.clientY});
      setOverDay(dayUnder(e.clientX, e.clientY));
    };
    const up = e => {
      const dk2 = dayUnder(e.clientX, e.clientY);
      if(dk2 && dk2 !== drag.date){
        buzz('light');
        updateEvent(drag.id, {date:dk2});
        toast(`Moved to ${fmtDay(parseISO(dk2))}`);
      }
      setDrag(null); setGhost(null); setOverDay(null);
      document.body.classList.remove('dragging');
      // stop the cell's click from opening the day popup right after a drag
      setTimeout(() => { moved.current = false; }, 0);
    };
    const block = ev2 => ev2.preventDefault();
    document.body.classList.add('dragging');
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
    document.addEventListener('touchmove', block, {passive:false});
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
      document.removeEventListener('touchmove', block);
      document.body.classList.remove('dragging');
    };
  }, [drag, updateEvent, toast]);
  const byDay = useMemo(() => {
    const m = {};
    cells.forEach(d => {
      const k = iso(d);
      const list = events.filter(e => occursOn(e, k));
      if(list.length) m[k] = list;
    });
    return m;
  }, [events, date]);

  return (
    <div>
      <div className="spread dayhead">
        <DateNav label={fmtMonth(date)} onPrev={() => setDate(addMonths(date,-1))} onNext={() => setDate(addMonths(date,1))} onToday={() => setDate(new Date())} />
        <button className="btn primary" onClick={() => setEditing({title:'', date:iso(date), type:'test', note:''})}>+ Add a date</button>
      </div>

      <div className="month">
        {DOW.map(d => <div className="dow" key={d}>{d}</div>)}
        {cells.map(d => {
          const dk = iso(d);
          const list = byDay[dk] || [];
          return (
            <button key={dk} data-day={dk}
              className={'cell' + (d.getMonth() !== date.getMonth() ? ' out' : '')
                + (sameDay(d,new Date()) ? ' today' : '') + (overDay === dk ? ' dropping' : '')}
              onClick={() => { if(!moved.current) setOpen(dk); }}>
              <div className="spread">
                <span className="dnum">{d.getDate()}</span>
                {(() => {
                  const e = dayEnergy(tasks || [], dk);
                  const b = baseFor ? baseFor(dk) : energyBase;
                  return e ? <span className={'cellbatt ' + energyState(e, b)} title={`${e} of ${b} energy`}>
                    <Battery fill={b ? e/b : 0} size={12} />
                  </span> : null;
                })()}
              </div>
              {list.slice(0,3).map(e => (
                <div className={'ev draggable' + (isDone(e, dk) ? ' done' : '')} key={e.id}
                  onPointerDown={ev2 => grabEvent(ev2, e)}
                  title="Drag to another day, or open the day to tick it off">
                  <EvMark type={e.type} done={isDone(e, dk)} />
                  <span className="evt">{e.title}</span>
                </div>
              ))}
              {list.length > 3 && <div className="ev" style={{color:'var(--ink35)',paddingLeft:12}}>+{list.length-3} more</div>}
            </button>
          );
        })}
      </div>

      {ghost && <div className="draglabel" style={{left:ghost.x+12, top:ghost.y-14}}>{ghost.label}</div>}

      <div className="legend" style={{marginTop:14}}>
        {EV_TYPES.map(t => <span key={t.id}><i style={{background:t.color}} />{t.label}</span>)}
      </div>

      <div className="divider" style={{margin:'22px 0 18px'}} />

      <div style={{maxWidth:640}}>
        <div className="eyebrow" style={{marginBottom:9}}>Month goals, from List It</div>
        {monthGoals.length === 0
          ? <Empty title="No goals set for this month" hint="Add them in List It → Monthly." />
          : monthGoals.map(t => (
            <div key={t.id} className={'todo' + (t.done ? ' done' : '')} style={{alignItems:'center'}}>
              <Check on={t.done} onClick={() => update(t.id, {done:!t.done})} />
              <div className="txt"><b>{t.title}</b></div>
              <div className="todo-actions">
                <span className="status">{t.done ? 'Done' : 'Open'}</span>
                <XBtn onClick={() => remove(t.id)} />
              </div>
            </div>
          ))}
      </div>

      {setEvents && (
        <>
          <div className="divider" style={{margin:'26px 0 0'}} />
          <div ref={canvasOpen} style={{maxWidth:640, marginTop:18}}>
            <CanvasPanel sync={feedSync} settings={settings} setSettings={setSettings}
              events={events} setEvents={setEvents} toast={toast} />
          </div>
        </>
      )}

      {open && (
        <Modal title={fmtDay(parseISO(open))} onClose={() => setOpen(null)}
          footer={<>
            <button className="btn ghost" onClick={() => setOpen(null)}>Close</button>
            <button className="btn primary" onClick={() => { setEditing({title:'', date:open, type:'test', note:''}); setOpen(null); }}>+ Add a date</button>
          </>}>
          <button className="btn" style={{width:'100%', justifyContent:'center', marginBottom:14}}
            onClick={() => { const d0 = parseISO(open); setOpen(null); setDaily(d0); }}>
            Open this day in Daily <IconArrow />
          </button>
          {(byDay[open] || []).length === 0
            ? <Empty title="Nothing marked on this day" hint="Add a test, deadline, birthday, or meeting." />
            : (byDay[open] || []).map(e => {
              // A repeating date is ticked off for this day only, the same way a
              // repeating task is, so last Friday's quiz stays done.
              const done = isDone(e, open);
              return (
                <div key={e.id} className={'todo' + (done ? ' done' : '')} style={{alignItems:'center'}}>
                  {updateEvent
                    ? <Check on={done} onClick={() => updateEvent(e.id, toggleDone(e, open))} />
                    : <span style={{width:9,height:9,borderRadius:99,background:evColor(e.type),flex:'none'}} />}
                  <div className="txt">
                    <b>{e.title}</b>
                    <div className="meta">
                      <span style={{color:evColor(e.type)}}>{evLabel(e.type)}</span>
                      {e.note ? ` · ${e.note}` : ''}{done ? ' · done' : ''}
                    </div>
                  </div>
                  <div className="todo-actions">
                    <button className="btn sm" onClick={() => { setEditing(e); setOpen(null); }}>Edit</button>
                    <XBtn onClick={() => removeEvent(e.id)} label="Remove" />
                  </div>
                </div>
              );
            })}
        </Modal>
      )}

      {editing && <EventEditor ev={editing} onClose={() => setEditing(null)}
        onSave={e => { e.id ? updateEvent(e.id, e) : addEvent(e); setEditing(null); }}
        onDelete={editing.id ? () => { removeEvent(editing.id); setEditing(null); } : null} />}
    </div>
  );
}

function EventEditor({ev, onClose, onSave, onDelete}){
  const [f, setF] = useState({title:ev.title, date:ev.date, type:ev.type, note:ev.note || '',
    repeat: ev.repeat || 'none', repeatUntil: ev.repeatUntil || ''});
  const [err, setErr] = useState('');
  const set = (k,v) => setF(p => ({...p,[k]:v}));
  const save = () => {
    if(!f.title.trim()) return setErr('Give it a name first.');
    onSave({...ev, ...f, title:f.title.trim()});
  };
  return (
    <Modal title={ev.id ? 'Edit date' : 'Add a date'} onClose={onClose}
      footer={<>
        {onDelete && <button className="btn danger" onClick={onDelete}>Delete</button>}
        <button className="btn primary" onClick={save}>Save date</button>
      </>}>
      <Field label="What is it?"><input autoFocus value={f.title}
        onChange={e => { set('title', e.target.value); setErr(''); }}
        onKeyDown={e => e.key === 'Enter' && save()} placeholder="Enter what it is here" /></Field>
      {err && <div className="formerr">{err}</div>}
      <div className="grid2">
        <Field label="Date"><input type="date" value={f.date} onChange={e => set('date', e.target.value)} /></Field>
        <Field label="Kind">
          <select value={f.type} onChange={e => set('type', e.target.value)}>
            {EV_TYPES.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Repeats">
        <select value={f.repeat} onChange={e => set('repeat', e.target.value)}>
          {REPEATS.map(([k,l]) => <option key={k} value={k}>{l}</option>)}
        </select>
      </Field>
      {f.repeat !== 'none' && (
        <Field label="Repeat until (optional)">
          <input type="date" value={f.repeatUntil} onChange={e => set('repeatUntil', e.target.value)} />
        </Field>
      )}
      <Field label="Notes"><input value={f.note} onChange={e => set('note', e.target.value)} placeholder="Enter notes here" /></Field>
    </Modal>
  );
}

/* ============ LIST IT ============ */
function ListIt({sub, date, setDate, tasks, add, update, remove, setTab, day, carryOver, setCarryOver, toast}){
  const [text, setText] = useState('');
  const anchor = sub === 'daily' ? iso(date) : sub === 'weekly' ? weekKey(date) : monthKey(date);
  // Scheduled things read in the order the day happens; anything without a
  // time yet sits at the end, still in the order it was written.
  const items = tasks.filter(t => t.scope === sub
    && (sub === 'daily' ? occursOn(t, anchor) : t.anchor === anchor))
    .sort((a,b) => {
      if(sub !== 'daily') return 0;
      if(a.start && b.start) return toMin(a.start) - toMin(b.start);
      if(a.start) return -1;
      if(b.start) return 1;
      return 0;
    });
  const doneCount = items.filter(t => sub === 'daily' ? isDone(t, anchor) : t.done).length;
  const [editing, setEditing] = useState(null);
  const pct = items.length ? Math.round(doneCount/items.length*100) : 0;

  const inputRef = useRef(null);
  const [shake, setShake] = useState(false);

  const submit = () => {
    const v = text.trim();
    if(!v){
      setShake(true);
      if(inputRef.current) inputRef.current.focus();
      setTimeout(() => setShake(false), 500);
      return;
    }
    add(sub === 'daily'
      ? {title:v, scope:'daily', date:anchor, start:null, end:null, done:false}
      : {title:v, scope:sub, anchor, done:false});
    setText('');
  };

  const label = sub === 'daily' ? fmtDay(date) : sub === 'weekly' ? fmtWeek(date) : fmtMonth(date);
  const step = n => sub === 'daily' ? addDays(date,n) : sub === 'weekly' ? addDays(date,7*n) : addMonths(date,n);
  const placeholder = sub === 'daily' ? 'Add something for today…'
    : sub === 'weekly' ? 'Add a goal for this week…' : 'Add something for this month…';

  return (
    <div style={{maxWidth:760}}>
      <div className="spread" style={{marginBottom:16}}>
        <DateNav label={label} onPrev={() => setDate(step(-1))} onNext={() => setDate(step(1))} onToday={() => setDate(new Date())} />
        <div style={{minWidth:170,flex:'0 1 220px'}}>
          <div className="row" style={{justifyContent:'space-between',fontSize:12,color:'var(--ink60)',marginBottom:5}}>
            <span>{doneCount} of {items.length} done</span><span className="mono">{pct}%</span>
          </div>
          <div className="bar"><i style={{width:pct+'%'}} /></div>
        </div>
      </div>

      <div className={'addbar' + (shake ? ' shake' : '')} data-tour="listadd">
        <div className="addwrap">
          <span className="addplus" aria-hidden="true">+</span>
          <input ref={inputRef} value={text} onChange={e => setText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && submit()} placeholder={placeholder} />
        </div>
        <button className="btn primary" onClick={submit}>Add</button>
      </div>

      {items.length === 0
        ? <Empty title={sub === 'daily' ? 'Today is wide open' : sub === 'weekly' ? 'No goals for this week yet' : 'Nothing on the month list yet'}
            hint="Type above and press Enter to start the list." />
        : items.map(t => (
          <div key={t.id} className={'todo' + ((sub === 'daily' ? isDone(t, anchor) : t.done) ? ' done' : '')}
            onDoubleClick={ev => { if(sub === 'daily' && !ev.target.closest('button')) setEditing(t); }}>
            <Check on={sub === 'daily' ? isDone(t, anchor) : t.done}
              onClick={() => update(t.id, sub === 'daily' ? toggleDone(t, anchor) : {done:!t.done})} />
            <div className="txt">
              <b>{t.title}</b>
              {sub === 'daily' && (
              <div className="meta">
                {blockHex(t.color) && <i className="cdot" style={{background:blockHex(t.color)}} />}
                {t.start ? `Scheduled ${pretty(t.start)} – ${pretty(t.end)}` : 'Not on the schedule yet'}
                {isRepeat(t) ? ` · ${repeatText(t)}` : ''}
              </div>
            )}
            </div>
            <div className="todo-actions">
              {sub === 'daily' && <button className="btn sm" onClick={() => setEditing(t)}>Edit</button>}
              <XBtn onClick={() => remove(t.id)} />
            </div>
          </div>
        ))}

      {editing && <BlockEditor block={editing} day={day || DEFAULT_DAY} occ={anchor}
        add={add} update={update} remove={remove} onClose={() => setEditing(null)}
        onSave={b => { update(b.id, b); setEditing(null); }}
        onDelete={id => { remove(id); setEditing(null); }} />}

      {sub === 'daily' && (
        <div className="card soft" style={{marginTop:16,color:'var(--ink60)',fontSize:13}}>
          Anything here shows up in <b style={{color:'var(--ink)'}}>Organize It → Daily</b>. Double-click an item
          to set a time, a colour, or make it repeat.
        </div>
      )}

    </div>
  );
}

/* ============ RESUME EXPORT ============ */


const monthName = ym => {
  if(!ym) return '';
  const [y,m] = ym.split('-');
  return m ? `${MON[+m-1].slice(0,3)} ${y}` : y;
};
const rangeText = e => e.ongoing
  ? `${monthName(e.start)} – present`
  : [monthName(e.start), monthName(e.end)].filter(Boolean).join(' – ');

function buildResume(list, format){
  const order = c => list.filter(e => e.category === c)
    .sort((a,b) => (b.priority || 0) - (a.priority || 0));
  const exp = order('experience'), hon = order('honor'), cert = order('certification');

  // Plain list: every entry, strongest first, nothing else.
  if(format === 'plain'){
    return [...exp, ...hon, ...cert]
      .sort((a,b) => (b.priority || 0) - (a.priority || 0))
      .map(e => `• ${e.title}${dateRange(e) ? `  (${dateRange(e)})` : ''}`)
      .join('\n');
  }

  // Common App order: the fields the application asks for, in its sequence.
  if(format === 'activities'){
    const appLines = e => e.category === 'honor' ? [
      e.title,
      [gradeText(e.grades), (e.levels || []).join(', ')].filter(Boolean).join(' · ').replace(/^./, m => '   ' + m),
    ] : e.category === 'certification' ? [
      e.title, e.org && `   ${e.org}`, dateRange(e) && `   ${dateRange(e)}`,
    ] : [
      e.title + (e.actType ? `  [${e.actType}]` : ''),
      e.org && `   ${e.org}`,
      [gradeText(e.grades), timeText(e)].filter(Boolean).join(' · ').replace(/^./, m => '   ' + m),
      e.desc && `   ${e.desc}`,
      e.college === 'yes' && '   Continuing in college',
    ];
    return [...exp, ...hon, ...cert]
      .map(e => appLines(e).filter(x => x && x.trim()).join('\n')).join('\n\n');
  }

  // Résumé: name and dates on one line, organization under it, then what you did.
  const entry = e => {
    const lines = [dateRange(e) ? `${e.title}   ${dateRange(e)}` : e.title];
    if(e.org) lines.push(`   ${e.org}`);
    if(e.desc) lines.push(`   ${e.desc}`);
    if(e.category === 'honor' && (e.levels || []).length) lines.push(`   ${e.levels.join(', ')}`);
    return lines.join('\n');
  };
  const section = (label, rows) => rows.length ? [
    label.toUpperCase(), '─'.repeat(label.length + 4), ...rows.map(entry)
  ].join('\n') : '';

  return [section('Experience', exp), section('Honors', hon), section('Certifications', cert)]
    .filter(Boolean).join('\n\n');
}

function ResumeExport({ecs, onClose, toast, settings, setSettings, user}){
  // Contact and education details live outside Brag It, so they are asked for
  // once and kept, prefilled from the account, editable every time.
  const saved = settings.resume || {};
  const [d, setD] = useState({
    name: saved.name || user.name || '',
    phone: saved.phone || '',
    email: saved.email || user.email || '',
    location: saved.location || '',
    education: (saved.education && saved.education.length) ? saved.education
      : [{school:'', years:'', notes:''}],
  });
  const [picked, setPicked] = useState(() => ecs.map(e => e.id));
  const [tab, setTab] = useState('details');     // details | entries | preview

  const set = (k, v) => setD(p => ({...p, [k]: v}));
  const setEdu = (i, k, v) => setD(p => ({...p,
    education: p.education.map((e, n) => n === i ? {...e, [k]: v} : e)}));
  const addEdu = () => setD(p => ({...p, education:[...p.education, {school:'', years:'', notes:''}]}));
  const dropEdu = i => setD(p => ({...p, education: p.education.filter((_, n) => n !== i)}));

  // keep them for next time, without making the person press save
  useEffect(() => {
    const t = setTimeout(() => setSettings({...settings, resume: d}), 700);
    return () => clearTimeout(t);
  }, [d]);

  const toggle = id => setPicked(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  const groups = [
    ['experience','Experience'], ['honor','Awards'], ['certification','Certifications'],
  ].map(([k,label]) => [k, label, ecs.filter(e => e.category === k)]).filter(g => g[2].length);
  const allIn = rows => rows.every(e => picked.includes(e.id));
  const toggleGroup = rows => setPicked(p => allIn(rows)
    ? p.filter(id => !rows.some(e => e.id === id))
    : Array.from(new Set([...p, ...rows.map(e => e.id)])));

  const chosen = ecs.filter(e => picked.includes(e.id));
  const byCat = c => chosen.filter(e => e.category === c)
    .sort((a,b) => (b.priority || 0) - (a.priority || 0));

  // one description per line becomes one bullet per line
  const bulletsOf = e => (e.desc || '').split('\n').map(x => x.trim()).filter(Boolean);

  const esc = t => String(t == null ? '' : t).replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));

  const sectionHTML = (title, rows) => {
    if(!rows.length) return '';
    return `<section><h2>${esc(title)}</h2>` + rows.map(e => `
      <article>
        ${dateRange(e) ? `<div class="when">${esc(dateRange(e))}</div>` : ''}
        <div class="what">${esc(e.title)}</div>
        ${e.org ? `<div class="where">${esc(e.org)}</div>` : ''}
        ${bulletsOf(e).length ? `<ul>${bulletsOf(e).map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}
      </article>`).join('') + `</section>`;
  };

  const eduHTML = () => {
    const rows = d.education.filter(e => e.school.trim());
    if(!rows.length) return '';
    return `<section><h2>Education</h2><div class="edugrid">` + rows.map(e => `
      <div>
        ${e.years ? `<div class="when">${esc(e.years)}</div>` : ''}
        <div class="what">${esc(e.school)}</div>
        ${e.notes ? e.notes.split('\n').filter(x => x.trim())
            .map(n => `<div class="note">${esc(n.trim())}</div>`).join('') : ''}
      </div>`).join('') + `</div></section>`;
  };

  const docHTML = () => `<!doctype html><meta charset="utf-8"><title>${esc(d.name || 'Résumé')}</title>
<style>
  @page{margin:14mm}
  *{box-sizing:border-box}
  body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;color:#111;margin:0;
       font-size:10.5pt;line-height:1.38;-webkit-print-color-adjust:exact}
  .sheet{max-width:7.6in;margin:0 auto;padding:26px 30px}
  header{display:flex;justify-content:space-between;align-items:flex-start;gap:24px;padding-bottom:12px}
  h1{font-size:27pt;font-weight:800;letter-spacing:-.01em;margin:0;text-transform:uppercase;line-height:1}
  .contact{text-align:right;font-size:9.5pt;line-height:1.6;white-space:nowrap}
  section{border-top:2.5px solid #111;padding:10px 0 4px}
  h2{font-size:13pt;font-weight:800;text-transform:uppercase;margin:0 0 8px;letter-spacing:.01em;padding-left:10px}
  article{margin:0 0 11px;padding-left:10px;break-inside:avoid}
  article:last-child{margin-bottom:6px}
  .when{font-size:8.5pt;color:#333}
  .what{font-size:11.5pt;font-weight:700;margin-top:1px}
  .where{font-size:9.5pt;margin-top:1px}
  ul{margin:4px 0 0;padding-left:16px}
  li{font-size:9.5pt;margin-bottom:2px}
  .edugrid{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding-left:10px;margin-bottom:8px}
  .note{font-size:8.5pt;color:#333;margin-top:2px}
  @media print{.sheet{padding:0}}
</style>
<div class="sheet">
  <header>
    <h1>${esc(d.name || 'Your name')}</h1>
    <div class="contact">
      ${d.phone ? `<div>${esc(d.phone)}</div>` : ''}
      ${d.email ? `<div>${esc(d.email)}</div>` : ''}
      ${d.location ? `<div>${esc(d.location)}</div>` : ''}
    </div>
  </header>
  ${eduHTML()}
  ${sectionHTML('Experience', byCat('experience'))}
  ${sectionHTML('Awards', byCat('honor'))}
  ${sectionHTML('Certifications', byCat('certification'))}
</div>`;

  const print = () => {
    const w = window.open('', '_blank', 'width=860,height=1000');
    if(!w) return toast('Allow pop-ups to print');
    w.document.write(docHTML());
    w.document.close(); w.focus();
    setTimeout(() => w.print(), 400);
  };

  const download = () => {
    const blob = new Blob([docHTML()], {type:'text/html;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(d.name || 'resume').replace(/\s+/g,'-').toLowerCase()}.html`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast('Downloaded. Open it and print to PDF');
  };

  return (
    <Modal title="Export as a résumé" onClose={onClose}
      footer={<>
        <button className="btn" onClick={download}>Download</button>
        <button className="btn primary" onClick={print}>Print / PDF</button>
      </>}>

      <div className="tape" style={{marginBottom:16}}>
        {[['details','Your details'],['entries','What to include'],['preview','Preview']].map(([k,l]) => (
          <button key={k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>

      {tab === 'details' && (
        <>
          <p style={{marginTop:0, fontSize:12.5, color:'var(--ink35)', lineHeight:1.5}}>
            These aren't in Brag It, so PlanIt asks once and remembers them. Change them any time.
          </p>
          <Field label="Full name"><input value={d.name} onChange={e => set('name', e.target.value)}
            placeholder="Your name" /></Field>
          <div className="grid2">
            <Field label="Phone"><input value={d.phone} onChange={e => set('phone', e.target.value)}
              placeholder="470-555-0199" inputMode="tel" /></Field>
            <Field label="Email"><input value={d.email} onChange={e => set('email', e.target.value)}
              placeholder="you@example.com" inputMode="email" /></Field>
          </div>
          <Field label="Location"><input value={d.location} onChange={e => set('location', e.target.value)}
            placeholder="Suwanee, GA, 30024" /></Field>

          <div className="spread" style={{margin:'18px 0 8px'}}>
            <span className="eyebrow">Education</span>
            <button className="btn sm" onClick={addEdu}>Add a school</button>
          </div>
          {d.education.map((e, i) => (
            <div key={i} className="card" style={{marginBottom:10}}>
              <div className="grid2">
                <Field label="School"><input value={e.school} onChange={ev => setEdu(i,'school',ev.target.value)}
                  placeholder="Lambert High School" /></Field>
                <Field label="Years"><input value={e.years} onChange={ev => setEdu(i,'years',ev.target.value)}
                  placeholder="2025–Present" /></Field>
              </div>
              <Field label="Notes, one per line">
                <textarea value={e.notes} onChange={ev => setEdu(i,'notes',ev.target.value)}
                  placeholder={"Maintaining a 4.32/4.0 GPA\n1350 NMSQT score"} />
              </Field>
              {d.education.length > 1 && (
                <button className="btn sm" onClick={() => dropEdu(i)}>Remove this school</button>
              )}
            </div>
          ))}
        </>
      )}

      {tab === 'entries' && (
        <>
          <p style={{marginTop:0, fontSize:12.5, color:'var(--ink35)', lineHeight:1.5}}>
            Each line of an entry's description becomes its own bullet on the résumé.
          </p>
          {groups.length === 0
            ? <Empty title="Nothing in Brag It yet" hint="Add activities, awards or certifications first." />
            : groups.map(([k, label, rows]) => (
              <div key={k} style={{marginBottom:14}}>
                <div className="pickhead">
                  <b>{label}</b>
                  <button className="btn sm" onClick={() => toggleGroup(rows)}>{allIn(rows) ? 'None' : 'All'}</button>
                </div>
                {rows.map(e => (
                  <label key={e.id} className="pickrow">
                    <input type="checkbox" checked={picked.includes(e.id)} onChange={() => toggle(e.id)} />
                    <span>
                      <b>{e.title}</b>
                      {e.org && <small>{e.org}</small>}
                    </span>
                  </label>
                ))}
              </div>
            ))}
        </>
      )}

      {tab === 'preview' && (
        <div className="respaper">
          <div className="rhead">
            <h2>{d.name || 'Your name'}</h2>
            <div className="rcontact">
              {d.phone && <div>{d.phone}</div>}
              {d.email && <div>{d.email}</div>}
              {d.location && <div>{d.location}</div>}
            </div>
          </div>

          {d.education.filter(e => e.school.trim()).length > 0 && (
            <div className="rsec">
              <h3>Education</h3>
              <div className="redu">
                {d.education.filter(e => e.school.trim()).map((e, i) => (
                  <div key={i}>
                    {e.years && <div className="rwhen">{e.years}</div>}
                    <div className="rwhat">{e.school}</div>
                    {e.notes.split('\n').filter(x => x.trim()).map((n, j) => (
                      <div key={j} className="rnote">{n.trim()}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {[['Experience','experience'],['Awards','honor'],['Certifications','certification']].map(([label, cat]) => {
            const rows = byCat(cat);
            if(!rows.length) return null;
            return (
              <div className="rsec" key={cat}>
                <h3>{label}</h3>
                {rows.map(e => (
                  <div className="rart" key={e.id}>
                    {dateRange(e) && <div className="rwhen">{dateRange(e)}</div>}
                    <div className="rwhat">{e.title}</div>
                    {e.org && <div className="rwhere">{e.org}</div>}
                    {bulletsOf(e).length > 0 && (
                      <ul>{bulletsOf(e).map((b, i) => <li key={i}>{b}</li>)}</ul>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </Modal>
  );
}

/* ============ BRAG IT ============ */
// Field names, limits and option lists follow the Common App's Activities and
// Honors sections, so entries can be copied across without rewriting them.
const ACT_TYPES = [
  'Academic','Art','Athletics: Club','Athletics: JV/Varsity','Career Oriented',
  'Community Service (Volunteer)','Computer/Technology','Cultural','Dance','Debate/Speech',
  'Environmental','Family Responsibilities','Foreign Exchange','Internship','Journalism/Publication',
  'Junior R.O.T.C.','Music: Instrumental','Music: Vocal','Religious','Research','Robotics',
  'School Spirit','Science/Math','Social Justice','Student Govt./Politics','Theater/Drama',
  'Work (Paid)','Other Club/Activity','Other',
];
const GRADE_SETS = {
  ms:      [['ms','Middle school']],
  hs:      [['9','9th'],['10','10th'],['11','11th'],['12','12th']],
  college: [['c1','1st year'],['c2','2nd year'],['c3','3rd year'],['c4','4th year']],
};
const gradesFor = stage => GRADE_SETS[stage] || GRADE_SETS.hs;
const STAGES = [['ms','Middle school'],['hs','High school'],['college','College']];
const GRADE_LABEL = Object.fromEntries([...GRADE_SETS.ms, ...GRADE_SETS.hs, ...GRADE_SETS.college]);
const RECOGNITION = ['School','State/Regional','National','International'];
// The Common App's own caps, kept as guidance rather than a hard stop: you
// can write as much as you like here and trim it when you paste it across.
const LIMITS = {desc:150, org:100, position:50, title:100};

const gradeText = g => (g || []).map(x => GRADE_LABEL[x] || x).join(', ');
const dateRange = e => {
  const a = monthName(e.start), b = monthName(e.end);
  if(a && b) return `${a} – ${b}`;
  if(a) return e.finished ? a : `${a} – present`;
  return b ? `until ${b}` : '';
};
const timeText = e => {
  const h = e.hoursPerWeek, w = e.weeksPerYear;
  return [h && `${h} hrs/week`, w && `${w} weeks/year`].filter(Boolean).join(' · ');
};

function Counter({value, max}){
  const v = value || '';
  const words = v.trim() ? v.trim().split(/\s+/).length : 0;
  const over = max && v.length > max;
  return (
    <span className={'counter' + (over ? ' over' : '')}>
      {words} {words === 1 ? 'word' : 'words'} · {v.length} char{v.length === 1 ? '' : 's'}
      {over ? ` · over Common App's ${max}` : ''}
    </span>
  );
}

function BragIt({sub, ecs, add, update, remove, toast, stage, settings, setSettings, user}){
  const [filter, setFilter] = useState('all');
  const [state, setState] = useState('all');   // all | unfinished | finished
  const [sort, setSort] = useState('priority');
  const grades = gradesFor(stage);
  const [editing, setEditing] = useState(null);
  const [exporting, setExporting] = useState(false);

  useEffect(() => { setFilter('all'); setState('all'); }, [sub]);

  const list = useMemo(() => {
    let l = ecs.filter(e => e.category === sub);
    if(filter !== 'all') l = l.filter(e => (e.grades || []).includes(filter));
    if(state === 'finished') l = l.filter(e => e.finished);
    if(state === 'unfinished') l = l.filter(e => !e.finished);
    const c = [...l];
    if(sort === 'priority') c.sort((a,b) => (b.priority || 0) - (a.priority || 0));
    if(sort === 'recent') c.sort((a,b) => (b.start || '').localeCompare(a.start || ''));
    if(sort === 'az') c.sort((a,b) => a.title.localeCompare(b.title));
    return c;
  }, [ecs, sub, filter, state, sort]);

  const blank = {category:sub, title:'', org:'', desc:'', actType:'', position:'', hasPosition:false,
    grades:[], hoursPerWeek:'', weeksPerYear:'', college:'', levels:[], start:'', end:'', ongoing:true,
    finished:false, priority:3, notes:''};

  return (
    <div>
      <div className="spread dayhead" data-tour="brag">
        <div className="row" style={{gap:7,flexWrap:'wrap'}}>
          {[['all','All'],['unfinished','Unfinished'],['finished','Finished']].map(([k,l]) => (
            <button key={k} className={'chip' + (state === k ? ' on' : '')} onClick={() => setState(k)}>{l}</button>
          ))}
          {sub !== 'certification' && <span className="chipdiv" />}
          {sub !== 'certification' && grades.map(([k,l]) => (
            <button key={k} className={'chip' + (filter === k ? ' on' : '')}
              onClick={() => setFilter(filter === k ? 'all' : k)}>{l}</button>
          ))}
        </div>
        <div className="row">
          <select className="btn" style={{paddingRight:8}} value={sort} onChange={e => setSort(e.target.value)}>
            <option value="priority">Most important first</option>
            <option value="recent">Most recent first</option>
            <option value="az">A – Z</option>
          </select>
          <button className="btn" onClick={() => setExporting(true)} disabled={ecs.length === 0}>Export résumé</button>
          <button className="btn primary" onClick={() => setEditing(blank)}>
            + Add {sub === 'honor' ? 'an honor' : sub === 'certification' ? 'a certification' : 'an activity'}
          </button>
        </div>
      </div>

      {list.length === 0
        ? <Empty title={sub === 'honor' ? 'No honors logged yet'
              : sub === 'certification' ? 'No certifications logged yet'
              : 'No activities logged yet'}
            hint={sub === 'honor' ? 'Add an award or recognition while you still remember which grade you were in.'
              : sub === 'certification' ? 'Add a course, licence, or training you completed: CPR, lifeguarding, a language test.'
              : 'Add a club, job, sport, internship, or volunteer role, in the shape the Common App asks for.'} />
        : list.map(e => (
          <div key={e.id} className="ec" onDoubleClick={ev => {
            if(ev.target.closest('button') || ev.target.closest('.side')) return;
            setEditing(e);
          }} title="Double-click to edit">
            <div className="main">
              <div className="spread" style={{alignItems:'flex-start'}}>
                <div style={{minWidth:0}}>
                  <h3>{e.title}</h3>
                  <div className="org">{e.org || (e.actType || '')}</div>
                </div>
                <div className="ec-actions">
                  <span className="prio" title={`Importance ${e.priority || 0} of 5`}>
                    {[1,2,3,4,5].map(n => <i key={n} className={n <= (e.priority || 0) ? 'on' : ''} />)}
                  </span>
                  <button className="btn sm" onClick={() => setEditing(e)}>Edit</button>
                  <XBtn onClick={() => remove(e.id)} />
                </div>
              </div>

              <div className="row" style={{gap:7,marginTop:10,flexWrap:'wrap'}}>
                {dateRange(e) && <span className="metatag">{dateRange(e)}</span>}
                {e.actType && <span className="metatag">{e.actType}</span>}
                {gradeText(e.grades) && <span className="metatag">{gradeText(e.grades)}</span>}
                {timeText(e) && <span className="metatag">{timeText(e)}</span>}
                {(e.levels || []).map(l => <span key={l} className="metatag strong">{l}</span>)}
                {e.college === 'yes' && <span className="metatag strong">Continuing in college</span>}
                <span className={'metatag' + (e.finished ? '' : ' strong')}>
                  {e.finished ? 'Finished' : 'Unfinished'}
                </span>
                {sub === 'certification' && (e.start || e.end) && (
                  <span className="metatag">
                    {e.ongoing ? `${monthName(e.start)} · no expiry` : [monthName(e.start), monthName(e.end)].filter(Boolean).join(' – ')}
                  </span>
                )}
              </div>

              {e.desc && <p className="ecdesc">{e.desc}</p>}
            </div>
            <div className="side">
              <div className="eyebrow" style={{marginBottom:6}}>Private notes</div>
              {e.notes ? e.notes : <span style={{color:'var(--ink35)'}}>Only you see this. Hours, names, who to ask for a recommendation.</span>}
            </div>
          </div>
        ))}

      {exporting && <ResumeExport ecs={ecs} toast={toast} settings={settings} setSettings={setSettings}
        user={user} onClose={() => setExporting(false)} />}

      {editing && <EcEditor ec={editing} stage={stage} onClose={() => setEditing(null)}
        onSave={v => { v.id ? update(v.id, v) : add(v); setEditing(null); }} />}
    </div>
  );
}

function EcEditor({ec, onClose, onSave, stage}){
  const [f, setF] = useState({...ec, grades:ec.grades || [], levels:ec.levels || []});
  const [err, setErr] = useState('');
  const set = (k,v) => setF(p => ({...p,[k]:v}));
  const toggleIn = (k, v) => setF(p => ({...p,
    [k]: (p[k] || []).includes(v) ? p[k].filter(x => x !== v) : [...(p[k] || []), v]}));

  const save = () => {
    if(!f.title.trim()) return setErr('Give it a name first.');
    onSave({...f, title:f.title.trim()});
  };
  const grades = gradesFor(stage);
  const isExp = f.category === 'experience';
  const isHon = f.category === 'honor';

  return (
    <Modal title={ec.id ? 'Edit entry'
      : isHon ? 'New honor' : f.category === 'certification' ? 'New certification' : 'New activity'}
      onClose={onClose}
      footer={<>
        <button className="btn ghost" onClick={onClose}>Cancel</button>
        <button className="btn primary" onClick={save}>Save entry</button>
      </>}>

      <Field label="Category">
        <select value={f.category} onChange={e => set('category', e.target.value)}>
          <option value="experience">Activity or experience</option>
          <option value="honor">Honor</option>
          <option value="certification">Certification</option>
        </select>
      </Field>

      <label className="field">
        <span className="spread">{isHon ? 'Honor title' : 'Name and position'}<Counter value={f.title} max={LIMITS.title} /></span>
        <input autoFocus value={f.title}
          onChange={e => { set('title', e.target.value); setErr(''); }}
          placeholder={isHon ? 'National Merit Semifinalist' : 'Varsity Cross Country, team captain'} />
        {!isHon && <small style={{display:'block',color:'var(--ink35)',fontSize:12,marginTop:5}}>
          Include your position here if you had one, after a dash.
        </small>}
      </label>

      <div className="grid2">
        <Field label={f.category === 'certification' ? 'Earned' : 'Start date'}>
          <input type="month" value={f.start} onChange={e => set('start', e.target.value)} />
        </Field>
        <Field label={f.category === 'certification' ? 'Expires' : 'End date'}>
          <input type="month" value={f.end} disabled={f.category === 'certification' ? f.ongoing : f.finished === false && !f.end}
            onChange={e => set('end', e.target.value)} />
        </Field>
      </div>
      {err && <div className="formerr">{err}</div>}

      {isExp && (
        <>
          <Field label="Activity or experience type">
            <select value={f.actType} onChange={e => set('actType', e.target.value)}>
              <option value="">Choose an option</option>
              {ACT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </Field>

          <label className="field">
            <span className="spread">
              Describe it, including what you accomplished and any recognition
              <Counter value={f.desc} max={LIMITS.desc} />
            </span>
            <textarea value={f.desc} onChange={e => set('desc', e.target.value)}
              placeholder="Led 40 runners, organised the freshman mentor pairings, All-County 2025." />
          </label>

          <label className="field">
            <span className="spread">Organization or group<Counter value={f.org} max={LIMITS.org} /></span>
            <input value={f.org} onChange={e => set('org', e.target.value)}
              placeholder="Northview High School" />
          </label>

        </>
      )}

      {(isExp || isHon) && (
        <div className="field">
          <span>{isExp ? 'When did you participate?' : 'Grade level'}</span>
          <div className="row" style={{gap:7, flexWrap:'wrap'}}>
            {grades.map(([k,l]) => (
              <button key={k} className={'chip' + ((f.grades || []).includes(k) ? ' on' : '')}
                onClick={() => toggleIn('grades', k)}>{l}</button>
            ))}
          </div>
        </div>
      )}

      {isHon && (
        <div className="field">
          <span>Level of recognition</span>
          <div className="row" style={{gap:7, flexWrap:'wrap'}}>
            {RECOGNITION.map(r => (
              <button key={r} className={'chip' + ((f.levels || []).includes(r) ? ' on' : '')}
                onClick={() => toggleIn('levels', r)}>{r}</button>
            ))}
          </div>
        </div>
      )}

      {isExp && (
        <>
          <div className="grid2">
            <Field label="Hours spent per week">
              <input type="number" min="0" max="168" value={f.hoursPerWeek}
                onChange={e => set('hoursPerWeek', e.target.value)} placeholder="12" />
            </Field>
            <Field label="Weeks spent per year">
              <input type="number" min="0" max="52" value={f.weeksPerYear}
                onChange={e => set('weeksPerYear', e.target.value)} placeholder="30" />
            </Field>
          </div>
          <div className="field">
            <span>Do you plan on participating in this activity in college?</span>
            <div className="row" style={{gap:7}}>
              <button className={'chip' + (f.college === 'yes' ? ' on' : '')} onClick={() => set('college','yes')}>Yes</button>
              <button className={'chip' + (f.college === 'no' ? ' on' : '')} onClick={() => set('college','no')}>No</button>
            </div>
          </div>
        </>
      )}

      {f.category === 'certification' && (
        <>
          <Field label="Issued by"><input value={f.org} onChange={e => set('org', e.target.value)}
            placeholder="American Red Cross" /></Field>
          <label className="row" style={{gap:8,marginBottom:14,fontSize:13.5,fontWeight:500}}>
            <input type="checkbox" checked={f.ongoing} onChange={e => set('ongoing', e.target.checked)}
              style={{width:16,height:16}} />
            Doesn't expire
          </label>
        </>
      )}

      <label className="row" style={{gap:9,margin:'2px 0 16px',fontSize:13.5,fontWeight:500,alignItems:'flex-start'}}>
        <input type="checkbox" checked={!!f.finished} onChange={e => set('finished', e.target.checked)}
          style={{width:16,height:16,marginTop:2,flex:'none'}} />
        <span>
          Finished
          <small style={{display:'block',color:'var(--ink35)',fontWeight:400,fontSize:12,marginTop:1}}>
            Leave this off while it's still going. You can filter by it at the top.
          </small>
        </span>
      </label>

      <Field label={`How important is this to you? (${f.priority || 0} of 5)`}>
        <input type="range" min="0" max="5" value={f.priority || 0}
          onChange={e => set('priority', +e.target.value)} style={{padding:0}} />
      </Field>

      <Field label="Private notes, only you see these">
        <textarea value={f.notes} onChange={e => set('notes', e.target.value)}
          placeholder="Who to ask for a recommendation, what to mention in an essay…" />
      </Field>
    </Modal>
  );
}

/* ============ LOCK IT ============ */

function LockIt({sub, lock, running, left, minutes, start, pause, reset, toast, sound, setSound, haptics, setHapticsPref,
                 mode, setMode, pomo, setPomo, phase, cycle, addCycle,
                 camOn, setCamOn, camFull, camCount, remoteStreams, camTick,
                 room, setRoom, members, myId, name, setName}){
  const [code, setCode] = useState('');
  const [roomErr, setRoomErr] = useState('');
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  const [host, setHost] = useState(null);
  useEffect(() => {
    if(!room) { setHost(null); return; }
    db().collection('rooms').doc(room).get()
      .then(d => setHost(d.exists ? d.data().createdBy : null)).catch(() => {});
  }, [room]);

  const kick = async m => {
    if(!window.confirm(`Remove ${m.name} from the room?`)) return;
    try{
      await db().collection('rooms').doc(room).collection('peers').doc(m.id)
        .set({kicked:true, at:Date.now()}, {merge:true});
      toast(`${m.name} removed`);
    }catch(e){ toast("Couldn't remove them. Only the person who made the room can"); }
  };

  const create = async () => {
    if(!name.trim()){ setRoomErr('Add your name first, so friends know who you are.'); return; }
    setBusy(true); setRoomErr('');
    try{
      const c = await reserveRoom(myId);
      setRoom(c);
      toast(`Room ${c} is yours`);
    }catch(e){ setRoomErr(e.message || 'Could not make a room. Try again.'); }
    setBusy(false);
  };

  const join = async () => {
    const c = code.trim().toUpperCase();
    if(!name.trim()){ setRoomErr('Add your name first, so friends know who you are.'); return; }
    if(c.length !== 6){ setRoomErr('Room codes are six characters.'); return; }
    setBusy(true); setRoomErr('');
    try{
      if(!(await roomExists(c))){ setRoomErr("No room with that code. Check it, or make your own."); setBusy(false); return; }
      setRoom(c); toast(`Joined room ${c}`);
    }catch(e){ setRoomErr('Could not reach the room. Check your connection.'); }
    setBusy(false);
  };

  const leave = () => { setRoom(null); setCode(''); toast('Left the room'); };

  const copyCode = () => {
    navigator.clipboard.writeText(room).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 1600);
    }).catch(() => toast('Could not copy. The code is ' + room));
  };

  const mm = Math.floor(left/60), ss = left%60;

  if(sub === 'reports') return <Reports lock={lock} />;

  return (
    <div className="lockgrid">
      <div>
        <div className="card" data-tour="timer" style={{textAlign:'center',padding:'26px 20px'}}>
          <div className="modeswitch">
            <button className={mode === 'timer' ? 'on' : ''} disabled={running} onClick={() => setMode('timer')}>Timer</button>
            <button className={mode === 'pomo' ? 'on' : ''} disabled={running} onClick={() => setMode('pomo')}>Pomodoro</button>
          </div>

          <div className="eyebrow" style={{marginTop:16}}>
            {mode === 'pomo'
              ? (phase === 'work' ? `Work · cycle ${cycle} of ${pomo.cycles}`
                : phase === 'break' ? `Break · cycle ${cycle} of ${pomo.cycles}`
                : `${pomo.cycles} cycles · ${pomo.work} on, ${pomo.brk} off`)
              : 'Focus session'}
          </div>

          <div className="dial">
            <div className={'dial-num' + (phase === 'break' ? ' onbreak' : '')}>{pad(mm)}:{pad(ss)}</div>
          </div>

          {mode === 'pomo' && (
            <div className="cycledots">
              {Array.from({length:Math.min(pomo.cycles, 12)}, (_,i) => (
                <i key={i} className={i + 1 < cycle ? 'done' : i + 1 === cycle && phase ? 'now' : ''} />
              ))}
              {pomo.cycles > 12 && <span className="mono" style={{fontSize:11,color:'var(--ink35)'}}>+{pomo.cycles-12}</span>}
            </div>
          )}

          {mode === 'timer' ? (
            <div className="presets" style={{marginTop:10}}>
              {[15,30,60].map(m => (
                <button key={m} className={'chip' + (minutes === m && !running ? ' on' : '')}
                  disabled={running} onClick={() => reset(m)}>{m} min</button>
              ))}
              <label className={'chip' + ([15,30,60].includes(minutes) ? '' : ' on')}
                style={{display:'inline-flex',gap:6,alignItems:'center'}}>
                custom
                <input type="number" min="1" max="240" value={minutes} disabled={running}
                  onChange={e => reset(Math.max(1, Math.min(240, +e.target.value || 1)))}
                  style={{width:48,border:0,background:'transparent',padding:0,fontWeight:700,color:'inherit'}} />
              </label>
            </div>
          ) : (
            <div className="pomofields">
              {[['work','Work','1','120'],['brk','Break','1','60'],['cycles','Cycles','1','12']].map(([k,label,min,max]) => (
                <label key={k} className="pomofield">
                  <span>{label}</span>
                  <input type="number" min={min} max={max} value={pomo[k]} disabled={running && k !== 'cycles'}
                    onChange={e => setPomo({...pomo, [k]:Math.max(+min, Math.min(+max, +e.target.value || +min))})} />
                </label>
              ))}
            </div>
          )}

          <div className="row" style={{gap:8, justifyContent:'center', marginTop:14}}>
            <button className={'soundtoggle' + (sound ? ' on' : '')} onClick={() => setSound(!sound)}
              aria-pressed={sound} title={sound ? 'Sound is on' : 'Sound is off'}>Sound</button>
            <button className={'soundtoggle' + (haptics ? ' on' : '')}
              onClick={() => { setHapticsPref(!haptics); buzz('medium'); }}
              aria-pressed={haptics} title={haptics ? 'Vibration is on' : 'Vibration is off'}>Vibrate</button>
          </div>

          <div className="timerbtns">
            {!running
              ? <button className="btn primary" onClick={start}>
                  {left > 0 && phase ? `Resume ${pad(Math.floor(left/60))}:${pad(left%60)}`
                    : mode === 'pomo' ? `Start ${pomo.cycles} cycles`
                    : left > 0 && left < minutes*60 ? `Resume ${pad(Math.floor(left/60))}:${pad(left%60)}`
                    : `Lock in for ${minutes} min`}
                </button>
              : <button className="btn" onClick={pause}>Pause</button>}
            {mode === 'pomo' && running && (
              <button className="btn" onClick={addCycle} title="Adds one more work and break round">+ Add a cycle</button>
            )}
          </div>
        </div>

        <div className="row" style={{gap:12,marginTop:14,flexWrap:'wrap'}}>
          <div className="card" style={{flex:1,minWidth:150}}>
            <div className="eyebrow">Sessions today</div>
            <div className="mono" style={{fontSize:26,fontWeight:500}}>{lock.sessions}</div>
          </div>
          <div className="card" style={{flex:1,minWidth:150}}>
            <div className="eyebrow">Minutes today</div>
            <div className="mono" style={{fontSize:26,fontWeight:500}}>{lock.minutes}</div>
          </div>
        </div>


      </div>

      <div>
        <div className="eyebrow" style={{marginBottom:9}}>Study room</div>
        {!room ? (
          <div className="card">
            <Field label="Your name"><input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name here" /></Field>
            <button className="btn primary" style={{width:'100%'}} disabled={busy} onClick={create}>
              {busy ? 'Making a room…' : 'Create a room'}
            </button>
            <div className="or"><span>OR</span></div>
            <Field label="Join with a code">
              <input value={code} onChange={e => setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g,''))}
                onKeyDown={e => e.key === 'Enter' && join()} placeholder="Enter room code here" maxLength={6} />
            </Field>
            <button className="btn" style={{width:'100%',justifyContent:'center'}} disabled={busy} onClick={join}>Join room</button>
            {roomErr && <div className="formerr" style={{marginTop:12,marginBottom:0}}>{roomErr}</div>}

          </div>
        ) : (
          <div className="card">
            <div className="spread" style={{marginBottom:14}}>
              <div>
                <div className="eyebrow">Room code</div>
                <b className="mono roomcode">{room}</b>
              </div>
              <div className="row" style={{gap:6}}>
                <button className="btn sm" onClick={copyCode}>{copied ? 'Copied' : 'Copy'}</button>
                <button className="btn sm" onClick={leave}>Leave</button>
              </div>
            </div>
            {roomErr && <div style={{fontSize:12.5,color:'var(--rule)',marginBottom:10}}>{roomErr}</div>}
            <label className="switchrow" style={{marginBottom:12}}>
              <span><b>My camera</b><small>{camFull && !camOn
                ? `Camera circle is full, ${CAM_LIMIT} at a time`
                : `Live video with the others who have theirs on · ${camCount} of ${CAM_LIMIT}`}</small></span>
              <input type="checkbox" checked={!!camOn} disabled={!camOn && camFull}
                onChange={e => setCamOn(e.target.checked)} />
            </label>
            {members.length <= 1
              ? <div style={{fontSize:13,color:'var(--ink60)'}}>Just you so far. Send the code to a friend.</div>
              : members.slice().sort((a,b) => (b.min||0)-(a.min||0)).map(m => (
                <div className="member" key={m.id}>
                  <Initial name={m.name} size={32} />
                  <div className="memberwho">
                    <b>{m.name}{m.id === myId ? ' (you)' : ''}</b>
                    <div className="mono">{m.min || 0} min today{m.camOn ? ' · camera on' : ''}</div>
                  </div>
                  <div className="memberactions">
                    <span className={'status' + (m.focusing ? ' focusing' : '')}>{m.focusing ? 'Focusing' : 'On a break'}</span>
                    {host === myId && m.id !== myId && (
                      <button className="btn sm" onClick={() => kick(m)} title="Remove from the room">Remove</button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============ AUTH (Firebase) ============ */
let AUTH = null;
// Staying signed in. The SDK defaults to local persistence, but when it cannot
// open IndexedDB it quietly drops to in-memory instead of failing, and the
// session then dies the next time the app is launched. That is the usual reason
// an iOS web view asks for a password every morning. Asking for LOCAL out loud
// means a storage problem surfaces as a rejected promise we can see, and the
// fallback chain keeps someone signed in for the session rather than not at all.
let PERSIST = null;
function initFirebase(){
  if(AUTH) return AUTH;
  if(!window.firebase || !CONFIG.FIREBASE.apiKey) return null;
  try{
    if(!firebase.apps.length) firebase.initializeApp(CONFIG.FIREBASE);
    AUTH = firebase.auth();
    const P = firebase.auth.Auth.Persistence;
    PERSIST = AUTH.setPersistence(P.LOCAL)
      .catch(e => {
        console.warn('PlanIt: could not store your session on this device.', e);
        return AUTH.setPersistence(P.SESSION).catch(() => {});
      });
    return AUTH;
  }catch(e){ return null; }
}
// Anything that signs someone in waits for this first, so the credential is
// written to the persistent store rather than to memory that is about to go.
const authReady = async () => { try { await PERSIST; } catch(e){} };

const toUser = u => ({
  id: u.uid,
  email: u.email,
  username: u.displayName || (u.email || '').split('@')[0],
  provider: (u.providerData[0] && u.providerData[0].providerId === 'google.com') ? 'google' : 'email',
  picture: u.photoURL || ''
});

/* ---- usernames: unique across everyone, enforced by Firestore ---- */
const db = () => firebase.firestore();

// Firestore retries a failed read forever instead of rejecting, which can
// leave the app spinning. Every call below is raced against a timeout.
const withTimeout = (p, ms = 6000) => Promise.race([
  p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))
]);
const unameKey = s => s.trim().toLowerCase();
const validUsername = s => /^[a-zA-Z0-9_.]{3,20}$/.test(s.trim());

const suggestUsername = u => {
  const base = (u.displayName || (u.email || '').split('@')[0] || 'planit')
    .replace(/[^a-zA-Z0-9_.]/g, '').slice(0, 16) || 'planit';
  return base.length < 3 ? base + '123' : base;
};

async function usernameTaken(name){
  const d = await withTimeout(db().collection('usernames').doc(unameKey(name)).get());
  return d.exists;
}

async function hasUsername(uid){
  try{ return (await withTimeout(db().collection('users').doc(uid).get())).exists; }
  catch(e){ return true; }   // can't reach Firestore: don't trap them on this screen
}

// Both writes go in one batch. The rules allow create but never update on
// /usernames, so if the name already exists the whole batch fails, which is
// what makes this a real lock rather than a hopeful check.
async function reserveUsername(name, user){
  const clean = name.trim();
  const batch = db().batch();
  batch.set(db().collection('usernames').doc(unameKey(clean)), {uid:user.uid, username:clean});
  batch.set(db().collection('users').doc(user.uid), {username:clean, email:user.email || ''});
  await withTimeout(batch.commit(), 10000);
}

const usernameWriteError = e => {
  const c = (e && e.code) || '';
  if(c === 'permission-denied') return 'That username was just claimed by someone else. Pick another one.';
  if(c === 'unavailable') return 'Could not reach the database. Check your connection and try again.';
  if(c === 'failed-precondition') return 'Firestore is not set up yet for this project. Create the database in the Firebase console.';
  return (e && e.message) || 'Could not save that username. Try again.';
};

// A referral is a row owned by the person who was referred, naming who sent
// them. That way nobody can inflate their own count by writing to someone
// else's record. The rules only let you write your own.
async function recordReferral(newUid, refName){
  const name = (refName || '').trim();
  if(!name) return;
  try{
    const refUid = await findUidByUsername(name);
    if(!refUid || refUid === newUid) return;
    await withTimeout(db().collection('referrals').doc(newUid).set({
      referrerUid: refUid, referrerUsername: name, at: Date.now()
    }), 8000);
  }catch(e){ /* never block a signup over this */ }
}

// One small row per signup so the answers can actually be counted. The user
// doc holds the same value, but /users is private to each person, which makes
// it impossible to tally.
async function recordSignup(uid, source, refBy){
  try{
    await withTimeout(db().collection('signups').doc(uid).set({
      uid, source: source || 'unsaid', refBy: (refBy || '').trim(), at: Date.now()
    }), 8000);
  }catch(e){}
}

const countReferrals = uid =>
  db().collection('referrals').where('referrerUid','==',uid).get().then(s0 => s0.size);

const FB_ERRORS = {
  'auth/email-already-in-use':'An account already uses that email. Log in instead.',
  'auth/invalid-email':'That email address is missing something. Check it over.',
  'auth/weak-password':'Firebase needs at least 6 characters. Aim for 8 or more.',
  'auth/missing-password':'Enter your password.',
  'auth/invalid-credential':'That email and password combination is incorrect.',
  'auth/wrong-password':'That password is incorrect.',
  'auth/user-not-found':'No account matches that email. Create one instead.',
  'auth/too-many-requests':'Too many attempts in a row. Wait a minute, then try again.',
  'auth/popup-closed-by-user':'The Google window closed before it finished.',
  'auth/popup-blocked':'Your browser blocked the Google popup. Allow popups for this site, then try again.',
  'auth/cancelled-popup-request':'',
  'auth/unauthorized-domain':`Add "${window.location.hostname}" under Firebase → Authentication → Settings → Authorized domains, then reload.`,
  'auth/operation-not-allowed':'That sign-in method is not switched on yet in the Firebase console.',
  'auth/network-request-failed':'Network problem. Check your connection and try again.'
};
const fbErr = e => {
  const code = (e && e.code) || '';
  if(code in FB_ERRORS) return FB_ERRORS[code];
  return (e && e.message) || 'Something went wrong. Try again.';
};

const GMark = () => (
  <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.7-6.7C35.6 2.6 30.1 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6.1C12.3 13.2 17.7 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.1 24.6c0-1.6-.1-3.1-.4-4.6H24v9.1h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.2 5.6c4.2-3.9 6.6-9.6 6.6-16.4z"/>
    <path fill="#FBBC05" d="M10.4 28.7c-.5-1.5-.8-3-.8-4.7s.3-3.2.8-4.7l-7.8-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.8-6.1z"/>
    <path fill="#34A853" d="M24 48c6.1 0 11.3-2 15-5.5l-7.2-5.6c-2 1.4-4.6 2.2-7.8 2.2-6.3 0-11.7-3.7-13.6-9.4l-7.8 6.1C6.5 42.6 14.6 48 24 48z"/>
  </svg>
);


// Your logo file, sitting next to index.html in the repo. If it's missing or
// fails to load, the drawn mark below is used instead so nothing looks broken.
// Bumped every time a file is handed over, so a build can be identified
// without printing a version number next to the wordmark.
const BUILD = 'b7728';
const LOGO_SRC = 'logo.png';
// The homepage photograph, graded to the palette. Two files rather than one
// CSS filter, because a filter that works on cream washes out on charcoal.
const HERO_LIGHT = 'hero-light.jpg';
const HERO_DARK  = 'hero-dark.jpg';
const SHOT_CTA   = 'shot-cta.jpg';     // students at a competition, behind the closing CTA
const SHOT_FOCUS = 'shot-focus.jpg';   // a dark room, behind Lock It

function Mark({size = 22}){
  const [broken, setBroken] = useState(false);
  if(broken || !LOGO_SRC) return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{flex:'none'}}>
      <rect x="2" y="3"  width="20" height="4" rx="2" fill="var(--brag)" />
      <rect x="2" y="8.5" width="15" height="4" rx="2" fill="var(--list)" />
      <rect x="2" y="14" width="20" height="4" rx="2" fill="var(--org)" />
      <rect x="2" y="19.5" width="11" height="3" rx="1.5" fill="var(--lock)" />
    </svg>
  );
  return <img className="logomark" src={LOGO_SRC} alt="" width={size} height={size}
    style={{width:size, height:size}} onError={() => setBroken(true)} />;
}

function SetupNeeded(){
  return (
    <div className="authpage">
      <header className="topnav">
        <div className="tn-brand"><Mark size={38} /><b>PlanIt</b><span className="beta">setup</span></div>
      </header>
      <div className="authwrap">
        <section className="authleft">
          <div className="authcard"><div className="cardbody">
            <h2>Almost there</h2>
            <p className="csub">PlanIt needs your Firebase project before anyone can sign in.</p>
            <div className="gnote">
              <b>Add your config</b>
              Open <code>index.html</code>, find <code>CONFIG.FIREBASE</code> near the top, and paste in the
              config object from Firebase → Project settings → Your apps → Web app.
            </div>
          </div></div>
        </section>
      </div>
    </div>
  );
}

function Auth({initialMode = null, onHome}){
  const auth = initFirebase();
  const [mode, setMode] = useState(initialMode);     // null = choose | 'up' | 'in'
  const [step, setStep] = useState('form');          // 'form' | 'verify' | 'username'
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [note, setNote] = useState('');
  const [cool, setCool] = useState(0);
  const [legalOpen, setLegalOpen] = useState(null);
  const [avail, setAvail] = useState(null);          // null | 'checking' | 'free' | 'taken' | 'invalid' | 'offline'
  const [refBy, setRefBy] = useState('');
  const [source, setSource] = useState('');
  const [agree, setAgree] = useState({terms:false, privacy:false, guardian:false});

  // reloaded mid-flow, or signed in with Google but never picked a username
  useEffect(() => { (async () => {
    const u = auth && auth.currentUser;
    if(!u) return;
    if(!u.emailVerified){ setEmail(u.email); setStep('verify'); return; }
    if(!(await hasUsername(u.uid))){
      setUsername(suggestUsername(u));
      setStep('username');
    }
  })(); }, [auth]);

  useEffect(() => { if(cool <= 0) return; const t = setTimeout(() => setCool(c => c-1), 1000); return () => clearTimeout(t); }, [cool]);
  useEffect(() => { setErr(''); setNote(''); }, [mode, step]);

  // live "is that name free?" check, once typing settles
  useEffect(() => {
    const name = username.trim();
    if(!name){ setAvail(null); return; }
    if(!validUsername(name)){ setAvail('invalid'); return; }
    setAvail('checking');
    let alive = true;
    const t = setTimeout(async () => {
      try{
        const taken = await usernameTaken(name);
        if(alive) setAvail(taken ? 'taken' : 'free');
      }catch(e){ if(alive) setAvail('offline'); }
    }, 450);
    return () => { alive = false; clearTimeout(t); };
  }, [username]);

  useEffect(() => {
    if(step !== 'verify') return;
    const t = setInterval(async () => {
      const u = auth.currentUser;
      if(!u) return;
      try{ await u.reload(); if(u.emailVerified) window.location.reload(); }catch(e){}
    }, 4000);
    return () => clearInterval(t);
  }, [step, auth]);

  const strength = useMemo(() => {
    let s = 0;
    if(pw.length >= 8) s++;
    if(pw.length >= 12) s++;
    if(/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++;
    if(/[0-9]/.test(pw)) s++;
    if(/[^A-Za-z0-9]/.test(pw)) s++;
    return Math.min(4, s);
  }, [pw]);
  const strengthLabel = ['Too short','Weak','Okay','Strong','Very strong'][strength];

  const signUp = async () => {
    if(!agree.terms || !agree.privacy) return setErr('Please agree to the terms and the privacy policy.');
    const u = username.trim();
    if(!validUsername(u)) return setErr('Usernames are 3–20 characters: letters, numbers, underscores, and periods.');
    if(pw.length < 8) return setErr('Passwords need at least 8 characters.');
    setBusy(true); setErr('');
    try{
      if(await usernameTaken(u)){ setAvail('taken'); setBusy(false); return setErr('That username is taken. Try another one.'); }
    }catch(e){ /* offline check, the reserve below is the real gate */ }

    let cred;
    try{
      await authReady();
      cred = await auth.createUserWithEmailAndPassword(email.trim(), pw);
    }catch(e){ setBusy(false); return setErr(fbErr(e)); }

    try{
      await reserveUsername(u, cred.user);
      if(source === 'friend') await recordReferral(cred.user.uid, refBy);
      saveProfile(cred.user.uid, {source, agreedAt:Date.now(), guardianConsent:!!agree.guardian}).catch(() => {});
      recordSignup(cred.user.uid, source, refBy);
    }catch(e){
      // someone claimed it in the seconds between the check and the write
      try{ await cred.user.delete(); }catch(e2){}
      setAvail('taken'); setBusy(false);
      return setErr(usernameWriteError(e));
    }

    try{
      await cred.user.updateProfile({displayName:u});
      await cred.user.sendEmailVerification();
      setStep('verify'); setCool(45);
    }catch(e){ setErr(fbErr(e)); }
    setBusy(false);
  };

  const claimUsername = async () => {
    if(!agree.terms || !agree.privacy) return setErr('Please agree to the terms and the privacy policy.');
    const u = username.trim();
    if(!validUsername(u)) return setErr('Usernames are 3–20 characters: letters, numbers, underscores, and periods.');
    setBusy(true); setErr('');
    try{
      await reserveUsername(u, auth.currentUser);
      if(source === 'friend') await recordReferral(auth.currentUser.uid, refBy);
      saveProfile(auth.currentUser.uid, {source, agreedAt:Date.now(), guardianConsent:!!agree.guardian}).catch(() => {});
      recordSignup(auth.currentUser.uid, source, refBy);
      await auth.currentUser.updateProfile({displayName:u});
      window.location.reload();
    }catch(e){ setAvail('taken'); setErr(usernameWriteError(e)); setBusy(false); }
  };

  const logIn = async () => {
    if(!email.trim() || !pw) return setErr('Enter your email and password.');
    setBusy(true); setErr('');
    try{
      await authReady();
      const cred = await auth.signInWithEmailAndPassword(email.trim(), pw);
      if(!cred.user.emailVerified){ setStep('verify'); setCool(0); }
    }catch(e){ setErr(fbErr(e)); }
    setBusy(false);
  };

  const withApple = async () => {
    setBusy(true); setErr('');
    try{
      await authReady();
      let user;
      const native = NativeAuth();
      if(native){
        // Apple returns a nonce alongside the token and Firebase needs the raw
        // one to verify it, so both are passed through.
        const res = await native.signInWithApple();
        const cred = (res && res.credential) || {};
        if(!cred.idToken) throw new Error('Apple sign-in was cancelled');
        const provider = new firebase.auth.OAuthProvider('apple.com');
        const credential = provider.credential({idToken: cred.idToken, rawNonce: cred.nonce});
        const out = await auth.signInWithCredential(credential);
        user = out.user;
        // Apple hands over the name only on the very first sign-in
        if(res.user && res.user.displayName && !user.displayName){
          try{ await user.updateProfile({displayName: res.user.displayName}); }catch(e){}
        }
      } else {
        const provider = new firebase.auth.OAuthProvider('apple.com');
        provider.addScope('email'); provider.addScope('name');
        const out = await auth.signInWithPopup(provider);
        user = out.user;
      }
      if(!(await hasUsername(user.uid))){
        setUsername(suggestUsername(user));
        setStep('username');
      }
    }catch(e){ setErr(fbErr(e) || e.message || 'Something went wrong. Try again.'); }
    setBusy(false);
  };

  const withGoogle = async () => {
    setBusy(true); setErr('');
    try{
      await authReady();
      let user;
      const native = NativeAuth();
      if(isNativeApp() && !native){
        const b = bridgeInfo();
        throw new Error('Google sign-in could not reach the app. ['
          + 'plugins:' + (b.plugins.length ? b.plugins.join(',') : 'none')
          + ' | register:' + b.hasRegister
          + ' | bridge:' + b.hasNativePromise + ']');
      }
      if(native){
        // In the app, Google runs through native iOS code, popups don't work
        // in a web view. The token it returns is handed to the web SDK so the
        // rest of PlanIt sees a normal signed-in user.
        const res = await native.signInWithGoogle();
        const idToken = res && res.credential && res.credential.idToken;
        const accessToken = res && res.credential && res.credential.accessToken;
        if(!idToken && !accessToken) throw new Error('Google sign-in was cancelled');
        const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
        const out = await auth.signInWithCredential(credential);
        user = out.user;
      } else {
        const out = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        user = out.user;
      }
      if(!(await hasUsername(user.uid))){
        setUsername(suggestUsername(user));
        setStep('username');
      }
    }catch(e){ setErr(fbErr(e) || e.message || 'Something went wrong. Try again.'); }
    setBusy(false);
  };

  const resend = async () => {
    if(cool > 0) return;
    setBusy(true); setErr('');
    try{
      await auth.currentUser.sendEmailVerification();
      setNote('Sent. Check your inbox, and your spam folder.');
      setCool(45);
    }catch(e){ setErr(fbErr(e)); }
    setBusy(false);
  };

  const checkVerified = async () => {
    setBusy(true); setErr('');
    try{
      const u = auth.currentUser;
      await u.reload();
      if(u.emailVerified) window.location.reload();
      else setErr("That email isn't confirmed yet. Click the link in the message, then try again.");
    }catch(e){ setErr(fbErr(e)); }
    setBusy(false);
  };

  const startOver = async () => {
    try{ await auth.signOut(); }catch(e){}
    setStep('form'); setMode('up'); setPw('');
  };

  const resetPassword = async () => {
    if(!email.trim()) return setErr('Type your email address first, then tap this again.');
    setBusy(true); setErr('');
    try{
      await auth.sendPasswordResetEmail(email.trim());
      setNote('Password reset link sent. Check your email.');
    }catch(e){ setErr(fbErr(e)); }
    setBusy(false);
  };

  const sourceFields = (
    <>
      <label className="flabel">How did you hear about PlanIt?</label>
      <select className="finput" value={source} onChange={e => setSource(e.target.value)}>
        <option value="">Choose one</option>
        <option value="friend">A friend told me</option>
        <option value="social">Social media</option>
        <option value="search">A search</option>
        <option value="school">School or a teacher</option>
        <option value="other">Somewhere else</option>
      </select>
      {source === 'friend' && (
        <>
          <label className="flabel">Their PlanIt username</label>
          <input className="finput" value={refBy} onChange={e => setRefBy(e.target.value)}
            placeholder="Their username" autoCapitalize="off" autoCorrect="off" />
          {refBy.trim()
            ? <div className="formnote">They get credit toward a free month of Pro.</div>
            : <div className="softwarn">
                Add their username or they won't get credit. You can still continue without it.
              </div>}
        </>
      )}
    </>
  );

  const consentBoxes = (
    <div className="consent">
      <label>
        <input type="checkbox" checked={agree.terms} onChange={e => setAgree({...agree, terms:e.target.checked})} />
        <span>I agree to the <button type="button" className="inlink" onClick={() => setLegalOpen('terms')}>terms and conditions</button>.</span>
      </label>
      <label>
        <input type="checkbox" checked={agree.privacy} onChange={e => setAgree({...agree, privacy:e.target.checked})} />
        <span>I agree to the <button type="button" className="inlink" onClick={() => setLegalOpen('privacy')}>privacy policy</button>.</span>
      </label>
      <label>
        <input type="checkbox" checked={agree.guardian} onChange={e => setAgree({...agree, guardian:e.target.checked})} />
        <span>By selecting this box, you agree that you are the child's guardian, and agree to the terms and
        conditions, the privacy policy, and your child's use of this application.</span>
      </label>
    </div>
  );

  const Err = () => err ? <div className="formerr" role="alert">{err}</div> : null;
  const Note = () => note ? <div className="formnote">{note}</div> : null;
  const Avail = () => {
    if(!avail || avail === 'checking') return <div className="avail hint">{avail ? 'Checking…' : ' '}</div>;
    if(avail === 'invalid') return <div className="avail bad">3–20 characters: letters, numbers, _ and .</div>;
    if(avail === 'taken')   return <div className="avail bad">Taken. Try another</div>;
    if(avail === 'offline') return <div className="avail hint">Can't check right now</div>;
    return <div className="avail good"><IconCheck /> Available</div>;
  };

  return (
    <div className="authpage">
      <header className="topnav">
        {onHome
          ? <button className="tn-brand tn-home" onClick={onHome} title="Back to the homepage">
              <Mark size={38} /><b>PlanIt</b><span className="beta" title={`beta ${BUILD}`}>beta</span>
            </button>
          : <div className="tn-brand">
              <Mark size={38} /><b>PlanIt</b><span className="beta" title={`beta ${BUILD}`}>beta</span>
            </div>}
        <nav className="tn-actions">
          <button className={'tn-link' + (mode === 'in' ? ' on' : '')} onClick={() => { setMode('in'); setStep('form'); }}>Log in</button>
          <button className={'tn-link' + (mode === 'up' ? ' on' : '')} onClick={() => { setMode('up'); setStep('form'); }}>Sign up</button>
        </nav>
      </header>

      <div className="authwrap">
        <section className="authleft">
          <div className="lead">
            <div className="leadmark"><Mark size={62} /><b>PlanIt</b></div>
          </div>

          <div className="authcard">
            <div className="cardbody">

              {mode === null && step === 'form' && (
                <>
                  <h2>Make an account</h2>
                  <p className="csub">It takes about a minute.</p>
                  <button className="pillbtn" onClick={() => { setMode('up'); setStep('form'); }}>
                    Sign up <IconArrow />
                  </button>
                  <button className="undertext" onClick={() => { setMode('in'); setStep('form'); }}>
                    I already have an account
                  </button>
                  {<>
                    <div className="or"><span>OR</span></div>
                    <button className="gbtn" disabled={busy} onClick={withGoogle}><GMark /> Continue with Google</button>
                    <button className="gbtn abtn" disabled={busy} onClick={withApple}>
                      <svg width="15" height="18" viewBox="0 0 14 17" aria-hidden="true">
                        <path fill="currentColor" d="M11.6 9c0-1.8 1.5-2.7 1.6-2.7-.9-1.3-2.2-1.5-2.7-1.5-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.4-.7C3.9 4.8 2.6 5.6 2 6.8c-1.3 2.3-.3 5.6.9 7.5.6.9 1.3 1.9 2.3 1.9.9 0 1.2-.6 2.3-.6s1.4.6 2.4.6 1.6-.9 2.2-1.8c.7-1 1-2 1-2.1 0 0-1.9-.7-1.9-2.9zM9.7 3.3c.5-.6.8-1.5.7-2.3-.7 0-1.6.5-2.1 1.1-.5.6-.9 1.4-.7 2.3.8 0 1.6-.4 2.1-1.1z"/>
                      </svg>
                      Continue with Apple
                    </button>
                  </>}
                  <Err />
                  <p className="fineprint" style={{marginTop:18}}>
                    Three steps: confirm your email, pick a username, say whether you are the student or the parent.
                  </p>
                </>
              )}

              {step === 'verify' && (
                <>
                  <h2>Check your email</h2>
                  <p className="csub">to finish setting up PlanIt</p>
                  <p className="cmail">{email}</p>
                  <div className="verifybox">
                    <p>Click the confirmation link we just sent. This page picks it up on its own, you can leave it open.</p>
                  </div>
                  <div className="spamwarn">
                    <b>Check your spam folder first</b>
                    These emails land in spam a lot. Look there before you resend, a second copy usually
                    ends up in the same place.
                  </div>
                  <Note />
                  <Err />
                  <button className="pillbtn" disabled={busy} onClick={checkVerified}>
                    {busy ? 'Checking…' : "I've clicked the link"} <IconArrow />
                  </button>
                  <button className="resend" disabled={cool > 0 || busy} onClick={resend}>
                    Checked spam already? Resend{cool > 0 ? ` (${cool})` : ''}
                  </button>
                  <button className="undertext" onClick={startOver}>Use a different email</button>
                </>
              )}

              {step === 'username' && (
                <>
                  <h2>Pick a username</h2>
                  <p className="csub">It has to be one nobody else is using</p>
                  <label className="flabel">Username</label>
                  <input className="finput" autoFocus value={username} onChange={e => setUsername(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && claimUsername()} placeholder="Enter your username here" autoComplete="username" />
                  <Avail />
                  {sourceFields}
                  {consentBoxes}
                  <Err />
                  <button className="pillbtn" disabled={busy || avail === 'taken' || avail === 'invalid'} onClick={claimUsername}>
                    {busy ? 'Saving…' : 'Save username'} <IconArrow />
                  </button>
                  <button className="undertext" onClick={startOver}>Sign out</button>
                </>
              )}

              {step === 'form' && mode === 'up' && (
                <>
                  <h2>Create your account</h2>
                  <p className="csub">It takes about a minute.</p>
                  {<>
                    <button className="gbtn" disabled={busy} onClick={withGoogle}><GMark /> Continue with Google</button>
                    <button className="gbtn abtn" disabled={busy} onClick={withApple}>
                      <svg width="15" height="18" viewBox="0 0 14 17" aria-hidden="true">
                        <path fill="currentColor" d="M11.6 9c0-1.8 1.5-2.7 1.6-2.7-.9-1.3-2.2-1.5-2.7-1.5-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.4-.7C3.9 4.8 2.6 5.6 2 6.8c-1.3 2.3-.3 5.6.9 7.5.6.9 1.3 1.9 2.3 1.9.9 0 1.2-.6 2.3-.6s1.4.6 2.4.6 1.6-.9 2.2-1.8c.7-1 1-2 1-2.1 0 0-1.9-.7-1.9-2.9zM9.7 3.3c.5-.6.8-1.5.7-2.3-.7 0-1.6.5-2.1 1.1-.5.6-.9 1.4-.7 2.3.8 0 1.6-.4 2.1-1.1z"/>
                      </svg>
                      Continue with Apple
                    </button>
                    <div className="or"><span>OR</span></div>
                  </>}
                  <label className="flabel">Username</label>
                  <input className="finput" value={username} onChange={e => setUsername(e.target.value)}
                    placeholder="Enter your username here" autoComplete="username" />
                  <Avail />
                  <label className="flabel">Email address</label>
                  <input className="finput" type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email here" autoComplete="email" />
                  <label className="flabel">Password</label>
                  <div className="pwwrap">
                    <input className="finput" type={showPw ? 'text' : 'password'} value={pw} onChange={e => setPw(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && signUp()} placeholder="At least 8 characters" autoComplete="new-password" />
                    <button className="peek" type="button" onClick={() => setShowPw(v => !v)}>{showPw ? 'Hide' : 'Show'}</button>
                  </div>
                  {pw && (
                    <div className="strength">
                      <div className="sbar">{[0,1,2,3].map(i => <i key={i} className={i < strength ? 'on s'+strength : ''} />)}</div>
                      <span>{strengthLabel}</span>
                    </div>
                  )}
                  {sourceFields}
                  {consentBoxes}
                  <Err />
                  <button className="pillbtn" disabled={busy || avail === 'taken' || avail === 'invalid'} onClick={signUp}>
                    {busy ? 'Creating…' : 'Continue'} <IconArrow />
                  </button>
                </>
              )}

              {step === 'form' && mode === 'in' && (
                <>
                  <h2>Log in to PlanIt</h2>
                  {<>
                    <button className="gbtn" disabled={busy} onClick={withGoogle}><GMark /> Continue with Google</button>
                    <button className="gbtn abtn" disabled={busy} onClick={withApple}>
                      <svg width="15" height="18" viewBox="0 0 14 17" aria-hidden="true">
                        <path fill="currentColor" d="M11.6 9c0-1.8 1.5-2.7 1.6-2.7-.9-1.3-2.2-1.5-2.7-1.5-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.4-.7C3.9 4.8 2.6 5.6 2 6.8c-1.3 2.3-.3 5.6.9 7.5.6.9 1.3 1.9 2.3 1.9.9 0 1.2-.6 2.3-.6s1.4.6 2.4.6 1.6-.9 2.2-1.8c.7-1 1-2 1-2.1 0 0-1.9-.7-1.9-2.9zM9.7 3.3c.5-.6.8-1.5.7-2.3-.7 0-1.6.5-2.1 1.1-.5.6-.9 1.4-.7 2.3.8 0 1.6-.4 2.1-1.1z"/>
                      </svg>
                      Continue with Apple
                    </button>
                    <div className="or"><span>OR</span></div>
                  </>}
                  <label className="flabel">Email address</label>
                  <input className="finput" type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email here" autoComplete="email" />
                  <label className="flabel">Password</label>
                  <div className="pwwrap">
                    <input className="finput" type={showPw ? 'text' : 'password'} value={pw} onChange={e => setPw(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && logIn()} autoComplete="current-password" />
                    <button className="peek" type="button" onClick={() => setShowPw(v => !v)}>{showPw ? 'Hide' : 'Show'}</button>
                  </div>
                  <button className="forgot" onClick={resetPassword}>Forgot password?</button>
                  <Note />
                  <Err />
                  <button className="pillbtn" disabled={busy} onClick={logIn}>{busy ? 'Checking…' : 'Continue'} <IconArrow /></button>
                  <button className="undertext" onClick={() => setMode(null)}>Back</button>
                </>
              )}
            </div>

            {step === 'form' && mode && (
              <div className="cardfoot">
                {mode === 'up'
                  ? <>Already have an account? <button onClick={() => setMode('in')}>Log in</button></>
                  : <>Don't have an account? <button onClick={() => setMode('up')}>Sign up</button></>}
              </div>
            )}
          </div>


        </section>

      </div>
    {legalOpen && <LegalModal kind={legalOpen} onClose={() => setLegalOpen(null)} />}
    </div>
  );
}

function Section({title, hint, children}){
  return (
    <div className="setblock">
      <div className="eyebrow">{title}</div>
      {hint && <p className="sethint">{hint}</p>}
      {children}
    </div>
  );
}

/* ============ VIDEO MESH ============ */
// Up to four cameras at once. Each person sends their video straight to the
// others, no media server, which is why the cap exists: every extra camera
// means another stream your device has to encode.
const CAM_LIMIT = 4;

// No 0/O/1/I/L, those are the characters people mistype when reading a code
// off someone else's screen. 31^6 is about 900 million combinations.
const REACTIONS = [
  {kind:'up',   label:'Nice',       short:'nice'},
  {kind:'down', label:'Struggling', short:'ugh'},
  {kind:'help', label:'Need help',  short:'help'},
];
const REACTION_WORD = {up:'nice', down:'ugh', help:'help'};

const CODE_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const makeRoomCode = () => Array.from({length:6},
  () => CODE_CHARS[Math.floor(Math.random()*CODE_CHARS.length)]).join('');

// The rules allow create but never update on /rooms/{code}, so writing to a
// code that already exists is refused by the server. That is what guarantees
// two people can never hold the same code, even at the same instant.
async function reserveRoom(uid){
  for(let i = 0; i < 8; i++){
    const code = makeRoomCode();
    try{
      await withTimeout(db().collection('rooms').doc(code)
        .set({createdBy:uid, createdAt:Date.now()}), 8000);
      return code;
    }catch(e){ /* taken, roll again */ }
  }
  throw new Error('Could not find a free code. Try again in a moment.');
}

async function roomExists(code){
  const d = await withTimeout(db().collection('rooms').doc(code).get());
  return d.exists;
}

const ICE = () => ({
  iceServers: [
    {urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302']},
    ...(CONFIG.TURN && CONFIG.TURN.urls ? [CONFIG.TURN] : [])
  ]
});

// The Swift plugin, when PlanIt is running as an iOS app. In a browser this
// stays undefined and the interface says so instead of offering a dead switch.
// Capacitor's Haptics in the app; the browser's vibrate as a fallback.
const HapticsPlugin = () => (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Haptics) || null;
let hapticsOn = true;
const setHaptics = v => { hapticsOn = v !== false; };
const buzz = (style = 'light') => {
  if(!hapticsOn) return;
  const h = HapticsPlugin();
  if(h){
    try{
      if(style === 'success')      h.notification({type:'SUCCESS'});
      else if(style === 'warning') h.notification({type:'WARNING'});
      else h.impact({style: style === 'heavy' ? 'HEAVY' : style === 'medium' ? 'MEDIUM' : 'LIGHT'});
    }catch(e){}
    return;
  }
  if(navigator.vibrate){
    navigator.vibrate(style === 'heavy' ? [18,40,18] : style === 'medium' ? 16 : 8);
  }
};

// Google's popup sign-in cannot work inside a native web view: iOS reserves
// http and https, so the app runs on capacitor://, which Firebase rejects.
// Hiding the button in the app is honest; leaving it would just fail.
// Reaching a native plugin without a bundler. Capacitor exposes several routes
// and which ones exist varies by version, so try each: the Plugins object the
// bridge injects, registerPlugin from @capacitor/core if it happens to be
// loaded, and finally nativePromise, which the native bridge always injects.
const bridgeInfo = () => {
  const C = window.Capacitor || {};
  return {
    hasCapacitor: !!window.Capacitor,
    native: !!(C.isNativePlatform && C.isNativePlatform()),
    plugins: C.Plugins ? Object.keys(C.Plugins) : [],
    hasRegister: typeof C.registerPlugin === 'function',
    hasNativePromise: typeof C.nativePromise === 'function',
  };
};

const nativePlugin = name => {
  const C = window.Capacitor;
  if(!C) return null;
  if(C.Plugins && C.Plugins[name]) return C.Plugins[name];
  if(typeof C.registerPlugin === 'function'){
    try{ return C.registerPlugin(name); }catch(e){}
  }
  // last resort: call straight down the bridge
  if(typeof C.nativePromise === 'function'){
    return new Proxy({}, {
      get: (_t, method) => (opts) => C.nativePromise(name, String(method), opts || {})
    });
  }
  return null;
};

const isNativeApp = () => !!(window.Capacitor && window.Capacitor.isNativePlatform
  && window.Capacitor.isNativePlatform());

const NativeAuth = () => isNativeApp() ? nativePlugin('FirebaseAuthentication') : null;

// iOS gives the whole screen to the web view, clock and all. The gap goes on
// first so the page is never underneath it, and comes off only once the status
// bar has actually agreed to stop overlaying.
(function keepClearOfStatusBar(){
  if(!isNativeApp()) return;
  const root = document.documentElement;
  root.classList.add('needs-status-gap');
  const sb = nativePlugin('StatusBar');
  if(!sb || !sb.setOverlaysWebView) return;
  try{
    Promise.resolve(sb.setOverlaysWebView({overlay:false}))
      .then(() => { root.classList.remove('needs-status-gap'); })
      .catch(() => {});
  }catch(e){}
})();

const Blocker = () => isNativeApp() ? nativePlugin('AppBlocker') : null;
const blockerReady = () => !!Blocker();

// Local notifications: native in the app, the browser's own API on the web.
// The native ones still fire when PlanIt is closed, which the web ones cannot.
const Notifs = () => isNativeApp() ? nativePlugin('LocalNotifications') : null;

async function askNotifyPermission(){
  const n = Notifs();
  if(n){
    try{
      let r = await n.checkPermissions();
      if(r.display !== 'granted') r = await n.requestPermissions();
      return r.display === 'granted' ? 'granted' : 'denied';
    }catch(e){ return 'denied'; }
  }
  if(!('Notification' in window)) return 'unsupported';
  try{ return await Notification.requestPermission(); }catch(e){ return 'denied'; }
}

// id has to be a 32-bit int for iOS, so the task id is hashed down to one
const notifId = str => {
  let h = 0;
  for(let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h) % 2000000000;
};

async function fireNotification(title, body, tag){
  const n = Notifs();
  if(n){
    try{
      await n.schedule({notifications:[{id:notifId(tag || title), title, body,
        schedule:{at:new Date(Date.now() + 1000)}}]});
    }catch(e){}
    return;
  }
  try{ new Notification(title, {body, tag}); }catch(e){}
}

const log = (...a) => { if(CONFIG.DEBUG_VIDEO) console.log('[planit-video]', ...a); };

function useVideoMesh({room, myId, camOn, camPeers, streamRef, streamTick}){
  const [remote, setRemote] = useState({});
  const [status, setStatus] = useState({});
  const pcs = useRef({});
  const key = camPeers.join(',');

  // Whether we are actually able to send right now. camOn alone is not enough:
  // getUserMedia resolves a moment later, and a connection built before the
  // stream exists would be receive-only forever.
  const sending = camOn && !!streamRef.current;

  const close = useCallback(id => {
    const e = pcs.current[id];
    if(e){
      try{ e.pc.close(); }catch(err){}
      (e.unsubs || []).forEach(u => { try{ u(); }catch(err){} });
      delete pcs.current[id];
    }
    setRemote(r => { const n = {...r}; delete n[id]; return n; });
    setStatus(st => { const n = {...st}; delete n[id]; return n; });
  }, []);

  const closeAll = useCallback(() => { Object.keys(pcs.current).forEach(close); }, [close]);
  const wasSending = useRef(sending);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    if(!room){ closeAll(); return; }
    const others = key ? key.split(',').filter(Boolean) : [];

    // Gaining or losing your own track changes what every connection carries,
    // so those get rebuilt rather than patched.
    if(wasSending.current !== sending){ wasSending.current = sending; closeAll(); }

    Object.keys(pcs.current).forEach(id => { if(!others.includes(id)) close(id); });

    others.forEach(otherId => {
      if(pcs.current[otherId]) return;

      // Whoever has the smaller id makes the offer. One rule, no glare.
      const caller = myId < otherId;
      const callId = caller ? `${myId}_${otherId}` : `${otherId}_${myId}`;
      const ref = db().collection('rooms').doc(room).collection('calls').doc(callId);

      let pc;
      try{ pc = new RTCPeerConnection(ICE()); }
      catch(e){ return; }
      const unsubs = [];
      pcs.current[otherId] = {pc, unsubs};
      setStatus(st => ({...st, [otherId]:'connecting'}));
      log(caller ? 'calling' : 'waiting for', otherId, '| sending:', sending);

      if(sending){
        streamRef.current.getTracks().forEach(t => {
          const sender = pc.addTrack(t, streamRef.current);
          // small tiles, so keep the encode cheap, this is what lets a phone
          // send to several people without cooking itself
          try{
            const p = sender.getParameters();
            p.encodings = [{maxBitrate: 300000, maxFramerate: 20}];
            sender.setParameters(p);
          }catch(err){}
        });
      } else {
        // no camera of your own, but you still want to see theirs
        try{ pc.addTransceiver('video', {direction:'recvonly'}); }catch(err){}
      }

      pc.ontrack = e => {
        setRemote(r => ({...r, [otherId]: e.streams[0]}));
        setStatus(st => ({...st, [otherId]:'live'}));
      };
      pc.oniceconnectionstatechange = () => log('ice', otherId, pc.iceConnectionState);
      pc.onconnectionstatechange = () => {
        const cs = pc.connectionState;
        log('conn', otherId, cs);
        setStatus(st => ({...st, [otherId]: cs === 'connected' ? 'live' : cs}));
        if(['failed','closed'].includes(cs)) close(otherId);
      };

      const mine   = caller ? 'callerCandidates' : 'calleeCandidates';
      const theirs = caller ? 'calleeCandidates' : 'callerCandidates';

      // Candidates almost always arrive before the remote description is set,
      // and addIceCandidate throws if you call it too early, dropping them
      // silently. They get queued here and applied once the description lands.
      const queued = [];
      let haveRemote = false;
      const addCandidate = c => {
        if(!haveRemote){ queued.push(c); return; }
        pc.addIceCandidate(new RTCIceCandidate(c)).catch(e => log('addIceCandidate', e.message));
      };
      const flushCandidates = () => {
        haveRemote = true;
        queued.splice(0).forEach(c =>
          pc.addIceCandidate(new RTCIceCandidate(c)).catch(e => log('flush', e.message)));
      };

      pc.onicecandidate = e => {
        if(e.candidate) ref.collection(mine).add(e.candidate.toJSON()).catch(() => {});
      };
      unsubs.push(ref.collection(theirs).onSnapshot(snap => {
        snap.docChanges().forEach(ch => { if(ch.type === 'added') addCandidate(ch.doc.data()); });
      }));

      (async () => {
        try{
          if(caller){
            // Clear anything left from a previous attempt first. Without this
            // the other side reads the OLD offer, answers it, and then ignores
            // the real one because it already has a remote description.
            try{
              const stale = await Promise.all([
                ref.collection('callerCandidates').get(),
                ref.collection('calleeCandidates').get()
              ]);
              await Promise.all(stale.flatMap(sn => sn.docs.map(d => d.ref.delete())));
              await ref.delete();
            }catch(err){}

            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            await ref.set({offer:{type:offer.type, sdp:offer.sdp}, at:Date.now()});
            unsubs.push(ref.onSnapshot(d => {
              const data = d.data();
              if(data && data.answer && !pc.currentRemoteDescription){
                log('got answer from', otherId);
                pc.setRemoteDescription(new RTCSessionDescription(data.answer))
                  .then(flushCandidates)
                  .catch(e => log('setRemote(answer)', e.message));
              }
            }));
          } else {
            unsubs.push(ref.onSnapshot(async d => {
              const data = d.data();
              if(data && data.offer && !pc.currentRemoteDescription){
                try{
                  log('got offer from', otherId);
                  await pc.setRemoteDescription(new RTCSessionDescription(data.offer));
                  flushCandidates();
                  const answer = await pc.createAnswer();
                  await pc.setLocalDescription(answer);
                  await ref.set({answer:{type:answer.type, sdp:answer.sdp}}, {merge:true});
                  log('answered', otherId);
                }catch(err){ log('answer failed', err.message); }
              }
            }));
          }
        }catch(err){ close(otherId); }
      })();
    });
  }, [room, sending, key, myId, streamTick, retry, close, closeAll, streamRef]);

  // A connection that never gets past 'connecting' is dead, drop it so the
  // next pass builds a fresh one.
  useEffect(() => {
    if(!room) return;
    const i = setInterval(() => {
      let dropped = false;
      Object.entries(pcs.current).forEach(([id, e]) => {
        const cs = e.pc.connectionState;
        if(cs === 'failed' || cs === 'disconnected'){ log('retrying', id, cs); close(id); dropped = true; }
      });
      if(dropped) setRetry(r => r + 1);
    }, 9000);
    return () => clearInterval(i);
  }, [room, close]);

  useEffect(() => () => closeAll(), [closeAll]);
  return {remote, status};
}

/* ============ AVATAR ============ */
function Seat({name, focusing, me, stream, tick, bursts = [], note}){
  const vid = useRef(null);
  useEffect(() => { if(vid.current && stream) vid.current.srcObject = stream; }, [stream, tick]);
  return (
    <div className={'seat' + (focusing ? ' live' : '') + (me ? ' me' : '')}>
      <div className="seatmedia">
        {stream
          ? <video ref={vid} autoPlay playsInline muted className={'seatvid' + (me ? ' mirror' : '')} />
          : <div className="seatinitial" style={{background:avColor(name)}}>
              {String(name || '?').trim().slice(0,1).toUpperCase()}
            </div>}
      </div>
      {note && <span className="seatnote">{note}</span>}
      <b className="seatname">{name}{me ? ' (you)' : ''}</b>
      {bursts.map(b => (
        <span key={b.key} className="burst" style={{marginLeft:b.x}}>{REACTION_WORD[b.kind]}</span>
      ))}
    </div>
  );
}


const AV_COLORS = ['var(--rule)','var(--org)','var(--list)','var(--brag)','var(--watch)','var(--lock)'];
const avColor = n => AV_COLORS[[...String(n || '?')].reduce((a,c) => a + c.charCodeAt(0), 0) % AV_COLORS.length];

// Profile picture: the first letter of the name on a colour derived from it,
// so the same person always gets the same colour.
function Initial({name, size = 32, className = ''}){
  const label = String(name || '?').trim().slice(0,1).toUpperCase() || '?';
  return (
    <div className={'initial ' + className}
      style={{background:avColor(name), width:size, height:size, fontSize:Math.round(size*0.42)}}>
      {label}
    </div>
  );
}


async function saveProfile(uid, fields){
  await withTimeout(db().collection('users').doc(uid).set(fields, {merge:true}), 10000);
}

/* ============ ROLES & PARENT LINKS ============ */
// Store the birthday, work the age out each time, otherwise it's wrong by
// the next birthday and nobody thinks to update it.
const ageFrom = dob => {
  if(!dob) return null;
  const b = parseISO(dob), n = new Date();
  let a = n.getFullYear() - b.getFullYear();
  const m = n.getMonth() - b.getMonth();
  if(m < 0 || (m === 0 && n.getDate() < b.getDate())) a--;
  return (a >= 0 && a < 120) ? a : null;
};

const linkId = (childUid, parentUid) => `${childUid}_${parentUid}`;

async function findUidByUsername(username){
  const d = await withTimeout(db().collection('usernames').doc(unameKey(username)).get());
  return d.exists ? d.data().uid : null;
}

// A parent asks; the child decides. Nobody is watched without agreeing to it.
async function requestLink({parentUid, parentEmail, parentName, childUsername}){
  const childUid = await findUidByUsername(childUsername);
  if(!childUid) throw new Error('No account with that username. Check the spelling with them.');
  if(childUid === parentUid) throw new Error("That's your own username.");
  const ref = db().collection('links').doc(linkId(childUid, parentUid));
  let existing;
  try{ existing = await withTimeout(ref.get()); }
  catch(e){
    throw new Error(e.code === 'permission-denied'
      ? 'Firestore rules are out of date. Republish them from the console, then try again.'
      : 'Could not reach the database. Check your connection.');
  }
  if(existing.exists){
    const st = existing.data().status;
    throw new Error(st === 'approved'
      ? "You're already connected to that account."
      : "You've already sent a request to that account.");
  }
  await withTimeout(ref.set({
    parentUid, childUid, parentEmail: parentEmail || '', parentName: parentName || '',
    childUsername: childUsername.trim(), status:'pending', at: Date.now()
  }));
}

const linksForParent = uid => db().collection('links').where('parentUid','==',uid).get();
const linksForChild  = uid => db().collection('links').where('childUid','==',uid).get();

function Onboarding({user, onDone}){
  const [step, setStep] = useState('role');
  const [role, setRole] = useState(null);
  const [dob, setDob] = useState('');
  const [stage, setStage] = useState('hs');
  const [email, setEmail] = useState(user.email || '');
  const [childName, setChildName] = useState('');
  const [day, setDay] = useState(DEFAULT_DAY);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [note, setNote] = useState('');

  const finish = async (asRole) => {
    const r = (typeof asRole === 'string') ? asRole : role;
    setBusy(true); setErr('');
    try{
      await saveProfile(user.id, {
        role: r, onboarded:true,
        ...(r === 'student' ? {dob, stage} : {}),
        ...(r === 'parent' ? {parentEmail: email.trim()} : {}),
        day
      });
      onDone();
    }catch(e){ setErr('Could not save that. Check your connection and try again.'); setBusy(false); }
  };

  const sendRequest = async () => {
    if(!childName.trim()) return setErr("Enter your child's username.");
    setBusy(true); setErr(''); setNote('');
    try{
      await requestLink({parentUid:user.id, parentEmail:email.trim(),
        parentName:user.username, childUsername:childName});
      setNote(`Request sent to ${childName.trim()}. They'll see it in their settings.`);
      setChildName('');
    }catch(e){ setErr(e.message); }
    setBusy(false);
  };

  const wm = toMin(day.wake), sm0 = toMin(day.sleep);
  const awake = ((sm0 <= wm ? sm0 + 1440 : sm0) - wm)/60;

  return (
    <div className="authpage">
      <header className="topnav">
        <div className="tn-brand"><Mark size={38} /><b>PlanIt</b><span className="beta">setup</span></div>
      </header>
      <div className="authwrap">
        <section className="authleft">
          <div className="lead">
            <div className="leadmark"><Mark size={62} /><b>PlanIt</b></div>
          </div>

          <div className="authcard">
            <div className="cardbody">
              {step === 'role' && (
                <>
                  <h2>Who's using this?</h2>
                  <p className="csub">This decides what PlanIt shows you.</p>
                  <button className={'rolecard' + (role === 'student' ? ' on' : '')} onClick={() => setRole('student')}>
                    <span><b>I'm a student</b><small>Plan your days, track activities, focus with friends</small></span>
                  </button>
                  <button className={'rolecard' + (role === 'parent' ? ' on' : '')} onClick={() => setRole('parent')}>
                    <span><b>I'm a parent</b><small>Follow along with your child's planner, viewing only</small></span>
                  </button>
                  <Err msg={err} />
                  <button className="pillbtn" disabled={!role}
                    onClick={() => setStep(role === 'student' ? 'dob' : 'parent')}>Continue <IconArrow /></button>
                </>
              )}

              {step === 'dob' && (
                <>
                  <h2>When's your birthday?</h2>
                  <p className="csub">PlanIt works your age out from this, so it stays right every year.</p>
                  <label className="flabel">Date of birth</label>
                  <input className="finput" type="date" value={dob} max={iso(new Date())}
                    onChange={e => setDob(e.target.value)} autoFocus />
                  {ageFrom(dob) !== null && (
                    <div className="formnote">That makes you {ageFrom(dob)}.</div>
                  )}

                  <label className="flabel">Where are you studying?</label>
                  <div className="row" style={{gap:8, marginBottom:16, flexWrap:'wrap'}}>
                    {STAGES.map(([k,l]) => (
                      <button key={k} className={'chip' + (stage === k ? ' on' : '')}
                        onClick={() => setStage(k)}>{l}</button>
                    ))}
                  </div>
                  <div className="avail hint" style={{marginTop:-10}}>
                    This sets which years Brag It asks about.
                  </div>
                  <Err msg={err} />
                  <button className="pillbtn" disabled={!dob || ageFrom(dob) === null}
                    onClick={() => setStep('day')}>Continue <IconArrow /></button>
                  <button className="undertext" onClick={() => setStep('role')}>Back</button>
                </>
              )}

              {step === 'parent' && (
                <>
                  <h2>Connect to your child</h2>
                  <p className="csub">They approve the request from their own account.</p>
                  <label className="flabel">Your email</label>
                  <input className="finput" type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email here" />
                  <label className="flabel">Your child's PlanIt username</label>
                  <input className="finput" value={childName} onChange={e => setChildName(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && sendRequest()} placeholder="Enter their username here" />
                  {note && <div className="formnote">{note}</div>}
                  <Err msg={err} />
                  <button className="btn" style={{width:'100%',justifyContent:'center'}}
                    disabled={busy} onClick={sendRequest}>{busy ? 'Sending…' : 'Send request'}</button>
                  <div className="gnote" style={{marginTop:14}}>
                    <b>How this works</b>
                    Your child sees the request in their settings and chooses whether to accept. Until they do,
                    you won't see anything of theirs. You can add more children later from Settings.
                  </div>
                  <button className="pillbtn" style={{marginTop:14}} disabled={busy} onClick={finish}>
                    {busy ? 'Finishing…' : 'Finish setup'} <IconArrow />
                  </button>
                  <button className="undertext" onClick={() => setStep('role')}>Back</button>
                </>
              )}

              {step === 'day' && (
                <>
                  <h2>When does your day run?</h2>
                  <p className="csub">Your schedule starts and ends here. You can change it any time.</p>
                  <div className="grid2">
                    <label className="field"><span>I wake up at</span>
                      <input type="time" value={day.wake} onChange={e => setDay({...day, wake:e.target.value})} /></label>
                    <label className="field"><span>I go to sleep at</span>
                      <input type="time" value={day.sleep} onChange={e => setDay({...day, sleep:e.target.value})} /></label>
                  </div>
                  <div className="card soft" style={{fontSize:13,color:'var(--ink60)'}}>
                    That's <b style={{color:'var(--ink)'}}>{awake % 1 === 0 ? awake : awake.toFixed(1)} hours</b> awake.
                  </div>
                  <div className="row" style={{gap:7,margin:'12px 0 4px',flexWrap:'wrap'}}>
                    <span className="eyebrow" style={{marginRight:2}}>Quick set</span>
                    {[['Early bird','05:30','21:30'],['School day','07:00','23:00'],['Night owl','09:00','01:30']].map(([l,w,sl]) => (
                      <button key={l} className="chip" onClick={() => setDay({wake:w, sleep:sl})}>{l}</button>
                    ))}
                  </div>
                  <Err msg={err} />
                  <button className="pillbtn" disabled={busy} onClick={finish}>
                    {busy ? 'Finishing…' : 'Start planning'} <IconArrow />
                  </button>
                  <button className="undertext" onClick={() => setStep('dob')}>Back</button>
                </>
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

const Err = ({msg}) => msg ? <div className="formerr" role="alert">{msg}</div> : null;

/* ============ WATCH IT ============ */
function ViewIt({user, toast, viewChildId, setViewChild, childStore, goTab}){
  const [links, setLinks] = useState(null);
  const [childName, setChildName] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [note, setNote] = useState('');

  const load = useCallback(async () => {
    try{
      const snap = await withTimeout(linksForParent(user.id));
      setLinks(snap.docs.map(d => ({id:d.id, ...d.data()})));
    }catch(e){ setLinks([]); setErr("Couldn't load your children."); }
  }, [user.id]);
  useEffect(() => { load(); }, [load]);

  const add = async () => {
    if(!childName.trim()) return setErr("Enter your child's username.");
    setBusy(true); setErr(''); setNote('');
    try{
      await requestLink({parentUid:user.id, parentEmail:user.parentEmail || user.email,
        parentName:user.username, childUsername:childName});
      setNote(`Request sent to ${childName.trim()}.`);
      setChildName(''); load();
    }catch(e){ setErr(e.message); }
    setBusy(false);
  };

  const remove = async l => {
    if(!window.confirm(`Remove the connection to ${l.childUsername}?`)) return;
    try{
      await db().collection('links').doc(l.id).delete();
      if(viewChildId === l.childUid) setViewChild(null, '');
      toast('Removed'); load();
    }catch(e){ setErr('Could not remove that.'); }
  };

  const approved = (links || []).filter(l => l.status === 'approved');
  const waiting  = (links || []).filter(l => l.status !== 'approved');
  const d = childStore && childStore.data;
  const lock = (d && d.lock) || {};
  const st = childStore && childStore.status;
  const live = !!(st && Date.now() - (st.at || 0) < 3*60000);   // heartbeat every minute
  const lastSeen = st && st.at ? (() => {
    const mins = Math.round((Date.now() - st.at)/60000);
    if(mins < 60) return `${mins} min ago`;
    const hrs = Math.round(mins/60);
    return hrs < 24 ? `${hrs} hr ago` : `${Math.round(hrs/24)} d ago`;
  })() : 'a while ago';
  const today = iso(new Date());
  const dueToday = d ? d.tasks.filter(t => t.scope === 'daily' && t.date === today) : [];
  const soon = d ? d.events
    .filter(e => e.date >= today && e.date <= iso(addDays(new Date(), 14)))
    .sort((a,b) => a.date.localeCompare(b.date)) : [];

  return (
    <div style={{maxWidth:700}}>
      <Section title="Your children" hint="A child appears here once they accept your request.">
        {links === null ? <div className="card" style={{color:'var(--ink35)'}}>Loading…</div>
          : links.length === 0
          ? <Empty title="Nobody connected yet" hint="Add your child's username below to send a request." />
          : <>
              {approved.map(l => (
                <div key={l.id} className={'childrow' + (viewChildId === l.childUid ? ' on' : '')}>
                  <Initial name={l.childUsername} size={38} />
                  <div className="txt">
                    <b>{l.childUsername}</b>
                    <div className="meta">{viewChildId === l.childUid ? 'Showing their planner' : 'Connected'}</div>
                  </div>
                  <div className="todo-actions">
                    {viewChildId === l.childUid
                      ? <button className="btn sm" onClick={() => setViewChild(null, '')}>Stop viewing</button>
                      : <button className="btn sm primary" onClick={() => setViewChild(l.childUid, l.childUsername)}>View planner</button>}
                    <XBtn onClick={() => remove(l)} label="Remove" />
                  </div>
                </div>
              ))}
              {waiting.map(l => (
                <div key={l.id} className="todo" style={{alignItems:'center'}}>
                  <Initial name={l.childUsername} size={34} />
                  <div className="txt">
                    <b>{l.childUsername}</b>
                    <div className="meta">{l.status === 'declined' ? 'Declined the request' : 'Waiting for them to accept'}</div>
                  </div>
                  <div className="todo-actions">
                    <span className="status">{l.status}</span>
                    <XBtn onClick={() => remove(l)} label="Remove" />
                  </div>
                </div>
              ))}
            </>}
      </Section>

      {viewChildId && (
        <Section title="How they're doing">
          {childStore === null ? <div className="card" style={{color:'var(--ink35)'}}>Loading their planner…</div>
            : childStore.error
            ? <div className="formerr">{childStore.error}</div>
            : childStore.empty
            ? <div className="card soft" style={{color:'var(--ink60)',fontSize:13.5,lineHeight:1.6}}>
                Nothing uploaded yet. Ask them to open PlanIt and change something: a task, a tick, anything.
                Their planner uploads a moment after any edit.
              </div>
            : <>
                <div className="nowcard">
                  <span className={'nowdot' + (live ? ' on' : '')} />
                  <div style={{flex:1, minWidth:0}}>
                    <b>{!st ? 'No activity yet'
                      : live && st.room ? `In study room ${st.room}${st.focusing ? ', focusing' : ''}`
                      : live && st.focusing ? 'Focusing right now'
                      : live ? 'PlanIt is open'
                      : `Last active ${lastSeen}`}</b>
                    {live && st && st.room && (
                      <div style={{fontSize:12.5, color:'var(--ink35)', marginTop:2}}>
                        Studying with others in a shared room
                      </div>
                    )}
                  </div>
                </div>

                <div className="row" style={{gap:12,flexWrap:'wrap',marginBottom:14}}>
                  <div className="card" style={{flex:1,minWidth:150}}>
                    <div className="eyebrow">Minutes today</div>
                    <div className="mono" style={{fontSize:26,fontWeight:500}}>{lock.minutes || 0}</div>
                  </div>
                  <div className="card" style={{flex:1,minWidth:150}}>
                    <div className="eyebrow">Sessions today</div>
                    <div className="mono" style={{fontSize:26,fontWeight:500}}>{lock.sessions || 0}</div>
                  </div>
                  <div className="card" style={{flex:1,minWidth:150}}>
                    <div className="eyebrow">On today's list</div>
                    <div className="mono" style={{fontSize:26,fontWeight:500}}>
                      {dueToday.filter(t => t.done).length}/{dueToday.length}
                    </div>
                  </div>
                </div>

                <div className="eyebrow" style={{marginBottom:8}}>This week</div>
                <div className="histrow">
                  {buildReport(lock, 'week').bars.map(h => (
                    <div key={h.key} className="histbar" title={`${h.minutes} min`}>
                      <i style={{height:Math.max(3, Math.min(60, h.minutes)) + 'px'}} />
                      <span className="mono">{h.label}</span>
                    </div>
                  ))}
                </div>

                <div className="eyebrow" style={{marginBottom:8}}>Coming up in the next two weeks</div>
                {soon.length === 0
                  ? <Empty title="Nothing marked on their calendar" hint="Tests, deadlines, and birthdays would show here." />
                  : soon.slice(0,8).map(e => (
                    <div key={e.id} className="todo" style={{alignItems:'center'}}>
                      <span style={{width:9,height:9,borderRadius:99,background:evColor(e.type),flex:'none'}} />
                      <div className="txt"><b>{e.title}</b>
                        <div className="meta">{evLabel(e.type)} · {fmtDay(parseISO(e.date))}</div></div>
                    </div>
                  ))}

                <div className="card soft" style={{marginTop:14,fontSize:13,color:'var(--ink60)'}}>
                  Their calendars, lists, honors, activities, and certifications are all open in the other
                  tabs while you're viewing. Read only.
                  <button className="btn sm" style={{marginLeft:10}} onClick={() => goTab('organize')}>Open their calendar</button>
                </div>
              </>}
        </Section>
      )}

      <Section title="Add a child">
        <div className="card">
          <Field label="Their PlanIt username">
            <input value={childName} onChange={e => setChildName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && add()} placeholder="Enter their username here" />
          </Field>
          {note && <div className="formnote">{note}</div>}
          <Err msg={err} />
          <button className="btn primary" disabled={busy} onClick={add}>{busy ? 'Sending…' : 'Send request'}</button>
        </div>
      </Section>
    </div>
  );
}

/* ============ SETTINGS ============ */
/* ============ APPEARANCE ============ */
// Every palette carries a full token set for each mode, so a theme is one
// coherent design rather than an accent colour swapped on top of grey.
// Each value here was solved against a WCAG target, not picked by eye:
// body text clears 4.5:1 on the darkest surface of its own mode, the
// supporting tone clears 4.5:1, accents clear 3:1, and every filled
// section or block colour can carry a readable label.
const PALETTES = [
  {id:'terracotta', label:'Terracotta & Linen', note:'Warm, grounded',
   light:{
     paper:'#F9F6F0', card:'#FFFDF9', soft:'#F3EEE4', surface:'#EAE1D4',
     ink:'#1F2B38', ink60:'#3C4A59', ink35:'#576574', line:'#CABBA5',
     accent:'#C14D33', accent2:'#B99B7E', rule:'#B3382A',
     sections:{brag:'#A16828', list:'#517E64', organize:'#53769A', lock:'#C34E41', settings:'#637589', watch:'#337D92'},
     blocks:['#C24E34', '#8E6D4C', '#53779B', '#507D63', '#9E6727', '#327B90', '#906C5C', '#647589', '#C34B55']
   },
   dark:{
     paper:'#171C22', card:'#2C3845', soft:'#212A33', surface:'#28333F',
     ink:'#F7F6F2', ink60:'#CEC6B8', ink35:'#A9A08F', line:'#405161',
     accent:'#ED846C', accent2:'#AD7A46', rule:'#EE8372',
     sections:{brag:'#CD8736', list:'#6FA384', organize:'#7A99B7', lock:'#D47F76', settings:'#8897A9', watch:'#42A2BD'},
     blocks:['#D77D69', '#B39271', '#7A99B7', '#6CA182', '#CD8838', '#42A1BB', '#AF8F82', '#8998AA', '#D47F86']
   }
  },
  {id:'sage', label:'Sage & Paper', note:'Calm, understated',
   light:{
     paper:'#F5F6EF', card:'#FCFDF8', soft:'#EDF0E3', surface:'#E2E8D8',
     ink:'#252F28', ink60:'#414D44', ink35:'#5D6860', line:'#B8C5A4',
     accent:'#5D7A55', accent2:'#93AB81', rule:'#A64A2F',
     sections:{brag:'#896F33', list:'#5D7C56', organize:'#4F7C66', lock:'#A86257', settings:'#647A69', watch:'#457B77'},
     blocks:['#5E7C56', '#627A51', '#4F7C66', '#8C7134', '#A56055', '#477E7A', '#6B774F', '#627868', '#A66341']
   },
   dark:{
     paper:'#171B17', card:'#28302A', soft:'#1E241F', surface:'#232B24',
     ink:'#E4E9E1', ink60:'#B4BDAF', ink35:'#8F9A8A', line:'#3C4A3F',
     accent:'#70A463', accent2:'#668451', rule:'#D78060',
     sections:{brag:'#B69443', list:'#7FA077', organize:'#6FA389', lock:'#BE8880', settings:'#869C8C', watch:'#5DA49E'},
     blocks:['#7D9F75', '#839F6F', '#6EA288', '#B59343', '#BE8A82', '#5CA39D', '#8C9B6A', '#849B8A', '#C68A6B']
   }
  },
  {id:'iris', label:'Midnight & Iris', note:'Modern, focused',
   light:{
     paper:'#F4F3F9', card:'#FFFFFF', soft:'#ECEBF4', surface:'#E1E0EE',
     ink:'#272743', ink60:'#454564', ink35:'#60607D', line:'#BCB9D3',
     accent:'#7A66C7', accent2:'#979BD7', rule:'#B23259',
     sections:{brag:'#8F61AE', list:'#477A9D', organize:'#7864C6', lock:'#B25395', settings:'#717194', watch:'#3A7D87'},
     blocks:['#7965C6', '#666CC3', '#8E60AD', '#45799B', '#B05093', '#397B85', '#707093', '#B95375', '#5D6DBA']
   },
   dark:{
     paper:'#171724', card:'#2C2C43', soft:'#212134', surface:'#28283D',
     ink:'#E8E7F2', ink60:'#BAB8D0', ink35:'#9694B0', line:'#464368',
     accent:'#998AE7', accent2:'#6A71D7', rule:'#DF7695',
     sections:{brag:'#AC8AC3', list:'#6D9DBD', organize:'#9B8CD4', lock:'#C67FB0', settings:'#9595AF', watch:'#4CA4B2'},
     blocks:['#9D8FD6', '#8B90D2', '#AB88C2', '#6D9DBD', '#C681B1', '#4CA4B1', '#9393AE', '#CC829B', '#8994CC']
   }
  },
  {id:'rosewood', label:'Rosewood & Blush', note:'Warm, expressive',
   light:{
     paper:'#FAF3F2', card:'#FFF9F8', soft:'#F3E7E6', surface:'#EEDDDC',
     ink:'#37242B', ink60:'#574249', ink35:'#725D64', line:'#D2B5B8',
     accent:'#BB5166', accent2:'#C0949A', rule:'#AB3C4B',
     sections:{brag:'#946B2F', list:'#647B55', organize:'#9F627B', lock:'#BC5267', settings:'#8B6D77', watch:'#4F7B86'},
     blocks:['#BC5267', '#A2616A', '#9F627B', '#966D2F', '#637954', '#4E7A85', '#9C6479', '#8A6D77', '#C54852']
   },
   dark:{
     paper:'#1D1618', card:'#322429', soft:'#251B1E', surface:'#2B2024',
     ink:'#E8DCDE', ink60:'#C3AEB1', ink35:'#A18A8D', line:'#523C3F',
     accent:'#DB7989', accent2:'#A96069', rule:'#D9707E',
     sections:{brag:'#C08C3D', list:'#839D72', organize:'#B78A9D', lock:'#CE8090', settings:'#A89098', watch:'#6F9FAB'},
     blocks:['#CE8291', '#BB8C92', '#B88C9E', '#C28E3F', '#859E74', '#6D9DA9', '#B68D9C', '#A99199', '#D67D85']
   }
  },
  {id:'coastal', label:'Coastal Blue', note:'Airy, clear',
   light:{
     paper:'#F2F7FA', card:'#FFFFFF', soft:'#E8F0F4', surface:'#DCE8EF',
     ink:'#1F2F3A', ink60:'#3A4D59', ink35:'#566874', line:'#B1C3CF',
     accent:'#2F7A95', accent2:'#81AABB', rule:'#A34D2E',
     sections:{brag:'#946B2C', list:'#367E6B', organize:'#417B9F', lock:'#AC5D67', settings:'#5F7583', watch:'#2D7C90'},
     blocks:['#307B97', '#4B798B', '#40799D', '#367F6B', '#986D2D', '#AC5D68', '#63749B', '#607684', '#B55836']
   },
   dark:{
     paper:'#121A1F', card:'#243440', soft:'#19222A', surface:'#1F2D35',
     ink:'#E7F0F3', ink60:'#AEC4CC', ink35:'#879FA8', line:'#394D59',
     accent:'#59A5BE', accent2:'#4D879D', rule:'#DB8565',
     sections:{brag:'#C18B3A', list:'#47A58C', organize:'#629CBF', lock:'#C28990', settings:'#8499A6', watch:'#3BA2BB'},
     blocks:['#40A0C3', '#6D9DB0', '#639CBF', '#47A68C', '#C38D3A', '#C1868E', '#8C99B6', '#8599A6', '#D18164']
   }
  },
  {id:'matcha', label:'Matcha & Plum', note:'Creative, editorial',
   light:{
     paper:'#F5F3EB', card:'#FCFBF6', soft:'#EEEDE0', surface:'#E3E6D5',
     ink:'#2C2C26', ink60:'#4A4A42', ink35:'#65655C', line:'#C1C0A6',
     accent:'#916699', accent2:'#97A883', rule:'#9E4E2D',
     sections:{brag:'#8D6D34', list:'#64784D', organize:'#746F92', lock:'#8E6496', settings:'#747463', watch:'#4B7A74'},
     blocks:['#8F6597', '#697B55', '#746E92', '#906F35', '#627C46', '#4D7D77', '#9E6544', '#757563', '#A75B81']
   },
   dark:{
     paper:'#1A1A17', card:'#2B2B26', soft:'#20201C', surface:'#262621',
     ink:'#E3E3DB', ink60:'#B7B7A9', ink35:'#949486', line:'#45453A',
     accent:'#AE8BB5', accent2:'#697F51', rule:'#D17E54',
     sections:{brag:'#BB9047', list:'#859F68', organize:'#9894AE', lock:'#AB8BB2', settings:'#989886', watch:'#66A199'},
     blocks:['#AD8DB3', '#899D73', '#9692AC', '#BB9046', '#80A15B', '#64A098', '#C08B6D', '#999987', '#BF87A3']
   }
  },
  {id:'graphite', label:'Graphite & Amber', note:'Structured, professional',
   light:{
     paper:'#F3F1EC', card:'#FAF9F6', soft:'#ECEAE2', surface:'#E3DFD6',
     ink:'#27282E', ink60:'#44474D', ink35:'#5F6169', line:'#C1BAAA',
     accent:'#9E6923', accent2:'#B09B7D', rule:'#A93F2A',
     sections:{brag:'#9B6622', list:'#497D63', organize:'#607690', lock:'#B55A43', settings:'#6F7482', watch:'#467B88'},
     blocks:['#9E6823', '#857051', '#607690', '#4A7F65', '#B25842', '#457986', '#826B8D', '#6F7482', '#CC4733']
   },
   dark:{
     paper:'#15161A', card:'#24262B', soft:'#1B1C20', surface:'#1F2126',
     ink:'#DDDCD6', ink60:'#B3B1A8', ink35:'#908E85', line:'#3D4047',
     accent:'#CD8839', accent2:'#86704E', rule:'#DA6F54',
     sections:{brag:'#CF892E', list:'#65A585', organize:'#8598AE', lock:'#CB8472', settings:'#9397A3', watch:'#639FAE'},
     blocks:['#CD882D', '#AA9474', '#8799AF', '#64A484', '#CB8573', '#629FAE', '#A28FAB', '#9195A1', '#DB7E70']
   }
  },
];

const PALETTE_IDS = PALETTES.map(p => p.id);
const DEFAULT_PALETTE = 'terracotta';
const palette = id => PALETTES.find(p => p.id === id) || PALETTES[0];

const TOKENS = ['paper','card','soft','surface','ink','ink60','ink35','line','accent','accent2','rule'];
const SECTION_KEYS = [['brag','Brag It'],['list','List It'],['organize','Organize It'],
  ['lock','Lock It'],['settings','Settings'],['watch','View It']];
// the CSS variable is --org, the setting key is 'organize'
const cssVarFor = k => k === 'organize' ? 'org' : k;

const MODES = [['light','Light'],['dark','Dark'],['system','Match device']];
const EVENT_KEYS = [['test','Test or quiz'],['deadline','Deadline'],['birthday','Birthday'],
  ['meeting','Meeting'],['other','Other']];

// Old saves used settings.theme with 'auto', and palette ids that no longer
// exist. Read through these rather than migrating, so nothing is rewritten
// behind the person's back and an older build can still read the same save.
const modeOf = st => {
  const m = st.mode || st.theme || 'light';
  return m === 'auto' ? 'system' : (m === 'dark' || m === 'system' ? m : 'light');
};
const paletteOf = st => PALETTE_IDS.includes(st.palette) ? st.palette : DEFAULT_PALETTE;
const prefersDark = () => {
  try { return window.matchMedia('(prefers-color-scheme: dark)').matches; } catch(e){ return false; }
};
const isDarkMode = mode => mode === 'dark' || (mode === 'system' && prefersDark());

// Written on every change so the boot script in <head> can paint the right
// background before React has loaded anything.
const APPEARANCE_KEY = 'planit:appearance:v1';

/* Applies a palette, a mode, and any manual overrides as CSS custom
   properties on <html>, which is why modals and the lock screen pick them up
   too. Overrides are applied last and only where set, so clearing one falls
   back to the palette instead of to a hardcoded colour. */
function applyAppearance(st){
  const root = document.documentElement;
  if(!root) return;
  const mode = modeOf(st), dark = isDarkMode(mode);
  const t = palette(paletteOf(st))[dark ? 'dark' : 'light'];

  TOKENS.forEach(k => root.style.setProperty('--' + k, t[k]));
  // "12, 34, 56" so a gradient can fade the page colour out with rgba().
  // color-mix() would be tidier but is missing on older iOS Safari, where the
  // whole veil would then be dropped and the headline left on bare photo.
  root.style.setProperty('--paper-rgb', rgbParts(t.paper));
  root.style.setProperty('--accent-soft', withAlpha(t.accent, dark ? .22 : .12));
  root.style.setProperty('--accent-ink', inkOn(t.accent));
  root.setAttribute('data-theme', dark ? 'dark' : 'light');
  root.style.colorScheme = dark ? 'dark' : 'light';   // native controls follow

  const acc = st.accents || {}, live = {};
  SECTION_KEYS.forEach(([k]) => {
    const hex = acc[k] || t.sections[k];
    live[k] = hex;
    root.style.setProperty('--' + cssVarFor(k), hex);
    root.style.setProperty('--' + cssVarFor(k) + '-ink', inkOn(hex));
  });

  // Status tints follow whatever colour is live, so a warning in one theme is
  // not a leftover red from another. Dark mode needs more alpha to show up.
  const tint = dark ? .18 : .09, edge = dark ? .42 : .30;
  root.style.setProperty('--rule-soft', withAlpha(t.rule, tint));
  root.style.setProperty('--rule-line', withAlpha(t.rule, edge));
  root.style.setProperty('--list-soft', withAlpha(live.list, tint));
  root.style.setProperty('--brag-soft', withAlpha(live.brag, tint));
  root.style.setProperty('--brag-line', withAlpha(live.brag, edge));
  root.style.setProperty('--watch-glow', withAlpha(live.watch, .55));

  const bc = st.blockColors || {};
  BLOCK_COLORS.forEach((c, i) => {
    const hex = bc[c.id] || t.blocks[i] || c.hex;
    root.style.setProperty('--bc-' + c.id, hex);
    // A block is drawn as a tint of its own colour. The tint is mixed here,
    // where the value is still a hex: blockHex() hands out a var() reference,
    // which cannot be turned into rgba in JavaScript.
    root.style.setProperty('--bc-' + c.id + '-soft', withAlpha(hex, dark ? .26 : .17));
  });

  const ev = st.eventColors || {};
  root.style.setProperty('--t-test',     ev.test     || t.sections.lock);
  root.style.setProperty('--t-deadline', ev.deadline || t.sections.brag);
  root.style.setProperty('--t-birthday', ev.birthday || t.sections.list);
  root.style.setProperty('--t-meeting',  ev.meeting  || t.sections.organize);
  root.style.setProperty('--t-other',    ev.other    || t.sections.settings);

  if(st.bg) root.style.setProperty('--paper', st.bg);

  try {
    localStorage.setItem(APPEARANCE_KEY, JSON.stringify(
      {palette:paletteOf(st), mode:mode, bg:st.bg || null}));
  } catch(e){}
}

const SOURCE_LABELS = {friend:'A friend', social:'Social media', search:'A search',
  school:'School or a teacher', other:'Somewhere else', unsaid:'Did not say'};

// Sign-up and referral numbers for the team. The code on the sign-up screen
// decides who sees this tab; the Firestore rules decide who can actually read
// the rows, so a guessed code shows an empty screen rather than other people's data.
function AdminNumbers({sub, user}){
  const [rows, setRows] = useState(null);
  const [err, setErr] = useState('');
  useEffect(() => {
    db().collection('signups').get()
      .then(sn => setRows(sn.docs.map(d => d.data())))
      .catch(() => { setRows([]); setErr("You're signed in as team, but this account isn't allowed to read the numbers yet."); });
  }, []);

  if(rows === null) return <Empty title="Loading…" hint="Fetching sign-ups." />;
  const total = rows.length;

  if(sub === 'referrers'){
    const named = {};
    rows.forEach(r => { if(r.refBy){ const k = r.refBy.trim().toLowerCase(); named[k] = (named[k] || 0) + 1; } });
    const ranked = Object.entries(named).sort((a,b) => b[1] - a[1]);
    const top = ranked.length ? ranked[0][1] : 1;
    return (
      <Section title="Named as the referrer" hint="Counted from what people typed when they signed up.">
        {err && <div className="formerr">{err}</div>}
        {ranked.length === 0
          ? <Empty title="No referrals yet" hint="Nobody has named a friend when signing up." />
          : <div className="card">
              {ranked.map(([name, n], i) => (
                <div key={name} style={{marginBottom:12}}>
                  <div className="row" style={{justifyContent:'space-between', fontSize:13.5, marginBottom:4}}>
                    <span><span className="rank">{i + 1}</span>{name}</span>
                    <span className="mono" style={{color:'var(--ink35)'}}>
                      {n} {n === 1 ? 'signup' : 'signups'}{n >= 5 ? ' · earned Pro' : ''}
                    </span>
                  </div>
                  <div className="bar"><i style={{width:Math.round(n/top*100) + '%'}} /></div>
                </div>
              ))}
            </div>}
      </Section>
    );
  }

  const tally = {};
  rows.forEach(r => { tally[r.source || 'unsaid'] = (tally[r.source || 'unsaid'] || 0) + 1; });
  const ranked = Object.entries(tally).sort((a,b) => b[1] - a[1]);
  return (
    <>
      <Section title="Accounts">
        {err && <div className="formerr">{err}</div>}
        <div className="row" style={{gap:12, flexWrap:'wrap'}}>
          <div className="card" style={{flex:1, minWidth:140}}>
            <div className="eyebrow">Total sign-ups</div>
            <div className="mono" style={{fontSize:30, fontWeight:600}}>{total}</div>
          </div>
          <div className="card" style={{flex:1, minWidth:140}}>
            <div className="eyebrow">Came from a friend</div>
            <div className="mono" style={{fontSize:30, fontWeight:600}}>
              {rows.filter(r => r.source === 'friend').length}
            </div>
          </div>
          <div className="card" style={{flex:1, minWidth:140}}>
            <div className="eyebrow">Founding 100 left</div>
            <div className="mono" style={{fontSize:30, fontWeight:600}}>{Math.max(0, 100 - total)}</div>
          </div>
        </div>
      </Section>

      <Section title="Where sign-ups come from">
        {total === 0
          ? <Empty title="Nothing yet" hint="No sign-ups have been recorded." />
          : <div className="card">
              {ranked.map(([k,n]) => (
                <div key={k} style={{marginBottom:12}}>
                  <div className="row" style={{justifyContent:'space-between', fontSize:13.5, marginBottom:4}}>
                    <span>{SOURCE_LABELS[k] || k}</span>
                    <span className="mono" style={{color:'var(--ink35)'}}>{n} · {Math.round(n/total*100)}%</span>
                  </div>
                  <div className="bar"><i style={{width:(n/total*100) + '%'}} /></div>
                </div>
              ))}
            </div>}
      </Section>
    </>
  );
}

function SignupSources({user}){
  const [rows, setRows] = useState(null);
  useEffect(() => {
    db().collection('signups').get()
      .then(sn => setRows(sn.docs.map(d => d.data())))
      .catch(() => setRows([]));
  }, []);
  if(user.id !== CONFIG.ADMIN_UID) return null;

  const tally = {};
  (rows || []).forEach(r => { tally[r.source || 'unsaid'] = (tally[r.source || 'unsaid'] || 0) + 1; });
  const total = (rows || []).length;
  const ranked = Object.entries(tally).sort((a,b) => b[1] - a[1]);
  const named = (rows || []).filter(r => r.refBy).reduce((m,r) => {
    const k = r.refBy.toLowerCase(); m[k] = (m[k] || 0) + 1; return m;
  }, {});

  return (
    <Section title="Where signups come from" hint="Only you see this.">
      <div className="card">
        {rows === null ? <span style={{color:'var(--ink35)'}}>Loading…</span>
          : total === 0 ? <span style={{color:'var(--ink35)'}}>No signups recorded yet.</span>
          : <>
              <div className="eyebrow" style={{marginBottom:10}}>{total} accounts</div>
              {ranked.map(([k,n]) => (
                <div key={k} style={{marginBottom:10}}>
                  <div className="row" style={{justifyContent:'space-between',fontSize:13,marginBottom:4}}>
                    <span>{SOURCE_LABELS[k] || k}</span>
                    <span className="mono" style={{color:'var(--ink35)'}}>{n} · {Math.round(n/total*100)}%</span>
                  </div>
                  <div className="bar"><i style={{width:(n/total*100) + '%'}} /></div>
                </div>
              ))}
              {Object.keys(named).length > 0 && (
                <>
                  <div className="eyebrow" style={{margin:'16px 0 8px'}}>Named as the referrer</div>
                  {Object.entries(named).sort((a,b) => b[1]-a[1]).map(([n,c]) => (
                    <div key={n} className="row" style={{justifyContent:'space-between',fontSize:13,padding:'4px 0'}}>
                      <span>{n}</span><span className="mono" style={{color:'var(--ink35)'}}>{c}</span>
                    </div>
                  ))}
                </>
              )}
            </>}
      </div>
    </Section>
  );
}

function Referrals({user, toast}){
  const [count, setCount] = useState(null);
  const REWARD_AT = 5;
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    countReferrals(user.id).then(setCount).catch(() => setCount(0));
  }, [user.id]);

  const copy = () => {
    navigator.clipboard.writeText(user.username)
      .then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); })
      .catch(() => toast('Your code is ' + user.username));
  };

  const goal = 5;
  const n = count || 0;
  return (
    <Section title="Refer a friend" hint="Your username is your code. They type it in when they sign up.">
      <div className="card">
        <div className="spread" style={{marginBottom:14}}>
          <div>
            <div className="eyebrow">Your code</div>
            <b className="mono roomcode" style={{fontSize:20}}>{user.username}</b>
          </div>
          <button className="btn sm" onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
        </div>
        <div className="row" style={{justifyContent:'space-between',fontSize:12.5,color:'var(--ink60)',marginBottom:6}}>
          <span>{count === null ? 'Counting…' : `${n} of ${goal} friends joined`}</span>
          <span className="mono">{Math.min(100, Math.round(n/goal*100))}%</span>
        </div>
        <div className="bar"><i style={{width:Math.min(100, n/goal*100) + '%'}} /></div>
        {n >= REWARD_AT ? (
          <div className="formnote" style={{marginTop:12, marginBottom:0}}>
            <b>You've earned it.</b> {n} people signed up with your code. That's free Pro for three months.
            <button className="btn sm primary" style={{marginLeft:10}} onClick={() => {
              saveProfile(user.id, {referralRewardClaimed:Date.now()}).catch(() => {});
              toast('Claim recorded. We\'ll apply it when Pro launches');
            }}>Redeem</button>
          </div>
        ) : (
          <div style={{fontSize:12.5,color:'var(--ink35)',marginTop:10,lineHeight:1.5}}>
            {REWARD_AT - n} more and Pro is free for three months. Counts are kept as you go.
          </div>
        )}
      </div>
    </Section>
  );
}

const BUG_AREAS = [
  ['brag','Brag It'], ['list','List It'], ['organize','Organize It: calendars'],
  ['lock','Lock It: timer or study rooms'], ['watch','View It: parent view'],
  ['account','Signing in or my account'], ['other','Somewhere else'],
];

function BugReport({user, toast}){
  const [area, setArea] = useState('');
  const [what, setWhat] = useState('');
  const [steps, setSteps] = useState('');
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');

  const send = async () => {
    if(what.trim().length < 10) return setErr('Tell us a bit more. What went wrong?');
    setBusy(true); setErr('');
    try{
      await withTimeout(db().collection('bugs').add({
        uid: user.id,
        username: user.username || '',
        email: user.email || '',
        area, what: what.trim(), steps: steps.trim(),
        // context that saves a round of back-and-forth
        agent: navigator.userAgent,
        screen: `${window.innerWidth}x${window.innerHeight}`,
        at: Date.now()
      }), 10000);
      setSent(true); toast('Thanks, that helps');
    }catch(e){
      setErr(e.code === 'permission-denied'
        ? 'Firestore rules need republishing before reports can be sent.'
        : 'Could not send that. Check your connection and try again.');
    }
    setBusy(false);
  };

  if(sent) return (
    <Section title="Report a bug">
      <div className="card" style={{textAlign:'center', padding:'28px 20px'}}>
        <b style={{fontSize:16, display:'block', marginBottom:4}}>Sent</b>
        <p style={{margin:0, color:'var(--ink60)', fontSize:13.5}}>
          Thanks for taking the time. There's no reply from here, but it's been logged.
        </p>
        <button className="btn" style={{marginTop:16}}
          onClick={() => { setSent(false); setWhat(''); setSteps(''); setArea(''); }}>Report another</button>
      </div>
    </Section>
  );

  return (
    <>
      <Section title="Report a bug" hint="Something broken, confusing, or just wrong? Say so here.">
        <div className="card">
          <Field label="Where did it happen?">
            <select value={area} onChange={e => setArea(e.target.value)}>
              <option value="">Choose one</option>
              {BUG_AREAS.map(([k,l]) => <option key={k} value={k}>{l}</option>)}
            </select>
          </Field>
          <Field label="What went wrong?">
            <textarea value={what} onChange={e => setWhat(e.target.value)}
              placeholder="The reset button on the timer does nothing when I tap it" />
          </Field>
          <Field label="What were you doing just before? (optional)">
            <textarea value={steps} onChange={e => setSteps(e.target.value)}
              placeholder="Started a 25 minute session, paused it, then tried to reset" />
          </Field>
          {err && <div className="formerr">{err}</div>}
          <button className="btn primary" disabled={busy} onClick={send}>{busy ? 'Sending…' : 'Send report'}</button>
        </div>
      </Section>
      <Section title="Sent along with it">
        
      </Section>
    </>
  );
}

function BlockedApps({settings, setSettings, toast}){
  // nativePlugin() hands back a proxy whether or not the plugin is really
  // there, so availability is decided by calling it and seeing what happens.
  const [probe, setProbe] = useState('checking');   // checking | ready | absent | web
  const [state, setState] = useState({count:0, authorized:false});

  const refresh = useCallback(() => {
    const b = Blocker();
    if(!b) return;
    b.getSelection().then(r => setState({count:r.count || 0, authorized:!!r.authorized})).catch(() => {});
  }, []);

  useEffect(() => {
    if(!isNativeApp()){ setProbe('web'); return; }
    const b = Blocker();
    if(!b){ setProbe('absent'); return; }
    let alive = true;
    Promise.resolve(b.isSupported())
      .then(r => { if(!alive) return; if(r && r.supported){ setProbe('ready'); refresh(); } else setProbe('absent'); })
      .catch(() => { if(alive) setProbe('absent'); });
    return () => { alive = false; };
  }, [refresh]);

  const allow = async () => {
    try{
      const r = await Blocker().requestAuthorization();
      if(r.granted){ toast('Blocking allowed'); refresh(); }
      else toast(r.reason || 'Permission was declined');
    }catch(e){ toast("Couldn't ask for permission"); }
  };

  const choose = async () => {
    try{
      const r = await Blocker().pickApps();
      if(!r.cancelled){ toast(`${r.count} selected`); refresh(); }
    }catch(e){ toast("Couldn't open the picker"); }
  };

  if(probe === 'checking') return <Empty title="Checking…" hint="Seeing whether this build can block apps." />;

  if(probe === 'web') return (
    <Section title="Blocking other apps">
      <div className="card soft" style={{fontSize:13.5, color:'var(--ink60)', lineHeight:1.65}}>
        <b style={{color:'var(--ink)', display:'block', marginBottom:6}}>Only in the PlanIt app</b>
        No browser can block other apps, on any phone. The iPhone app uses Apple's Screen Time permission
        to shield the apps you pick while a Lock It session runs.
      </div>
    </Section>
  );

  if(probe === 'absent') return (
    <Section title="Blocking other apps">
      <div className="card soft" style={{fontSize:13.5, color:'var(--ink60)', lineHeight:1.65}}>
        <b style={{color:'var(--ink)', display:'block', marginBottom:6}}>Not in this build yet</b>
        App blocking needs Apple's Screen Time permission, which Apple grants per app. Once that is approved
        and the blocker is built in, this screen turns into a list of apps to shield during a session.
      </div>
    </Section>
  );

  return (
    <>
      <Section title="Blocking other apps" hint="Shielded only while a Lock It session is running.">
        <div className="card">
          <div className="switchrow" style={{marginBottom:14}}>
            <span>
              <b>Block apps during sessions</b>
              <small>Chosen apps won't open until the timer ends or you stop it.</small>
            </span>
            <input type="checkbox" checked={!!settings.blockApps}
              onChange={e => setSettings({...settings, blockApps:e.target.checked})} />
          </div>

          {!state.authorized ? (
            <>
              <div className="gnote" style={{marginBottom:12}}>
                <b>Permission needed</b>
                iOS asks before any app can shield another. On a child's phone this asks a parent for the
                Screen Time passcode.
              </div>
              <button className="btn primary wide" onClick={allow}>Allow blocking</button>
            </>
          ) : (
            <>
              <div className="spread" style={{marginBottom:12}}>
                <span style={{fontSize:13.5}}>Apps and categories chosen</span>
                <b className="mono" style={{fontSize:20}}>{state.count || 0}</b>
              </div>
              <button className="btn primary wide" onClick={choose}>
                {state.count ? 'Change which apps' : 'Choose apps'}
              </button>
            </>
          )}
        </div>
      </Section>

      <Section title="Why no app names?">
        <div className="card soft" style={{fontSize:13, color:'var(--ink60)', lineHeight:1.6}}>
          Apple hands over tokens it will shield but won't let anyone read, so no app can take an inventory of
          your phone. PlanIt knows how many you picked, never which.
        </div>
      </Section>
    </>
  );
}

// A student's view of who has asked to follow along, and who already does.
function ParentAccess({user, toast, onChange}){
  const [links, setLinks] = useState(null);
  const load = useCallback(async () => {
    try{
      const snap = await withTimeout(linksForChild(user.id));
      setLinks(snap.docs.map(d => ({id:d.id, ...d.data()})));
    }catch(e){ setLinks([]); }
  }, [user.id]);
  useEffect(() => { load(); }, [load]);

  const decide = async (l, status) => {
    try{
      await db().collection('links').doc(l.id).update({status, decidedAt:Date.now()});
      toast(status === 'approved' ? 'Access granted' : 'Request declined');
      load(); onChange && onChange();
    }catch(e){ toast('Could not save that'); }
  };
  const revoke = async l => {
    if(!window.confirm(`Stop ${l.parentName || 'this parent'} from following your planner?`)) return;
    try{ await db().collection('links').doc(l.id).delete(); toast('Access removed'); load(); onChange && onChange(); }
    catch(e){ toast('Could not remove that'); }
  };

  if(!links || links.length === 0) return null;
  const pending = links.filter(l => l.status === 'pending');
  const active  = links.filter(l => l.status === 'approved');

  return (
    <>
      {pending.length > 0 && (
        <Section title="Requests to follow your planner"
          hint="They can only ever look. Nothing they do changes your planner.">
          {pending.map(l => (
            <div key={l.id} className="card" style={{marginBottom:10}}>
              <b>{l.parentName || 'A parent'}</b>
              <div style={{fontSize:12.5, color:'var(--ink35)', margin:'2px 0 12px'}}>{l.parentEmail}</div>
              <div className="row" style={{gap:8}}>
                <button className="btn primary" onClick={() => decide(l,'approved')}>Allow</button>
                <button className="btn" onClick={() => decide(l,'declined')}>Decline</button>
              </div>
            </div>
          ))}
        </Section>
      )}
      {active.length > 0 && (
        <Section title="Following your planner">
          {active.map(l => (
            <div key={l.id} className="todo" style={{alignItems:'center'}}>
              <Initial name={l.parentName || l.parentEmail} size={32} />
              <div className="txt"><b>{l.parentName || 'Parent'}</b><div className="meta">{l.parentEmail}</div></div>
              <div className="todo-actions"><button className="btn sm" onClick={() => revoke(l)}>Remove</button></div>
            </div>
          ))}
        </Section>
      )}
    </>
  );
}


const WEEK_MS = 7*24*60*60*1000;
const daysUntil = ts => Math.max(1, Math.ceil((WEEK_MS - (Date.now() - ts))/86400000));
const freeToChange = ts => !ts || (Date.now() - ts) >= WEEK_MS;

async function changeUsername(newName, user, oldName){
  const clean = newName.trim();
  const batch = db().batch();
  batch.set(db().collection('usernames').doc(unameKey(clean)), {uid:user.id, username:clean});
  if(oldName && unameKey(oldName) !== unameKey(clean)){
    batch.delete(db().collection('usernames').doc(unameKey(oldName)));
  }
  batch.set(db().collection('users').doc(user.id), {username:clean, usernameChangedAt:Date.now()}, {merge:true});
  await withTimeout(batch.commit(), 10000);
}

function Settings({sub, user, onSignOut, settings, setSettings, toast, onLinksChange, sync, onSyncNow, streakInfo, canRestore, onUseFreeze, energyBase, applyBase}){
  const auth = initFirebase();
  const [profile, setProfile] = useState(null);
  const [err, setErr] = useState('');
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const [legal, setLegal] = useState(null);

  // The baseline is edited as a draft. Nothing is saved until the student says
  // which days the new number applies to, because changing it everywhere
  // quietly rewrites how every past day was judged.
  const effBase = energyBase || settings.energyBase || DEFAULT_BASE;
  const [baseDraft, setBaseDraft] = useState(effBase);
  useEffect(() => { setBaseDraft(effBase); }, [effBase]);

  useEffect(() => { (async () => {
    try{
      const snap = await withTimeout(db().collection('users').doc(user.id).get());
      setProfile(snap.exists ? snap.data() : {});
    }catch(e){ setProfile({}); setErr("Couldn't load your account details."); }
  })(); }, [user.id]);

  useEffect(() => { setErr(''); setNote(''); }, [sub]);

  /* ---------- my account ---------- */
  const [form, setForm] = useState(null);
  useEffect(() => {
    if(profile && !form) setForm({
      name: profile.name || user.name || '', dob: profile.dob || user.dob || '',
      grade: profile.grade || user.grade || '', stage: profile.stage || user.stage || 'hs',
      gender: profile.gender || '', school: profile.school || ''
    });
  }, [profile, form]);

  const saveAccount = async () => {
    setBusy(true); setErr(''); setNote('');
    try{
      await saveProfile(user.id, {
        name:form.name.trim(), dob:form.dob, grade:form.grade, stage:form.stage,
        gender:form.gender, school:form.school.trim(), email:user.email
      });
      setNote('Saved.');
    }catch(e){ setErr('Could not save. Check your connection and try again.'); }
    setBusy(false);
  };

  /* ---------- username ---------- */
  const [newName, setNewName] = useState('');
  const [avail, setAvail] = useState(null);
  useEffect(() => {
    const n = newName.trim();
    if(!n){ setAvail(null); return; }
    if(!validUsername(n)){ setAvail('invalid'); return; }
    if(unameKey(n) === unameKey(user.username || '')){ setAvail('same'); return; }
    setAvail('checking');
    let alive = true;
    const t = setTimeout(async () => {
      try{ const taken = await usernameTaken(n); if(alive) setAvail(taken ? 'taken' : 'free'); }
      catch(e){ if(alive) setAvail('offline'); }
    }, 450);
    return () => { alive = false; clearTimeout(t); };
  }, [newName, user.username]);

  const submitUsername = async () => {
    const n = newName.trim();
    if(!validUsername(n)) return setErr('Usernames are 3–20 characters: letters, numbers, underscores, and periods.');
    if(!freeToChange(profile && profile.usernameChangedAt))
      return setErr(`You can change your username again in ${daysUntil(profile.usernameChangedAt)} days.`);
    setBusy(true); setErr(''); setNote('');
    try{
      await changeUsername(n, user, user.username);
      if(auth.currentUser) await auth.currentUser.updateProfile({displayName:n});
      toast('Username updated');
      window.location.reload();
    }catch(e){ setErr(usernameWriteError(e)); setBusy(false); }
  };

  /* ---------- password ---------- */
  const [curPw, setCurPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [newPw2, setNewPw2] = useState('');

  const submitPassword = async () => {
    if(newPw.length < 8) return setErr('New passwords need at least 8 characters.');
    if(newPw !== newPw2) return setErr("The two new passwords don't match.");
    if(!freeToChange(profile && profile.passwordChangedAt))
      return setErr(`You can change your password again in ${daysUntil(profile.passwordChangedAt)} days.`);
    setBusy(true); setErr(''); setNote('');
    try{
      const cred = firebase.auth.EmailAuthProvider.credential(user.email, curPw);
      await auth.currentUser.reauthenticateWithCredential(cred);
      await auth.currentUser.updatePassword(newPw);
      await saveProfile(user.id, {passwordChangedAt:Date.now()});
      setProfile(p => ({...p, passwordChangedAt:Date.now()}));
      setCurPw(''); setNewPw(''); setNewPw2('');
      setNote('Password changed.');
    }catch(e){ setErr(fbErr(e)); }
    setBusy(false);
  };

  /* ---------- notifications ---------- */
  const askNotify = async on => {
    if(!on){ setSettings({...settings, notify:{...settings.notify, on:false}}); return; }
    const perm = await askNotifyPermission();
    if(perm === 'unsupported') return setErr('This browser cannot show notifications.');
    if(perm !== 'granted') return setErr(isNativeApp()
      ? 'Notifications are off for PlanIt. Turn them on in Settings → Notifications → PlanIt, then try again.'
      : 'Your browser blocked notifications. Allow them in the address bar, then try again.');
    setSettings({...settings, notify:{...settings.notify, on:true}});
    fireNotification('PlanIt', "Reminders are on. You'll get a nudge before scheduled blocks.", 'planit-welcome');
  };

  const Err = () => err ? <div className="formerr" role="alert">{err}</div> : null;
  const Note = () => note ? <div className="formnote">{note}</div> : null;

  return (
    <div style={{maxWidth:660}}>
      {sub === 'account' && (
        <>
          <Section title="Signed in as">
            <div className="card row" style={{gap:12}}>
              <Initial name={user.username || user.email} size={44} />
              <div style={{flex:1, minWidth:0}}>
                <b>{user.username}</b>
                <div style={{fontSize:12.5, color:'var(--ink35)'}}>
                  {user.email} · {user.provider === 'google' ? 'Google account' : 'Email account'}
                </div>
              </div>
              <button className="btn" onClick={onSignOut}>Log out</button>
            </div>
          </Section>

          <Section title="About you" hint="Only you can see this. Leave anything blank you'd rather not fill in.">
            {!form ? <div className="card" style={{color:'var(--ink35)'}}>Loading…</div> : (
              <div className="card">
                <Field label="Name"><input value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Enter your name here" /></Field>
                <div className="grid2">
                  <Field label={ageFrom(form.dob) !== null ? `Date of birth, age ${ageFrom(form.dob)}` : 'Date of birth'}>
                    <input type="date" value={form.dob} max={iso(new Date())}
                      onChange={e => setForm({...form, dob:e.target.value})} />
                  </Field>
                  <Field label="Grade">
                    <select value={form.grade} onChange={e => setForm({...form, grade:e.target.value})}>
                      <option value="">Prefer not to say</option>
                      {['6','7','8','9','10','11','12','College','Other'].map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Where are you studying?">
                  <select value={form.stage || 'hs'} onChange={e => setForm({...form, stage:e.target.value})}>
                    {STAGES.map(([k,l]) => <option key={k} value={k}>{l}</option>)}
                  </select>
                </Field>
                <div className="grid2">
                  <Field label="Gender">
                    <select value={form.gender} onChange={e => setForm({...form, gender:e.target.value})}>
                      <option value="">Prefer not to say</option>
                      <option>Female</option><option>Male</option><option>Non-binary</option><option>Other</option>
                    </select>
                  </Field>
                  <Field label="School"><input value={form.school} onChange={e => setForm({...form, school:e.target.value})} placeholder="Enter your school here" /></Field>
                </div>
                <Note />
                <Err />
                <button className="btn primary" disabled={busy} onClick={saveAccount}>{busy ? 'Saving…' : 'Save details'}</button>
              </div>
            )}
          </Section>
        </>
      )}

      {sub === 'account' && (
        <Section title="Streak" hint="Days in a row you've opened PlanIt.">
          <div className="card">
            <div className="row" style={{gap:16}}>
              <div className="streakbig"><FireIcon level={3} /></div>
              <div style={{flex:1, minWidth:0}}>
                <b className="mono" style={{fontSize:26}}>{streakInfo.streak}</b>
                <div style={{fontSize:12.5, color:'var(--ink35)'}}>
                  current streak{streakInfo.best ? ` · best ${streakInfo.best}` : ''}
                </div>
              </div>
              <div className="freezes" title="Streak freezes banked">
                {streakInfo.freezes > 0
                  ? Array.from({length:streakInfo.freezes}).map((_, i) => <FreezeIcon key={i} />)
                  : <span style={{color:'var(--ink35)'}}>none</span>}
                <small>{streakInfo.freezes} {streakInfo.freezes === 1 ? 'freeze' : 'freezes'}</small>
              </div>
            </div>
            <div className="spread" style={{marginTop:14, paddingTop:12, borderTop:'1px solid var(--line)'}}>
              <span style={{fontSize:13, color:'var(--ink60)'}}>Need more?</span>
              {CONFIG.FREEZE_CHECKOUT_URL
                ? <a className="btn sm" href={CONFIG.FREEZE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                    Buy 5 freezes
                  </a>
                : <button className="btn sm" disabled title="Payments aren't switched on yet">Buy freezes, soon</button>}
            </div>
            {canRestore ? (
              <div className="formnote" style={{marginTop:14, marginBottom:0}}>
                Your {streakInfo.prev}-day streak ended. Use a freeze to keep it going?
                <button className="btn sm primary" style={{marginLeft:10}} onClick={onUseFreeze}>Use a freeze</button>
              </div>
            ) : (
              <div style={{fontSize:12, color:'var(--ink35)', marginTop:12, lineHeight:1.5}}>
                You start with five and earn one every 7 days in a row, up to ten. If you miss a day, come back
                that day and one freeze restores the streak.
              </div>
            )}
          </div>
        </Section>
      )}

      {sub === 'account' && (
        <Section title="Energy" hint="How much you reckon you have in a normal day.">
          <div className="card">
            <div className="spread" style={{marginBottom:12}}>
              <span style={{fontSize:13.5}}>Your daily baseline</span>
              <b className="mono" style={{fontSize:20}}>{effBase}</b>
            </div>
            {user.role === 'parent'
              ? <div className="mono" style={{fontSize:22, fontWeight:600}}>{effBase}</div>
              : <EnergyStepper value={baseDraft} onChange={setBaseDraft} />}

            {user.role !== 'parent' && baseDraft !== effBase && (
              <div className="basescope">
                <div className="eyebrow" style={{marginBottom:9}}>
                  Change {effBase} to {baseDraft} for
                </div>
                <button className="rolecard" onClick={() => {
                  if(applyBase) applyBase(baseDraft, 'future');
                  else setSettings({...settings, energyBase:baseDraft});
                  toast('Baseline is ' + baseDraft + ' from today on');
                }}>
                  <span><b>Today and future days</b>
                    <small>Days before today keep the number they were judged against.</small></span>
                </button>
                <button className="rolecard" onClick={() => {
                  if(applyBase) applyBase(baseDraft, 'all');
                  else setSettings({...settings, energyBase:baseDraft});
                  toast('Baseline is ' + baseDraft + ' on every day');
                }}>
                  <span><b>Every day, past included</b>
                    <small>Rewrites the baseline everywhere and clears earlier changes.</small></span>
                </button>
                <button className="btn sm ghost" style={{marginTop:2}}
                  onClick={() => setBaseDraft(effBase)}>Leave it at {effBase}</button>
              </div>
            )}

            <div style={{fontSize:12.5, color:'var(--ink35)', marginTop:10, lineHeight:1.55}}>
              Tasks cost between −1 and 3. Your day turns orange within 5 of this number and red past that,
              which is the signal you've planned more than you can carry.
            </div>
          </div>
        </Section>
      )}

      {sub === 'account' && <SignupSources user={user} />}
      {sub === 'account' && user.role !== 'parent' && <Referrals user={user} toast={toast} />}

      {sub === 'account' && user.role !== 'parent' && (
        <Section title="Sync" hint="Your planner uploads so a connected parent can see it.">
          <div className="card">
            <div className="spread">
              <div style={{fontSize:13.5}}>
                {sync.state === 'ok' ? <><b style={{color:'var(--list)'}}>Synced automatically</b>
                    <div style={{color:'var(--ink35)',fontSize:12}}>
                      {new Date(sync.at).toLocaleTimeString()}</div></>
                 : sync.state === 'saving' ? 'Uploading…'
                 : sync.state === 'err' ? <span style={{color:'var(--rule)'}}>{sync.msg}</span>
                 : 'Syncs on its own a moment after any change.'}
              </div>
              <button className="btn sm" onClick={onSyncNow}>Sync now</button>
            </div>
          </div>
        </Section>
      )}

      {sub === 'account' && user.role !== 'parent' && <ParentAccess user={user} toast={toast} onChange={onLinksChange} />}
      {sub === 'account' && user.role === 'parent' && (
        <Section title="Your children" hint="Add another child from the View It tab.">
          <div className="card soft" style={{fontSize:13.5, color:'var(--ink60)'}}>
            Connections live in <b style={{color:'var(--ink)'}}>View It</b>, where you can send a new request
            or remove one.
          </div>
        </Section>
      )}

      {sub === 'appearance' && (() => {
        const pid = paletteOf(settings), mode = modeOf(settings);
        const dark = isDarkMode(mode);
        const live = palette(pid)[dark ? 'dark' : 'light'];
        const sec = k => sectionHex(settings, k);
        const custom = !!(settings.accents || settings.bg || settings.blockColors || settings.eventColors);
        return (
          <>
            <Section title="Colour theme"
              hint="Each one is a full palette. Light and dark are set separately below.">
              <div className="themelist" role="radiogroup" aria-label="Colour theme">
                {PALETTES.map(p => {
                  const t = p[dark ? 'dark' : 'light'];
                  const on = pid === p.id;
                  return (
                    <button key={p.id} role="radio" aria-checked={on}
                      className={'themerow' + (on ? ' on' : '')}
                      onClick={() => setSettings({...settings, palette:p.id})}>
                      <span className="themeswatch" aria-hidden="true">
                        <i style={{background:t.paper}} />
                        <i style={{background:t.surface}} />
                        <i style={{background:t.accent}} />
                        <i style={{background:t.sections.list}} />
                        <i style={{background:t.ink}} />
                      </span>
                      <span className="themename">
                        <b>{p.label}</b><small>{p.note}</small>
                      </span>
                      <span className="thememark" aria-hidden="true">{on ? <IconCheck /> : null}</span>
                    </button>
                  );
                })}
              </div>
            </Section>

            <Section title="Light or dark" hint="Your theme stays the same either way.">
              <div className="row" style={{gap:8, flexWrap:'wrap'}}>
                {MODES.map(([k,l]) => (
                  <button key={k} className={'chip' + (mode === k ? ' on' : '')}
                    aria-pressed={mode === k}
                    onClick={() => setSettings({...settings, mode:k, theme:k})}>{l}</button>
                ))}
              </div>
              {mode === 'system' && (
                <p style={{fontSize:12.5, color:'var(--ink35)', margin:'10px 0 0', lineHeight:1.5}}>
                  Following your device, which is {dark ? 'dark' : 'light'} right now.
                </p>
              )}
            </Section>

            <Section title="Change individual colours"
              hint="Optional. Anything you set here overrides the theme until you clear it.">
              <div className="card">
                {SECTION_KEYS.map(([k,label]) => (
                  <label key={k} className="colorrow">
                    <span>{label}</span>
                    <input type="color" value={sec(k)} aria-label={label + ' colour'}
                      onChange={e => setSettings({...settings,
                        accents:{...(settings.accents || {}), [k]:e.target.value}})} />
                  </label>
                ))}
                <label className="colorrow">
                  <span>Page background</span>
                  <input type="color" value={settings.bg || live.paper} aria-label="Page background"
                    onChange={e => setSettings({...settings, bg:e.target.value})} />
                </label>
              </div>
            </Section>

            <Section title="Monthly calendar" hint="The dot colour for each kind of date.">
              <div className="card">
                {EVENT_KEYS.map(([k,label]) => {
                  const fallback = {test:'lock', deadline:'brag', birthday:'list',
                    meeting:'organize', other:'settings'}[k];
                  return (
                    <label key={k} className="colorrow">
                      <span>{label}</span>
                      <input type="color" aria-label={label + ' colour'}
                        value={(settings.eventColors && settings.eventColors[k]) || live.sections[fallback]}
                        onChange={e => setSettings({...settings,
                          eventColors:{...(settings.eventColors || {}), [k]:e.target.value}})} />
                    </label>
                  );
                })}
              </div>
            </Section>

            {custom && (
              <Section title="Back to the theme">
                <p style={{fontSize:13, color:'var(--ink60)', margin:'0 0 10px', lineHeight:1.5}}>
                  You have colours set by hand. Clearing them hands every colour back to
                  {' '}<b style={{color:'var(--ink)'}}>{palette(pid).label}</b>.
                </p>
                <button className="btn" onClick={() => setSettings({...settings,
                  accents:null, bg:null, blockColors:null, eventColors:null})}>
                  Clear my colour changes
                </button>
              </Section>
            )}
          </>
        );
      })()}

      {sub === 'apps' && <BlockedApps settings={settings} setSettings={setSettings} toast={toast} />}

      {sub === 'security' && (
        <>
          <Section title="Username" hint="You can change this once a week.">
            <div className="card">
              <div className="row" style={{marginBottom:12, fontSize:13.5, color:'var(--ink60)'}}>
                Currently <b style={{color:'var(--ink)', marginLeft:5}}>{user.username}</b>
              </div>
              {profile && !freeToChange(profile.usernameChangedAt)
                ? <div className="lockednote">Changed recently. You can change it again in {daysUntil(profile.usernameChangedAt)} days.</div>
                : <>
                    <Field label="New username">
                      <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="Enter your username here" />
                    </Field>
                    {avail === 'taken'   && <div className="avail bad">Taken. Try another</div>}
                    {avail === 'invalid' && <div className="avail bad">3–20 characters: letters, numbers, _ and .</div>}
                    {avail === 'same'    && <div className="avail hint">That's already your username</div>}
                    {avail === 'free'    && <div className="avail good"><IconCheck /> Available</div>}
                    <Err />
                    <button className="btn primary" disabled={busy || avail !== 'free'} onClick={submitUsername}>
                      {busy ? 'Saving…' : 'Change username'}
                    </button>
                  </>}
            </div>
          </Section>

          <Section title="Password" hint="You can change this once a week.">
            <div className="card">
              {user.provider === 'google'
                ? <div className="lockednote">You sign in with Google, so there's no PlanIt password to change. Manage it in your Google account.</div>
                : profile && !freeToChange(profile.passwordChangedAt)
                ? <div className="lockednote">Changed recently. You can change it again in {daysUntil(profile.passwordChangedAt)} days.</div>
                : <>
                    <Field label="Current password"><input type="password" value={curPw} onChange={e => setCurPw(e.target.value)} autoComplete="current-password" /></Field>
                    <Field label="New password"><input type="password" value={newPw} onChange={e => setNewPw(e.target.value)} placeholder="At least 8 characters" autoComplete="new-password" /></Field>
                    <Field label="New password again"><input type="password" value={newPw2} onChange={e => setNewPw2(e.target.value)} autoComplete="new-password" /></Field>
                    <Note />
                    <Err />
                    <button className="btn primary" disabled={busy} onClick={submitPassword}>{busy ? 'Changing…' : 'Change password'}</button>
                  </>}
            </div>
          </Section>

          <Section title="Session">
            <button className="btn" onClick={onSignOut}>Log out of PlanIt</button>
          </Section>
        </>
      )}

      {sub === 'notifications' && (
        <>
          <Section title="Reminders" hint="A nudge before a scheduled block starts.">
            <div className="card">
              <label className="switchrow">
                <span>
                  <b>Reminders</b>
                  <small>Notify me before something on the daily schedule begins</small>
                </span>
                <input type="checkbox" checked={!!settings.notify.on} onChange={e => askNotify(e.target.checked)} />
              </label>
              {settings.notify.on && (
                <div style={{marginTop:14}}>
                  <div className="eyebrow" style={{marginBottom:8}}>How early</div>
                  <div className="row" style={{gap:8, flexWrap:'wrap'}}>
                    {[5,10,15,30].map(m => (
                      <button key={m} className={'chip' + (settings.notify.before === m ? ' on' : '')}
                        onClick={() => setSettings({...settings, notify:{...settings.notify, before:m}})}>{m} min</button>
                    ))}
                  </div>
                </div>
              )}
              <Err />
            </div>
          </Section>
          <Section title="Worth knowing">
            
          </Section>
        </>
      )}

      {sub === 'pro' && (() => {
        const links = {
          month: CONFIG.PRO_CHECKOUT_URL, year: CONFIG.PRO_YEAR_CHECKOUT_URL, gift: CONFIG.GIFT_CHECKOUT_URL,
        };
        const Buy = ({which, label}) => links[which]
          ? <a className="btn primary wide" href={links[which]} target="_blank" rel="noopener noreferrer">{label}</a>
          : <button className="btn primary wide" disabled title="Payments aren't switched on yet">Coming soon</button>;
        return (
          <>
            <Section title="Choose a plan">
              <div className="plans">
                <div className="plan">
                  <div className="planname">Free</div>
                  <div className="planprice">$0</div>
                  <ul>
                    <li>Every planner feature</li>
                    <li>Study rooms up to nine people</li>
                    <li>Brag It and résumé export</li>
                  </ul>
                  <button className="btn wide" disabled>Your plan</button>
                </div>

                <div className="plan best">
                  <div className="planflag">Most popular</div>
                  <div className="planname">Pro</div>
                  <div className="planprice">$6<small>/month</small></div>
                  <ul>
                    <li>Everything in Free</li>
                    <li>More to be announced</li>
                  </ul>
                  <Buy which="month" label="Get Pro monthly" />
                  <div className="planalt">
                    or <b>$55 a year</b>, two months free
                    <div style={{marginTop:8}}><Buy which="year" label="Get Pro yearly" /></div>
                  </div>
                </div>

                <div className="plan">
                  <div className="planname">Gift</div>
                  <div className="planprice">$55<small>/year</small></div>
                  <ul>
                    <li>A year of Pro for someone else</li>
                    <li>They get a code by email</li>
                  </ul>
                  <Buy which="gift" label="Gift a year" />
                </div>
              </div>
            </Section>

            <Section title="How paying works">
              <div className="card soft" style={{fontSize:13, color:'var(--ink60)', lineHeight:1.65}}>
                Card details are entered on Stripe's own checkout page, never on PlanIt. That keeps card
                numbers off this site entirely, which is both safer for you and required by card industry rules.
              </div>
            </Section>
          </>
        );
      })()}

      {sub === 'feedback' && <BugReport user={user} toast={toast} />}

      {sub === 'legal' && (
        <>
          <Section title="Policies">
            <div className="card">
              <div className="legalrow">
                <div><b>Privacy policy</b><small>What PlanIt stores and where it lives</small></div>
                <button className="btn sm" onClick={() => setLegal('privacy')}>View</button>
              </div>
              <div className="legalrow">
                <div><b>Terms and conditions</b><small>The rules for using PlanIt</small></div>
                <button className="btn sm" onClick={() => setLegal('terms')}>View</button>
              </div>
            </div>
          </Section>
          <Section title="Your data">
            <div className="card" style={{color:'var(--ink60)', fontSize:13.5, lineHeight:1.6}}>
              Your account and username live in Firebase. Your tasks, calendar entries, and activities are
              stored in this browser. Logging out doesn't erase them. Use "Clear all planner data" in the
              sidebar for that.
            </div>
          </Section>
        </>
      )}

      {legal && <LegalModal kind={legal} onClose={() => setLegal(null)} />}
    </div>
  );
}

function LegalModal({kind, onClose}){
  const privacy = kind === 'privacy';
  return (
    <Modal title={privacy ? 'Privacy policy' : 'Terms and conditions'} onClose={onClose}
      footer={<button className="btn primary" onClick={onClose}>Close</button>}>
      {!privacy && (
        <div className="demo" style={{textAlign:'left', marginBottom:16}}>
          <b>Template. Read before you publish</b>
          This is a starting point written to match how PlanIt actually works, not legal advice.
          Check it against your situation, and get an adult or a lawyer to look it over if real users sign up.
        </div>
      )}
      <div className="legaldoc">
        {privacy ? (
          <>
            <p className="legaldate">Effective Date: 08/01/2026</p>

            <h4>1. Introduction</h4>
            <p>Welcome to PlanIt (“we,” “our,” or “us”). We are committed to protecting the
            privacy and safety of our users, especially children and students who use our platform.
            This Privacy Policy explains how we collect, use, disclose, and protect information
            obtained through our website and services. By using our website, users and their parents
            or legal guardians agree to the practices described in this Privacy Policy.</p>

            <h4>2. Information We Collect</h4>
            <p>We may collect the following information during registration and use of our services:</p>
            <ul>
              <li>Student’s full name</li>
              <li>Student’s age</li>
              <li>Student’s date of birth</li>
              <li>Parent or guardian name</li>
              <li>Parent or guardian contact information</li>
              <li>Account login information</li>
              <li>Information voluntarily submitted through the platform</li>
              <li>Technical information such as IP address, browser type, and device information</li>
            </ul>
            <p>We collect only the information reasonably necessary to provide our services.</p>

            <h4>3. Parental Consent</h4>
            <p>Our services are intended for minors. Before a student account can be created, a parent
            or legal guardian must provide consent by completing and signing our parental consent form.
            Without parental consent, a student account cannot be activated.</p>

            <h4>4. Parent Rights and Access</h4>
            <p>Parents or legal guardians may:</p>
            <ul>
              <li>Review information associated with their child’s account</li>
              <li>Monitor their child’s use of the platform</li>
              <li>Request corrections to information</li>
              <li>Request deletion of their child’s account and personal information, subject to
              legal or operational requirements</li>
            </ul>
            <p>To exercise these rights, contact us at:<br />
            Email: {CONFIG.CONTACT_EMAIL}</p>

            <h4>5. How We Use Information</h4>
            <p>We use collected information to:</p>
            <ul>
              <li>Create and manage student accounts</li>
              <li>Verify parental consent</li>
              <li>Provide educational services and platform functionality</li>
              <li>Communicate with students and parents</li>
              <li>Improve website performance and user experience</li>
              <li>Maintain platform security</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h4>6. Sharing of Information</h4>
            <p>We do not sell, rent, trade, or otherwise monetize student personal information.
            We may share information only:</p>
            <ul>
              <li>With parents or legal guardians of the student</li>
              <li>With service providers who assist us in operating our platform</li>
              <li>When required by law, court order, or legal process</li>
              <li>To protect the rights, safety, or security of our users or organization</li>
            </ul>
            <p>Any third-party service providers are required to maintain appropriate confidentiality
            and security protections.</p>

            <h4>7. Data Security</h4>
            <p>We implement reasonable administrative, technical, and physical safeguards designed to
            protect personal information from unauthorized access, disclosure, alteration, or
            destruction. However, no method of transmission or storage can be guaranteed to be
            completely secure.</p>

            <h4>8. Data Retention</h4>
            <p>We retain personal information only as long as necessary to:</p>
            <ul>
              <li>Provide our services</li>
              <li>Maintain records required by law</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
            <p>When information is no longer required, it will be securely deleted or anonymized.</p>

            <h4>9. Children’s Privacy</h4>
            <p>Protecting children’s information is especially important to us. We collect
            information from minors only with verified parental or guardian consent and only for
            purposes related to providing our services. Parents may contact us at any time to review,
            modify, or request deletion of their child’s information.</p>

            <h4>10. Cookies and Similar Technologies</h4>
            <p>Our website may use cookies and similar technologies to:</p>
            <ul>
              <li>Maintain user sessions</li>
              <li>Improve website functionality</li>
              <li>Analyze website performance</li>
              <li>Enhance user experience</li>
            </ul>
            <p>Users may adjust browser settings to manage cookie preferences.</p>

            <h4>11. Third-Party Services</h4>
            <p>Our website may use third-party providers for hosting, analytics, email delivery, or
            other operational functions. These providers may process information on our behalf solely
            to provide services to our organization.</p>

            <h4>12. Changes to This Privacy Policy</h4>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with an updated effective date. Continued use of the website after changes become
            effective constitutes acceptance of the revised Privacy Policy.</p>
          </>
        ) : (
          <>
            <p><em>Last updated: {MON[new Date().getMonth()]} {new Date().getFullYear()}</em></p>
            <h4>Using PlanIt</h4>
            <p>PlanIt is a free planner for students. You need an account to use it, and you agree to give accurate
            information when you sign up.</p>
            <h4>Your account</h4>
            <p>Keep your password to yourself. You are responsible for what happens under your account. Usernames
            can be changed once a week; pick something that is not offensive or impersonating someone else.</p>
            <h4>Your content</h4>
            <p>Anything you write in PlanIt stays yours. We claim no ownership of your tasks, notes, or activity
            entries.</p>
            <h4>Study rooms</h4>
            <p>Room codes are shared by you. Do not use rooms to harass anyone. We may remove access for behaviour
            that harms other people.</p>
            <h4>No guarantees</h4>
            <p>PlanIt is provided as is. It may go down, lose data, or change without notice. Keep your own copy of
            anything you cannot afford to lose. We are not liable for missed deadlines, lost work, or any damages
            arising from using it.</p>
            <h4>Ending things</h4>
            <p>You can stop using PlanIt whenever you like. We can suspend accounts that break these terms.</p>
            <h4>Changes</h4>
            <p>These terms may be updated. Continuing to use PlanIt after a change means you accept the new version.</p>
            <h4>Contact</h4>
            <p>{CONFIG.CONTACT_EMAIL || 'To be announced.'}</p>
          </>
        )}
      </div>
    </Modal>
  );
}

/* ============ STUDY REPORT ============ */
function buildReport(lock, range = 'week'){
  const lk = lock || {};
  const byDate = {};
  (lk.history || []).forEach(h => { byDate[h.date] = h; });
  if(lk.day) byDate[lk.day] = {date:lk.day, minutes:lk.minutes || 0, sessions:lk.sessions || 0};
  const get = k => byDate[k] || {date:k, minutes:0, sessions:0};
  const today = iso(new Date());

  let bars = [], partners;
  if(range === 'month'){
    // every day of the current month, so quiet days keep their place
    const first = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const days = new Date(first.getFullYear(), first.getMonth()+1, 0).getDate();
    bars = Array.from({length:days}, (_,i) => {
      const k = iso(addDays(first, i));
      const d = get(k);
      return {key:k, label:String(i+1), minutes:d.minutes, sessions:d.sessions, now:k === today};
    });
    partners = lk.partnersMonth || {};
  } else if(range === 'all'){
    // Every week from the first one with data to this one, including the
    // weeks nothing happened, so gaps show up as gaps.
    const dates = Object.keys(byDate).sort();
    const first = startOfWeek(dates.length ? parseISO(dates[0]) : new Date());
    const thisWeek = startOfWeek(new Date());
    const weeks = [];
    for(let w = new Date(first); w <= thisWeek; w = addDays(w, 7)) weeks.push(new Date(w));
    const shown = weeks.slice(-52);
    let prevMonth = null;
    bars = shown.map(w => {
      let m = 0, ss = 0;
      for(let d = 0; d < 7; d++){
        const k = iso(addDays(w, d));
        if(byDate[k]){ m += byDate[k].minutes || 0; ss += byDate[k].sessions || 0; }
      }
      const mo = w.getMonth();
      const label = mo !== prevMonth ? MON[mo].slice(0,3) : '';
      prevMonth = mo;
      return {key:iso(w), label, minutes:m, sessions:ss, now:iso(w) === iso(thisWeek),
              title:`Week of ${fmtDay(w)}`};
    });
    partners = lk.partnersAll || {};
  } else {
    const start = startOfWeek(new Date());
    bars = Array.from({length:7}, (_,i) => {
      const k = iso(addDays(start, i));
      const d = get(k);
      return {key:k, label:DOW[parseISO(k).getDay()].slice(0,1),
              minutes:d.minutes, sessions:d.sessions, now:k === today};
    });
    partners = lk.partners || {};
  }

  const minutes = bars.reduce((a2,d) => a2 + d.minutes, 0);
  const sessions = bars.reduce((a2,d) => a2 + d.sessions, 0);
  const best = bars.reduce((a2,d) => d.minutes > a2.minutes ? d : a2, bars[0] || {minutes:0});
  return {bars, days:bars, minutes, sessions, best,
          partners: Object.values(partners).sort((x,y) => y.mins - x.mins),
          today: lk.minutes || 0, todaySessions: lk.sessions || 0};
}

const RANGES = [['week','This week'],['month','This month'],['all','All time']];

function Reports({lock}){
  const [range, setRange] = useState('week');
  const r = buildReport(lock, range);
  const peak = Math.max(10, ...r.bars.map(d => d.minutes));
  const hrs = Math.floor(r.minutes/60), mins = r.minutes % 60;
  const heading = range === 'week' ? `This week · ${fmtWeek(new Date())}`
    : range === 'month' ? `This month · ${fmtMonth(new Date())}` : 'All time';

  return (
    <div>
      <div className="modeswitch" style={{marginBottom:18}}>
        {RANGES.map(([k,l]) => (
          <button key={k} className={range === k ? 'on' : ''} onClick={() => setRange(k)}>{l}</button>
        ))}
      </div>

      <div className="reportgrid">
        <div>
          <Section title={heading}
            hint={range === 'week' ? 'Resets on Sunday.'
              : range === 'month' ? 'Resets on the 1st.' : 'One bar per week since you started, quiet weeks included.'}>
            <div className="row" style={{gap:12, flexWrap:'wrap', marginBottom:16}}>
              <div className="card" style={{flex:1, minWidth:140}}>
                <div className="eyebrow">Time focused</div>
                <div className="mono" style={{fontSize:26, fontWeight:500}}>
                  {hrs ? `${hrs}h ${mins}m` : `${mins}m`}
                </div>
              </div>
              <div className="card" style={{flex:1, minWidth:140}}>
                <div className="eyebrow">Sessions</div>
                <div className="mono" style={{fontSize:26, fontWeight:500}}>{r.sessions}</div>
              </div>
              <div className="card" style={{flex:1, minWidth:140}}>
                <div className="eyebrow">Best {range === 'all' ? 'week' : 'day'}</div>
                <div className="mono" style={{fontSize:26, fontWeight:500}}>{r.best.minutes || 0}m</div>
              </div>
            </div>

            <div className="card">
              <div className={'chartrow' + (r.bars.length > 12 ? ' dense' : '')}>
                {r.bars.map(d => (
                  <div key={d.key} className={'chartbar' + (d.now ? ' today' : '')}
                    title={`${d.title ? d.title + ', ' : ''}${d.minutes} min`}>
                    <b className="mono">{r.bars.length > 12 ? '' : (d.minutes || '')}</b>
                    <i style={{height:Math.round(d.minutes/peak*86) + 3 + 'px'}} />
                    <span className="mono">{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {range !== 'all' && (() => {
            const past = range === 'week' ? (lock.weeks || []) : (lock.months || []);
            if(past.length === 0) return null;
            return (
              <Section title={range === 'week' ? 'Past weeks' : 'Past months'}
                hint="Kept as you go, so nothing is lost when a period resets.">
                {past.slice().reverse().slice(0,12).map(p => (
                  <div key={p.weekOf || p.monthOf} className="todo" style={{alignItems:'center'}}>
                    <div className="txt">
                      <b>{p.weekOf ? fmtWeek(parseISO(p.weekOf))
                        : `${MON[+p.monthOf.slice(5,7)-1]} ${p.monthOf.slice(0,4)}`}</b>
                      <div className="meta">
                        {p.sessions} {p.sessions === 1 ? 'session' : 'sessions'}
                        {p.top ? ` · most with ${p.top}` : ''}
                      </div>
                    </div>
                    <div className="todo-actions">
                      <span className="mono" style={{fontSize:13,color:'var(--ink60)'}}>{p.minutes}m</span>
                    </div>
                  </div>
                ))}
              </Section>
            );
          })()}

          {range === 'week' && lock && lock.lastWeek && lock.lastWeek.minutes > 0 && (
            <Section title="Last week">
              <div className="card soft" style={{fontSize:13.5, color:'var(--ink60)', lineHeight:1.6}}>
                {fmtWeek(parseISO(lock.lastWeek.weekOf))}: <b style={{color:'var(--ink)'}}>{lock.lastWeek.minutes} minutes</b>
                {' '}across {lock.lastWeek.sessions} {lock.lastWeek.sessions === 1 ? 'session' : 'sessions'}
                {lock.lastWeek.top ? <>, most of it with <b style={{color:'var(--ink)'}}>{lock.lastWeek.top}</b>.</> : '.'}
              </div>
            </Section>
          )}
        </div>

        <div>
          <Section title="Who you studied with"
            hint={range === 'week' ? 'Minutes in a room together this week.'
              : range === 'month' ? 'Minutes together this month.' : 'Minutes together since you started.'}>
            {r.partners.length === 0
              ? <Empty title="No study partners yet" hint="Join a room and start a session with someone." />
              : r.partners.slice(0,10).map((p,i) => (
                <div key={p.name + i} className="todo" style={{alignItems:'center'}}>
                  <Initial name={p.name} size={30} />
                  <div className="txt">
                    <b>{p.name}</b>
                    <div className="meta">{p.mins} min together</div>
                  </div>
                  {i === 0 && <div className="todo-actions"><span className="status focusing">Most</span></div>}
                </div>
              ))}
          </Section>

          <Section title="Today">
            <div className="card soft" style={{fontSize:13.5, color:'var(--ink60)', lineHeight:1.6}}>
              {r.today === 0
                ? "Nothing logged yet today. Minutes count from the moment a session starts, even if you stop early."
                : <>You've focused <b style={{color:'var(--ink)'}}>{r.today} minutes</b> today
                   across {r.todaySessions} finished {r.todaySessions === 1 ? 'session' : 'sessions'}.</>}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

/* ============ NOTIFICATIONS ============ */
// Everything here is flagged as planned rather than live. A promo that reads
// as active but can't be claimed is worse than one that says "coming".
const NEWS = [
  {id:'founding100', tag:'Planned', title:'Founding 100: PlanIt Pro free',
   body:"The first 100 people to make a PlanIt account get Pro free for a full year. Early members after that get shorter free periods. We'll let you know when Pro arrives."},
  {id:'survey', tag:'Coming soon', title:'Tell us what to build next',
   body:"A short survey is going here. What you'd add, what gets in your way, what you'd actually pay for."},
];

function NewsPanel({onClose, readIds, markRead, requests = [], onDecide, report, reportDue, onOpenReports, referralReady, refCount, onOpenReferral, isAdmin}){
  const [bugs, setBugs] = useState(null);
  useEffect(() => {
    if(!isAdmin) return;
    db().collection('bugs').orderBy('at','desc').limit(40).get()
      .then(sn => setBugs(sn.docs.map(d => ({id:d.id, ...d.data()}))))
      .catch(() => setBugs([]));
  }, [isAdmin]);
  // News gets marked read on open; requests don't, they stay until answered.
  useEffect(() => { markRead(NEWS.map(n => n.id)); }, [markRead]);
  return (
    <Modal title="Notifications" onClose={onClose}
      footer={<button className="btn primary" onClick={onClose}>Close</button>}>

      {requests.length > 0 && (
        <div style={{marginBottom:20}}>
          <div className="eyebrow" style={{marginBottom:9}}>Needs your answer</div>
          {requests.map(l => (
            <div key={l.id} className="reqcard">
              <div className="row" style={{gap:11, marginBottom:11}}>
                <Initial name={l.parentName || l.parentEmail} size={36} />
                <div style={{minWidth:0}}>
                  <b style={{fontSize:14.5, display:'block'}}>{l.parentName || 'A parent'}</b>
                  <div style={{fontSize:12.5, color:'var(--ink35)'}}>{l.parentEmail}</div>
                </div>
              </div>
              <p style={{margin:'0 0 12px', fontSize:13, color:'var(--ink60)', lineHeight:1.55}}>
                They're asking to follow your planner. They'd be able to see your calendar, lists, activities,
                and focus minutes, and change none of it. You can undo this later in Settings.
              </p>
              <div className="row" style={{gap:8}}>
                <button className="btn primary" onClick={() => onDecide(l.id, 'approved')}>Allow</button>
                <button className="btn" onClick={() => onDecide(l.id, 'declined')}>Decline</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isAdmin && (
        <div style={{marginBottom:20}}>
          <div className="eyebrow" style={{marginBottom:9}}>
            Bug reports{bugs && bugs.length ? ` · ${bugs.length}` : ''}
          </div>
          {bugs === null ? <span style={{color:'var(--ink35)',fontSize:13}}>Loading…</span>
            : bugs.length === 0 ? <span style={{color:'var(--ink35)',fontSize:13}}>Nothing reported yet.</span>
            : bugs.map(b => (
              <div key={b.id} className="reqcard" style={{marginBottom:9}}>
                <div className="spread" style={{marginBottom:5}}>
                  <b style={{fontSize:13.5}}>{b.username || 'someone'}</b>
                  <span className="mono" style={{fontSize:11, color:'var(--ink35)'}}>
                    {b.at ? fmtDay(new Date(b.at)) : ''}{b.area ? ` · ${b.area}` : ''}
                  </span>
                </div>
                <p style={{margin:0, fontSize:13, color:'var(--ink60)', lineHeight:1.5}}>{b.what}</p>
                {b.steps && <p style={{margin:'6px 0 0', fontSize:12, color:'var(--ink35)', lineHeight:1.5}}>{b.steps}</p>}
                {(b.agent || b.screen) && (
                  <div className="mono" style={{fontSize:10, color:'var(--ink35)', marginTop:6, wordBreak:'break-all'}}>
                    {[b.screen, b.agent].filter(Boolean).join(' · ')}
                  </div>
                )}
              </div>
            ))}
        </div>
      )}

      {referralReady && (
        <div style={{marginBottom:20}}>
          <div className="eyebrow" style={{marginBottom:9}}>You've earned something</div>
          <div className="reqcard">
            <b style={{fontSize:15, display:'block', marginBottom:4}}>{refCount} friends used your code</b>
            <p style={{margin:'0 0 12px', fontSize:13, color:'var(--ink60)', lineHeight:1.55}}>
              That's three months of PlanIt Pro, free. Claim it in Settings and it'll be applied when Pro launches.
            </p>
            <button className="btn primary" onClick={onOpenReferral}>Redeem it</button>
          </div>
        </div>
      )}

      {report && report.minutes > 0 && (
        <div style={{marginBottom:20}}>
          <div className="eyebrow" style={{marginBottom:9}}>
            Your study report{reportDue ? ' · resets tomorrow' : ''}
          </div>
          <div className="reqcard">
            <div className="row" style={{gap:14, flexWrap:'wrap', marginBottom:10}}>
              <div>
                <div className="eyebrow">Last 7 days</div>
                <b className="mono" style={{fontSize:21}}>
                  {Math.floor(report.minutes/60) ? `${Math.floor(report.minutes/60)}h ${report.minutes%60}m` : `${report.minutes}m`}
                </b>
              </div>
              <div>
                <div className="eyebrow">Sessions</div>
                <b className="mono" style={{fontSize:21}}>{report.sessions}</b>
              </div>
              {report.partners[0] && (
                <div style={{minWidth:0}}>
                  <div className="eyebrow">Most with</div>
                  <b style={{fontSize:16}}>{report.partners[0].name}</b>
                </div>
              )}
            </div>
            <p style={{margin:'0 0 12px', fontSize:13, color:'var(--ink60)', lineHeight:1.55}}>
              {report.partners[0]
                ? `You and ${report.partners[0].name} have put in ${report.partners[0].mins} minutes in the same room. Your best day was ${report.best.minutes} minutes.`
                : `Your best day this week was ${report.best.minutes} minutes. Join a study room and you'll see who you focus with most.`}
            </p>
            {reportDue && (
              <div className="formnote" style={{marginBottom:10}}>
                This week's numbers reset on Sunday. Past weeks are kept in Reports.
              </div>
            )}
            <button className="btn primary" onClick={onOpenReports}>See the full report</button>
          </div>
        </div>
      )}

      <p style={{margin:'0 0 16px', color:'var(--ink60)', fontSize:13.5}}>
        PlanIt is early. Nothing below is live yet. This is what's being built.
      </p>
      {NEWS.map(n => (
        <div key={n.id} className={'newsitem' + (readIds.includes(n.id) ? '' : ' fresh')}>
          <div>
            <div className="row" style={{gap:8, marginBottom:3, flexWrap:'wrap'}}>
              <b style={{fontSize:14.5}}>{n.title}</b>
              <span className="newstag">{n.tag}</span>
            </div>
            <p style={{margin:0, color:'var(--ink60)', fontSize:13, lineHeight:1.55}}>{n.body}</p>
          </div>
        </div>
      ))}
    </Modal>
  );
}

/* ============ TUTORIAL ============ */
// Shown once, right after an account is made, flagged on the profile, so it
// never reappears on another device. Each step opens the screen it describes
// and dims everything except the part it is talking about.
const TOUR = [
  {title:'Welcome to PlanIt',
   body:"Four things that feed each other: a list, a calendar, a record of what you've done, and a way to actually focus. Two minutes and you'll know where everything is."},
  {title:'List It: get it out of your head', tab:'list', sub:'daily', target:'listadd',
   body:"Write down everything you owe, without deciding when yet. Daily for today, Weekly and Monthly for bigger goals."},
  {title:'Organize It: decide when', tab:'organize', sub:'daily', target:'schedule',
   body:"Your list sits beside the schedule. Drag an item onto the grid to give it a time, drag it back to take the time off. Same task, two views."},
  {title:'The week at a glance', tab:'organize', sub:'weekly', target:'week',
   body:"Put tasks on specific days and see the whole week. Monthly holds tests, deadlines and birthdays. Drag anything between days to move it."},
  {title:'Energy: the honest part', tab:'organize', sub:'daily', target:'energy', energy:true,
   body:"Each task costs relax (−1), none, low, medium or high. Your day adds it up and turns orange near your limit, red past it. Set what a normal day holds for you."},
  {title:'Your day has its own hours', tab:'organize', sub:'daily', target:'dayhours',
   body:"The schedule runs from when you wake to when you sleep. Tap the wake-up bar to set those two times. Past midnight is fine."},
  {title:'Brag It: write it down now', tab:'brag', sub:'experience', target:'brag',
   body:"Activities, honors and certifications in the Common App's own fields. Log them the week they happen, and export a résumé whenever you need one."},
  {title:'Lock It: focus, together', tab:'lock', sub:'focus', target:'timer',
   body:"A timer or a full pomodoro run, with beeps for the last five seconds. Share a room code and up to nine of you focus together."},
  {title:'Settings: make it yours', tab:'settings', sub:'account', target:'settings',
   body:"Your account, your energy baseline, notifications, and a bug report form. When something breaks, please tell us there."},
];

function Tutorial({user, energyBase, setEnergyBase, onDone, goTo}){
  const [i, setI] = useState(0);
  const [base, setBase] = useState(energyBase || DEFAULT_BASE);
  const [rect, setRect] = useState(null);
  const [busy, setBusy] = useState(false);
  const step = TOUR[i];
  const last = i === TOUR.length - 1;

  // open the right screen, then find the thing to light up once it has drawn
  useEffect(() => {
    if(step.tab) goTo(step.tab, step.sub);
    setRect(null);
    if(!step.target) return;
    let tries = 0, alive = true;
    const find = () => {
      if(!alive) return;
      const el = document.querySelector(`[data-tour="${step.target}"]`);
      if(el){
        el.scrollIntoView({block:'center', behavior:'smooth'});
        setTimeout(() => {
          if(!alive) return;
          const r = el.getBoundingClientRect();
          setRect({top:r.top, left:r.left, width:r.width, height:r.height});
        }, 280);
      } else if(tries++ < 20) setTimeout(find, 60);
    };
    find();
    const onResize = () => {
      const el = document.querySelector(`[data-tour="${step.target}"]`);
      if(el){ const r = el.getBoundingClientRect(); setRect({top:r.top, left:r.left, width:r.width, height:r.height}); }
    };
    window.addEventListener('resize', onResize);
    return () => { alive = false; window.removeEventListener('resize', onResize); };
  }, [i]);

  const finish = async () => {
    setBusy(true);
    setEnergyBase(base);
    try{ await saveProfile(user.id, {tutorialDone:true}); }catch(e){}
    goTo('organize', 'daily');
    onDone();
  };

  // keep the card out of the way of whatever is lit up
  const pad = 8;
  const cardBelow = rect && (rect.top + rect.height/2) < window.innerHeight/2;

  return (
    <div className="tutlayer">
      {rect
        ? <div className="tutspot" style={{top:rect.top - pad, left:rect.left - pad,
            width:rect.width + pad*2, height:rect.height + pad*2}} />
        : <div className="tutdim" />}

      <div className={'tutcard' + (rect ? (cardBelow ? ' bottom' : ' top') : '')}>
        <div className="tutdots">
          {TOUR.map((_,n) => <i key={n} className={n === i ? 'on' : n < i ? 'done' : ''} />)}
        </div>
        <h2>{step.title}</h2>
        <p>{step.body}</p>

        {step.energy && (
          <div className="card" style={{textAlign:'left', marginTop:4}}>
            <div className="spread" style={{marginBottom:8}}>
              <span style={{fontSize:13.5, fontWeight:600}}>A normal day holds about</span>
              <b className="mono" style={{fontSize:22}}>{base}</b>
            </div>
            <EnergyStepper value={base} onChange={setBase} />
          </div>
        )}

        <div className="tutbtns">
          {i > 0 && <button className="btn" onClick={() => setI(i-1)}>Back</button>}
          {last
            ? <button className="btn primary" disabled={busy} onClick={finish}>{busy ? 'Setting up…' : 'Start planning'}</button>
            : <button className="btn primary" onClick={() => setI(i+1)}>Next</button>}
        </div>
        {!last && <button className="tutskip" onClick={finish}>Skip the tour</button>}
      </div>
    </div>
  );
}

/* ============ DAILY STREAK POPUP ============ */
// Shown once a day, on the first visit. Three faces: alive, frozen, or going
// out, the last one is the only time it asks for anything.
function StreakPopup({streak, prev, freezes, state, onUseFreeze, onBuy, onClose}){
  useEffect(() => { buzz(state === 'out' ? 'warning' : 'success'); }, [state]);

  const frozen = state === 'frozen';
  const out = state === 'out';
  const number = out ? prev : streak;

  return (
    <div className="streakwrap" onClick={onClose}>
      <div className={'streakcard ' + state} onClick={e => e.stopPropagation()}>
        <div className={'streakflame ' + state}>{frozen ? <FreezeIcon size={58} /> : <FireIcon level={3} />}</div>

        <div className="streaknum">{number}</div>
        <div className="streakword">{number === 1 ? 'day' : 'days'}</div>

        {!frozen && !out && (
          <p className="streakline">
            {streak < 3 ? "You're back. Keep it going."
              : streak < 7 ? 'Nicely done. That adds up fast.'
              : streak < 30 ? `${streak} days straight. That's a habit now.`
              : `${streak} days. Genuinely impressive.`}
          </p>
        )}

        {frozen && (
          <p className="streakline">
            You missed a day, so a freeze covered it. Your streak carries on.
            <b style={{display:'block', marginTop:6}}>{freezes} {freezes === 1 ? 'freeze' : 'freezes'} left</b>
          </p>
        )}

        {out && (
          <>
            <p className="streakline">
              Your {prev}-day streak has gone out. No freezes left to save it.
            </p>
            <div className="row" style={{gap:8, justifyContent:'center', marginTop:14, flexWrap:'wrap'}}>
              <button className="btn primary" onClick={onBuy}>Get more freezes</button>
              <button className="btn" onClick={onClose}>Start again</button>
            </div>
          </>
        )}

        {!out && <button className="btn primary" style={{marginTop:16}} onClick={onClose}>
          {frozen ? 'Thanks' : "Let's go"}
        </button>}

        {state === 'canfreeze' && (
          <button className="btn" style={{marginTop:8}} onClick={onUseFreeze}>Use a freeze</button>
        )}
      </div>
    </div>
  );
}

/* ============ APP ============ */
const TABS = [
  {id:'brag',     label:'Brag It',    sub:'Extracurriculars', color:'var(--brag)',
   title:'Brag It', tagline:'Everything you have done, written down before you forget it.',
   subs:[['honor','Honors & awards'],['experience','Experience'],['certification','Certifications']]},
  {id:'list',     label:'List It',    sub:'To-do', color:'var(--list)',
   title:'List It', tagline:'Daily items feed straight into your schedule.',
   subs:[['daily','Daily'],['weekly','Weekly'],['monthly','Monthly']]},
  {id:'organize', label:'Organize It', sub:'Calendar', color:'var(--org)',
   title:'Organize It', tagline:'Move your day around, then look up at the week and the month.',
   subs:[['daily','Daily'],['weekly','Weekly'],['monthly','Monthly']]},
  {id:'lock',     label:'Lock It',    sub:'Study mode', color:'var(--lock)',
   title:'Lock It', tagline:'Set a timer, close everything else, bring your friends.',
   subs:[['focus','Focus timer'],['reports','Reports']]},
  {id:'admin',    label:'Numbers',   sub:'Team', color:'var(--brag)', adminOnly:true,
   title:'Numbers', tagline:'Where people are coming from.',
   subs:[['sources','Sign-up sources'],['referrers','Top referrers']]},
  {id:'watch',    label:'View It',   sub:'Parents', color:'var(--watch)', parentOnly:true,
   title:'View It', tagline:"Follow along with your child's planner.",
   subs:[['children','Children']]},
  {id:'settings', label:'Settings',   sub:'Account', color:'var(--set)',
   title:'Settings', tagline:'Your account, how PlanIt looks, and what it can do.',
   subs:[['account','My account'],['appearance','Appearance'],['apps','Blocked apps'],['security','Username & password'],
         ['notifications','Notifications'],['pro','PlanIt Pro'],['feedback','Report a bug'],['legal','Legal']]},
];
// The literal hex behind a section, for the places that need to compute with
// it (the lock screen's backdrop, a <input type="color"> value) rather than
// just reference the variable.
const sectionHex = (st, key) => {
  const acc = (st && st.accents) || {};
  if(acc[key]) return acc[key];
  const t = palette(paletteOf(st || {}))[isDarkMode(modeOf(st || {})) ? 'dark' : 'light'];
  return t.sections[key] || t.ink;
};

function App({user, onSignOut}){
  const [ready, setReady] = useState(false);
  const isParent = user.role === 'parent';
  const isAdmin = (user.username || '').toLowerCase() === CONFIG.ADMIN_USERNAME;

  // Days in a row with at least one visit. Missing a day resets it to 1, but
  // the old streak is remembered for that day so a freeze can restore it.
  // A freeze is earned every 7 days of streak, up to 3 banked.
  const [sk, setSk] = useState({
    streak: user.streak || 0, best: user.bestStreak || 0,
    freezes: user.freezes != null ? user.freezes : 5,
    prev: user.prevStreak || 0, brokenAt: user.brokenAt || null,
  });
  const streak = sk.streak;
  useEffect(() => {
    const today = iso(new Date());
    if(user.lastSeen === today) return;
    const yesterday = iso(addDays(new Date(), -1));
    let freezes = user.freezes != null ? user.freezes : 5;
    let next, prev = 0, brokenAt = null;
    if(user.lastSeen === yesterday) next = (user.streak || 0) + 1;
    else {
      next = 1;
      if((user.streak || 0) > 1){ prev = user.streak; brokenAt = today; }
    }
    if(next > 1 && next % 7 === 0) freezes = Math.min(10, freezes + 1);
    const best = Math.max(next, user.bestStreak || 0);
    setSk({streak:next, best, freezes, prev, brokenAt});
    saveProfile(user.id, {streak:next, bestStreak:best, lastSeen:today,
      freezes, prevStreak:prev, brokenAt}).catch(() => {});
  }, [user.id]);

  const canRestore = sk.brokenAt === iso(new Date()) && sk.prev > 0 && sk.freezes > 0;
  const useFreeze = () => {
    if(!canRestore) return;
    const restored = sk.prev + 1;
    const next = {...sk, streak:restored, best:Math.max(sk.best, restored),
      freezes:sk.freezes - 1, prev:0, brokenAt:null, usedFreeze:true};
    setSk(next);
    saveProfile(user.id, {streak:restored, bestStreak:next.best, freezes:next.freezes,
      prevStreak:0, brokenAt:null}).catch(() => {});
    toast(`Streak saved, back to ${restored} days`);
  };
  const [sync, setSync] = useState({state:'idle'});
  const [newsOpen, setNewsOpen] = useState(false);
  const [shieldList, setShieldList] = useState(false);
  const [shieldTab, setShieldTab] = useState('list');
  const [railOpen, setRailOpen] = useState(false);   // phone drawer
  const [tourDone, setTourDone] = useState(!!user.tutorialDone);
  // Canvas is worth pointing out once, after the tour, and never again.
  const [canvasTip, setCanvasTip] = useState(false);
  const canvasRef = useRef(null);
  const [streakPop, setStreakPop] = useState(false);
  const [tab, setTab] = useState((user.username || '').toLowerCase() === CONFIG.ADMIN_USERNAME ? 'admin' : 'organize');
  const [sub, setSub] = useState({brag:'honor', list:'daily', organize:'daily', lock:'focus', settings:'account', watch:'children', admin:'sources'});
  const [date, setDate] = useState(new Date());
  const [store, setStore] = useState(() => ({tasks:[], events:[], ecs:[], lock:{sessions:0,minutes:0,day:iso(new Date())}}));
  const [toastMsg, setToastMsg] = useState(null);

  // focus timer state lives here so the shield can cover the whole app
  const [minutes, setMinutes] = useState(25);
  const [left, setLeft] = useState(25*60);
  const [running, setRunning] = useState(false);
  const endsAt = useRef(null);   // wall-clock target, not a tick count
  const runFrom = useRef(null);  // when the current run began, for crediting time
  const actx = useRef(null);
  const lastBeep = useRef(null);

  // Audio has to be created inside a click, which is why this is called from
  // the start button rather than set up on load.
  const ensureAudio = () => {
    if(!actx.current){
      const AC = window.AudioContext || window.webkitAudioContext;
      if(AC) { try{ actx.current = new AC(); }catch(e){} }
    }
    if(actx.current && actx.current.state === 'suspended') actx.current.resume().catch(() => {});
    return actx.current;
  };
  const tone = (freq, at, dur, vol = 0.18) => {
    const ctx = actx.current;
    if(!ctx) return;
    try{
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine';
      o.frequency.value = freq;
      const t0 = ctx.currentTime + at;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.linearRampToValueAtTime(vol, t0 + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.connect(g); g.connect(ctx.destination);
      o.start(t0); o.stop(t0 + dur + 0.03);
    }catch(e){}
  };
  const soundOn = () => (store.settings || DEFAULT_SETTINGS).sound !== false;
  const play = kind => {
    // haptics fire whether or not sound is on, they are separate switches
    if(kind === 'count')         buzz('light');
    else if(kind === 'start')    buzz('medium');
    else if(kind === 'workEnd')  buzz('heavy');
    else if(kind === 'breakEnd') buzz('success');
    if(!soundOn() || !actx.current) return;
    if(kind === 'count')    tone(880, 0, 0.09, 0.13);            // one of the last five seconds
    if(kind === 'start')    { tone(620, 0, 0.11); tone(880, 0.12, 0.18); }
    if(kind === 'workEnd')  { tone(880, 0, 0.14); tone(660, 0.15, 0.14); tone(440, 0.30, 0.34); }
    if(kind === 'breakEnd') { tone(520, 0, 0.11); tone(700, 0.12, 0.11); tone(920, 0.24, 0.28); }
  };
  const [mode, setMode] = useState('timer');            // 'timer' | 'pomo'
  const [pomo, setPomo] = useState({work:25, brk:5, cycles:4});
  const [phase, setPhase] = useState(null);             // 'work' | 'break' | null
  const [room, setRoom] = useState(null);
  const [members, setMembers] = useState([]);
  const [roomName, setRoomName] = useState('');
  const [camOn, setCamOn] = useState(false);
  const camStream = useRef(null);

  const [camTick, setCamTick] = useState(0);
  const othersOn = members.filter(m => m.id !== user.id && m.camOn).length;
  const camFull = othersOn >= CAM_LIMIT;
  // connect when either side has something to show
  const camPeers = useMemo(
    () => members.filter(m => m.id !== user.id && (m.camOn || camOn)).map(m => m.id).sort(),
    [members, user.id, camOn]);
  const [cycle, setCycle] = useState(1);

  const lastPush = useRef(0);
  // Housekeeping (the midnight rollover, week/month bookkeeping) changes the
  // store on its own. If an idle second browser pushed those, it would upload
  // its stale copy and undo edits made elsewhere. Only real edits push.
  const dirty = useRef(false);
  const touch = fn => (...args) => { dirty.current = true; return fn(...args); };
  useEffect(() => { (async () => {
    const [local, remote] = await Promise.all([loadStore(user.id), fetchPlanner(user.id)]);
    // Whichever copy was written last wins, so opening on a second device
    // picks up what you did on the first.
    const useRemote = remote && (!local || (remote.at || 0) > (local.at || 0));
    setStore(useRemote ? remote.data : (local || seed()));
    lastPush.current = useRemote ? remote.at : ((local && local.at) || 0);
    setReady(true);
    // local was ahead of the server, publish it so other devices catch up
    if(local && !useRemote && (local.at || 0) > 0) dirty.current = true;
    // make sure a linked parent always has a copy, even on a quiet day
    if(!remote) dirty.current = true;
  })(); }, [user.id]);

  const firstSave = useRef(true);
  useEffect(() => {
    if(!ready) return;
    if(firstSave.current){ firstSave.current = false; }
    const t = setTimeout(() => {
      const stamped = {...store, at: Date.now()};
      saveStore(user.id, stamped);          // the local copy always keeps up
      if(isParent || !dirty.current) return;
      dirty.current = false;
      lastPush.current = stamped.at;
      setSync(s0 => ({...s0, state:'saving'}));
      pushPlanner(user.id, stamped)
        .then(() => setSync({state:'ok', at:Date.now()}))
        .catch(e => {
          console.warn('[planit-sync]', e);
          setSync({state:'err', msg: e.code === 'permission-denied'
            ? 'Permission denied. The Firestore rules need republishing.'
            : (e.message || 'Could not reach the database.')});
        });
    }, 600);
    return () => clearTimeout(t);
  }, [store, ready, user.id, isParent]);

  const [viewChildId, setViewChildId] = useState(null);
  const [viewChildName, setViewChildName] = useState('');
  const [childStore, setChildStore] = useState(null);   // null = loading, undefined = no access
  useEffect(() => {
    if(!isParent || viewChildId) return;
    linksForParent(user.id).then(snap => {
      const first = snap.docs.map(d => d.data()).find(l => l.status === 'approved');
      if(first){ setViewChildId(first.childUid); setViewChildName(first.childUsername); }
    }).catch(() => {});
  }, [isParent, viewChildId, user.id]);

  useEffect(() => {
    if(!isParent || !viewChildId){ setChildStore(null); return; }
    setChildStore(null);
    return watchPlanner(viewChildId, res => setChildStore(res));
  }, [isParent, viewChildId]);

  // what the four planner tabs actually render: yours, or the child you picked
  const view = (isParent && childStore && childStore.data) ? childStore.data : store;

  const toast = useCallback(msg => { setToastMsg(msg); setTimeout(() => setToastMsg(null), 2200); }, []);

  // a request sitting unseen in settings is a request that never gets answered
  const [pendingList, setPendingList] = useState([]);
  const refreshLinks = useCallback(() => {
    if(isParent) return;
    linksForChild(user.id)
      .then(snap => setPendingList(snap.docs.map(d => ({id:d.id, ...d.data()}))
        .filter(l => l.status === 'pending')))
      .catch(() => {});
  }, [user.id, isParent]);

  const decideLink = async (id, status) => {
    try{
      await db().collection('links').doc(id).update({status, decidedAt:Date.now()});
      toast(status === 'approved' ? 'Access granted' : 'Request declined');
      refreshLinks();
    }catch(e){ toast('Could not save that'); }
  };
  useEffect(() => { refreshLinks(); }, [refreshLinks]);
  // Every write goes through here, so a parent account cannot change anything
  // even if a control slips through the interface.
  const guard = fn => (...args) => {
    if(isParent){ toast('Parent accounts can look, but not edit'); return; }
    dirty.current = true;
    fn(...args);
  };

  const settings = store.settings || DEFAULT_SETTINGS;
  // first visit of the day gets the streak screen
  useEffect(() => {
    if(!ready || isParent) return;
    const today = iso(new Date());
    if((store.settings || DEFAULT_SETTINGS).streakSeen === today) return;
    const t = setTimeout(() => setStreakPop(true), 600);
    return () => clearTimeout(t);
  }, [ready, isParent, store.settings]);

  const closeStreakPop = () => {
    setStreakPop(false);
    setSettings({...(store.settings || DEFAULT_SETTINGS), streakSeen: iso(new Date())});
  };

  useEffect(() => { setHaptics(settings.haptics !== false); }, [settings.haptics]);
  const setSettings = next => { dirty.current = true; setStore(s => ({...s, settings:next})); };

  // Shown the first time someone reaches their planner with the tour behind
  // them. Parents have no calendar of their own, so they never see it.
  useEffect(() => {
    if(!ready || isParent || !tourDone) return;
    const st = store.settings || DEFAULT_SETTINGS;
    if(st.canvasSeen || feedsOf(st).length) return;
    const t = setTimeout(() => setCanvasTip(true), 900);
    return () => clearTimeout(t);
  }, [ready, isParent, tourDone]);

  const readNews = settings.readNews || [];
  const baseDefault = (store.settings && store.settings.energyBase) || DEFAULT_BASE;
  // Each change is remembered as "from this day on, the baseline is N", so a
  // change made today never rewrites what past days were measured against.
  const baseFor = dk => {
    const changes = (store.settings && store.settings.energyChanges) || [];
    let base = baseDefault;
    for(const c of changes){ if(c.from <= dk) base = c.base; else break; }
    return base;
  };
  const energyBase = baseFor(iso(date));
  // fromDay lets Settings change the baseline from today, while the energy pill
  // in Daily changes it from whichever day is on screen.
  const applyBase = (v, scope, fromDay) => {
    const st = store.settings || DEFAULT_SETTINGS;
    const dk = fromDay || iso(date);
    if(scope === 'future'){
      // Changes dated on or after this day go, so "from here on" really does
      // mean every day forward rather than until the next old change.
      const rest = ((st.energyChanges || []).filter(c => c.from < dk));
      const next = [...rest, {from:dk, base:v}].sort((a,b) => a.from.localeCompare(b.from));
      setSettings({...st, energyChanges:next});
    } else {
      setSettings({...st, energyBase:v, energyChanges:[], energyDays:null});
    }
    setBaseEdit(false);
  };
  const [baseEdit, setBaseEdit] = useState(false);
  const [refCount, setRefCount] = useState(0);
  useEffect(() => {
    if(isParent) return;
    countReferrals(user.id).then(setRefCount).catch(() => {});
  }, [user.id, isParent]);
  const referralReady = refCount >= 5 && !user.referralRewardClaimed;

  const report = useMemo(() => buildReport(store.lock), [store.lock]);
  const thisWeek = weekKey(new Date());
  // Out on Saturday, the day before everything rolls over.
  const isSaturday = new Date().getDay() === 6;
  const reportUnread = (isSaturday && report.minutes > 0 && settings.reportSeen !== thisWeek) ? 1 : 0;
  const unreadNews = NEWS.filter(n => !readNews.includes(n.id)).length + pendingList.length + reportUnread + (referralReady ? 1 : 0);
  const markNewsRead = useCallback(ids => {
    setStore(s0 => {
      const st = s0.settings || DEFAULT_SETTINGS;
      const merged = Array.from(new Set([...(st.readNews || []), ...ids]));
      const week = weekKey(new Date());
      if(merged.length === (st.readNews || []).length && st.reportSeen === week) return s0;
      return {...s0, settings:{...st, readNews:merged, reportSeen:week}};
    });
  }, []);



  const resetPlanner = async () => {
    if(!window.confirm('Delete every task, calendar entry, and activity in this planner? This cannot be undone.')) return;
    const fresh = seed();
    dirty.current = true;
    setStore(fresh);
    await saveStore(user.id, fresh);
    await DB.del('planit:data:v1');   // don't let the old sample data come back
    toast('Planner cleared');
  };

  // Time you actually sat there counts, whether or not you reach the end.
  // Seconds are banked so short stretches aren't rounded away to nothing.
  const creditElapsed = useCallback(() => {
    if(!runFrom.current) return 0;
    dirty.current = true;
    const secs = Math.max(0, Math.round((Date.now() - runFrom.current)/1000));
    runFrom.current = null;
    if(secs > 0) setStore(s => {
      const banked = (s.lock.seconds != null ? s.lock.seconds : (s.lock.minutes || 0)*60) + secs;
      return {...s, lock:{...s.lock, seconds:banked, minutes:Math.floor(banked/60)}};
    });
    return secs;
  }, []);

  // A pomodoro phase. Break time deliberately isn't credited as focus minutes.
  // Browsers only grant full screen from inside a click, which is why this
  // lives on the start path rather than in an effect.
  const goFullscreen = () => {
    const el = document.documentElement;
    const req = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
    if(req) { try{ req.call(el); }catch(e){} }
  };
  const leaveFullscreen = () => {
    if(!document.fullscreenElement && !document.webkitFullscreenElement) return;
    const ex = document.exitFullscreen || document.webkitExitFullscreen;
    if(ex) { try{ ex.call(document); }catch(e){} }
  };

  const beginPhase = useCallback((kind, c) => {
    const mins = kind === 'work' ? pomo.work : pomo.brk;
    endsAt.current = Date.now() + mins*60*1000;
    runFrom.current = kind === 'work' ? Date.now() : null;
    setPhase(kind);
    setCycle(c);
    setLeft(mins*60);
    setRunning(true);
  }, [pomo.work, pomo.brk]);

  const startTimer = useCallback(() => {
    goFullscreen();
    ensureAudio();
    const b = Blocker();
    if(b && (store.settings || DEFAULT_SETTINGS).blockApps){
      b.startShield({minutes: mode === 'pomo' ? pomo.work : minutes}).catch(() => {});
    }
    lastBeep.current = null;
    play('start');
    if(mode === 'pomo'){
      if(phase && left > 0){                        // resume a paused phase
        endsAt.current = Date.now() + left*1000;
        if(phase === 'work') runFrom.current = Date.now();
        setRunning(true);
      } else beginPhase('work', 1);
      return;
    }
    const secs = left > 0 ? left : minutes*60;      // resume from a pause
    endsAt.current = Date.now() + secs*1000;
    runFrom.current = Date.now();
    setLeft(secs);
    setRunning(true);
  }, [left, minutes, mode, phase, beginPhase]);

  const pauseTimer = useCallback(() => {
    leaveFullscreen();
    const b = Blocker(); if(b) b.stopShield().catch(() => {});
    if(endsAt.current) setLeft(Math.max(0, Math.round((endsAt.current - Date.now())/1000)));
    const secs = creditElapsed();
    endsAt.current = null;
    setRunning(false);
    if(secs >= 60) toast(`Logged ${Math.floor(secs/60)} min`);
  }, [creditElapsed, toast]);

  const resetTimer = useCallback(m => {
    leaveFullscreen();
    const b = Blocker(); if(b) b.stopShield().catch(() => {});
    creditElapsed();
    endsAt.current = null;
    runFrom.current = null;
    setRunning(false);
    if(!m) toast(mode === 'pomo' ? 'Cycles reset' : 'Timer reset');
    if(mode === 'pomo' && !m){
      setPhase(null); setCycle(1); setLeft(pomo.work*60);
      return;
    }
    const mins = m || minutes;
    setMinutes(mins);
    setLeft(mins*60);
  }, [minutes, creditElapsed, mode, pomo.work, toast]);

  const addCycle = useCallback(() => setPomo(p => ({...p, cycles:p.cycles + 1})), []);

  // Background tabs get their intervals throttled, so the remaining time is
  // always derived from the clock rather than counted down tick by tick.
  // Coming back to the tab recalculates immediately.
  useEffect(() => {
    if(!running) return;
    const tick = () => {
      if(!endsAt.current) return;
      const rem = Math.max(0, Math.round((endsAt.current - Date.now())/1000));
      setLeft(rem);
      if(rem > 0 && rem <= 5 && lastBeep.current !== rem){ lastBeep.current = rem; play('count'); }
      if(rem <= 0){
        endsAt.current = null;
        if(mode === 'pomo'){
          if(phase === 'work'){
            play('workEnd');
            lastBeep.current = null;
            creditElapsed();
            dirty.current = true;
        setStore(s => ({...s, lock:{...s.lock, sessions:s.lock.sessions+1}}));
            if(cycle < pomo.cycles){
              toast(`Cycle ${cycle} of ${pomo.cycles} done. Break time.`);
              beginPhase('break', cycle);
            } else {
              leaveFullscreen();
              setRunning(false); setPhase(null); setCycle(1); setLeft(pomo.work*60);
              toast(`All ${pomo.cycles} cycles finished. Nice work.`);
            }
          } else {
            play('breakEnd');
            lastBeep.current = null;
            toast('Break over. Back to it.');
            beginPhase('work', cycle + 1);
          }
          return;
        }
        play('workEnd');
        lastBeep.current = null;
        creditElapsed();
        leaveFullscreen();
        { const b = Blocker(); if(b) b.stopShield().catch(() => {}); }
        setRunning(false);
        setLeft(minutes*60);
        setStore(s => ({...s, lock:{...s.lock, sessions:s.lock.sessions+1}}));
        toast('Session complete. Take a break.');
      }
    };
    tick();
    const i = setInterval(tick, 500);
    const wake = () => { if(!document.hidden) tick(); };
    document.addEventListener('visibilitychange', wake);
    window.addEventListener('focus', wake);
    return () => {
      clearInterval(i);
      document.removeEventListener('visibilitychange', wake);
      window.removeEventListener('focus', wake);
    };
  }, [running, minutes, toast, creditElapsed, mode, phase, cycle, pomo.cycles, pomo.work, beginPhase]);

  // who is in the room
  useEffect(() => {
    if(!room) { setMembers([]); return; }
    const col = db().collection('rooms').doc(room).collection('peers');
    const unsub = col.onSnapshot(snap => {
      const now = Date.now();
      const rows = snap.docs.map(d => ({id:d.id, ...d.data()}));
      const me = rows.find(p => p.id === user.id);
      if(me && me.kicked){
        col.doc(user.id).delete().catch(() => {});
        setRoom(null); setMembers([]);
        toast('You were removed from the room');
        return;
      }
      setMembers(rows.filter(p => !p.kicked && now - (p.at || 0) < 70000));
    }, () => toast("Couldn't reach the study room"));
    return () => {
      unsub();
      col.doc(user.id).delete().catch(() => {});
    };
  }, [room, user.id, toast]);

  // my own presence row, refreshed so stale seats drop out
  useEffect(() => {
    if(!room) return;
    const doc = db().collection('rooms').doc(room).collection('peers').doc(user.id);
    const write = () => doc.set({
      name: (roomName || '').trim() || 'Someone',
      camOn, focusing: running, min: store.lock.minutes, at: Date.now()
    }, {merge:true}).catch(() => {});
    write();
    const hb = setInterval(write, 20000);
    return () => clearInterval(hb);
  }, [room, user.id, roomName, camOn, running, store.lock.minutes]);

  const {remote: remoteStreams, status: peerStatus} = useVideoMesh({
    room, myId:user.id, camOn, camPeers, streamRef:camStream, streamTick:camTick
  });

  // Reactions piggyback on your presence row: everyone is already listening to
  // it, so a new timestamp is all it takes to make an emoji pop up for the room.
  const [bursts, setBursts] = useState({});
  const seenReacts = useRef({});

  const react = kind => {
    if(!room) return;
    db().collection('rooms').doc(room).collection('peers').doc(user.id)
      .set({react:{kind, at:Date.now()}}, {merge:true}).catch(() => {});
  };

  useEffect(() => {
    if(!room) return;
    const now = Date.now();
    members.forEach(m => {
      const r = m.react;
      if(!r || !r.kind || now - r.at > 6000) return;
      const stamp = `${m.id}:${r.at}`;
      if(seenReacts.current[stamp]) return;
      seenReacts.current[stamp] = true;
      const key = stamp + ':' + Math.random().toString(36).slice(2,6);
      setBursts(b => ({...b, [m.id]: [...(b[m.id] || []), {key, kind:r.kind, x:Math.random()*44 - 22}]}));
      setTimeout(() => setBursts(b => ({
        ...b, [m.id]: (b[m.id] || []).filter(x => x.key !== key)
      })), 2500);
    });
  }, [members, room]);

  const toggleCam = on => {
    if(on && camFull){ toast(`Camera circle is full, ${CAM_LIMIT} at a time`); return; }
    setCamOn(on);
  };

  useEffect(() => {
    if(!camOn){
      if(camStream.current){ camStream.current.getTracks().forEach(t => t.stop()); camStream.current = null; }
      return;
    }
    let dead = false;
    navigator.mediaDevices.getUserMedia({video:{width:480, height:480, facingMode:'user'}, audio:false})
      .then(st => { if(dead){ st.getTracks().forEach(t => t.stop()); return; } camStream.current = st; setCamTick(t => t+1); })
      .catch(() => { setCamOn(false); toast('Could not open the camera'); });
    return () => { dead = true; };
  }, [camOn, toast]);
  // A drag interrupted by switching tabs never sees its pointerup, which would
  // leave the page scroll-locked. Clear that whenever we come back.
  useEffect(() => {
    const unstick = () => { if(!document.hidden) document.body.classList.remove('dragging'); };
    document.addEventListener('visibilitychange', unstick);
    window.addEventListener('focus', unstick);
    window.addEventListener('pointerup', unstick);
    return () => {
      document.removeEventListener('visibilitychange', unstick);
      window.removeEventListener('focus', unstick);
      window.removeEventListener('pointerup', unstick);
    };
  }, []);

  // Credit a minute to everyone in the room with you, but only while the timer
  // is running, sitting in a room chatting isn't studying together.
  const membersRef = useRef(members);
  useEffect(() => { membersRef.current = members; }, [members]);
  useEffect(() => {
    if(isParent || !room || !running) return;
    const tick = () => setStore(s0 => {
      const lk = s0.lock || {};
      const partners = {...(lk.partners || {})};
      const partnersMonth = {...(lk.partnersMonth || {})};
      const partnersAll = {...(lk.partnersAll || {})};
      let changed = false;
      (membersRef.current || []).forEach(m => {
        if(m.id === user.id) return;
        [partners, partnersMonth, partnersAll].forEach(bag => {
          const prev = bag[m.id] || {name:m.name, mins:0};
          bag[m.id] = {name:m.name || prev.name, mins:prev.mins + 1};
        });
        changed = true;
      });
      if(changed) dirty.current = true;
      return changed ? {...s0, lock:{...lk, partners, partnersMonth, partnersAll}} : s0;
    });
    const i = setInterval(tick, 60000);
    return () => clearInterval(i);
  }, [isParent, room, running, user.id]);

  // Anything from a past day that never got done follows you to today, if the
  // toggle in List It is on. Repeating tasks are left alone, they come back
  // on their own schedule.
  useEffect(() => {
    if(!ready || isParent) return;
    const carry = () => {
      if(!(store.settings || DEFAULT_SETTINGS).carryOver) return;
      const today = iso(new Date());
      setStore(s0 => {
        let moved = 0;
        const tasks = s0.tasks.map(t => {
          if(t.scope !== 'daily' || isRepeat(t)) return t;
          if(!t.date || t.date >= today || t.done) return t;
          moved++;
          return {...t, date: today};
        });
        if(!moved) return s0;
        dirty.current = true;
        return {...s0, tasks};
      });
    };
    carry();
    const i = setInterval(carry, 60000);
    return () => clearInterval(i);
  }, [ready, isParent, store.settings]);

  // Focus stats are a daily figure and the report is a weekly one, so two
  // things roll over here: the day counters at midnight, and the study-partner
  // tally when a new week starts. Last week is kept as a one-line summary.
  useEffect(() => {
    if(!ready) return;
    const rollover = () => setStore(s0 => {
      const today = iso(new Date());
      const wk = weekKey(new Date());
      const lk = s0.lock || {};
      const mo0 = monthKey(new Date());
      const dayChanged = lk.day !== today;
      const weekChanged = (lk.weekOf || wk) !== wk;
      const monthChanged = (lk.monthOf || mo0) !== mo0;
      if(!dayChanged && !weekChanged && !monthChanged) return s0;

      let next = {...lk};

      if(dayChanged){
        const history = (lk.day && (lk.minutes || lk.sessions))
          ? [...(lk.history || []), {date:lk.day, minutes:lk.minutes || 0, sessions:lk.sessions || 0}].slice(-400)
          : (lk.history || []);
        next = {...next, sessions:0, minutes:0, seconds:0, day:today, history};
      }

      if(weekChanged){
        // summarise the week that just ended before clearing it
        const prevStart = lk.weekOf;
        const inPrev = (next.history || []).filter(h => prevStart && weekKey(parseISO(h.date)) === prevStart);
        const top = Object.values(lk.partners || {}).sort((a,b) => b.mins - a.mins)[0];
        next = {...next,
          weeks: prevStart ? [...(lk.weeks || []), {
            weekOf: prevStart,
            minutes: inPrev.reduce((a,h) => a + (h.minutes || 0), 0),
            sessions: inPrev.reduce((a,h) => a + (h.sessions || 0), 0),
            top: top ? top.name : null,
          }].slice(-104) : (lk.weeks || []),
          lastWeek: prevStart ? {
            weekOf: prevStart,
            minutes: inPrev.reduce((a,h) => a + (h.minutes || 0), 0),
            sessions: inPrev.reduce((a,h) => a + (h.sessions || 0), 0),
            top: top ? top.name : null,
            topMins: top ? top.mins : 0,
          } : (lk.lastWeek || null),
          partners: {},
          weekOf: wk,
        };
      }
      const mo = monthKey(new Date());
      if((lk.monthOf || mo) !== mo){
        const prevMonth = lk.monthOf;
        const inPrevM = (next.history || []).filter(h => prevMonth && h.date.slice(0,7) === prevMonth);
        const topM = Object.values(lk.partnersMonth || {}).sort((a,b) => b.mins - a.mins)[0];
        next = {...next,
          months: prevMonth ? [...(lk.months || []), {
            monthOf: prevMonth,
            minutes: inPrevM.reduce((a,h) => a + (h.minutes || 0), 0),
            sessions: inPrevM.reduce((a,h) => a + (h.sessions || 0), 0),
            top: topM ? topM.name : null,
          }].slice(-60) : (lk.months || []),
          partnersMonth:{}, monthOf:mo};
      }
      if(!lk.monthOf) next.monthOf = mo;
      if(!lk.weekOf) next.weekOf = wk;
      return {...s0, lock:next};
    });
    rollover();
    const i = setInterval(rollover, 60000);
    return () => clearInterval(i);
  }, [ready]);

  // Another device saved something newer: adopt it, unless we are mid-edit.
  useEffect(() => {
    if(!ready || isParent) return;
    return watchPlanner(user.id, res => {
      if(!res || !res.data || res.error || res.empty) return;
      if((res.at || 0) <= lastPush.current + 1500) return;   // our own write echoing back
      if(dirty.current) return;                              // we have edits not sent yet
      lastPush.current = res.at;
      setStore(res.data);
      toast('Updated from another device');
    });
  }, [ready, isParent, user.id, toast]);

  // One pass paints the whole appearance: palette tokens, then the section,
  // block and event colours, then any manual override on top. 'Match device'
  // keeps listening, so a phone that switches at sunset switches PlanIt too.
  useEffect(() => {
    applyAppearance(settings);
    if(modeOf(settings) !== 'system') return;
    let mq;
    try { mq = window.matchMedia('(prefers-color-scheme: dark)'); } catch(e){ return; }
    if(!mq || !mq.addEventListener) return;
    const repaint = () => applyAppearance(settings);
    mq.addEventListener('change', repaint);
    return () => mq.removeEventListener('change', repaint);
  }, [settings.palette, settings.mode, settings.theme, settings.accents,
      settings.blockColors, settings.eventColors, settings.bg]);

  useEffect(() => {
    if(!ready || isParent) return;
    const recheck = async () => {
      if(document.hidden || dirty.current) return;
      const remote = await fetchPlanner(user.id);
      if(remote && (remote.at || 0) > lastPush.current + 1500){
        lastPush.current = remote.at;
        setStore(remote.data);
      }
    };
    document.addEventListener('visibilitychange', recheck);
    window.addEventListener('focus', recheck);
    return () => {
      document.removeEventListener('visibilitychange', recheck);
      window.removeEventListener('focus', recheck);
    };
  }, [ready, isParent, user.id]);

  // A small live status beside the planner: in a room, focusing, or neither.
  useEffect(() => {
    if(isParent || !ready) return;
    const write = () => db().collection('planner').doc(user.id).set({
      status:{ room: room || null, focusing: running, at: Date.now() }
    }, {merge:true}).catch(() => {});
    write();
    const hb = setInterval(write, 60000);
    return () => clearInterval(hb);
  }, [isParent, ready, room, running, user.id]);

  // Reminders. In the app these are handed to iOS in advance, so they arrive
  // with PlanIt closed. iOS holds at most 64 pending, so PlanIt books a rolling
  // window of the next 50 and tops it up every time the app is opened, the
  // same trick calendar apps use. On the web there is no pre-scheduling, so it
  // falls back to firing while a tab is open.
  const NOTIF_CAP = 50, NOTIF_DAYS = 14;
  const fired = useRef({});

  const upcomingReminders = useCallback(() => {
    const out = [];
    const now = Date.now();
    const lead = (settings.notify && settings.notify.before) || 10;
    for(let i = 0; i < NOTIF_DAYS; i++){
      const day = addDays(new Date(), i);
      const dk = iso(day);
      store.tasks.forEach(t => {
        if(t.scope !== 'daily' || !t.start || !t.remind) return;
        if(!occursOn(t, dk) || isDone(t, dk)) return;
        const at = new Date(day);
        at.setHours(0, toMin(t.start) - lead, 0, 0);
        if(at.getTime() <= now + 60000) return;        // already gone
        out.push({id: notifId(t.id + dk), title: t.title,
          body: `Starts at ${pretty(t.start)}`, schedule:{at}});
      });
    }
    return out.sort((x,y) => x.schedule.at - y.schedule.at).slice(0, NOTIF_CAP);
  }, [store.tasks, settings.notify]);

  useEffect(() => {
    const n = Notifs();

    // ---- native: book them ahead, and refresh whenever the app is opened ----
    if(n){
      let alive = true;
      const sync = async () => {
        if(!alive) return;
        try{
          const pending = await n.getPending();
          if(pending && pending.notifications && pending.notifications.length){
            await n.cancel({notifications: pending.notifications.map(x => ({id:x.id}))});
          }
          if(!settings.notify.on) return;
          const list = upcomingReminders();
          if(list.length) await n.schedule({notifications:list});
        }catch(e){}
      };
      const onShow = () => { if(!document.hidden) sync(); };
      sync();
      document.addEventListener('visibilitychange', onShow);
      return () => {
        alive = false;
        document.removeEventListener('visibilitychange', onShow);
      };
    }

    // ---- web: no pre-scheduling, so fire them while the tab is open ----
    if(!settings.notify.on) return;
    if(!('Notification' in window) || Notification.permission !== 'granted') return;
    const check = () => {
      const now = new Date();
      const today = iso(now);
      const mins = now.getHours()*60 + now.getMinutes();
      store.tasks.forEach(t => {
        if(t.scope !== 'daily' || !t.start || !t.remind) return;
        if(!occursOn(t, today) || isDone(t, today)) return;
        const lead = toMin(t.start) - mins;
        if(lead <= settings.notify.before && lead >= 0 && !fired.current[t.id]){
          fired.current[t.id] = true;
          fireNotification(t.title, `Starts at ${pretty(t.start)}`, t.id);
        }
      });
    };
    check();
    const i = setInterval(check, 30000);
    return () => clearInterval(i);
  }, [settings.notify.on, settings.notify.before, store.tasks, upcomingReminders]);

  // mutators
  const _addTask    = t => setStore(s => ({...s, tasks:[...s.tasks, {...t, id:uid()}]}));
  const _updateTask = (id,p) => setStore(s => ({...s, tasks:s.tasks.map(t => t.id === id ? {...t, ...p} : t)}));
  const _removeTask = id => setStore(s => ({...s, tasks:s.tasks.filter(t => t.id !== id)}));
  const _addEvent    = e => setStore(s => ({...s, events:[...s.events, {...e, id:uid()}]}));
  const _updateEvent = (id,p) => setStore(s => ({...s, events:s.events.map(e => e.id === id ? {...e, ...p} : e)}));
  const _removeEvent = id => setStore(s => ({...s, events:s.events.filter(e => e.id !== id)}));
  // Canvas replaces its own slice of the list in one go, so it needs the whole array
  const _setEvents   = next => setStore(s => ({...s, events:typeof next === 'function' ? next(s.events) : next}));
  const _addEc    = e => setStore(s => ({...s, ecs:[...s.ecs, {...e, id:uid()}]}));
  const _updateEc = (id,p) => setStore(s => ({...s, ecs:s.ecs.map(e => e.id === id ? {...e, ...p} : e)}));
  const _removeEc = id => setStore(s => ({...s, ecs:s.ecs.filter(e => e.id !== id)}));

  const addTask = guard(_addTask), updateTask = guard(_updateTask), removeTask = guard(_removeTask);
  const addEvent = guard(_addEvent), updateEvent = guard(_updateEvent), removeEvent = guard(_removeEvent);
  const setEvents = guard(_setEvents);
  const addEc = guard(_addEc), updateEc = guard(_updateEc), removeEc = guard(_removeEc);

  // Connected feeds keep themselves current. This lives up here rather than in
  // the panel so it runs whether or not Organize It is the tab you are on, and
  // it is off for a parent, who is looking at someone else's planner.
  const feedSync = useFeedSync({
    settings, setSettings, events:store.events, setEvents,
    enabled: ready && !isParent
  });

  const meta = TABS.find(t => t.id === tab);
  const accentHex = sectionHex(settings, tab);

  // the lock screen takes its mood from whatever Lock It is set to
  const lockHex = sectionHex(settings, 'lock');
  const shieldStyle = useMemo(() => {
    const [h, sat] = hexToHsl(lockHex);
    const S = Math.max(8, Math.min(58, sat));          // keep it deep, never neon
    return {
      background: hsl(h, S, 13),
      backgroundImage: `linear-gradient(180deg, ${hsl(h, S, 15)}, ${hsl(h, S, 9)})`,
      '--shield-dim': hsl(h, Math.max(12, Math.min(40, sat)), 78)
    };
  }, [lockHex]);
  const goDaily = d => { setDate(d); setTab('organize'); setSub(p => ({...p, organize:'daily'})); };

  if(!ready) return <div style={{display:'grid',placeItems:'center',height:'100%',color:'var(--ink35)'}}>Opening your planner…</div>;

  return (
    <div className={'app' + (railOpen ? ' railopen' : '')} style={{'--accent':accentHex, '--accent-soft':hexRgba(accentHex, .16), '--accent-ink':inkOn(accentHex)}}>
      <nav className="rail" aria-label="Sections">
        <div className="brand"><Mark size={64} /><b>PlanIt</b></div>
        {TABS.filter(t => t.id !== 'settings'
          && (!t.parentOnly || isParent) && (!t.adminOnly || isAdmin)
          && !(isAdmin && !t.adminOnly)).map(t => (
          <button key={t.id} className={'tab' + (tab === t.id ? ' on' : '')} style={{'--tabcolor':t.color}}
            disabled={running && t.id !== 'lock'}
            title={running && t.id !== 'lock' ? 'Locked until the session ends' : t.label}
            onClick={() => { setTab(t.id); setRailOpen(false); }} aria-current={tab === t.id}>
            <span className="tabrule" />
            <span><span className="lbl">{t.label}</span><span className="sub">{t.sub}</span></span>
          </button>
        ))}

        <div className="rail-bottom">
          <button className="tab" onClick={() => { setNewsOpen(true); setRailOpen(false); }} title="Notifications">
            <span className="tabrule" style={{'--tabcolor':'var(--ink35)'}} />
            <span><span className="lbl">Notifications</span><span className="sub">News</span></span>
            {unreadNews > 0 && <i className="tabcount">{unreadNews}</i>}
          </button>
          {TABS.filter(t => t.id === 'settings').map(t => (
            <button key={t.id} data-tour="settings" className={'tab' + (tab === t.id ? ' on' : '')} style={{'--tabcolor':t.color}}
              disabled={running} title={running ? 'Locked until the session ends' : t.label}
              onClick={() => { setTab(t.id); setRailOpen(false); }} aria-current={tab === t.id}>
              <span className="tabrule" />
              <span><span className="lbl">{t.label}</span><span className="sub">{t.sub}</span></span>
            </button>
          ))}
          <div className="rail-account">
            <Initial name={user.username || user.email} size={34} className="railav" />
            <div className="who">
              <b>{user.username}</b>
              <small className="streak" title={`${streak} days in a row`}>
                <FireIcon level={2} /> {streak} day{streak === 1 ? '' : 's'}
              </small>
            </div>
            <button className="iconbtn" onClick={onSignOut} title="Sign out" aria-label="Sign out"><IconOut /></button>
          </div>
          <div className="rail-foot">
            {running ? 'Focus session running. Other tabs open when the timer ends.' : 'Everything saves as you type.'}
            {!running && <button className="resetlink" onClick={resetPlanner}>Clear all planner data</button>}
          </div>
        </div>
      </nav>

      <button className="menubtn" onClick={() => setRailOpen(v => !v)} aria-label="Menu">
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <path d={railOpen ? "M5 5l10 10M15 5L5 15" : "M3 6h14M3 10h14M3 14h14"}
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
      </button>
      {railOpen && <div className="railscrim" onClick={() => setRailOpen(false)} />}

      <main className={'pane' + (isParent && tab !== 'watch' && tab !== 'settings' ? ' readonly' : '')}>
        <div className="pane-head">
          <div className="title-wrap">
            <div>
              <h1>{meta.title}</h1>
              <div className="tagline">{meta.tagline}</div>
            </div>
          </div>
          <div className="tape" role="tablist">
            {meta.subs.map(([k,l]) => (
              <button key={k} role="tab" aria-selected={sub[tab] === k}
                className={sub[tab] === k ? 'on' : ''} onClick={() => setSub(p => ({...p,[tab]:k}))}>{l}</button>
            ))}
          </div>
          {!isParent && pendingList.length > 0 && (
            <div className="linkbanner">
              <span>
                {pendingList.length === 1 ? 'A parent has asked' : `${pendingList.length} parents have asked`} to follow your planner.
              </span>
              <button className="btn sm" onClick={() => setNewsOpen(true)}>Review</button>
            </div>
          )}

          {isParent && tab !== 'watch' && tab !== 'settings' && (
            !viewChildId
              ? <div className="viewonly">
                  No child connected yet.
                  <button className="btn sm" style={{marginLeft:10}} onClick={() => setTab('watch')}>Go to View It</button>
                </div>
              : childStore === null
              ? <div className="viewonly">Loading {viewChildName}'s planner…</div>
              : childStore.error
              ? <div className="viewonly" style={{background:'var(--rule-soft)',borderColor:'var(--rule-line)',color:'var(--rule)'}}>
                  {childStore.error}
                </div>
              : childStore.empty
              ? <div className="viewonly" style={{background:'var(--brag-soft)',borderColor:'var(--brag-line)',color:'var(--brag)'}}>
                  {viewChildName} hasn't uploaded anything yet. Ask them to open PlanIt and change something.
                </div>
              : <div className="viewonly">
                  Viewing <b>{viewChildName}</b>'s planner, read only.
                  <button className="btn sm" style={{marginLeft:10}} onClick={() => setTab('watch')}>Switch child</button>
                </div>
          )}
          <div className="divider" />
        </div>

        <div className="pane-body">
          {tab === 'organize' && sub.organize === 'daily' &&
            <Daily date={date} setDate={setDate} tasks={view.tasks} add={addTask} update={updateTask} remove={removeTask} toast={toast}
              day={view.day || user.day || DEFAULT_DAY} energyBase={energyBase}
              onEditBase={isParent ? null : () => setBaseEdit(true)}
              setDay={d => { dirty.current = true; setStore(s => ({...s, day:d})); }} />}
          {tab === 'organize' && sub.organize === 'weekly' &&
            <Weekly date={date} setDate={setDate} tasks={view.tasks} events={view.events} addEvent={addEvent}
              updateEvent={updateEvent} removeEvent={removeEvent} setDaily={goDaily} update={updateTask}
              remove={removeTask} add={addTask} day={view.day || user.day || DEFAULT_DAY} toast={toast}
              energyBase={energyBase} baseFor={baseFor} />}
          {tab === 'organize' && sub.organize === 'monthly' &&
            <Monthly date={date} setDate={setDate} events={view.events} addEvent={addEvent} updateEvent={updateEvent}
              removeEvent={removeEvent} setEvents={isParent ? null : setEvents} setDaily={goDaily} toast={toast} tasks={view.tasks}
              update={updateTask} remove={removeTask} energyBase={energyBase} baseFor={baseFor}
              settings={settings} setSettings={setSettings} canvasOpen={canvasRef}
              feedSync={feedSync} />}

          {tab === 'list' &&
            <ListIt sub={sub.list} date={date} setDate={setDate} tasks={view.tasks} add={addTask} update={updateTask} remove={removeTask}
              carryOver={(store.settings || DEFAULT_SETTINGS).carryOver !== false && !!(store.settings || DEFAULT_SETTINGS).carryOver}
              setCarryOver={v => setSettings({...(store.settings || DEFAULT_SETTINGS), carryOver:v})}
              toast={toast}
              day={view.day || user.day || DEFAULT_DAY}
              setTab={t => { setTab(t); setSub(p => ({...p, organize:'daily'})); }} />}

          {tab === 'brag' &&
            <BragIt sub={sub.brag} ecs={view.ecs} add={addEc} update={updateEc} remove={removeEc}
              toast={toast} stage={user.stage} settings={settings} setSettings={setSettings} user={user} />}

          {tab === 'admin' && <AdminNumbers sub={sub.admin} user={user} />}

          {tab === 'watch' && <ViewIt user={user} toast={toast} viewChildId={viewChildId}
            childStore={childStore} goTab={t => setTab(t)}
            setViewChild={(id, name) => { setViewChildId(id); setViewChildName(name); }} />}

          {tab === 'settings' &&
            <Settings sub={sub.settings} user={user} onSignOut={onSignOut} settings={settings}
              setSettings={setSettings} toast={toast} onLinksChange={refreshLinks}
              streakInfo={sk} canRestore={canRestore} onUseFreeze={useFreeze}
              energyBase={baseFor(iso(new Date()))}
              applyBase={(v, scope) => applyBase(v, scope, iso(new Date()))}
              sync={sync} onSyncNow={() => {
                setSync({state:'saving'});
                pushPlanner(user.id, store)
                  .then(() => { setSync({state:'ok', at:Date.now()}); toast('Planner uploaded'); })
                  .catch(e => setSync({state:'err', msg:e.message || e.code}));
              }} />}

          {tab === 'lock' &&
            <LockIt sub={sub.lock} lock={view.lock || {}} running={running} left={left} minutes={minutes}
              start={startTimer} pause={pauseTimer} reset={resetTimer} toast={toast}
              sound={(store.settings || DEFAULT_SETTINGS).sound !== false}
              setSound={v => setSettings({...(store.settings || DEFAULT_SETTINGS), sound:v})}
              haptics={(store.settings || DEFAULT_SETTINGS).haptics !== false}
              setHapticsPref={v => setSettings({...(store.settings || DEFAULT_SETTINGS), haptics:v})}
              mode={mode} setMode={setMode} pomo={pomo} setPomo={setPomo}
              phase={phase} cycle={cycle} addCycle={addCycle}
              camOn={camOn} setCamOn={toggleCam} camFull={camFull}
              camCount={othersOn + (camOn ? 1 : 0)} remoteStreams={remoteStreams} camTick={camTick}
              room={room} setRoom={setRoom} members={members} myId={user.id}
              name={roomName} setName={setRoomName} />}
        </div>
      </main>

      {running && ReactDOM.createPortal(
        <div className="shield" style={shieldStyle}>
          <div className="shieldinner">
          <div className="eyebrow" style={{color:'var(--shield-dim)',letterSpacing:'.2em'}}>
            {mode === 'pomo' && phase
              ? (phase === 'work' ? `Work · cycle ${cycle} of ${pomo.cycles}` : 'Break')
              : 'Locked in'}
          </div>
          <div className="big">{pad(Math.floor(left/60))}:{pad(left%60)}</div>
          <div className="sub">{mode === 'pomo' && phase === 'break'
            ? 'Stretch, get water, look out a window. Work starts again on its own.'
            : 'PlanIt is closed until the timer ends. Put the phone face down.'}</div>
          {room && (
            <div className="seats">
              <Seat me name={roomName || 'You'} focusing
                stream={camOn ? camStream.current : null} tick={camTick}
                bursts={bursts[user.id] || []} />
              {members.filter(m => m.id !== user.id).slice(0,8).map(m => (
                <Seat key={m.id} name={m.name} focusing={m.focusing}
                  stream={remoteStreams[m.id] || null} tick={camTick}
                  bursts={bursts[m.id] || []}
                  note={m.camOn && !remoteStreams[m.id]
                    ? (peerStatus[m.id] === 'failed' ? 'no route' : 'connecting…') : null} />
              ))}
              {Array.from({length: Math.max(0, 8 - members.filter(m => m.id !== user.id).length)}, (_,i) => (
                <div key={'e'+i} className="seat empty"><span>open</span></div>
              ))}
            </div>
          )}

          {room && (
            <div className="reactbar">
              {REACTIONS.map(r => (
                <button key={r.kind} onClick={() => react(r.kind)} title={r.label} aria-label={r.label}>
                  <span>{r.short}</span>
                </button>
              ))}
            </div>
          )}

          <button className="listtoggle" onClick={() => setShieldList(v => !v)}>
            {shieldList ? 'Hide my list' : 'My list'}
          </button>

          {shieldList && (() => {
            const today = iso(new Date());
            const todays = store.tasks
              .filter(t => t.scope === 'daily' && occursOn(t, today))
              .sort((a,b) => (a.start || '~').localeCompare(b.start || '~'));
            const scheduled = todays.filter(t => t.start);
            const loose = todays.filter(t => !t.start);
            return (
              <div className="shieldlist">
                <div className="spread" style={{marginBottom:10}}>
                  <div className="shieldtabs">
                    <button className={shieldTab === 'list' ? 'on' : ''} onClick={() => setShieldTab('list')}>List It</button>
                    <button className={shieldTab === 'sched' ? 'on' : ''} onClick={() => setShieldTab('sched')}>Organize It</button>
                  </div>
                  <button className="x" style={{color:'#fff'}} onClick={() => setShieldList(false)} aria-label="Close">×</button>
                </div>
                <p className="shieldnote">The timer keeps running while this is open.</p>

                {shieldTab === 'list' ? (
                  todays.length === 0
                    ? <p className="shieldnote">Nothing on today's list.</p>
                    : todays.map(t => (
                      <div key={t.id} className={'slrow' + (isDone(t, today) ? ' done' : '')}>
                        <Check on={isDone(t, today)} onClick={() => updateTask(t.id, toggleDone(t, today))} />
                        <span className="sltitle">{t.title}</span>
                        {t.start && <span className="mono sltime">{pretty(t.start)}</span>}
                      </div>
                    ))
                ) : (
                  scheduled.length === 0
                    ? <p className="shieldnote">Nothing scheduled today.</p>
                    : <>
                        {scheduled.map(t => (
                          <div key={t.id} className={'slsched' + (isDone(t, today) ? ' done' : '')}
                            style={{borderLeftColor: blockHex(t.color) || 'rgba(255,255,255,.35)'}}>
                            <div className="mono sltime">{pretty(t.start)} – {pretty(t.end)}</div>
                            <div className="sltitle">{t.title}</div>
                          </div>
                        ))}
                        {loose.length > 0 && (
                          <p className="shieldnote" style={{marginTop:10}}>
                            {loose.length} not scheduled yet
                          </p>
                        )}
                      </>
                )}
              </div>
            );
          })()}

          <div className="shieldbtns">
            <button className="btn" onClick={pauseTimer}>End session early</button>
            <button className="btn" onClick={() => resetTimer()}>End &amp; reset</button>
            {room && (
              <button className="btn" disabled={!camOn && camFull} onClick={() => toggleCam(!camOn)}>
                {camOn ? 'Camera off' : camFull ? `Cameras full (${CAM_LIMIT})` : 'Camera on'}
              </button>
            )}
          </div>
          </div>
        </div>, document.body)}

      {!store.day && !user.day && (
        <DayEditor first day={DEFAULT_DAY} onClose={() => setStore(s => ({...s, day:DEFAULT_DAY}))}
          onSave={d => setStore(s => ({...s, day:d}))} />
      )}

      {streakPop && tourDone && ReactDOM.createPortal(
        <StreakPopup
          streak={sk.streak} prev={sk.prev || sk.best} freezes={sk.freezes}
          state={canRestore ? 'canfreeze'
            : (sk.brokenAt === iso(new Date()) && sk.freezes === 0) ? 'out'
            : (sk.usedFreeze ? 'frozen' : 'alive')}
          onUseFreeze={() => { useFreeze(); closeStreakPop(); }}
          onBuy={() => { closeStreakPop(); setTab('settings'); setSub(p => ({...p, settings:'account'})); }}
          onClose={closeStreakPop} />, document.body)}

      {!tourDone && ready && (
        <Tutorial user={user} energyBase={energyBase}
          setEnergyBase={v => setSettings({...(store.settings || DEFAULT_SETTINGS), energyBase:v})}
          goTo={(t, sb) => { setTab(t); if(sb) setSub(p => ({...p, [t]:sb})); }}
          onDone={() => setTourDone(true)} />
      )}

      {canvasTip && (
        <CanvasNotice
          onClose={() => { setCanvasTip(false); setSettings({...settings, canvasSeen:true}); }}
          onOpen={() => {
            setCanvasTip(false);
            setSettings({...settings, canvasSeen:true});
            setTab('organize');
            setSub(p => ({...p, organize:'monthly'}));
            // let the month draw before scrolling the panel into view
            setTimeout(() => {
              const el = canvasRef.current;
              if(el && el.scrollIntoView) el.scrollIntoView({behavior:'smooth', block:'center'});
            }, 420);
          }} />
      )}

      {baseEdit && <EnergyBaseEditor value={energyBase} onClose={() => setBaseEdit(false)} onApply={applyBase} />}

      {newsOpen && <NewsPanel onClose={() => setNewsOpen(false)} readIds={readNews} markRead={markNewsRead}
        requests={pendingList} onDecide={decideLink} report={report} reportDue={isSaturday}
        referralReady={referralReady} refCount={refCount} isAdmin={isAdmin}
        onOpenReferral={() => { setNewsOpen(false); setTab('settings'); setSub(p => ({...p, settings:'account'})); }}
        onOpenReports={() => { setNewsOpen(false); setTab('lock'); setSub(p => ({...p, lock:'reports'})); }} />}

      {toastMsg && <div className="toast">{toastMsg}</div>}
    </div>
  );
}

/* ============ ROOT ============ */
// A crash anywhere below this used to leave a white page with nothing to go on.
class Boundary extends React.Component {
  constructor(p){ super(p); this.state = {err:null}; }
  static getDerivedStateFromError(err){ return {err}; }
  componentDidCatch(err, info){ console.error('[planit] crash', err, info); }
  render(){
    if(!this.state.err) return this.props.children;
    const msg = this.state.err.message || String(this.state.err);
    return (
      <div className="crash">
        <h2>PlanIt hit a problem</h2>
        <p>Your planner is safe. This is a display error, not lost data.</p>
        <pre>{msg}</pre>
        <div className="row" style={{gap:9, justifyContent:'center'}}>
          <button className="btn primary" onClick={() => window.location.reload()}>Reload</button>
          <button className="btn" onClick={() => {
            navigator.clipboard.writeText(msg + '\n' + (this.state.err.stack || '')).catch(() => {});
          }}>Copy the error</button>
        </div>
      </div>
    );
  }
}

function Booting(){
  const [slow, setSlow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setSlow(true), 7000); return () => clearTimeout(t); }, []);
  return (
    <div className="booting">
      <div>Opening your planner…</div>
      {slow && (
        <div className="bootslow">
          This is taking longer than it should. Firestore may not be reachable,
          check that the database exists and its rules are published, then reload.
        </div>
      )}
    </div>
  );
}

/* ============ LANDING PAGE ============
   The public homepage. Everything a visitor sees is built from the planner's
   own components and palette tokens, so the page cannot drift away from the
   product it is advertising. */

// The five parts of PlanIt, in the order a student meets them. `sub` is the
// label the real navigation rail shows underneath each name.
const LFEATURES = [
  {id:'list', name:'List It', color:'var(--list)', sub:'To-do',
   lead:'Write it down the second you hear it.',
   body:"A deadline you heard in the corridor does not need a time yet. Put it in the list, decide when later, when you can see your week. Daily, weekly and monthly lists, and goals that sit above the day to day."},
  {id:'organize', name:'Organize It', color:'var(--org)', sub:'Calendar',
   lead:'Then decide when it actually happens.',
   body:"Drag anything from the list onto the day and it has a time. Classes that repeat go in once. Daily, weekly and monthly views of the same schedule, and an energy count that tells you when you have booked more than you have in you."},
  {id:'lock', name:'Lock It', color:'var(--lock)', sub:'Study mode',
   lead:'Sit down and do it.',
   body:"A timer that covers the screen until the session ends, on its own or as a full pomodoro run. Open a room, share the code, and up to nine of you work at the same time. Every week you get a report of what you actually did."},
  {id:'brag', name:'Brag It', color:'var(--brag)', sub:'Extracurriculars',
   lead:'Keep the receipts.',
   body:"Every club, job, award, volunteer hour and certificate, with the dates, in the fields the Common App asks for. Log it the week it happens instead of trying to remember in your senior year, then export the whole thing as a résumé."},
  {id:'watch', name:'View It', color:'var(--watch)', sub:'Parent view',
   lead:"If you're a parent, view your student's work.",
   body:"Ask your child for access and they accept it from their own account. From then on you can see the week they have planned, what they have actually finished, how long they studied and how long their streak is. It updates as they go, so you are not asking at dinner."},
];

/* ============ LANDING: the live demo ============
   Built on the planner's own classes (.grid-scroll, .hourrow, .block, .tray,
   .todo) rather than lookalikes, so what a visitor drags here is the real
   thing, down to the hour height and the dashed half-hour line. It keeps its
   own state and touches nothing: reloading the page puts it back. */

const D_START = 420, D_END = 1260;                 // 7am to 9pm
const D_HOURS = Array.from({length:(D_END - D_START)/60}, (_, i) => D_START + i*60);
const D_SNAP = 15;
const dPretty = m => {
  const h = Math.floor(m/60) % 24, mi = m % 60;
  const ap = h < 12 ? 'AM' : 'PM', h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(mi).padStart(2,'0')} ${ap}`;
};
// `c` is a block colour id, the same ids the planner saves on a real block, so
// these pick up whichever palette the visitor is seeing.
const D_SEED = [
  {id:'d1', title:'AP Chemistry',        start:480,  len:75, c:'indigo', placed:true},
  {id:'d2', title:'Lit essay',           start:660,  len:60, c:'amber',  placed:true},
  {id:'d3', title:'Cross country',       start:870,  len:90, c:'green',  placed:true},
  {id:'d4', title:'Reread Gatsby ch. 4', start:null, len:45, c:'pink',   placed:false},
  {id:'d5', title:'Email Ms. Reyes',     start:null, len:15, c:'teal',   placed:false},
];

function LiveDemo(){
  const [items, setItems] = useState(D_SEED);
  const [drag, setDrag] = useState(null);          // {id, from, offsetMin, x, y}
  const [editing, setEditing] = useState(null);    // id being renamed
  const [touched, setTouched] = useState(false);
  const gridRef = useRef(null);
  const liveRef = useRef(null);                    // announcements for screen readers

  const placed = items.filter(i => i.placed).sort((a,b) => a.start - b.start);
  const tray   = items.filter(i => !i.placed);

  const say = msg => { if(liveRef.current) liveRef.current.textContent = msg; };

  // y on screen -> minutes in the day, snapped
  const yToMin = clientY => {
    const el = gridRef.current;
    if(!el) return D_START;
    const r = el.getBoundingClientRect();
    const raw = D_START + ((clientY - r.top) / ROW) * 60;
    const snapped = Math.round(raw / D_SNAP) * D_SNAP;
    return Math.max(D_START, Math.min(D_END - D_SNAP, snapped));
  };

  // where this item sits right now, following the pointer while it is held
  const liveStart = it => {
    if(!(drag && drag.id === it.id)) return it.start;
    return Math.max(D_START, Math.min(D_END - it.len, yToMin(drag.y) - drag.offset));
  };

  const onDown = (e, item, from) => {
    if(editing) return;
    e.preventDefault();
    const offset = from === 'block'
      ? yToMin(e.clientY) - item.start
      : 0;
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch(err){}
    setDrag({id:item.id, from, offset, x:e.clientX, y:e.clientY, over:false});
  };

  const onMove = e => {
    if(!drag) return;
    const el = gridRef.current;
    let over = false;
    if(el){
      const r = el.getBoundingClientRect();
      over = e.clientX >= r.left && e.clientX <= r.right
          && e.clientY >= r.top  && e.clientY <= r.bottom;
    }
    setDrag(d => d && {...d, x:e.clientX, y:e.clientY, over});
  };

  const onUp = e => {
    if(!drag) return;
    const d = drag;
    setDrag(null);
    const el = gridRef.current;
    if(!el) return;
    const r = el.getBoundingClientRect();
    const inside = e.clientX >= r.left && e.clientX <= r.right
                && e.clientY >= r.top  && e.clientY <= r.bottom;
    setItems(list => list.map(it => {
      if(it.id !== d.id) return it;
      if(!inside){
        // dragged off the grid: back to the list, the way the planner does it
        if(d.from === 'block'){ say(it.title + ' moved back to the list'); return {...it, placed:false, start:null}; }
        return it;
      }
      const start = Math.max(D_START, Math.min(D_END - it.len, yToMin(e.clientY) - d.offset));
      say(it.title + ' at ' + dPretty(start));
      return {...it, placed:true, start};
    }));
    setTouched(true);
  };

  // a double-click on empty space adds something, same as the real grid
  const addAt = clientY => {
    const start = yToMin(clientY);
    const id = 'n' + Math.random().toString(36).slice(2,7);
    setItems(l => [...l, {id, title:'New block', start, len:60, c:'slate', placed:true}]);
    setEditing(id); setTouched(true);
  };

  const rename = (id, title) => setItems(l => l.map(i => i.id === id ? {...i, title} : i));
  const reset = () => { setItems(D_SEED); setTouched(false); setEditing(null); say('Demo reset'); };

  const dragging = drag && items.find(i => i.id === drag.id);

  return (
    <div className="demo-wrap" onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
      <div className="demo-bar">
        <span className="demo-try">Try it for yourself</span>
        <span className="demo-tips">
          Drag from the list onto a time. Drag a block to move it, or off the grid to put it back.
          Double-click to rename, or double-click an empty hour to add one.
        </span>
        {touched && <button className="btn sm" onClick={reset}>Reset</button>}
      </div>

      <div className="demo-app">
        <div className="demo-tray">
          <div className="eyebrow" style={{marginBottom:8}}>Unscheduled, from List It</div>
          {tray.length === 0
            ? <div className="empty" style={{padding:'16px 12px', fontSize:12.5}}>
                <b>Nothing waiting</b>Everything has a time.
              </div>
            : tray.map(t => (
              <div key={t.id} className="tray-item" onPointerDown={e => onDown(e, t, 'tray')}
                style={{opacity: drag && drag.id === t.id ? .4 : 1}}
                title="Drag onto the schedule">
                <span style={{color:'var(--ink35)', marginTop:3}}><IconGrip /></span>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontWeight:600, fontSize:13.5}}>{t.title}</div>
                  <div style={{fontSize:11, color:'var(--ink35)'}}>{t.len} min</div>
                </div>
              </div>
            ))}
        </div>

        <div className={'demo-grid grid-scroll' + (drag && drag.over ? ' demo-over' : '')}>
          <div className="grid-inner" ref={gridRef}>
            {D_HOURS.map(m => (
              <div className="hourrow" key={m}>
                <div className="h mono">{dPretty(m).replace(':00','')}</div>
                <div className="slot" onDoubleClick={e => addAt(e.clientY)} />
              </div>
            ))}
            {/* where a dragged item would land */}
            {drag && drag.over && (() => {
              const it = items.find(i => i.id === drag.id);
              if(!it) return null;
              const st = liveStart(it);
              return <div className="demo-drop" style={{
                top:(st - D_START)/60*ROW + 1, height:it.len/60*ROW - 3}} />;
            })()}
            <div className="blocks">
              {placed.map(t => {
                const held = drag && drag.id === t.id;
                const top = (held ? liveStart(t) : t.start);
                return (
                <div key={t.id}
                  className={'block' + (held ? ' dragging' : '')}
                  style={{top:(top - D_START)/60*ROW + 1, height:t.len/60*ROW - 3,
                          left:6, right:12, width:'auto',
                          '--bc-soft':`var(--bc-${t.c}-soft)`, borderLeftColor:`var(--bc-${t.c})`}}
                  onPointerDown={e => onDown(e, t, 'block')}
                  onDoubleClick={() => setEditing(t.id)}>
                  {editing === t.id
                    ? <input className="demo-rename" autoFocus defaultValue={t.title}
                        onPointerDown={e => e.stopPropagation()}
                        onBlur={e => { rename(t.id, e.target.value.trim() || t.title); setEditing(null); }}
                        onKeyDown={e => {
                          if(e.key === 'Enter'){ rename(t.id, e.target.value.trim() || t.title); setEditing(null); }
                          if(e.key === 'Escape') setEditing(null);
                        }} />
                    : <div className="bt">{t.title}</div>}
                  <div className="bm mono">{dPretty(top)} – {dPretty(top + t.len)}</div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {dragging && drag.from === 'tray' && (
        <div className="demo-ghost" style={{left:drag.x + 12, top:drag.y - 10}}>{dragging.title}</div>
      )}
      <span className="sr-only" aria-live="polite" ref={liveRef} />
    </div>
  );
}

/* ---- shared landing helpers ---- */

// Reveals a section once it comes into view. One observer per element, torn
// down after it fires, so scrolling back up does not replay everything.
function useReveal(){
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if(!el) return;
    if(!('IntersectionObserver' in window)){ setOn(true); return; }
    // Stays observing rather than disconnecting on the first hit, so scrolling
    // back up and down plays the handwriting and the reveals again.
    const io = new IntersectionObserver(es => {
      es.forEach(e => setOn(e.isIntersecting));
    }, {rootMargin:'0px 0px -12% 0px', threshold:0.12});
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, on];
}

// How far a section has travelled through the viewport, 0 to 1. Used by the
// one scroll-driven animation on the page.
function useProgress(){
  const ref = useRef(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if(!el) return;
    let frame = 0;
    const read = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const total = r.height + vh;
      setP(Math.max(0, Math.min(1, (vh - r.top) / total)));
    };
    const onScroll = () => { if(!frame) frame = requestAnimationFrame(read); };
    read();
    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if(frame) cancelAnimationFrame(frame);
    };
  }, []);
  return [ref, p];
}

// Scales a fixed-width copy of the real interface down to whatever space it
// has, so the mockups are the actual layout rather than a drawing of it.
function useFit(design){
  const ref = useRef(null);
  const [k, setK] = useState(0.4);
  useEffect(() => {
    const el = ref.current;
    if(!el) return;
    const read = () => setK(Math.min(1, el.clientWidth / design));
    read();
    if(!('ResizeObserver' in window)){
      window.addEventListener('resize', read);
      return () => window.removeEventListener('resize', read);
    }
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, [design]);
  return [ref, k];
}

// Switches the document into ordinary page scrolling for as long as a public
// page is on screen, and puts it back for the planner.
function usePageScroll(){
  useEffect(() => {
    const el = document.documentElement;
    el.classList.add('pagescroll');
    return () => el.classList.remove('pagescroll');
  }, []);
}

const prefersStill = () => {
  try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
  catch(e){ return false; }
};

/* ---- the real app shell, miniaturised ---- */
// Same classes as the signed-in planner, so the rail, the pane, the tape and
// the hour grid are the genuine article at a smaller size.
const SHOT_HOURS = [480, 540, 600, 660, 720, 780, 840, 900];
const SHOT_BLOCKS = [
  {t:'AP Chemistry',  s:480, len:75, c:'indigo'},
  {t:'Lit essay',     s:660, len:60, c:'amber'},
  {t:'Cross country', s:840, len:90, c:'green'},
];
function ShotGrid({from = 480}){
  return (
    <div className="grid-scroll">
      <div className="grid-inner">
        {SHOT_HOURS.map(m => (
          <div className="hourrow" key={m}>
            <div className="h mono">{dPretty(m).replace(':00','')}</div>
            <div className="slot" />
          </div>
        ))}
        <div className="blocks">
          {SHOT_BLOCKS.map((b, i) => (
            <div className="block" key={i}
              style={{top:(b.s - from)/60*ROW + 1, height:b.len/60*ROW - 3, left:6, right:12, width:'auto',
                      '--bc-soft':`var(--bc-${b.c}-soft)`, borderLeftColor:`var(--bc-${b.c})`}}>
              <div className="bt">{b.t}</div>
              <div className="bm mono">{dPretty(b.s)} – {dPretty(b.s + b.len)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopShot(){
  const [ref, k] = useFit(1180);
  return (
    <div className="shot shot-desktop" ref={ref} aria-hidden="true">
      <div className="shot-chrome"><i /><i /><i /><span className="mono">planitforever.com</span></div>
      <div className="shot-view" style={{height: 648 * k}}>
        <div className="shot-inner" style={{width:1180, transform:`scale(${k})`}}>
          <div className="app" style={{height:648}}>
            <div className="rail">
              <div className="brand"><Mark size={40} /><b>PlanIt</b></div>
              {LFEATURES.map((f, i) => (
                <button key={f.id} className={'tab' + (f.id === 'organize' ? ' on' : '')}
                  style={{'--tabcolor':f.color}}>
                  <span className="tabrule" />
                  <span><span className="lbl">{f.name}</span><span className="sub">{f.sub}</span></span>
                </button>
              ))}
            </div>
            <main className="pane">
              <div className="pane-head">
                <div className="title-wrap">
                  <div>
                    <h1>Organize It</h1>
                    <div className="tagline">Move your day around, then look up at the week and the month.</div>
                  </div>
                </div>
                <div className="tape">
                  <button className="on">Daily</button><button>Weekly</button><button>Monthly</button>
                </div>
              </div>
              <div className="pane-body">
                <div className="sched-wrap" style={{display:'grid', gridTemplateColumns:'minmax(0,1fr) 260px', gap:18}}>
                  <ShotGrid />
                  <div>
                    <div className="eyebrow" style={{marginBottom:8}}>Unscheduled, from List It</div>
                    <div className="tray-item">
                      <span style={{color:'var(--ink35)', marginTop:3}}><IconGrip /></span>
                      <div style={{flex:1, minWidth:0}}>
                        <div style={{fontWeight:600, fontSize:13.5}}>Reread Gatsby ch. 4</div>
                        <div style={{fontSize:11, color:'var(--ink35)'}}>45 min</div>
                      </div>
                    </div>
                    <div className="tray-item">
                      <span style={{color:'var(--ink35)', marginTop:3}}><IconGrip /></span>
                      <div style={{flex:1, minWidth:0}}>
                        <div style={{fontWeight:600, fontSize:13.5}}>Email Ms. Reyes</div>
                        <div style={{fontSize:11, color:'var(--ink35)'}}>15 min</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneShot(){
  const [ref, k] = useFit(390);
  return (
    <div className="shot shot-phone" ref={ref} aria-hidden="true">
      <div className="phone-frame">
        <div className="phone-screen" style={{height: 712 * k}}>
          <div className="shot-inner" style={{width:390, transform:`scale(${k})`}}>
            <div className="app" style={{height:712, display:'block'}}>
              <div className="phone-status mono"><span>9:41</span><span>PlanIt</span></div>
              <main className="pane" style={{height:'calc(100% - 26px)'}}>
                <div className="pane-head" style={{padding:'14px 12px 0'}}>
                  <div className="title-wrap" style={{paddingLeft:48, minHeight:38, alignItems:'center'}}>
                    <div><h1 style={{fontSize:23}}>Organize It</h1></div>
                  </div>
                  <div className="tape">
                    <button className="on">Daily</button><button>Weekly</button><button>Monthly</button>
                  </div>
                </div>
                <div className="pane-body" style={{padding:'14px 12px 20px'}}>
                  <ShotGrid />
                </div>
              </main>
              <span className="phone-menu"><i /><i /><i /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- hero ---- */
const CAROUSEL = ['to-do list', 'schedule', 'monthly planner', 'study timer', 'résumé sheet'];

function Carousel(){
  const [i, setI] = useState(0);
  useEffect(() => {
    if(prefersStill()) return;
    const t = setInterval(() => setI(n => (n + 1) % CAROUSEL.length), 2100);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="carousel" aria-label={CAROUSEL.join(', ')}>
      {/* the widest word reserves the space so the line never jumps */}
      <span className="carousel-ghost" aria-hidden="true">monthly planner</span>
      {CAROUSEL.map((w, n) => (
        <span key={w} aria-hidden={n !== i}
          className={'carousel-w' + (n === i ? ' on' : n === (i - 1 + CAROUSEL.length) % CAROUSEL.length ? ' out' : '')}>
          {w}
        </span>
      ))}
    </span>
  );
}

function LandingHero({go}){
  const [ref, on] = useReveal();
  return (
    <section className="lhero" id="top" ref={ref}>
      <div className="lhero-photo" aria-hidden="true">
        <img src={HERO_LIGHT} alt="" className="hero-img hero-light" loading="eager" />
        <img src={HERO_DARK}  alt="" className="hero-img hero-dark"  loading="eager" />
        <span className="lhero-veil" />
      </div>
      <div className={'lhero-in' + (on ? ' in' : '')}>
        <h1>Your whole student life,<br />in one plan.</h1>
        <p className="lhero-sub">
          Classes, assignments, practices, clubs, and the studying you keep putting off.
          PlanIt holds all of it and shows you when it actually fits.
        </p>
        <div className="lhero-cta">
          <button className="btn primary lbig shine" onClick={() => go('start')}>
            Get started, it's free <IconArrow />
          </button>
          <button className="lhero-alt" onClick={() => go('login')}>I already have an account</button>
        </div>
        <p className="lhero-ios">Free on the web, and on iPhone.</p>
      </div>
    </section>
  );
}

/* ---- the handwritten line, written out as you reach it ---- */
function HandLine({children, delay = 0}){
  const [ref, on] = useReveal();
  const [done, setDone] = useState(false);
  useEffect(() => {
    if(!on){ setDone(false); return; }      // armed again on the way back
    if(prefersStill()){ setDone(true); return; }
    const t = setTimeout(() => setDone(true), 2400 + delay);
    return () => clearTimeout(t);
  }, [on, delay]);
  return (
    <span className={'hand' + (on ? ' writing' : '') + (done ? ' done' : '')} ref={ref}
      style={{'--hand-delay': delay + 'ms'}}>
      <span className="hand-text">{children}</span>
      <span className="hand-nib" aria-hidden="true" />
    </span>
  );
}

function LandingOpener(){
  const [ref, on] = useReveal();
  return (
    <section className={'lopen reveal' + (on ? ' in' : '')} id="why" ref={ref}>
      <p className="lopen-k">Why we built it</p>
      <h2 className="lopen-h">
        <HandLine>no more “I forgot”</HandLine>
      </h2>
      <div className="lopen-cols">
        <p>
          People would ask what my extracurriculars were and all I could say was, “I forgot.”
          They would ask what was on my schedule and all I could say was, “What schedule?”
        </p>
        <p>
          So the three of us built the planner we needed: one place for what is due, when you
          will do it, and everything you have already done.
        </p>
      </div>
    </section>
  );
}

function LandingAllInOne(){
  const [ref, on] = useReveal();
  return (
    <section className={'lall reveal' + (on ? ' in' : '')} ref={ref}>
      <h2>Your all-in-one <Carousel /> for students</h2>
      <p>Five parts of school that normally live in five different apps, in one place and talking to each other.</p>
      <ul className="lall-row">
        {LFEATURES.map(f => (
          <li key={f.id}><i style={{background:f.color}} />{f.name}</li>
        ))}
      </ul>
    </section>
  );
}

/* ---- scattered tasks pulling into one calendar as you scroll ---- */
const SCATTER = [
  {t:'Calc problem set', x:-38, y:-34, r:-7,  c:'var(--brag)',  slot:0},
  {t:'Chem lab writeup', x: 30, y:-42, r: 6,  c:'var(--org)',   slot:1},
  {t:'Cross country',    x:-44, y:  6, r: 4,  c:'var(--list)',  slot:2},
  {t:'Reread Gatsby',    x: 40, y: 14, r:-5,  c:'var(--lock)',  slot:3},
  {t:'Email Ms. Reyes',  x:-26, y: 40, r: 8,  c:'var(--watch)', slot:4},
  {t:'Shift at work',    x: 24, y: 46, r:-4,  c:'var(--set)',   slot:5},
];
function LandingMerge(){
  const [ref, p] = useProgress();
  // the pull happens across the middle of the section's travel
  // finished a touch before the section reaches the middle of the screen
  const k = prefersStill() ? 1 : Math.max(0, Math.min(1, (p - 0.13) / 0.30));
  const ease = k < 0.5 ? 2*k*k : 1 - Math.pow(-2*k + 2, 2) / 2;
  return (
    <section className="lmerge" id="merge" ref={ref}>
      <div className="lmerge-text">
        <div className="lmerge-names">
          <span className="lf-name" style={{'--fc':'var(--list)'}}>List It</span>
          <span className="lmerge-plus">+</span>
          <span className="lf-name" style={{'--fc':'var(--org)'}}>Organize It</span>
        </div>
        <h2>Scattered in the morning. One schedule by lunch.</h2>
        <p>
          Write a deadline down the second you hear it. It does not need a time yet, so put it in
          List It and keep walking. Daily, weekly and monthly lists, plus goals that sit above the
          day to day.
        </p>
        <p>
          Later, when you can see your week, drag it onto a day and it has a time. Classes that
          repeat go in once. An energy count tells you when you have booked more than you have in
          you. Same task, two views, nothing copied between them.
        </p>
      </div>
      <div className="lmerge-stage" aria-hidden="true">
        <div className="lmerge-slots">
          {SCATTER.map((s, i) => <span className="lmerge-slot" key={i} />)}
        </div>
        {SCATTER.map((s, i) => (
          <span className="lmerge-chip" key={i}
            style={{
              '--sx': s.x + '%', '--sy': s.y + '%', '--sr': s.r + 'deg',
              '--k': ease,
              top: `calc(${s.slot} * (100% / 6) + 2.4%)`,
              borderLeftColor: s.c
            }}>
            {s.t}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---- a slot the owner drops a video into ---- */
function VideoSlot({src, poster, label, note, children}){
  const [ref, on] = useReveal();
  return (
    <figure className={'vslot reveal' + (on ? ' in' : '')} ref={ref}>
      <div className="vslot-frame">
        {src
          ? <video src={src} poster={poster || undefined} controls playsInline preload="metadata" />
          : <div className="vslot-empty">
              <span className="vslot-badge">Video</span>
              <b>{label}</b>
              <span>{note}</span>
            </div>}
        {children}
      </div>
    </figure>
  );
}

// the weekly report, in the format the planner actually renders
const REPORT_BARS = [
  {d:'Sun', m:20}, {d:'Mon', m:95}, {d:'Tue', m:60}, {d:'Wed', m:120},
  {d:'Thu', m:45}, {d:'Fri', m:75}, {d:'Sat', m:150},
];
function ReportCard(){
  const peak = Math.max(...REPORT_BARS.map(b => b.m));
  const total = REPORT_BARS.reduce((n, b) => n + b.m, 0);
  return (
    <div className="repcard" aria-hidden="true">
      <div className="eyebrow" style={{marginBottom:10}}>This week</div>
      <div className="row" style={{gap:10, marginBottom:12, flexWrap:'wrap'}}>
        <div className="card" style={{flex:1, minWidth:92, padding:'10px 12px'}}>
          <div className="eyebrow">Focused</div>
          <div className="mono" style={{fontSize:20, fontWeight:500}}>
            {Math.floor(total/60)}h {total%60}m
          </div>
        </div>
        <div className="card" style={{flex:1, minWidth:92, padding:'10px 12px'}}>
          <div className="eyebrow">Sessions</div>
          <div className="mono" style={{fontSize:20, fontWeight:500}}>14</div>
        </div>
      </div>
      <div className="card" style={{padding:'12px'}}>
        <div className="chartrow">
          {REPORT_BARS.map(b => (
            <div key={b.d} className={'chartbar' + (b.d === 'Sat' ? ' today' : '')}>
              <b className="mono">{b.m || ''}</b>
              <i style={{height:Math.round(b.m/peak*70) + 3 + 'px'}} />
              <span className="mono">{b.d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---- feature sections ---- */
function FeatureBlock({f, children, flip}){
  const [ref, on] = useReveal();
  return (
    <section className={'lfeat reveal' + (on ? ' in' : '') + (flip ? ' flip' : '')} id={f.id} ref={ref}>
      <div className="lfeat-text">
        <span className="lf-name" style={{'--fc':f.color}}>{f.name}</span>
        <h2>{f.lead}</h2>
        <p>{f.body}</p>
      </div>
      <div className="lfeat-art">{children}</div>
    </section>
  );
}

function ListPanel(){
  const rows = [
    {t:'Finish calc problem set', done:false, when:'4:00 PM'},
    {t:'Reread Gatsby ch. 4',     done:false, when:null},
    {t:'Email Ms. Reyes',         done:true,  when:null},
    {t:'Pack kit for the meet',   done:false, when:'7:30 AM'},
  ];
  return (
    <div className="panelshot" aria-hidden="true">
      <div className="tape" style={{margin:'0 0 12px'}}>
        <button className="on">Daily</button><button>Weekly</button><button>Monthly</button>
      </div>
      {rows.map((r, i) => (
        <div key={i} className={'todo' + (r.done ? ' done' : '')} style={{alignItems:'center'}}>
          <Check on={r.done} />
          <div className="txt"><b>{r.t}</b></div>
          {r.when && <span className="mono" style={{fontSize:11, color:'var(--ink35)'}}>{r.when}</span>}
          <span className="status">{r.done ? 'Done' : 'Open'}</span>
        </div>
      ))}
    </div>
  );
}

// The real Brag It card, down to the importance bars and the Common App chips.
const BRAG_ROWS = [
  {t:'Varsity Cross Country', org:'Team captain', prio:5,
   tags:['Aug 2025 to present','Athletics: Club','11, 12','6 hrs/week'], lv:['Varsity']},
  {t:'National Merit Semifinalist', org:'National Merit Scholarship Corporation', prio:5,
   tags:['Sep 2026','Honor','12'], lv:['National']},
  {t:'Science Olympiad', org:'Regional 2nd place', prio:4,
   tags:['Mar 2025','Academic','10, 11','4 hrs/week'], lv:['Regional']},
];
function BragPanel(){
  return (
    <div className="panelshot" aria-hidden="true">
      <div className="tape" style={{margin:'0 0 12px'}}>
        <button className="on">Experience</button><button>Awards</button><button>Certifications</button>
      </div>
      {BRAG_ROWS.map((r, i) => (
        <div className="ec" key={i} style={{gridTemplateColumns:'minmax(0,1fr)'}}>
          <div className="main">
            <div className="spread" style={{alignItems:'flex-start'}}>
              <div style={{minWidth:0}}>
                <h3>{r.t}</h3>
                <div className="org">{r.org}</div>
              </div>
              <div className="ec-actions">
                <span className="prio">
                  {[1,2,3,4,5].map(n => <i key={n} className={n <= r.prio ? 'on' : ''} />)}
                </span>
              </div>
            </div>
            <div className="row" style={{gap:7, marginTop:10, flexWrap:'wrap'}}>
              {r.tags.map(t => <span className="metatag" key={t}>{t}</span>)}
              {r.lv.map(l => <span className="metatag strong" key={l}>{l}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ParentPanel(){
  return (
    <div className="panelshot" aria-hidden="true">
      <div className="viewonly" style={{marginTop:0, marginBottom:14}}>
        Viewing <b>Nirvi</b>'s planner. Read only.
      </div>
      <div className="lwatch-stats">
        {[['Studied this week','6h 40m'], ['Tasks done','14 of 16'], ['Streak','23 days']].map(([k, v]) => (
          <div className="card" key={k} style={{padding:'12px 14px'}}>
            <div className="eyebrow">{k}</div>
            <div className="mono" style={{fontSize:21, fontWeight:500, marginTop:2}}>{v}</div>
          </div>
        ))}
      </div>
      <div className="todo" style={{alignItems:'center', marginTop:12}}>
        <Check on />
        <div className="txt"><b>Chem lab writeup</b><div className="meta">Finished 4:10 PM</div></div>
        <span className="status">Done</span>
      </div>
      <div className="todo" style={{alignItems:'center'}}>
        <Check on={false} />
        <div className="txt"><b>Calc problem set</b><div className="meta">Scheduled 7:00 PM</div></div>
        <span className="status">Open</span>
      </div>
    </div>
  );
}

/* ---- team ---- */
const TEAM = [
  {n:'Nirvi Baddela',  r:'Product and build',
   b:"Wrote most of PlanIt. Started it after a freshman year spent losing track of everything."},
  {n:'Kaylin Kim',     r:'Founder, design and marketing',
   b:"Had the idea in the first place. Works out what students actually need from a planner, what they will never use twice, and how anyone hears about it."},
  {n:'Nia Mendonca',   r:'Finance and operations',
   b:"Handles the legal and financial side so PlanIt can keep running: the accounts, the paperwork and what it costs to stay online."},
];
function LandingTeam(){
  const [ref, on] = useReveal();
  return (
    <section className={'lteam reveal' + (on ? ' in' : '')} id="team" ref={ref}>
      <div className="lteam-head">
        <h2>Three students at Lambert High School.</h2>
        <p>
          We are not a company with a student advisory board. We are the students. Everything in
          PlanIt is here because one of us needed it during a school week.
        </p>
      </div>
      <ul className="lteam-list">
        {TEAM.map((m, i) => (
          <li key={m.n} style={{transitionDelay:(i * 90) + 'ms'}}>
            <span className="mono lteam-n">{String(i + 1).padStart(2, '0')}</span>
            <h3>{m.n}</h3>
            <span className="lteam-r">{m.r}</span>
            <p>{m.b}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---- support ---- */
const FAQ = [
  {q:'Does it cost anything?',
   a:"No. The planner is free and stays free. Nothing is behind a payment today."},
  {q:'Is it on iPhone?',
   a:"Yes. The same account works on the website and in the iOS app, and your planner syncs between them."},
  {q:'Can my parents see everything?',
   a:"Only if you accept their request, and only to look. They see your schedule, what you have ticked off and your study minutes. They cannot edit anything, and they never see your private notes in Brag It."},
  {q:'Does it work with Canvas?',
   a:"Yes, and with anything else that publishes a calendar feed: a Google Calendar a teacher shares, a club's schedule, an SAT or AP prep course. Paste the feed address into Organize It, Monthly, and the dates land on your calendar. After that it keeps itself current on its own, so new assignments turn up without you asking. You can connect several at once, and every feed is read only, so PlanIt cannot change anything at the other end."},
  {q:'Something is broken. Who do I tell?',
   a:"Settings, then Report a bug. It comes straight to us. Or email us at the address below."},
];
function LandingSupport(){
  const [ref, on] = useReveal();
  const [open, setOpen] = useState(0);
  return (
    <section className={'lsup reveal' + (on ? ' in' : '')} id="support" ref={ref}>
      <div className="lsup-head">
        <h2>Support</h2>
        <p>Written by the people who would answer your email anyway.</p>
      </div>
      <ul className="lsup-list">
        {FAQ.map((f, i) => (
          <li key={i} className={open === i ? 'on' : ''}>
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              <span>{f.q}</span>
              <i aria-hidden="true"><IconArrow dir={open === i ? 'up' : 'down'} /></i>
            </button>
            {open === i && <p>{f.a}</p>}
          </li>
        ))}
      </ul>
      <div className="lsup-mail">
        Still stuck? <a href={'mailto:' + CONFIG.CONTACT_EMAIL}>{CONFIG.CONTACT_EMAIL}</a>
      </div>
    </section>
  );
}

/* ---- footer ---- */
const IgMark = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="none">
    <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4" stroke="currentColor" strokeWidth="1.9"/>
    <circle cx="12" cy="12" r="4.6" stroke="currentColor" strokeWidth="1.9"/>
    <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor"/>
  </svg>
);
const TtMark = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="none">
    <path d="M14.2 2.8v11.6a3.6 3.6 0 1 1-3.1-3.57" stroke="currentColor" strokeWidth="1.9"
      strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.2 2.8c.5 2.4 2.2 4 4.6 4.2" stroke="currentColor" strokeWidth="1.9"
      strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const SOCIALS = [
  {k:'Instagram', h:'planit.2026', Mark:IgMark,
   u:'https://www.instagram.com/planit.2026?utm_source=ig_web_button_share_sheet&exln=ZDNlZDc0MzIxNw=='},
  {k:'TikTok', h:'planit.2026', Mark:TtMark,
   u:'https://www.tiktok.com/@planit.2026?is_from_webapp=1&sender_device=pc'},
];
function LandingFoot({go, jump, onLegal}){
  const [ref, on] = useReveal();
  return (
    <>
      <section className={'lend reveal' + (on ? ' in' : '')} ref={ref}>
        <div className="lend-photo" aria-hidden="true">
          <img src={SHOT_CTA} alt="" loading="lazy" />
          <span className="lend-veil" />
        </div>
        <div className="lend-in">
        <h2>Start with one deadline.</h2>
        <p>Make an account, write down the thing you are most likely to forget, and give it a time.</p>
        <button className="btn primary lbig shine" onClick={() => go('start')}>
          Get started, it's free <IconArrow />
        </button>
        </div>
      </section>

      <footer className="lfoot" id="updates">
        <div className="lfoot-top">
          <div className="lfoot-get">
            <h3>Get updated</h3>
            <p>We post what we are building, and when things go live.</p>
            <div className="lfoot-social">
              {SOCIALS.map(s => (
                <a key={s.k} href={s.u} target="_blank" rel="noopener noreferrer"
                  aria-label={s.k + ', @' + s.h}>
                  <span className="soc-badge"><s.Mark /></span>
                  <span className="mono soc-h">@{s.h}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="lfoot-cols">
            <div>
              <h4>What it does</h4>
              {LFEATURES.map(f => <button key={f.id} onClick={() => jump(f.id)}>{f.name}</button>)}
            </div>
            <div>
              <h4>PlanIt</h4>
              <button onClick={() => jump('team')}>Team</button>
              <button onClick={() => jump('support')}>Support</button>
              <button onClick={() => jump('why')}>Why we built it</button>
            </div>
            <div>
              <h4>Account</h4>
              <button onClick={() => go('start')}>Start planning</button>
              <button onClick={() => go('login')}>Log in</button>
              <h4 style={{marginTop:16}}>Legal</h4>
              <button onClick={() => onLegal('privacy')}>Privacy policy</button>
              <button onClick={() => onLegal('terms')}>Terms</button>
            </div>
          </div>
        </div>
        <div className="lfoot-base">
          <span>&copy; {new Date().getFullYear()} PlanIt</span>
          <a href={'mailto:' + CONFIG.CONTACT_EMAIL}>{CONFIG.CONTACT_EMAIL}</a>
        </div>
      </footer>
    </>
  );
}

/* ---- nav ---- */
const NAV_LINKS = [['features','Features'], ['team','Team'], ['support','Support']];
function LandingNav({go, jump}){
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={'lnav' + (solid ? ' solid' : '')}>
      <a className="lnav-brand" href="#/" onClick={e => { e.preventDefault(); jump('top'); }}>
        <Mark size={34} /><b>PlanIt</b>
      </a>
      <nav className={'lnav-links' + (open ? ' open' : '')}>
        {NAV_LINKS.map(([id, label]) => (
          <a key={id} href={'#' + id}
            onClick={e => { e.preventDefault(); setOpen(false); jump(id); }}>{label}</a>
        ))}
      </nav>
      <div className="lnav-cta">
        <button className="btn primary" onClick={() => go('start')}>Start planning</button>
        <button className="lnav-burger" aria-label="Menu" aria-expanded={open}
          onClick={() => setOpen(v => !v)}><i /><i /><i /></button>
      </div>
    </header>
  );
}

/* ---- the stationery that drifts behind the page ---- */
function Stationery(){
  return (
    <div className="stationery" aria-hidden="true">
      <svg className="st-pad" viewBox="0 0 220 280" fill="none">
        <rect x="14" y="20" width="192" height="248" rx="6" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M14 56h192M14 92h192M14 128h192M14 164h192M14 200h192M14 236h192"
          stroke="currentColor" strokeWidth="1.5" opacity=".7"/>
        <path d="M46 20v248" stroke="currentColor" strokeWidth="1.5" opacity=".7"/>
        {[46, 86, 126, 166].map(x => (
          <circle key={x} cx={x} cy="14" r="6" stroke="currentColor" strokeWidth="2.5"/>
        ))}
      </svg>
      <svg className="st-pencil" viewBox="0 0 60 300" fill="none">
        <path d="M30 6l18 34v220a18 18 0 0 1-36 0V40L30 6z" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M12 236h36M12 40h36" stroke="currentColor" strokeWidth="2"/>
        <path d="M30 6v34" stroke="currentColor" strokeWidth="2"/>
      </svg>
      <svg className="st-clip" viewBox="0 0 120 200" fill="none">
        <path d="M86 56v94a38 38 0 0 1-76 0V46a26 26 0 0 1 52 0v98a14 14 0 0 1-28 0V58"
          stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

/* ---- Start planning: the one page both the website and the app lead to ---- */
function StartPlanning({go}){
  usePageScroll();
  return (
    <div className="startpage">
      <header className="lnav solid">
        <button className="lnav-brand" onClick={() => go('home')}>
          <Mark size={34} /><b>PlanIt</b>
        </button>
        <div className="lnav-cta">
          <button className="lnav-login" onClick={() => go('home')}>Back to the homepage</button>
        </div>
      </header>

      <div className="startwrap">
        <section className="startmain">
          <h1>Start planning</h1>
          <p className="startsub">
            One account covers the website and the iPhone app. It takes about a minute.
          </p>
          <div className="startcta">
            <button className="btn primary lbig shine" onClick={() => go('signup')}>
              Create an account <IconArrow />
            </button>
            <button className="btn lbig" onClick={() => go('login')}>Log in</button>
          </div>
          <ol className="startsteps">
            <li><span className="mono">1</span> Confirm your email</li>
            <li><span className="mono">2</span> Pick a username</li>
            <li><span className="mono">3</span> Say whether you are the student or the parent</li>
          </ol>
        </section>

        <aside className="startios">
          <span className="startios-k">Also on iPhone</span>
          <h2>PlanIt is on iOS as well.</h2>
          <p>
            The same planner, the same account. Sign up here and log in on your phone, or the
            other way round, and everything syncs between them.
          </p>
          <ul>
            <li>Reminders before a block starts</li>
            <li>Block distracting apps during a Lock It session</li>
            <li>Sign in with Google or Apple</li>
          </ul>
          <p className="startios-note">
            Search <b>PlanIt</b> on the App Store, or open planitforever.com on your phone.
          </p>
        </aside>
      </div>
    </div>
  );
}

/* ---- the page ---- */
function Landing({go}){
  usePageScroll();
  const [legal, setLegal] = useState(null);
  const [list, organize, lock, brag, watch] = LFEATURES;

  // Anchors scroll rather than navigate, so the address bar keeps the plain
  // homepage URL and the back button still leaves the page.
  const jump = id => {
    const el = id === 'top' ? null : document.getElementById(id);
    const y = el ? el.getBoundingClientRect().top + window.scrollY - 70 : 0;
    try { window.scrollTo({top:y, behavior: prefersStill() ? 'auto' : 'smooth'}); }
    catch(e){ window.scrollTo(0, y); }
  };

  return (
    <div className="lpage">
      <Stationery />
      <LandingNav go={go} jump={jump} />
      <main>
        <LandingHero go={go} />
        <LandingOpener />
        <LandingAllInOne />

        <div id="features" className="anchorpoint" />

        <section className="ldemo" id="demo">
          <div className="ldemo-head">
            <h2>This is the real thing, not a picture of it.</h2>
            <p>
              The grid below is the planner's own calendar. Drag something out of the list, move it
              around, rename it. Nothing is saved, so reload when you have made a mess.
            </p>
          </div>
          <LiveDemo />
          <div className="ldemo-after">
            <h3>Seen enough? Get the real deal for <em>FREE</em>.</h3>
            <button className="btn primary lbig shine" onClick={() => go('start')}>
              Get started, it's free <IconArrow />
            </button>
          </div>
        </section>

        <LandingMerge />

        <section className="ldevices">
          <div className="ldevices-head">
            <h2>Same planner on the laptop you work at and the phone in your pocket.</h2>
            <p>One account, one plan. Change something in a lecture hall and it is there when you get home.</p>
          </div>
          <div className="ldevices-stage">
            <DesktopShot />
            <PhoneShot />
          </div>
        </section>

        <section className="lfeat lfeat-lock" id="lock">
          <div className="llock-photo" aria-hidden="true"><img src={SHOT_FOCUS} alt="" loading="lazy" /></div>
          <div className="lfeat-text">
            <span className="lf-name lf-name-dark" style={{'--fc':'#E79484'}}>{lock.name}</span>
            <h2>{lock.lead}</h2>
            <p>{lock.body}</p>
          </div>
          <div className="lfeat-art lock-art">
            <VideoSlot src={CONFIG.VIDEO_ROOMS} label="Group study rooms"
              note="A screen recording of a room with a few people in it.">
              <div className="lock-report"><ReportCard /></div>
            </VideoSlot>
          </div>
        </section>

        <section className="lfeat lbrag" id="brag">
          <div className="lfeat-text">
            <span className="lf-name" style={{'--fc':brag.color}}>{brag.name}</span>
            <h2>{brag.lead}</h2>
            <p>{brag.body}</p>
            <div className="lbrag-out">
              <span className="lbrag-arrow" aria-hidden="true" />
              <div>
                <b>Export as a résumé</b>
                <span>Pick what goes in, and it lays itself out. One page, ready to send.</span>
              </div>
            </div>
          </div>
          <div className="lfeat-art lbrag-art">
            <BragPanel />
            <VideoSlot src={CONFIG.VIDEO_BRAGIT} label="Brag It, start to finish"
              note="Logging an activity, then exporting it as a résumé." />
          </div>
        </section>

        <FeatureBlock f={watch} flip>
          <ParentPanel />
          <ul className="lwatch-pts">
            <li><b>No nagging.</b> You can see the plan without asking about it.</li>
            <li><b>No editing.</b> A parent account can look and nothing else.</li>
            <li><b>Their call.</b> Your child accepts the request, and can end it whenever.</li>
          </ul>
        </FeatureBlock>

        <LandingTeam />
        <LandingSupport />
        <LandingFoot go={go} jump={jump} onLegal={setLegal} />
      </main>
      {legal && <LegalModal kind={legal} onClose={() => setLegal(null)} />}
    </div>
  );
}

// Organize It gets the same grid the demo uses, sitting still, so the two
// calendars on this page are recognisably one calendar.
function OrganizePanel(){
  return (
    <div className="panelshot" aria-hidden="true">
      <div className="tape" style={{margin:'0 0 12px'}}>
        <button>Daily</button><button className="on">Weekly</button><button>Monthly</button>
      </div>
      <ShotGrid />
    </div>
  );
}

/* Routing. One file, no server rewrites, so the two screens that are not the
   planner live on a hash: planitforever.com for the landing page,
   planitforever.com/#/signup and /#/login for the account screens. Those work
   on any static host and survive a refresh and the back button. */
const readRoute = () => {
  const h = (window.location.hash || '').replace(/^#\/?/, '').toLowerCase();
  if(h === 'signup' || h === 'sign-up' || h === 'register') return 'signup';
  if(h === 'login' || h === 'signin' || h === 'sign-in') return 'login';
  if(h === 'start' || h === 'start-planning') return 'start';
  return 'home';
};
// Set once somebody has actually signed in on this device, so a returning
// student gets the loading screen rather than a flash of marketing, while a
// first-time visitor gets the landing page with no wait at all.
const RETURNING_KEY = 'planit:returning';
const isReturning = () => {
  try { return localStorage.getItem(RETURNING_KEY) === '1'; } catch(e){ return false; }
};
const markReturning = on => {
  try { on ? localStorage.setItem(RETURNING_KEY, '1') : localStorage.removeItem(RETURNING_KEY); }
  catch(e){}
};

function Root(){
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);
  const [dbWarn, setDbWarn] = useState(false);
  const [route, setRoute] = useState(readRoute);

  // the back and forward buttons move between the homepage and the account
  // screens, because both are real history entries
  useEffect(() => {
    const onHash = () => setRoute(readRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Before sign-in nobody has loaded a planner, so the palette comes from the
  // mirror the boot script reads. Without this the homepage and the sign-in
  // screens would show light text on a dark page for a returning dark-mode
  // visitor. Once there is a user, App owns this.
  useEffect(() => {
    if(user) return;
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(APPEARANCE_KEY) || '{}') || {}; }
    catch(e){ saved = {}; }
    applyAppearance(saved);
    if(modeOf(saved) !== 'system') return;
    let mq;
    try { mq = window.matchMedia('(prefers-color-scheme: dark)'); } catch(e){ return; }
    if(!mq || !mq.addEventListener) return;
    const repaint = () => applyAppearance(saved);
    mq.addEventListener('change', repaint);
    return () => mq.removeEventListener('change', repaint);
  }, [user]);
  const go = r => {
    const next = r === 'home' ? '#/' : '#/' + r;
    if(window.location.hash === next) setRoute(readRoute());
    else window.location.hash = next;
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const auth = initFirebase();
    if(!auth){ setChecking(false); return; }
    let stop = null, dead = false;
    authReady().then(() => {
      if(dead) return;
      stop = attach(auth);
    });
    return () => { dead = true; if(stop) stop(); };

    function attach(auth2){
    return auth2.onAuthStateChanged(async u => {
      try{
        if(!u || !u.emailVerified){ setUser(null); return; }
        markReturning(true);
        try{
          const snap = await withTimeout(db().collection('users').doc(u.uid).get());
          // no username yet -> Auth shows the "pick a username" step
          setUser(snap.exists ? {...toUser(u), ...snap.data()} : null);
        }catch(e){
          // Firestore unreachable: let them into their planner rather than
          // stranding them on a loading screen, but say so.
          console.warn('PlanIt: could not read your profile from Firestore.', e);
          setDbWarn(true);
          setUser(toUser(u));
        }
      } finally { setChecking(false); }
    });
    }
  }, []);

  const signOut = async () => {
    const auth = initFirebase();
    try{ await auth.signOut(); }catch(e){}
    markReturning(false);
    setUser(null);
    go('home');
  };

  // Someone who has signed in here before waits for Firebase; a new visitor
  // does not, and lands on the homepage straight away.
  if(checking && isReturning()) return <Booting />;

  if(!user && !isNativeApp()){
    if(route === 'home')  return <Landing go={go} />;
    if(route === 'start') return <StartPlanning go={go} />;
  }
  if(!user){
    if(!CONFIG.FIREBASE.apiKey) return <SetupNeeded />;
    if(checking) return <Booting />;
    const startMode = route === 'login' ? 'in' : route === 'signup' ? 'up' : null;
    return <Auth initialMode={startMode}
      onHome={isNativeApp() ? null : () => go('home')} />;
  }
  if(!CONFIG.FIREBASE.apiKey) return <SetupNeeded />;
  if(!user.onboarded) return <Onboarding user={user} onDone={() => window.location.reload()} />;
  return <>
    {dbWarn && <div className="dbwarn">Couldn't reach Firestore, so your username isn't loaded. Your planner still works.</div>}
    <App key={user.id} user={user} onSignOut={signOut} />
  </>;
}

try { console.log('PlanIt ' + BUILD); } catch(e){}
ReactDOM.createRoot(document.getElementById('root')).render(<Boundary><Root /></Boundary>);
</script>
</body>
</html>
