/* Charte IA BF — Helpers (decision tools) and FAQ
   ============================================================ */

const {
  useState: useStateH,
  useMemo: useMemoH,
  useEffect: useEffectH,
  useRef: useRefH
} = React;

/* ---------- Helper 1: Quel outil utiliser ? ---------- */
function ToolHelper() {
  const [data, setData] = useStateH(null); // 'public' | 'interne' | 'sensible' | null

  const results = {
    public: {
      tone: 'ok',
      title: 'Tous outils autorisés',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, "Vos données sont publiques : Copilot M365, ChatGPT, Claude, Gemini conviennent. ", /*#__PURE__*/React.createElement("strong", null, "Privilégiez Copilot M365"), " pour rester dans le cadre BF.")
    },
    interne: {
      tone: 'warn',
      title: 'Copilot M365 uniquement',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, "Pour les données BF internes mais non sensibles : ", /*#__PURE__*/React.createElement("strong", null, "Copilot M365 avec votre compte BF"), ". N'utilisez pas un outil externe, même « juste pour tester ».")
    },
    sensible: {
      tone: 'ko',
      title: 'Copilot M365 + validation',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, "Données RH, stagiaires, stratégiques, financières : ", /*#__PURE__*/React.createElement("strong", null, "Copilot M365 + accord hiérarchique"), " si diffusion. En cas de doute, anonymisez ou ne mettez pas.")
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "helper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "helper__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "helper__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "helper__title"
  }, "Quel outil utiliser ?"), /*#__PURE__*/React.createElement("p", {
    className: "helper__sub"
  }, "Selon la nature de vos données."))), /*#__PURE__*/React.createElement("p", {
    className: "helper__step"
  }, "1. Vos données sont…"), /*#__PURE__*/React.createElement("div", {
    className: "helper__choices"
  }, [{
    id: 'public',
    label: 'Publiques'
  }, {
    id: 'interne',
    label: 'Internes BF'
  }, {
    id: 'sensible',
    label: 'Sensibles / RH'
  }].map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    className: 'helper__choice' + (data === c.id ? ' is-active' : ''),
    onClick: () => setData(c.id)
  }, c.label))), data && /*#__PURE__*/React.createElement("div", {
    className: 'helper__result ' + results[data].tone,
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "helper__resultTitle"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: results[data].tone === 'ok' ? 'check2' : results[data].tone === 'warn' ? 'warn' : 'warn',
    size: 16
  }), results[data].title), /*#__PURE__*/React.createElement("div", null, results[data].body), /*#__PURE__*/React.createElement("button", {
    className: "helper__reset",
    onClick: () => setData(null)
  }, "Recommencer")));
}

/* ---------- Helper 2: Quel marquage utiliser ? ---------- */
function MarkupHelper({
  onToast
}) {
  const [step, setStep] = useStateH(1);
  const [contribution, setContribution] = useStateH(null);
  const codes = {
    light: {
      id: 'IA-A',
      tone: 'ok',
      label: 'Assistance',
      need: false
    },
    partial: {
      id: 'IA-C',
      tone: 'warn',
      label: 'Co-construction',
      need: true
    },
    major: {
      id: 'IA-G',
      tone: 'warn',
      label: 'Génération',
      need: true
    },
    analysis: {
      id: 'IA-O',
      tone: 'warn',
      label: 'Oriente une décision',
      need: true
    }
  };
  const c = contribution ? codes[contribution] : null;
  const codeData = c ? CHARTER.codes.find(x => x.id === c.id) : null;
  const copyMention = () => {
    if (codeData) {
      navigator.clipboard?.writeText(codeData.mention);
      onToast?.('Mention copiée : ' + codeData.id);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "helper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "helper__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "helper__icon",
    style: {
      background: 'var(--bf-bleu-3)',
      color: 'var(--bf-blue)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "helper__title"
  }, "Quel marquage utiliser ?"), /*#__PURE__*/React.createElement("p", {
    className: "helper__sub"
  }, "Trouvez le bon code en 2 clics."))), /*#__PURE__*/React.createElement("p", {
    className: "helper__step"
  }, "L'IA a…"), /*#__PURE__*/React.createElement("div", {
    className: "helper__choices"
  }, [{
    id: 'light',
    label: 'Juste corrigé / reformulé'
  }, {
    id: 'partial',
    label: 'Structuré une partie'
  }, {
    id: 'major',
    label: 'Produit l\'essentiel'
  }, {
    id: 'analysis',
    label: 'Aidé à orienter une décision'
  }].map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    className: 'helper__choice' + (contribution === c.id ? ' is-active' : ''),
    onClick: () => setContribution(c.id)
  }, c.label))), c && /*#__PURE__*/React.createElement("div", {
    className: 'helper__result ' + c.tone,
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "helper__resultTitle"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.need ? 'eye' : 'check2',
    size: 16
  }), c.need ? 'Marquage requis' : 'Marquage facultatif', /*#__PURE__*/React.createElement("span", {
    className: "helper__resultCode"
  }, c.id)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, c.need ? /*#__PURE__*/React.createElement(React.Fragment, null, "Signalez l'usage avec le code ", /*#__PURE__*/React.createElement("strong", null, c.id), " (", c.label, ").") : /*#__PURE__*/React.createElement(React.Fragment, null, "Pour une simple correction ou reformulation, le signalement n'est pas obligatoire — sauf document à forte valeur.")), codeData && /*#__PURE__*/React.createElement("button", {
    className: "code-card__copy",
    onClick: copyMention,
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "copy",
    size: 12
  }), " Copier la mention type"), /*#__PURE__*/React.createElement("button", {
    className: "helper__reset",
    onClick: () => setContribution(null)
  }, "Recommencer")));
}
function HelpersSection({
  onToast
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "bf-section",
    id: "outils"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__overline"
  }, "Assistants pratiques"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, "2 outils pour décider en 10 secondes."), /*#__PURE__*/React.createElement("p", {
    className: "section__sub"
  }, "Plutôt que de chercher dans la charte, posez votre situation — la bonne règle s'affiche.")), /*#__PURE__*/React.createElement("div", {
    className: "helpers"
  }, /*#__PURE__*/React.createElement(ToolHelper, null), /*#__PURE__*/React.createElement(MarkupHelper, {
    onToast: onToast
  })));
}
window.HelpersSection = HelpersSection;

/* ============================================================
   FAQ Section
   ============================================================ */

// turn the answer string into nodes — supports **bold**, • bullets, line breaks
function renderAnswer(text, query) {
  const highlight = str => {
    if (!query || query.length < 2) return str;
    const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    const parts = str.split(re);
    return parts.map((p, i) => re.test(p) ? /*#__PURE__*/React.createElement("mark", {
      key: i
    }, p) : p);
  };
  const boldify = str => {
    // split on **...**
    const parts = str.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((p, i) => {
      if (p.startsWith('**') && p.endsWith('**')) {
        return /*#__PURE__*/React.createElement("strong", {
          key: i
        }, highlight(p.slice(2, -2)));
      }
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: i
      }, highlight(p));
    });
  };

  // split text into blocks: paragraphs vs bullet groups
  const lines = text.split('\n');
  const blocks = [];
  let bulletBuf = [];
  const flushBullets = () => {
    if (bulletBuf.length) {
      blocks.push({
        type: 'ul',
        items: [...bulletBuf]
      });
      bulletBuf = [];
    }
  };
  lines.forEach(line => {
    if (line.startsWith('• ')) bulletBuf.push(line.slice(2));else {
      flushBullets();
      if (line.trim()) blocks.push({
        type: 'p',
        text: line
      });
    }
  });
  flushBullets();
  return blocks.map((b, i) => {
    if (b.type === 'ul') {
      return /*#__PURE__*/React.createElement("ul", {
        key: i
      }, b.items.map((it, j) => /*#__PURE__*/React.createElement("li", {
        key: j
      }, boldify(it))));
    }
    return /*#__PURE__*/React.createElement("p", {
      key: i
    }, boldify(b.text));
  });
}
function FaqItem({
  item,
  query
}) {
  const [open, setOpen] = useStateH(false);
  // Auto-open if matches search query
  useEffectH(() => {
    if (query && query.length >= 2) {
      const inQ = item.q.toLowerCase().includes(query.toLowerCase());
      const inA = item.a.toLowerCase().includes(query.toLowerCase());
      if (inA && !inQ) setOpen(true);
    }
  }, [query]);
  const highlight = str => {
    if (!query || query.length < 2) return str;
    const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    const parts = str.split(re);
    return parts.map((p, i) => re.test(p) ? /*#__PURE__*/React.createElement("mark", {
      key: i
    }, p) : p);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: 'faq-item' + (open ? ' is-open' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-item__q",
    onClick: () => setOpen(o => !o),
    role: "button",
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", {
    className: "faq-item__q__text"
  }, highlight(item.q)), /*#__PURE__*/React.createElement("span", {
    className: "faq-item__chev"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "faq-item__a"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-item__aInner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-item__aBody"
  }, renderAnswer(item.a, query)))));
}
function FaqSection() {
  const [query, setQuery] = useStateH('');
  const [activeCat, setActiveCat] = useStateH('all');
  const searchRef = useRefH(null);

  // Keyboard shortcut: / focuses search
  useEffectH(() => {
    const onKey = e => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const filtered = useMemoH(() => {
    const q = query.trim().toLowerCase();
    return FAQ.map(section => {
      if (activeCat !== 'all' && activeCat !== section.id) return null;
      const items = section.items.filter(it => {
        if (!q) return true;
        return it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q);
      });
      if (!items.length) return null;
      return {
        ...section,
        items
      };
    }).filter(Boolean);
  }, [query, activeCat]);
  const totalShown = filtered.reduce((s, sec) => s + sec.items.length, 0);
  const totalAll = FAQ.reduce((s, sec) => s + sec.items.length, 0);
  return /*#__PURE__*/React.createElement("section", {
    className: "bf-section bf-section--alt",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bf-section__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__overline"
  }, "Foire aux questions"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, "Toutes vos questions sur l'IA."), /*#__PURE__*/React.createElement("p", {
    className: "section__sub"
  }, totalAll, " questions, classées par thème. Tapez ", /*#__PURE__*/React.createElement("kbd", {
    style: {
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 4,
      padding: '1px 6px',
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      color: 'var(--bf-blue)'
    }
  }, "/"), " pour ouvrir la recherche.")), /*#__PURE__*/React.createElement("div", {
    className: "faq-toolbar"
  }, /*#__PURE__*/React.createElement("label", {
    className: "faq-search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16
  }), /*#__PURE__*/React.createElement("input", {
    ref: searchRef,
    type: "text",
    placeholder: "Rechercher dans la FAQ — ex. Copilot, données, transparence…",
    value: query,
    onChange: e => setQuery(e.target.value)
  }), query && /*#__PURE__*/React.createElement("button", {
    className: "faq-clear",
    onClick: () => setQuery('')
  }, "Effacer"))), /*#__PURE__*/React.createElement("div", {
    className: "faq-cats"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'faq-cat' + (activeCat === 'all' ? ' is-active' : ''),
    onClick: () => setActiveCat('all')
  }, "Toutes ", /*#__PURE__*/React.createElement("span", {
    className: "faq-cat__count"
  }, totalAll)), FAQ.map(sec => /*#__PURE__*/React.createElement("button", {
    key: sec.id,
    "data-hue": sec.hue,
    className: 'faq-cat' + (activeCat === sec.id ? ' is-active' : ''),
    onClick: () => setActiveCat(sec.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: sec.icon,
    size: 13
  }), sec.label, /*#__PURE__*/React.createElement("span", {
    className: "faq-cat__count"
  }, sec.items.length)))), filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "faq-empty"
  }, "Aucun résultat pour « ", query, " ». Essayez un autre mot-clé ou changez de catégorie.") : filtered.map(sec => /*#__PURE__*/React.createElement("div", {
    key: sec.id,
    className: "faq-section",
    id: 'faq-' + sec.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-section__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-section__dot",
    "data-hue": sec.hue,
    style: {
      background: 'var(--engHue)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: sec.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("h3", {
    className: "faq-section__title"
  }, sec.label)), /*#__PURE__*/React.createElement("div", {
    className: "faq-list"
  }, sec.items.map((it, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    item: it,
    query: query
  }))))), query && /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--fg-muted)',
      marginTop: 24,
      fontSize: 14
    }
  }, totalShown, " résultat", totalShown > 1 ? 's' : '', " pour « ", query, " »")));
}
window.FaqSection = FaqSection;

/* ---------- Footer ---------- */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "app-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: typeof window !== 'undefined' && window.__resources?.logoBf || "assets/logo-bf.png",
    alt: "Bruxelles Formation"
  }), /*#__PURE__*/React.createElement("p", null, "Charte d'usage de l'intelligence artificielle · Version 3."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontStyle: 'italic'
    }
  }, "« Cette charte est évolutive et adaptée en fonction des usages, des retours d'expérience et du cadre réglementaire. »")), /*#__PURE__*/React.createElement("div", {
    className: "app-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, "Aller à"), /*#__PURE__*/React.createElement("a", {
    href: "#charte"
  }, "La charte"), /*#__PURE__*/React.createElement("a", {
    href: "#codes"
  }, "Marquages IA"), /*#__PURE__*/React.createElement("a", {
    href: "#outils"
  }, "Assistants"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ"))), /*#__PURE__*/React.createElement("div", {
    className: "app-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "© Bruxelles Formation · Charte IA v3 · 2026"), /*#__PURE__*/React.createElement("span", null, "Document évolutif, vos retours sont précieux")), /*#__PURE__*/React.createElement("p", {
    className: "app-footer__ia",
    style: {
      maxWidth: '1200px',
      margin: '8px auto 0',
      fontSize: '11px',
      color: 'rgba(255,255,255,.4)',
      textAlign: 'center'
    }
  }, "Contenu majoritairement généré par IA (marquage ", /*#__PURE__*/React.createElement("a", {
    href: "#codes",
    style: {
      color: 'rgba(255,255,255,.55)'
    }
  }, "IA-G"), "), relu et validé par le GT IA."));
}
window.Footer = Footer;
