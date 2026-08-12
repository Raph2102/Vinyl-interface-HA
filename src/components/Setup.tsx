import { useEffect, useState } from "react";
import { checkConnection, fetchMediaPlayers } from "../lib/ha";
import type { HaEntity } from "../lib/types";
import {
  DEFAULTS,
  type BackgroundStyle,
  type Settings,
  type VinylStyle,
} from "../lib/settings";

interface SetupProps {
  settings: Settings;
  onSave: (next: Settings) => void;
  onCancel: (() => void) | null;
  /**
   * Faux en mode démo : on doit pouvoir régler l'apparence sans jeton ni
   * enceinte. C'est ce qui bloquait le bouton Enregistrer.
   */
  requireConnection: boolean;
  /**
   * Vrai quand l'app tourne comme panneau de Home Assistant : il n'y a alors ni
   * adresse ni jeton à demander, l'utilisateur est déjà authentifié.
   */
  embedded?: boolean;
  /** Enceintes déjà connues par le panneau, pour éviter un aller-retour REST. */
  knownPlayers?: HaEntity[] | null;
}

type Probe = { state: "idle" | "testing" | "ok" | "bad"; message: string };

const VINYLS: [VinylStyle, string][] = [
  ["clear", "Blanc"],
  ["glass", "Transparent"],
  ["black", "Noir"],
  ["tinted", "Teinté"],
  ["marble", "Marbré"],
  ["splatter", "Éclaboussé"],
];

/** Les matières qui se teintent : les autres ignorent la couleur choisie. */
const COLOREES: VinylStyle[] = ["marble", "splatter", "tinted"];

const BACKGROUNDS: [BackgroundStyle, string][] = [
  ["adaptive", "Adaptatif"],
  ["subtle", "Discret"],
  ["neutral", "Gris"],
  ["dark", "Sombre"],
];

export function Setup({
  settings,
  onSave,
  onCancel,
  requireConnection,
  embedded = false,
  knownPlayers = null,
}: SetupProps) {
  const [draft, setDraft] = useState<Settings>(settings);
  const [probe, setProbe] = useState<Probe>({ state: "idle", message: "" });
  const [players, setPlayers] = useState<HaEntity[] | null>(knownPlayers);

  const set = <K extends keyof Settings>(key: K, value: Settings[K]) =>
    setDraft((d) => ({ ...d, [key]: value }));

  // Si un jeton est déjà enregistré, on va chercher les enceintes tout de suite :
  // ouvrir les réglages et trouver la liste déjà remplie évite un clic inutile.
  useEffect(() => {
    if (settings.token) void test(settings);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function test(candidate: Settings) {
    setProbe({ state: "testing", message: "Connexion…" });
    const result = await checkConnection(candidate);
    if (!result.ok) {
      setProbe({ state: "bad", message: result.message });
      setPlayers(null);
      return;
    }
    try {
      const list = await fetchMediaPlayers(candidate);
      setPlayers(list);
      const mass = list.filter((p) => p.attributes.mass_player_type).length;
      setProbe({
        state: "ok",
        message:
          list.length === 0
            ? "Connecté, mais aucune enceinte trouvée."
            : `Connecté. ${list.length} enceinte${list.length > 1 ? "s" : ""}` +
              (mass > 0 ? `, dont ${mass} via Music Assistant.` : "."),
      });
      // Pré-sélection de la première enceinte Music Assistant : dans la quasi-
      // totalité des cas c'est celle qu'on veut.
      if (!candidate.entityId && list.length > 0) {
        const first = list.find((p) => p.attributes.mass_player_type) ?? list[0];
        if (first) set("entityId", first.entity_id);
      }
    } catch (err) {
      setProbe({ state: "bad", message: String(err) });
    }
  }

  const ready = embedded
    ? draft.entityId.trim().length > 0
    : !requireConnection || (draft.token.trim().length > 0 && draft.entityId.trim().length > 0);

  return (
    <div className="setup">
      <div className="panel">
        <div className="panel__head">
          <h1>{onCancel ? "Réglages" : "Bienvenue"}</h1>
          {!onCancel && <span style={{ color: "var(--ink-faint)", fontSize: 13 }}>1 fois par appareil</span>}
        </div>

        {!onCancel && embedded && (
          <p className="note">
            Choisis l'enceinte sur laquelle poser les disques. Tu pourras en changer à tout moment
            depuis le nom de la pièce, en haut à gauche.
          </p>
        )}

        {!onCancel && !embedded && (
          <p className="note">
            Cette platine pilote une enceinte de ton Home Assistant. Il lui faut un jeton d'accès :
            dans Home Assistant, clique sur ton nom en bas à gauche, onglet <b>Sécurité</b>, puis tout
            en bas <b>Jetons d'accès longue durée</b>.
          </p>
        )}

{/*
          * Ni adresse ni jeton dans le panneau : Home Assistant nous transmet
          * une session déjà authentifiée. C'est la raison d'être du panneau —
          * l'app devient installable par n'importe qui, sans manipulation.
          */}
        {!embedded && (
          <>
          <h2>Connexion</h2>

          <div className="field">
            <label htmlFor="url">Adresse de Home Assistant</label>
            <input
              id="url"
              type="text"
              placeholder={window.location.origin}
              value={draft.haUrl}
              onChange={(e) => set("haUrl", e.target.value.trim())}
              autoComplete="off"
              spellCheck={false}
            />
            <small>
              À laisser vide si l'app est servie par Home Assistant lui-même — c'est le cas depuis
              /local/. Sinon : http://192.168.x.x:8123
            </small>
          </div>

          <div className="field">
            <label htmlFor="token">Jeton d'accès longue durée</label>
            <input
              id="token"
              type="password"
              value={draft.token}
              onChange={(e) => set("token", e.target.value.trim())}
              autoComplete="off"
              spellCheck={false}
            />
            <small>Reste sur cet appareil, dans le stockage local du navigateur.</small>
          </div>

          <div className="actions" style={{ justifyContent: "flex-start" }}>
            <button className="btn" onClick={() => void test(draft)} disabled={!draft.token}>
              Tester la connexion
            </button>
          </div>

          {probe.state !== "idle" && (
            <p
              className={
                probe.state === "bad" ? "note note--bad" : probe.state === "ok" ? "note note--good" : "note"
              }
            >
              {probe.message}
            </p>
          )}

          </>
        )}

        <div className="field">
          <label htmlFor="entity">Enceinte</label>
          <select id="entity" value={draft.entityId} onChange={(e) => set("entityId", e.target.value)}>
            <option value="">— choisir —</option>
            {players?.map((p) => (
              <option key={p.entity_id} value={p.entity_id}>
                {p.attributes.mass_player_type ? "♪ " : ""}
                {p.attributes.friendly_name ?? p.entity_id}
              </option>
            ))}
            {/* On garde l'entité enregistrée même si la liste n'est pas encore chargée. */}
            {draft.entityId && !players?.some((p) => p.entity_id === draft.entityId) && (
              <option value={draft.entityId}>{draft.entityId}</option>
            )}
          </select>
        </div>

        <h2>Apparence</h2>

        <div className="field">
          <label>Matière du disque</label>
          <div className="segmented">
            {VINYLS.map(([value, name]) => (
              <button
                key={value}
                aria-pressed={draft.vinyl === value}
                onClick={() => set("vinyl", value)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="field">
          <label>Fond</label>
          <div className="segmented">
            {BACKGROUNDS.map(([value, name]) => (
              <button
                key={value}
                aria-pressed={draft.background === value}
                onClick={() => set("background", value)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="field">
          <label>Lancer et arrêter la lecture</label>
          <div className="segmented">
            <button
              aria-pressed={draft.playControl === "arm"}
              onClick={() => set("playControl", "arm")}
            >
              En posant l'aiguille
            </button>
            <button
              aria-pressed={draft.playControl === "button"}
              onClick={() => set("playControl", "button")}
            >
              Avec un bouton
            </button>
          </div>
          <small>
            Avec l'aiguille : on attrape le bras et on le pose sur le disque pour lancer, on le
            retire pour arrêter. Aucun bouton lecture à l'écran. Dans les deux cas, un balayage
            gauche/droite change de morceau.
          </small>
        </div>

        <label className="switch">
          <span>
            Garder le titre lisible
            <br />
            <small style={{ color: "var(--ink-faint)" }}>
              L'étiquette cesse de tourner avec le disque
            </small>
          </span>
          <input
            type="checkbox"
            checked={draft.counterRotateLabel}
            onChange={(e) => set("counterRotateLabel", e.target.checked)}
          />
        </label>

        {COLOREES.includes(draft.vinyl) && (
          <div className="field">
            <label htmlFor="tint">Couleur du disque</label>
            <div className="tint">
              <input
                id="tint"
                type="color"
                value={draft.vinylTint || "#8a5a3c"}
                onChange={(e) => set("vinylTint", e.target.value)}
              />
              <button className="btn" onClick={() => set("vinylTint", "")}>
                Suivre la pochette
              </button>
            </div>
            <small>
              {draft.vinylTint
                ? "Couleur fixe, quel que soit l'album."
                : "La couleur du disque suit la dominante de la pochette en cours."}
            </small>
          </div>
        )}

        <div className="field">
          <label htmlFor="zoom">
            Taille des pochettes
            <span className="field__value">
              {draft.libraryZoom === 1 ? "auto" : `${Math.round(draft.libraryZoom * 100)} %`}
            </span>
          </label>
          <input
            id="zoom"
            type="range"
            min={0.7}
            max={1.6}
            step={0.05}
            value={draft.libraryZoom}
            onChange={(e) => set("libraryZoom", Number(e.target.value))}
          />
          <small>
            La taille s'ajuste déjà à l'écran ; ce curseur ne fait que la pondérer, et il reste
            propre à cet appareil. Une tablette tenue à bout de bras demande des pochettes plus
            grosses qu'un écran de bureau à cinquante centimètres.
          </small>
        </div>

        <div className="field">
          <label htmlFor="label-text">Texte de l'étiquette</label>
          <input
            id="label-text"
            type="text"
            value={draft.labelText}
            placeholder="Le titre du morceau"
            maxLength={30}
            onChange={(e) => set("labelText", e.target.value)}
          />
          <small>
            Laissé vide, l'étiquette affiche le morceau en cours. Rempli, elle garde ce texte —
            comme une pastille de label pressée une fois pour toutes.
          </small>
        </div>

        <div className="field">
          <label htmlFor="rpm">Vitesse de rotation</label>
          <select id="rpm" value={String(draft.rpm)} onChange={(e) => set("rpm", Number(e.target.value))}>
            <option value="33.3333">33⅓ tours — album</option>
            <option value="45">45 tours — single</option>
          </select>
        </div>

        <h2>Comportement</h2>

        <label className="switch">
          <span>Paroles synchronisées</span>
          <input
            type="checkbox"
            checked={draft.lyrics}
            onChange={(e) => set("lyrics", e.target.checked)}
          />
        </label>

        <div className="field">
          <label htmlFor="idle">Écran de repos</label>
          <select
            id="idle"
            value={String(draft.idleMinutes)}
            onChange={(e) => set("idleMinutes", Number(e.target.value))}
          >
            <option value="0">Jamais</option>
            <option value="2">Après 2 minutes sans musique</option>
            <option value="5">Après 5 minutes sans musique</option>
            <option value="15">Après 15 minutes sans musique</option>
            <option value="30">Après 30 minutes sans musique</option>
          </select>
        </div>

        <div className="actions">
          {onCancel && (
            <button className="btn" onClick={onCancel}>
              Annuler
            </button>
          )}
          {/* Sans intérêt au premier lancement : rien n'a encore été modifié. */}
          {onCancel && (
            <button
              className="btn"
              onClick={() =>
                setDraft({
                  ...DEFAULTS,
                  haUrl: draft.haUrl,
                  token: draft.token,
                  entityId: draft.entityId,
                })
              }
            >
              Réinitialiser l'apparence
            </button>
          )}
          <button className="btn btn--primary" disabled={!ready} onClick={() => onSave(draft)}>
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
