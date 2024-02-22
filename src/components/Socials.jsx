import React from 'react';
import '../App.css';

const Socials = () => {
  return (
    <div className="social-icons-container">
      <a href="https://www.instagram.com/sweetcartrental/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="mailto:sweetcartrental.sd@gmail.com">
        <i className="fas fa-envelope"></i>
      </a>
      <a href="https://www.buymeacoffee.com/jsicajane" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-coffee"></i>
      </a>
    </div>
  );
};

export default Socials;
