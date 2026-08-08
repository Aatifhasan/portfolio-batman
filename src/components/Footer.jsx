import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container section-container">
        <div className="footer__logo comic-heading">
          <svg viewBox="0 0 100 100" width="32" height="32" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
            <circle cx="50" cy="50" r="48" fill="#000" stroke="#ffcc00" strokeWidth="4"/>
            <ellipse cx="50" cy="50" rx="42" ry="26" fill="#ffcc00"/>
            <path d="M 50,30 C 53,37 57,39 63,33 C 71,41 85,38 88,48 C 81,51 77,57 75,67 C 67,61 61,65 57,72 C 54,67 52,67 50,69 C 48,67 46,67 43,72 C 39,65 33,61 25,67 C 23,57 19,51 12,48 C 15,38 29,41 37,33 C 43,39 47,37 50,30 Z" fill="#000"/>
          </svg>
          MD AATIF HASAN
        </div>
        <p className="footer__text">
          Designed & Engineered in the Bat-Cave. © {new Date().getFullYear()} Md Aatif Hasan. All rights reserved.
        </p>
        <p className="footer__quote">
          "I am Vengeance. I am the Night. I am Batman."
        </p>
      </div>
    </footer>
  );
}

export default Footer;
