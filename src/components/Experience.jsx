import React, { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Accenture',
    period: 'Jan 2025 – Present',
    location: 'India',
    color: 'yellow',
    bullets: [
      'Built and maintained backend services using Java and Spring Boot for enterprise logistics applications handling core business workflows.',
      'Designed and implemented REST APIs enabling scalable microservice communication across internal systems.',
      'Identified a repetitive manual operational task, gathered requirements independently, and developed an automated backend solution to streamline the process and reduce manual effort.',
      'Improved system performance by integrating Redis caching and optimizing backend workflows.',
      'Implemented secure authentication and authorization using Spring Security, JWT, and OAuth2 for protected API access.',
      'Collaborated in Agile teams across development, testing, and deployment cycles to deliver production-ready features.',
      'Recognized with ACE Award at Accenture for contributions and performance.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Redis', 'REST APIs', 'Git', 'OAuth2'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Cloudsea Technologies',
    period: 'May 2024 – Dec 2024',
    location: 'India',
    color: 'cyan',
    bullets: [
      'Engineered scalable backend APIs and application services using C# and .NET / ASP.NET Core.',
      'Optimized database queries, stored procedures, and data models for high reliability and lower latency.',
      'Integrated authentication modules, Entity Framework, and REST APIs into existing cloud application workflows.',
      'Participated in Agile sprint planning, code reviews, and continuous backend optimization.',
    ],
    tech: ['C#', '.NET', 'ASP.NET Core', 'REST APIs', 'SQL', 'Git', 'Agile'],
  },
];

function Experience() {
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
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      <div className="experience__container section-container">
        <div className="experience__header reveal">
          <h2 className="experience__title comic-heading">
            <span className="experience__title-accent">Mission</span> Logs
          </h2>
          <div className="experience__title-line"></div>
        </div>

        <div className="experience__timeline">
          <div className="experience__line"></div>

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`experience__card reveal experience__card--${exp.color}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className={`experience__dot experience__dot--${exp.color}`}>
                <div className="experience__dot-inner"></div>
              </div>

              <div className="experience__card-content">
                <div className="experience__card-top">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <p className="experience__company">{exp.company}</p>
                  </div>
                  <div className="experience__meta">
                    <span className="experience__period">{exp.period}</span>
                    <span className="experience__location">{exp.location}</span>
                  </div>
                </div>

                <ul className="experience__bullets">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="experience__bullet">{bullet}</li>
                  ))}
                </ul>

                <div className="experience__tech">
                  {exp.tech.map((t, j) => (
                    <span key={j} className={`experience__tech-tag experience__tech-tag--${exp.color}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
