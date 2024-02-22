// HamburgerMenu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="menu-icon">&#9776;</div>
      <div className="menu-items">
        <Link to="/">Home</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/inquiry">Inquiry</Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
