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

function shade(d, dx, dy, R, labelR, holeR) {
  // Fond : léger dégradé pour que l'icône ne soit pas un aplat mort.
  const t = Math.min(1, d / (R * 2));
  let base = [26 - 8 * t, 27 - 8 * t, 31 - 9 * t, 255];

  if (d > R) return base;

  if (d < holeR) return [30, 32, 38, 255];

  if (d < labelR) {
    // Étiquette crème, avec une ombre douce sur le bord percé.
    const shadow = d < holeR * 2.2 ? 14 : 0;
    return [246 - shadow, 243 - shadow, 236 - shadow, 255];
  }

  // Vinyle : noir profond, sillons concentriques, reflet en diagonale.
  const groove = Math.sin(d * 1.9) * 0.5 + 0.5;
  const angle = Math.atan2(dy, dx);
  const sheen = Math.max(0, Math.cos(angle - 2.2)) ** 6 * 46;
  const level = 14 + groove * 9 + sheen;
  return [level, level + 1, level + 3, 255];
}

for (const size of [180, 512]) {
  const png = encodePng(size, size, render(size));
  writeFileSync(join(PUBLIC, `icon-${size}.png`), png);
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
