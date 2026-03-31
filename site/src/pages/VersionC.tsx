import { useState } from 'react'
import './version-c.css'

const IMAGES = {
  logo: 'https://egynaecologist.com/wp-content/uploads/2025/07/logo-final1.png',
  doctor: 'https://egynaecologist.com/wp-content/uploads/2026/03/3X6A8269_resized.jpg',
  cqc: 'https://egynaecologist.com/wp-content/uploads/2026/03/CQC-e1774872482355.png',
  doctify: 'https://egynaecologist.com/wp-content/uploads/2026/03/Doctify.png',
  google: 'https://egynaecologist.com/wp-content/uploads/2026/03/google-review.jpg',
  gdpr: 'https://egynaecologist.com/wp-content/uploads/2026/03/GDPR-Complaint.png',
}

const REVIEWS = [
  { text: 'A highly credible and well-structured consultant-led service. The team demonstrates strong subspecialist expertise, delivering evidence-based, patient-centred care through an effective hybrid model.', name: 'Stelios D.', source: 'Google', verified: true },
  { text: 'Seen within 3 days. Thorough, compassionate, and I had my treatment plan the same day.', name: 'Anjum A.', source: 'Doctify', verified: true },
  { text: 'The pre-consultation questionnaire meant the doctor already understood my history. No time wasted repeating myself. The follow-up summary was incredibly detailed.', name: 'Ayesha A.', source: 'Google', verified: true },
  { text: 'Finally found a practice that takes PCOS seriously. Clear diagnosis, clear plan, clear pricing. Exactly what I needed after years of being dismissed.', name: 'Sarah M.', source: 'Doctify', verified: true },
  { text: 'Excellent remote consultation. Professional and efficient.', name: 'Rachel K.', source: 'Google', verified: true },
  { text: 'I was nervous about seeing a gynaecologist privately for the first time. The team made the entire process feel safe and straightforward. The consultant explained every option without pressure.', name: 'Priya N.', source: 'Doctify', verified: true },
  { text: 'Booked on Monday, consulted on Wednesday, had my results by Friday. This is how healthcare should work.', name: 'Laura T.', source: 'Google', verified: true },
  { text: 'The Harley Street clinic is spotless and modern. Ultrasound and consultation in one visit saved me weeks compared to going through the NHS pathway.', name: 'Emma H.', source: 'Google', verified: true },
]

export default function VersionC() {
  const [credExpanded, setCredExpanded] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const scrollToForm = () => {
    document.getElementById('vc-book')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="vc">
      <header className="vc-header">
        <div className="vc-header-inner">
          <img src={IMAGES.logo} alt="eGynaecologist" className="vc-header-logo" />
          <div className="vc-header-right">
            <span className="vc-header-proof">Rated 5/5 -- 5,000+ patients</span>
            <button className="vc-header-btn" onClick={scrollToForm}>Book Now</button>
          </div>
        </div>
      </header>

      <section className="vc-hero">
        <div className="vc-hero-inner">
          <h1>The Harley Street Gynaecology Practice Rated 5/5 by Over 5,000 Patients</h1>
          <div className="vc-hero-badges">
            <img src={IMAGES.cqc} alt="Care Quality Commission regulated" />
            <img src={IMAGES.doctify} alt="Doctify excellent rating" />
            <img src={IMAGES.google} alt="Google 5-star reviews" />
          </div>
          <div className="vc-hero-actions">
            <button className="vc-btn-primary" onClick={scrollToForm}>Book Consultation</button>
            <a href="tel:+442071234567" className="vc-btn-outline">Call +44 207 123 4567</a>
          </div>
          <p className="vc-hero-micro">No referral needed. Same-week appointments. From GBP 150.</p>
        </div>
      </section>

      <section className="vc-reviews">
        <div className="vc-reviews-inner">
          <p className="vc-reviews-label">What patients say</p>
          <div className="vc-masonry">
            {REVIEWS.map((r, i) => (
              <div className="vc-review-card" key={i}>
                <div className="vc-review-top">
                  <span className="vc-review-stars">5.0</span>
                  {r.verified && <span className="vc-review-verified">Verified</span>}
                </div>
                <p className="vc-review-text">{r.text}</p>
                <div className="vc-review-footer">
                  <span className="vc-review-name">{r.name}</span>
                  <span className="vc-review-source">{r.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-cred-strip">
        <div className="vc-cred-inner">
          <img src={IMAGES.doctor} alt="Consultant Gynaecologist" className="vc-cred-photo" />
          <div className="vc-cred-text">
            <p className="vc-cred-headline">Your consultation is led by a GMC-registered, MRCOG-qualified consultant gynaecologist at 22 Harley Street.</p>
            <button className="vc-cred-toggle" onClick={() => setCredExpanded(!credExpanded)}>{credExpanded ? 'Show less' : 'Full credentials'}</button>
            <div className={`vc-cred-details ${credExpanded ? 'open' : ''}`}>
              <ul><li>GMC-registered Consultant Gynaecologists</li><li>MRCOG qualified with subspecialist training</li><li>CQC-regulated practice (independent health regulator for England)</li><li>On-site diagnostics: ultrasound, colposcopy, hysteroscopy</li><li>AI-powered pre-consultation assessments</li><li>Recognised by major UK health insurers</li></ul>
            </div>
          </div>
        </div>
      </section>

      <section className="vc-form-section" id="vc-book">
        <div className="vc-form-wrap">
          <h2>Book Your Consultation</h2>
          <form onSubmit={e => e.preventDefault()}>
            <div className="vc-field"><label htmlFor="vc-name">Full Name</label><input type="text" id="vc-name" placeholder="Your full name" required /></div>
            <div className="vc-field"><label htmlFor="vc-phone">Phone Number</label><input type="tel" id="vc-phone" placeholder="+44 7XXX XXXXXX" required /></div>
            <div className="vc-field"><label htmlFor="vc-type">Consultation Type</label><select id="vc-type" required><option value="">Select type</option><option value="remote">Remote -- GBP 150</option><option value="in-person">In-Person -- GBP 250</option><option value="unsure">Help me choose</option></select></div>
            <button type="submit" className="vc-form-submit">Request Appointment</button>
          </form>
          <p className="vc-form-note">We respond within 2 hours during working hours.</p>
          <div className="vc-form-badges"><img src={IMAGES.cqc} alt="CQC" /><img src={IMAGES.gdpr} alt="GDPR" /></div>
        </div>
      </section>

      <section className="vc-faq">
        <div className="vc-faq-inner">
          {[
            { q: 'Do I need a GP referral?', a: 'No. You can book directly. If you have a referral letter or previous results, you can share them during booking to help your consultant prepare.' },
            { q: 'Is an online consultation as thorough as in-person?', a: 'Yes. Our AI-powered pre-assessment gathers detailed information before your appointment so the consultant can focus on diagnosis and advice. If a physical exam is needed, we arrange a seamless in-person follow-up at no rebooking fee.' },
          ].map((item, i) => (
            <div className="vc-faq-item" key={i}>
              <button className="vc-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>{item.q}<span className={`vc-faq-arrow ${openFaq === i ? 'open' : ''}`}>+</span></button>
              <div className={`vc-faq-a ${openFaq === i ? 'open' : ''}`}><p>{item.a}</p></div>
            </div>
          ))}
        </div>
      </section>

      <footer className="vc-footer">
        <p>22 Harley Street (Suite G&H), London W1G 9PH -- eGynaecologist | Rotunda-Hygeia Ltd | Reg. No 12274363, England -- CQC Registered</p>
      </footer>
    </div>
  )
}
