"""
Ajout de MD Vinyl depuis l'interface.

Il n'y a rien à configurer — ni adresse, ni jeton, ni identifiant. Le panneau
reçoit du frontend une session déjà authentifiée, et il choisit lui-même une
enceinte plausible au premier lancement.

Ce formulaire existe donc uniquement pour que l'intégration apparaisse dans
« Ajouter une intégration » et puisse être retirée proprement. Une seule
instance a du sens : un deuxième panneau porterait la même adresse.
"""

from __future__ import annotations

from typing import Any

from homeassistant.config_entries import ConfigFlow, ConfigFlowResult

from .const import DOMAIN


class MdVinylConfigFlow(ConfigFlow, domain=DOMAIN):
    """Un unique écran de confirmation."""

    VERSION = 1

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        await self.async_set_unique_id(DOMAIN)
        self._abort_if_unique_id_configured()

        if user_input is not None:
            return self.async_create_entry(title="MD Vinyl", data={})

        return self.async_show_form(step_id="user")
