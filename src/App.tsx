import { useState } from 'react'
import './App.css'

const IMG = {
  logo: 'https://egynaecologist.com/wp-content/uploads/2025/07/logo-final1.png',
  hero: 'https://egynaecologist.com/wp-content/uploads/2025/04/Gynae-22.png',
  doctor: 'https://egynaecologist.com/wp-content/uploads/2026/03/3X6A8269_resized.jpg',
  cqc: 'https://egynaecologist.com/wp-content/uploads/2026/03/CQC-e1774872482355.png',
  doctify: 'https://egynaecologist.com/wp-content/uploads/2026/03/Doctify.png',
  google: 'https://egynaecologist.com/wp-content/uploads/2026/03/google-review.jpg',
  gdpr: 'https://egynaecologist.com/wp-content/uploads/2026/03/GDPR-Complaint.png',
  tdl: 'https://egynaecologist.com/wp-content/uploads/2026/03/TDL.png',
  signatureRx: 'https://egynaecologist.com/wp-content/uploads/2026/03/SIgnature-Rx-e1774872543941.png',
  scanCom: 'https://egynaecologist.com/wp-content/uploads/2026/03/Scan-com.png',
  meddbase: 'https://egynaecologist.com/wp-content/uploads/2026/03/Meddbase.png',
  biomedge: 'https://egynaecologist.com/wp-content/uploads/2026/03/BiomEdge.png',
  anjum: 'https://egynaecologist.com/wp-content/uploads/2026/03/wiq7u1txch0.jpg',
  ayesha: 'https://egynaecologist.com/wp-content/uploads/2026/03/pexels-photo-6542682-6542682-scaled.jpg',
  amirtha: 'https://egynaecologist.com/wp-content/uploads/2026/03/Amirtha.png',
}

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const book = () => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {/* Header */}
      <header className="hdr">
        <div className="w hdr-inner">
          <img src={IMG.logo} alt="eGynaecologist" className="hdr-logo" />
          <div className="hdr-r">
            <a href="tel:+442071234567" className="hdr-phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Us
            </a>
            <button className="hdr-cta" onClick={book}>Book Consultation</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="w hero-grid">
          <div className="hero-text">
            <p className="hero-avail">Appointments available this week</p>
            <h1>Private gynaecology care at Harley Street <span>or online</span></h1>
            <p className="hero-sub">Specialist consultants. Same-week appointments. Clear pricing. No GP referral needed.</p>
            <div className="hero-btns">
              <button className="btn" onClick={book}>Book a consultation</button>
              <a href="tel:+442071234567" className="btn btn--outline">Call us</a>
            </div>
            <div className="hero-trust">
              <img src={IMG.cqc} alt="CQC Regulated" />
              <img src={IMG.doctify} alt="Doctify Excellent" />
              <img src={IMG.google} alt="Google 5.0" />
            </div>
          </div>
          <div className="hero-img-wrap">
            <img src={IMG.hero} alt="eGynaecologist Harley Street clinic" className="hero-img" />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="strip">
        <div className="w strip-inner">
          <div className="strip-item"><strong>5.0</strong> Google & Doctify rating</div>
          <div className="strip-dot" />
          <div className="strip-item"><strong>CQC</strong> Regulated practice</div>
          <div className="strip-dot" />
          <div className="strip-item"><strong>22 Harley Street</strong> London W1G</div>
        </div>
      </div>

      {/* How it works */}
      <section className="sec">
        <div className="w center">
          <p className="tag">How it works</p>
          <h2>Three simple steps</h2>
          <div className="steps-card">
            <div className="steps">
              {[
                { n: '1', t: 'Book online', d: 'Choose in-person or remote. No referral needed. Complete a short questionnaire so we can match you with the right consultant.' },
                { n: '2', t: 'See your consultant', d: 'Meet a specialist gynaecologist at Harley Street or via secure video link. Focused consultations with clear outcomes.' },
                { n: '3', t: 'Get your plan', d: 'Receive a personalised treatment plan, investigations and prescriptions if needed, and ongoing support from one care team.' },
              ].map(s => (
                <div className="step" key={s.n}>
                  <div className="step-n">{s.n}</div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* About / credentials */}
      <section className="sec">
        <div className="w">
          <div className="about-card"><div className="about-grid">
          <img src={IMG.doctor} alt="Consultant Gynaecologist" className="about-img" />
          <div className="about-text">
            <p className="tag">Your consultant</p>
            <h2>Specialist-led care you can trust</h2>
            <p className="about-desc">Every consultation is led by an expert consultant gynaecologist practising evidence-based medicine, with subspecialist expertise across the full range of women's health.</p>
            <ul className="creds">
              <li>GMC-registered and revalidated Consultants</li>
              <li>MRCOG qualified and higher subspecialist training</li>
              <li>CQC-regulated Harley Street practice</li>
              <li>On-site consultant led diagnostics</li>
              <li>Digital-first with AI-powered triaging</li>
              <li>Recognised by major health insurers</li>
            </ul>
            <button className="btn" onClick={book}>Book with a specialist</button>
          </div>
        </div></div></div>
      </section>

      {/* Why us */}
      <section className="sec">
        <div className="w center">
          <p className="tag">Why eGynaecologist</p>
          <h2>What sets us apart</h2>
          <div className="cards">
            {[
              { t: 'Remote & in-person', d: 'Consultations via secure video call or at our Harley Street clinic.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
              { t: 'Same-week appointments', d: 'Most patients are seen within 5 working days.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> },
              { t: 'Clear pricing', d: 'Transparent fees. No hidden charges or surprise bills.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
              { t: 'One-stop diagnostics', d: 'Ultrasound, colposcopy, and hysteroscopy on-site.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
            ].map((c, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{c.icon}</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA break */}
      <div className="cta-break">
        <div className="w center">
          <h2>Ready to take the next step?</h2>
          <p>Book a consultation today -- no referral needed, appointments available this week.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <button className="btn" onClick={book}>Book your consultation</button>
            <a href="tel:+442071234567" className="btn btn--outline">Prefer to call?</a>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <section className="sec">
        <div className="w center">
          <p className="tag">Pricing</p>
          <h2>Clear fees, no surprises</h2>
          <p className="sec-sub">All prices include your consultation and follow-up summary.</p>
          <div className="prices">
            {[
              { title: 'Remote', price: '250', note: '30-min video consultation', items: ['Pre-assessment questionnaire', 'Self-Collect tests', 'Written summary & plan', 'Digital prescriptions if needed'], pop: false },
              { title: 'In-Person', price: '275', note: 'Harley Street clinic visit', items: ['Everything in Remote, plus:', 'Physical examination', 'On-site diagnostics available', 'Same-day results where possible'], pop: true },
              { title: 'Care Bundles', price: '330', note: 'Comprehensive packages', items: ['PCOS, Endometriosis, Fertility, Recurrent Miscarriages', 'Sexual health screening, Coil fitting or Removals', 'Well Woman checks, Fibroid monitoring, Menopause', 'Cancer Screening, BRCA tests, Lynch syndrome tests'], pop: false, from: true },
            ].map((p, i) => (
              <div className={`price-card ${p.pop ? 'price-card--pop' : ''}`} key={i}>
                {p.pop && <div className="price-badge">Most popular</div>}
                <h3>{p.title}</h3>
                <div className="price-val">{p.from ? 'From ' : ''}&pound;{p.price}</div>
                <p className="price-note">{p.note}</p>
                <ul>{p.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
                <button className="btn btn--full" onClick={book}>Book {p.title.toLowerCase()}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="sec">
        <div className="w center">
          <p className="tag">Patient reviews</p>
          <h2>Trusted by women across London</h2>
          <div className="reviews">
            {[
              { q: 'I was so impressed with the level of care. The consultant was incredibly knowledgeable and took time to explain everything thoroughly. The whole process was seamless.', name: 'Amirtha D.', src: 'Doctify', img: IMG.amirtha },
              { q: 'The online consultation was incredibly convenient. I was seen within 3 days, the doctor was thorough and compassionate, and I had my treatment plan the same day.', name: 'Anjum A.', src: 'Doctify', img: IMG.anjum },
              { q: 'From the pre-consultation questionnaire to the follow-up, everything was seamless. I felt heard and cared for throughout.', name: 'Ayesha A.', src: 'Google', img: IMG.ayesha },
            ].map((r, i) => (
              <div className="review" key={i}>
                <div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p>"{r.q}"</p>
                <div className="review-who">
                  <img src={r.img} alt={r.name} />
                  <div><strong>{r.name}</strong><span>{r.src}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec">
        <div className="w center">
          <p className="tag">Questions</p>
          <h2>Frequently asked questions</h2>
          <div className="faq-card">
            {[
              { q: 'Is an online consultation as thorough as in-person?', a: 'Yes. Our pre-assessment gathers detailed information beforehand so the consultant can focus on diagnosis. If a physical exam is needed, we arrange an in-person follow-up at no rebooking fee.' },
              { q: 'Do I need a GP referral?', a: 'No. You can book directly. If you have a referral letter or previous results, you can upload them during booking.' },
              { q: 'How quickly can I be seen?', a: 'Most patients are seen within 3-5 working days. We often have same-week availability.' },
              { q: 'Is this covered by health insurance?', a: 'Most of our consultants are recognised by all major insurers. Self-pay patients benefit from clear, upfront pricing.' },
              { q: 'What happens after my consultation?', a: 'You receive a written summary and treatment plan. Prescriptions are issued digitally. Follow-ups are arranged by our care team.' },
              { q: 'What is the CQC?', a: 'The Care Quality Commission is the independent regulator of health and social care in England. Our registration means we meet rigorous standards for safety and patient care.' },
            ].map((f, i) => (
              <div className="faq" key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <span className={`faq-icon ${openFaq === i ? 'open' : ''}`}>+</span>
                </button>
                <div className={`faq-a ${openFaq === i ? 'open' : ''}`}><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="sec sec--dark" id="book">
        <div className="w form-grid">
          <div className="form-info">
            <h2>Book your consultation</h2>
            <p>We will get back to you within 2 hours during working hours.</p>
            <ul className="form-promises">
              <li>Response within 2 hours</li>
              <li>Same-week appointments</li>
              <li>GDPR protected</li>
              <li>No hidden fees</li>
            </ul>
            <p className="form-call">Or call: <a href="tel:+442071234567">+44 207 123 4567</a></p>
          </div>
          <div className="form-card">
            <h3>Request an appointment</h3>
            <form onSubmit={e => e.preventDefault()}>
              <label>Full Name *<input type="text" placeholder="Your full name" required /></label>
              <label>Phone Number *<input type="tel" placeholder="+44 7XXX XXXXXX" required /></label>
              <label>Email Address *<input type="email" placeholder="your@email.com" required /></label>
              <label>Consultation Type *
                <select required defaultValue="">
                  <option value="" disabled>Select type</option>
                  <option>Remote Consultation (GBP 250)</option>
                  <option>In-Person at Harley Street (GBP 275)</option>
                  <option>Not sure -- help me choose</option>
                </select>
              </label>
              <button type="submit" className="btn btn--full btn--pink">Request appointment</button>
              <p className="form-fine">No payment required now.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Partners */}
      <div className="partners">
        <p>Trusted partners</p>
        <div className="w partners-logos">
          {[IMG.tdl, IMG.signatureRx, IMG.scanCom, IMG.meddbase, IMG.biomedge].map((s, i) => <img src={s} alt="" key={i} />)}
        </div>
      </div>

      {/* Footer */}
      <footer className="foot">
        <div className="w">
          <div className="foot-badges"><img src={IMG.cqc} alt="CQC" /><img src={IMG.gdpr} alt="GDPR" /></div>
          <p>22 Harley Street (Suite G&H), London W1G 9PH -- info@egynaecologist.com</p>
          <p>&copy; 2026 eGynaecologist | Rotunda-Hygeia Ltd | Reg No 12274363, England</p>
        </div>
      </footer>

      {/* Mobile sticky */}
      <div className="mob-cta">
        <button className="btn" onClick={book}>Book now</button>
        <a href="tel:+442071234567" className="btn btn--outline">Call</a>
      </div>
    </>
  )
}
