/**
 * Vérifie le chemin Home Assistant réel, de bout en bout.
 *
 * L'app tourne dans un vrai navigateur, branchée sur le faux Home Assistant de
 * tools/fake-ha.mjs, qui parle le vrai protocole. On contrôle les deux sens :
 *  - ce que l'app AFFICHE à partir des charges utiles Music Assistant ;
 *  - ce qu'elle ENVOIE, en relisant le journal du serveur.
 *
 * C'est ce qui permet d'affirmer qu'une fonction marchera contre une vraie
 * installation sans en avoir une sous la main — à condition que le faux parle
 * comme le vrai. Il ne le faisait pas pour get_queue, et la file vide de
 * l'utilisateur est passée entre les mailles : ses formes sont désormais
 * relevées sur une vraie installation.
 *
 * Usage :  node tools/fake-ha.mjs &  puis  node tools/check-ha.mjs <url-app>
 */
import { spawn, spawnSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const APP = (process.argv[2] ?? "http://localhost:4192").replace(/\/+$/, "");
const HA = "http://localhost:8123";
const PORT = 9251;

/** Même liste que le faux serveur : sert à savoir quel album on a demandé. */
const ALBUMS_FAUX = [
  "Random Access Memories",
  "Discovery",
  "In Rainbows",
  "Kid A",
  "Blue Train",
  "Kind of Blue",
  "Voodoo",
  "Aja",
  "Rumours",
  "Songs in the Key of Life",
  "The Dark Side of the Moon",
  "Homogenic",
];
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let echecs = 0;
const verifier = (label, ok, detail = "") => {
  console.log(`${ok ? "[OK]" : "[X] "} ${label}${detail ? "  " + detail : ""}`);
  if (!ok) echecs++;
};

// Le faux serveur repart d'un état propre : sinon la série précédente fausse
// les vérifications d'état initial et le journal mélange deux exécutions.
await fetch(`${HA}/_reset`);

const profile = mkdtempSync(join(tmpdir(), "vinyl-ha-"));

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
  "--disable-gpu",
  "--disable-extensions",
  "--no-first-run",
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${profile}`,
  "--window-size=1440,900",
  APP,
]);

fermerAuDepart(navigateur);

let ws = null;
for (let i = 0; i < 60 && !ws; i++) {
  try {
    const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
    const cible = list.find((t) => t.type === "page" && t.url.startsWith(APP.slice(0, 21)));
    if (cible) ws = cible.webSocketDebuggerUrl;
  } catch {
    /* pas encore prêt */
  }
  if (!ws) await sleep(250);
}

let id = 1;
const attente = new Map();
const sock = new WebSocket(ws);
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
const evaluer = async (expression) =>
  (await envoyer("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true }))
    ?.result?.value;

/**
 * Écrire dans un champ React.
 *
 * Poser `value` directement ne suffit pas : React garde sa propre copie et
 * remettrait l'ancienne valeur à la frappe suivante. On passe donc par le
 * mutateur natif du prototype, puis on émet l'événement que React écoute.
 */
const saisir = (selecteur, texte) =>
  evaluer(`(() => {
    const champ = document.querySelector(${JSON.stringify(selecteur)});
    if (!champ) return false;
    const poser = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set;
    poser.call(champ, ${JSON.stringify(texte)});
    champ.dispatchEvent(new Event("input", { bubbles: true }));
    return true;
  })()`);

/** Les commandes s'effacent après quelques secondes sans geste : on les fait revenir. */
const reveiller = () =>
  evaluer(`window.dispatchEvent(new PointerEvent("pointermove", { bubbles: true })), true`);

/** Ce que l'app a envoyé DEPUIS le dernier appel, pour ne pas relire tout l'historique. */
let lu = 0;
const journalDepuis = async () => {
  const tout = await (await fetch(`${HA}/_journal`)).json();
  const neuf = tout.slice(lu);
  lu = tout.length;
  return neuf.filter((m) => m.type === "call_service");
};

await envoyer("Runtime.enable");
await envoyer("Page.enable");
await sleep(700);

/*
 * GARDE-FOUS — à ne jamais retirer.
 *
 * La page construite embarque le vrai jeton de .env. Un jour, les réglages de
 * test ont été posés AVANT que la page ne soit sur la bonne origine : ils sont
 * partis ailleurs, l'app a démarré avec le vrai jeton, et le relais de la
 * prévisualisation l'a menée au vrai Home Assistant. Le test a lancé un album,
 * réordonné une file et transféré la musique vers une enceinte de la maison,
 * en pleine nuit.
 *
 * Désormais : les réglages ne se posent que sur l'origine de l'app, se relisent,
 * et AUCUN clic n'a lieu tant qu'on n'a pas prouvé que l'app parle au faux
 * serveur avec le jeton de test. Au moindre doute, on s'arrête net.
 */
const ORIGINE = new URL(APP).origin;

async function poserReglages(reglages) {
  for (let i = 0; i < 60; i++) {
    const pret = await evaluer(
      `location.origin === ${JSON.stringify(ORIGINE)} && document.readyState === "complete"`,
    );
    if (pret) break;
    await sleep(100);
  }
  await evaluer(
    `localStorage.setItem("mdvinyl.settings.v1", ${JSON.stringify(JSON.stringify(reglages))})`,
  );
  const relu = (await evaluer(`localStorage.getItem("mdvinyl.settings.v1") ?? ""`)) ?? "";
  if (!relu.includes('"jeton-de-test"') || !relu.includes(HA)) {
    console.error(
      `\nARRÊT : les réglages de test ne sont pas posés (page : ${await evaluer("location.href")}). Aucun clic n'a eu lieu.`,
    );
    process.exit(2);
  }
}

async function exigerLeFaux() {
  for (let i = 0; i < 50; i++) {
    const piece = await evaluer(`document.querySelector(".hud__name")?.textContent ?? null`);
    const journal = await (await fetch(`${HA}/_journal`)).json();
    const authentifie = journal.some((m) => m.type === "auth" && m.access_token === "jeton-de-test");
    if (piece === "Salon" && authentifie) return;
    // Une autre pièce que celle du faux serveur : l'app parle à autre chose.
    if (piece && piece !== "Salon" && piece !== "Cuisine" && piece !== "Chambre") break;
    await sleep(150);
  }
  console.error("\nARRÊT : l'app ne parle pas au faux Home Assistant. Aucun clic n'a eu lieu.");
  process.exit(2);
}

// --------------------------------------------------- 1. configuration + liaison

console.log("\n-- liaison --");
await poserReglages({
  haUrl: HA,
  token: "jeton-de-test",
  entityId: "media_player.salon",
  vinyl: "black",
  background: "adaptive",
  playControl: "arm",
  lyrics: false,
  idleMinutes: 0,
  counterRotateLabel: false,
  rpm: 33.3333,
});
await envoyer("Page.reload");
await sleep(3200);
await exigerLeFaux();

const vu = await evaluer(`JSON.stringify({
  titre: document.querySelector(".track__title")?.textContent ?? null,
  artiste: document.querySelector(".track__artist")?.textContent ?? null,
  piece: document.querySelector(".hud__name")?.textContent ?? null,
  duree: document.querySelector(".times")?.textContent ?? null,
  pochette: document.querySelector(".sleeve__art")?.src ?? null,
  pochetteChargee: (() => { const i = document.querySelector(".sleeve__art"); return !!(i && i.naturalWidth > 0); })(),
  fond: getComputedStyle(document.querySelector(".backdrop")).backgroundColor,
})`);
const etat = JSON.parse(vu);

verifier("le morceau en cours arrive par le WebSocket", etat.titre === "Instant Crush", `titre = "${etat.titre}"`);
verifier("l'artiste et l'album suivent", (etat.artiste ?? "").includes("Daft Punk"), etat.artiste ?? "");
verifier("le nom de la pièce vient de l'entité", etat.piece === "Salon", etat.piece ?? "");
verifier("la durée est lue (5:37)", (etat.duree ?? "").includes("5:37"), etat.duree ?? "");
verifier(
  "la pochette passe par le proxy de Home Assistant",
  (etat.pochette ?? "").includes("/api/media_player_proxy/"),
  (etat.pochette ?? "").slice(0, 60),
);
verifier("la pochette se charge vraiment", etat.pochetteChargee === true);
verifier(
  "le fond adaptatif a pris la couleur de la pochette",
  etat.fond !== "rgba(0, 0, 0, 0)" && !etat.fond.includes("220, 6%"),
  etat.fond,
);

// --------------------------------------------------- 2. bibliothèque

console.log("\n-- bibliothèque --");
await evaluer(`document.querySelector('[aria-label="Bibliothèque"]')?.click()`);
await sleep(2500);

const biblio = JSON.parse(
  await evaluer(`JSON.stringify({
    erreur: document.querySelector(".library__error")?.textContent ?? null,
    nombre: document.querySelector(".library__count")?.textContent ?? null,
    titres: [...document.querySelectorAll(".crate__label b")].map((e) => e.textContent).slice(0, 4),
    artistes: [...document.querySelectorAll(".crate__label span")].map((e) => e.textContent).slice(0, 4),
  })`),
);

verifier("aucune erreur de bibliothèque", biblio.erreur === null, biblio.erreur ?? "");
verifier("les albums sont comptés", (biblio.nombre ?? "").includes("12"), biblio.nombre ?? "");
verifier(
  "les noms d'albums sont lus",
  biblio.titres.includes("Random Access Memories"),
  biblio.titres.join(" / "),
);
verifier(
  "l'artiste est extrait du tableau artists[]",
  biblio.artistes.some((a) => a === "Daft Punk"),
  biblio.artistes.join(" / "),
);

// --------------------------------------------------- 3. lecture d'un album

console.log("\n-- poser un album sur la platine --");
// On ne vise pas un album nommé : le clic peut atterrir sur un voisin, et ce
// n'est pas ce qu'on teste. On note QUEL album a été demandé, et on vérifie que
// c'est celui-là qui arrive sur la platine.
const boite = JSON.parse(
  await evaluer(`(() => {
    const items = [...document.querySelectorAll(".crate__item")];
    const cible = items[Math.floor(items.length / 2)];
    const r = cible.getBoundingClientRect();
    return JSON.stringify({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  })()`),
);
for (const type of ["mousePressed", "mouseReleased"])
  await envoyer("Input.dispatchMouseEvent", {
    type,
    x: boite.x,
    y: boite.y,
    button: "left",
    buttons: type === "mousePressed" ? 1 : 0,
    clickCount: 1,
  });
await sleep(2600);

const journal = await (await fetch(`${HA}/_journal`)).json();
const appels = journal.filter((m) => m.type === "call_service");
const lecture = appels.find((m) => m.service === "play_media");
const bibliotheque = appels.find((m) => m.service === "get_library");

verifier(
  "get_library est ciblé par config_entry_id",
  typeof bibliotheque?.service_data?.config_entry_id === "string" &&
    bibliotheque.service_data.media_type === "album",
  JSON.stringify(bibliotheque?.service_data ?? null),
);
verifier("get_library demande bien une réponse", bibliotheque?.return_response === true);
verifier(
  "un album remplace la file (enqueue: replace, media_type: album)",
  lecture?.service_data?.enqueue === "replace" && lecture?.service_data?.media_type === "album",
  JSON.stringify(lecture?.service_data ?? null),
);
verifier(
  "play_media envoie l'URI de l'album et vise l'enceinte",
  lecture?.service_data?.media_id?.startsWith("library://album/") &&
    lecture?.target?.entity_id === "media_player.salon",
  JSON.stringify({ data: lecture?.service_data, target: lecture?.target }),
);

const apres = JSON.parse(
  await evaluer(`JSON.stringify({
    titre: document.querySelector(".track__title")?.textContent ?? null,
    biblioFermee: !document.querySelector(".library"),
  })`),
);
// L'URI demandée dit quel album le serveur a mis en lecture ; la platine doit
// afficher celui-là et pas un autre.
const attendu = ALBUMS_FAUX[Number((lecture?.service_data?.media_id ?? "").split("/").pop()) - 1];
verifier(
  "la platine affiche l'album réellement demandé",
  attendu !== undefined && (apres.titre ?? "").startsWith(attendu),
  `demandé « ${attendu} », affiché « ${apres.titre} »`,
);
verifier("la bibliothèque s'est refermée", apres.biblioFermee === true);


// --------------------------------------------------- 4. file d'attente

console.log("\n-- file d'attente --");
await reveiller();
// Ciblé par le titre : l'apostrophe de « File d'attente » ne survit pas aux
// trois niveaux de citation entre ce fichier, CDP et la page.
await evaluer('document.querySelector(\'[title="À suivre"]\')?.click()');
await sleep(1800);

const lireFile = async () =>
  JSON.parse(
    await evaluer(`JSON.stringify({
      ouvert: !!document.querySelector(".queue"),
      erreur: document.querySelector(".queue .sidepanel__error")?.textContent ?? null,
      note: document.querySelector(".queue .sidepanel__note")?.textContent ?? null,
      entete: document.querySelector(".queue h2 small")?.textContent ?? null,
      titres: [...document.querySelectorAll(".queue__item .sidepanel__text b")].map((e) => e.textContent),
      artistes: [...document.querySelectorAll(".queue__item .sidepanel__text span")].map((e) => e.textContent),
      durees: [...document.querySelectorAll(".queue__time")].map((e) => e.textContent),
      rangCourant: [...document.querySelectorAll(".queue__item")].findIndex((e) => e.dataset.state === "now"),
      pochettes: [...document.querySelectorAll(".queue__art")].filter((e) => getComputedStyle(e).backgroundImage !== "none").length,
      poignees: document.querySelectorAll(".queue__grip").length,
      mobiles: [...document.querySelectorAll(".queue__item")].map((e) => e.dataset.movable === "true"),
    })`),
  );

let file = await lireFile();
const journalMA = async () => (await (await fetch(`${HA}/_journal_ma`)).json());

/*
 * LE défaut signalé : « quand je mets un album, il n'y a rien dans la file ».
 * L'album posé à l'étape précédente doit s'y trouver, en entier.
 */
verifier("le volet de file s'ouvre", file.ouvert === true);
verifier("aucune erreur de file", file.erreur === null, file.erreur ?? "");
verifier(
  "l'album qu'on vient de poser remplit la file, en entier",
  file.titres.length === 8 && (file.titres[0] ?? "").startsWith(attendu ?? "?"),
  `${file.titres.length} morceaux, premier « ${file.titres[0]} »`,
);
verifier(
  "le titre est celui du morceau, sans l'artiste recollé devant",
  !(file.titres[0] ?? "").includes(" - "),
  file.titres[0] ?? "",
);
verifier(
  "l'artiste est lu dans media_item.artists[]",
  file.artistes[0] !== "" && file.artistes[0] !== undefined,
  file.artistes.slice(0, 3).join(" / "),
);
verifier("la durée de chaque morceau est lue", file.durees[0] === "3:20", file.durees.slice(0, 3).join(" / "));
verifier("le morceau en cours vient de current_index", file.rangCourant === 0, `rang ${file.rangCourant}`);
verifier("les pochettes de la file sont résolues", file.pochettes === 8, `${file.pochettes}/8`);
verifier("l'en-tête compte les titres", (file.entete ?? "").startsWith("8 titres"), file.entete ?? "");
verifier(
  "chaque morceau à venir a sa poignée, pas celui en cours",
  file.poignees === 7 && file.mobiles[0] === false,
  `${file.poignees} poignée(s)`,
);
verifier("pas d'avertissement quand la file est complète", file.note === null, file.note ?? "");

let recent = await journalDepuis();
const appelFile = recent.find((m) => m.service === "get_queue");
verifier(
  "get_queue est ciblé par entité — c'est la file d'un lecteur",
  appelFile?.target?.entity_id === "media_player.salon" &&
    appelFile?.service_data?.config_entry_id === undefined,
  JSON.stringify({ target: appelFile?.target, data: appelFile?.service_data }),
);

const toutHA = await (await fetch(`${HA}/_journal`)).json();
const superviseur = toutHA.filter((m) => m.type === "supervisor/api").map((m) => `${m.method} ${m.endpoint}`);
verifier(
  "la liaison Music Assistant passe par le superviseur et une session d'ingress",
  superviseur.includes("get /addons") && superviseur.some((e) => e.includes("/ingress/")),
  superviseur.join(", "),
);
let ma = await journalMA();
verifier(
  "la file complète est lue chez Music Assistant, par l'identifiant que donne get_queue",
  ma.some((m) => m.command === "player_queues/items" && m.args?.queue_id === "salon_file"),
  ma.map((m) => m.command).join(", "),
);

/*
 * Sauter sur une piste. Par Music Assistant, c'est play_index sur la ligne
 * touchée : l'ancien chemin (play_media « play ») insérait une COPIE du morceau.
 */
const vise = JSON.parse(
  await evaluer(`(async () => {
    const lignes = [...document.querySelectorAll(".queue__pick")];
    const cible = lignes[3];
    const titre = cible.querySelector("b").textContent;
    // Le DOM n'est pas à jour au retour de click() : React peint au tour
    // suivant. On laisse passer deux images, bien en deçà de la durée de la marque.
    cible.click();
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    const lignesApres = [...document.querySelectorAll(".queue__item")];
    return JSON.stringify({
      titre,
      marquees: lignesApres.filter((e) => e.dataset.state === "now").length,
      rangMarque: lignesApres.findIndex((e) => e.dataset.state === "now"),
    });
  })()`),
);
verifier(
  "la ligne touchée est marquée aussitôt, sans attendre le retour",
  vise.marquees === 1 && vise.rangMarque === 3,
  `rang ${vise.rangMarque}, ${vise.marquees} marquée(s)`,
);

await sleep(400);
ma = await journalMA();
const saut = ma.find((m) => m.command === "player_queues/play_index");
const idsAvant = JSON.parse(
  await evaluer(`JSON.stringify([...document.querySelectorAll(".queue__item")].map((e) => e.querySelector("b").textContent))`),
);
verifier(
  "le saut joue la ligne elle-même (play_index), sans insérer de copie",
  saut?.args?.queue_id === "salon_file" && typeof saut?.args?.index === "string",
  JSON.stringify(saut?.args ?? null),
);
recent = await journalDepuis();
verifier(
  "aucun play_media « play » n'est envoyé quand Music Assistant est joint",
  !recent.some((m) => m.service === "play_media"),
  recent.map((m) => m.service).join(", "),
);

// Home Assistant confirme bien avant que Music Assistant n'ait recalé sa file :
// la pastille ne doit jamais revenir sur l'ancienne ligne entre-temps.
const suivi = [];
for (let i = 0; i < 10; i++) {
  suivi.push(
    await evaluer(`[...document.querySelectorAll(".queue__item")].findIndex((e) => e.dataset.state === "now")`),
  );
  await sleep(220);
}
verifier("la pastille ne revient jamais sur le morceau précédent", suivi.every((r) => r === 3), `rangs observés : ${suivi.join(",")}`);
verifier(
  "la platine joue bien le morceau demandé",
  (await evaluer(`document.querySelector(".track__title")?.textContent`)) === vise.titre,
  `demandé « ${vise.titre} »`,
);
file = await lireFile();
verifier("la file garde sa longueur après un saut", file.titres.length === 8, `${file.titres.length} morceaux`);
verifier(
  "rien ne se déplace avant le morceau en cours",
  file.poignees === 4 && file.mobiles.slice(0, 4).every((m) => m === false),
  `${file.poignees} poignée(s)`,
);

// ------------------------------------------------ 4 bis. réordonner au doigt

console.log("\n-- réordonner la file --");

/** Glisse depuis (x, y) de dy pixels, par la souris du protocole DevTools. */
async function glisser(x, y, dy, attente = 0) {
  const souris = (type, yy, buttons) =>
    envoyer("Input.dispatchMouseEvent", { type, x, y: yy, button: "left", buttons, clickCount: type === "mouseMoved" ? 0 : 1 });
  await souris("mousePressed", y, 1);
  if (attente) await sleep(attente);
  for (let k = 1; k <= 10; k++) {
    await souris("mouseMoved", y + (dy * k) / 10, 1);
    await sleep(25);
  }
  await sleep(120);
  await souris("mouseReleased", y + dy, 0);
}

const geometrie = JSON.parse(
  await evaluer(`(() => {
    const lignes = [...document.querySelectorAll(".queue__item")];
    const a = lignes[4].getBoundingClientRect();
    const b = lignes[5].getBoundingClientRect();
    const poignee = lignes[5].querySelector(".queue__grip").getBoundingClientRect();
    const corps = lignes[6].querySelector(".queue__pick").getBoundingClientRect();
    return JSON.stringify({
      pas: b.top - a.top,
      px: poignee.left + poignee.width / 2, py: poignee.top + poignee.height / 2,
      cx: corps.left + corps.width / 3, cy: corps.top + corps.height / 2,
    });
  })()`),
);

// La poignée de la ligne 5, deux lignes plus bas.
await glisser(geometrie.px, geometrie.py, geometrie.pas * 2);
await sleep(500);
let ordre = JSON.parse(
  await evaluer(`JSON.stringify([...document.querySelectorAll(".queue__item b")].map((e) => e.textContent))`),
);
ma = await journalMA();
const deplacement = ma.filter((m) => m.command === "player_queues/move_item").pop();
verifier(
  "la poignée déplace le morceau là où on le lâche",
  ordre[7] === idsAvant[5] && ordre[5] === idsAvant[6],
  `ligne 7 : « ${ordre[7]} »`,
);
verifier(
  "Music Assistant reçoit move_item avec le bon décalage",
  deplacement?.args?.pos_shift === 2 && typeof deplacement?.args?.queue_item_id === "string",
  JSON.stringify(deplacement?.args ?? null),
);
await sleep(900);
const ordreServeur = JSON.parse(
  await evaluer(`JSON.stringify([...document.querySelectorAll(".queue__item b")].map((e) => e.textContent))`),
);
verifier(
  "après relecture, l'ordre est celui que Music Assistant a enregistré",
  ordreServeur.join("|") === ordre.join("|"),
);

// Appui long sur le corps de la ligne 6, une ligne plus haut.
const avantAppui = ordreServeur;
await glisser(geometrie.cx, geometrie.cy, -geometrie.pas, 520);
await sleep(700);
ordre = JSON.parse(
  await evaluer(`JSON.stringify([...document.querySelectorAll(".queue__item b")].map((e) => e.textContent))`),
);
ma = await journalMA();
verifier(
  "un appui long sur la ligne la prend aussi",
  ordre[5] === avantAppui[6] && ma.filter((m) => m.command === "player_queues/move_item").pop()?.args?.pos_shift === -1,
  `ligne 5 : « ${ordre[5]} »`,
);
verifier(
  "l'appui long ne saute pas sur le morceau",
  ma.filter((m) => m.command === "player_queues/play_index").length === 1,
);

// Un geste bref sur le corps de ligne n'est PAS une prise : il doit défiler
// ou sauter, jamais déplacer.
const mouvementsAvant = ma.filter((m) => m.command === "player_queues/move_item").length;
await glisser(geometrie.cx, geometrie.cy, geometrie.pas * 2, 0);
await sleep(500);
ma = await journalMA();
verifier(
  "un glissé sans appui long ne déplace rien",
  ma.filter((m) => m.command === "player_queues/move_item").length === mouvementsAvant,
);

// Au clavier : les flèches sur la poignée.
await evaluer(`(() => {
  const g = [...document.querySelectorAll(".queue__grip")].pop();
  g.focus();
  g.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }));
})()`);
await sleep(500);
ma = await journalMA();
verifier(
  "la flèche du haut sur une poignée remonte le morceau d'un rang",
  ma.filter((m) => m.command === "player_queues/move_item").pop()?.args?.pos_shift === -1 &&
    ma.filter((m) => m.command === "player_queues/move_item").length === mouvementsAvant + 1,
);

// Un autre appareil réordonne : l'app ne l'apprend que par les événements.
const apresAutre = await (await fetch(`${HA}/_bouger?de=7&vers=4`)).json();
await sleep(1000);
ordre = JSON.parse(
  await evaluer(`JSON.stringify([...document.querySelectorAll(".queue__item b")].map((e) => e.textContent))`),
);
verifier(
  "un changement fait ailleurs s'affiche tout seul, par les événements de Music Assistant",
  ordre.join("|") === apresAutre.join("|"),
  `ligne 4 : « ${ordre[4]} »`,
);

// ------------------------------------------------ 4 ter. écouter ensuite, retirer

console.log("\n-- écouter ensuite, retirer --");

const lignes = async () =>
  JSON.parse(
    await evaluer(`JSON.stringify([...document.querySelectorAll(".queue__item")].map((l) => ({
      titre: l.querySelector("b").textContent,
      id: l.dataset.id,
      ouverte: l.dataset.open === "true",
      eclair: l.dataset.flash === "true",
      actions: [...l.querySelectorAll(".queue__action span")].map((s) => s.textContent),
      points: !!l.querySelector(".queue__more"),
    })))`),
  );
const commandes = async (nom) => (await journalMA()).filter((m) => m.command === nom);
const troisPoints = (i) =>
  evaluer(`document.querySelectorAll(".queue__item")[${i}].querySelector(".queue__more")?.click(), true`);
const action = (i, libelle) =>
  evaluer(`[...document.querySelectorAll(".queue__item")[${i}].querySelectorAll(".queue__action")].find((b) => b.textContent.includes(${JSON.stringify(libelle)}))?.click(), true`);

let avantAction = await lignes();
const enCours = avantAction.findIndex((_, i) => i === 3);
verifier("le morceau en cours n'a pas de ⋯", enCours === 3 && avantAction[3].points === false);

await troisPoints(6);
await sleep(400);
let apresAction = await lignes();
verifier(
  "⋯ découvre « Ensuite » et « Retirer » sur un morceau à venir",
  apresAction[6].ouverte && apresAction[6].actions.join("|") === "Ensuite|Retirer",
  apresAction[6].actions.join(" / "),
);

let mouvements = (await commandes("player_queues/move_item")).length;
await action(6, "Ensuite");
await sleep(900);
apresAction = await lignes();
const deplace = (await commandes("player_queues/move_item")).pop();
verifier(
  "« Ensuite » place le morceau juste après celui en cours, sans le traîner",
  apresAction[4].titre === avantAction[6].titre && deplace?.args?.pos_shift === -2 &&
    (await commandes("player_queues/move_item")).length === mouvements + 1,
  `rang 4 : « ${apresAction[4].titre} », décalage ${deplace?.args?.pos_shift}`,
);
verifier("sans doublon : la file garde sa longueur", apresAction.length === avantAction.length, `${apresAction.length} morceaux`);
verifier("les actions se referment après usage", apresAction.every((l) => !l.ouverte));
verifier(
  "le morceau déjà « ensuite » ne propose plus que « Retirer »",
  apresAction[4].actions.join("|") === "Retirer",
  apresAction[4].actions.join(" / "),
);

// Glisser la ligne vers la gauche découvre les mêmes actions.
const boiteLigne = JSON.parse(
  await evaluer(`JSON.stringify((() => { const r = document.querySelectorAll(".queue__item")[7].querySelector(".queue__pick").getBoundingClientRect(); return { x: r.left + r.width * 0.6, y: r.top + r.height / 2 }; })())`),
);
{
  const souris = (type, x, buttons) =>
    envoyer("Input.dispatchMouseEvent", { type, x, y: boiteLigne.y, button: "left", buttons, clickCount: type === "mouseMoved" ? 0 : 1 });
  await souris("mousePressed", boiteLigne.x, 1);
  for (let k = 1; k <= 10; k++) {
    await souris("mouseMoved", boiteLigne.x - 16 * k, 1);
    await sleep(20);
  }
  await souris("mouseReleased", boiteLigne.x - 160, 0);
}
await sleep(500);
avantAction = await lignes();
verifier("glisser une ligne vers la gauche découvre ses actions", avantAction[7].ouverte === true);
verifier(
  "le glissement ne saute pas sur le morceau",
  (await commandes("player_queues/play_index")).length === 1,
);

await action(7, "Retirer");
await sleep(900);
apresAction = await lignes();
const retrait = (await commandes("player_queues/delete_item")).pop();
verifier(
  "« Retirer » enlève le morceau de la file chez Music Assistant",
  apresAction.length === avantAction.length - 1 && !apresAction.some((l) => l.id === avantAction[7].id) &&
    retrait?.args?.item_id_or_index === avantAction[7].id,
  `${apresAction.length} morceaux, ${JSON.stringify(retrait?.args ?? null)}`,
);
verifier(
  "l'en-tête suit",
  (await evaluer(`document.querySelector(".queue h2 small")?.textContent ?? ""`)).startsWith(`${apresAction.length} titres`),
);

// Un morceau déjà joué : on ne peut plus le déplacer, on le rejoue ensuite.
avantAction = await lignes();
await troisPoints(1);
await sleep(300);
verifier(
  "un morceau déjà joué propose « Ensuite », pas « Retirer »",
  (await lignes())[1].actions.join("|") === "Ensuite",
  (await lignes())[1].actions.join(" / "),
);
await action(1, "Ensuite");
await sleep(1100);
apresAction = await lignes();
const remis = (await commandes("player_queues/play_media")).pop();
verifier(
  "il est remis juste après le morceau en cours (play_media « next »)",
  remis?.args?.option === "next" && apresAction[4]?.titre === avantAction[1].titre && apresAction.length === avantAction.length + 1,
  `rang 4 : « ${apresAction[4]?.titre} », ${JSON.stringify(remis?.args ?? null)}`,
);

// Des actions ouvertes : toucher une autre ligne les referme, sans sauter.
await troisPoints(5);
await sleep(300);
const sauts = (await commandes("player_queues/play_index")).length;
await evaluer(`document.querySelectorAll(".queue__item")[6].querySelector(".queue__pick").click(), true`);
await sleep(500);
verifier(
  "toucher ailleurs referme les actions sans sauter sur un morceau",
  (await lignes()).every((l) => !l.ouverte) && (await commandes("player_queues/play_index")).length === sauts,
);

await evaluer("document.querySelector('[aria-label=\"Fermer la file\"]')?.click()");
await sleep(400);

// --------------------------------------------------- 5. recherche chez le fournisseur

console.log("\n-- recherche --");
await reveiller();
await evaluer("document.querySelector('[aria-label=\"Bibliothèque\"]')?.click()");
await sleep(1300);
await saisir(".library__search input", "Radiohead");
await sleep(1700);

const cherche = JSON.parse(
  await evaluer(`JSON.stringify({
    titres: [...document.querySelectorAll(".crate__label b")].map((e) => e.textContent),
    compte: document.querySelector(".library__count")?.textContent ?? null,
  })`),
);

recent = await journalDepuis();
const appelRecherche = recent.find((m) => m.service === "search");

verifier(
  "search est ciblé par config_entry_id — c'est le fournisseur, pas l'enceinte",
  typeof appelRecherche?.service_data?.config_entry_id === "string" &&
    appelRecherche?.target === undefined,
  JSON.stringify(appelRecherche?.service_data ?? null),
);
verifier(
  "le texte tapé part bien dans le champ name",
  appelRecherche?.service_data?.name === "Radiohead",
  String(appelRecherche?.service_data?.name),
);
verifier(
  "la frappe est amortie : une seule requête, pas une par lettre",
  recent.filter((m) => m.service === "search").length === 1,
  `${recent.filter((m) => m.service === "search").length} requête(s)`,
);
verifier(
  "le bac affiche les résultats et non plus la bibliothèque",
  cherche.titres.includes("In Rainbows") && !cherche.titres.includes("Rumours"),
  cherche.titres.slice(0, 5).join(" / "),
);
verifier(
  "les morceaux trouvés suivent les albums",
  cherche.titres.some((t) => (t ?? "").includes("piste")),
  cherche.titres.filter((t) => (t ?? "").includes("piste")).join(" / "),
);

// Vider le champ doit rendre la bibliothèque entière, pas une liste vide.
await saisir(".library__search input", "");
await sleep(1000);
const revenu = await evaluer(
  '[...document.querySelectorAll(".crate__label b")].map((e) => e.textContent).join("|")',
);
verifier(
  "effacer la recherche rend la bibliothèque complète",
  revenu.includes("Rumours") || revenu.includes("Aja"),
  revenu.split("|").slice(0, 4).join(" / "),
);

await evaluer("document.querySelector('[aria-label=\"Retour à la platine\"]')?.click()");
await sleep(600);

// --------------------------------------------------- 5 bis. playlists

console.log("\n-- playlists --");
await reveiller();
await evaluer("document.querySelector('[aria-label=\"Bibliothèque\"]')?.click()");
await sleep(1200);
await evaluer(`[...document.querySelectorAll(".library__tabs button")].find((b) => b.textContent === "Playlists")?.click()`);
await sleep(1500);

const bac = JSON.parse(
  await evaluer(`JSON.stringify({
    compte: document.querySelector(".library__count")?.textContent ?? null,
    raccourci: document.querySelector(".library__fav span")?.textContent ?? null,
    legende: document.querySelector(".library__caption b")?.textContent ?? null,
    // Dans l'ordre du bac, pas dans l'ordre du DOM.
    noms: [...document.querySelectorAll(".crate__item")]
      .sort((a, b) => a.dataset.i - b.dataset.i)
      .map((e) => e.querySelector(".crate__label b").textContent),
    images: Object.fromEntries([...document.querySelectorAll(".crate__item")].map((e) => [
      e.querySelector(".crate__label b").textContent,
      e.querySelector(".crate__face--front img")?.getAttribute("src")?.slice(0, 40) ?? null,
    ])),
  })`),
);

verifier("l'onglet Playlists montre les playlists", (bac.compte ?? "").startsWith("7 playlist"), bac.compte ?? "");
verifier(
  "les coups de cœur passent en tête, celle du fournisseur d'abord",
  bac.noms[0] === "Coups de cœur" && bac.noms[1] === "Tous mes favoris",
  bac.noms.slice(0, 3).join(" / "),
);
verifier(
  "les playlists générées par Music Assistant portent un nom français",
  bac.noms.includes("Un album au hasard") && !bac.noms.some((n) => /favorited|Random/.test(n)),
  bac.noms.join(" / "),
);
verifier(
  "l'image de remplacement partagée est remplacée par une pochette dessinée",
  (bac.images["Tous mes favoris"] ?? "").startsWith("data:image") &&
    (bac.images["Écoutés récemment"] ?? "").startsWith("data:image"),
  JSON.stringify(bac.images["Tous mes favoris"]),
);
verifier(
  "une vraie pochette de fournisseur est gardée",
  (bac.images["Route de nuit"] ?? "").startsWith("https://cdn.example/"),
  JSON.stringify(bac.images["Route de nuit"]),
);
verifier(
  "le bac des playlists s'ouvre en son milieu, pas là où l'on avait laissé les albums",
  bac.legende === bac.noms[3],
  `au centre : « ${bac.legende} »`,
);
verifier("le raccourci des coups de cœur est dans l'en-tête", bac.raccourci === "Coups de cœur", bac.raccourci ?? "");

recent = await journalDepuis();
verifier(
  "get_library demande les playlists",
  recent.some((m) => m.service === "get_library" && m.service_data?.media_type === "playlist") ||
    (await (await fetch(`${HA}/_journal`)).json()).some(
      (m) => m.service === "get_library" && m.service_data?.media_type === "playlist",
    ),
);

await evaluer(`document.querySelector(".library__fav")?.click()`);
await sleep(1600);
recent = await journalDepuis();
const lecturePlaylist = recent.find((m) => m.service === "play_media");
verifier(
  "le raccourci lance la playlist entière, qui remplace la file",
  lecturePlaylist?.service_data?.media_type === "playlist" &&
    lecturePlaylist?.service_data?.enqueue === "replace" &&
    lecturePlaylist?.service_data?.media_id === "library://playlist/1",
  JSON.stringify(lecturePlaylist?.service_data ?? null),
);

await reveiller();
await evaluer('document.querySelector(\'[title="À suivre"]\')?.click()');
await sleep(1500);
const filePlaylist = await lireFile();
verifier(
  "la file contient les morceaux de la playlist",
  filePlaylist.titres.length === 8 && (filePlaylist.titres[0] ?? "").startsWith("Coups de cœur"),
  `${filePlaylist.titres.length} morceaux, premier « ${filePlaylist.titres[0]} »`,
);
await evaluer("document.querySelector('[aria-label=\"Fermer la file\"]')?.click()");
await sleep(400);

// --------------------------------------------------- 5 ter. ce qui s'affiche, et à l'envers

console.log("\n-- choisir ce qui s'affiche --");
await reveiller();
await evaluer("document.querySelector('[aria-label=\"Bibliothèque\"]')?.click()");
await sleep(1200);
await evaluer(`[...document.querySelectorAll(".library__tabs button")].find((b) => b.textContent === "Playlists")?.click()`);
await sleep(900);
await evaluer(`document.querySelector(".library__manage")?.click()`);
await sleep(700);

const lireChoix = async () =>
  JSON.parse(
    await evaluer(`JSON.stringify({
      ouvert: !!document.querySelector(".manage"),
      lignes: [...document.querySelectorAll(".manage__item b")].map((e) => e.textContent),
      compte: document.querySelector(".library__count")?.textContent ?? null,
      pastille: document.querySelector(".library__badge")?.textContent ?? null,
      legende: document.querySelector(".manage h2 small")?.textContent ?? null,
    })`),
  );

let choix = await lireChoix();
verifier("le réglage à côté des onglets ouvre la liste du bac", choix.ouvert && choix.lignes.length === 7, `${choix.lignes.length} ligne(s)`);

/** Bascule l'interrupteur n (0 = dans le bac, 1 = à l'envers) de la ligne nommée. */
const basculer = (nom, n) =>
  evaluer(`(() => {
    const ligne = [...document.querySelectorAll(".manage__item")].find((l) => l.querySelector("b").textContent === ${JSON.stringify(nom)});
    ligne.querySelectorAll(".manage__switch")[${n}].click();
    return true;
  })()`);

await basculer("Dimanche matin", 0);
await basculer("Jazz de minuit", 0);
await sleep(400);
choix = await lireChoix();
verifier(
  "masquer deux playlists les retire du bac",
  (choix.compte ?? "").startsWith("5 playlist") && choix.pastille === "2",
  `${choix.compte}, pastille ${choix.pastille}`,
);
verifier("elles restent dans la liste, pour pouvoir les rappeler", choix.lignes.length === 7);

await basculer("Coups de cœur", 1);
await sleep(900);
let donnees = (await (await fetch(`${HA}/_user_data`)).json()).md_vinyl_library ?? null;
verifier(
  "les choix sont rangés dans les données utilisateur de Home Assistant",
  donnees?.hidden?.length === 2 &&
    donnees.hidden.includes("library://playlist/3") &&
    donnees.hidden.includes("library://playlist/7") &&
    donnees.reversed?.includes("library://playlist/1"),
  JSON.stringify(donnees),
);

// Le filtre sert à agir en masse.
await saisir(".manage__tools input", "de");
await sleep(300);
const filtrees = (await lireChoix()).lignes;
verifier(
  "le filtre réduit la liste",
  filtrees.length > 0 && filtrees.length < 7 && filtrees.every((n) => n.toLowerCase().includes("de")),
  filtrees.join(" / "),
);
await saisir(".manage__tools input", "");
await sleep(200);

// Retrouver ses choix ailleurs : on efface la copie locale et on recharge.
// S'ils reviennent, c'est Home Assistant qui les a rendus.
await evaluer(`localStorage.removeItem("mdvinyl.library.v1"), true`);
await envoyer("Page.reload");
await sleep(3200);
await exigerLeFaux();
await reveiller();
await evaluer("document.querySelector('[aria-label=\"Bibliothèque\"]')?.click()");
await sleep(1500);
await evaluer(`[...document.querySelectorAll(".library__tabs button")].find((b) => b.textContent === "Playlists")?.click()`);
await sleep(900);
choix = await lireChoix();
verifier(
  "après rechargement, sans copie locale, le bac est toujours filtré : les choix viennent de Home Assistant",
  (choix.compte ?? "").startsWith("5 playlist"),
  choix.compte ?? "",
);

// La lecture à l'envers, par le raccourci des coups de cœur.
lu = (await (await fetch(`${HA}/_journal`)).json()).length;
const avantMA = (await journalMA()).length;
await evaluer(`document.querySelector(".library__fav")?.click()`);
await sleep(1800);
const commandesMA = (await journalMA()).slice(avantMA);
const pistes = commandesMA.find((m) => m.command === "music/playlists/playlist_tracks");
const lectureEnvers = commandesMA.find((m) => m.command === "player_queues/play_media");
verifier(
  "la lecture à l'envers lit d'abord les morceaux de la playlist chez Music Assistant",
  pistes?.args?.item_id === "1" && pistes?.args?.provider_instance_id_or_domain === "library",
  JSON.stringify(pistes?.args ?? null),
);
const attenduEnvers = Array.from({ length: 8 }, (_, k) => `library://track/1${7 - k}`);
verifier(
  "puis les joue du dernier au premier, dans l'ordre de la playlist et non dans l'ordre reçu",
  JSON.stringify(lectureEnvers?.args?.media) === JSON.stringify(attenduEnvers) && lectureEnvers?.args?.option === "replace",
  JSON.stringify(lectureEnvers?.args?.media ?? null),
);
recent = await journalDepuis();
verifier(
  "sans passer par le play_media de Home Assistant, qui la lirait dans l'ordre",
  !recent.some((m) => m.service === "play_media"),
  recent.map((m) => m.service).join(", "),
);

await reveiller();
await evaluer('document.querySelector(\'[title="À suivre"]\')?.click()');
await sleep(1500);
const fileEnvers = await lireFile();
verifier(
  "la file commence par le dernier morceau de la playlist",
  fileEnvers.titres[0] === "Piste 17" && fileEnvers.titres.length === 8,
  fileEnvers.titres.slice(0, 3).join(" / "),
);
await evaluer("document.querySelector('[aria-label=\"Fermer la file\"]')?.click()");
await sleep(400);

// On rend le bac entier pour la suite.
await reveiller();
await evaluer("document.querySelector('[aria-label=\"Bibliothèque\"]')?.click()");
await sleep(1000);
await evaluer(`document.querySelector(".library__manage")?.click()`);
await sleep(500);
await evaluer(`[...document.querySelectorAll(".manage__bulk button")][0]?.click()`);
await sleep(300);
choix = await lireChoix();
verifier("« Tout afficher » rend tout le bac", (choix.compte ?? "").startsWith("7 playlist") && choix.pastille === null, choix.compte ?? "");

// Taper dans un champ ne doit jamais piloter la platine.
lu = (await (await fetch(`${HA}/_journal`)).json()).length;
await evaluer(`(() => {
  const champ = document.querySelector(".manage__tools input");
  champ.focus();
  for (const key of [" ", "ArrowRight", "ArrowLeft"]) champ.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true, composed: true }));
  return true;
})()`);
await sleep(600);
recent = await journalDepuis();
verifier(
  "une espace ou une flèche tapée dans un champ ne pilote pas la platine",
  !recent.some((m) => ["media_play_pause", "media_next_track", "media_previous_track"].includes(m.service)),
  recent.map((m) => m.service).join(", "),
);
await evaluer(`window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" })), true`);
await sleep(300);
verifier("Échap referme d'abord le volet, pas le bac", !(await evaluer(`!!document.querySelector(".manage")`)) && (await evaluer(`!!document.querySelector(".library")`)));
await evaluer("document.querySelector('[aria-label=\"Retour à la platine\"]')?.click()");
await sleep(600);

// --------------------------------------------------- 6. enceintes et transfert

console.log("\n-- enceintes --");
await reveiller();
await evaluer('document.querySelector(".hud__room")?.click()');
await sleep(1300);

const enceintes = JSON.parse(
  await evaluer(`JSON.stringify({
    noms: [...document.querySelectorAll(".speakers .sidepanel__text b")].map((e) => e.textContent),
    erreur: document.querySelector(".speakers .sidepanel__error")?.textContent ?? null,
    iciDesactive: document.querySelector('.speakers__item[data-here="true"] .speakers__pick')?.disabled ?? null,
    boutonsTransfert: document.querySelectorAll(".speakers__move").length,
  })`),
);

verifier("aucune erreur d'enceintes", enceintes.erreur === null, enceintes.erreur ?? "");
verifier(
  "les media_player de Home Assistant sont listés",
  enceintes.noms.includes("Salon") &&
    enceintes.noms.includes("Cuisine") &&
    enceintes.noms.includes("Chambre"),
  enceintes.noms.join(" / "),
);
verifier("l'enceinte déjà affichée n'est pas proposée à nouveau", enceintes.iciDesactive === true);
verifier(
  "le transfert n'est offert que vers les autres",
  enceintes.boutonsTransfert === enceintes.noms.length - 1,
  `${enceintes.boutonsTransfert} bouton(s) pour ${enceintes.noms.length} enceintes`,
);

/*
 * On emmène la musique dans la première autre pièce — mais on note LAQUELLE.
 * Home Assistant trie les entités par nom : coder « cuisine » en dur revenait à
 * tester l'ordre alphabétique plutôt que le transfert.
 */
const piece = await evaluer(
  `document.querySelector(".speakers__move")?.closest(".speakers__item")?.dataset.entity ?? null`,
);
await evaluer('document.querySelector(".speakers__move")?.click()');
await sleep(1800);

const transferts = await (await fetch(`${HA}/_transferts`)).json();
verifier(
  "transfer_queue part avec l'ancienne enceinte en source et la nouvelle en cible",
  transferts[0]?.source === "media_player.salon" && transferts[0]?.cible === piece,
  `${JSON.stringify(transferts[0] ?? null)} pour ${piece}`,
);

const apresTransfert = JSON.parse(
  await evaluer(`JSON.stringify({
    reglage: JSON.parse(localStorage.getItem("mdvinyl.settings.v1")).entityId,
    voletFerme: !document.querySelector(".speakers"),
  })`),
);
verifier(
  "la platine suit la musique dans la nouvelle pièce",
  apresTransfert.reglage === piece,
  apresTransfert.reglage,
);
verifier("le volet se referme après le transfert", apresTransfert.voletFerme === true);

// --------------------------------------------------- 6 bis. un seul volet à la fois

console.log("\n-- volets --");
await reveiller();
await evaluer('document.querySelector(\'[title="À suivre"]\')?.click()');
await sleep(700);
await evaluer('document.querySelector(".hud__room")?.click()');
await sleep(900);

const volets = JSON.parse(
  await evaluer(`JSON.stringify({
    ouverts: document.querySelectorAll(".sidepanel").length,
    sceneDecalee: getComputedStyle(document.querySelector(".stage")).transform !== "none",
  })`),
);
verifier(
  "ouvrir un volet referme le précédent — ils partagent le même bord",
  volets.ouverts === 1,
  `${volets.ouverts} volet(s)`,
);
verifier(
  "la platine se décale au lieu d'être recouverte",
  volets.sceneDecalee === true,
);
await evaluer('document.querySelector(".sidepanel .iconbtn")?.click()');
await sleep(600);

// --------------------------------------------------- 7. la maison suit la musique

console.log("\n-- déclencheurs de la maison --");
await fetch(`${HA}/_reset`);
await poserReglages(
  ({
      haUrl: HA,
      token: "jeton-de-test",
      entityId: "media_player.salon",
      vinyl: "black",
      background: "adaptive",
      playControl: "button",
      lyrics: false,
      idleMinutes: 0,
      counterRotateLabel: false,
      rpm: 33.3333,
      onPlay: { service: "scene.turn_on", entityId: "scene.ecoute_du_soir" },
      onStop: { service: "light.turn_on", entityId: "light.salon" },
    }),
);
await envoyer("Page.reload");
await sleep(3200);
await exigerLeFaux();

const gestesMaison = async () =>
  (await (await fetch(`${HA}/_journal`)).json()).filter(
    (m) => m.type === "call_service" && (m.domain === "scene" || m.domain === "light"),
  );

// L'entité arrive en lecture : ouvrir la page n'est PAS un démarrage.
let maison = await gestesMaison();
verifier(
  "ouvrir la page pendant la musique ne déclenche rien",
  maison.length === 0,
  `${maison.length} appel(s)`,
);

// On arrête : la maison doit réagir.
await reveiller();
await evaluer('document.querySelector(".iconbtn--play")?.click()');
await sleep(1600);

maison = await gestesMaison();
const arret = maison.find((m) => m.domain === "light");
verifier(
  "l'arrêt appelle le service configuré, avec sa cible",
  arret?.service === "turn_on" && arret?.target?.entity_id === "light.salon",
  JSON.stringify({ domain: arret?.domain, service: arret?.service, target: arret?.target }),
);

// On relance : l'autre déclencheur, et lui seul.
await evaluer('document.querySelector(".iconbtn--play")?.click()');
await sleep(1600);

maison = await gestesMaison();
const depart = maison.find((m) => m.domain === "scene");
verifier(
  "le démarrage appelle l'autre service",
  depart?.service === "turn_on" && depart?.target?.entity_id === "scene.ecoute_du_soir",
  JSON.stringify({ domain: depart?.domain, service: depart?.service, target: depart?.target }),
);
verifier(
  "un seul appel par changement d'état, malgré les mises à jour de position",
  maison.length === 2,
  `${maison.length} appel(s) pour 2 changements`,
);

// --------------------------------------------------- 8. paroles exactes

console.log("\n-- paroles --");
await fetch(`${HA}/_reset`);
await poserReglages(
  ({
      haUrl: HA,
      token: "jeton-de-test",
      entityId: "media_player.salon",
      vinyl: "black",
      background: "adaptive",
      playControl: "arm",
      lyrics: true,
      idleMinutes: 0,
      rpm: 33.3333,
    }),
);
await envoyer("Page.reload");
await sleep(3500);
await exigerLeFaux();
await reveiller();
await evaluer(`document.querySelector('[aria-label="Paroles"]')?.click()`);
await sleep(1200);
const paroles = await evaluer(
  `[...document.querySelectorAll(".lyrics__line, .lyrics p, .lyrics li")].map((e) => e.textContent).join(" | ")`,
);
verifier(
  "les paroles que Music Assistant tient du fournisseur passent avant LRCLIB",
  (paroles ?? "").includes("Ligne exacte venue de Music Assistant"),
  (paroles ?? "").slice(0, 80),
);

// --------------------------------------------------- 9. sans superviseur

console.log("\n-- sans superviseur (installation Docker) --");
await fetch(`${HA}/_reset?superviseur=0`);
await poserReglages(
  ({
      haUrl: HA,
      token: "jeton-de-test",
      entityId: "media_player.salon",
      vinyl: "black",
      background: "adaptive",
      playControl: "arm",
      lyrics: false,
      idleMinutes: 0,
      rpm: 33.3333,
    }),
);
await envoyer("Page.reload");
await sleep(3200);
await exigerLeFaux();
lu = (await (await fetch(`${HA}/_journal`)).json()).length;
await reveiller();
await evaluer('document.querySelector(\'[title="À suivre"]\')?.click()');
await sleep(1600);
const apercu = await lireFile();
verifier("la file s'ouvre sans erreur", apercu.ouvert && apercu.erreur === null, apercu.erreur ?? "");
verifier(
  "à défaut de liste complète, on voit au moins le morceau en cours et le suivant",
  apercu.titres.length === 2 && apercu.titres[0] === "Instant Crush" && apercu.rangCourant === 0,
  apercu.titres.join(" / "),
);
verifier("et on dit pourquoi", (apercu.note ?? "").length > 20, apercu.note ?? "");
verifier("rien ne se propose au déplacement", apercu.poignees === 0);
verifier("l'en-tête compte toute la file, pas seulement l'aperçu", (apercu.entete ?? "").startsWith("12 titres"), apercu.entete ?? "");

await evaluer(`[...document.querySelectorAll(".queue__pick")][1]?.click()`);
await sleep(900);
recent = await journalDepuis();
const repli = recent.find((m) => m.service === "play_media");
verifier(
  "le saut se replie sur play_media quand Music Assistant n'est pas joignable",
  repli?.service_data?.enqueue === "play" && repli?.service_data?.media_type === "track",
  JSON.stringify(repli?.service_data ?? null),
);
verifier(
  "le faux Music Assistant n'a reçu aucune commande",
  (await journalMA()).length === 0,
);

console.log(echecs === 0 ? "\nTout passe." : `\n${echecs} vérification(s) en échec.`);
process.exit(echecs === 0 ? 0 : 1);
