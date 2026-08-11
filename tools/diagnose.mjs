/**
 * Diagnostic complet d'une vraie installation Home Assistant.
 *
 * On ne se contente pas de « ça répond » : on parcourt tout ce dont l'app a
 * besoin, dans l'ordre, en disant à chaque étape ce qui marche et ce qui coince.
 * Chaque étape est indépendante — un échec n'arrête pas les suivantes, pour
 * qu'un seul passage donne l'image complète.
 *
 * Usage :  node tools/diagnose.mjs            (essaie les adresses du .env)
 *          node tools/diagnose.mjs <url>      (une adresse précise)
 */
import { readFileSync } from "node:fs";

// ------------------------------------------------------------------ réglages

const env = {};
try {
  for (const ligne of readFileSync(new URL("../.env", import.meta.url), "utf8").split("\n")) {
    const m = /^\s*([A-Z_]+)\s*=\s*(.*)\s*$/.exec(ligne);
    if (m) env[m[1]] = m[2].trim();
  }
} catch {
  console.error("Pas de fichier .env — crée-le à partir de .env.example.");
  process.exit(1);
}

const TOKEN = env.HA_TOKEN;
const ADRESSES = process.argv[2]
  ? [process.argv[2]]
  : [env.HA_URL, env.HA_URL_ALT].filter(Boolean);

if (!TOKEN) {
  console.error("HA_TOKEN manquant dans .env.");
  process.exit(1);
}

const auth = { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" };
const ok = (b) => (b ? "[OK]" : "[X] ");

/** Un fetch qui ne pend pas indéfiniment : une adresse injoignable doit le dire vite. */
async function demander(url, init = {}, ms = 8000) {
  const stop = AbortSignal.timeout(ms);
  const t0 = Date.now();
  try {
    const res = await fetch(url, { ...init, signal: stop });
    return { res, ms: Date.now() - t0 };
  } catch (err) {
    return { erreur: err?.cause?.code ?? err?.name ?? String(err), ms: Date.now() - t0 };
  }
}

// ------------------------------------------------------------------ WebSocket

/**
 * Ouvre le WebSocket, s'authentifie, et exécute une suite de commandes.
 * C'est le vrai chemin de l'app : le REST ne sert qu'au diagnostic.
 */
function parWebSocket(base, commandes) {
  return new Promise((resolve) => {
    const url = base.replace(/^http/, "ws") + "/api/websocket";
    const resultats = { connexion: null, auth: null, reponses: [], erreur: null };
    let sock;
    try {
      sock = new WebSocket(url);
    } catch (e) {
      resultats.erreur = String(e);
      return resolve(resultats);
    }

    const minuteur = setTimeout(() => {
      resultats.erreur = resultats.erreur ?? "délai dépassé";
      try {
        sock.close();
      } catch {}
      resolve(resultats);
    }, 20000);

    let id = 1;
    const attente = new Map();
    let suite = null;

    sock.onopen = () => (resultats.connexion = true);
    sock.onerror = () => (resultats.erreur = "connexion refusée ou certificat rejeté");
    sock.onclose = () => {
      clearTimeout(minuteur);
      resolve(resultats);
    };

    sock.onmessage = async (e) => {
      const m = JSON.parse(e.data);

      if (m.type === "auth_required") {
        sock.send(JSON.stringify({ type: "auth", access_token: TOKEN }));
        return;
      }
      if (m.type === "auth_invalid") {
        resultats.auth = false;
        resultats.erreur = m.message ?? "jeton refusé";
        sock.close();
        return;
      }
      if (m.type === "auth_ok") {
        resultats.auth = true;
        resultats.version = m.ha_version;
        suite = (async () => {
          const envoyer = (msg) =>
            new Promise((res) => {
              const i = id++;
              attente.set(i, res);
              sock.send(JSON.stringify({ ...msg, id: i }));
            });
          for (const c of commandes) {
            const debut = Date.now();
            const r = await Promise.race([
              envoyer(c.msg),
              new Promise((res) => setTimeout(() => res({ success: false, error: { message: "délai dépassé" } }), 12000)),
            ]);
            resultats.reponses.push({ nom: c.nom, ...r, ms: Date.now() - debut });
          }
          sock.close();
        })();
        return;
      }
      if (m.id && attente.has(m.id)) {
        const res = attente.get(m.id);
        attente.delete(m.id);
        res(m);
      }
    };
  });
}

// ------------------------------------------------------------------ le parcours

async function examiner(base) {
  console.log(`\n${"=".repeat(64)}\n  ${base}\n${"=".repeat(64)}`);

  // 1. Joignable ?
  const racine = await demander(`${base}/api/`, { headers: auth });
  if (racine.erreur) {
    console.log(`${ok(false)} adresse joignable  —  ${racine.erreur} (après ${racine.ms} ms)`);
    if (racine.erreur === "ENOTFOUND") console.log("      le nom ne se résout pas depuis cette machine");
    if (racine.erreur === "ECONNREFUSED") console.log("      rien n'écoute sur ce port");
    if (racine.erreur === "TimeoutError") console.log("      aucune réponse : pare-feu, ou machine hors du réseau");
    if (String(racine.erreur).includes("CERT")) console.log("      certificat TLS rejeté");
    return { base, joignable: false };
  }
  console.log(`${ok(true)} adresse joignable  —  ${racine.res.status} en ${racine.ms} ms`);

  if (racine.res.status === 401) {
    console.log(`${ok(false)} jeton accepté  —  401 : jeton refusé, expiré ou révoqué`);
    return { base, joignable: true, auth: false };
  }
  console.log(`${ok(true)} jeton accepté par l'API REST`);

  // 2. L'app parle en WebSocket : c'est lui qui compte.
  const ws = await parWebSocket(base, [
    { nom: "config", msg: { type: "get_config" } },
    { nom: "entrées de configuration", msg: { type: "config_entries/get" } },
  ]);

  console.log(`${ok(ws.connexion === true)} WebSocket ouvert${ws.erreur ? `  —  ${ws.erreur}` : ""}`);
  console.log(`${ok(ws.auth === true)} authentifié par WebSocket${ws.version ? `  —  Home Assistant ${ws.version}` : ""}`);
  if (ws.auth !== true) return { base, joignable: true, auth: false, ws };

  const entrees = ws.reponses.find((r) => r.nom === "entrées de configuration");
  const admin = entrees?.success === true;
  console.log(
    `${ok(admin)} droits administrateur (config_entries/get)` +
      (admin ? "" : `  —  ${entrees?.error?.message ?? "refusé"} : la bibliothèque et la recherche ne marcheront pas`),
  );

  let entryId = null;
  if (admin) {
    const mass = (entrees.result ?? []).filter((e) => e.domain === "music_assistant");
    console.log(
      `${ok(mass.length > 0)} intégration Music Assistant présente` +
        (mass.length ? `  —  « ${mass[0].title} », état ${mass[0].state}` : "  —  introuvable"),
    );
    entryId = mass[0]?.entry_id ?? null;
  }

  // 3. Les enceintes.
  const etats = await demander(`${base}/api/states`, { headers: auth });
  let lecteurs = [];
  if (etats.res?.ok) {
    const tout = await etats.res.json();
    lecteurs = tout.filter((e) => e.entity_id.startsWith("media_player."));
    console.log(`${ok(lecteurs.length > 0)} enceintes visibles  —  ${lecteurs.length} media_player`);
    const mass = lecteurs.filter((e) => e.attributes.mass_player_type !== undefined);
    console.log(
      `${ok(mass.length > 0)} enceintes pilotées par Music Assistant  —  ${mass.length}`,
    );
    for (const p of (mass.length ? mass : lecteurs).slice(0, 12)) {
      console.log(
        `      ${p.entity_id.padEnd(38)} ${String(p.state).padEnd(12)} ${p.attributes.friendly_name ?? ""}`,
      );
    }
  } else {
    console.log(`${ok(false)} enceintes visibles  —  ${etats.res?.status ?? etats.erreur}`);
  }

  // 4. La bibliothèque, par le vrai chemin.
  if (entryId) {
    const biblio = await parWebSocket(base, [
      {
        nom: "get_library",
        msg: {
          type: "call_service",
          domain: "music_assistant",
          service: "get_library",
          service_data: { config_entry_id: entryId, media_type: "album", limit: 5, order_by: "name" },
          return_response: true,
        },
      },
      {
        nom: "search",
        msg: {
          type: "call_service",
          domain: "music_assistant",
          service: "search",
          service_data: { config_entry_id: entryId, name: "daft punk", limit: 3 },
          return_response: true,
        },
      },
    ]);

    for (const r of biblio.reponses) {
      if (!r.success) {
        console.log(`${ok(false)} ${r.nom}  —  ${r.error?.message ?? "échec"}`);
        continue;
      }
      const rep = r.result?.response ?? {};
      const items = rep.items ?? rep.albums ?? [];
      console.log(`${ok(true)} ${r.nom}  —  ${items.length} résultat(s) en ${r.ms} ms`);
      for (const a of items.slice(0, 3)) {
        const artiste = a.artists?.[0]?.name ?? a.album_artist ?? "";
        const img = a.image?.path ?? a.image ?? a.metadata?.images?.[0]?.path ?? null;
        console.log(`      « ${a.name} » — ${artiste}`);
        if (img) console.log(`        image : ${String(img).slice(0, 96)}`);
      }
      // La forme exacte compte : c'est elle que l'app doit savoir lire.
      if (items[0]) {
        console.log(`      champs disponibles : ${Object.keys(items[0]).join(", ")}`);
      }
    }
  }

  // 5. La pochette du morceau en cours, à travers le proxy d'images.
  const enLecture = lecteurs.find((e) => e.attributes.entity_picture);
  if (enLecture) {
    const chemin = enLecture.attributes.entity_picture;
    const img = await demander(`${base}${chemin}`, {});
    const type = img.res?.headers.get("content-type") ?? "";
    console.log(
      `${ok(img.res?.ok === true)} pochette par le proxy d'images  —  ${img.res?.status ?? img.erreur} ${type}`,
    );
    console.log(`      ${enLecture.entity_id} : ${chemin.slice(0, 80)}`);
  } else {
    console.log("[--] aucune enceinte ne publie de pochette pour l'instant (rien en lecture ?)");
  }

  return { base, joignable: true, auth: ws.auth === true, admin, entryId, lecteurs: lecteurs.length };
}

const bilans = [];
for (const base of ADRESSES) bilans.push(await examiner(base.replace(/\/+$/, "")));

console.log(`\n${"=".repeat(64)}\n  bilan\n${"=".repeat(64)}`);
for (const b of bilans) {
  const verdict = !b.joignable
    ? "injoignable depuis cette machine"
    : !b.auth
      ? "joignable, mais le jeton ne passe pas"
      : b.admin
        ? "utilisable, avec les droits administrateur"
        : "utilisable, mais SANS droits administrateur";
  console.log(`  ${b.base.padEnd(30)} ${verdict}`);
}
process.exit(0);
