/**
 * Faux Home Assistant, qui parle le vrai protocole.
 *
 * Raison d'être : on ne peut pas jurer qu'un appel fonctionnera contre une vraie
 * installation sans l'avoir émis pour de bon. Ce serveur rejoue exactement le
 * dialogue attendu — poignée de main d'authentification du WebSocket, format
 * compressé de subscribe_entities, appels de service avec réponse, lecture des
 * entrées de configuration — et renvoie des charges utiles Music Assistant de
 * forme réaliste.
 *
 * Il sert à deux choses :
 *  - vérifier que l'app envoie les bons messages, dans le bon ordre, avec les
 *    bons champs ;
 *  - vérifier qu'elle sait lire ce que Music Assistant renvoie réellement,
 *    y compris ses formes tordues (image objet plutôt que chaîne, artiste dans
 *    un tableau).
 *
 * Il ne garantit pas la version de Music Assistant de l'utilisateur ; il
 * garantit que notre moitié du contrat est juste.
 *
 * LEÇON APPRISE : ce serveur renvoyait pour get_queue une liste de morceaux
 * que j'avais imaginée. Les tests passaient, et chez l'utilisateur la file
 * restait vide — le vrai renvoie un RÉSUMÉ rangé sous l'entité, où `items` est
 * un nombre. Les formes ci-dessous sont désormais relevées sur une vraie
 * installation (HA 2026.9, Music Assistant 2.10), pas devinées.
 *
 * Derrière un faux ingress vit aussi un faux Music Assistant : session posée
 * par le superviseur, cookie, WebSocket, file complète, déplacement avec les
 * mêmes refus que le vrai, et événements poussés.
 *
 * Usage :  node tools/fake-ha.mjs [port]
 * Le jeton attendu est "jeton-de-test".
 * /_reset?superviseur=0 simule une installation sans superviseur (Docker).
 */
import { createHash, randomUUID } from "node:crypto";
import { createServer } from "node:http";
import { deflateSync } from "node:zlib";

const PORT = Number(process.argv[2] ?? 8123);
const TOKEN = "jeton-de-test";
const GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";

/** Tout ce que l'app nous a envoyé, pour que les tests puissent l'inspecter. */
const journal = [];
/** Transferts de file demandés, dans l'ordre. */
const transferts = [];
/** Commandes reçues par le faux Music Assistant, derrière l'ingress. */
const journalMA = [];
/** Sessions d'ingress délivrées par le faux superviseur. */
const sessions = new Set();
/** Clients WebSocket du faux Music Assistant, pour leur pousser les événements. */
const clientsMA = new Set();
/** Faux : pas de superviseur, comme une installation Docker. */
let avecSuperviseur = true;
/** Données utilisateur du frontend (frontend/set_user_data), par clé. */
let donneesUtilisateur = {};

const INGRESS = "/api/hassio_ingress/FAUX-JETON-INGRESS/";
const FILE_ID = "salon_file";
/** L'adresse que le vrai serveur donne à ses propres images. */
const BASE_MA = "http://192.168.1.50:8095";

/**
 * Rang du morceau en cours dans la file.
 *
 * Music Assistant met un instant à le recaler après un saut ; on reproduit ce
 * délai, parce que c'est précisément lui qui faisait clignoter la pastille vers
 * le morceau précédent dans l'app.
 */
let rangCourant = 1;

// ------------------------------------------------------------------ entités

const ENTITY = "media_player.salon";

const ETAT_INITIAL = () => ({
  entity_id: ENTITY,
  state: "playing",
  attributes: {
    friendly_name: "Salon",
    // PAUSE|SEEK|VOLUME_SET|PREVIOUS|NEXT|PLAY|SHUFFLE|REPEAT|PLAY_MEDIA|GROUPING
    supported_features: 1 | 2 | 4 | 16 | 32 | 512 | 16384 | 32768 | 262144 | 524288,
    media_title: "Instant Crush",
    media_artist: "Daft Punk",
    media_album_name: "Random Access Memories",
    media_duration: 337,
    media_position: 42,
    media_position_updated_at: new Date().toISOString(),
    entity_picture: "/api/media_player_proxy/media_player.salon?token=abc&cache=1",
    volume_level: 0.38,
    is_volume_muted: false,
    shuffle: false,
    repeat: "off",
    mass_player_type: "player",
  },
  last_changed: new Date().toISOString(),
  last_updated: new Date().toISOString(),
});

let etat = ETAT_INITIAL();

const AUTRES_ENCEINTES = [
  { entity_id: "media_player.cuisine", name: "Cuisine" },
  { entity_id: "media_player.chambre", name: "Chambre" },
];

/**
 * Charges utiles Music Assistant, dans une forme volontairement RETORSE :
 * image sous forme d'objet avec `path`, artiste dans un tableau. C'est ce que
 * renvoie réellement l'intégration, et c'est ce qui casse une lecture naïve.
 */
const ALBUMS = [
  ["Random Access Memories", "Daft Punk"],
  ["Discovery", "Daft Punk"],
  ["In Rainbows", "Radiohead"],
  ["Kid A", "Radiohead"],
  ["Blue Train", "John Coltrane"],
  ["Kind of Blue", "Miles Davis"],
  ["Voodoo", "D'Angelo"],
  ["Aja", "Steely Dan"],
  ["Rumours", "Fleetwood Mac"],
  ["Songs in the Key of Life", "Stevie Wonder"],
  ["The Dark Side of the Moon", "Pink Floyd"],
  ["Homogenic", "Björk"],
].map(([name, artist], i) => ({
  media_type: "album",
  uri: `library://album/${i + 1}`,
  item_id: String(i + 1),
  provider: "library",
  name,
  version: "",
  artists: [{ item_id: `a${i}`, name: artist, media_type: "artist" }],
  image: {
    type: "thumb",
    path: `http://192.168.1.50:8095/imageproxy?path=album-${i + 1}.jpg&size=512`,
    provider: "deezer",
    remotely_accessible: false,
  },
}));

/**
 * Playlists, comme les rend Music Assistant : celles du fournisseur ont leur
 * pochette sur son CDN ; celles que Music Assistant génère partagent TOUTES une
 * même image servie par son propre serveur.
 */
const IMAGE_GENEREE = `${BASE_MA}/imageproxy/55fac4899e170b4c?size=0`;
const PLAYLISTS = [
  ["Coups de cœur", "https://cdn.example/coups.jpg"],
  ["All favorited tracks", IMAGE_GENEREE],
  ["Dimanche matin", "https://cdn.example/dimanche.jpg"],
  ["Random Album (from library)", IMAGE_GENEREE],
  ["Recently played tracks", IMAGE_GENEREE],
  ["Route de nuit", "https://cdn.example/route.jpg"],
  ["Jazz de minuit", "https://cdn.example/jazz.jpg"],
].map(([name, image], i) => ({
  media_type: "playlist",
  uri: `library://playlist/${i + 1}`,
  name,
  version: "",
  image,
  favorite: true,
  explicit: false,
}));

/** Les morceaux d'un disque, pour remplir la file quand on le lance. */
function pistesDe(disque) {
  return Array.from({ length: 8 }, (_, k) => ({
    id: randomUUID().replace(/-/g, ""),
    uri: `library://track/${disque.item_id ?? disque.uri.split("/").pop()}${k}`,
    title: `${disque.name} — piste ${k + 1}`,
    artist: disque.artists?.[0]?.name ?? "Artistes variés",
    album: disque.name,
    duration: 200 + k * 13,
    image: typeof disque.image === "string" ? disque.image : disque.image?.path,
  }));
}

/** La file du Salon : une douzaine de morceaux au départ. */
const FILE_INITIALE = () =>
  ALBUMS.slice(0, 12).map((a, i) => ({
    id: `q${i}`,
    uri: `library://track/${a.item_id}`,
    // Le rang 1 est le morceau que joue l'enceinte au départ : même titre.
    title: i === 1 ? "Instant Crush" : `${a.name} — piste 1`,
    artist: i === 1 ? "Daft Punk" : a.artists[0].name,
    album: i === 1 ? "Random Access Memories" : a.name,
    duration: 200 + i * 13,
    image: a.image.path,
    // Paroles que Music Assistant tient du fournisseur : elles doivent passer
    // AVANT LRCLIB, car elles sont celles de ce pressage exact.
    lrc: i === 1 ? "[00:00.50] Ligne exacte venue de Music Assistant\n[00:30.00] Seconde ligne" : null,
  }));
let file = FILE_INITIALE();

/** Élément de file tel que le rend Music Assistant par son API. */
const elementMA = (t, i) => ({
  queue_id: FILE_ID,
  queue_item_id: t.id,
  name: `${t.artist} - ${t.title}`,
  duration: t.duration,
  sort_index: i * 3,
  image: { type: "thumb", path: t.image, provider: "deezer", remotely_accessible: true },
  media_item: {
    item_id: t.uri.split("/").pop(),
    provider: "deezer",
    name: t.title,
    version: "",
    uri: t.uri,
    media_type: "track",
    artists: [{ media_type: "artist", name: t.artist }],
    album: { media_type: "album", name: t.album },
    metadata: {
      images: [{ type: "thumb", path: t.image, provider: "deezer" }],
      lrc_lyrics: t.lrc ?? null,
    },
  },
});

/** Élément de file tel que le RÉSUME l'action get_queue de Home Assistant. */
const elementHA = (t) =>
  t && {
    queue_item_id: t.id,
    name: `${t.artist} - ${t.title}`,
    duration: t.duration,
    media_item: {
      media_type: "track",
      uri: t.uri,
      name: t.title,
      version: "",
      image: t.image,
      artists: [{ media_type: "artist", name: t.artist }],
      album: { media_type: "album", name: t.album },
    },
  };

function reponseService(service, data) {
  switch (service) {
    case "get_library": {
      const source = data.media_type === "playlist" ? PLAYLISTS : ALBUMS;
      const debut = Number(data.offset ?? 0);
      return {
        items: source.slice(debut, debut + Number(data.limit ?? 25)),
        limit: data.limit ?? 25,
        offset: debut,
        order_by: data.order_by ?? "name",
        media_type: data.media_type ?? "album",
      };
    }

    case "search": {
      const q = String(data.name ?? "").toLowerCase();
      const filtre = (a) => a.name.toLowerCase().includes(q) || a.artists[0].name.toLowerCase().includes(q);
      return {
        albums: ALBUMS.filter(filtre).slice(0, Number(data.limit ?? 5)),
        tracks: ALBUMS.filter(filtre)
          .slice(0, 3)
          .map((a, i) => ({
            media_type: "track",
            uri: `library://track/${a.item_id}${i}`,
            name: `${a.name} — piste ${i + 1}`,
            duration: 210 + i * 17,
            artists: a.artists,
            album: { name: a.name },
            image: a.image,
          })),
        artists: [],
        playlists: PLAYLISTS.filter((p) => p.name.toLowerCase().includes(q)),
        radio: [],
      };
    }

    /*
     * La forme RÉELLE : un résumé, rangé sous l'entité, où `items` est un
     * nombre. On n'y trouve que le morceau en cours et le suivant.
     */
    case "get_queue":
      return {
        [ENTITY]: {
          queue_id: FILE_ID,
          active: true,
          name: "Salon",
          items: file.length,
          shuffle_enabled: false,
          repeat_mode: "off",
          current_index: rangCourant,
          elapsed_time: 12,
          current_item: elementHA(file[rangCourant]),
          next_item: elementHA(file[rangCourant + 1]) ?? null,
        },
      };

    default:
      return null;
  }
}

// ------------------------------------------------------------------ pochette

/**
 * Une vraie image, servie par le proxy de Home Assistant.
 *
 * C'est un point de contrat à part entière : l'app préfixe `entity_picture` par
 * l'adresse de HA, charge l'image dans un canvas et en extrait les couleurs du
 * fond. Si l'origine ne l'autorise pas, la lecture des pixels échoue.
 */
function pngUni(taille, r, v, b) {
  const table = (() => {
    const t = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c;
    }
    return t;
  })();
  const crc = (buf) => {
    let c = -1;
    for (const octet of buf) c = table[(c ^ octet) & 0xff] ^ (c >>> 8);
    return (c ^ -1) >>> 0;
  };
  const bloc = (type, data) => {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length);
    const corps = Buffer.concat([Buffer.from(type, "ascii"), data]);
    const somme = Buffer.alloc(4);
    somme.writeUInt32BE(crc(corps));
    return Buffer.concat([len, corps, somme]);
  };
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(taille, 0);
  ihdr.writeUInt32BE(taille, 4);
  ihdr[8] = 8;
  ihdr[9] = 2; // RVB
  const brut = Buffer.alloc(taille * (taille * 3 + 1));
  for (let y = 0; y < taille; y++) {
    const ligne = y * (taille * 3 + 1);
    brut[ligne] = 0;
    for (let x = 0; x < taille; x++) {
      const p = ligne + 1 + x * 3;
      const t = x / taille;
      brut[p] = Math.round(r * (0.6 + 0.4 * t));
      brut[p + 1] = Math.round(v * (0.6 + 0.4 * t));
      brut[p + 2] = Math.round(b * (0.6 + 0.4 * t));
    }
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    bloc("IHDR", ihdr),
    bloc("IDAT", deflateSync(brut, { level: 6 })),
    bloc("IEND", Buffer.alloc(0)),
  ]);
}

const POCHETTE = pngUni(96, 198, 74, 42);

// ------------------------------------------------------------------ WebSocket

function poignee(request, socket) {
  const cle = request.headers["sec-websocket-key"];
  const accept = createHash("sha1")
    .update(cle + GUID)
    .digest("base64");
  socket.write(
    "HTTP/1.1 101 Switching Protocols\r\n" +
      "Upgrade: websocket\r\n" +
      "Connection: Upgrade\r\n" +
      `Sec-WebSocket-Accept: ${accept}\r\n\r\n`,
  );
}

/** Encode une trame texte non masquée (sens serveur -> client). */
function trame(texte) {
  const charge = Buffer.from(texte, "utf8");
  const n = charge.length;
  let entete;
  if (n < 126) {
    entete = Buffer.from([0x81, n]);
  } else if (n < 65536) {
    entete = Buffer.alloc(4);
    entete[0] = 0x81;
    entete[1] = 126;
    entete.writeUInt16BE(n, 2);
  } else {
    entete = Buffer.alloc(10);
    entete[0] = 0x81;
    entete[1] = 127;
    entete.writeBigUInt64BE(BigInt(n), 2);
  }
  return Buffer.concat([entete, charge]);
}

/** Décode le flux entrant : trames texte masquées (sens client -> serveur). */
function* trames(tampon) {
  let i = 0;
  while (i + 2 <= tampon.length) {
    const opcode = tampon[i] & 0x0f;
    const masque = (tampon[i + 1] & 0x80) !== 0;
    let n = tampon[i + 1] & 0x7f;
    let tete = 2;
    if (n === 126) {
      if (tampon.length < i + 4) return;
      n = tampon.readUInt16BE(i + 2);
      tete = 4;
    } else if (n === 127) {
      if (tampon.length < i + 10) return;
      n = Number(tampon.readBigUInt64BE(i + 2));
      tete = 10;
    }
    const cle = masque ? tampon.subarray(i + tete, i + tete + 4) : null;
    const debut = i + tete + (masque ? 4 : 0);
    if (tampon.length < debut + n) return;
    const charge = Buffer.from(tampon.subarray(debut, debut + n));
    if (cle) for (let k = 0; k < charge.length; k++) charge[k] ^= cle[k % 4];
    i = debut + n;
    if (opcode === 0x1) yield charge.toString("utf8");
    else if (opcode === 0x8) return;
  }
  tampon.consumed = i;
}

const serveur = createServer((req, res) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, content-type",
    "Content-Type": "application/json",
  };
  if (req.method === "OPTIONS") {
    res.writeHead(204, cors);
    return res.end();
  }

  const url = new URL(req.url, "http://localhost");

  // Le proxy d'images de HA s'authentifie par le jeton signé de l'URL, pas par
  // un en-tête : c'est ce qui lui permet de fonctionner dans une balise <img>.
  if (url.pathname.startsWith("/api/media_player_proxy/")) {
    res.writeHead(200, {
      "Content-Type": "image/png",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-store",
    });
    return res.end(POCHETTE);
  }

  // Remise à zéro entre deux tests : sans elle, l'état laissé par la série
  // précédente fait échouer les vérifications d'état initial.
  if (url.pathname === "/_reset") {
    etat = ETAT_INITIAL();
    transferts.length = 0;
    rangCourant = 1;
    file = FILE_INITIALE();
    journal.length = 0;
    journalMA.length = 0;
    sessions.clear();
    donneesUtilisateur = {};
    avecSuperviseur = url.searchParams.get("superviseur") !== "0";
    res.writeHead(200, cors);
    return res.end(JSON.stringify({ ok: true }));
  }

  // Transferts de file demandés : sonde de test, donc du même côté que le
  // journal — devant le contrôle de jeton, sans quoi les tests lisent un refus.
  if (url.pathname === "/_transferts") {
    res.writeHead(200, { ...cors, "content-type": "application/json" });
    return res.end(JSON.stringify(transferts));
  }

  // Un autre appareil réordonne la file : seul Music Assistant le sait, et
  // l'app ne peut l'apprendre que par ses événements.
  if (url.pathname === "/_bouger") {
    const de = Number(url.searchParams.get("de"));
    const vers = Number(url.searchParams.get("vers"));
    const [pris] = file.splice(de, 1);
    file.splice(vers, 0, pris);
    annoncer("queue_items_updated");
    res.writeHead(200, cors);
    return res.end(JSON.stringify(file.map((t) => t.title)));
  }

  if (url.pathname === "/_user_data") {
    res.writeHead(200, cors);
    return res.end(JSON.stringify(donneesUtilisateur));
  }

  if (url.pathname === "/_journal_ma") {
    res.writeHead(200, cors);
    return res.end(JSON.stringify(journalMA));
  }

  // Les images de Music Assistant, servies à travers l'ingress (cookie exigé).
  if (url.pathname.startsWith(INGRESS + "imageproxy")) {
    if (!sessions.has(cookieSession(req))) {
      res.writeHead(401, cors);
      return res.end("{}");
    }
    res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "no-store" });
    return res.end(POCHETTE);
  }

  // Journal de test : lisible sans jeton, ce n'est pas une surface de l'API.
  if (url.pathname === "/_journal") {
    res.writeHead(200, cors);
    return res.end(JSON.stringify(journal));
  }

  const autorise = (req.headers.authorization ?? "") === `Bearer ${TOKEN}`;

  if (!autorise) {
    res.writeHead(401, cors);
    return res.end(JSON.stringify({ message: "jeton refusé" }));
  }

  if (url.pathname === "/api/") {
    res.writeHead(200, cors);
    return res.end(JSON.stringify({ message: "API running." }));
  }

  if (url.pathname === "/api/states") {
    const liste = [
      etat,
      ...AUTRES_ENCEINTES.map((e) => ({
        entity_id: e.entity_id,
        state: "idle",
        attributes: { friendly_name: e.name, mass_player_type: "player", supported_features: 84479 },
      })),
    ];
    res.writeHead(200, cors);
    return res.end(JSON.stringify(liste));
  }

  if (url.pathname === "/api/config") {
    res.writeHead(200, cors);
    return res.end(JSON.stringify({ version: "2026.8.1", location_name: "Faux domicile" }));
  }


  res.writeHead(404, cors);
  res.end(JSON.stringify({ message: "inconnu" }));
});

serveur.on("upgrade", (req, socket) => {
  if (req.url.startsWith(INGRESS + "ws")) return musicAssistant(req, socket);
  if (!req.url.startsWith("/api/websocket")) return socket.destroy();
  poignee(req, socket);

  let authentifie = false;
  let abonnement = null;
  let tampon = Buffer.alloc(0);

  const envoyer = (objet) => socket.write(trame(JSON.stringify(objet)));
  envoyer({ type: "auth_required", ha_version: "2026.8.1" });

  socket.on("data", (morceau) => {
    tampon = Buffer.concat([tampon, morceau]);
    const lus = [];
    for (const texte of trames(tampon)) lus.push(texte);
    tampon = Buffer.alloc(0);

    for (const texte of lus) {
      let msg;
      try {
        msg = JSON.parse(texte);
      } catch {
        continue;
      }
      journal.push(msg);

      if (msg.type === "auth") {
        if (msg.access_token === TOKEN) {
          authentifie = true;
          envoyer({ type: "auth_ok", ha_version: "2026.8.1" });
        } else {
          envoyer({ type: "auth_invalid", message: "jeton refusé" });
        }
        continue;
      }
      if (!authentifie) continue;

      switch (msg.type) {
        case "ping":
          envoyer({ id: msg.id, type: "pong" });
          break;

        /*
         * get_states et get_config par le WebSocket.
         *
         * L'app ne passe plus par /api/states ni /api/ : Home Assistant ne pose
         * d'en-têtes CORS sur son API REST que pour les origines qu'il connaît,
         * si bien que le test de connexion et la liste des enceintes échouaient
         * partout ailleurs que sur la page qu'il sert lui-même. Le WebSocket
         * n'a pas cette restriction.
         */
        case "get_states":
          envoyer({
            id: msg.id,
            type: "result",
            success: true,
            result: [
              etat,
              ...AUTRES_ENCEINTES.map((e) => ({
                entity_id: e.entity_id,
                state: "idle",
                attributes: {
                  friendly_name: e.name,
                  mass_player_type: "player",
                  supported_features: 84479,
                },
              })),
            ],
          });
          break;

        case "get_config":
          envoyer({
            id: msg.id,
            type: "result",
            success: true,
            result: { location_name: "Maison de test", version: "2026.8.1" },
          });
          break;

        case "subscribe_entities": {
          abonnement = msg.id;
          pousserEtat = () =>
            envoyer({
              id: abonnement,
              type: "event",
              event: {
                c: {
                  [etat.entity_id]: {
                    "+": { s: etat.state, a: etat.attributes, lu: Date.now() / 1000 },
                  },
                },
              },
            });
          envoyer({ id: msg.id, type: "result", success: true, result: null });
          // Format COMPRESSÉ : c'est celui que Home Assistant émet réellement.
          envoyer({
            id: msg.id,
            type: "event",
            event: {
              a: {
                [etat.entity_id]: {
                  s: etat.state,
                  a: etat.attributes,
                  c: "01",
                  lc: Date.now() / 1000,
                  lu: Date.now() / 1000,
                },
              },
            },
          });
          break;
        }

        /*
         * Le superviseur, tel que le relaie Home Assistant. Il n'existe que sur
         * Home Assistant OS ou supervisé : ailleurs la commande est inconnue,
         * et l'app doit se replier sans bruit.
         */
        case "supervisor/api": {
          if (!avecSuperviseur) {
            envoyer({ id: msg.id, type: "result", success: false, error: { code: "unknown_command", message: "Unknown command." } });
            break;
          }
          const repondre = (result) => envoyer({ id: msg.id, type: "result", success: true, result });
          const refuser = (message) => envoyer({ id: msg.id, type: "result", success: false, error: { code: "unknown_error", message } });
          if (msg.endpoint === "/addons" && msg.method === "get") {
            repondre({
              addons: [
                { slug: "core_mosquitto", name: "Mosquitto broker", state: "started" },
                { slug: "d5369777_music_assistant", name: "Music Assistant", state: "started" },
              ],
            });
          } else if (msg.endpoint === "/addons/d5369777_music_assistant/info") {
            repondre({ slug: "d5369777_music_assistant", ingress: true, ingress_url: INGRESS, ingress_entry: INGRESS.slice(0, -1) });
          } else if (msg.endpoint === "/ingress/session" && msg.method === "post") {
            const session = randomUUID().replace(/-/g, "");
            sessions.add(session);
            repondre({ session });
          } else if (msg.endpoint === "/ingress/validate_session") {
            if (sessions.has(msg.data?.session)) repondre({});
            else refuser("Invalid session");
          } else {
            refuser(`endpoint inconnu : ${msg.endpoint}`);
          }
          break;
        }

        /*
         * Les données utilisateur du frontend : là que la platine range ce
         * qu'on masque du bac et ce qu'on lit à l'envers, pour que ces choix
         * suivent la personne d'un appareil à l'autre.
         */
        case "frontend/get_user_data":
          envoyer({
            id: msg.id,
            type: "result",
            success: true,
            result: { value: msg.key ? (donneesUtilisateur[msg.key] ?? null) : donneesUtilisateur },
          });
          break;

        case "frontend/set_user_data":
          donneesUtilisateur[msg.key] = msg.value;
          envoyer({ id: msg.id, type: "result", success: true, result: null });
          break;

        case "config_entries/get":
          envoyer({
            id: msg.id,
            type: "result",
            success: true,
            result: [
              {
                entry_id: "01JFAKEMASSENTRY",
                domain: "music_assistant",
                title: "Music Assistant",
                state: "loaded",
              },
            ],
          });
          break;

        case "call_service": {
          const reponse = msg.return_response
            ? reponseService(msg.service, msg.service_data ?? {})
            : null;

          // Un service de lecture change l'état : on le pousse comme le ferait HA.
          appliquer(msg, (suivant) => {
            if (abonnement === null) return;
            envoyer({
              id: abonnement,
              type: "event",
              event: {
                c: {
                  [etat.entity_id]: {
                    "+": { s: suivant.state, a: suivant.attributes, lu: Date.now() / 1000 },
                  },
                },
              },
            });
          });

          envoyer({
            id: msg.id,
            type: "result",
            success: true,
            result: msg.return_response ? { context: { id: "ctx" }, response: reponse } : { context: { id: "ctx" } },
          });
          break;
        }

        default:
          envoyer({ id: msg.id, type: "result", success: false, error: { code: "unknown_command", message: msg.type } });
      }
    }
  });

  socket.on("error", () => socket.destroy());
});

function appliquer(msg, pousser) {
  const d = msg.service_data ?? {};
  let change = true;
  switch (msg.service) {
    case "media_play":
      etat.state = "playing";
      break;
    case "media_pause":
      etat.state = "paused";
      break;
    case "media_play_pause":
      etat.state = etat.state === "playing" ? "paused" : "playing";
      break;
    case "media_seek":
      etat.attributes.media_position = Number(d.seek_position ?? 0);
      etat.attributes.media_position_updated_at = new Date().toISOString();
      break;
    case "volume_set":
      etat.attributes.volume_level = Number(d.volume_level ?? 0);
      break;
    case "shuffle_set":
      etat.attributes.shuffle = Boolean(d.shuffle);
      break;
    case "repeat_set":
      etat.attributes.repeat = d.repeat ?? "off";
      break;
    case "play_media": {
      /*
       * Un album ou une playlist REMPLACE la file : c'est ce qui la remplissait
       * chez Music Assistant et restait invisible dans l'app. Les clients
       * branchés par l'ingress en sont prévenus, comme par le vrai serveur.
       */
      const disque =
        ALBUMS.find((a) => a.uri === d.media_id) ?? PLAYLISTS.find((p) => p.uri === d.media_id);
      if (disque && d.enqueue === "replace") {
        file = pistesDe(disque);
        rangCourant = 0;
        etat.state = "playing";
        etat.attributes.media_album_name = disque.name;
        etat.attributes.media_artist = disque.artists?.[0]?.name ?? "Artistes variés";
        etat.attributes.media_title = file[0].title;
        etat.attributes.media_position = 0;
        etat.attributes.media_position_updated_at = new Date().toISOString();
        setTimeout(() => annoncer("queue_items_updated"), 150);
        break;
      }
      const album = ALBUMS.find((a) => a.uri === d.media_id);
      /*
       * Un saut dans la file : le rang ne bouge qu'après un délai, comme sur une
       * vraie installation. L'app doit tenir sa marque jusque-là.
       */
      if (album && d.media_type === "track") {
        const rang = ALBUMS.indexOf(album);
        setTimeout(() => {
          rangCourant = rang;
        }, 700);
      }
      if (album) {
        etat.state = "playing";
        etat.attributes.media_album_name = album.name;
        etat.attributes.media_artist = album.artists[0].name;
        etat.attributes.media_title = `${album.name} — piste 1`;
        etat.attributes.media_position = 0;
        etat.attributes.media_position_updated_at = new Date().toISOString();
      }
      break;
    }
    /*
     * transfer_queue déplace la file ET la position vers un autre lecteur.
     * L'enceinte d'origine se tait ; c'est le seul effet observable ici, et il
     * suffit à prouver que l'app a visé la bonne source et la bonne cible.
     */
    case "transfer_queue":
      transferts.push({ source: d.source_player ?? null, cible: msg.target?.entity_id ?? null });
      etat.state = "idle";
      etat.attributes.media_title = null;
      break;

    default:
      change = false;
  }
  if (change) pousser(etat);
}

// ------------------------------------------------------------ Music Assistant

function cookieSession(req) {
  return /(?:^|;\s*)ingress_session=([^;]+)/.exec(req.headers.cookie ?? "")?.[1] ?? null;
}

function annoncer(evenement) {
  const message = JSON.stringify({ event: evenement, object_id: FILE_ID, data: null });
  for (const envoyer of clientsMA) envoyer(message);
}

/**
 * Le WebSocket de Music Assistant, derrière l'ingress.
 *
 * Aucune authentification propre : c'est tout l'intérêt de l'ingress. Mais sans
 * cookie de session valide, le superviseur refuse la connexion — exactement ce
 * qui arrive à une page servie ailleurs que par Home Assistant.
 */
function musicAssistant(req, socket) {
  if (!avecSuperviseur || !sessions.has(cookieSession(req))) {
    socket.write("HTTP/1.1 401 Unauthorized\r\nContent-Length: 0\r\n\r\n");
    return socket.destroy();
  }
  poignee(req, socket);
  const envoyer = (texte) => socket.write(trame(texte));
  const repondre = (id, result) => envoyer(JSON.stringify({ message_id: id, result }));
  const erreur = (id, details) => envoyer(JSON.stringify({ message_id: id, error_code: 999, details }));
  clientsMA.add(envoyer);
  socket.on("close", () => clientsMA.delete(envoyer));
  socket.on("error", () => {
    clientsMA.delete(envoyer);
    socket.destroy();
  });

  envoyer(
    JSON.stringify({
      server_id: "faux-serveur",
      server_version: "2.10.4",
      schema_version: 65,
      min_supported_schema_version: 28,
      base_url: BASE_MA,
      homeassistant_addon: true,
      onboard_done: true,
    }),
  );

  let tampon = Buffer.alloc(0);
  socket.on("data", (morceau) => {
    tampon = Buffer.concat([tampon, morceau]);
    const lus = [...trames(tampon)];
    tampon = Buffer.alloc(0);
    for (const texte of lus) {
      let msg;
      try {
        msg = JSON.parse(texte);
      } catch {
        continue;
      }
      journalMA.push(msg);
      const a = msg.args ?? {};
      if (a.queue_id !== undefined && a.queue_id !== FILE_ID) {
        erreur(msg.message_id, `Queue ${a.queue_id} not found`);
        continue;
      }

      switch (msg.command) {
        case "player_queues/get":
          repondre(msg.message_id, {
            queue_id: FILE_ID,
            active: true,
            display_name: "Salon",
            items: file.length,
            current_index: rangCourant,
            index_in_buffer: rangCourant,
            state: "playing",
            current_item: file[rangCourant] ? elementMA(file[rangCourant], rangCourant) : null,
            next_item: file[rangCourant + 1] ? elementMA(file[rangCourant + 1], rangCourant + 1) : null,
          });
          break;

        case "player_queues/items": {
          const debut = Number(a.offset ?? 0);
          const fin = debut + Number(a.limit ?? 500);
          repondre(msg.message_id, file.slice(debut, fin).map((t, i) => elementMA(t, debut + i)));
          break;
        }

        /*
         * Les mêmes règles que le vrai serveur : on ne déplace ni ce qui est
         * déjà parti vers l'enceinte, ni vers une place avant le morceau en
         * cours ; pos_shift = 0 veut dire « à jouer ensuite ».
         */
        case "player_queues/move_item": {
          const de = file.findIndex((t) => t.id === a.queue_item_id);
          if (de < 0) {
            erreur(msg.message_id, "item not found");
            break;
          }
          if (de <= rangCourant) {
            erreur(msg.message_id, `${de} is already played/buffered`);
            break;
          }
          const decalage = Number(a.pos_shift ?? 1);
          const vers = decalage === 0 ? rangCourant + 1 : de + decalage;
          if (vers < rangCourant || vers > file.length) {
            repondre(msg.message_id, null);
            break;
          }
          const [pris] = file.splice(de, 1);
          file.splice(vers, 0, pris);
          repondre(msg.message_id, null);
          annoncer("queue_items_updated");
          break;
        }

        /*
         * Les morceaux d'une playlist ou d'un album, dans leur ordre : c'est
         * sur eux que se fait la lecture à l'envers. On les rend volontairement
         * DÉSORDONNÉS : l'app doit remettre l'ordre du disque elle-même
         * (position, ou disque puis piste), pas se fier à l'ordre d'arrivée.
         */
        case "music/playlists/playlist_tracks":
        case "music/albums/album_tracks": {
          const playlist = msg.command.includes("playlist");
          const source = playlist ? PLAYLISTS : ALBUMS;
          const disque = source.find((d) => d.uri.split("/").pop() === String(a.item_id));
          if (!disque || a.provider_instance_id_or_domain !== "library") {
            erreur(msg.message_id, "media item not found");
            break;
          }
          const pistes = pistesDe(disque).map((t, k) => ({
            media_type: "track",
            uri: t.uri,
            name: t.title,
            duration: t.duration,
            artists: [{ media_type: "artist", name: t.artist }],
            ...(playlist ? { position: k + 1 } : { disc_number: 1, track_number: k + 1 }),
          }));
          // Désordonnées exprès, pour vérifier que l'app retrie.
          repondre(msg.message_id, [...pistes.slice(3), ...pistes.slice(0, 3)]);
          break;
        }

        case "player_queues/play_media": {
          const media = Array.isArray(a.media) ? a.media : [a.media];
          if (a.option !== "replace" || media.length === 0) {
            erreur(msg.message_id, "option non prise en charge par le faux serveur");
            break;
          }
          file = media.map((uri, k) => ({
            id: randomUUID().replace(/-/g, ""),
            uri,
            title: `Piste ${String(uri).split("/").pop()}`,
            artist: "Artistes variés",
            album: "Lecture à l'envers",
            duration: 200 + k,
            image: null,
          }));
          rangCourant = 0;
          etat.state = "playing";
          etat.attributes.media_title = file[0].title;
          etat.attributes.media_position = 0;
          etat.attributes.media_position_updated_at = new Date().toISOString();
          pousserEtat?.();
          repondre(msg.message_id, null);
          setTimeout(() => annoncer("queue_items_updated"), 100);
          break;
        }

        case "player_queues/play_index": {
          const rang =
            typeof a.index === "number" ? a.index : file.findIndex((t) => t.id === a.index);
          if (rang < 0 || rang >= file.length) {
            erreur(msg.message_id, "index out of range");
            break;
          }
          repondre(msg.message_id, null);
          // Le lecteur suit tout de suite ; l'index de file, un peu après.
          etat.attributes.media_title = file[rang].title;
          etat.attributes.media_artist = file[rang].artist;
          etat.attributes.media_album_name = file[rang].album;
          etat.attributes.media_position = 0;
          etat.attributes.media_position_updated_at = new Date().toISOString();
          etat.state = "playing";
          pousserEtat?.();
          setTimeout(() => {
            rangCourant = rang;
            annoncer("queue_updated");
          }, 700);
          break;
        }

        default:
          erreur(msg.message_id, `Invalid command: ${msg.command}`);
      }
    }
  });
}

/** Pousse l'état de l'enceinte aux clients Home Assistant abonnés. */
let pousserEtat = null;

serveur.listen(PORT, () => {
  console.log(`Faux Home Assistant sur http://localhost:${PORT}`);
  console.log(`  jeton   : ${TOKEN}`);
  console.log(`  enceinte: ${ENTITY}`);
  console.log(`  journal : http://localhost:${PORT}/_journal`);
});
