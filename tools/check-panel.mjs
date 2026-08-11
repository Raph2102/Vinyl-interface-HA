/**
 * Vérifie le PANNEAU Home Assistant, sans l'installer.
 *
 * Home Assistant instancie `<md-vinyl-panel>` et lui pousse un objet `hass`.
 * On reproduit exactement ce contrat : une page minimale importe le module
 * construit, fabrique un `hass` adossé à une vraie connexion WebSocket, et le
 * donne à l'élément. Si le panneau s'anime dans ces conditions, il s'animera
 * dans le frontend.
 *
 * Strictement en lecture : aucune commande n'est envoyée aux enceintes.
 *
 * Usage : node tools/check-panel.mjs [url-ha]
 */
import { spawn, spawnSync } from "node:child_process";
import { createServer } from "node:http";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const env = {};
for (const ligne of readFileSync(join(ROOT, ".env"), "utf8").split("\n")) {
  const m = /^\s*([A-Z_]+)\s*=\s*(.*)\s*$/.exec(ligne);
  if (m) env[m[1]] = m[2].trim();
}

const HA = (process.argv[2] ?? env.HA_URL).replace(/\/+$/, "");
const PORT = 4193;
const CDP = 9411;
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let echecs = 0;
const verifier = (label, ok, detail = "") => {
  console.log(`${ok ? "[OK]" : "[X] "} ${label}${detail ? "  " + detail : ""}`);
  if (!ok) echecs++;
};

/*
 * La page d'accueil du panneau. Elle ne contient QUE ce que Home Assistant
 * fournit : le module, l'élément, et un objet hass. Rien de notre app.
 */
const PAGE = `<!doctype html>
<meta charset="utf-8">
<title>banc du panneau</title>
<style>html,body{margin:0;height:100%;background:#111}md-vinyl-panel{display:block;height:100vh}</style>
<md-vinyl-panel id="p"></md-vinyl-panel>
<script type="module">
import "./md-vinyl-panel.js?v=${Date.now()}";

const HA = ${JSON.stringify(HA)};
const TOKEN = ${JSON.stringify(env.HA_TOKEN)};

// --- une liaison WebSocket, comme celle que le frontend maintient
const sock = new WebSocket(HA.replace(/^http/, "ws") + "/api/websocket");
let id = 1;
const attente = new Map();
const etats = {};
window.__pret = false;
window.__erreur = null;

const envoyer = (msg) =>
  new Promise((res, rej) => {
    const i = id++;
    attente.set(i, { res, rej });
    sock.send(JSON.stringify({ ...msg, id: i }));
  });

sock.onmessage = async (e) => {
  const m = JSON.parse(e.data);
  if (m.type === "auth_required") return sock.send(JSON.stringify({ type: "auth", access_token: TOKEN }));
  if (m.type === "auth_invalid") { window.__erreur = "jeton refusé"; return; }
  if (m.type === "auth_ok") {
    const liste = await envoyer({ type: "get_states" });
    for (const s of liste) etats[s.entity_id] = s;
    await envoyer({ type: "subscribe_events", event_type: "state_changed" });
    pousser();
    window.__pret = true;
    return;
  }
  if (m.type === "event" && m.event?.data?.new_state) {
    etats[m.event.data.entity_id] = m.event.data.new_state;
    pousser();
    return;
  }
  if (m.type === "result") {
    const p = attente.get(m.id);
    if (!p) return;
    attente.delete(m.id);
    m.success ? p.res(m.result) : p.rej(new Error(m.error?.message ?? "erreur"));
  }
};

// --- l'objet hass, avec la surface exacte que le panneau utilise
function pousser() {
  document.getElementById("p").hass = {
    states: { ...etats },
    callService: (domain, service, data, target) =>
      envoyer({ type: "call_service", domain, service, service_data: data ?? {}, ...(target ? { target } : {}) }),
    callWS: (msg) => envoyer(msg),
    user: { is_admin: true },
    language: "fr",
  };
}
</script>`;

// ------------------------------------------------------------------ serveur

const serveur = createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    return res.end(PAGE);
  }
  if (req.url.startsWith("/md-vinyl-panel.js")) {
    // Sans cela le navigateur ressert la version precedente, et on debogue un
    // fichier qui n existe plus sur le disque.
    res.writeHead(200, { "content-type": "text/javascript; charset=utf-8", "cache-control": "no-store" });
    return res.end(readFileSync(join(ROOT, "dist-panel", "md-vinyl-panel.js")));
  }
  res.writeHead(404);
  res.end();
});
await new Promise((r) => serveur.listen(PORT, r));

// Contrôle de sanité : c'est bien le module qu'on vient de construire qui part
// sur le fil, et pas une version laissée par une exécution précédente.
{
  const servi = await (await fetch(`http://localhost:${PORT}/md-vinyl-panel.js`)).text();
  console.log(
    `module servi : ${servi.split("\n").length} lignes, ${(servi.length / 1024) | 0} Ko`,
  );
}

// ------------------------------------------------------------------ navigateur

const profile = mkdtempSync(join(tmpdir(), "vinyl-panel-"));
const nav = spawn(EDGE, [
  "--headless=new",
  "--no-sandbox",
  "--disable-extensions",
  "--no-first-run",
  `--remote-debugging-port=${CDP}`,
  `--user-data-dir=${profile}`,
  "--window-size=1440,900",
  `http://localhost:${PORT}/`,
]);
process.on("exit", () => {
  try {
    spawnSync("taskkill", ["/F", "/T", "/PID", String(nav.pid)], { stdio: "ignore" });
  } catch {}
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
    const list = await (await fetch(`http://127.0.0.1:${CDP}/json/list`)).json();
    const t = list.find((x) => x.type === "page" && x.url.includes(String(PORT)));
    if (t) wsUrl = t.webSocketDebuggerUrl;
  } catch {}
  if (!wsUrl) await sleep(250);
}

let cid = 1;
const attente = new Map();
const sock = new WebSocket(wsUrl);
await new Promise((r) => (sock.onopen = r));
const journal = [];
sock.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (m.method === "Log.entryAdded") journal.push(m.params.entry.text);
  if (m.method === "Runtime.exceptionThrown") {
    const d = m.params.exceptionDetails;
    journal.push(
      "EXCEPTION " + d.text + " | " + (d.url ?? "?") + ":" + d.lineNumber + " | " +
      (d.exception?.description ?? "").slice(0, 400) + " | pile: " +
      (d.stackTrace?.callFrames ?? []).map((f) => f.functionName + "@" + f.url + ":" + (f.lineNumber + 1)).join(" < "),
    );
  }
  const p = attente.get(m.id);
  if (p) {
    attente.delete(m.id);
    p(m.result);
  }
};
const envoyer = (method, params = {}) =>
  new Promise((res) => {
    const i = cid++;
    attente.set(i, res);
    sock.send(JSON.stringify({ id: i, method, params }));
  });
const evaluer = async (e) =>
  (await envoyer("Runtime.evaluate", { expression: e, returnByValue: true, awaitPromise: true }))
    ?.result?.value;

await envoyer("Runtime.enable");
await envoyer("Log.enable");
await sleep(7000);

console.log(`\nadresse : ${HA}\n`);

// Le panneau vit dans un shadow DOM : on interroge à travers.
const dans = (selecteur) =>
  `document.querySelector("md-vinyl-panel")?.shadowRoot?.querySelector(${JSON.stringify(selecteur)})`;

const vu = JSON.parse(
  await evaluer(`JSON.stringify({
    liaison: window.__pret === true,
    erreurLiaison: window.__erreur,
    elementDefini: !!customElements.get("md-vinyl-panel"),
    shadow: !!document.querySelector("md-vinyl-panel")?.shadowRoot,
    stylesInjectes: (document.querySelector("md-vinyl-panel")?.shadowRoot?.querySelector("style")?.textContent ?? "").length,
    platine: !!${dans(".disc")},
    bras: !!${dans(".tonearm__arm")},
    piece: ${dans(".hud__name")}?.textContent ?? null,
    titre: ${dans(".track__title")}?.textContent ?? null,
    statut: ${dans(".status")}?.textContent ?? null,
    reglagesOuverts: !!${dans(".setup")},
    enceinteChoisie: JSON.parse(localStorage.getItem("mdvinyl.settings.v1") ?? "{}").entityId ?? null,
  })`),
);

verifier("la liaison de démonstration du frontend est prête", vu.liaison === true, vu.erreurLiaison ?? "");
verifier("l'élément <md-vinyl-panel> s'enregistre", vu.elementDefini === true);
verifier("le panneau s'isole dans un shadow DOM", vu.shadow === true);
verifier("la feuille de style est embarquée", vu.stylesInjectes > 10000, `${vu.stylesInjectes} caractères`);
verifier("la platine et le bras sont rendus", vu.platine && vu.bras);
verifier(
  "une enceinte a été choisie toute seule",
  Boolean(vu.enceinteChoisie),
  vu.enceinteChoisie ?? "(aucune)",
);
verifier("aucun écran de configuration n'est imposé", vu.reglagesOuverts === false);
verifier("aucune erreur de connexion", vu.statut === null, vu.statut ?? "");
verifier("le nom de la pièce vient de hass", Boolean(vu.piece), vu.piece ?? "(vide)");
console.log(`      en lecture : ${vu.titre ?? "—"}`);

// La bibliothèque passe par callWS, donc par la session : c'est le point qui
// prouve qu'aucun jeton n'est nécessaire.
await evaluer(`${dans('[aria-label="Bibliothèque"]')}?.click()`);
await sleep(6000);

const biblio = JSON.parse(
  await evaluer(`JSON.stringify({
    erreur: ${dans(".library__error")}?.textContent ?? null,
    compte: ${dans(".library__count")}?.textContent ?? null,
    titres: [...(document.querySelector("md-vinyl-panel")?.shadowRoot?.querySelectorAll(".x") ? document.querySelector("md-vinyl-panel").shadowRoot : document.createDocumentFragment()).querySelectorAll(".crate__label b")].map((e) => e.textContent).slice(0, 4),
    pochettes: [...(document.querySelector("md-vinyl-panel")?.shadowRoot?.querySelectorAll(".x") ? document.querySelector("md-vinyl-panel").shadowRoot : document.createDocumentFragment()).querySelectorAll("img.crate__art")].filter((i) => i.naturalWidth > 0).length,
  })`),
);
verifier("la bibliothèque se charge sans jeton", biblio.erreur === null, biblio.erreur ?? "");
verifier("des albums remontent", /\d/.test(biblio.compte ?? ""), biblio.compte ?? "");
verifier("les noms d'albums sont lus", biblio.titres.filter(Boolean).length > 0, biblio.titres.join(" / "));
verifier("les pochettes se chargent", biblio.pochettes > 0, `${biblio.pochettes} affichées`);

const graves = journal.filter((t) => /error|exception|refus/i.test(t));
console.log("\n-- erreurs du navigateur --");
if (graves.length === 0) console.log("      aucune");
for (const t of journal.slice(0, 10)) console.log("      " + String(t).slice(0, 300));

console.log(echecs === 0 ? "\nTout passe." : `\n${echecs} vérification(s) en échec.`);
serveur.close();
process.exit(echecs === 0 ? 0 : 1);
