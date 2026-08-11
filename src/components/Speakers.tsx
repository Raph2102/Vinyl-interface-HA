/**
 * Choix de l'enceinte, et déplacement de la musique d'une pièce à l'autre.
 *
 * Deux gestes bien distincts, et c'est la distinction qui compte :
 *
 *  - ÉCOUTER AILLEURS change simplement l'enceinte que la platine regarde. La
 *    musique en cours n'est pas touchée ; on change de fenêtre, pas de son.
 *
 *  - EMMENER LA MUSIQUE appelle `music_assistant.transfer_queue`, qui déplace
 *    la file ET la position de lecture vers l'autre enceinte. On reprend à la
 *    même seconde dans l'autre pièce, puis la platine suit la nouvelle enceinte.
 *
 * La liste vient de /api/states filtré sur les media_player. On ne peut pas
 * savoir depuis le navigateur lesquels sont pilotés par Music Assistant : le
 * transfert n'est donc proposé que vers un lecteur autre que celui d'origine,
 * et Home Assistant refusera de lui-même une cible incompatible.
 */

import { Fragment } from "react";

import type { HaEntity } from "../lib/types";

interface SpeakersProps {
  players: HaEntity[];
  current: string;
  loading: boolean;
  error: string | null;
  /** La platine regarde une autre enceinte. */
  onListen: (entityId: string) => void;
  /** La musique en cours déménage vers cette enceinte. */
  onTransfer: (entityId: string) => void;
  onClose: () => void;
}

const ETAT: Record<string, string> = {
  playing: "en lecture",
  paused: "en pause",
  idle: "au repos",
  off: "éteinte",
  standby: "en veille",
  unavailable: "indisponible",
};

export function Speakers({
  players,
  current,
  loading,
  error,
  onListen,
  onTransfer,
  onClose,
}: SpeakersProps) {
  /*
   * Deux groupes, et c'est la seule chose qui compte ici.
   *
   * Home Assistant expose TOUT ce qui sait lire un média : téléviseurs, box,
   * navigateurs, applications. Vingt-cinq entités dans une liste plate, on ne
   * sait plus laquelle est une enceinte. Or seules celles que Music Assistant
   * pilote savent recevoir un album ou un transfert de file ; les autres sont
   * là pour information, et elles le disent.
   */
  const massives = players.filter((p) => p.attributes.mass_player_type !== undefined);
  const autres = players.filter((p) => p.attributes.mass_player_type === undefined);

  const groupes = [
    {
      titre: "Pilotées par Music Assistant",
      note: "Celles qui savent recevoir un disque et un transfert de file.",
      membres: massives,
    },
    {
      titre: "Autres lecteurs",
      note: "Vus par Home Assistant, mais hors de portée de Music Assistant.",
      membres: autres,
    },
  ];

  return (
    <aside className="speakers sidepanel" role="dialog" aria-label="Enceintes">
      <header className="sidepanel__head">
        <h2>Enceintes</h2>
        <button className="iconbtn iconbtn--small" onClick={onClose} aria-label="Fermer les enceintes">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4z"
              fill="currentColor"
            />
          </svg>
        </button>
      </header>

      {error && <p className="sidepanel__error">{error}</p>}
      {loading && players.length === 0 && <p className="sidepanel__empty">Recherche des enceintes…</p>}

      <ul className="sidepanel__list">
        {groupes.map(({ titre, note, membres }) => (
          <Fragment key={titre}>
            {membres.length > 0 && (
              <li className="speakers__group">
                <h3>{titre}</h3>
                <p>{note}</p>
              </li>
            )}
            {membres.map((player) => {
          const ici = player.entity_id === current;
          const injoignable = player.state === "unavailable";
          return (
            <li
              key={player.entity_id}
              className="speakers__item"
              data-here={ici}
              data-entity={player.entity_id}
            >
              <button
                className="speakers__pick"
                onClick={() => onListen(player.entity_id)}
                disabled={ici || injoignable}
                title={ici ? "C'est l'enceinte affichée" : "Afficher cette enceinte"}
              >
                <span className="speakers__dot" data-on={player.state === "playing"} />
                <span className="sidepanel__text">
                  <b>{player.attributes.friendly_name ?? player.entity_id}</b>
                  <span>
                    {ici ? "affichée ici" : (ETAT[player.state] ?? player.state)}
                    {player.attributes.media_title ? ` · ${player.attributes.media_title}` : ""}
                  </span>
                </span>
              </button>

              {!ici && !injoignable && player.attributes.mass_player_type !== undefined && (
                <button
                  className="speakers__move"
                  onClick={() => onTransfer(player.entity_id)}
                  title="Reprendre la lecture dans cette pièce"
                >
                  {/* Flèche qui saute d'un point à l'autre : le déménagement. */}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M4 12.5a5.5 5.5 0 0 1 5.5-5.5h6.8l-2.6-2.6L15.1 3l4.5 4.5-4.5 4.5-1.4-1.4 2.6-2.6H9.5A3.5 3.5 0 0 0 6 11.5v.9H4zm16 -.9a5.5 5.5 0 0 1-5.5 5.5H7.7l2.6 2.6L8.9 21l-4.5-4.5L8.9 12l1.4 1.4-2.6 2.6h6.8a3.5 3.5 0 0 0 3.5-3.5v-.9h2z"
                      fill="currentColor"
                    />
                  </svg>
                  Y emmener la musique
                </button>
              )}
            </li>
              );
            })}
          </Fragment>
        ))}
      </ul>
    </aside>
  );
}
