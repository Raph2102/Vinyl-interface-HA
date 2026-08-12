/**
 * Produit les captures du README.
 *
 * Elles sont fabriquées par un script, et non prises à la main, pour trois
 * raisons : elles se refont à l'identique après un changement d'interface, elles
 * sortent toutes au même cadrage, et elles montrent le mode démonstration —
 * donc jamais la bibliothèque ni les enceintes de qui que ce soit.
 *
 * Rendu à deux fois la résolution : sur un écran dense, une capture à l'échelle
 * 1 paraît floue une fois affichée dans un README.
 *
 * Usage :  npx vite preview   puis   node tools/captures.mjs [url]
 */
import { spawn, spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const APP = (process.argv[2] ?? "http://localhost:4192").replace(/\/+$/, "");
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SORTIE = join(ROOT, "docs", "images");
const PORT = 9421;
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

const LARGEUR = 1440;
const HAUTEUR = 900;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
mkdirSync(SORTIE, { recursive: true });

const profile = mkdtempSync(join(tmpdir(), "vinyl-shots-"));
const navigateur = spawn(EDGE, [
  "--headless=new",
  "--no-sandbox",
  "--disable-extensions",
  "--no-first-run",
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${profile}`,
  `--window-size=${LARGEUR},${HAUTEUR}`,
  `${APP}/?demo=1`,
]);

process.on("exit", () => {
  try {
    spawnSync("taskkill", ["/F", "/T", "/PID", String(navigateur.pid)], { stdio: "ignore" });
  } catch {
    /* déjà parti */
  }
  spawnSync(
    "powershell",
    [
      "-NoProfile",
      "-Command",
      `Get-CimInstance Win32_Process -Filter "Name='msedge.exe'" | Where-Object { $_.CommandLine -like '*${profile.split(/[\\/]/).pop()}*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }`,
    ],
    { stdio: "ignore", timeout: 20000 },
  );
});

let wsUrl = null;
for (let i = 0; i < 80 && !wsUrl; i++) {
  try {
    const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
    const t = list.find((x) => x.type === "page" && x.url.startsWith(APP.slice(0, 21)));
    if (t) wsUrl = t.webSocketDebuggerUrl;
  } catch {
    /* pas encore prêt */
  }
  if (!wsUrl) await sleep(250);
}

let id = 1;
const attente = new Map();
const sock = new WebSocket(wsUrl);
await new Promise((r) => (sock.onopen = r));
sock.onmessage = (e) => {
  const m = JSON.parse(e.data);
  const p = attente.get(m.id);
  if (p) {
    attente.delete(m.id);
    p(m.result);
  }
};
const envoyer = (method, params = {}) =>
  new Promise((res) => {
    const i = id++;
    attente.set(i, res);
    sock.send(JSON.stringify({ id: i, method, params }));
  });
const evaluer = async (e) =>
  (await envoyer("Runtime.evaluate", { expression: e, returnByValue: true, awaitPromise: true }))
    ?.result?.value;

await envoyer("Runtime.enable");
await envoyer("Page.enable");
// Deux fois la résolution : c'est ce qui sépare une capture nette d'une bouillie.
await envoyer("Emulation.setDeviceMetricsOverride", {
  width: LARGEUR,
  height: HAUTEUR,
  deviceScaleFactor: 2,
  mobile: false,
});
await sleep(1200);

/** Ouvre une adresse et laisse à l'app le temps de s'installer. */
async function aller(url, attendre = 3200) {
  await envoyer("Page.navigate", { url: `${APP}/${url}` });
  await sleep(attendre);
}

async function capturer(nom) {
  /*
   * JPEG et non PNG.
   *
   * Ces captures sont faites de degrades et de photos de pochettes : en PNG
   * elles pesaient seize megaoctets a elles seules, pour un depot qui tient
   * autrement dans quelques centaines de kilo-octets. Le JPEG a bonne qualite
   * les ramene a un dixieme sans difference visible dans un README.
   */
  const shot = await envoyer("Page.captureScreenshot", { format: "jpeg", quality: 88, captureBeyondViewport: false });
  const chemin = join(SORTIE, `${nom}.jpg`);
  writeFileSync(chemin, Buffer.from(shot.data, "base64"));
  console.log(`  ${nom}.jpg`);
}

/** Réveille les commandes : elles s'effacent après quelques secondes sans geste. */
const reveiller = () =>
  evaluer(`window.dispatchEvent(new PointerEvent("pointermove", { bubbles: true })), true`);

console.log("captures :");

// 1. La platine en lecture — l'image d'accueil.
await aller("?demo=1", 5200);
await reveiller();
await sleep(400);
await capturer("platine");

// 2. Le bac à disques.
await aller("?demo=1&lib=1", 4200);
await capturer("bibliotheque");

// 3. La file d'attente.
await aller("?demo=1", 4200);
await reveiller();
await evaluer(`document.querySelector('[title="À suivre"]')?.click()`);
await sleep(1400);
await capturer("file");

// 4. Les enceintes.
await aller("?demo=1", 4200);
await reveiller();
await evaluer(`document.querySelector(".hud__room")?.click()`);
await sleep(1400);
await capturer("enceintes");

// 5. Les paroles.
await aller("?demo=1&lyrics=1", 4600);
await capturer("paroles");

// 6. Les réglages.
await aller("?demo=1", 4200);
await reveiller();
await evaluer(`document.querySelector('[aria-label="Réglages"]')?.click()`);
await sleep(1400);
await capturer("reglages");

// 7. L'écran de repos.
await aller("?demo=1&rest=1", 4200);
await capturer("repos");

// 8. Les matières du disque, une par une.
for (const [matiere, nom] of [
  ["marble", "matiere-marbre"],
  ["splatter", "matiere-eclaboussure"],
  ["glass", "matiere-transparent"],
  ["black", "matiere-noir"],
]) {
  await aller(`?demo=1&vinyl=${matiere}`, 4200);
  await capturer(nom);
}

console.log(`\ndans ${SORTIE}`);
process.exit(0);
