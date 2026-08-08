import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setScrolled(currentScrollY > 50);
      lastScrollY = currentScrollY;

      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'funfacts', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Mission Log' },
    { id: 'skills', label: 'Utility Belt' },
    { id: 'projects', label: 'Wayne Labs' },
    { id: 'funfacts', label: 'Alter Ego' },
    { id: 'contact', label: 'Bat-Signal' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${hidden ? 'navbar--hidden' : ''}`} id="navbar">
      <div className="navbar__inner">
        <button className="navbar__logo comic-heading" onClick={() => scrollTo('hero')}>
          <svg className="navbar__bat-icon" viewBox="0 0 100 100" width="28" height="28">
            <circle cx="50" cy="50" r="48" fill="#000" stroke="#ffcc00" strokeWidth="4"/>
            <ellipse cx="50" cy="50" rx="42" ry="26" fill="#ffcc00"/>
            <path d="M 50,30 C 53,37 57,39 63,33 C 71,41 85,38 88,48 C 81,51 77,57 75,67 C 67,61 61,65 57,72 C 54,67 52,67 50,69 C 48,67 46,67 43,72 C 39,65 33,61 25,67 C 23,57 19,51 12,48 C 15,38 29,41 37,33 C 43,39 47,37 50,30 Z" fill="#000"/>
          </svg>
          A<span className="navbar__logo-dot">.</span>
        </button>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
