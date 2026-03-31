import { useState } from 'react'
import './version-a.css'

const IMAGES = {
  logo: 'https://egynaecologist.com/wp-content/uploads/2025/07/logo-final1.png',
  hero: 'https://egynaecologist.com/wp-content/uploads/2025/11/Heena-Pic-scaled.jpg',
  doctor: 'https://egynaecologist.com/wp-content/uploads/2026/03/3X6A8269_resized.jpg',
  cqc: 'https://egynaecologist.com/wp-content/uploads/2026/03/CQC-e1774872482355.png',
  doctify: 'https://egynaecologist.com/wp-content/uploads/2026/03/Doctify.png',
  google: 'https://egynaecologist.com/wp-content/uploads/2026/03/google-review.jpg',
  gdpr: 'https://egynaecologist.com/wp-content/uploads/2026/03/GDPR-Complaint.png',
  tdl: 'https://egynaecologist.com/wp-content/uploads/2026/03/TDL.png',
  signatureRx: 'https://egynaecologist.com/wp-content/uploads/2026/03/SIgnature-Rx-e1774872543941.png',
  scanCom: 'https://egynaecologist.com/wp-content/uploads/2026/03/Scan-com.png',
  meddbase: 'https://egynaecologist.com/wp-content/uploads/2026/03/Meddbase.png',
  stelios: 'https://egynaecologist.com/wp-content/uploads/2026/03/stelios.png',
  anjum: 'https://egynaecologist.com/wp-content/uploads/2026/03/wiq7u1txch0.jpg',
  ayesha: 'https://egynaecologist.com/wp-content/uploads/2026/03/pexels-photo-6542682-6542682-scaled.jpg',
}

export default function VersionA() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const scrollToForm = () => {
    document.getElementById('va-book')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="va">
      <header className="va-header">
        <div className="va-container">
          <img src={IMAGES.logo} alt="eGynaecologist" className="va-header-logo" />
          <div className="va-header-right">
            <a href="tel:+442071234567" className="va-header-phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Us
            </a>
            <button className="va-header-cta" onClick={scrollToForm}>Book Consultation</button>
          </div>
        </div>
      </header>

      <section className="va-hero">
        <div className="va-container">
          <div className="va-hero-content">
            <div className="va-hero-badge"><span className="va-dot" />Appointments Available This Week</div>
            <h1>See a Harley Street Gynaecologist <span>Online or In-Person</span></h1>
            <p className="va-hero-sub">Expert women's healthcare from CQC-regulated consultants. Same-week appointments, AI-powered pre-assessments, and clear upfront pricing. No GP referral needed.</p>
            <div className="va-hero-actions">
              <button className="va-btn-primary" onClick={scrollToForm}>
                Book Your Consultation
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <a href="tel:+442071234567" className="va-btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call Now
              </a>
            </div>
            <div className="va-hero-trust">
              <div className="va-trust-item"><img src={IMAGES.cqc} alt="CQC Regulated" /><span>CQC Regulated</span></div>
              <div className="va-trust-item"><span className="va-trust-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><img src={IMAGES.doctify} alt="Doctify" /></div>
              <div className="va-trust-item"><img src={IMAGES.google} alt="Google Reviews" style={{ height: 24 }} /><span>5.0 on Google</span></div>
            </div>
          </div>
          <div className="va-hero-image-wrap">
            <img src={IMAGES.hero} alt="Consultant Gynaecologist at eGynaecologist, Harley Street" className="va-hero-image" />
            <div className="va-hero-float-card">
              <div className="va-float-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div><div className="va-float-label">Average wait time</div><div className="va-float-value">Under 5 days</div></div>
            </div>
          </div>
        </div>
      </section>

      <div className="va-proof-bar">
        <div className="va-container">
          <div className="va-proof-stat"><span className="va-number">5,000+</span><span className="va-desc">Patients<br/>Consulted</span></div>
          <div className="va-proof-stat"><span className="va-number">5.0</span><span className="va-desc">Google &<br/>Doctify Rating</span></div>
          <div className="va-proof-stat"><span className="va-number">CQC</span><span className="va-desc">Regulated<br/>Practice</span></div>
          <div className="va-proof-stat"><span className="va-number">22</span><span className="va-desc">Harley Street<br/>London W1G</span></div>
        </div>
      </div>

      <section className="va-section va-text-center">
        <div className="va-container">
          <span className="va-section-tag">How It Works</span>
          <h2 className="va-section-title">Three Steps to Expert Care</h2>
          <p className="va-section-desc">From booking to treatment plan -- simple, transparent, and designed around you.</p>
          <div className="va-steps-grid">
            <div className="va-step-card"><div className="va-step-number">1</div><h3>Book Online</h3><p>Choose remote or in-person. No GP referral needed. Fill in a short form and our AI-powered pre-assessment prepares your consultation.</p></div>
            <div className="va-step-card"><div className="va-step-number">2</div><h3>See Your Consultant</h3><p>Meet a specialist gynaecologist via secure video or at our Harley Street clinic. Focused, purposeful consultations with clear outcomes.</p></div>
            <div className="va-step-card"><div className="va-step-number">3</div><h3>Get Your Plan</h3><p>Receive a personalised treatment plan, prescriptions if needed, and ongoing support -- all from one integrated care team.</p></div>
          </div>
        </div>
      </section>

      <section className="va-section va-doctor-section">
        <div className="va-container">
          <span className="va-section-tag">Your Consultant</span>
          <h2 className="va-section-title">Expert Care You Can Trust</h2>
          <div className="va-doctor-grid">
            <img src={IMAGES.doctor} alt="Consultant Gynaecologist" className="va-doctor-image" />
            <div className="va-doctor-info">
              <h3>Specialist-Led Care</h3>
              <p className="va-doctor-title">Consultant Gynaecologists, Harley Street</p>
              <p className="va-doctor-bio">At eGynaecologist, every consultation is led by a GMC-registered consultant gynaecologist -- not a GP or junior doctor. Our team brings subspecialist expertise across the full range of women's health.</p>
              <ul className="va-credentials-list">
                <li><span className="va-check">&#10003;</span> GMC-registered Consultant Gynaecologists</li>
                <li><span className="va-check">&#10003;</span> MRCOG qualified with subspecialist training</li>
                <li><span className="va-check">&#10003;</span> CQC-regulated Harley Street practice</li>
                <li><span className="va-check">&#10003;</span> On-site diagnostics: ultrasound, colposcopy, hysteroscopy</li>
                <li><span className="va-check">&#10003;</span> Digital-first with AI-powered pre-assessments</li>
                <li><span className="va-check">&#10003;</span> Recognised by major health insurers</li>
              </ul>
              <button className="va-btn-primary" onClick={scrollToForm}>Book With a Specialist <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
            </div>
          </div>
        </div>
      </section>

      <section className="va-section">
        <div className="va-container va-text-center">
          <span className="va-section-tag">Why eGynaecologist</span>
          <h2 className="va-section-title">What Sets Us Apart</h2>
          <p className="va-section-desc">A modern, patient-centric approach to private gynaecology.</p>
          <div className="va-benefits-grid">
            <div className="va-benefit-card"><div className="va-benefit-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div><h4>Remote & In-Person</h4><p>Flexible consultations via secure video call or at our Harley Street clinic.</p></div>
            <div className="va-benefit-card"><div className="va-benefit-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div><h4>Same-Week Appointments</h4><p>No months-long waits. Most patients are seen within 5 working days.</p></div>
            <div className="va-benefit-card"><div className="va-benefit-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><h4>Clear Pricing</h4><p>Transparent fees from the start. Online consultation from GBP 150.</p></div>
            <div className="va-benefit-card"><div className="va-benefit-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div><h4>One-Stop Diagnostics</h4><p>Pelvic scans, colposcopy, and hysteroscopy available on-site.</p></div>
          </div>
        </div>
      </section>

      <div className="va-cta-banner">
        <div className="va-container">
          <h2>Ready to Take the Next Step?</h2>
          <p>Book a consultation today -- no referral needed, appointments available this week.</p>
          <div className="va-cta-banner-actions">
            <button className="va-btn-primary" onClick={scrollToForm}>Book Your Consultation <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
            <a href="tel:+442071234567" className="va-btn-secondary">Prefer to Call?</a>
          </div>
        </div>
      </div>

      <section className="va-section">
        <div className="va-container va-text-center">
          <span className="va-section-tag">Transparent Pricing</span>
          <h2 className="va-section-title">Clear Fees, No Surprises</h2>
          <p className="va-section-desc">Know exactly what you will pay before you book. All prices include your consultation and follow-up summary.</p>
          <div className="va-pricing-grid">
            <div className="va-pricing-card">
              <h4>Remote Consultation</h4>
              <div className="va-price">&pound;150</div>
              <div className="va-price-note">30-minute video consultation</div>
              <ul className="va-pricing-features"><li><span className="va-check">&#10003;</span> AI pre-assessment questionnaire</li><li><span className="va-check">&#10003;</span> Consultant gynaecologist</li><li><span className="va-check">&#10003;</span> Written summary & plan</li><li><span className="va-check">&#10003;</span> Prescriptions if needed</li></ul>
              <button className="va-btn-primary va-btn-full" onClick={scrollToForm}>Book Remote</button>
            </div>
            <div className="va-pricing-card va-featured">
              <h4>In-Person Consultation</h4>
              <div className="va-price">&pound;250</div>
              <div className="va-price-note">Harley Street clinic visit</div>
              <ul className="va-pricing-features"><li><span className="va-check">&#10003;</span> Everything in Remote, plus:</li><li><span className="va-check">&#10003;</span> Physical examination</li><li><span className="va-check">&#10003;</span> On-site diagnostics available</li><li><span className="va-check">&#10003;</span> Same-day results where possible</li></ul>
              <button className="va-btn-primary va-btn-full" onClick={scrollToForm}>Book In-Person</button>
            </div>
            <div className="va-pricing-card">
              <h4>Care Bundles</h4>
              <div className="va-price">From &pound;299</div>
              <div className="va-price-note">Comprehensive packages</div>
              <ul className="va-pricing-features"><li><span className="va-check">&#10003;</span> PCOS, Endometriosis, Fertility</li><li><span className="va-check">&#10003;</span> Sexual health screening</li><li><span className="va-check">&#10003;</span> Well Woman annual checks</li><li><span className="va-check">&#10003;</span> Menopause management</li></ul>
              <button className="va-btn-primary va-btn-full" onClick={scrollToForm}>View Bundles</button>
            </div>
          </div>
        </div>
      </section>

      <section className="va-section va-testimonials-section">
        <div className="va-container va-text-center">
          <span className="va-section-tag">Patient Reviews</span>
          <h2 className="va-section-title">What Our Patients Say</h2>
          <div className="va-testimonials-grid">
            {[
              { text: '"A highly credible and well-structured consultant-led service. Strong subspecialist expertise with evidence-based, patient-centred care through an effective hybrid model."', name: 'Stelios D.', source: 'Google Review', img: IMAGES.stelios },
              { text: '"The online consultation was incredibly convenient. I was seen within 3 days of booking, the doctor was thorough and compassionate, and I had my treatment plan the same day."', name: 'Anjum A.', source: 'Doctify Review', img: IMAGES.anjum },
              { text: '"From the pre-consultation questionnaire to the follow-up, everything was seamless. The consultant took time to explain my options clearly. I felt heard and cared for."', name: 'Ayesha A.', source: 'Google Review', img: IMAGES.ayesha },
            ].map((t, i) => (
              <div className="va-testimonial-card" key={i}>
                <div className="va-testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="va-testimonial-text">{t.text}</p>
                <div className="va-testimonial-author"><img src={t.img} alt={t.name} className="va-testimonial-avatar" /><div><div className="va-testimonial-name">{t.name}</div><div className="va-testimonial-source">{t.source}</div></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="va-section">
        <div className="va-container va-text-center">
          <span className="va-section-tag">Common Questions</span>
          <h2 className="va-section-title">Frequently Asked Questions</h2>
          <div className="va-faq-list">
            {[
              { q: 'Is an online consultation as thorough as in-person?', a: 'Yes. Our AI-powered pre-assessment gathers detailed information before your appointment, so the consultant can focus on diagnosis and advice. If a physical exam is needed, we arrange a seamless in-person follow-up at Harley Street at no rebooking fee.' },
              { q: 'Do I need a GP referral?', a: 'No referral is needed. You can book directly with us. If you have a referral letter or previous test results, you can upload them during booking to help your consultant prepare.' },
              { q: 'How quickly can I be seen?', a: 'Most patients are seen within 3-5 working days. We often have same-week availability for both remote and in-person appointments.' },
              { q: 'Is this covered by health insurance?', a: 'We are recognised by most major UK health insurers. Self-pay patients benefit from clear, upfront pricing with no hidden fees.' },
              { q: 'What happens after my consultation?', a: 'You receive a written summary and personalised treatment plan. Prescriptions are issued digitally. Follow-up appointments and diagnostics are arranged by our care team.' },
              { q: 'What is the CQC and why does it matter?', a: 'The Care Quality Commission is the independent regulator of health and social care in England. Our CQC registration means we meet rigorous standards for safety, effectiveness, and patient care.' },
            ].map((item, i) => (
              <div className="va-faq-item" key={i}>
                <button className="va-faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>{item.q}<span className={`va-faq-chevron ${openFaq === i ? 'open' : ''}`}>&#9660;</span></button>
                <div className={`va-faq-answer ${openFaq === i ? 'open' : ''}`}><p>{item.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="va-section va-form-section" id="va-book">
        <div className="va-container">
          <div className="va-form-grid">
            <div className="va-form-left">
              <h2>Book Your Consultation</h2>
              <p>Fill in the short form and we will get back to you within 2 hours during working hours. Or call us directly for immediate assistance.</p>
              <div className="va-form-promise">
                <div className="va-form-promise-item"><span className="va-promise-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span>Response within 2 hours</div>
                <div className="va-form-promise-item"><span className="va-promise-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></span>Same-week appointments available</div>
                <div className="va-form-promise-item"><span className="va-promise-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>Your data is GDPR protected</div>
                <div className="va-form-promise-item"><span className="va-promise-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span>No hidden fees -- clear pricing</div>
                <div className="va-form-promise-item"><span className="va-promise-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>Prefer to call? <a href="tel:+442071234567" style={{ color: '#fff', textDecoration: 'underline', marginLeft: 4 }}>+44 207 123 4567</a></div>
              </div>
            </div>
            <div className="va-form-card">
              <h3>Request an Appointment</h3>
              <form onSubmit={e => e.preventDefault()}>
                <div className="va-form-group"><label htmlFor="va-name">Full Name *</label><input type="text" id="va-name" placeholder="Your full name" required /></div>
                <div className="va-form-group"><label htmlFor="va-phone">Phone Number *</label><input type="tel" id="va-phone" placeholder="+44 7XXX XXXXXX" required /></div>
                <div className="va-form-group"><label htmlFor="va-email">Email Address *</label><input type="email" id="va-email" placeholder="your@email.com" required /></div>
                <div className="va-form-group"><label htmlFor="va-type">Consultation Type *</label><select id="va-type" required><option value="">Select consultation type</option><option value="remote">Remote Consultation (GBP 150)</option><option value="in-person">In-Person at Harley Street (GBP 250)</option><option value="not-sure">Not Sure -- Help Me Choose</option></select></div>
                <button type="submit" className="va-form-submit">Request Appointment</button>
                <p className="va-form-note">We will contact you to confirm your appointment. No payment required now.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="va-partners-bar">
        <div className="va-container">
          <p className="va-partners-label">Trusted Partners & Technology</p>
          <div className="va-partners-logos">
            <img src={IMAGES.tdl} alt="The Doctors Laboratory" className="va-partner-logo" />
            <img src={IMAGES.signatureRx} alt="Signature Rx" className="va-partner-logo" />
            <img src={IMAGES.scanCom} alt="Scan.com" className="va-partner-logo" />
            <img src={IMAGES.meddbase} alt="Meddbase" className="va-partner-logo" />
          </div>
        </div>
      </div>

      <footer className="va-footer">
        <div className="va-container">
          <div className="va-footer-badges"><img src={IMAGES.cqc} alt="CQC" /><img src={IMAGES.gdpr} alt="GDPR" /></div>
          <p className="va-footer-address">22 Harley Street (Suite G&H), London W1G 9PH -- info@egynaecologist.com</p>
          <p>&copy; {new Date().getFullYear()} eGynaecologist | Rotunda-Hygeia Ltd | Registration No 12274363, England</p>
        </div>
      </footer>

      <div className="va-sticky-cta">
        <button className="va-btn-primary" onClick={scrollToForm}>Book Now</button>
        <a href="tel:+442071234567" className="va-btn-call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call
        </a>
      </div>
    </div>
  )
}
