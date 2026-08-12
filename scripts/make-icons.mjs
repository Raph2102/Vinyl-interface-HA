/**
 * Génère les icônes d'écran d'accueil (public/icon-180.png et icon-512.png).
 *
 * Tout est fait à la main — tracé des pixels puis encodage PNG via zlib, tous
 * deux fournis par Node — pour ne pas traîner une dépendance graphique entière
 * dans le projet juste pour deux images générées une fois.
 *
 * Usage : node scripts/make-icons.mjs
 */
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = join(ROOT, "public");
mkdirSync(PUBLIC, { recursive: true });

// ------------------------------------------------------------------ encodage PNG

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([length, body, crc]);
}

function encodePng(width, height, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8 bits par canal
  ihdr[9] = 6; // RGBA
  // Une ligne PNG est précédée d'un octet de filtre ; 0 = aucun.
  const raw = Buffer.alloc(height * (width * 4 + 1));
  for (let y = 0; y < height; y++) {
    raw[y * (width * 4 + 1)] = 0;
    rgba.copy(raw, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// ------------------------------------------------------------------ dessin

/** Suréchantillonnage 4×4 : les bords du disque doivent être lisses, pas crénelés. */
const SS = 4;

function render(size) {
  const rgba = Buffer.alloc(size * size * 4);
  const c = size / 2;
  // Le disque occupe presque toute la vignette : une icone qui flotte au milieu
  // de son cadre parait plus petite que ses voisines dans une barre laterale.
  const R = size * 0.46;
  // Etiquette genereuse : c est elle qui porte la lecture en petit.
  const labelR = R * 0.38;
  const holeR = R * 0.05;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let r = 0;
      let g = 0;
      let b = 0;
      let a = 0;

      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const px = x + (sx + 0.5) / SS;
          const py = y + (sy + 0.5) / SS;
          const dx = px - c;
          const dy = py - c;
          const d = Math.hypot(dx, dy);
          const sample = shade(d, dx, dy, R, labelR, holeR);
          r += sample[0];
          g += sample[1];
          b += sample[2];
          a += sample[3];
        }
      }

      const n = SS * SS;
      const i = (y * size + x) * 4;
      rgba[i] = Math.round(r / n);
      rgba[i + 1] = Math.round(g / n);
      rgba[i + 2] = Math.round(b / n);
      rgba[i + 3] = Math.round(a / n);
    }
  }
  return rgba;
}

/**
 * Dessin de l'icône.
 *
 * Deux versions ont précédé celle-ci, et chacune a échoué pour la même raison
 * de fond : elles cherchaient à MONTRER un disque au lieu d'en donner la
 * silhouette.
 *
 *  - un vinyle noir sur fond presque noir : rien ne se détachait ;
 *  - un vinyle marbré : joli en grand, une bouillie beige en petit — une
 *    texture ne survit pas à la réduction.
 *
 * Une icône se lit à seize pixels, du coin de l'œil, dans une barre latérale.
 * Ce qui survit à cette taille, ce n'est ni la matière ni le détail : c'est le
 * CONTRASTE entre deux formes simples. D'où le parti pris ici — un anneau
 * presque noir, une pastille orange franche au centre, et rien d'autre. La même
 * lecture qu'un vrai 45 tours vu de loin : un trou de couleur dans un disque
 * sombre.
 *
 * Le halo chaud derrière n'est pas décoratif : il détache le noir du disque de
 * tous les fonds sombres sur lesquels l'icône va se poser.
 */

function shade(d, dx, dy, R, labelR, holeR) {
  const S = R * 2;

  /*
   * Fond : un halo chaud, plus vif derrière le disque et qui s'éteint vers les
   * angles. C'est ce qui donne du relief à une image aussi plate.
   */
  const halo = Math.max(0, 1 - d / (R * 1.9)) ** 1.6;
  const diag = Math.min(1, Math.max(0, (dx + dy + S) / (S * 2)));
  const fond = [
    Math.round(30 + 62 * halo - 10 * diag),
    Math.round(16 + 26 * halo - 6 * diag),
    Math.round(13 + 16 * halo - 5 * diag),
    255,
  ];

  if (d > R) return fond;

  // Liseré clair sur la tranche : le disque cesse d'être un trou dans l'image.
  if (d > R * 0.972) {
    const t = (d - R * 0.972) / (R * 0.028);
    const n = Math.round(96 - 60 * t);
    return [n, n - 4, n - 6, 255];
  }

  if (d < holeR) return [26, 13, 10, 255];

  if (d < labelR) {
    /*
     * L'étiquette est LA forme reconnaissable. Orange franc, avec un dégradé
     * léger pour qu'elle ne soit pas un autocollant, et un cerne sombre côté
     * trou — c'est l'ombre du perçage sur un vrai disque.
     */
    const t = Math.min(1, d / labelR);
    const cerne = d < holeR * 1.9 ? 26 : 0;
    return [
      Math.round(214 - 26 * t - cerne),
      Math.round(92 - 22 * t - cerne),
      Math.round(46 - 10 * t - cerne),
      255,
    ];
  }

  /*
   * Le vinyle. Presque noir, avec des sillons à peine perceptibles et un
   * balayage de lumière en diagonale — juste assez pour qu'on lise une matière
   * brillante, pas assez pour brouiller la silhouette.
   */
  const sillon = (Math.sin(d * 1.7) * 0.5 + 0.5) * 6;
  const angle = Math.atan2(dy, dx);
  const reflet = Math.max(0, Math.cos(angle - 2.3)) ** 4 * 30;
  // Un second reflet, opposé et plus faible : une seule brillance fait plat.
  const contre = Math.max(0, Math.cos(angle + 0.9)) ** 6 * 12;
  const n = Math.round(16 + sillon + reflet + contre);
  return [n, n + 1, n + 3, 255];
}

for (const size of [180, 256, 512]) {
  const png = encodePng(size, size, render(size));
  writeFileSync(join(PUBLIC, `icon-${size}.png`), png);

  /*
   * Les memes images servent de marque a Home Assistant.
   *
   * HACS exige que l integration ait une icone : soit dans le depot central des
   * marques, soit — ce qui est bien plus simple — livree avec elle. Il attend
   * icon.png en 256 px et icon@2x.png en 512.
   */
  const marque = join(ROOT, "custom_components", "md_vinyl", "brand");
  mkdirSync(marque, { recursive: true });
  if (size === 256) writeFileSync(join(marque, "icon.png"), png);
  if (size === 512) writeFileSync(join(marque, "icon@2x.png"), png);
  console.log(`public/icon-${size}.png  (${(png.length / 1024).toFixed(1)} Ko)`);
}

// ------------------------------------------------------------------ pochette de démo

/**
 * Pochette factice pour le mode ?demo=1. Une vraie image, servie depuis la même
 * origine : l'extraction de couleurs travaille donc dans les mêmes conditions
 * qu'avec une pochette venue du proxy de Home Assistant.
 */
function renderCover(size) {
  const rgba = Buffer.alloc(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let r = 0;
      let g = 0;
      let b = 0;
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const px = (x + (sx + 0.5) / SS) / size;
          const py = (y + (sy + 0.5) / SS) / size;
          const s = coverShade(px, py);
          r += s[0];
          g += s[1];
          b += s[2];
        }
      }
      const n = SS * SS;
      const i = (y * size + x) * 4;
      rgba[i] = Math.round(r / n);
      rgba[i + 1] = Math.round(g / n);
      rgba[i + 2] = Math.round(b / n);
      rgba[i + 3] = 255;
    }
  }
  return rgba;
}

function coverShade(x, y) {
  // Fond : bleu nuit qui vire au prune vers le bas.
  const bg = [18 + 26 * y, 26 + 12 * y, 52 + 34 * y];

  // Soleil décentré, orange saturé : c'est lui qui doit ressortir dans le fond adaptatif.
  const d = Math.hypot(x - 0.62, y - 0.38);
  if (d < 0.235) {
    const k = 1 - d / 0.235;
    return [232 + 18 * k, 96 + 60 * k, 42 + 22 * k];
  }

  // Bandes horizontales de plus en plus serrées : une ligne d'horizon graphique.
  if (y > 0.62) {
    const t = (y - 0.62) / 0.38;
    const stripe = Math.sin(y * (34 + t * 90)) > 0.15 ? 1 : 0;
    if (stripe) return [214 - 40 * t, 88 + 20 * t, 60 + 30 * t];
  }

  return bg;
}

const COVER = 600;
const coverPng = encodePng(COVER, COVER, renderCover(COVER));
writeFileSync(join(PUBLIC, "demo-cover.png"), coverPng);
console.log(`public/demo-cover.png  (${(coverPng.length / 1024).toFixed(1)} Ko)`);
