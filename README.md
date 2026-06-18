# Charte IA BF — Site interactif (à déployer)

Application web **statique et interactive** : la charte d'usage de l'IA de Bruxelles Formation (V2) + sa FAQ.
5 engagements dépliables, 4 marquages avec mention à copier, 2 assistants de décision, FAQ avec recherche/filtres.

---

## ⚡ Le point important (pourquoi l'interactivité plantait avant)

La toute première version embarquait **Babel** (transpilation JSX « à la volée » dans le navigateur).
Sur `file://` et certains hébergeurs, Babel ne se déclenchait pas → React ne démarrait jamais → **aucun clic ne répondait**.

**C'est corrigé ici :** le JSX est **pré-compilé** en JavaScript classique (`*.compiled.js`).
**Plus aucune dépendance à Babel.** Le site fonctionne tel quel sur GitHub Pages, sur un serveur statique, et en local.

➡️ **Ne réintroduis pas Babel ni les fichiers `text/babel`.** Édite le JSX dans `src/`, puis recompile (voir plus bas).

---

## 📁 Structure

```
.
├── index.html                 ← point d'entrée (charge React prod + les .compiled.js)
├── data.js                    ← TOUT le contenu : charte + 59 questions FAQ (objets JS globaux CHARTER et FAQ)
├── components.compiled.js     ← Header, Hero, Charte, Marquages (compilé, NE PAS éditer à la main)
├── faq.compiled.js            ← Helpers (assistants) + FAQ + Footer (compilé)
├── app.compiled.js            ← composant racine App + montage React (compilé)
├── styles.css                 ← styles spécifiques de l'app
├── assets/
│   ├── colors_and_type.css    ← design tokens Bruxelles Formation (couleurs, typo, espacements)
│   └── logo-bf.svg            ← logo officiel
└── src/                       ← SOURCES JSX (à éditer, puis recompiler vers les .compiled.js)
    ├── components.jsx
    ├── faq.jsx
    └── app.jsx
```

`data.js` expose deux globales : `window.CHARTER` (intro, 5 engagements, 4 codes) et `window.FAQ` (8 catégories, ~59 questions). Les composants lisent ces globales. **Pour changer un texte de la charte ou une réponse FAQ, c'est dans `data.js`** — pas besoin de recompiler.

---

## 🚀 Déployer sur GitHub Pages

1. Crée un dépôt **public** (ex. `charte-ia-bf`).
2. Pousse **tout le contenu de ce dossier** à la racine du dépôt (garde `index.html` à la racine, et le dossier `assets/`).
3. **Settings → Pages** → Source : *Deploy from a branch* → Branche `main` → dossier `/ (root)` → **Save**.
4. Après ~1 min : `https://<pseudo>.github.io/charte-ia-bf/`

> ⚠️ Pousse bien **tous** les fichiers (index.html + les 3 `.compiled.js` + data.js + styles.css + assets/). Si tu ne pousses qu'`index.html`, la page s'affiche sans style ni interactivité.

### Lancer en local
```bash
# n'importe quel serveur statique, ex. :
python3 -m http.server 8000
# puis http://localhost:8000
```

---

## 🛠️ Modifier puis recompiler

Le contenu (textes charte/FAQ) → édite `data.js` directement, aucune compilation.

La structure/les composants → édite les `src/*.jsx`, puis recompile en JS classique :

```bash
npm install --no-save @babel/core @babel/cli @babel/preset-react

npx babel src/components.jsx --presets @babel/preset-react -o components.compiled.js
npx babel src/faq.jsx        --presets @babel/preset-react -o faq.compiled.js
npx babel src/app.jsx        --presets @babel/preset-react -o app.compiled.js
```

(Babel sert UNIQUEMENT à la compilation hors-ligne ici — il n'est jamais chargé dans le navigateur.)

### Conventions à respecter dans le JSX
- Les composants se partagent via `window.NomDuComposant = NomDuComposant;` (pas de modules ES).
- L'ordre de chargement dans `index.html` compte : `data.js` → `components` → `faq` → `app`.
- Le logo se résout via `window.__resources?.logoBf` avec repli sur `assets/logo-bf.svg` (laisse ce repli).

---

## 🎨 Charte graphique (déjà appliquée — voir `assets/colors_and_type.css`)
- Bleu BF (ancrage) `#16345f` · accents jaune `#edcb0c`, vert `#4eae33`, turquoise `#47b7a4`, orange `#f5810c`, mauve `#524797`, rose `#f14382`, fuchsia, rouge `#e03134`
- Typo : **Space Grotesk** (titres) + Arial (corps)
- Motif de marque : la « piano key » (rectangle à coins inférieurs très arrondis)

---

## ✅ Vérifié
Rendu complet (5 engagements, 59 FAQ, 4 marquages, 2 assistants), dépliement des exemples OK, recherche FAQ OK (filtrage + surlignage), zéro erreur console. Poids total ~200 Ko hors React (chargé via CDN).
