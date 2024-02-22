// HamburgerMenu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSehkF6uhM-f6AX5ZX9WrvdoNpyZndB7E_7nMlom8kGFC-5DYg/viewform';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="menu-icon">&#9776;</div>
      <div className="menu-items">
        <Link to="/">Home</Link>
        <Link to="/sweetcartmenu">Menu</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/photos">Photos</Link>
        <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
          Inquiry
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
