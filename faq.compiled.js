import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
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
      body: /*#__PURE__*/_jsxDEV(_Fragment, {
        children: ["Vos données sont publiques : Copilot M365, ChatGPT, Claude, Gemini conviennent. ", /*#__PURE__*/_jsxDEV("strong", {
          children: "Privilégiez Copilot M365"
        }, void 0, false), " pour rester dans le cadre BF."]
      }, void 0, true)
    },
    interne: {
      tone: 'warn',
      title: 'Copilot M365 uniquement',
      body: /*#__PURE__*/_jsxDEV(_Fragment, {
        children: ["Pour les données BF internes mais non sensibles : ", /*#__PURE__*/_jsxDEV("strong", {
          children: "Copilot M365 avec votre compte BF"
        }, void 0, false), ". N'utilisez pas un outil externe, même « juste pour tester »."]
      }, void 0, true)
    },
    sensible: {
      tone: 'ko',
      title: 'Copilot M365 + validation',
      body: /*#__PURE__*/_jsxDEV(_Fragment, {
        children: ["Données RH, apprenant·e·s, stratégiques, financières : ", /*#__PURE__*/_jsxDEV("strong", {
          children: "Copilot M365 + accord hiérarchique"
        }, void 0, false), " si diffusion. En cas de doute, anonymisez ou ne mettez pas."]
      }, void 0, true)
    }
  };
  return /*#__PURE__*/_jsxDEV("div", {
    className: "helper",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "helper__head",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "helper__icon",
        children: /*#__PURE__*/_jsxDEV(Icon, {
          name: "shield",
          size: 22
        }, void 0, false)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "helper__title",
          children: "Quel outil utiliser ?"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "helper__sub",
          children: "Selon la nature de vos données."
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
      className: "helper__step",
      children: "1. Vos données sont…"
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "helper__choices",
      children: [{
        id: 'public',
        label: 'Publiques'
      }, {
        id: 'interne',
        label: 'Internes BF'
      }, {
        id: 'sensible',
        label: 'Sensibles / RH'
      }].map(c => /*#__PURE__*/_jsxDEV("button", {
        className: 'helper__choice' + (data === c.id ? ' is-active' : ''),
        onClick: () => setData(c.id),
        children: c.label
      }, c.id, false))
    }, void 0, false), data && /*#__PURE__*/_jsxDEV("div", {
      className: 'helper__result ' + results[data].tone,
      style: {
        marginTop: 20
      },
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "helper__resultTitle",
        children: [/*#__PURE__*/_jsxDEV(Icon, {
          name: results[data].tone === 'ok' ? 'check2' : results[data].tone === 'warn' ? 'warn' : 'warn',
          size: 16
        }, void 0, false), results[data].title]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        children: results[data].body
      }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
        className: "helper__reset",
        onClick: () => setData(null),
        children: "Recommencer"
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
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
      id: 'IA-D',
      tone: 'warn',
      label: 'Décision / Analyse',
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
  return /*#__PURE__*/_jsxDEV("div", {
    className: "helper",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "helper__head",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "helper__icon",
        style: {
          background: 'var(--bf-bleu-3)',
          color: 'var(--bf-blue)'
        },
        children: /*#__PURE__*/_jsxDEV(Icon, {
          name: "eye",
          size: 22
        }, void 0, false)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "helper__title",
          children: "Quel marquage utiliser ?"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "helper__sub",
          children: "Trouvez le bon code en 2 clics."
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
      className: "helper__step",
      children: "L'IA a…"
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "helper__choices",
      children: [{
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
        label: 'Aidé à analyser'
      }].map(c => /*#__PURE__*/_jsxDEV("button", {
        className: 'helper__choice' + (contribution === c.id ? ' is-active' : ''),
        onClick: () => setContribution(c.id),
        children: c.label
      }, c.id, false))
    }, void 0, false), c && /*#__PURE__*/_jsxDEV("div", {
      className: 'helper__result ' + c.tone,
      style: {
        marginTop: 20
      },
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "helper__resultTitle",
        children: [/*#__PURE__*/_jsxDEV(Icon, {
          name: c.need ? 'eye' : 'check2',
          size: 16
        }, void 0, false), c.need ? 'Marquage requis' : 'Marquage facultatif', /*#__PURE__*/_jsxDEV("span", {
          className: "helper__resultCode",
          children: c.id
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        style: {
          marginBottom: 10
        },
        children: c.need ? /*#__PURE__*/_jsxDEV(_Fragment, {
          children: ["Signalez l'usage avec le code ", /*#__PURE__*/_jsxDEV("strong", {
            children: c.id
          }, void 0, false), " (", c.label, ")."]
        }, void 0, true) : /*#__PURE__*/_jsxDEV(_Fragment, {
          children: "Pour une simple correction ou reformulation, le signalement n'est pas obligatoire — sauf document à forte valeur."
        }, void 0, false)
      }, void 0, false), codeData && /*#__PURE__*/_jsxDEV("button", {
        className: "code-card__copy",
        onClick: copyMention,
        style: {
          marginTop: 4
        },
        children: [/*#__PURE__*/_jsxDEV(Icon, {
          name: "copy",
          size: 12
        }, void 0, false), " Copier la mention type"]
      }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
        className: "helper__reset",
        onClick: () => setContribution(null),
        children: "Recommencer"
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}
function HelpersSection({
  onToast
}) {
  return /*#__PURE__*/_jsxDEV("section", {
    className: "bf-section",
    id: "outils",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "section__head",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "section__overline",
        children: "Assistants pratiques"
      }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
        className: "section__title",
        children: "2 outils pour décider en 10 secondes."
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "section__sub",
        children: "Plutôt que de chercher dans la charte, posez votre situation — la bonne règle s'affiche."
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "helpers",
      children: [/*#__PURE__*/_jsxDEV(ToolHelper, {}, void 0, false), /*#__PURE__*/_jsxDEV(MarkupHelper, {
        onToast: onToast
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
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
    return parts.map((p, i) => re.test(p) ? /*#__PURE__*/_jsxDEV("mark", {
      children: p
    }, i, false) : p);
  };
  const boldify = str => {
    // split on **...**
    const parts = str.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((p, i) => {
      if (p.startsWith('**') && p.endsWith('**')) {
        return /*#__PURE__*/_jsxDEV("strong", {
          children: highlight(p.slice(2, -2))
        }, i, false);
      }
      return /*#__PURE__*/_jsxDEV(React.Fragment, {
        children: highlight(p)
      }, i, false);
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
      return /*#__PURE__*/_jsxDEV("ul", {
        children: b.items.map((it, j) => /*#__PURE__*/_jsxDEV("li", {
          children: boldify(it)
        }, j, false))
      }, i, false);
    }
    return /*#__PURE__*/_jsxDEV("p", {
      children: boldify(b.text)
    }, i, false);
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
    return parts.map((p, i) => re.test(p) ? /*#__PURE__*/_jsxDEV("mark", {
      children: p
    }, i, false) : p);
  };
  return /*#__PURE__*/_jsxDEV("div", {
    className: 'faq-item' + (open ? ' is-open' : ''),
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "faq-item__q",
      onClick: () => setOpen(o => !o),
      role: "button",
      "aria-expanded": open,
      children: [/*#__PURE__*/_jsxDEV("span", {
        className: "faq-item__q__text",
        children: highlight(item.q)
      }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
        className: "faq-item__chev",
        children: /*#__PURE__*/_jsxDEV(Icon, {
          name: "chevron",
          size: 16
        }, void 0, false)
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "faq-item__a",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "faq-item__aInner",
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "faq-item__aBody",
          children: renderAnswer(item.a, query)
        }, void 0, false)
      }, void 0, false)
    }, void 0, false)]
  }, void 0, true);
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
  return /*#__PURE__*/_jsxDEV("section", {
    className: "bf-section bf-section--alt",
    id: "faq",
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "bf-section__inner",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "section__head",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "section__overline",
          children: "Foire aux questions"
        }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
          className: "section__title",
          children: "Toutes vos questions sur l'IA."
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "section__sub",
          children: [totalAll, " questions, classées par thème. Tapez ", /*#__PURE__*/_jsxDEV("kbd", {
            style: {
              background: '#fff',
              border: '1px solid var(--border)',
              borderRadius: 4,
              padding: '1px 6px',
              fontFamily: 'var(--font-display)',
              fontSize: 12,
              color: 'var(--bf-blue)'
            },
            children: "/"
          }, void 0, false), " pour ouvrir la recherche."]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "faq-toolbar",
        children: /*#__PURE__*/_jsxDEV("label", {
          className: "faq-search",
          children: [/*#__PURE__*/_jsxDEV(Icon, {
            name: "search",
            size: 16
          }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
            ref: searchRef,
            type: "text",
            placeholder: "Rechercher dans la FAQ — ex. Copilot, données, transparence…",
            value: query,
            onChange: e => setQuery(e.target.value)
          }, void 0, false), query && /*#__PURE__*/_jsxDEV("button", {
            className: "faq-clear",
            onClick: () => setQuery(''),
            children: "Effacer"
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "faq-cats",
        children: [/*#__PURE__*/_jsxDEV("button", {
          className: 'faq-cat' + (activeCat === 'all' ? ' is-active' : ''),
          onClick: () => setActiveCat('all'),
          children: ["Toutes ", /*#__PURE__*/_jsxDEV("span", {
            className: "faq-cat__count",
            children: totalAll
          }, void 0, false)]
        }, void 0, true), FAQ.map(sec => /*#__PURE__*/_jsxDEV("button", {
          "data-hue": sec.hue,
          className: 'faq-cat' + (activeCat === sec.id ? ' is-active' : ''),
          onClick: () => setActiveCat(sec.id),
          children: [/*#__PURE__*/_jsxDEV(Icon, {
            name: sec.icon,
            size: 13
          }, void 0, false), sec.label, /*#__PURE__*/_jsxDEV("span", {
            className: "faq-cat__count",
            children: sec.items.length
          }, void 0, false)]
        }, sec.id, true))]
      }, void 0, true), filtered.length === 0 ? /*#__PURE__*/_jsxDEV("div", {
        className: "faq-empty",
        children: ["Aucun résultat pour « ", query, " ». Essayez un autre mot-clé ou changez de catégorie."]
      }, void 0, true) : filtered.map(sec => /*#__PURE__*/_jsxDEV("div", {
        className: "faq-section",
        id: 'faq-' + sec.id,
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "faq-section__head",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "faq-section__dot",
            "data-hue": sec.hue,
            style: {
              background: 'var(--engHue)'
            },
            children: /*#__PURE__*/_jsxDEV(Icon, {
              name: sec.icon,
              size: 18
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("h3", {
            className: "faq-section__title",
            children: sec.label
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "faq-list",
          children: sec.items.map((it, i) => /*#__PURE__*/_jsxDEV(FaqItem, {
            item: it,
            query: query
          }, i, false))
        }, void 0, false)]
      }, sec.id, true)), query && /*#__PURE__*/_jsxDEV("p", {
        style: {
          textAlign: 'center',
          color: 'var(--fg-muted)',
          marginTop: 24,
          fontSize: 14
        },
        children: [totalShown, " résultat", totalShown > 1 ? 's' : '', " pour « ", query, " »"]
      }, void 0, true)]
    }, void 0, true)
  }, void 0, false);
}
window.FaqSection = FaqSection;

/* ---------- Footer ---------- */
function Footer() {
  return /*#__PURE__*/_jsxDEV("footer", {
    className: "app-footer",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "app-footer__inner",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "app-footer__brand",
        children: [/*#__PURE__*/_jsxDEV("img", {
          src: typeof window !== 'undefined' && window.__resources?.logoBf || "assets/logo-bf.png",
          alt: "Bruxelles Formation"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          children: "Charte d'usage de l'intelligence artificielle · Version 3."
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          style: {
            fontStyle: 'italic'
          },
          children: "« Cette charte est évolutive et adaptée en fonction des usages, des retours d'expérience et du cadre réglementaire. »"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "app-footer__col",
        children: [/*#__PURE__*/_jsxDEV("h4", {
          children: "Aller à"
        }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
          href: "#charte",
          children: "La charte"
        }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
          href: "#codes",
          children: "Marquages IA"
        }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
          href: "#outils",
          children: "Assistants"
        }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
          href: "#faq",
          children: "FAQ"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "app-footer__bottom",
      children: [/*#__PURE__*/_jsxDEV("span", {
        children: "© Bruxelles Formation · Charte IA v3 · 2026"
      }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
        children: "Document évolutif, vos retours sont précieux"
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
      className: "app-footer__ia",
      style: {
        maxWidth: '1200px',
        margin: '8px auto 0',
        fontSize: '11px',
        color: 'rgba(255,255,255,.4)',
        textAlign: 'center'
      },
      children: ["Contenu majoritairement généré par IA (marquage ", /*#__PURE__*/_jsxDEV("a", {
        href: "#codes",
        style: {
          color: 'rgba(255,255,255,.55)'
        },
        children: "IA-G"
      }, void 0, false), "), relu et validé par le GT IA."]
    }, void 0, true)]
  }, void 0, true);
}
window.Footer = Footer;
