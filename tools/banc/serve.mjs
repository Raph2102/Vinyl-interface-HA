/**
 * Sert le banc d'essai du panneau.
 *
 * `/`                     la page de banc (tools/banc/index.html)
 * `/md-vinyl-panel.js`    le module fraîchement construit, pris dans l intégration
 *
 * Rien n'est mis en cache : on debogue toujours le fichier qui est sur le
 * disque, jamais celui d'une construction précédente.
 *
 * Usage : node tools/banc/serve.mjs [port]
 *   puis http://localhost:4194/                       (hors ligne)
 *   ou   http://localhost:4194/?ha=<url>&token=<jeton> (vraie instance)
 */
import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ICI = dirname(fileURLToPath(import.meta.url));
const ROOT = join(ICI, "..", "..");
const PORT = Number(process.argv[2] ?? 4194);

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".png": "image/png" };

createServer((req, res) => {
  const chemin = (req.url ?? "/").split("?")[0];
  const fichier =
    chemin === "/" || chemin === "/index.html"
      ? join(ICI, "index.html")
      : join(ROOT, "custom_components", "md_vinyl", "frontend", chemin.replace(/^\//, ""));

  try {
    const corps = readFileSync(fichier);
    const ext = fichier.slice(fichier.lastIndexOf("."));
    res.writeHead(200, {
      "content-type": `${TYPES[ext] ?? "application/octet-stream"}; charset=utf-8`,
      "cache-control": "no-store",
    });
    res.end(corps);
  } catch {
    res.writeHead(404);
    res.end();
  }
}).listen(PORT, "127.0.0.1", () => {
  console.log(`banc du panneau : http://localhost:${PORT}/`);
});
