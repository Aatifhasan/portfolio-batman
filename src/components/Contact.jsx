import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

function Contact() {
  const sectionRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !msg) return;

    const subject = encodeURIComponent(`Bat-Signal Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
    window.open(`mailto:aatifhasan00@gmail.com?subject=${subject}&body=${body}`, '_self');

    setSent(true);
    setName('');
    setEmail('');
    setMsg('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__container section-container">
        <div className="contact__header reveal">
          <h2 className="contact__title comic-heading">
            <span className="contact__title-accent">Signal The</span> Bat-Cave!
          </h2>
          <div className="contact__title-line"></div>
          <p className="contact__subtitle">
            Got a project, system architecture to design, or want to collaborate? Fire up the Bat-Signal!
          </p>
        </div>

        <div className="contact__content">
          {/* Form */}
          <form className="contact__form reveal" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-name">Name / Alias</label>
              <input
                id="contact-name"
                className="contact__input"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-email">Comms Email</label>
              <input
                id="contact-email"
                className="contact__input"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-msg">Encrypted Transmission</label>
              <textarea
                id="contact-msg"
                className="contact__input contact__textarea"
                placeholder="Hey Aatif, let's build something epic..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className="hero__btn hero__btn--primary"
              style={{ width: '100%', marginTop: '1rem', border: '3px solid #000' }}
            >
              {sent ? 'SIGNAL TRANSMITTED!' : 'TRANSMIT BAT-SIGNAL'}
            </button>
          </form>

          {/* Socials */}
          <div className="contact__socials reveal">
            <h3 className="contact__socials-title comic-heading">Direct Channels</h3>

            <div className="contact__social-cards">
              <a
                href="mailto:aatifhasan00@gmail.com"
                className="contact__social-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact__social-icon">✉</span>
                <div>
                  <p className="contact__social-label">Direct Email</p>
                  <p className="contact__social-value">aatifhasan00@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/md-aatif-hasan-3ab10421b/"
                className="contact__social-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact__social-icon">in</span>
                <div>
                  <p className="contact__social-label">LinkedIn</p>
                  <p className="contact__social-value">md-aatif-hasan</p>
                </div>
              </a>

              <a
                href="https://github.com/Aatifhasan"
                className="contact__social-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact__social-icon">⌨</span>
                <div>
                  <p className="contact__social-label">GitHub</p>
                  <p className="contact__social-value">Aatifhasan</p>
                </div>
              </a>

              <a
                href="tel:+918804197589"
                className="contact__social-card"
              >
                <span className="contact__social-icon">☎</span>
                <div>
                  <p className="contact__social-label">Phone Hotline</p>
                  <p className="contact__social-value">+91 8804197589</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
