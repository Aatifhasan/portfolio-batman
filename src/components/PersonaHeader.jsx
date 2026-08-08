import React, { useEffect, useRef } from 'react';
import './PersonaHeader.css';

function PersonaHeader({ id, title, subtitle, color = 'yellow' }) {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id={id} className={`persona-header persona-header--${color} reveal`} ref={headerRef}>
      <div className="persona-header__inner">
        <h2 className="persona-header__title comic-heading">
          <span className="persona-header__badge">
            <svg viewBox="0 0 100 100" width="22" height="22">
              <ellipse cx="50" cy="50" rx="46" ry="28" fill="#ffcc00"/>
              <path d="M 50,30 C 53,37 57,39 63,33 C 71,41 85,38 88,48 C 81,51 77,57 75,67 C 67,61 61,65 57,72 C 54,67 52,67 50,69 C 48,67 46,67 43,72 C 39,65 33,61 25,67 C 23,57 19,51 12,48 C 15,38 29,41 37,33 C 43,39 47,37 50,30 Z" fill="#000"/>
            </svg>
          </span>
          {title}
        </h2>
        <p className="persona-header__subtitle">{subtitle}</p>
      </div>
      <div className="persona-header__lines"></div>
    </div>
  );
}

export default PersonaHeader;
