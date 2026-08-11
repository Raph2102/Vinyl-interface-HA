/**
 * Extraction des couleurs de la pochette, pour le fond adaptatif et le vinyle teinté.
 *
 * Tout se fait dans le navigateur, sur une miniature 40×40 : c'est instantané et
 * ça évite un aller-retour serveur. Possible uniquement parce que la pochette est
 * servie par le proxy de Home Assistant, donc sur la même origine que l'app — une
 * image tierce « salirait » le canvas et interdirait la lecture des pixels.
 */

export interface Palette {
  /** Dominante, la couleur qui porte le fond. */
  a: string;
  /** Secondaire, choisie loin de la dominante pour que le dégradé respire. */
  b: string;
  /** Ombre profonde, tirée de la dominante : sert de base au fond. */
  deep: string;
  /** Couleur de texte lisible par-dessus. */
  text: string;
  isDark: boolean;
}

export const NEUTRAL: Palette = {
  a: "hsl(220 4% 46%)",
  b: "hsl(220 5% 34%)",
  deep: "hsl(220 6% 14%)",
  text: "hsl(0 0% 100%)",
  isDark: true,
};

const SIZE = 40;
const cache = new Map<string, Palette>();

interface Bucket {
  count: number;
  r: number;
  g: number;
  b: number;
}

export async function extractPalette(url: string): Promise<Palette> {
  const cached = cache.get(url);
  if (cached) return cached;

  try {
    const img = await loadImage(url);
    const palette = analyse(img);
    cache.set(url, palette);
    if (cache.size > 60) cache.delete(cache.keys().next().value as string);
    return palette;
  } catch {
    return NEUTRAL;
  }
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("image illisible"));
    img.src = url;
  });
}

function analyse(img: HTMLImageElement): Palette {
  const canvas = document.createElement("canvas");
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return NEUTRAL;

  ctx.drawImage(img, 0, 0, SIZE, SIZE);
  const { data } = ctx.getImageData(0, 0, SIZE, SIZE); // lève une erreur si le canvas est sali

  // Regroupement par paliers de 32 niveaux : assez grossier pour fusionner les
  // dégradés d'une même zone, assez fin pour séparer deux teintes distinctes.
  const buckets = new Map<number, Bucket>();
  let sumL = 0;
  let pixels = 0;

  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3] ?? 0;
    if (alpha < 200) continue;
    const r = data[i] ?? 0;
    const g = data[i + 1] ?? 0;
    const b = data[i + 2] ?? 0;

    sumL += (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    pixels++;

    const key = ((r >> 5) << 10) | ((g >> 5) << 5) | (b >> 5);
    const bucket = buckets.get(key);
    if (bucket) {
      bucket.count++;
      bucket.r += r;
      bucket.g += g;
      bucket.b += b;
    } else {
      buckets.set(key, { count: 1, r, g, b });
    }
  }

  if (pixels === 0) return NEUTRAL;

  const candidates = [...buckets.values()]
    .map((bucket) => {
      const r = bucket.r / bucket.count;
      const g = bucket.g / bucket.count;
      const b = bucket.b / bucket.count;
      const [h, s, l] = rgbToHsl(r, g, b);
      return { h, s, l, count: bucket.count, score: score(bucket.count, s, l) };
    })
    .sort((x, y) => y.score - x.score);

  const first = candidates[0];
  if (!first) return NEUTRAL;

  // Deuxième couleur : la mieux classée dont la teinte s'écarte franchement
  // de la première, sinon le dégradé serait plat. À défaut, on décale la première.
  const second =
    candidates.find((c) => hueDistance(c.h, first.h) > 35 && c.score > first.score * 0.12) ??
    candidates.find((c) => Math.abs(c.l - first.l) > 0.18) ??
    null;

  const avgL = sumL / pixels;
  const isDark = avgL < 0.55;

  const a = hsl(first.h, clamp(first.s, 0.18, 0.85), clamp(first.l, 0.3, 0.62));
  const b = second
    ? hsl(second.h, clamp(second.s, 0.15, 0.8), clamp(second.l, 0.22, 0.55))
    : hsl((first.h + 28) % 360, clamp(first.s * 0.8, 0.12, 0.7), clamp(first.l - 0.14, 0.18, 0.5));

  return {
    a,
    b,
    deep: hsl(first.h, clamp(first.s * 0.55, 0.08, 0.4), 0.13),
    text: "hsl(0 0% 100%)",
    isDark,
  };
}

/**
 * Une couleur mérite le fond si elle est présente (surface), colorée (saturation)
 * et ni écrasée dans le noir ni délavée dans le blanc. Sans la pondération par la
 * saturation, une pochette majoritairement grise donnerait un fond gris terne
 * alors que son unique aplat coloré est justement ce qui la caractérise.
 */
function score(count: number, s: number, l: number): number {
  const saturation = 0.25 + s * 1.75;
  const lightness = 1 - Math.pow(Math.abs(l - 0.5) * 2, 1.6);
  return count * saturation * Math.max(lightness, 0.05);
}

function hueDistance(a: number, b: number): number {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
}

function clamp(v: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, v));
}

function hsl(h: number, s: number, l: number): string {
  return `hsl(${Math.round(h)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%)`;
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  if (d === 0) return [0, 0, l];

  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h: number;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
  else if (max === g) h = ((b - r) / d + 2) * 60;
  else h = ((r - g) / d + 4) * 60;

  return [h, s, l];
}
