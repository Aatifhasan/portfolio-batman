import React, { useEffect, useRef } from 'react';
import './Hero.css';
import TypeAni from './TypeAni';

function Hero() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (centerY - y) / 15;
      const rotateY = (x - centerX) / 15;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Animated Bat-Signal Spotlight Beam */}
      <div className="hero__bat-spotlight"></div>

      {/* Floating Dark Ember Particles */}
      <div className="hero__particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="hero__particle"
            style={{
              '--delay': `${Math.random() * 5}s`,
              '--x': `${Math.random() * 100}%`,
              '--duration': `${3 + Math.random() * 4}s`,
              '--size': `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      <div className="hero__content">
        {/* Left side: Text */}
        <div className="hero__text">
          <div className="hero__sfx-wrapper">
            <span className="comic-sfx">BAM!</span>
          </div>

          <p className="hero__greeting">
            I AM VENGEANCE. I AM THE NIGHT. I AM
          </p>

          <h1 className="hero__name comic-heading">
            <span className="hero__name-glitch" data-text="MD AATIF">MD AATIF</span>
            <span className="hero__name-line2">
              <span className="hero__name-glitch hero__name-glitch--alt" data-text="HASAN">HASAN</span>
            </span>
          </h1>

          <div className="hero__tagline">
            <span className="hero__tagline-bracket">&lt;</span>
            <TypeAni />
            <span className="hero__tagline-bracket">/&gt;</span>
          </div>

          <p className="hero__subtitle">
            It's not who I am underneath, but what I <em>build in production</em> that defines me.
          </p>

          <div className="hero__cta">
            <button
              className="hero__btn hero__btn--primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Signal The Bat-Cave
            </button>
            <button
              className="hero__btn hero__btn--secondary"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Dossier
            </button>
          </div>
        </div>

        {/* Right side: Split Face Card (Batman theme) */}
        <div className="hero__split-face-wrapper" ref={cardRef}>
          <div className="hero__split-face">
            {/* Base Split Image */}
            <img
              src="/aatif-split.jpg"
              alt="Md Aatif Hasan Batman Split Portrait"
              className="hero__split-img"
            />

            {/* Batman Crest Emblem Overlay */}
            <div className="hero__bat-crest-overlay">
              <svg viewBox="0 0 100 100" width="36" height="36">
                <ellipse cx="50" cy="50" rx="46" ry="28" fill="#ffcc00"/>
                <path d="M 50,30 C 53,37 57,39 63,33 C 71,41 85,38 88,48 C 81,51 77,57 75,67 C 67,61 61,65 57,72 C 54,67 52,67 50,69 C 48,67 46,67 43,72 C 39,65 33,61 25,67 C 23,57 19,51 12,48 C 15,38 29,41 37,33 C 43,39 47,37 50,30 Z" fill="#000"/>
              </svg>
            </div>

            {/* Clickable halves */}
            <div
              className="hero__split-half hero__split-half--left"
              onClick={(e) => {
                e.stopPropagation();
                document.getElementById('batman-section').scrollIntoView({ behavior: 'smooth' });
              }}
              title="Guarding Gotham By Night"
            >
              <span className="hero__split-label">NIGHT</span>
            </div>
            <div
              className="hero__split-half hero__split-half--right"
              onClick={(e) => {
                e.stopPropagation();
                document.getElementById('bruce-wayne-section').scrollIntoView({ behavior: 'smooth' });
              }}
              title="Tech Architect By Day"
            >
              <span className="hero__split-label">DAY</span>
            </div>
          </div>
          <div className="hero__split-shadow"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line"></div>
        <span className="hero__scroll-text">GOTHAM SCROLL</span>
      </div>

      <div className="hero__diagonal"></div>
    </section>
  );
}

export default Hero;
