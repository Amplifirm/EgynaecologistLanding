import { useState } from 'react'
import './version-b.css'

const IMAGES = {
  logo: 'https://egynaecologist.com/wp-content/uploads/2025/07/logo-final1.png',
  doctor: 'https://egynaecologist.com/wp-content/uploads/2026/03/3X6A8269_resized.jpg',
  cqc: 'https://egynaecologist.com/wp-content/uploads/2026/03/CQC-e1774872482355.png',
  doctify: 'https://egynaecologist.com/wp-content/uploads/2026/03/Doctify.png',
  gdpr: 'https://egynaecologist.com/wp-content/uploads/2026/03/GDPR-Complaint.png',
  stelios: 'https://egynaecologist.com/wp-content/uploads/2026/03/stelios.png',
  anjum: 'https://egynaecologist.com/wp-content/uploads/2026/03/wiq7u1txch0.jpg',
}

const CONCERNS = [
  { id: 'pcos', label: 'PCOS' },
  { id: 'endometriosis', label: 'Endometriosis' },
  { id: 'heavy-periods', label: 'Heavy Periods' },
  { id: 'fertility', label: 'Fertility' },
  { id: 'menopause', label: 'Menopause' },
  { id: 'pelvic-pain', label: 'Pelvic Pain' },
  { id: 'fibroids', label: 'Fibroids' },
  { id: 'sti', label: 'STI Screening' },
  { id: 'contraception', label: 'Contraception' },
  { id: 'other', label: 'Something Else' },
]

export default function VersionB() {
  const [step, setStep] = useState(0)
  const [intent, setIntent] = useState('')
  const [concern, setConcern] = useState('')
  const [consultType, setConsultType] = useState('')
  const [expandedDoc, setExpandedDoc] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleIntent = (value: string) => { setIntent(value); setStep(1) }
  const handleConcern = (value: string) => { setConcern(value); setStep(2) }
  const handleConsultType = (value: string) => { setConsultType(value); setStep(3) }
  const goBack = () => { if (step > 0) setStep(step - 1) }
  const startOver = () => { setStep(0); setIntent(''); setConcern(''); setConsultType('') }

  return (
    <div className="vb">
      <header className="vb-topbar">
        <div className="vb-topbar-inner">
          <img src={IMAGES.logo} alt="eGynaecologist" className="vb-topbar-logo" />
          <a href="tel:+442071234567" className="vb-topbar-phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +44 207 123 4567
          </a>
        </div>
      </header>

      <section className="vb-matcher">
        <div className="vb-progress-bar"><div className="vb-progress-fill" style={{ width: `${((step + 1) / 4) * 100}%` }} /></div>
        <div className="vb-progress-dots">{[0,1,2,3].map(i => <span key={i} className={`vb-dot ${step >= i ? 'active' : ''}`} />)}</div>

        <div className={`vb-matcher-step ${step === 0 ? 'visible' : 'hidden'}`}>
          <h1>Find the Right Consultation for You</h1>
          <p className="vb-matcher-sub">Answer a few quick questions and we will match you with the right specialist consultation.</p>
          <div className="vb-intent-grid">
            <button className="vb-intent-card" onClick={() => handleIntent('concern')}>
              <span className="vb-intent-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span>
              <span className="vb-intent-title">I have a specific concern</span>
              <span className="vb-intent-desc">Symptoms, a condition, or something that needs investigating</span>
            </button>
            <button className="vb-intent-card" onClick={() => handleIntent('checkup')}>
              <span className="vb-intent-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></span>
              <span className="vb-intent-title">I want a general check-up</span>
              <span className="vb-intent-desc">Annual well-woman exam, screening, or preventive care</span>
            </button>
            <button className="vb-intent-card" onClick={() => handleIntent('second-opinion')}>
              <span className="vb-intent-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
              <span className="vb-intent-title">I need a second opinion</span>
              <span className="vb-intent-desc">Review an existing diagnosis or explore alternative options</span>
            </button>
          </div>
          <div className="vb-matcher-trust"><img src={IMAGES.cqc} alt="CQC" /><span>CQC Regulated</span><span className="vb-trust-sep">|</span><span>5.0 on Doctify</span><span className="vb-trust-sep">|</span><span>Harley Street, London</span></div>
        </div>

        <div className={`vb-matcher-step ${step === 1 ? 'visible' : 'hidden'}`}>
          <button className="vb-back-btn" onClick={goBack}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Back</button>
          <h2>{intent === 'concern' ? 'What area concerns you most?' : intent === 'checkup' ? 'What type of check-up?' : 'What would you like a second opinion on?'}</h2>
          <p className="vb-matcher-sub">Select the closest match. Your consultant will discuss the details with you.</p>
          <div className="vb-chips-grid">{CONCERNS.map(c => <button key={c.id} className={`vb-chip ${concern === c.id ? 'selected' : ''}`} onClick={() => handleConcern(c.id)}>{c.label}</button>)}</div>
        </div>

        <div className={`vb-matcher-step ${step === 2 ? 'visible' : 'hidden'}`}>
          <button className="vb-back-btn" onClick={goBack}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Back</button>
          <h2>How would you like to be seen?</h2>
          <p className="vb-matcher-sub">Both options are led by a consultant gynaecologist.</p>
          <div className="vb-consult-grid">
            <button className={`vb-consult-card ${consultType === 'remote' ? 'selected' : ''}`} onClick={() => handleConsultType('remote')}>
              <div className="vb-consult-header"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg><span className="vb-consult-price">From GBP 150</span></div>
              <h3>Remote Consultation</h3>
              <ul><li>30-minute secure video call</li><li>AI-powered pre-assessment</li><li>Written summary and treatment plan</li><li>Prescriptions issued digitally</li></ul>
            </button>
            <button className={`vb-consult-card ${consultType === 'in-person' ? 'selected' : ''}`} onClick={() => handleConsultType('in-person')}>
              <div className="vb-consult-header"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg><span className="vb-consult-price">From GBP 250</span></div>
              <h3>In-Person at Harley Street</h3>
              <ul><li>Full consultation with examination</li><li>On-site diagnostics available</li><li>Ultrasound, colposcopy, hysteroscopy</li><li>Same-day results where possible</li></ul>
            </button>
          </div>
        </div>

        <div className={`vb-matcher-step ${step === 3 ? 'visible' : 'hidden'}`}>
          <button className="vb-back-btn" onClick={goBack}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Back</button>
          <h2>Almost there. Let us know how to reach you.</h2>
          <p className="vb-matcher-sub">We will confirm your appointment within 2 hours.</p>
          <div className="vb-matcher-summary">
            <span className="vb-summary-tag">{consultType === 'remote' ? 'Remote' : 'In-Person'}</span>
            <span className="vb-summary-tag">{CONCERNS.find(c => c.id === concern)?.label || concern}</span>
            <button className="vb-summary-edit" onClick={startOver}>Change</button>
          </div>
          <form className="vb-matcher-form" onSubmit={e => e.preventDefault()}>
            <div className="vb-form-field"><label htmlFor="vb-name">Full Name</label><input type="text" id="vb-name" placeholder="Your full name" required /></div>
            <div className="vb-form-field"><label htmlFor="vb-phone">Phone Number</label><input type="tel" id="vb-phone" placeholder="+44 7XXX XXXXXX" required /></div>
            <div className="vb-form-field"><label htmlFor="vb-email">Email Address</label><input type="email" id="vb-email" placeholder="your@email.com" required /></div>
            <button type="submit" className="vb-submit-btn">Request My Appointment</button>
            <p className="vb-form-micro">No payment required now. We will call to confirm.</p>
          </form>
          <div className="vb-matcher-badges"><img src={IMAGES.cqc} alt="CQC" /><img src={IMAGES.doctify} alt="Doctify" /><img src={IMAGES.gdpr} alt="GDPR" /></div>
        </div>
      </section>

      <section className="vb-below-fold">
        <div className="vb-trust-strip"><div className="vb-trust-strip-inner"><span>CQC Regulated</span><span className="vb-strip-sep" /><span>5,000+ Patients Consulted</span><span className="vb-strip-sep" /><span>5.0 on Doctify and Google</span><span className="vb-strip-sep" /><span>22 Harley Street, London W1G</span></div></div>
        <div className="vb-doc-strip"><div className="vb-doc-strip-inner">
          <img src={IMAGES.doctor} alt="Consultant" className="vb-doc-thumb" />
          <div className="vb-doc-strip-text">
            <p className="vb-doc-headline">Every consultation is led by a GMC-registered, MRCOG-qualified consultant gynaecologist.</p>
            <button className="vb-doc-toggle" onClick={() => setExpandedDoc(!expandedDoc)}>{expandedDoc ? 'Show less' : 'See full credentials'} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: expandedDoc ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}><path d="M6 9l6 6 6-6"/></svg></button>
            <div className={`vb-doc-details ${expandedDoc ? 'open' : ''}`}><ul><li>GMC-registered Consultant Gynaecologists</li><li>MRCOG qualified with subspecialist training</li><li>CQC-regulated Harley Street practice</li><li>On-site diagnostics: ultrasound, colposcopy, hysteroscopy</li><li>AI-powered pre-consultation assessments</li><li>Recognised by major UK health insurers</li></ul></div>
          </div>
        </div></div>
        <div className="vb-reviews-section"><div className="vb-reviews-inner">
          <div className="vb-review-card"><div className="vb-review-stars">5.0</div><p>"A highly credible and well-structured consultant-led service. Strong subspecialist expertise with evidence-based, patient-centred care."</p><div className="vb-review-author"><img src={IMAGES.stelios} alt="Stelios D." className="vb-review-avatar" /><div><span className="vb-review-name">Stelios D.</span><span className="vb-review-source">Google</span></div></div></div>
          <div className="vb-review-card"><div className="vb-review-stars">5.0</div><p>"Incredibly convenient. Seen within 3 days, thorough and compassionate, treatment plan the same day."</p><div className="vb-review-author"><img src={IMAGES.anjum} alt="Anjum A." className="vb-review-avatar" /><div><span className="vb-review-name">Anjum A.</span><span className="vb-review-source">Doctify</span></div></div></div>
        </div></div>
        <div className="vb-faq-compact"><div className="vb-faq-compact-inner"><h3>Common Questions</h3>
          {[{ q: 'Do I need a GP referral?', a: 'No. You can book directly. Upload any referral letters or results during booking.' },{ q: 'Is online as thorough as in-person?', a: 'Yes. AI pre-assessment ensures focused consultations. If a physical exam is needed, we arrange it at no rebooking fee.' },{ q: 'Is this covered by insurance?', a: 'We are recognised by most major UK health insurers. Self-pay patients get clear, upfront pricing.' }].map((item, i) => (
            <div className="vb-faq-row" key={i}><button className="vb-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>{item.q}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}><path d="M6 9l6 6 6-6"/></svg></button><div className={`vb-faq-a ${openFaq === i ? 'open' : ''}`}><p>{item.a}</p></div></div>
          ))}
        </div></div>
        <div className="vb-fallback-cta"><p>Prefer to skip the quiz? <a href="tel:+442071234567">Call us directly</a> or <button onClick={() => { setStep(3); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>go straight to the booking form</button>.</p></div>
      </section>
      <footer className="vb-footer-minimal"><p>22 Harley Street (Suite G&H), London W1G 9PH</p><p>eGynaecologist | Rotunda-Hygeia Ltd | Reg. No 12274363, England</p></footer>
    </div>
  )
}
