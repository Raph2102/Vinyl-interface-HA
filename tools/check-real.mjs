/**
 * Vérifie l'app contre la VRAIE installation Home Assistant.
 *
 * Strictement en lecture : aucune commande n'est envoyée aux enceintes, rien
 * n'est mis en lecture. On regarde seulement ce que l'app arrive à afficher.
 *
 * Usage :  node tools/check-real.mjs <url-app> [url-ha]
 */
import { spawn, spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const env = {};
for (const ligne of readFileSync(new URL("../.env", import.meta.url), "utf8").split("\n")) {
  const m = /^\s*([A-Z_]+)\s*=\s*(.*)\s*$/.exec(ligne);
  if (m) env[m[1]] = m[2].trim();
}

const APP = (process.argv[2] ?? "http://localhost:4192").replace(/\/+$/, "");
const HA = (process.argv[3] ?? env.HA_URL).replace(/\/+$/, "");
const PORT = 9291;
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let echecs = 0;
const verifier = (label, ok, detail = "") => {
  console.log(`${ok ? "[OK]" : "[X] "} ${label}${detail ? "  " + detail : ""}`);
  if (!ok) echecs++;
};

// Quelle enceinte regarder : la première pilotée par Music Assistant.
const etats = await (
  await fetch(`${HA}/api/states`, { headers: { Authorization: `Bearer ${env.HA_TOKEN}` } })
).json();
const lecteurs = etats.filter((e) => e.entity_id.startsWith("media_player."));
const mass = lecteurs.filter((e) => e.attributes.mass_player_type !== undefined);
const ENTITE = (mass[0] ?? lecteurs[0]).entity_id;
console.log(`\nadresse : ${HA}\nenceinte : ${ENTITE}\n`);

const profile = mkdtempSync(join(tmpdir(), "vinyl-real-"));

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

const navigateur = spawn(EDGE, [
  "--headless=new",
  "--no-sandbox",
  "--disable-extensions",
  "--no-first-run",
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${profile}`,
  "--window-size=1440,900",
  APP,
]);

fermerAuDepart(navigateur);

let wsUrl = null;
for (let i = 0; i < 80 && !wsUrl; i++) {
  try {
    const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
    const t = list.find((x) => x.type === "page" && x.url.startsWith(APP.slice(0, 21)));
    if (t) wsUrl = t.webSocketDebuggerUrl;
  } catch {}
  if (!wsUrl) await sleep(250);
}

let id = 1;
const attente = new Map();
const sock = new WebSocket(wsUrl);
await new Promise((r) => (sock.onopen = r));
const journalNav = [];
sock.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (m.method === "Log.entryAdded") journalNav.push(m.params.entry);
  if (m.method === "Runtime.consoleAPICalled" && m.params.type === "error") {
    journalNav.push({ source: "console", text: m.params.args.map((a) => a.value).join(" ") });
  }
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
await envoyer("Log.enable");
await envoyer("Page.enable");
await sleep(600);

await evaluer(
  `localStorage.setItem("mdvinyl.settings.v1", ${JSON.stringify(
    JSON.stringify({
      haUrl: HA,
      token: env.HA_TOKEN,
      entityId: ENTITE,
      vinyl: "tinted",
      background: "adaptive",
      playControl: "arm",
      lyrics: false,
      idleMinutes: 0,
      counterRotateLabel: false,
      rpm: 33.3333,
    }),
  )})`,
);
await envoyer("Page.reload");
await sleep(5000);

// ------------------------------------------------------------------ liaison

console.log("-- liaison --");
const liaison = JSON.parse(
  await evaluer(`JSON.stringify({
    statut: document.querySelector(".status")?.textContent ?? null,
    piece: document.querySelector(".hud__name")?.textContent ?? null,
    titre: document.querySelector(".track__title")?.textContent ?? null,
    artiste: document.querySelector(".track__artist")?.textContent ?? null,
    reglagesOuverts: !!document.querySelector(".setup"),
  })`),
);

verifier(
  "la connexion aboutit — aucun message d'erreur",
  liaison.statut === null,
  liaison.statut ?? "",
);
verifier(
  "le nom de la pièce arrive de Home Assistant",
  Boolean(liaison.piece),
  liaison.piece ?? "(vide)",
);
console.log(`      en lecture : ${liaison.titre ?? "—"} / ${liaison.artiste ?? "—"}`);

// ------------------------------------------------------------------ bibliothèque

console.log("\n-- bibliothèque réelle --");
await evaluer(`document.querySelector('[aria-label="Bibliothèque"]')?.click()`);
await sleep(6000);

const biblio = JSON.parse(
  await evaluer(`JSON.stringify({
    erreur: document.querySelector(".library__error")?.textContent ?? null,
    compte: document.querySelector(".library__count")?.textContent ?? null,
    titres: [...document.querySelectorAll(".crate__label b")].map((e) => e.textContent).slice(0, 6),
    artistes: [...document.querySelectorAll(".crate__label span")].map((e) => e.textContent).slice(0, 6),
    images: [...document.querySelectorAll(".crate__art")].length,
    imagesChargees: [...document.querySelectorAll("img.crate__art")].filter((i) => i.naturalWidth > 0).length,
    premiere: document.querySelector("img.crate__art")?.src ?? null,
  })`),
);

verifier("aucune erreur de bibliothèque", biblio.erreur === null, biblio.erreur ?? "");
verifier("des albums sont revenus", /\d/.test(biblio.compte ?? ""), biblio.compte ?? "");
verifier(
  "les noms d'albums sont lus",
  biblio.titres.filter(Boolean).length > 0,
  biblio.titres.slice(0, 4).join(" / "),
);
verifier(
  "les artistes sont lus",
  biblio.artistes.filter((a) => a && a.length > 0).length > 0,
  biblio.artistes.slice(0, 4).join(" / "),
);
verifier(
  "les pochettes de la bibliothèque se chargent vraiment",
  biblio.imagesChargees > 0,
  `${biblio.imagesChargees}/${biblio.images} affichées`,
);
console.log(`      exemple : ${(biblio.premiere ?? "").slice(0, 90)}`);

// La couleur du texte sur la tranche dépend d'une lecture de pixels : c'est
// elle qui casse si le CDN n'autorise pas la lecture entre origines.
const encre = await evaluer(
  `[...document.querySelectorAll(".crate__label")].map((e) => e.dataset.ink).join(",")`,
);
verifier(
  "les pixels des pochettes sont lisibles (couleur du titre adaptée)",
  (encre ?? "").includes("dark"),
  encre ?? "",
);

// ------------------------------------------------------------------ recherche

console.log("\n-- recherche dans Deezer --");
await evaluer(`(() => {
  const champ = document.querySelector(".library__search input");
  const poser = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set;
  poser.call(champ, "miles davis");
  champ.dispatchEvent(new Event("input", { bubbles: true }));
})()`);
await sleep(4000);

const cherche = JSON.parse(
  await evaluer(`JSON.stringify({
    titres: [...document.querySelectorAll(".crate__label b")].map((e) => e.textContent).slice(0, 6),
    erreur: document.querySelector(".library__error")?.textContent ?? null,
  })`),
);
verifier("la recherche renvoie des résultats", cherche.titres.filter(Boolean).length > 0, cherche.titres.slice(0, 4).join(" / "));
verifier("aucune erreur de recherche", cherche.erreur === null, cherche.erreur ?? "");

await evaluer(`document.querySelector('[aria-label="Retour à la platine"]')?.click()`);
await sleep(600);

// ------------------------------------------------------------------ enceintes

console.log("\n-- enceintes --");
await evaluer(`window.dispatchEvent(new PointerEvent("pointermove", { bubbles: true }))`);
await evaluer(`document.querySelector(".hud__room")?.click()`);
await sleep(3000);

const enceintes = JSON.parse(
  await evaluer(`JSON.stringify({
    erreur: document.querySelector(".speakers .sidepanel__error")?.textContent ?? null,
    noms: [...document.querySelectorAll(".speakers .sidepanel__text b")].map((e) => e.textContent),
  })`),
);
verifier(
  "la liste des enceintes se remplit",
  enceintes.noms.length > 0,
  enceintes.erreur ?? `${enceintes.noms.length} enceintes : ${enceintes.noms.slice(0, 5).join(", ")}`,
);

// ------------------------------------------------------------------ file

console.log("\n-- file d'attente --");
await evaluer(`document.querySelector('[title="À suivre"]')?.click()`);
await sleep(3000);
const file = JSON.parse(
  await evaluer(`JSON.stringify({
    erreur: document.querySelector(".queue .sidepanel__error")?.textContent ?? null,
    vide: document.querySelector(".sidepanel__empty")?.textContent ?? null,
    lignes: [...document.querySelectorAll(".queue__item .sidepanel__text b")].map((e) => e.textContent).slice(0, 5),
  })`),
);
verifier(
  "la file est lisible",
  file.erreur === null,
  file.erreur ?? (file.lignes.length ? file.lignes.join(" / ") : (file.vide ?? "")),
);

// ------------------------------------------------------------------ le journal du navigateur

const graves = journalNav.filter(
  (e) => e.level === "error" || e.source === "console" || e.source === "security",
);
console.log("\n-- erreurs du navigateur --");
if (graves.length === 0) console.log("      aucune");
for (const e of graves.slice(0, 12)) console.log(`      ${(e.text ?? "").slice(0, 150)}`);

console.log(echecs === 0 ? "\nTout passe." : `\n${echecs} vérification(s) en échec.`);
process.exit(0);
