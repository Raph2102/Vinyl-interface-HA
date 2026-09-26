/**
 * Pochettes de démonstration, dessinées à la volée.
 *
 * Elles sont produites dans un canvas au moment où on en a besoin plutôt que
 * livrées en fichiers : la bibliothèque en réclame une dizaine, et le
 * déploiement doit rester une poignée de fichiers plats qu'on dépose à la main
 * dans Home Assistant.
 *
 * Le rendu est déterministe — un même nom d'album redonne toujours la même
 * pochette — pour que la démo ne clignote pas d'un rechargement à l'autre.
 */

const cache = new Map<string, string>();

/**
 * Une pochette à la taille où elle s'affiche.
 *
 * Music Assistant garde souvent la VIGNETTE du fournisseur : 264 pixels pour le
 * morceau en cours, 500 pour un album. Posée sur une platine qui occupe
 * 1 300 pixels d'un écran d'iPad, elle était agrandie cinq fois — d'où le flou
 * pixelisé. Le CDN de Deezer sert pourtant la même image à la taille qu'on lui
 * demande (jusqu'à 1 400) : il suffit de la lui demander, en réécrivant
 * l'adresse. Et dans l'autre sens, une vignette de file de 44 pixels n'a que
 * faire d'une image de 500 : une file de 235 titres en chargeait autant.
 *
 * Toute autre adresse est rendue telle quelle.
 */
const DEEZER =
  /^(https:\/\/[^/]*dzcdn\.net\/images\/[a-z]+\/[0-9a-f-]+\/)\d+x\d+(-[0-9a-f]{6}-)\d+(-\d+-\d+\.(?:jpg|png))$/;

/** L'image se sert-elle à la taille qu'on veut ? */
export function isResizable(url: string | null): boolean {
  return Boolean(url && DEEZER.test(url));
}

export function sharpen(url: string | null, pixels: number): string | null {
  if (!url) return url;
  const m = DEEZER.exec(url);
  if (!m) return url;
  const paliers = [120, 264, 500, 1000, 1400];
  const taille = paliers.find((p) => p >= pixels) ?? 1400;
  return `${m[1]}${taille}x${taille}${m[2]}80${m[3]}`;
}

/** Générateur pseudo-aléatoire reproductible, semé par une chaîne. */
function seeded(seed: string): () => number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 100000) / 100000;
  };
}

export function generateCover(seed: string, size = 640): string {
  const cached = cache.get(seed);
  if (cached) return cached;

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const rnd = seeded(seed);
  const hue = Math.floor(rnd() * 360);
  const accent = (hue + 140 + Math.floor(rnd() * 80)) % 360;
  const dark = rnd() > 0.45;

  const base = dark ? `hsl(${hue} 42% 12%)` : `hsl(${hue} 30% 88%)`;
  const ink = dark ? `hsl(${accent} 82% 60%)` : `hsl(${accent} 68% 38%)`;
  const soft = dark ? `hsl(${hue} 38% 22%)` : `hsl(${hue} 26% 74%)`;

  ctx.fillStyle = base;
  ctx.fillRect(0, 0, size, size);

  switch (Math.floor(rnd() * 4)) {
    case 0: {
      // Astre et horizon
      const cx = size * (0.3 + rnd() * 0.4);
      const cy = size * (0.28 + rnd() * 0.24);
      const r = size * (0.16 + rnd() * 0.12);
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      grd.addColorStop(0, `hsl(${accent} 90% 68%)`);
      grd.addColorStop(1, ink);
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = soft;
      for (let y = size * 0.62, k = 0; y < size; y += 10 + k * 2.2, k++) {
        ctx.fillRect(0, y, size, 4);
      }
      break;
    }
    case 1: {
      // Bandes obliques
      ctx.save();
      ctx.translate(size / 2, size / 2);
      ctx.rotate((rnd() - 0.5) * 1.1);
      ctx.translate(-size, -size);
      for (let i = 0; i < 22; i++) {
        ctx.fillStyle = i % 3 === 0 ? ink : i % 3 === 1 ? soft : base;
        ctx.fillRect(0, i * (size / 9), size * 3, size / 18);
      }
      ctx.restore();
      break;
    }
    case 2: {
      // Anneaux concentriques
      const cx = size * (0.35 + rnd() * 0.3);
      const cy = size * (0.35 + rnd() * 0.3);
      for (let r = size * 0.62; r > 4; r -= size * 0.045) {
        ctx.strokeStyle = r % (size * 0.09) < size * 0.05 ? ink : soft;
        ctx.lineWidth = size * 0.022;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }
      break;
    }
    default: {
      // Damier décalé
      const n = 3 + Math.floor(rnd() * 3);
      const cell = size / n;
      for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
          const t = rnd();
          if (t < 0.34) continue;
          ctx.fillStyle = t < 0.68 ? soft : ink;
          const inset = cell * 0.06;
          ctx.fillRect(x * cell + inset, y * cell + inset, cell - inset * 2, cell - inset * 2);
        }
      }
    }
  }

  // Grain léger : sans lui, les aplats paraissent trop numériques à côté des
  // vraies pochettes.
  addGrain(ctx, size);

  const url = canvas.toDataURL("image/jpeg", 0.86);
  cache.set(seed, url);
  return url;
}

/**
 * Pochette des coups de cœur : un cœur sur un dégradé grenat.
 *
 * Music Assistant fabrique ses playlists à lui (« All favorited tracks »,
 * « Recently played »…) avec une seule et même image de remplacement. Dans un
 * bac à disques, huit pochettes identiques se lisent comme un bug ; celle des
 * favoris, qu'on vient chercher le plus souvent, mérite en plus de se
 * reconnaître au premier coup d'œil.
 */
export function favoriteCover(size = 640): string {
  const key = `♥:${size}`;
  const cached = cache.get(key);
  if (cached) return cached;

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const fond = ctx.createLinearGradient(0, 0, size, size);
  fond.addColorStop(0, "hsl(346 68% 34%)");
  fond.addColorStop(1, "hsl(326 62% 15%)");
  ctx.fillStyle = fond;
  ctx.fillRect(0, 0, size, size);

  // Des sillons en fond, très discrets : ça reste une pochette de disque.
  ctx.strokeStyle = "hsl(0 0% 100% / 0.05)";
  ctx.lineWidth = size * 0.006;
  for (let r = size * 0.08; r < size * 0.95; r += size * 0.028) {
    ctx.beginPath();
    ctx.arc(size * 0.5, size * 0.54, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Le cœur : deux arcs et une pointe, tracés en courbes de Bézier.
  const s = size * 0.36;
  const cx = size / 2;
  const cy = size * 0.47;
  ctx.save();
  ctx.shadowColor = "hsl(330 80% 8% / 0.5)";
  ctx.shadowBlur = size * 0.05;
  ctx.shadowOffsetY = size * 0.015;
  // Un cœur rose et non blanc : flouté en fond d'écran, du blanc donnait une
  // tache grise ; du rose donne une lueur.
  const coeur = ctx.createLinearGradient(0, cy - s, 0, cy + s);
  coeur.addColorStop(0, "hsl(352 100% 76%)");
  coeur.addColorStop(1, "hsl(340 88% 58%)");
  ctx.fillStyle = coeur;
  ctx.beginPath();
  ctx.moveTo(cx, cy + s * 0.95);
  ctx.bezierCurveTo(cx - s * 1.35, cy + s * 0.05, cx - s * 0.85, cy - s * 0.95, cx, cy - s * 0.38);
  ctx.bezierCurveTo(cx + s * 0.85, cy - s * 0.95, cx + s * 1.35, cy + s * 0.05, cx, cy + s * 0.95);
  ctx.fill();
  ctx.restore();

  addGrain(ctx, size);
  const url = canvas.toDataURL("image/jpeg", 0.88);
  cache.set(key, url);
  return url;
}

function addGrain(ctx: CanvasRenderingContext2D, size: number): void {
  const noise = ctx.getImageData(0, 0, size, size);
  for (let i = 0; i < noise.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 9;
    noise.data[i] = clamp((noise.data[i] ?? 0) + n);
    noise.data[i + 1] = clamp((noise.data[i + 1] ?? 0) + n);
    noise.data[i + 2] = clamp((noise.data[i + 2] ?? 0) + n);
  }
  ctx.putImageData(noise, 0, 0);
}

function clamp(v: number): number {
  return v < 0 ? 0 : v > 255 ? 255 : v;
}
