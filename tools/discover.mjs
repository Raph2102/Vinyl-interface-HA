/**
 * Sonde ton Home Assistant pour decouvrir tout ce dont l'app a besoin :
 *  - la connexion / le token fonctionnent
 *  - la liste des media_player, en marquant ceux qui viennent de Music Assistant
 *  - le config_entry_id de l'integration Music Assistant
 *  - la forme EXACTE des attributs d'une entite (media_position, entity_picture...)
 *  - la forme EXACTE des reponses de music_assistant.get_library et .search
 *
 * Usage : node tools/discover.mjs
 * Les reponses brutes sont ecrites dans tools/out/ pour servir de reference.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "tools", "out");
mkdirSync(OUT, { recursive: true });

// ---------- .env ----------
let env = {};
try {
  for (const line of readFileSync(join(ROOT, ".env"), "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
} catch {
  console.error("\n[X] Pas de fichier .env a la racine du projet.");
  console.error("    Copie .env.example en .env et remplis HA_URL et HA_TOKEN.\n");
  process.exit(1);
}

const HA_URL = (env.HA_URL || "").replace(/\/+$/, "");
const HA_TOKEN = env.HA_TOKEN || "";
if (!HA_URL || !HA_TOKEN || HA_TOKEN.startsWith("colle_")) {
  console.error("\n[X] HA_URL ou HA_TOKEN manquant/non rempli dans .env\n");
  process.exit(1);
}

const H = { Authorization: `Bearer ${HA_TOKEN}`, "Content-Type": "application/json" };
const save = (name, data) => {
  writeFileSync(join(OUT, name), JSON.stringify(data, null, 2));
  return data;
};
const line = (t) => console.log(`\n${"=".repeat(70)}\n${t}\n${"=".repeat(70)}`);

async function rest(path, init) {
  const res = await fetch(`${HA_URL}${path}`, { headers: H, ...init });
  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = text;
  }
  return { ok: res.ok, status: res.status, body };
}

// ---------- 1. connexion ----------
line("1. CONNEXION");
const ping = await rest("/api/");
if (!ping.ok) {
  console.error(`[X] Echec (HTTP ${ping.status}) :`, ping.body);
  console.error("    -> URL injoignable, ou token invalide/expire.");
  process.exit(1);
}
console.log(`[OK] ${HA_URL} repond :`, ping.body?.message ?? ping.body);

const cfg = await rest("/api/config");
console.log(`     Home Assistant ${cfg.body?.version}  |  instance "${cfg.body?.location_name}"`);
console.log(`     fuseau ${cfg.body?.time_zone}  |  unites ${cfg.body?.unit_system?.length}`);
save("00-config.json", cfg.body);

// ---------- 2. media_players ----------
line("2. LECTEURS MULTIMEDIA");
const states = await rest("/api/states");
const players = states.body.filter((s) => s.entity_id.startsWith("media_player."));
save("01-media_players.json", players);

const isMass = (p) => p.attributes?.mass_player_type !== undefined;
const massPlayers = players.filter(isMass);

console.log(`${players.length} media_player au total, dont ${massPlayers.length} Music Assistant.\n`);
for (const p of players) {
  const tag = isMass(p) ? "[MA]" : "    ";
  const name = p.attributes?.friendly_name ?? "";
  console.log(`${tag} ${p.entity_id.padEnd(46)} ${String(p.state).padEnd(10)} ${name}`);
}

// ---------- 3. attributs detailles ----------
line("3. ATTRIBUTS DETAILLES (ce que l'UI peut afficher)");
const playing =
  massPlayers.find((p) => p.state === "playing") ??
  massPlayers.find((p) => p.state === "paused") ??
  massPlayers[0] ??
  players.find((p) => p.state === "playing") ??
  players[0];

if (playing) {
  console.log(`Entite examinee : ${playing.entity_id}  (etat: ${playing.state})`);
  if (playing.state !== "playing") {
    console.log("!! Rien en lecture -> lance un morceau et relance ce script");
    console.log("   pour capturer media_position / entity_picture en conditions reelles.");
  }
  save("02-entity-detail.json", playing);
  console.log(JSON.stringify(playing, null, 2).slice(0, 4000));
} else {
  console.log("[X] Aucun media_player trouve.");
}

// ---------- 4. config_entry_id de Music Assistant (via WebSocket) ----------
line("4. INTEGRATION MUSIC ASSISTANT");
const wsUrl = HA_URL.replace(/^http/, "ws") + "/api/websocket";
let massEntryId = null;

const wsResult = await new Promise((resolve) => {
  const timer = setTimeout(() => resolve({ error: "timeout WebSocket (10s)" }), 10000);
  let ws;
  try {
    ws = new WebSocket(wsUrl);
  } catch (e) {
    clearTimeout(timer);
    return resolve({ error: String(e) });
  }
  let id = 1;
  const done = (v) => {
    clearTimeout(timer);
    try { ws.close(); } catch {}
    resolve(v);
  };
  ws.onerror = (e) => done({ error: `erreur WebSocket: ${e?.message ?? e?.type ?? e}` });
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.type === "auth_required") {
      ws.send(JSON.stringify({ type: "auth", access_token: HA_TOKEN }));
    } else if (msg.type === "auth_invalid") {
      done({ error: "auth WebSocket refusee" });
    } else if (msg.type === "auth_ok") {
      console.log(`[OK] WebSocket authentifie (HA ${msg.ha_version}) -> le temps reel est possible`);
      ws.send(JSON.stringify({ id: id++, type: "config_entries/get", domain: "music_assistant" }));
    } else if (msg.type === "result") {
      done(msg.success ? { entries: msg.result } : { error: JSON.stringify(msg.error) });
    }
  };
});

if (wsResult.error) {
  console.log(`[!] ${wsResult.error}`);
  console.log("    (on retombera sur du polling REST si besoin)");
} else {
  save("03-mass-config-entries.json", wsResult.entries);
  for (const e of wsResult.entries ?? []) {
    console.log(`  entry_id = ${e.entry_id}   titre "${e.title}"   etat ${e.state}`);
    massEntryId = massEntryId ?? e.entry_id;
  }
  if (!massEntryId) console.log("[X] Integration Music Assistant introuvable dans HA.");
}

// ---------- 5. reponses des actions Music Assistant ----------
if (massEntryId) {
  line("5. FORME DES REPONSES MUSIC ASSISTANT");

  const callWithResponse = (service, data) =>
    rest(`/api/services/music_assistant/${service}?return_response=true`, {
      method: "POST",
      body: JSON.stringify(data),
    });

  for (const mt of ["album", "playlist", "artist"]) {
    const r = await callWithResponse("get_library", {
      config_entry_id: massEntryId,
      media_type: mt,
      limit: 3,
      order_by: "random",
    });
    if (r.ok) {
      const payload = r.body?.service_response ?? r.body;
      save(`04-library-${mt}.json`, payload);
      const first = payload?.items?.[0];
      console.log(`\n-- get_library(${mt}) : ${payload?.items?.length ?? 0} items`);
      console.log(`   champs d'un item : ${first ? Object.keys(first).join(", ") : "(vide)"}`);
      if (first) console.log(JSON.stringify(first, null, 2).slice(0, 1200));
    } else {
      console.log(`\n-- get_library(${mt}) : HTTP ${r.status}`, JSON.stringify(r.body).slice(0, 300));
    }
  }

  const s = await callWithResponse("search", { config_entry_id: massEntryId, name: "daft punk", limit: 2 });
  if (s.ok) {
    const payload = s.body?.service_response ?? s.body;
    save("05-search.json", payload);
    console.log(`\n-- search : cles = ${Object.keys(payload ?? {}).join(", ")}`);
    console.log(JSON.stringify(payload, null, 2).slice(0, 1500));
  } else {
    console.log(`\n-- search : HTTP ${s.status}`, JSON.stringify(s.body).slice(0, 300));
  }

  if (playing) {
    const q = await rest(`/api/services/music_assistant/get_queue?return_response=true`, {
      method: "POST",
      body: JSON.stringify({ entity_id: playing.entity_id }),
    });
    const payload = q.body?.service_response ?? q.body;
    save("06-queue.json", payload);
    console.log(`\n-- get_queue : HTTP ${q.status}`);
    console.log(JSON.stringify(payload, null, 2).slice(0, 1500));
  }
}

// ---------- 6. pochette ----------
line("6. POCHETTE (entity_picture)");
const pic = playing?.attributes?.entity_picture;
if (pic) {
  const url = pic.startsWith("http") ? pic : HA_URL + pic;
  console.log(`entity_picture = ${pic}`);
  try {
    const r = await fetch(url, { headers: H });
    const buf = Buffer.from(await r.arrayBuffer());
    console.log(`[${r.ok ? "OK" : "X"}] HTTP ${r.status} | ${r.headers.get("content-type")} | ${buf.length} octets`);
    if (r.ok) {
      const ext = (r.headers.get("content-type") || "").includes("png") ? "png" : "jpg";
      writeFileSync(join(OUT, `07-cover.${ext}`), buf);
      console.log(`     -> enregistree dans tools/out/07-cover.${ext}`);
    }
  } catch (e) {
    console.log("[X] telechargement impossible :", String(e));
  }
} else {
  console.log("Pas de entity_picture (rien en lecture ?)");
}

line("TERMINE - dumps bruts dans tools/out/");
