import { useEffect, useState } from "react";

/**
 * Écran de repos, après un moment sans musique et sans geste.
 *
 * Pensé pour une tablette laissée allumée en permanence : fond noir, une seule
 * information, et une horloge qui se déplace lentement pour ne pas imprimer
 * toujours les mêmes pixels sur la dalle.
 */
export function Rest({ onWake }: { onWake: () => void }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    // Réveil calé sur la minute pleine : pas d'intervalle qui dérive,
    // et un seul réveil du processeur par minute.
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const date = new Date();
      setNow(date);
      timer = setTimeout(tick, 60000 - (date.getSeconds() * 1000 + date.getMilliseconds()));
    };
    tick();
    return () => clearTimeout(timer);
  }, []);

  const time = now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  const date = now.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });

  return (
    <div className="rest" onPointerDown={onWake} role="button" tabIndex={0} aria-label="Réveiller">
      <div className="rest__clock">{time}</div>
      <div className="rest__date">{date}</div>
      <div className="rest__hint">Toucher pour revenir</div>
    </div>
  );
}
