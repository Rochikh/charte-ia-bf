/* Charte IA BF — Components
   Header / Hero / Charter / FAQ / Helpers
   Uses globals: CHARTER, FAQ
   ============================================================ */

const { useState, useEffect, useRef, useMemo } = React;

/* ---------- Tiny icon set ---------- */
function Icon({ name, size = 18, stroke = 2 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    plus:    <><path d="M12 5v14"/><path d="M5 12h14"/></>,
    chevron: <path d="M6 9l6 6 6-6"/>,
    search:  <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    close:   <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>,
    copy:    <><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></>,
    check:   <path d="M20 6 9 17l-5-5"/>,
    share:   <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98"/><path d="m15.41 6.51-6.82 3.98"/></>,
    compass: <><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></>,
    shield:  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    eye:     <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></>,
    book:    <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>,
    clipboard:<><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></>,
    check2:  <><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></>,
    leaf:    <><path d="M11 20A7 7 0 0 1 4 13c0-2.5 2-5 3-7 .5-1 2-3 4-3 4 0 9 5 9 11 0 3.5-3 7-9 7z"/><path d="M2 22s4-2 9-2"/></>,
    users:   <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    sparkle: <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></>,
    target:  <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>,
    warn:    <><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}
window.Icon = Icon;


/* ---------- Read progress bar ---------- */
function ReadProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="read-progress"><div style={{ width: pct + '%' }} /></div>;
}
window.ReadProgress = ReadProgress;


/* ---------- Header ---------- */
function Header({ active, onShare }) {
  const links = [
    { id: 'charte', label: 'La charte' },
    { id: 'codes', label: 'Marquages' },
    { id: 'outils', label: 'Assistants' },
    { id: 'faq', label: 'FAQ' }
  ];
  return (
    <header className="app-header">
      <div className="app-header__inner">
        <a className="app-header__logo" href="#top">
          <img src={(typeof window !== 'undefined' && window.__resources?.logoBf) || "assets/logo-bf.svg"} alt="Bruxelles Formation"/>
        </a>
        <div className="app-header__divider"></div>
        <div className="app-header__title">
          <small>Charte IA · V3</small>
          Usage de l'intelligence artificielle
        </div>
        <nav className="app-header__nav">
          {links.map(l => (
            <a key={l.id} href={'#' + l.id} className={active === l.id ? 'is-active' : ''}>
              {l.label}
            </a>
          ))}
        </nav>
        <button className="app-header__share" onClick={onShare}>
          <Icon name="share" size={14}/> Partager
        </button>
      </div>
    </header>
  );
}
window.Header = Header;


/* ---------- Hero ---------- */
function Hero() {
  const c = CHARTER.intro;
  const keys = [
    { c: 'var(--bf-jaune-2)', h: 110, r: -8, y: 14 },
    { c: 'var(--bf-vert-2)',  h: 150, r:  4, y: -6 },
    { c: 'var(--bf-turquoise-2)', h: 130, r: -3, y: 8 },
    { c: 'var(--bf-orange-2)', h: 160, r:  6, y: -2 },
    { c: 'var(--bf-fuchsia-2)', h: 120, r: -5, y: 10 },
    { c: 'var(--bf-bleu-2)',   h: 145, r:  3, y: -4 }
  ];
  return (
    <section className="hero" id="top">
      <div className="hero__overline">{c.label} · {c.version}</div>
      <h1 className="hero__title">L'IA à Bruxelles Formation, <em>clair, utile et assumé.</em></h1>
      <p className="hero__sub">{c.sub}</p>
      <div className="hero__meta">
        <span className="chip"><Icon name="target" size={14}/> 5 engagements</span>
        <span className="chip"><Icon name="eye" size={14}/> 4 marquages</span>
        <span className="chip"><Icon name="book" size={14}/> 50+ questions</span>
      </div>
      <div className="hero__keys" aria-hidden="true">
        {keys.map((k, i) => (
          <div key={i} className="hero__key" style={{
            background: k.c,
            height: k.h,
            transform: `rotate(${k.r}deg) translateY(${k.y}px)`
          }}/>
        ))}
      </div>
    </section>
  );
}
window.Hero = Hero;


/* ---------- Finalité block ---------- */
function Finalite() {
  return (
    <div className="finalite">
      <div className="finalite__mark">✦</div>
      <div>
        <div className="finalite__title">Finalité</div>
        <p className="finalite__text">{CHARTER.intro.finalite}</p>
      </div>
    </div>
  );
}
window.Finalite = Finalite;


/* ---------- Engagement card ---------- */
function EngagementCard({ data, isOpen, onToggle }) {
  return (
    <article className={'engagement' + (isOpen ? ' is-open' : '')} data-hue={data.hue}>
      <div className="engagement__main">
        <div className="engagement__num" style={{ background: 'var(--engHue)' }}>
          {data.n}
        </div>
        <div className="engagement__text">
          <h3 className="engagement__title">{data.title}</h3>
          <p className="engagement__slogan">« {data.slogan} »</p>
          <ul className="engagement__rules">
            {data.pillars.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
          <button className="engagement__exToggle" onClick={onToggle} aria-expanded={isOpen}>
            {isOpen ? 'Masquer les exemples' : 'Voir des exemples'}
            <span className="engagement__exChev"><Icon name="chevron" size={14}/></span>
          </button>
        </div>
      </div>
      <div className="engagement__body">
        <div className="engagement__bodyInner">
          <div className="engagement__examples">
            <div className="engagement__exCol ok">
              <div className="engagement__exTitle ok"><span className="dot">✓</span> À faire</div>
              <ul className="engagement__exList">
                {data.examples.ok.map((e, i) => <li key={i}>{e}</li>)}
              </ul>
            </div>
            <div className="engagement__exCol ko">
              <div className="engagement__exTitle ko"><span className="dot">✕</span> À éviter</div>
              <ul className="engagement__exList">
                {data.examples.ko.map((e, i) => <li key={i}>{e}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function CharterSection() {
  const [openIdx, setOpenIdx] = useState(-1);
  return (
    <section className="bf-section" id="charte">
      <div className="section__head">
        <div className="section__overline">La charte</div>
        <h2 className="section__title">5 engagements, un cadre clair.</h2>
        <p className="section__sub">
          L'essentiel se lit d'un coup d'œil. Dépliez les exemples si besoin.
        </p>
      </div>
      <Finalite/>
      <div className="engagements">
        {CHARTER.engagements.map((e, i) => (
          <EngagementCard
            key={e.n}
            data={e}
            isOpen={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}
window.CharterSection = CharterSection;


/* ---------- Codes section ---------- */
function CodeCard({ data, onCopy }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard?.writeText(data.mention);
    setCopied(true);
    onCopy?.('Mention copiée : ' + data.id);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="code-card" data-hue={data.hue} style={{ '--codeHue': `var(--bf-${data.hue}-2)` }}>
      <div className="code-card__top">
        <div className="code-card__id">{data.id}</div>
        <div className="code-card__label">{data.label}</div>
      </div>
      <div className="code-card__body">
        <p className="code-card__pitch">{data.pitch}</p>
        <p className="code-card__examples">{data.examples}</p>
        <div className="code-card__mention">« {data.mention} »</div>
        <button className={'code-card__copy' + (copied ? ' is-copied' : '')} onClick={handleCopy}>
          {copied ? <><Icon name="check" size={12}/> Copié</> : <><Icon name="copy" size={12}/> Copier la mention</>}
        </button>
      </div>
    </div>
  );
}

function CodesSection({ onToast }) {
  return (
    <section className="bf-section bf-section--alt" id="codes">
      <div className="bf-section__inner">
        <div className="section__head">
          <div className="section__overline">Transparence</div>
          <h2 className="section__title">Les 4 marquages IA.</h2>
          <p className="section__sub">
            Quatre codes simples pour signaler comment l'IA a contribué à un contenu.
            Cliquez sur « Copier la mention » pour l'insérer dans votre document.
          </p>
        </div>
        <div className="codes-grid">
          {CHARTER.codes.map(c => (
            <CodeCard key={c.id} data={c} onCopy={onToast}/>
          ))}
        </div>
      </div>
    </section>
  );
}
window.CodesSection = CodesSection;
