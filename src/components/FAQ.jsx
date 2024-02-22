import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import '../App.css';

const FAQ = () => {
  return (
    <div className="faq-page">
        <HamburgerMenu />
      <div className="faq-container">
        <h1 className="faq-heading">FREQUENTLY ASKED QUESTIONS</h1>

        <div className="faq-item">
          <h2><strong>Q: </strong>HOW DO I KNOW IF I'M WITHIN THE 20 MILE RADIUS?</h2>
          <p><strong>A: </strong>We calculate milage from 5500 Grossmont Center Drive, La Mesa, CA 91942.</p>
        </div>

        <div className="faq-item">
          <h2><strong>Q: </strong>CAN I ORDER TWO DIFFERENT DESSERT SELECTIONS?</h2>
          <p><strong>A: </strong>Yes, as long as it's in increments of 50 (Boba teas are excluded).  Please contact us for pricing.</p>
        </div>

        <div className="faq-item">
          <h2><strong>Q: </strong>HOW FAR IN ADVANCE DO I NEED TO RESERVE?</h2>
          <p><strong>A: </strong>At least 21 Days if that day is not already booked.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
