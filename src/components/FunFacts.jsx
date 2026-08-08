import React, { useEffect, useRef } from 'react';
import './FunFacts.css';

const facts = [
  {
    icon: '☕',
    title: 'Batcave Fuel',
    color: 'yellow',
    desc: 'My debugging protocol: brew dark coffee, analyze logs, inspect stack traces, resolve memory leak. Repeat till dawn.'
  },
  {
    icon: '🦇',
    title: 'Gotham Vigilante',
    color: 'cyan',
    desc: "I spend all day architecting scalable backend APIs, and all night guarding Gotham's infrastructure against server crashes."
  },
  {
    icon: '💡',
    title: 'Bat-Automation',
    color: 'gold',
    desc: "If a manual operational task is repeated twice, I automate it with a custom backend script. Efficiency is my superpower."
  },
  {
    icon: '🎮',
    title: 'Off-duty Gamer',
    color: 'yellow',
    desc: "When off-duty from the Batcave, you will find me gaming, reading tech literature, or exploring new AI frameworks."
  }
];

function FunFacts() {
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

  return (
    <section className="funfacts halftone-bg" id="funfacts" ref={sectionRef}>
      <div className="funfacts__container section-container">
        <div className="funfacts__header reveal">
          <h2 className="funfacts__title comic-heading">
            <span className="funfacts__title-accent">Alter</span> Ego
          </h2>
          <div className="funfacts__title-line"></div>
          <p className="funfacts__subtitle">When I'm off-duty from writing production code...</p>
        </div>

        <div className="funfacts__grid stagger-children">
          {facts.map((fact, i) => (
            <div key={i} className={`funfacts__card funfacts__card--${fact.color} reveal`}>
              <div className="funfacts__icon-wrapper">
                <span className="funfacts__icon">{fact.icon}</span>
              </div>
              <h3 className={`funfacts__card-title comic-heading funfacts__card-title--${fact.color}`}>
                {fact.title}
              </h3>
              <p className="funfacts__card-desc">{fact.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FunFacts;
