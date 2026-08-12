/**
 * Produit les captures du README.
 *
 * Elles sont fabriquées par un script, et non prises à la main, pour trois
 * raisons : elles se refont à l'identique après un changement d'interface, elles
 * sortent toutes au même cadrage, et elles montrent le mode démonstration —
 * donc jamais l'enceinte ni les pièces de qui que ce soit.
 *
 * Les POCHETTES, elles, sont réelles : celles de la bibliothèque Music
 * Assistant, lues dans Home Assistant et posées dans la page avant son
 * chargement. Les illustrations générées faisaient l'affaire pour régler
 * l'interface, mais elles donnaient des captures qui sentaient le gabarit.
 *
 * Rendu à deux fois la résolution : sur un écran dense, une capture à l'échelle
 * 1 paraît floue une fois affichée dans un README.
 *
 * Usage :  npx vite preview   puis   node tools/captures.mjs [url]
 */
import { spawn, spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
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

/** Termes de renfort : des noms larges, pour compléter un bac trop court. */
const RENFORT = ["the weeknd", "daft punk", "pink floyd", "miles davis", "stromae", "radiohead"];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
mkdirSync(SORTIE, { recursive: true });

// ------------------------------------------------------ les vraies pochettes

/**
 * Va chercher de vraies pochettes dans Home Assistant.
 *
 * On prend la bibliothèque Music Assistant, et on la complète par quelques
 * recherches quand elle est trop courte — un bac à disques à moitié vide ne
 * montre pas ce qu'il sait faire.
 *
 * Sans .env, ou si l'instance ne répond pas, on retombe simplement sur les
 * pochettes générées : les captures se font quand même.
 */
async function vraiesPochettes() {
  const env = {};
  try {
    for (const ligne of readFileSync(join(ROOT, ".env"), "utf8").split("\n")) {
      const m = /^\s*([A-Z_]+)\s*=\s*(.*)\s*$/.exec(ligne);
      if (m) env[m[1]] = m[2].trim();
    }
  } catch {
    return null;
  }
  if (!env.HA_URL || !env.HA_TOKEN) return null;

  const base = env.HA_URL.replace(/\/+$/, "");

  return await new Promise((resolve) => {
    const albums = [];
    const vus = new Set();
    let ws;

    try {
      ws = new WebSocket(base.replace(/^http/, "ws") + "/api/websocket");
    } catch {
      return resolve(null);
    }

    const rendre = () => resolve(albums.length > 0 ? albums : null);

    const abandon = setTimeout(() => {
      try {
        ws.close();
      } catch {
        /* déjà fermé */
      }
      rendre();
    }, 25000);

    const terminer = () => {
      clearTimeout(abandon);
      try {
        ws.close();
      } catch {
        /* déjà fermé */
      }
      rendre();
    };

    let id = 1;
    let entree = null;
    let renfort = -1;

    const ranger = (liste) => {
      for (const a of liste ?? []) {
        const image = a.image?.path ?? a.image ?? a.metadata?.images?.[0]?.path ?? null;
        const artiste = a.artists?.[0]?.name ?? a.album_artist ?? "";
        if (!image || typeof image !== "string") continue;
        if (vus.has(a.name)) continue;
        vus.add(a.name);
        albums.push({ name: String(a.name), artist: String(artiste), image });
      }
    };

    const chercher = () => {
      renfort += 1;
      if (albums.length >= 20 || renfort >= RENFORT.length) return terminer();
      ws.send(
        JSON.stringify({
          id: id++,
          type: "call_service",
          domain: "music_assistant",
          service: "search",
          service_data: { config_entry_id: entree, name: RENFORT[renfort], limit: 10 },
          return_response: true,
        }),
      );
    };

    ws.onerror = () => terminer();

    ws.onmessage = (e) => {
      const m = JSON.parse(e.data);

      if (m.type === "auth_required") {
        ws.send(JSON.stringify({ type: "auth", access_token: env.HA_TOKEN }));
        return;
      }
      if (m.type === "auth_invalid") return terminer();
      if (m.type === "auth_ok") {
        ws.send(JSON.stringify({ id: id++, type: "config_entries/get" }));
        return;
      }
      if (m.type !== "result") return;

      if (m.id === 1) {
        entree = (m.result ?? []).find((x) => x.domain === "music_assistant")?.entry_id ?? null;
        if (!entree) return terminer();
        ws.send(
          JSON.stringify({
            id: id++,
            type: "call_service",
            domain: "music_assistant",
            service: "get_library",
            service_data: {
              config_entry_id: entree,
              media_type: "album",
              limit: 60,
              order_by: "name",
            },
            return_response: true,
          }),
        );
        return;
      }

      if (m.id === 2) {
        ranger(m.result?.response?.items);
        if (albums.length >= 16) return terminer();
        return chercher();
      }

      ranger(m.result?.response?.albums);
      chercher();
    };
  });
}

// ------------------------------------------------------------- le navigateur

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

// Les pochettes sont posées AVANT tout chargement de page : la démonstration les
// trouve déjà là au démarrage, sans avoir à recharger ni à attendre.
const pochettes = await vraiesPochettes();
if (pochettes) {
  console.log(`pochettes réelles : ${pochettes.length} albums`);
  await envoyer("Page.addScriptToEvaluateOnNewDocument", {
    source: "window.__MD_VINYL_ALBUMS__ = " + JSON.stringify(pochettes) + ";",
  });
} else {
  console.log("pochettes réelles indisponibles — on garde celles de la démonstration");
}
await sleep(800);

/** Ouvre une adresse et laisse à l'app le temps de s'installer. */
async function aller(url, attendre = 3200) {
  await envoyer("Page.navigate", { url: `${APP}/${url}` });
  await sleep(attendre);
}

async function capturer(nom) {
  /*
   * JPEG et non PNG.
   *
   * Ces captures sont faites de dégradés et de pochettes : en PNG elles
   * pesaient seize mégaoctets à elles seules, dans un dépôt qui tient autrement
   * dans quelques centaines de kilo-octets. Le JPEG à bonne qualité les ramène
   * au cinquième sans différence visible dans un README.
   */
  const shot = await envoyer("Page.captureScreenshot", {
    format: "jpeg",
    quality: 88,
    captureBeyondViewport: false,
  });
  writeFileSync(join(SORTIE, `${nom}.jpg`), Buffer.from(shot.data, "base64"));
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
await aller("?demo=1&lib=1", 4600);
await capturer("bibliotheque");

// 3. La file d'attente.
await aller("?demo=1", 4200);
await reveiller();
await evaluer(`document.querySelector('[title="À suivre"]')?.click()`);
await sleep(1600);
await capturer("file");

// 4. Les enceintes.
await aller("?demo=1", 4200);
await reveiller();
await evaluer(`document.querySelector(".hud__room")?.click()`);
await sleep(1600);
await capturer("enceintes");

// 5. Les paroles.
await aller("?demo=1&lyrics=1", 4600);
await capturer("paroles");

// 6. Les réglages.
await aller("?demo=1", 4200);
await reveiller();
await evaluer(`document.querySelector('[aria-label="Réglages"]')?.click()`);
await sleep(1600);
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
