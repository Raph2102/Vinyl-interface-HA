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
  const R = size * 0.44; // rayon du disque
  const labelR = R * 0.34;
  const holeR = R * 0.045;

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
 * La première version était un disque noir sur fond presque noir : correcte de
 * loin, illisible en petit et invisible sur une interface sombre — c'est-à-dire
 * partout où elle sert. Une icône doit se reconnaître à seize pixels, dans une
 * barre latérale, du coin de l'œil.
 *
 * Trois décisions en découlent :
 *
 *  - un FOND CHAUD, qui détache la vignette de tout ce qui l'entoure ;
 *  - un DISQUE MARBRÉ, la matière par défaut de l'app, et la seule qui reste
 *    reconnaissable une fois réduite — un aplat noir ne raconte rien ;
 *  - un BRAS DE LECTURE en diagonale, qui dit « platine » plutôt que
 *    « rondelle », et donne à la silhouette un axe que l'œil accroche.
 */

/** Bruit doux et déterministe : les marbrures d'une image à l'autre sont les mêmes. */
function bruit(x, y) {
  const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return n - Math.floor(n);
}

function marbrure(dx, dy, R) {
  // Trois échelles superposées : la grande donne le mouvement, les petites
  // cassent les bords pour qu'aucune tache ne paraisse dessinée au compas.
  const e = R / 7;
  let v = 0;
  let amplitude = 1;
  let echelle = 1;
  for (let i = 0; i < 3; i++) {
    const x = (dx / e) * echelle;
    const y = (dy / e) * echelle;
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const fx = x - xi;
    const fy = y - yi;
    // Interpolation douce entre les quatre coins de la maille.
    const lisse = (t) => t * t * (3 - 2 * t);
    const a = bruit(xi, yi);
    const b = bruit(xi + 1, yi);
    const c = bruit(xi, yi + 1);
    const d2 = bruit(xi + 1, yi + 1);
    const haut = a + (b - a) * lisse(fx);
    const bas = c + (d2 - c) * lisse(fx);
    v += (haut + (bas - haut) * lisse(fy)) * amplitude;
    amplitude *= 0.5;
    echelle *= 2.4;
  }
  return v / 1.75;
}

function shade(d, dx, dy, R, labelR, holeR) {
  const S = R * 2;

  /*
   * Fond : un dégradé chaud en diagonale, celui de la platine quand une pochette
   * orangée l'éclaire. C'est lui qui rend la vignette reconnaissable de loin.
   */
  const t = Math.min(1, Math.max(0, (dx + dy + S) / (S * 2)));
  const fond = [
    Math.round(58 - 26 * t),
    Math.round(30 - 14 * t),
    Math.round(24 - 12 * t),
    255,
  ];

  // Le bras : une barre fine en diagonale, depuis le coin haut droit.
  const bras = (() => {
    const ux = 0.62;
    const uy = -0.78;
    const le = dx * ux + dy * uy;
    const tr = dx * uy - dy * ux;
    if (le < labelR * 0.95 || le > R * 1.34) return null;
    const demi = le > R * 1.16 ? R * 0.1 : R * 0.045;
    if (Math.abs(tr) > demi) return null;
    const clair = 1 - Math.abs(tr) / demi;
    const n = Math.round(150 + 70 * clair);
    return [n, n + 4, n + 10, 255];
  })();

  if (d > R) return bras ?? fond;

  if (d < holeR) return [26, 14, 11, 255];

  if (d < labelR) {
    const ombre = d < holeR * 2.1 ? 16 : 0;
    return bras ?? [247 - ombre, 244 - ombre, 237 - ombre, 255];
  }

  /*
   * Le disque. Une base claire, la couleur coulée par-dessus à travers la
   * marbrure, puis les sillons et un reflet — dans cet ordre, comme sur la
   * platine elle-même.
   */
  const m = marbrure(dx, dy, R);
  const melange = Math.min(1, Math.max(0, (m - 0.37) * 2.7));

  const creme = [243, 238, 229];
  const teinte = [183, 66, 33];
  let c = [
    creme[0] + (teinte[0] - creme[0]) * melange,
    creme[1] + (teinte[1] - creme[1]) * melange,
    creme[2] + (teinte[2] - creme[2]) * melange,
  ];

  // Sillons : une modulation fine, jamais assez forte pour brouiller la marbrure.
  const sillon = (Math.sin(d * 2.3) * 0.5 + 0.5) * 7 - 3.5;
  // Reflet venu du haut droit, comme la lumière de la scène.
  const angle = Math.atan2(dy, dx);
  const reflet = Math.max(0, Math.cos(angle - 2.35)) ** 5 * 34;
  // Assombrissement vers le bord : le disque s'arrondit au lieu d'être un aplat.
  const bord = (d / R) ** 3 * 26;

  c = c.map((v) => Math.round(Math.min(255, Math.max(0, v + sillon + reflet - bord))));
  return bras ?? [c[0], c[1], c[2], 255];
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
