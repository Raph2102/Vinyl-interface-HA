/**
 * Motifs de marbré, calculés comme la matière se forme sous la presse.
 *
 * Le marbré d'origine (« coulée ») dépose la couleur par des taches de
 * turbulence : juste, mais des taches sans direction. Un vrai vinyle marbré se
 * presse à partir d'une galette de pâtes mêlées, écrasée en tournant : les
 * veines s'étirent en ARCS autour du centre. D'où un calcul en coordonnées
 * polaires — le bruit est échantillonné sur un cercle de petit rayon, si bien
 * qu'il varie lentement avec l'angle (des traînées longues) et vite avec la
 * distance au centre (plusieurs anneaux), le tout tordu par un second bruit
 * pour que rien ne soit régulier.
 *
 * Trois masques sortent de chaque motif : la couleur, une veine sombre, une
 * veine claire. Ils ne dépendent PAS de la teinte — la couleur est posée par le
 * CSS à travers eux —, si bien qu'on ne les calcule qu'une fois par motif,
 * puis on les garde.
 *
 * Le calcul se fait par tranches de quelques millisecondes : un demi-million
 * de pixels d'un seul bloc gèlerait l'interface, et un geste sur l'aiguille à
 * ce moment-là serait perdu.
 */

import type { MarbleMotif } from "./settings";

export interface MarbleMasks {
  color: string;
  dark: string;
  light: string;
}

/** Côté du masque. Le disque est souple : au-delà, on ne verrait pas mieux. */
const SIZE = 640;
/** Budget d'une tranche de calcul, en millisecondes. */
const SLICE = 10;
const STORE = "mdvinyl.marble.v1.";

const memoire = new Map<MarbleMotif, Promise<MarbleMasks>>();

/** Les masques d'un motif ; null pour la coulée, peinte par le CSS. */
export function marbleMasks(motif: MarbleMotif): Promise<MarbleMasks> | null {
  if (motif === "coulee") return null;
  let promesse = memoire.get(motif);
  if (!promesse) {
    promesse = charger(motif);
    memoire.set(motif, promesse);
  }
  return promesse;
}

async function charger(motif: Exclude<MarbleMotif, "coulee">): Promise<MarbleMasks> {
  // Déjà calculé lors d'une visite précédente : l'ouverture est instantanée.
  try {
    const garde = localStorage.getItem(STORE + motif);
    if (garde) return JSON.parse(garde) as MarbleMasks;
  } catch {
    /* stockage indisponible : on recalcule */
  }
  const masques = await calculer(motif);
  try {
    localStorage.setItem(STORE + motif, JSON.stringify(masques));
  } catch {
    /* quota dépassé : tant pis, on recalculera à la prochaine visite */
  }
  return masques;
}

// ------------------------------------------------------------------ le calcul

async function calculer(motif: Exclude<MarbleMotif, "coulee">): Promise<MarbleMasks> {
  const bruit = perlin(7);
  const torsion = perlin(31);
  const couleur = new Uint8ClampedArray(SIZE * SIZE * 4);
  const sombre = new Uint8ClampedArray(SIZE * SIZE * 4);
  const clair = new Uint8ClampedArray(SIZE * SIZE * 4);

  let j = 0;
  while (j < SIZE) {
    const debut = performance.now();
    while (j < SIZE && performance.now() - debut < SLICE) {
      for (let i = 0; i < SIZE; i++) {
        const x = (i / SIZE) * 2 - 1;
        const y = (j / SIZE) * 2 - 1;
        const [c, d, l] = pixel(motif, x, y, i, j, bruit, torsion);
        const k = (j * SIZE + i) * 4 + 3;
        couleur[k] = c * 255;
        sombre[k] = d * 255;
        clair[k] = l * 255;
      }
      j++;
    }
    // On rend la main au navigateur entre deux tranches.
    await new Promise((r) => setTimeout(r, 0));
  }

  return {
    color: versImage(couleur),
    dark: versImage(sombre),
    light: versImage(clair),
  };
}

type Bruit = (x: number, y: number, z: number) => number;

/** Couleur, veine sombre, veine claire — chacune entre 0 et 1. */
function pixel(
  motif: Exclude<MarbleMotif, "coulee">,
  x: number,
  y: number,
  i: number,
  j: number,
  n: Bruit,
  m: Bruit,
): [number, number, number] {
  const r = Math.hypot(x, y);
  const th = Math.atan2(y, x);
  const w = fbm(m, x * 1.7 + 3.1, y * 1.7 - 2.2, 0.5, 4);

  /*
   * Traînées autour du centre : le bruit parcourt un cercle de rayon `cr`
   * (petit = traînées longues), `rf` anneaux du centre au bord, une torsion
   * qui fait spiraler, et un seuil net pour que les pâtes ne se mélangent pas.
   */
  const trainees = (rf: number, cr: number, twist: number, warp: number, seuil: number, fondu: number) => {
    const angle = th + r * twist + w * warp;
    const v = fbm(n, r * rf + w * 1.3, Math.cos(angle) * cr, Math.sin(angle) * cr + 4.4, 6);
    return [
      lisse(seuil - fondu, seuil + fondu, v),
      (1 - lisse(0, 0.022, Math.abs(v - (seuil + 0.16)))) * 0.9,
      1 - lisse(0, 0.02, Math.abs(v - (seuil - 0.18))),
    ] as [number, number, number];
  };

  switch (motif) {
    // Fines traînées serrées, comme un « swirl » de pressage.
    case "tourbillon":
      return trainees(9, 0.4, 4, 1.6, 0.02, 0.02);
    // Les mêmes pâtes, en masses plus larges et plus tordues.
    case "remous":
      return trainees(5, 0.35, 2, 2.4, -0.02, 0.03);
    // Des bandes concentriques ondulées, comme une pierre d'agate tranchée.
    case "agate": {
      const b = r * 5.5 + w * 1.6 + fbm(n, x * 2.5, y * 2.5, 1.3, 4) * 0.6;
      const f = b - Math.floor(b);
      return [
        lisse(0.08, 0.14, f) * (1 - lisse(0.52, 0.58, f)),
        (1 - lisse(0, 0.035, Math.abs(f - 0.6))) * 0.8,
        (1 - lisse(0, 0.03, Math.abs(f - 0.8))) * 0.9,
      ];
    }
    // Des volutes douces, piquées de quelques paillettes.
    case "nebuleuse": {
      const angle = th + r * 1.8 + w * 0.8;
      const v = fbm(n, r * 3 + w * 0.9, Math.cos(angle) * 0.5, Math.sin(angle) * 0.5 + 9.1, 6);
      const h = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453;
      return [lisse(-0.22, 0.28, v) * 0.95, lisse(0.12, 0.4, v) * 0.7, h - Math.floor(h) > 0.997 ? 1 : 0];
    }
  }
}

function versImage(alpha: Uint8ClampedArray<ArrayBuffer>): string {
  const canvas = document.createElement("canvas");
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";
  // Blanc partout : seul le canal alpha compte pour un masque.
  for (let k = 0; k < alpha.length; k += 4) {
    alpha[k] = 255;
    alpha[k + 1] = 255;
    alpha[k + 2] = 255;
  }
  ctx.putImageData(new ImageData(alpha, SIZE, SIZE), 0, 0);
  return canvas.toDataURL("image/png");
}

// ------------------------------------------------------------------ outils

function lisse(a: number, b: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function fbm(n: Bruit, x: number, y: number, z: number, octaves: number): number {
  let amplitude = 0.5;
  let frequence = 1;
  let total = 0;
  for (let o = 0; o < octaves; o++) {
    total += amplitude * n(x * frequence, y * frequence, z * frequence);
    amplitude *= 0.5;
    frequence *= 2.03;
  }
  return total;
}

/** Bruit de Perlin 3D (version « améliorée »), à graine fixe : même motif partout. */
function perlin(graine: number): Bruit {
  let s = graine >>> 0 || 1;
  const hasard = () => (s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296;
  const p = Array.from({ length: 256 }, (_, i) => i);
  for (let i = 255; i > 0; i--) {
    const k = Math.floor(hasard() * (i + 1));
    [p[i], p[k]] = [p[k]!, p[i]!];
  }
  const perm = new Uint8Array(512);
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255]!;

  const fondu = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const mix = (a: number, b: number, t: number) => a + t * (b - a);
  const grad = (h: number, x: number, y: number, z: number) => {
    const g = h & 15;
    const u = g < 8 ? x : y;
    const v = g < 4 ? y : g === 12 || g === 14 ? x : z;
    return (g & 1 ? -u : u) + (g & 2 ? -v : v);
  };

  return (x, y, z) => {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);
    const u = fondu(x);
    const v = fondu(y);
    const w = fondu(z);
    const A = perm[X]! + Y;
    const AA = perm[A]! + Z;
    const AB = perm[A + 1]! + Z;
    const B = perm[X + 1]! + Y;
    const BA = perm[B]! + Z;
    const BB = perm[B + 1]! + Z;
    return mix(
      mix(
        mix(grad(perm[AA]!, x, y, z), grad(perm[BA]!, x - 1, y, z), u),
        mix(grad(perm[AB]!, x, y - 1, z), grad(perm[BB]!, x - 1, y - 1, z), u),
        v,
      ),
      mix(
        mix(grad(perm[AA + 1]!, x, y, z - 1), grad(perm[BA + 1]!, x - 1, y, z - 1), u),
        mix(grad(perm[AB + 1]!, x, y - 1, z - 1), grad(perm[BB + 1]!, x - 1, y - 1, z - 1), u),
        v,
      ),
      w,
    );
  };
}
