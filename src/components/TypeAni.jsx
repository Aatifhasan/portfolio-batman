import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function TypeAni() {
  return (
    <TypeAnimation
      sequence={[
        'SOFTWARE ENGINEER',
        1200,
        'BACKEND VIGILANTE',
        1200,
        'SPRING BOOT SPECIALIST',
        1200,
        'SYSTEM ARCHITECT',
        1200,
        'WAYNE TECH DEVELOPER',
        1200,
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: 'inherit',
        display: 'inline-block',
        color: 'var(--bm-yellow)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
      }}
      repeat={Infinity}
    />
  );
}

export default TypeAni;
