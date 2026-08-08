import React, { useEffect, useRef } from 'react';
import './About.css';

function About() {
  const sectionRef = useRef(null);

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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: '🏆', label: 'ACE Award Winner', detail: 'Recognized at Accenture' },
    { icon: '🦇', label: 'Backend Architect', detail: 'Java, Spring Boot, Microservices' },
    { icon: '🤖', label: 'AI Intelligence', detail: 'LLMs, Vector Search, FastAPI' },
    { icon: '⚡', label: 'Automation Mindset', detail: 'Identify → Design → Automate' },
  ];

  return (
    <section className="about halftone-bg" id="about" ref={sectionRef}>
      <div className="about__container section-container">
        <div className="about__header reveal">
          <h2 className="about__title comic-heading">
            <span className="about__title-accent">Wayne</span> Dossier
          </h2>
          <div className="about__title-line"></div>
        </div>

        <div className="about__content">
          <div className="about__speech reveal">
            <div className="about__speech-bubble">
              <p className="about__bio">
                <em>"It's not who I am underneath, but what I do that defines me."</em>
              </p>
              <p className="about__bio">
                My name is <strong>Md Aatif Hasan</strong>. By day, I am a Lead Software Engineer architecting enterprise solutions. By night, I answer the Bat-Signal for mission-critical backends, high-scale microservices, and system performance optimizations.
              </p>
              <p className="about__bio about__bio--accent">
                Currently at <strong>Accenture</strong>, building and maintaining robust backend services using
                <strong> Java and Spring Boot</strong> for enterprise logistics platforms. I specialize in
                designing <strong>scalable REST APIs</strong> for microservice communication, implementing
                <strong> secure authentication</strong> with Spring Security, JWT, and OAuth2, and eliminating performance bottlenecks with <strong>Redis caching</strong>.
              </p>
            </div>
            <div className="about__speech-tail"></div>
          </div>

          <div className="about__highlights reveal stagger-children">
            {highlights.map((item, i) => (
              <div key={i} className="about__highlight-card reveal">
                <span className="about__highlight-icon">{item.icon}</span>
                <div>
                  <p className="about__highlight-label">{item.label}</p>
                  <p className="about__highlight-detail">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about__education reveal">
          <h3 className="about__edu-title comic-heading">Academic Foundation</h3>
          <div className="about__edu-grid">
            <div className="about__edu-card">
              <div className="about__edu-year">2020 – 2024</div>
              <h4 className="about__edu-name">Calcutta Institute of Engineering and Management</h4>
              <p className="about__edu-desc">B.Tech in Information Technology — CGPA: 8.5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
