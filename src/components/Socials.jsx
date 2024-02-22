import React from 'react';
import '../App.css';

const Socials = () => {
  return (
    <div className="social-icons-container">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="mailto:your@email.com">
        <i className="fas fa-envelope"></i>
      </a>
      <a href="https://buymeacoffee.com" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-coffee"></i>
      </a>
    </div>
  );
};

export default Socials;
