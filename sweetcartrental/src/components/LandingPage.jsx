import React from 'react';
import backgroundImage from '../images/cart2.jpeg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Background image */}
      <div className="background-image">
        {/* You can use inline styles or a CSS class for styling */}
        {/* Example inline style: */}
        <img
          src={backgroundImage}
          alt="Background"
          className="background-img" // Add the class for styling
        />

        {/* White overlay */}
        <div className="background-overlay"></div>

        {/* Heading */}
        <h1 className="main-heading">
          RENTAL AND CATERING
          <br />
          <span className="bold-text">SWEET CART</span>
          <br />
          SAN DIEGO, CA
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
