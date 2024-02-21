import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/cart2.jpeg';
import '../App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image">
        <img
          src={backgroundImage}
          alt="Background"
          className="background-img"
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

        {/* Button to navigate to PackagesPage */}
      <Link to="/sweetcartmenu" className="see-packages-button">
        See Menu
      </Link>
      </div>
    </div>
  );
};

export default LandingPage;
