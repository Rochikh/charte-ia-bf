# Prompt à coller dans Claude Code (CLI)

Ouvre un terminal dans le dossier `design_handoff_charte_ia/` (après l'avoir dézippé), lance `claude`, puis colle ceci :

---

J'ai un site web statique interactif (la « Charte IA » de Bruxelles Formation) dans ce dossier. Lis le `README.md` d'abord : il explique l'architecture et un bug historique d'interactivité déjà corrigé (le JSX est pré-compilé, il NE FAUT PAS réintroduire Babel dans le navigateur).

Le site fonctionne déjà. Ce que je veux que tu fasses :

1. **Vérifie que tout tourne en local** : démarre un serveur statique et confirme que la page se charge sans erreur console, que les cartes d'engagement se déplient au clic, et que la recherche dans la FAQ filtre bien les questions.

2. **Prépare le déploiement GitHub Pages** : initialise un dépôt git, fais un premier commit avec TOUS les fichiers (index.html, les 3 *.compiled.js, data.js, styles.css, assets/), et donne-moi les commandes exactes pour le pousser sur mon compte GitHub (pseudo : `rochikh`) dans un dépôt public nommé `charte-ia-bf`, puis activer GitHub Pages. Mon lien final visé est `https://rochikh.github.io/charte-ia-bf/`.

3. Si tu trouves le moindre problème d'interactivité, corrige-le dans les sources `src/*.jsx` PUIS recompile vers les `*.compiled.js` (commandes babel dans le README) — ne touche jamais aux `.compiled.js` à la main et ne charge jamais Babel côté navigateur.

Ne change pas le design ni le contenu sans me demander. Commence par l'étape 1 et montre-moi le résultat.

---

Fin du prompt.
