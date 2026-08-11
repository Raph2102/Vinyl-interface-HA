"""Constantes partagées par l'intégration MD Vinyl."""

DOMAIN = "md_vinyl"

# Nom de l'élément défini par le module JavaScript. Home Assistant instancie
# cette balise dans son frontend et lui pousse l'objet `hass`.
WEBCOMPONENT = "md-vinyl-panel"

# Chemin sous lequel le module est servi, et adresse de l'entrée dans la barre
# latérale. Les deux sont volontairement distincts : le premier est un fichier,
# le second une page.
STATIC_URL = f"/{DOMAIN}_static"
PANEL_URL = "vinyl"

PANEL_TITLE = "Vinyl"
PANEL_ICON = "mdi:album"
