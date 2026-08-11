import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

/**
 * En production l'app est servie par Home Assistant depuis config/www/md-vinyl/,
 * donc sur /local/md-vinyl/ -> `base: "./"` pour que tous les chemins soient relatifs.
 *
 * En dev (npm run dev) le navigateur est sur localhost:5173, une autre origine que HA :
 * on proxifie /api vers HA (WebSocket compris) pour retrouver exactement les mêmes
 * conditions qu'en production, sans avoir à toucher au CORS de Home Assistant.
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  /*
   * Deux cibles très différentes à partir du même code.
   *
   *  - par défaut : une PAGE autonome, tout replié dans index.html, déposée
   *    dans config/www/ et ouverte par son adresse.
   *  - en mode « panel » : un MODULE JavaScript que Home Assistant charge dans
   *    son propre frontend pour en faire une entrée de la barre latérale.
   *    Pas de HTML, pas de jeton, un seul fichier .js.
   */
  const panneau = mode === "panel";
  const target = (env.HA_URL || "").replace(/\/+$/, "");
  const buildId = String(Date.now());

  /**
   * Home Assistant sert /local/ avec un cache de trente jours. Sans repère de
   * version, une mise à jour déposée sur le serveur resterait invisible pendant
   * un mois sur la tablette. Ce petit fichier, lu sans cache par l'app, lui
   * permet de constater qu'elle est périmée et de se recharger.
   */
  const versionFile: Plugin = {
    name: "md-vinyl-version",
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "version.json",
        source: JSON.stringify({ build: buildId }),
      });
    },
  };

  /**
   * Replie le JavaScript et la CSS dans index.html, pour ne produire que des
   * fichiers plats aux noms fixes.
   *
   * Sans ça, un build sort un dossier assets/ dont les noms changent à chaque
   * fois : une mise à jour via l'éditeur de fichiers de Home Assistant obligerait
   * à créer un dossier, téléverser deux fichiers et supprimer les anciens. Là,
   * mettre à jour se résume à remplacer index.html.
   */
  const singleFile: Plugin = {
    name: "md-vinyl-single-file",
    enforce: "post",
    generateBundle(_options, bundle) {
      const html = bundle["index.html"];
      if (!html || html.type !== "asset") return;

      let source = String(html.source);

      for (const [name, item] of Object.entries(bundle)) {
        if (name === "index.html") continue;

        if (item.type === "chunk" && name.endsWith(".js")) {
          // Une chaîne "</script>" dans le code fermerait la balise avant l'heure.
          const code = item.code.replace(/<\/script/gi, "<\\/script");
          source = source.replace(
            new RegExp(`<script[^>]*src="[^"]*${escapeRegExp(name)}"[^>]*></script>`),
            // Fonction et non chaîne : dans une chaîne de remplacement, les "$"
            // du JavaScript minifié seraient pris pour des motifs ($&, $', $1…)
            // et remplacés par des morceaux du document.
            () => `<script type="module">${code}</script>`,
          );
          delete bundle[name];
        }

        if (item.type === "asset" && name.endsWith(".css")) {
          const css = String(item.source);
          source = source.replace(
            new RegExp(`<link[^>]*href="[^"]*${escapeRegExp(name)}"[^>]*>`),
            () => `<style>${css}</style>`,
          );
          delete bundle[name];
        }
      }

      html.source = source;
    },
  };

  if (panneau) {
    return {
      plugins: [react()],
      /*
       * Le dossier public/ sert la PAGE autonome : icônes d'écran d'accueil,
       * manifeste web. Le module, lui, est autoportant — polices et images
       * sont déjà repliées dedans — et il est livré tel quel dans
       * l'intégration : on ne veut rien d'autre à côté.
       */
      publicDir: false,
      define: {
        __BUILD_ID__: JSON.stringify(buildId),
        /*
         * React lit process.env.NODE_ENV. Vite ne le remplace que pour les modes
         * qu il connait : avec un mode maison, la reference survivait telle
         * quelle et le panneau mourait sur "process is not defined" des le
         * chargement. On le fige donc explicitement.
         */
        "process.env.NODE_ENV": JSON.stringify("production"),
        // esbuild n'accepte que des littéraux : un objet vide s'écrit ainsi,
        // pas entre parenthèses.
        "process.env": "{}",
      },
      build: {
        target: "es2022",
        cssTarget: "safari16",
        /*
         * Le module est ecrit DIRECTEMENT dans l integration.
         *
         * C est elle qui le sert a Home Assistant : il n y a donc pas de
         * dossier de distribution separe a recopier a la main, et le depot
         * publie est exactement ce que HACS installe.
         */
        outDir: "custom_components/md_vinyl/frontend",
        emptyOutDir: true,
        // Les polices partent en data: dans la CSS, elle-même importée en texte
        // par panel.tsx : tout tient donc dans l'unique .js livré.
        assetsInlineLimit: 200_000,
        cssCodeSplit: false,
        reportCompressedSize: false,
        lib: {
          entry: "src/panel.tsx",
          formats: ["es"],
          fileName: () => "md-vinyl-panel.js",
        },
        rollupOptions: {
          // Rien d'externe : Home Assistant ne nous fournit pas React, et on ne
          // veut pas dépendre de ce qu'il embarque.
          output: { inlineDynamicImports: true },
        },
      },
    };
  }

  return {
    base: "./",
    plugins: [react(), versionFile, singleFile],
    define: {
      __BUILD_ID__: JSON.stringify(buildId),

      /*
       * Le jeton et l'enceinte sont EMBARQUÉS dans la version livrée quand ils
       * sont présents dans .env : l'app se configure alors toute seule, sans
       * rien à saisir sur chaque appareil.
       *
       * À savoir : Home Assistant sert config/www/ SANS authentification. Le
       * jeton est donc lisible par qui peut atteindre l'adresse de l'app —
       * acceptable sur un réseau domestique, à ne pas exposer sur Internet.
       * Pour revenir à la saisie manuelle, il suffit de retirer HA_TOKEN de
       * .env et de reconstruire.
       */
      __DEV_TOKEN__: JSON.stringify(env.HA_TOKEN || ""),
      __DEV_ENTITY__: JSON.stringify(env.HA_ENTITY || ""),

      /*
       * L'adresse, elle, n'est embarquée qu'en développement — et c'est
       * volontaire. Livrée, l'app est servie PAR Home Assistant : viser
       * l'origine de la page marche aussi bien en local qu'à distance. Une
       * adresse figée casserait l'un des deux cas — une page en https ne peut
       * pas appeler une adresse en http, le navigateur le refuse.
       */
      __DEV_URL__: JSON.stringify(mode === "development" ? env.HA_URL || "" : ""),
    },
    /*
     * Le serveur de PREVISUALISATION ecoute aussi sur le reseau.
     *
     * Par defaut Vite ne l ouvre que sur localhost : depuis une tablette, la
     * page ne repondait donc jamais, quelle que soit l adresse saisie. Le
     * serveur de developpement, lui, etait deja ouvert — d ou l impression que
     * ca marchait sur l ordinateur et nulle part ailleurs.
     */
    preview: {
      host: true,
      port: 4192,
    },
    server: {
      host: true,
      port: 5173,
      proxy: target
        ? {
            "/api": { target, changeOrigin: true, ws: true },
            "/auth": { target, changeOrigin: true },
          }
        : undefined,
    },
    build: {
      target: "es2022",
      cssTarget: "safari16",
      // Assez haut pour que les fichiers de police finissent en data: dans la CSS,
      // et donc dans l'unique fichier livré.
      assetsInlineLimit: 200_000,
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2000,
      reportCompressedSize: false,
    },
  };
});

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
