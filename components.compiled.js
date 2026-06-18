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
    plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    })),
    chevron: /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6"
    }),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m20 20-4-4"
    })),
    close: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M18 6 6 18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m6 6 12 12"
    })),
    copy: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "9",
      width: "13",
      height: "13",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 15V5a2 2 0 0 1 2-2h10"
    })),
    check: /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    }),
    share: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "5",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "19",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m8.59 13.51 6.83 3.98"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m15.41 6.51-6.82 3.98"
    })),
    compass: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
    })),
    shield: /*#__PURE__*/React.createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    }),
    eye: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    })),
    book: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
    })),
    clipboard: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "8",
      y: "2",
      width: "8",
      height: "4",
      rx: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    })),
    check2: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m9 12 2 2 4-4"
    })),
    leaf: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M11 20A7 7 0 0 1 4 13c0-2.5 2-5 3-7 .5-1 2-3 4-3 4 0 9 5 9 11 0 3.5-3 7-9 7z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 22s4-2 9-2"
    })),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    sparkle: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
    })),
    target: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2"
    })),
    warn: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 9v4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 17h.01"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", common, paths[name]);
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
  return /*#__PURE__*/React.createElement("div", {
    className: "read-progress"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%'
    }
  }));
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
  return /*#__PURE__*/React.createElement("header", {
    className: "app-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "app-header__logo",
    href: "#top"
  }, /*#__PURE__*/React.createElement("img", {
    src: typeof window !== 'undefined' && window.__resources?.logoBf || "assets/logo-bf.svg",
    alt: "Bruxelles Formation"
  })), /*#__PURE__*/React.createElement("div", {
    className: "app-header__divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "app-header__title"
  }, /*#__PURE__*/React.createElement("small", null, "Charte IA \xB7 V2"), "Usage de l'intelligence artificielle"), /*#__PURE__*/React.createElement("nav", {
    className: "app-header__nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: '#' + l.id,
    className: active === l.id ? 'is-active' : ''
  }, l.label))), /*#__PURE__*/React.createElement("button", {
    className: "app-header__share",
    onClick: onShare
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share",
    size: 14
  }), " Partager")));
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
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__overline"
  }, c.label, " \xB7 ", c.version), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "L'IA \xE0 Bruxelles Formation, ", /*#__PURE__*/React.createElement("em", null, "clair, utile et assum\xE9.")), /*#__PURE__*/React.createElement("p", {
    className: "hero__sub"
  }, c.sub), /*#__PURE__*/React.createElement("div", {
    className: "hero__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "target",
    size: 14
  }), " 5 engagements"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 14
  }), " 4 marquages"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "book",
    size: 14
  }), " 50+ questions")), /*#__PURE__*/React.createElement("div", {
    className: "hero__keys",
    "aria-hidden": "true"
  }, keys.map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "hero__key",
    style: {
      background: k.c,
      height: k.h,
      transform: `rotate(${k.r}deg) translateY(${k.y}px)`
    }
  }))));
}
window.Hero = Hero;

/* ---------- Finalité block ---------- */
function Finalite() {
  return /*#__PURE__*/React.createElement("div", {
    className: "finalite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "finalite__mark"
  }, "\u2726"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "finalite__title"
  }, "Finalit\xE9"), /*#__PURE__*/React.createElement("p", {
    className: "finalite__text"
  }, CHARTER.intro.finalite)));
}
window.Finalite = Finalite;

/* ---------- Engagement card ---------- */
function EngagementCard({
  data,
  isOpen,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: 'engagement' + (isOpen ? ' is-open' : ''),
    "data-hue": data.hue
  }, /*#__PURE__*/React.createElement("div", {
    className: "engagement__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "engagement__num",
    style: {
      background: 'var(--engHue)'
    }
  }, data.n), /*#__PURE__*/React.createElement("div", {
    className: "engagement__text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "engagement__title"
  }, data.title), /*#__PURE__*/React.createElement("p", {
    className: "engagement__slogan"
  }, "\xAB ", data.slogan, " \xBB"), /*#__PURE__*/React.createElement("ul", {
    className: "engagement__rules"
  }, data.pillars.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, p))), /*#__PURE__*/React.createElement("button", {
    className: "engagement__exToggle",
    onClick: onToggle,
    "aria-expanded": isOpen
  }, isOpen ? 'Masquer les exemples' : 'Voir des exemples', /*#__PURE__*/React.createElement("span", {
    className: "engagement__exChev"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 14
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "engagement__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "engagement__bodyInner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "engagement__examples"
  }, /*#__PURE__*/React.createElement("div", {
    className: "engagement__exCol ok"
  }, /*#__PURE__*/React.createElement("div", {
    className: "engagement__exTitle ok"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\u2713"), " \xC0 faire"), /*#__PURE__*/React.createElement("ul", {
    className: "engagement__exList"
  }, data.examples.ok.map((e, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, e)))), /*#__PURE__*/React.createElement("div", {
    className: "engagement__exCol ko"
  }, /*#__PURE__*/React.createElement("div", {
    className: "engagement__exTitle ko"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\u2715"), " \xC0 \xE9viter"), /*#__PURE__*/React.createElement("ul", {
    className: "engagement__exList"
  }, data.examples.ko.map((e, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, e))))))));
}
function CharterSection() {
  const [openIdx, setOpenIdx] = useState(-1);
  return /*#__PURE__*/React.createElement("section", {
    className: "bf-section",
    id: "charte"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__overline"
  }, "La charte"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, "5 engagements, un cadre clair."), /*#__PURE__*/React.createElement("p", {
    className: "section__sub"
  }, "L'essentiel se lit d'un coup d'\u0153il. D\xE9pliez les exemples si besoin.")), /*#__PURE__*/React.createElement(Finalite, null), /*#__PURE__*/React.createElement("div", {
    className: "engagements"
  }, CHARTER.engagements.map((e, i) => /*#__PURE__*/React.createElement(EngagementCard, {
    key: e.n,
    data: e,
    isOpen: openIdx === i,
    onToggle: () => setOpenIdx(openIdx === i ? -1 : i)
  }))));
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
  return /*#__PURE__*/React.createElement("div", {
    className: "code-card",
    "data-hue": data.hue,
    style: {
      '--codeHue': `var(--bf-${data.hue}-2)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "code-card__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "code-card__id"
  }, data.id), /*#__PURE__*/React.createElement("div", {
    className: "code-card__label"
  }, data.label)), /*#__PURE__*/React.createElement("div", {
    className: "code-card__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "code-card__pitch"
  }, data.pitch), /*#__PURE__*/React.createElement("p", {
    className: "code-card__examples"
  }, data.examples), /*#__PURE__*/React.createElement("div", {
    className: "code-card__mention"
  }, "\xAB ", data.mention, " \xBB"), /*#__PURE__*/React.createElement("button", {
    className: 'code-card__copy' + (copied ? ' is-copied' : ''),
    onClick: handleCopy
  }, copied ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12
  }), " Copi\xE9") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "copy",
    size: 12
  }), " Copier la mention"))));
}
function CodesSection({
  onToast
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "bf-section bf-section--alt",
    id: "codes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bf-section__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__overline"
  }, "Transparence"), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, "Les 4 marquages IA."), /*#__PURE__*/React.createElement("p", {
    className: "section__sub"
  }, "Quatre codes simples pour signaler comment l'IA a contribu\xE9 \xE0 un contenu. Cliquez sur \xAB Copier la mention \xBB pour l'ins\xE9rer dans votre document.")), /*#__PURE__*/React.createElement("div", {
    className: "codes-grid"
  }, CHARTER.codes.map(c => /*#__PURE__*/React.createElement(CodeCard, {
    key: c.id,
    data: c,
    onCopy: onToast
  })))));
}
window.CodesSection = CodesSection;