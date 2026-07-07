import { Helmet } from 'react-helmet-async';
import RevealWrapper from '../components/RevealWrapper';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Shristi Sharma</title>
        <meta name="description" content="Get in touch with Shristi Sharma for PM and BA opportunities." />
      </Helmet>

      <section className="contact-hero">
        <RevealWrapper className="wrap">
          <span className="contact-hero__eyebrow">Get in touch</span>
          <h1>Let's talk <mark>product.</mark></h1>
          <p>I'm actively looking for PM and BA roles in the UK. If you're building something where product thinking, delivery experience, and strong stakeholder communication would be useful, I'd like to hear from you.</p>
          <div className="avail-box" style={{ marginTop: 28, maxWidth: 560 }}>
            <p><strong>Available for immediate start.</strong> Currently completing MSc IT Project Management at the University of the West of Scotland. Open to PM and BA roles across the UK.</p>
          </div>
          {/* Download CV button — hidden until CV is ready */}
          {/* <a href="/cv.pdf" download className="btn-primary" style={{ marginTop: 20, display: 'inline-flex' }}>Download CV ↓</a> */}
        </RevealWrapper>
      </section>

      <section className="contact-body">
        <div className="wrap">
          <RevealWrapper className="contact-details-grid">
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <span className="detail-value"><a href="https://mail.google.com/mail/?view=cm&to=shrissharma049@gmail.com" target="_blank" rel="noopener noreferrer">shrissharma049@gmail.com</a></span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-value">Watford, UK · Open to relocation</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">LinkedIn</span>
              <span className="detail-value"><a href="https://www.linkedin.com/in/shristi-sharma-0a191a224/" target="_blank" rel="noopener noreferrer">linkedin.com/in/shristi-sharma-0a191a224</a></span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Dribbble</span>
              <span className="detail-value"><a href="https://dribbble.com/shristyyyy" target="_blank" rel="noopener noreferrer">dribbble.com/shristyyyy</a></span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Behance</span>
              <span className="detail-value"><a href="https://www.behance.net/shristisharma6" target="_blank" rel="noopener noreferrer">behance.net/shristisharma6</a></span>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
