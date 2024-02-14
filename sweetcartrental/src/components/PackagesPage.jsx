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
        </ul>
      </div>
    </div>
  );
};

export default PackagesPage;
