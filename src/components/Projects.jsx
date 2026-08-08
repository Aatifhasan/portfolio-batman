import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Patient Microservices System',
    subtitle: 'Spring Boot Microservices Platform',
    color: 'yellow',
    issue: '#001',
    github: 'https://github.com/Aatifhasan/Spring-Boot-Microservice-Patient-Management',
    description:
      'Scalable enterprise patient management system built with Java and Spring Boot microservices architecture. Designed decoupled services, REST API gateways, and centralized data management.',
    tech: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'MySQL'],
    highlights: [
      'Decoupled microservice architecture',
      'Centralized API routing & state isolation',
      'Production-grade RESTful API design',
    ],
  },
  {
    title: 'Journal App',
    subtitle: 'Event Driven Backend System',
    color: 'cyan',
    issue: '#002',
    github: 'https://github.com/Aatifhasan/Journal-App',
    description:
      'A journaling backend platform built with Java, Spring Boot, and MongoDB. Features asynchronous notification workflow using Apache Kafka for non-blocking processing, Redis caching for fast API responses, and JWT + OAuth2 Google Login.',
    tech: ['Java', 'Spring Boot', 'MongoDB', 'Redis', 'Kafka', 'JWT', 'OAuth2'],
    highlights: [
      'JWT + OAuth2 Google Login security',
      'Async Kafka-based email notification engine',
      'Redis caching layer for sub-millisecond lookups',
    ],
  },
  {
    title: 'AI ATS Resume Scanner',
    subtitle: 'FastAPI & LLM Intelligence Service',
    color: 'gold',
    issue: '#003',
    github: 'https://github.com/Aatifhasan/ATS-Resume-Scanner',
    description:
      'An AI-powered resume analysis service built with Python and FastAPI. Uses SentenceTransformers for semantic similarity matching between resumes and job descriptions, integrated with Groq API for LLM-powered feedback.',
    tech: ['Python', 'FastAPI', 'SentenceTransformers', 'Groq API', 'scikit-learn'],
    highlights: [
      'Groq LLM-powered skills gap detection',
      'Vector semantic similarity scoring',
      'REST APIs with structured JSON output',
    ],
  },
  {
    title: 'Django Real-Time Chat',
    subtitle: 'Asynchronous WebSockets Platform',
    color: 'yellow',
    issue: '#004',
    github: 'https://github.com/Aatifhasan/DjangoChat',
    description:
      'A full-featured real-time web messaging application built with Python and Django. Utilizes WebSockets for low-latency bidirectional communication and instant message dispatch across user chat rooms.',
    tech: ['Python', 'Django', 'WebSockets', 'JavaScript', 'HTML/CSS'],
    highlights: [
      'Bi-directional WebSockets live communication',
      'Multi-room chat state management',
      'Clean async event dispatching',
    ],
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const [flipped, setFlipped] = useState(null);

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
    <section className="projects benday-bg" id="projects" ref={sectionRef}>
      <div className="projects__container section-container">
        <div className="projects__header reveal">
          <h2 className="projects__title comic-heading">
            <span className="projects__title-accent">Wayne Labs</span> Projects
          </h2>
          <div className="projects__title-line"></div>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className="projects__card-wrapper reveal"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div
                className={`projects__card projects__card--${project.color} ${flipped === i ? 'projects__card--flipped' : ''}`}
                onClick={() => setFlipped(flipped === i ? null : i)}
              >
                <div className="projects__card-inner">
                  {/* Front */}
                  <div className="projects__card-front">
                    <div className="projects__card-issue comic-heading">{project.issue}</div>
                    <div className="projects__card-cover">
                      <h3 className="projects__card-title comic-heading">{project.title}</h3>
                      <p className="projects__card-subtitle">{project.subtitle}</p>
                    </div>
                    <div className="projects__card-bottom">
                      <span className="projects__card-flip-hint">Click to read details →</span>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="projects__card-back">
                    <h3 className="projects__card-back-title comic-heading">{project.title}</h3>
                    <p className="projects__card-desc">{project.description}</p>

                    <div className="projects__card-highlights">
                      {project.highlights.map((h, j) => (
                        <div key={j} className="projects__card-highlight">
                          <span className="projects__card-highlight-dot">●</span>
                          {h}
                        </div>
                      ))}
                    </div>

                    <div className="projects__card-tech">
                      {project.tech.map((t, j) => (
                        <span key={j} className={`projects__tech-tag projects__tech-tag--${project.color}`}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div style={{ marginTop: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.85rem',
                          color: 'var(--bm-yellow)',
                          fontWeight: 700,
                          textDecoration: 'underline'
                        }}
                      >
                        View on GitHub ↗
                      </a>
                      <span className="projects__card-flip-hint">Flip back →</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
