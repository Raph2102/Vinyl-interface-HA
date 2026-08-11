/**
 * Tests de bout en bout des gestes, dans un vrai navigateur.
 *
 * Une capture d'écran montre un état, pas un geste. Ce script pilote le
 * navigateur par le protocole DevTools : il enfonce le bouton, déplace le
 * pointeur, relâche, et vérifie ce qui en résulte.
 *
 * Couvre :
 *   1. mode aiguille — poser le bras lance la lecture, le retirer l'arrête ;
 *   2. balayage horizontal — change de morceau et joue l'animation de disque ;
 *   3. mode bouton — le bras ne fait plus que se déplacer dans le morceau.
 *
 * Usage : node tools/check-gestures.mjs [url-de-base]
 */
import { spawn, spawnSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const BASE = (process.argv[2] ?? "http://localhost:4180").replace(/\/+$/, "");
const PORT = 9223;
const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const profile = mkdtempSync(join(tmpdir(), "vinyl-cdp-"));

/*
 * Le navigateur de test doit mourir avec le test.
 *
 * Sans ça, chaque exécution laissait derrière elle une instance complète —
 * plusieurs dizaines de processus. Au bout de quelques passages la machine
 * était saturée, et les mesures de temps comme les gestes devenaient
 * imprévisibles : on croyait constater des régressions de l'app alors qu'on
 * mesurait la charge laissée par les essais précédents.
 *
 * /T tue aussi la descendance : un navigateur, c'est un processus par onglet.
 */
function fermerAuDepart(enfant) {
  let fait = false;
  const fermer = () => {
    if (fait) return;
    fait = true;
    try {
      if (enfant?.pid) spawnSync("taskkill", ["/F", "/T", "/PID", String(enfant.pid)], { stdio: "ignore" });
    } catch {
      /* déjà parti */
    }
    /*
     * Tuer l'arbre du processus lancé ne suffit pas : le navigateur détache ses
     * processus de rendu, qui survivent à leur parent. On rattrape les rescapés
     * par leur ligne de commande, qui contient le dossier de profil — unique à
     * cette exécution, donc on ne touche jamais au navigateur de l'utilisateur.
     */
    try {
      spawnSync(
        "powershell",
        [
          "-NoProfile",
          "-NonInteractive",
          "-Command",
          // On filtre sur le seul nom du dossier de profil : il est unique à
          // cette exécution, et il évite d'avoir à échapper un chemin Windows.
          `Get-CimInstance Win32_Process -Filter "Name='msedge.exe'" | Where-Object { $_.CommandLine -like '*${profile.split(/[\\/]/).pop()}*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }`,
        ],
        { stdio: "ignore", timeout: 20000 },
      );
    } catch {
      /* tant pis : rien de vital */
    }
  };
  process.on("exit", fermer);
  for (const signal of ["SIGINT", "SIGTERM"]) {
    process.on(signal, () => {
      fermer();
      process.exit(1);
    });
  }
  process.on("uncaughtException", (err) => {
    fermer();
    console.error(err);
    process.exit(1);
  });
  return fermer;
}

const edge = spawn(EDGE, [
  "--headless=new",
  "--no-sandbox",
  "--disable-gpu",
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${profile}`,
  "--window-size=1440,900",
  "about:blank",
]);

fermerAuDepart(edge);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let failures = 0;
const check = (label, ok, detail = "") => {
  console.log(`${ok ? "[OK]" : "[X] "} ${label}${detail ? "  " + detail : ""}`);
  if (!ok) failures++;
};

async function socketUrl() {
  for (let i = 0; i < 60; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const page = list.find((t) => t.type === "page" && t.webSocketDebuggerUrl);
      if (page) return page.webSocketDebuggerUrl;
    } catch {
      /* pas encore prêt */
    }
    await sleep(250);
  }
  throw new Error("navigateur injoignable");
}

let nextId = 1;
const pending = new Map();
const ws = new WebSocket(await socketUrl());
await new Promise((r) => (ws.onopen = r));
ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  const p = pending.get(msg.id);
  if (!p) return;
  pending.delete(msg.id);
  if (msg.error) p.reject(new Error(JSON.stringify(msg.error)));
  else p.resolve(msg.result);
};

function send(method, params = {}) {
  const id = nextId++;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function evaluate(expression) {
  const res = await send("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });
  if (res.exceptionDetails) throw new Error(res.exceptionDetails.text);
  return res.result.value;
}

await send("Runtime.enable");
await send("Page.enable");

async function open(path, settings) {
  await send("Page.navigate", { url: `${BASE}/${path}` });
  await sleep(600);
  if (settings) {
    await evaluate(`localStorage.setItem("mdvinyl.settings.v1", ${JSON.stringify(JSON.stringify(settings))})`);
    await send("Page.reload");
    await sleep(600);
  }
  /*
   * On attend deux choses, dans cet ordre.
   *
   * 1. Que la boucle d'animation ait pris le bras en main — tant qu'elle n'a
   *    rien ecrit, --lift est vide et se lit comme zero, ce qui faisait echouer
   *    des verifications sur un defaut du harnais et non de l'app.
   *
   * 2. Un battement franc ensuite. Repondre n'est pas etre pose : le bras
   *    rejoint encore son repose-bras, la pochette se decode, la premiere
   *    position arrive. En tirant avant, le geste part d'un point qui bouge
   *    sous lui. Ce delai est genereux a dessein — c'est un test de gestes, pas
   *    un test de demarrage.
   */
  for (let i = 0; i < 60; i++) {
    const pret = await evaluate(
      `(() => {
         const a = document.querySelector(".tonearm__arm");
         if (!a) return false;
         const s = getComputedStyle(a);
         return !!(s.getPropertyValue("--lift").trim() && s.getPropertyValue("--arm").trim());
       })()`,
    );
    if (pret) {
      await sleep(1500);
      return;
    }
    await sleep(150);
  }
  throw new Error(`app non stabilisée sur ${path}`);
}

async function mouse(type, x, y) {
  await send("Input.dispatchMouseEvent", {
    type,
    x,
    y,
    button: "left",
    buttons: type === "mouseReleased" ? 0 : 1,
    clickCount: 1,
    pointerType: "mouse",
  });
}

async function drag(from, to, steps = 14) {
  await mouse("mousePressed", from.x, from.y);
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    await mouse("mouseMoved", from.x + (to.x - from.x) * t, from.y + (to.y - from.y) * t);
    await sleep(16);
  }
  await mouse("mouseReleased", to.x, to.y);
}

const centreOf = (selector) =>
  evaluate(
    `(() => { const r = document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();
              return { x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width, h: r.height }; })()`,
  );

const lift = () =>
  evaluate(
    `parseFloat(getComputedStyle(document.querySelector(".tonearm__arm")).getPropertyValue("--lift"))`,
  );

const elapsed = () => evaluate(`document.querySelector(".times span").textContent`);
const title = () => evaluate(`document.querySelector(".track__title").textContent`);

// ---------------------------------------------------------------- 1. aiguille

console.log("\n-- mode aiguille --");
await open("?demo=1&paused=1", null);

const hit = await evaluate(
  `(() => { const r = document.querySelector(".tonearm__grip").getBoundingClientRect();
            const e = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
            return e ? e.className : null; })()`,
);
check("la poignee du bras recoit les evenements", hit === "tonearm__grip", `-> "${hit}"`);

const disc = await centreOf(".disc");
check("bras releve au depart", (await lift()) > 0.8, `lift=${(await lift()).toFixed(2)}`);

await drag(await centreOf(".tonearm__grip"), {
  x: disc.x + (disc.w / 2) * 0.55,
  y: disc.y + (disc.w / 2) * 0.42,
});
await sleep(1600);
check("poser l'aiguille lance la lecture", (await lift()) < 0.2, `lift=${(await lift()).toFixed(2)}`);

await drag(await centreOf(".tonearm__grip"), {
  x: disc.x + (disc.w / 2) * 1.5,
  y: disc.y + (disc.w / 2) * 0.9,
});
await sleep(1600);
check("retirer le bras arrete la lecture", (await lift()) > 0.8, `lift=${(await lift()).toFixed(2)}`);

// ---------------------------------------------------------------- 2. balayage

console.log("\n-- balayage --");
await open("?demo=1", null);
await sleep(400);

const before = await title();
const sleeve = await centreOf(".sleeve");
await drag({ x: sleeve.x, y: sleeve.y }, { x: sleeve.x - 220, y: sleeve.y }, 12);

// L'animation dure 560 ms : on regarde pendant qu'elle tourne.
const animating = await evaluate(`document.querySelector(".disc").getAnimations().length > 0`);
check("le disque joue une animation de changement", animating);

await sleep(900);
const after = await title();
check("le balayage a gauche passe au morceau suivant", after !== before, `"${before}" -> "${after}"`);

// ---------------------------------------------------------------- 3. bouton

console.log("\n-- mode bouton --");
await open("?demo=1&paused=1", {
  playControl: "button",
  vinyl: "tinted",
  background: "adaptive",
  lyrics: false,
  idleMinutes: 0,
});

const hasPlayButton = await evaluate(`!!document.querySelector(".iconbtn--play")`);
check("le bouton lecture est present", hasPlayButton);

const timeBefore = await elapsed();
const disc2 = await centreOf(".disc");
await drag(await centreOf(".tonearm__grip"), {
  x: disc2.x + (disc2.w / 2) * 0.5,
  y: disc2.y + (disc2.w / 2) * 0.45,
});
await sleep(1400);

check(
  "en mode bouton, poser le bras ne lance PAS la lecture",
  (await lift()) > 0.8,
  `lift=${(await lift()).toFixed(2)}`,
);
const timeAfter = await elapsed();
check(
  "en mode bouton, le bras deplace bien la lecture",
  timeAfter !== timeBefore,
  `${timeBefore} -> ${timeAfter}`,
);

ws.close();
edge.kill();
try {
  rmSync(profile, { recursive: true, force: true });
} catch {
  /* dossier encore verrouillé : sans importance */
}

console.log(failures === 0 ? "\nTout passe." : `\n${failures} verification(s) en echec.`);
process.exit(failures === 0 ? 0 : 1);
