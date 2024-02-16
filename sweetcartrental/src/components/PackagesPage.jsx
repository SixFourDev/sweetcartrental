import React from 'react';
import '../App.css';

const PackagesPage = () => {
  return (
    <div className="packages-page">
      {/* Background image of ice cream */}

      {/* Package 1 */}
      <div className="package">
        <h2>Package 1</h2>
        <ul>
          <li>Dessert Cart</li>
          <li>Boho Umbrella</li>
          <li>3 Hours of Service</li>
          <li>Dry Ice</li>
          <li>Self served 50 desserts</li>
          <li>(3 Flavors)</li>
          <li>Drop-off and Pick-up within</li>
          <li>20 Mile Radius</li>
          <span className="price">XX</span>
        </ul>
      </div>

      {/* Package 2 */}
      <div className="package">
        <h2>Package 2</h2>
        <ul>
          <li>Dessert Cart</li>
          <li>Boho Umbrella</li>
          <li>3 Hours of Service</li>
          <li>Dry Ice</li>
          <li>Self served 50 desserts</li>
          <li>(4 Flavors excluding boba teas)</li>
          <li>Drop-off and Pick-up within</li>
          <li>20 Mile Radius</li>
          <span className="price">XX</span>
        </ul>
      </div>

      {/* Just Cart Rental */}
      <div className="package">
        <h2>Just Cart Rental</h2>
        <ul>
          <li>Dessert Cart</li>
          <li>Boho Umbrella</li>
          <li>3 Hours of Service</li>
          <li>Dry Ice</li>
          <li>No Self served desserts</li>
          <li>Drop-off and Pick-up within</li>
          <li>20 Mile Radius (SD County)</li>
          <span className="price">$175</span>
        </ul>
      </div>

      {/* Add-Ons */}
      <div className="package">
        <h2>Add-Ons</h2>
        <ul>
          <li>Per Extra Hour - <span className="price">$20</span></li>
          <li>Per +50 servings - <span className="price">$15</span></li>
          <li>Delivery Outside 20 Mile Radius - <span className="price">$50</span></li>
          <li>Personalized Labeling - <span className="price">$25</span></li>
          <li>Flower Garland - <span className="price">$10</span></li>
          <li>Balloon Garland - <span className="price">$40</span></li>
        </ul>
      </div>
    </div>
  );
};

export default PackagesPage;
