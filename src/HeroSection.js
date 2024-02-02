import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './HeroSection.css';

const HeroSection = () => {
  useEffect(() => {
   
    const typed = new Typed('.animated-sentence', {
      strings: ["Welcome! My name is Salome Gathumbi. I am a passionate frontend developer proficient in HTML, CSS, React, and Bootstrap."],
      typeSpeed: 50, 
      backSpeed: 30, 
      startDelay: 500,
      showCursor: false,
      cursorChar: '', 
      loop: true, 
    });

   
    return () => {
      typed.destroy();
    };
  }, []); 

  return (
    <div className="hero-section">
     <p className="animated-sentence"></p>
    </div>
  );
};

export default HeroSection;
