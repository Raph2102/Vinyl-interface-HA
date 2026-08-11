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
 * Usage :  node tools/fake-ha.mjs [port]
 * Le jeton attendu est "jeton-de-test".
 */
import { createHash } from "node:crypto";
import { createServer } from "node:http";
import { deflateSync } from "node:zlib";

const PORT = Number(process.argv[2] ?? 8123);
const TOKEN = "jeton-de-test";
const GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";

/** Tout ce que l'app nous a envoyé, pour que les tests puissent l'inspecter. */
const journal = [];
/** Transferts de file demandés, dans l'ordre. */
const transferts = [];
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

function reponseService(service, data) {
  switch (service) {
    case "get_library":
      return {
        items: ALBUMS.slice(0, Number(data.limit ?? 50)),
        limit: data.limit ?? 50,
        offset: data.offset ?? 0,
        order_by: data.order_by ?? "name",
        media_type: data.media_type ?? "album",
      };

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
        playlists: [],
        radio: [],
      };
    }

    case "get_queue":
      return {
        queue_id: "salon",
        // L'index suit les sauts demandés, comme le ferait Music Assistant.
        // Sans ça, la file annonçait toujours le même morceau et on ne pouvait
        // pas vérifier que la pastille reste sur la ligne choisie.
        current_index: rangCourant,
        items: ALBUMS.slice(0, 6).map((a, i) => ({
          queue_item_id: `q${i}`,
          name: `${a.name} — piste 1`,
          duration: 200 + i * 13,
          media_item: { uri: a.uri, name: a.name, artists: a.artists, image: a.image },
        })),
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
    journal.length = 0;
    res.writeHead(200, cors);
    return res.end(JSON.stringify({ ok: true }));
  }

  // Transferts de file demandés : sonde de test, donc du même côté que le
  // journal — devant le contrôle de jeton, sans quoi les tests lisent un refus.
  if (url.pathname === "/_transferts") {
    res.writeHead(200, { ...cors, "content-type": "application/json" });
    return res.end(JSON.stringify(transferts));
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

serveur.listen(PORT, () => {
  console.log(`Faux Home Assistant sur http://localhost:${PORT}`);
  console.log(`  jeton   : ${TOKEN}`);
  console.log(`  enceinte: ${ENTITY}`);
  console.log(`  journal : http://localhost:${PORT}/_journal`);
});
