import { useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import RevealWrapper from '../components/RevealWrapper';

export default function Contact() {
  const [note, setNote] = useState({ text: 'Fill in your details and click send. Your email client will open with the message pre-filled.', color: 'var(--ink-muted)' });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const company = (form.elements.namedItem('company') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      setNote({ text: 'Please fill in your name, email, and message.', color: '#E3645F' });
      return;
    }

    const subject = encodeURIComponent('Portfolio Enquiry from ' + name);
    const body = encodeURIComponent(
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n' +
      (company ? 'Company: ' + company + '\n' : '') +
      '\nMessage:\n' + message
    );

    window.location.href = 'mailto:shrissharma049@gmail.com?subject=' + subject + '&body=' + body;
    setNote({ text: 'Your email client should have opened. If not, email shrissharma049@gmail.com directly.', color: '#4caf7d' });
  }

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
        </RevealWrapper>
      </section>

      <section className="contact-body">
        <div className="wrap">
          <RevealWrapper className="contact-grid">
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 24 }}>Send a message</h3>
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input type="text" id="name" name="name" placeholder="Jane Smith" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="jane@company.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company (optional)</label>
                  <input type="text" id="company" name="company" placeholder="Company name" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={6} placeholder="Tell me about the role or what you're building..." required />
                </div>
                <button type="submit" className="btn-submit">Send Message →</button>
                <p className="form-note" style={{ color: note.color }}>{note.text}</p>
              </form>
            </div>

            <div className="contact-details">
              <h3>Contact details</h3>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value"><a href="mailto:shrissharma049@gmail.com">shrissharma049@gmail.com</a></span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone</span>
                <span className="detail-value"><a href="tel:+447428715033">+44 7428 715033</a></span>
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
              <div className="avail-box">
                <p><strong>Available for immediate start.</strong> Currently completing MSc IT Project Management at the University of the West of Scotland. Open to PM and BA roles across the UK.</p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
