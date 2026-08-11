/**
 * Vérifie le chemin Home Assistant réel, de bout en bout.
 *
 * L'app tourne dans un vrai navigateur, branchée sur le faux Home Assistant de
 * tools/fake-ha.mjs, qui parle le vrai protocole. On contrôle les deux sens :
 *  - ce que l'app AFFICHE à partir des charges utiles Music Assistant ;
 *  - ce qu'elle ENVOIE, en relisant le journal du serveur.
 *
 * C'est ce qui permet d'affirmer qu'une fonction marchera contre une vraie
 * installation sans en avoir une sous la main.
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

// --------------------------------------------------- 1. configuration + liaison

console.log("\n-- liaison --");
await evaluer(
  `localStorage.setItem("mdvinyl.settings.v1", ${JSON.stringify(
    JSON.stringify({
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
    }),
  )})`,
);
await envoyer("Page.reload");
await sleep(3200);

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
await sleep(1500);

const file = JSON.parse(
  await evaluer(`JSON.stringify({
    ouvert: !!document.querySelector(".queue"),
    erreur: document.querySelector(".queue .sidepanel__error")?.textContent ?? null,
    titres: [...document.querySelectorAll(".queue__item .sidepanel__text b")].map((e) => e.textContent),
    artistes: [...document.querySelectorAll(".queue__item .sidepanel__text span")].map((e) => e.textContent),
    durees: [...document.querySelectorAll(".queue__time")].map((e) => e.textContent),
    rangCourant: [...document.querySelectorAll(".queue__item")].findIndex((e) => e.dataset.state === "now"),
    pochettes: [...document.querySelectorAll(".queue__art")].filter((e) => getComputedStyle(e).backgroundImage !== "none").length,
  })`),
);

verifier("le volet de file s'ouvre", file.ouvert === true);
verifier("aucune erreur de file", file.erreur === null, file.erreur ?? "");
verifier("les morceaux à suivre sont listés", file.titres.length === 6, `${file.titres.length} morceaux`);
verifier(
  "l'artiste est lu dans media_item.artists[]",
  file.artistes[0] === "Daft Punk",
  file.artistes.slice(0, 3).join(" / "),
);
verifier("la durée de chaque morceau est lue", file.durees[0] === "3:20", file.durees.slice(0, 3).join(" / "));
verifier(
  "le morceau en cours vient de current_index, pas d'une comparaison de titres",
  file.rangCourant === 1,
  `rang ${file.rangCourant}`,
);
verifier("les pochettes de la file sont résolues", file.pochettes === 6, `${file.pochettes}/6`);

let recent = await journalDepuis();
const appelFile = recent.find((m) => m.service === "get_queue");
verifier(
  "get_queue est ciblé par entité — c'est la file d'un lecteur",
  appelFile?.target?.entity_id === "media_player.salon" &&
    appelFile?.service_data?.config_entry_id === undefined,
  JSON.stringify({ target: appelFile?.target, data: appelFile?.service_data }),
);
verifier("get_queue demande bien une réponse", appelFile?.return_response === true);

/*
 * Sauter sur une piste de la file. On vise la quatrième ligne : elle est après
 * le morceau en cours, ce qui est le geste courant — « passer à celle-là ».
 */
/*
 * Le marquage optimiste se lit DANS LA FOULÉE du clic : il ne dure que jusqu'au
 * retour de Home Assistant, qui arrive ici en quelques dizaines de millisecondes.
 * Attendre une demi-seconde revenait à mesurer l'état d'après.
 */
const vise = JSON.parse(
  await evaluer(`(async () => {
    const lignes = [...document.querySelectorAll(".queue__pick")];
    const cible = lignes[3];
    const titre = cible.querySelector("b").textContent;
    // Le DOM n'est pas à jour au retour de click() : React peint au tour
    // suivant. On laisse passer deux images, ce qui reste bien en deçà de la
    // durée plancher de la marque.
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

await sleep(1600);
recent = await journalDepuis();
const saut = recent.find((m) => m.service === "play_media");
verifier(
  "le saut envoie l'URI du morceau, en conservant la file",
  saut?.service_data?.media_type === "track" &&
    saut?.service_data?.enqueue === "play" &&
    typeof saut?.service_data?.media_id === "string" &&
    saut?.target?.entity_id === "media_player.salon",
  JSON.stringify({ data: saut?.service_data, target: saut?.target }),
);
/*
 * Le point qui coinçait : une fois la commande partie, Home Assistant confirme
 * bien avant que Music Assistant n'ait recalé sa file. Si on relâche la marque
 * à ce moment-là, la pastille repart une fraction de seconde sur le morceau
 * PRÉCÉDENT. On vérifie donc qu'elle reste sur la ligne choisie tout du long.
 */
const suivi = [];
for (let i = 0; i < 10; i++) {
  suivi.push(
    await evaluer(
      `[...document.querySelectorAll(".queue__item")].findIndex((e) => e.dataset.state === "now")`,
    ),
  );
  await sleep(220);
}
verifier(
  "la pastille ne revient jamais sur le morceau précédent",
  suivi.every((r) => r === 3),
  `rangs observés : ${suivi.join(",")}`,
);

verifier(
  "la platine joue bien le morceau demandé",
  (await evaluer(`document.querySelector(".track__title")?.textContent`))?.startsWith(
    vise.titre.split(" — ")[0],
  ),
  `demandé « ${vise.titre} »`,
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
await evaluer(
  `localStorage.setItem("mdvinyl.settings.v1", ${JSON.stringify(
    JSON.stringify({
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
  )})`,
);
await envoyer("Page.reload");
await sleep(3200);

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

console.log(echecs === 0 ? "\nTout passe." : `\n${echecs} vérification(s) en échec.`);
process.exit(echecs === 0 ? 0 : 1);
