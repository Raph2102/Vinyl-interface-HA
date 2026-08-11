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

import logging
from pathlib import Path

from homeassistant.components import frontend, panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.typing import ConfigType
from homeassistant.loader import async_get_integration

from .const import DOMAIN, PANEL_ICON, PANEL_TITLE, PANEL_URL, STATIC_URL, WEBCOMPONENT

_LOGGER = logging.getLogger(__name__)

FRONTEND_DIR = Path(__file__).parent / "frontend"
BUNDLE = "md-vinyl-panel.js"

# Le dossier statique ne s'enregistre qu'une fois par démarrage : le refaire
# après un rechargement de l'intégration ferait doublon dans le routeur.
SERVED = f"{DOMAIN}_static_served"


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Rien à faire en YAML : l'intégration s'ajoute par l'interface."""
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Sert le module et pose l'entrée dans la barre latérale."""
    """
    La version vient du manifeste DÉJÀ CHARGÉ par Home Assistant.

    Le lire nous-mêmes avec Path.read_text revenait à faire un accès disque
    depuis la boucle d'événements — Home Assistant le détecte et le signale,
    à juste titre : pendant cette lecture, plus rien d'autre ne peut avancer.
    async_get_integration rend le manifeste déjà en mémoire, sans toucher au
    disque.
    """
    integration = await async_get_integration(hass, DOMAIN)
    version = str(integration.version or "0")

    # Même précaution que pour le manifeste : un accès disque, si bref soit-il,
    # ne se fait pas depuis la boucle d'événements.
    present = await hass.async_add_executor_job(FRONTEND_DIR.joinpath(BUNDLE).is_file)
    if not present:
        _LOGGER.error(
            "Module introuvable dans %s. L'installation est incomplète — "
            "réinstalle l'intégration depuis HACS.",
            FRONTEND_DIR,
        )
        return False

    # Le dossier entier est exposé, et non le seul fichier : cela laisse la
    # place aux ressources qu'on pourrait livrer plus tard sans retoucher à
    # l'enregistrement.
    if not hass.data.get(SERVED):
        await hass.http.async_register_static_paths(
            [StaticPathConfig(STATIC_URL, str(FRONTEND_DIR), cache_headers=False)]
        )
        hass.data[SERVED] = True

    """
    Un panneau n'est pas persisté par Home Assistant : il vit le temps d'une
    exécution, et il faut donc le réenregistrer à chaque démarrage.

    On retire d'abord une éventuelle entrée du même nom. Sans cela, recharger
    l'intégration sans redémarrer se solderait par un refus d'écrasement.
    """
    frontend.async_remove_panel(hass, PANEL_URL, warn_if_unknown=False)

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
    )

    _LOGGER.info("MD Vinyl %s : panneau disponible sur /%s", version, PANEL_URL)
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Retire le panneau quand on désinstalle l'intégration."""
    frontend.async_remove_panel(hass, PANEL_URL, warn_if_unknown=False)
    return True
