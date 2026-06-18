# À COLLER DANS CLAUDE.AI

Copie tout ce qui suit la ligne `---` et colle-le dans une conversation Claude.ai. Il te guidera pas à pas.

---

## Mon contexte

- Je suis sur un **Chromebook**. Je suis **débutant avec le terminal / la ligne de commande** — explique-moi chaque étape simplement, une à la fois, et attends ma confirmation avant de passer à la suivante.
- Mon pseudo **GitHub** : `rochikh`. J'ai un compte GitHub mais je connais mal git.
- Objectif final : **mettre en ligne un mini-site web** (une charte interactive) sur **GitHub Pages**, pour obtenir un lien `https://rochikh.github.io/charte-ia-bf/` que je partagerai à mes collègues.
- Je veux le faire **avec Claude Code (CLI)**, l'outil en ligne de commande d'Anthropic. Aide-moi d'abord à l'installer et à l'utiliser, puis à publier le site.

## Ce que j'ai déjà

Un dossier (téléchargé en .zip puis dézippé) nommé `design_handoff_charte_ia/`. Il contient un **site web statique déjà fonctionnel** (HTML/CSS/JavaScript, React via CDN, pas de build compliqué). Sa structure :

```
design_handoff_charte_ia/
├── index.html                 (page d'entrée)
├── data.js                    (tout le contenu : charte + FAQ)
├── components.compiled.js     (composants, déjà compilés)
├── faq.compiled.js
├── app.compiled.js
├── styles.css
├── assets/  (colors_and_type.css, logo-bf.svg)
├── src/     (sources JSX éditables : components.jsx, faq.jsx, app.jsx)
├── README.md
└── PROMPT_CLAUDE_CODE.md       (un prompt déjà prêt pour Claude Code)
```

Important : le site est en **multi-fichiers, sans Babel dans le navigateur** (le JSX est déjà pré-compilé en .compiled.js). C'est volontaire : une version précédente avec Babel perdait toute son interactivité une fois déployée. **Il ne faut pas réintroduire Babel côté navigateur.** Pour déployer, il suffit de pousser TOUS ces fichiers tels quels sur GitHub.

## Ce dont j'ai besoin de toi (Claude.ai)

Guide-moi, étape par étape et de façon adaptée à un Chromebook + débutant, pour :

1. **Préparer le Chromebook** : m'expliquer comment ouvrir un terminal sur ChromeOS (activer l'environnement Linux / « Crostini » si besoin), et vérifier/installer ce qu'il faut (Node.js et npm, git).

2. **Installer Claude Code (CLI)** : la commande d'installation, comment me connecter à mon compte, et comment vérifier que ça marche.

3. **Lancer Claude Code dans mon dossier** : comment naviguer jusqu'au dossier `design_handoff_charte_ia/` dans le terminal et démarrer `claude` dedans. Je collerai alors le prompt qui se trouve dans `PROMPT_CLAUDE_CODE.md`.

4. **Publier sur GitHub Pages** : si Claude Code ne le fait pas entièrement, donne-moi les commandes git exactes pour créer le dépôt public `charte-ia-bf`, pousser tous les fichiers, et activer GitHub Pages (Settings → Pages → branche main → /root). Préviens-moi des pièges fréquents (dépôt qui doit être public, fichier `index.html` à la racine, authentification GitHub via token).

Commence par l'étape 1 et vérifie avec moi que mon terminal fonctionne avant d'aller plus loin. Pose-moi des questions si tu as besoin de savoir ce qui est déjà installé sur ma machine.

---

Fin du brief.
