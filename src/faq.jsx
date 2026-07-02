/* Charte IA BF — Helpers (decision tools) and FAQ
   ============================================================ */

const { useState: useStateH, useMemo: useMemoH, useEffect: useEffectH, useRef: useRefH } = React;


/* ---------- Helper 1: Quel outil utiliser ? ---------- */
function ToolHelper() {
  const [data, setData] = useStateH(null); // 'public' | 'interne' | 'sensible' | null

  const results = {
    public: {
      tone: 'ok',
      title: 'Tous outils autorisés',
      body: <>Vos données sont publiques : Copilot M365, ChatGPT, Claude, Gemini conviennent. <strong>Privilégiez Copilot M365</strong> pour rester dans le cadre BF.</>
    },
    interne: {
      tone: 'warn',
      title: 'Copilot M365 uniquement',
      body: <>Pour les données BF internes mais non sensibles : <strong>Copilot M365 avec votre compte BF</strong>. N'utilisez pas un outil externe, même « juste pour tester ».</>
    },
    sensible: {
      tone: 'ko',
      title: 'Copilot M365 + validation',
      body: <>Données RH, apprenant·e·s, stratégiques, financières : <strong>Copilot M365 + accord hiérarchique</strong> si diffusion. En cas de doute, anonymisez ou ne mettez pas.</>
    }
  };

  return (
    <div className="helper">
      <div className="helper__head">
        <div className="helper__icon"><Icon name="shield" size={22}/></div>
        <div>
          <h3 className="helper__title">Quel outil utiliser ?</h3>
          <p className="helper__sub">Selon la nature de vos données.</p>
        </div>
      </div>
      <p className="helper__step">1. Vos données sont…</p>
      <div className="helper__choices">
        {[
          { id: 'public', label: 'Publiques' },
          { id: 'interne', label: 'Internes BF' },
          { id: 'sensible', label: 'Sensibles / RH' }
        ].map(c => (
          <button
            key={c.id}
            className={'helper__choice' + (data === c.id ? ' is-active' : '')}
            onClick={() => setData(c.id)}>
            {c.label}
          </button>
        ))}
      </div>
      {data && (
        <div className={'helper__result ' + results[data].tone} style={{ marginTop: 20 }}>
          <div className="helper__resultTitle">
            <Icon name={results[data].tone === 'ok' ? 'check2' : results[data].tone === 'warn' ? 'warn' : 'warn'} size={16}/>
            {results[data].title}
          </div>
          <div>{results[data].body}</div>
          <button className="helper__reset" onClick={() => setData(null)}>Recommencer</button>
        </div>
      )}
    </div>
  );
}


/* ---------- Helper 2: Quel marquage utiliser ? ---------- */
function MarkupHelper({ onToast }) {
  const [step, setStep] = useStateH(1);
  const [contribution, setContribution] = useStateH(null);

  const codes = {
    light:    { id: 'IA-A', tone: 'ok',   label: 'Assistance', need: false },
    partial:  { id: 'IA-C', tone: 'warn', label: 'Co-construction', need: true },
    major:    { id: 'IA-G', tone: 'warn', label: 'Génération', need: true },
    analysis: { id: 'IA-D', tone: 'warn', label: 'Décision / Analyse', need: true }
  };
  const c = contribution ? codes[contribution] : null;
  const codeData = c ? CHARTER.codes.find(x => x.id === c.id) : null;

  const copyMention = () => {
    if (codeData) {
      navigator.clipboard?.writeText(codeData.mention);
      onToast?.('Mention copiée : ' + codeData.id);
    }
  };

  return (
    <div className="helper">
      <div className="helper__head">
        <div className="helper__icon" style={{ background: 'var(--bf-bleu-3)', color: 'var(--bf-blue)' }}>
          <Icon name="eye" size={22}/>
        </div>
        <div>
          <h3 className="helper__title">Quel marquage utiliser ?</h3>
          <p className="helper__sub">Trouvez le bon code en 2 clics.</p>
        </div>
      </div>
      <p className="helper__step">L'IA a…</p>
      <div className="helper__choices">
        {[
          { id: 'light', label: 'Juste corrigé / reformulé' },
          { id: 'partial', label: 'Structuré une partie' },
          { id: 'major', label: 'Produit l\'essentiel' },
          { id: 'analysis', label: 'Aidé à analyser' }
        ].map(c => (
          <button
            key={c.id}
            className={'helper__choice' + (contribution === c.id ? ' is-active' : '')}
            onClick={() => setContribution(c.id)}>
            {c.label}
          </button>
        ))}
      </div>
      {c && (
        <div className={'helper__result ' + c.tone} style={{ marginTop: 20 }}>
          <div className="helper__resultTitle">
            <Icon name={c.need ? 'eye' : 'check2'} size={16}/>
            {c.need ? 'Marquage requis' : 'Marquage facultatif'}
            <span className="helper__resultCode">{c.id}</span>
          </div>
          <div style={{ marginBottom: 10 }}>
            {c.need
              ? <>Signalez l'usage avec le code <strong>{c.id}</strong> ({c.label}).</>
              : <>Pour une simple correction ou reformulation, le signalement n'est pas obligatoire — sauf document à forte valeur.</>
            }
          </div>
          {codeData && (
            <button className="code-card__copy" onClick={copyMention} style={{ marginTop: 4 }}>
              <Icon name="copy" size={12}/> Copier la mention type
            </button>
          )}
          <button className="helper__reset" onClick={() => setContribution(null)}>Recommencer</button>
        </div>
      )}
    </div>
  );
}


function HelpersSection({ onToast }) {
  return (
    <section className="bf-section" id="outils">
      <div className="section__head">
        <div className="section__overline">Assistants pratiques</div>
        <h2 className="section__title">2 outils pour décider en 10 secondes.</h2>
        <p className="section__sub">
          Plutôt que de chercher dans la charte, posez votre situation —
          la bonne règle s'affiche.
        </p>
      </div>
      <div className="helpers">
        <ToolHelper/>
        <MarkupHelper onToast={onToast}/>
      </div>
    </section>
  );
}
window.HelpersSection = HelpersSection;


/* ============================================================
   FAQ Section
   ============================================================ */

// turn the answer string into nodes — supports **bold**, • bullets, line breaks
function renderAnswer(text, query) {
  const highlight = (str) => {
    if (!query || query.length < 2) return str;
    const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    const parts = str.split(re);
    return parts.map((p, i) => re.test(p) ? <mark key={i}>{p}</mark> : p);
  };

  const boldify = (str) => {
    // split on **...**
    const parts = str.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((p, i) => {
      if (p.startsWith('**') && p.endsWith('**')) {
        return <strong key={i}>{highlight(p.slice(2, -2))}</strong>;
      }
      return <React.Fragment key={i}>{highlight(p)}</React.Fragment>;
    });
  };

  // split text into blocks: paragraphs vs bullet groups
  const lines = text.split('\n');
  const blocks = [];
  let bulletBuf = [];
  const flushBullets = () => {
    if (bulletBuf.length) {
      blocks.push({ type: 'ul', items: [...bulletBuf] });
      bulletBuf = [];
    }
  };
  lines.forEach(line => {
    if (line.startsWith('• ')) bulletBuf.push(line.slice(2));
    else {
      flushBullets();
      if (line.trim()) blocks.push({ type: 'p', text: line });
    }
  });
  flushBullets();

  return blocks.map((b, i) => {
    if (b.type === 'ul') {
      return (
        <ul key={i}>
          {b.items.map((it, j) => <li key={j}>{boldify(it)}</li>)}
        </ul>
      );
    }
    return <p key={i}>{boldify(b.text)}</p>;
  });
}

function FaqItem({ item, query }) {
  const [open, setOpen] = useStateH(false);
  // Auto-open if matches search query
  useEffectH(() => {
    if (query && query.length >= 2) {
      const inQ = item.q.toLowerCase().includes(query.toLowerCase());
      const inA = item.a.toLowerCase().includes(query.toLowerCase());
      if (inA && !inQ) setOpen(true);
    }
  }, [query]);

  const highlight = (str) => {
    if (!query || query.length < 2) return str;
    const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    const parts = str.split(re);
    return parts.map((p, i) => re.test(p) ? <mark key={i}>{p}</mark> : p);
  };

  return (
    <div className={'faq-item' + (open ? ' is-open' : '')}>
      <div className="faq-item__q" onClick={() => setOpen(o => !o)} role="button" aria-expanded={open}>
        <span className="faq-item__q__text">{highlight(item.q)}</span>
        <span className="faq-item__chev"><Icon name="chevron" size={16}/></span>
      </div>
      <div className="faq-item__a">
        <div className="faq-item__aInner">
          <div className="faq-item__aBody">
            {renderAnswer(item.a, query)}
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqSection() {
  const [query, setQuery] = useStateH('');
  const [activeCat, setActiveCat] = useStateH('all');
  const searchRef = useRefH(null);

  // Keyboard shortcut: / focuses search
  useEffectH(() => {
    const onKey = (e) => {
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
      return { ...section, items };
    }).filter(Boolean);
  }, [query, activeCat]);

  const totalShown = filtered.reduce((s, sec) => s + sec.items.length, 0);
  const totalAll = FAQ.reduce((s, sec) => s + sec.items.length, 0);

  return (
    <section className="bf-section bf-section--alt" id="faq">
      <div className="bf-section__inner">
        <div className="section__head">
          <div className="section__overline">Foire aux questions</div>
          <h2 className="section__title">Toutes vos questions sur l'IA.</h2>
          <p className="section__sub">
            {totalAll} questions, classées par thème. Tapez <kbd style={{
              background: '#fff', border: '1px solid var(--border)', borderRadius: 4,
              padding: '1px 6px', fontFamily: 'var(--font-display)', fontSize: 12, color: 'var(--bf-blue)'
            }}>/</kbd> pour ouvrir la recherche.
          </p>
        </div>

        <div className="faq-toolbar">
          <label className="faq-search">
            <Icon name="search" size={16}/>
            <input
              ref={searchRef}
              type="text"
              placeholder="Rechercher dans la FAQ — ex. Copilot, données, transparence…"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {query && (
              <button className="faq-clear" onClick={() => setQuery('')}>Effacer</button>
            )}
          </label>
        </div>

        <div className="faq-cats">
          <button
            className={'faq-cat' + (activeCat === 'all' ? ' is-active' : '')}
            onClick={() => setActiveCat('all')}>
            Toutes <span className="faq-cat__count">{totalAll}</span>
          </button>
          {FAQ.map(sec => (
            <button
              key={sec.id}
              data-hue={sec.hue}
              className={'faq-cat' + (activeCat === sec.id ? ' is-active' : '')}
              onClick={() => setActiveCat(sec.id)}>
              <Icon name={sec.icon} size={13}/>
              {sec.label}
              <span className="faq-cat__count">{sec.items.length}</span>
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="faq-empty">
            Aucun résultat pour « {query} ». Essayez un autre mot-clé ou changez de catégorie.
          </div>
        ) : (
          filtered.map(sec => (
            <div key={sec.id} className="faq-section" id={'faq-' + sec.id}>
              <div className="faq-section__head">
                <div className="faq-section__dot" data-hue={sec.hue} style={{ background: 'var(--engHue)' }}>
                  <Icon name={sec.icon} size={18}/>
                </div>
                <h3 className="faq-section__title">{sec.label}</h3>
              </div>
              <div className="faq-list">
                {sec.items.map((it, i) => (
                  <FaqItem key={i} item={it} query={query}/>
                ))}
              </div>
            </div>
          ))
        )}

        {query && (
          <p style={{ textAlign: 'center', color: 'var(--fg-muted)', marginTop: 24, fontSize: 14 }}>
            {totalShown} résultat{totalShown > 1 ? 's' : ''} pour « {query} »
          </p>
        )}
      </div>
    </section>
  );
}
window.FaqSection = FaqSection;


/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="app-footer">
      <div className="app-footer__inner">
        <div className="app-footer__brand">
          <img src={(typeof window !== 'undefined' && window.__resources?.logoBf) || "assets/logo-bf.png"} alt="Bruxelles Formation"/>
          <p>Charte d'usage de l'intelligence artificielle · Version 3.</p>
          <p style={{ fontStyle: 'italic' }}>
            « Cette charte est évolutive et adaptée en fonction des usages,
            des retours d'expérience et du cadre réglementaire. »
          </p>
        </div>
        <div className="app-footer__col">
          <h4>Aller à</h4>
          <a href="#charte">La charte</a>
          <a href="#codes">Marquages IA</a>
          <a href="#outils">Assistants</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
      <div className="app-footer__bottom">
        <span>© Bruxelles Formation · Charte IA v3 · 2026</span>
        <span>Document évolutif, vos retours sont précieux</span>
      </div>
      <p className="app-footer__ia" style={{ maxWidth: '1200px', margin: '8px auto 0', fontSize: '11px', color: 'rgba(255,255,255,.4)', textAlign: 'center' }}>Contenu majoritairement généré par IA (marquage <a href="#codes" style={{ color: 'rgba(255,255,255,.55)' }}>IA-G</a>), relu et validé par le GT IA.</p>
    </footer>
  );
}
window.Footer = Footer;
