/**
 * Un fond tiré d'une pochette : l'image elle-même, fondue dans un flou profond.
 *
 * Deux dégradés radiaux calculés sur la couleur dominante donnaient un fond
 * propre mais plat — un aplat olive derrière un album d'After Hours, un aplat
 * gris derrière presque tout le reste. La pochette floutée garde ses masses de
 * couleur, leur place et leurs contrastes : le fond ressemble enfin au disque.
 *
 * Deux calques se relaient pour que le changement d'image soit un fondu, et la
 * nouvelle image n'entre qu'une fois chargée — sinon le fondu passe par le noir.
 *
 * Le flou coûte cher sur une grande surface. On floute donc un calque RÉDUIT,
 * qu'on agrandit ensuite : le résultat est le même à l'œil (c'est du flou), pour
 * un dixième du travail — ce qui compte sur un iPad.
 */

import { useEffect, useRef, useState } from "react";

export function Ambient({ image, className = "" }: { image: string | null; className?: string }) {
  const [layers, setLayers] = useState<[string | null, string | null]>([image, null]);
  const [front, setFront] = useState(0);
  const frontRef = useRef(0);
  const shown = useRef(image);

  useEffect(() => {
    if (image === shown.current) return;
    let alive = true;

    const swap = () => {
      if (!alive) return;
      shown.current = image;
      const back = 1 - frontRef.current;
      frontRef.current = back;
      setLayers((l) => {
        const next: [string | null, string | null] = [l[0], l[1]];
        next[back] = image;
        return next;
      });
      setFront(back);
    };

    if (!image) {
      swap();
      return;
    }
    const probe = new Image();
    probe.onload = swap;
    probe.onerror = swap;
    probe.src = image;
    return () => {
      alive = false;
    };
  }, [image]);

  return (
    <div className={`ambient ${className}`} aria-hidden="true">
      {layers.map((src, i) => (
        <div
          key={i}
          className="ambient__layer"
          data-on={i === front && Boolean(src)}
          style={{ backgroundImage: src ? `url("${src}")` : undefined }}
        />
      ))}
    </div>
  );
}
