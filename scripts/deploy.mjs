/**
 * Copie le build vers le dossier www de Home Assistant.
 *
 * Renseigne HA_WWW_PATH dans .env, par exemple :
 *   HA_WWW_PATH=\\\\homeassistant\\config\\www\\md-vinyl      (partage Samba)
 *   HA_WWW_PATH=Z:\\config\\www\\md-vinyl                     (lecteur réseau monté)
 *   HA_WWW_PATH=C:\\Users\\moi\\ha-config\\www\\md-vinyl      (dossier local synchronisé)
 *
 * L'app est ensuite accessible sur :  http://ton-ha:8123/local/md-vinyl/
 *
 * Usage : npm run build && npm run deploy
 */
import { readFileSync, existsSync, mkdirSync, cpSync, readdirSync, rmSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");

let target = process.argv[2] ?? "";
if (!target) {
  try {
    const env = readFileSync(join(ROOT, ".env"), "utf8");
    target = env.match(/^\s*HA_WWW_PATH\s*=\s*(.+?)\s*$/m)?.[1]?.replace(/^["']|["']$/g, "") ?? "";
  } catch {
    /* pas de .env : on affichera l'aide ci-dessous */
  }
}

if (!existsSync(DIST)) {
  console.error("[X] Pas de dossier dist/. Lance d'abord : npm run build");
  process.exit(1);
}

if (!target) {
  console.error(`
[X] Destination inconnue.

    Ajoute une ligne HA_WWW_PATH dans .env, ou passe le chemin en argument :
        npm run deploy -- "\\\\homeassistant\\config\\www\\md-vinyl"

    Pour y accéder depuis Windows, le plus simple est l'add-on "Samba share"
    de Home Assistant : le dossier config devient alors \\\\homeassistant\\config.
`);
  process.exit(1);
}

if (!existsSync(target)) {
  mkdirSync(target, { recursive: true });
  console.log(`Dossier créé : ${target}`);
}

// On vide d'abord : les anciens fichiers hachés s'accumuleraient sinon à chaque build.
for (const name of readdirSync(target)) {
  rmSync(join(target, name), { recursive: true, force: true });
}

cpSync(DIST, target, { recursive: true });

let bytes = 0;
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const info = statSync(full);
    if (info.isDirectory()) walk(full);
    else bytes += info.size;
  }
};
walk(target);

console.log(`
[OK] Déployé dans ${target}   (${(bytes / 1024).toFixed(0)} Ko)

     Ouvre :  http://<ton-home-assistant>:8123/local/md-vinyl/

     Sur iPad : bouton Partager -> "Sur l'écran d'accueil" pour avoir
     l'icône et le mode plein écran sans barre Safari.
`);
