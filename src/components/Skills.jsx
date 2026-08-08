import React, { useEffect, useRef } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    color: 'yellow',
    skills: ['Java', 'C#', 'Python', 'JavaScript'],
  },
  {
    title: 'Backend & Microservices',
    color: 'cyan',
    skills: ['Spring Boot', '.NET / ASP.NET', 'Spring Security', 'REST APIs', 'Microservices', 'FastAPI'],
  },
  {
    title: 'Databases & Storage',
    color: 'gold',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Utility Belt & Tools',
    color: 'yellow',
    skills: ['Redis', 'Apache Kafka', 'JWT', 'OAuth2', 'Git', 'Maven', 'Postman', 'Docker'],
  },
];

function Skills() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills benday-bg" id="skills" ref={sectionRef}>
      <div className="skills__container section-container">
        <div className="skills__header reveal">
          <h2 className="skills__title comic-heading">
            <span className="skills__title-accent">Bat-Utility</span> Belt
          </h2>
          <div className="skills__title-line"></div>
          <p className="skills__subtitle">Armed with high-performance tools & backend frameworks</p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className={`skills__category reveal skills__category--${cat.color}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <h3 className={`skills__category-title skills__category-title--${cat.color}`}>
                {cat.title}
              </h3>
              <div className="skills__tags">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className={`skills__tag skills__tag--${cat.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div className="skills__soft reveal">
          <h3 className="skills__soft-title comic-heading">Tactical Capabilities</h3>
          <div className="skills__soft-list">
            {['Problem-solving', 'Automation Mindset', 'System Architecture', 'Agile Operations', 'High Scalability'].map((s, i) => (
              <span key={i} className="skills__soft-tag">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
