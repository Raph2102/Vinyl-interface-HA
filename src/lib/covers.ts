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
  const noise = ctx.getImageData(0, 0, size, size);
  for (let i = 0; i < noise.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 9;
    noise.data[i] = clamp((noise.data[i] ?? 0) + n);
    noise.data[i + 1] = clamp((noise.data[i + 1] ?? 0) + n);
    noise.data[i + 2] = clamp((noise.data[i + 2] ?? 0) + n);
  }
  ctx.putImageData(noise, 0, 0);

  const url = canvas.toDataURL("image/jpeg", 0.86);
  cache.set(seed, url);
  return url;
}

function clamp(v: number): number {
  return v < 0 ? 0 : v > 255 ? 255 : v;
}
