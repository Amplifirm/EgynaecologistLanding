import { Routes, Route, Link, useLocation } from 'react-router-dom'
import VersionA from './pages/VersionA'
import VersionB from './pages/VersionB'
import VersionC from './pages/VersionC'

const versions = [
  { path: '/versiona', label: 'A', name: 'Classic Conversion', color: '#2d6a4f' },
  { path: '/versionb', label: 'B', name: 'Guided Funnel', color: '#e11d48' },
  { path: '/versionc', label: 'C', name: 'Proof Wall', color: '#b45309' },
]

function VersionSwitcher() {
  const location = useLocation()
  const isVersionPage = versions.some(v => v.path === location.pathname)
  if (!isVersionPage) return null

  return (
    <nav className="switcher">
      <Link to="/" className="switcher-home">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back
      </Link>
      <div className="switcher-tabs">
        {versions.map(v => (
          <Link
            key={v.path}
            to={v.path}
            className={`switcher-tab ${location.pathname === v.path ? 'active' : ''}`}
            style={{ '--tab-color': v.color } as React.CSSProperties}
          >
            <span className="switcher-letter">{v.label}</span>
            <span className="switcher-name">{v.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

function Home() {
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-top-inner">
          <img src="https://egynaecologist.com/wp-content/uploads/2025/07/logo-final1.png" alt="eGynaecologist" className="home-logo" />
          <span className="home-top-label">Landing Page A/B Variants</span>
        </div>
      </div>

      <div className="home-inner">
        <div className="home-hero">
          <h1>Pick a variant.</h1>
          <p>Three approaches to the same brief. Same audit, same content, completely different conversion strategies.</p>
        </div>

        <div className="home-grid">
          <Link to="/versiona" className="hc" style={{ '--c': '#2d6a4f', '--c-soft': 'rgba(45,106,79,0.1)' } as React.CSSProperties}>
            <div className="hc-head">
              <span className="hc-letter">A</span>
              <div className="hc-tags">
                <span className="hc-tag">Playfair + Inter</span>
                <span className="hc-tag">Green / White</span>
              </div>
            </div>
            <h2>Classic Conversion</h2>
            <p>Full-length scroll page. Hero, proof bar, how-it-works, credentials, pricing, testimonials, FAQ, form. The kitchen sink, done right.</p>
            <div className="hc-stats">
              <div className="hc-stat"><span className="hc-stat-val">~8</span><span className="hc-stat-label">Screens</span></div>
              <div className="hc-stat"><span className="hc-stat-val">4</span><span className="hc-stat-label">Form fields</span></div>
              <div className="hc-stat"><span className="hc-stat-val">11</span><span className="hc-stat-label">Sections</span></div>
            </div>
            <div className="hc-foot">
              <span className="hc-cta">Open Version A</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </Link>

          <Link to="/versionb" className="hc" style={{ '--c': '#e11d48', '--c-soft': 'rgba(225,29,72,0.1)' } as React.CSSProperties}>
            <div className="hc-head">
              <span className="hc-letter">B</span>
              <div className="hc-tags">
                <span className="hc-tag">DM Sans</span>
                <span className="hc-tag">Navy / Coral</span>
              </div>
            </div>
            <h2>Guided Funnel</h2>
            <p>Interactive step-through quiz. User picks intent, concern, and consultation type. Form captures 3 fields with 2 already pre-selected.</p>
            <div className="hc-stats">
              <div className="hc-stat"><span className="hc-stat-val">~2</span><span className="hc-stat-label">Screens</span></div>
              <div className="hc-stat"><span className="hc-stat-val">3+2</span><span className="hc-stat-label">Form fields</span></div>
              <div className="hc-stat"><span className="hc-stat-val">4</span><span className="hc-stat-label">Steps</span></div>
            </div>
            <div className="hc-foot">
              <span className="hc-cta">Open Version B</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </Link>

          <Link to="/versionc" className="hc" style={{ '--c': '#b45309', '--c-soft': 'rgba(180,83,9,0.1)' } as React.CSSProperties}>
            <div className="hc-head">
              <span className="hc-letter">C</span>
              <div className="hc-tags">
                <span className="hc-tag">Source Serif + Inter</span>
                <span className="hc-tag">Black / Amber</span>
              </div>
            </div>
            <h2>Proof Wall</h2>
            <p>Social proof first. No hero image. Masonry wall of 8 reviews, compact credentials strip, ultra-minimal 3-field form. Editorial and sharp.</p>
            <div className="hc-stats">
              <div className="hc-stat"><span className="hc-stat-val">~3</span><span className="hc-stat-label">Screens</span></div>
              <div className="hc-stat"><span className="hc-stat-val">3</span><span className="hc-stat-label">Form fields</span></div>
              <div className="hc-stat"><span className="hc-stat-val">0</span><span className="hc-stat-label">Hero images</span></div>
            </div>
            <div className="hc-foot">
              <span className="hc-cta">Open Version C</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <VersionSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/versiona" element={<VersionA />} />
        <Route path="/versionb" element={<VersionB />} />
        <Route path="/versionc" element={<VersionC />} />
      </Routes>
    </>
  )
}

export default App
