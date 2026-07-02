import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
/* Charte IA BF — Components
   Header / Hero / Charter / FAQ / Helpers
   Uses globals: CHARTER, FAQ
   ============================================================ */

const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

/* ---------- Tiny icon set ---------- */
function Icon({
  name,
  size = 18,
  stroke = 2
}) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  const paths = {
    plus: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("path", {
        d: "M12 5v14"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M5 12h14"
      }, void 0, false)]
    }, void 0, true),
    chevron: /*#__PURE__*/_jsxDEV("path", {
      d: "M6 9l6 6 6-6"
    }, void 0, false),
    search: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("circle", {
        cx: "11",
        cy: "11",
        r: "7"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "m20 20-4-4"
      }, void 0, false)]
    }, void 0, true),
    close: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("path", {
        d: "M18 6 6 18"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "m6 6 12 12"
      }, void 0, false)]
    }, void 0, true),
    copy: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("rect", {
        x: "9",
        y: "9",
        width: "13",
        height: "13",
        rx: "2"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M5 15V5a2 2 0 0 1 2-2h10"
      }, void 0, false)]
    }, void 0, true),
    check: /*#__PURE__*/_jsxDEV("path", {
      d: "M20 6 9 17l-5-5"
    }, void 0, false),
    share: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("circle", {
        cx: "18",
        cy: "5",
        r: "3"
      }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
        cx: "6",
        cy: "12",
        r: "3"
      }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
        cx: "18",
        cy: "19",
        r: "3"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "m8.59 13.51 6.83 3.98"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "m15.41 6.51-6.82 3.98"
      }, void 0, false)]
    }, void 0, true),
    compass: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, void 0, false), /*#__PURE__*/_jsxDEV("polygon", {
        points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
      }, void 0, false)]
    }, void 0, true),
    shield: /*#__PURE__*/_jsxDEV("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    }, void 0, false),
    eye: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("path", {
        d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"
      }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }, void 0, false)]
    }, void 0, true),
    book: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("path", {
        d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
      }, void 0, false)]
    }, void 0, true),
    clipboard: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("rect", {
        x: "8",
        y: "2",
        width: "8",
        height: "4",
        rx: "1"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
      }, void 0, false)]
    }, void 0, true),
    check2: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "m9 12 2 2 4-4"
      }, void 0, false)]
    }, void 0, true),
    leaf: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("path", {
        d: "M11 20A7 7 0 0 1 4 13c0-2.5 2-5 3-7 .5-1 2-3 4-3 4 0 9 5 9 11 0 3.5-3 7-9 7z"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M2 22s4-2 9-2"
      }, void 0, false)]
    }, void 0, true),
    users: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M22 21v-2a4 4 0 0 0-3-3.87"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75"
      }, void 0, false)]
    }, void 0, true),
    sparkle: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: /*#__PURE__*/_jsxDEV("path", {
        d: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
      }, void 0, false)
    }, void 0, false),
    target: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "6"
      }, void 0, false), /*#__PURE__*/_jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "2"
      }, void 0, false)]
    }, void 0, true),
    warn: /*#__PURE__*/_jsxDEV(_Fragment, {
      children: [/*#__PURE__*/_jsxDEV("path", {
        d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M12 9v4"
      }, void 0, false), /*#__PURE__*/_jsxDEV("path", {
        d: "M12 17h.01"
      }, void 0, false)]
    }, void 0, true)
  };
  return /*#__PURE__*/_jsxDEV("svg", {
    ...common,
    children: paths[name]
  }, void 0, false);
}
window.Icon = Icon;

/* ---------- Read progress bar ---------- */
function ReadProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? h.scrollTop / max * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/_jsxDEV("div", {
    className: "read-progress",
    children: /*#__PURE__*/_jsxDEV("div", {
      style: {
        width: pct + '%'
      }
    }, void 0, false)
  }, void 0, false);
}
window.ReadProgress = ReadProgress;

/* ---------- Header ---------- */
function Header({
  active,
  onShare
}) {
  const links = [{
    id: 'charte',
    label: 'La charte'
  }, {
    id: 'codes',
    label: 'Marquages'
  }, {
    id: 'outils',
    label: 'Assistants'
  }, {
    id: 'faq',
    label: 'FAQ'
  }];
  return /*#__PURE__*/_jsxDEV("header", {
    className: "app-header",
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "app-header__inner",
      children: [/*#__PURE__*/_jsxDEV("a", {
        className: "app-header__logo",
        href: "#top",
        children: /*#__PURE__*/_jsxDEV("img", {
          src: typeof window !== 'undefined' && window.__resources?.logoBf || "assets/logo-bf.png",
          alt: "Bruxelles Formation"
        }, void 0, false)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "app-header__divider"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "app-header__title",
        children: [/*#__PURE__*/_jsxDEV("small", {
          children: "Charte IA · V3"
        }, void 0, false), "Usage de l'intelligence artificielle"]
      }, void 0, true), /*#__PURE__*/_jsxDEV("nav", {
        className: "app-header__nav",
        children: links.map(l => /*#__PURE__*/_jsxDEV("a", {
          href: '#' + l.id,
          className: active === l.id ? 'is-active' : '',
          children: l.label
        }, l.id, false))
      }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
        className: "app-header__share",
        onClick: onShare,
        children: [/*#__PURE__*/_jsxDEV(Icon, {
          name: "share",
          size: 14
        }, void 0, false), " Partager"]
      }, void 0, true)]
    }, void 0, true)
  }, void 0, false);
}
window.Header = Header;

/* ---------- Hero ---------- */
function Hero() {
  const c = CHARTER.intro;
  const keys = [{
    c: 'var(--bf-jaune-2)',
    h: 110,
    r: -8,
    y: 14
  }, {
    c: 'var(--bf-vert-2)',
    h: 150,
    r: 4,
    y: -6
  }, {
    c: 'var(--bf-turquoise-2)',
    h: 130,
    r: -3,
    y: 8
  }, {
    c: 'var(--bf-orange-2)',
    h: 160,
    r: 6,
    y: -2
  }, {
    c: 'var(--bf-fuchsia-2)',
    h: 120,
    r: -5,
    y: 10
  }, {
    c: 'var(--bf-bleu-2)',
    h: 145,
    r: 3,
    y: -4
  }];
  return /*#__PURE__*/_jsxDEV("section", {
    className: "hero",
    id: "top",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "hero__overline",
      children: [c.label, " · ", c.version]
    }, void 0, true), /*#__PURE__*/_jsxDEV("h1", {
      className: "hero__title",
      children: ["L'IA à Bruxelles Formation, ", /*#__PURE__*/_jsxDEV("em", {
        children: "clair, utile et assumé."
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
      className: "hero__sub",
      children: c.sub
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "hero__meta",
      children: [/*#__PURE__*/_jsxDEV("span", {
        className: "chip",
        children: [/*#__PURE__*/_jsxDEV(Icon, {
          name: "target",
          size: 14
        }, void 0, false), " 5 engagements"]
      }, void 0, true), /*#__PURE__*/_jsxDEV("span", {
        className: "chip",
        children: [/*#__PURE__*/_jsxDEV(Icon, {
          name: "eye",
          size: 14
        }, void 0, false), " 4 marquages"]
      }, void 0, true), /*#__PURE__*/_jsxDEV("span", {
        className: "chip",
        children: [/*#__PURE__*/_jsxDEV(Icon, {
          name: "book",
          size: 14
        }, void 0, false), " 50+ questions"]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "hero__keys",
      "aria-hidden": "true",
      children: keys.map((k, i) => /*#__PURE__*/_jsxDEV("div", {
        className: "hero__key",
        style: {
          background: k.c,
          height: k.h,
          transform: `rotate(${k.r}deg) translateY(${k.y}px)`
        }
      }, i, false))
    }, void 0, false)]
  }, void 0, true);
}
window.Hero = Hero;

/* ---------- Finalité block ---------- */
function Finalite() {
  return /*#__PURE__*/_jsxDEV("div", {
    className: "finalite",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "finalite__mark",
      children: "✦"
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "finalite__title",
        children: "Finalité"
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "finalite__text",
        children: CHARTER.intro.finalite
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}
window.Finalite = Finalite;

/* ---------- Engagement card ---------- */
function EngagementCard({
  data,
  isOpen,
  onToggle
}) {
  return /*#__PURE__*/_jsxDEV("article", {
    className: 'engagement' + (isOpen ? ' is-open' : ''),
    "data-hue": data.hue,
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "engagement__main",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "engagement__num",
        style: {
          background: 'var(--engHue)'
        },
        children: data.n
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "engagement__text",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "engagement__title",
          children: data.title
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "engagement__slogan",
          children: ["« ", data.slogan, " »"]
        }, void 0, true), /*#__PURE__*/_jsxDEV("ul", {
          className: "engagement__rules",
          children: data.pillars.map((p, i) => /*#__PURE__*/_jsxDEV("li", {
            children: p
          }, i, false))
        }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
          className: "engagement__exToggle",
          onClick: onToggle,
          "aria-expanded": isOpen,
          children: [isOpen ? 'Masquer les exemples' : 'Voir des exemples', /*#__PURE__*/_jsxDEV("span", {
            className: "engagement__exChev",
            children: /*#__PURE__*/_jsxDEV(Icon, {
              name: "chevron",
              size: 14
            }, void 0, false)
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "engagement__body",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "engagement__bodyInner",
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "engagement__examples",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "engagement__exCol ok",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "engagement__exTitle ok",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: "dot",
                children: "✓"
              }, void 0, false), " À faire"]
            }, void 0, true), /*#__PURE__*/_jsxDEV("ul", {
              className: "engagement__exList",
              children: data.examples.ok.map((e, i) => /*#__PURE__*/_jsxDEV("li", {
                children: e
              }, i, false))
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "engagement__exCol ko",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "engagement__exTitle ko",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: "dot",
                children: "✕"
              }, void 0, false), " À éviter"]
            }, void 0, true), /*#__PURE__*/_jsxDEV("ul", {
              className: "engagement__exList",
              children: data.examples.ko.map((e, i) => /*#__PURE__*/_jsxDEV("li", {
                children: e
              }, i, false))
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false)
    }, void 0, false)]
  }, void 0, true);
}
function CharterSection() {
  const [openIdx, setOpenIdx] = useState(-1);
  return /*#__PURE__*/_jsxDEV("section", {
    className: "bf-section",
    id: "charte",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "section__head",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "section__overline",
        children: "La charte"
      }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
        className: "section__title",
        children: "5 engagements, un cadre clair."
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "section__sub",
        children: "L'essentiel se lit d'un coup d'œil. Dépliez les exemples si besoin."
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV(Finalite, {}, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "engagements",
      children: CHARTER.engagements.map((e, i) => /*#__PURE__*/_jsxDEV(EngagementCard, {
        data: e,
        isOpen: openIdx === i,
        onToggle: () => setOpenIdx(openIdx === i ? -1 : i)
      }, e.n, false))
    }, void 0, false)]
  }, void 0, true);
}
window.CharterSection = CharterSection;

/* ---------- Codes section ---------- */
function CodeCard({
  data,
  onCopy
}) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard?.writeText(data.mention);
    setCopied(true);
    onCopy?.('Mention copiée : ' + data.id);
    setTimeout(() => setCopied(false), 1800);
  };
  return /*#__PURE__*/_jsxDEV("div", {
    className: "code-card",
    "data-hue": data.hue,
    style: {
      '--codeHue': `var(--bf-${data.hue}-2)`
    },
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "code-card__top",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "code-card__id",
        children: data.id
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "code-card__label",
        children: data.label
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "code-card__body",
      children: [/*#__PURE__*/_jsxDEV("p", {
        className: "code-card__pitch",
        children: data.pitch
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "code-card__examples",
        children: data.examples
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "code-card__mention",
        children: ["« ", data.mention, " »"]
      }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
        className: 'code-card__copy' + (copied ? ' is-copied' : ''),
        onClick: handleCopy,
        children: copied ? /*#__PURE__*/_jsxDEV(_Fragment, {
          children: [/*#__PURE__*/_jsxDEV(Icon, {
            name: "check",
            size: 12
          }, void 0, false), " Copié"]
        }, void 0, true) : /*#__PURE__*/_jsxDEV(_Fragment, {
          children: [/*#__PURE__*/_jsxDEV(Icon, {
            name: "copy",
            size: 12
          }, void 0, false), " Copier la mention"]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}
function CodesSection({
  onToast
}) {
  return /*#__PURE__*/_jsxDEV("section", {
    className: "bf-section bf-section--alt",
    id: "codes",
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "bf-section__inner",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "section__head",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "section__overline",
          children: "Transparence"
        }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
          className: "section__title",
          children: "Les 4 marquages IA."
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "section__sub",
          children: "Quatre codes simples pour signaler comment l'IA a contribué à un contenu. Cliquez sur « Copier la mention » pour l'insérer dans votre document."
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "codes-grid",
        children: CHARTER.codes.map(c => /*#__PURE__*/_jsxDEV(CodeCard, {
          data: c,
          onCopy: onToast
        }, c.id, false))
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        style: {
          marginTop: '20px',
          textAlign: 'center'
        },
        children: ["Un doute entre deux marquages ? ", /*#__PURE__*/_jsxDEV("a", {
          href: "#outils",
          children: "Utilisez l'assistant de marquage dans l'onglet Assistants."
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)
  }, void 0, false);
}
window.CodesSection = CodesSection;
