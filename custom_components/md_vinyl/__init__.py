"""
MD Vinyl — une platine vinyle dans la barre latérale de Home Assistant.

Ce composant ne crée ni entité ni service : tout ce qu'il fait, c'est servir un
module JavaScript et déclarer un panneau. Toute l'application vit dans le
frontend, où Home Assistant lui remet un objet `hass` déjà authentifié.

Pourquoi une intégration plutôt qu'un simple module Lovelace :

  - un module Lovelace oblige l'utilisateur à écrire lui-même un bloc
    `panel_custom` dans configuration.yaml, puis à redémarrer. Ici, l'ajout se
    fait en trois clics depuis l'interface, et le panneau apparaît aussitôt ;
  - le fichier JavaScript est servi PAR l'intégration, à une adresse qu'elle
    contrôle. Rien à copier dans config/www/, rien à tenir à jour à la main ;
  - l'adresse porte le numéro de version, ce qui règle le cache des navigateurs :
    après une mise à jour, la tablette recharge le bon fichier au lieu de garder
    l'ancien pendant des jours.
"""

from __future__ import annotations

import json
import logging
from pathlib import Path

from homeassistant.components import panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.typing import ConfigType

from .const import DOMAIN, PANEL_ICON, PANEL_TITLE, PANEL_URL, STATIC_URL, WEBCOMPONENT

_LOGGER = logging.getLogger(__name__)

FRONTEND_DIR = Path(__file__).parent / "frontend"
BUNDLE = "md-vinyl-panel.js"


def _version() -> str:
    """Version déclarée dans le manifeste, utilisée pour casser le cache."""
    try:
        manifest = json.loads((Path(__file__).parent / "manifest.json").read_text("utf-8"))
        return str(manifest.get("version", "0"))
    except (OSError, ValueError):
        return "0"


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Rien à faire en YAML : l'intégration s'ajoute par l'interface."""
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Sert le module et pose l'entrée dans la barre latérale."""
    bundle = FRONTEND_DIR / BUNDLE
    if not bundle.is_file():
        _LOGGER.error(
            "Module introuvable : %s. L'installation est incomplète — "
            "réinstalle l'intégration depuis HACS.",
            bundle,
        )
        return False

    version = _version()

    # Le dossier entier est exposé, et non le seul fichier : cela laisse la
    # place aux ressources qu'on pourrait vouloir livrer plus tard sans
    # retoucher à l'enregistrement.
    await hass.http.async_register_static_paths(
        [StaticPathConfig(STATIC_URL, str(FRONTEND_DIR), cache_headers=False)]
    )

    """
    L'enregistrement est fait à chaque démarrage, et c'est voulu.

    Un panneau n'est pas persisté par Home Assistant : il vit le temps d'une
    exécution. `update=True` évite l'erreur si une entrée du même nom subsiste
    d'un rechargement à chaud de l'intégration.
    """
    await panel_custom.async_register_panel(
        hass,
        webcomponent_name=WEBCOMPONENT,
        frontend_url_path=PANEL_URL,
        module_url=f"{STATIC_URL}/{BUNDLE}?v={version}",
        sidebar_title=PANEL_TITLE,
        sidebar_icon=PANEL_ICON,
        # Volontairement accessible à tous : la platine sert à écouter de la
        # musique. La bibliothèque Music Assistant, elle, demandera des droits
        # d'administrateur — le frontend le dit clairement le cas échéant.
        require_admin=False,
        config={"version": version},
        update=True,
    )

    _LOGGER.info("MD Vinyl %s : panneau disponible sur /%s", version, PANEL_URL)
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Retire le panneau quand on désinstalle l'intégration."""
    panel_custom.async_remove_panel(hass, PANEL_URL)
    return True
