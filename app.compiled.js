/* Charte IA BF — Main App */

const {
  useState: useS,
  useEffect: useE
} = React;
function App() {
  const [activeSection, setActiveSection] = useS('charte');
  const [toast, setToast] = useS(null);
  const showToast = msg => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  // Track active section via IntersectionObserver
  useE(() => {
    const sections = ['charte', 'codes', 'outils', 'faq'];
    const els = sections.map(id => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, {
      rootMargin: '-25% 0px -55% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Charte IA — Bruxelles Formation',
          url
        });
        return;
      } catch (e) {/* user cancelled */}
    }
    try {
      await navigator.clipboard.writeText(url);
      showToast('Lien copié dans le presse-papier');
    } catch (e) {
      showToast('Lien : ' + url);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ReadProgress, null), /*#__PURE__*/React.createElement(Header, {
    active: activeSection,
    onShare: handleShare
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(CharterSection, null), /*#__PURE__*/React.createElement(CodesSection, {
    onToast: showToast
  }), /*#__PURE__*/React.createElement(HelpersSection, {
    onToast: showToast
  }), /*#__PURE__*/React.createElement(FaqSection, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement("div", {
    className: 'toast' + (toast ? ' is-visible' : '')
  }, toast));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));