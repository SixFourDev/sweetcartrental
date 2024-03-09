import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import Socials from './Socials';
import '../App.css';

const DessertSelection = () => {
  return (
    <div>
      <div className="dessert-selections-page">
        <h1 className="dessert-heading">SWEET CART MENU</h1>
        <p className="note">ALL INDIVIDUALLY PACKAGED EXCEPT FOR BOBA TEAS</p>
      </div>

          <HamburgerMenu />

      <div className="all-dessert-rentals">
        {/* All Dessert Rentals Include */}
        <div>
          <h2>All Dessert Rentals Include</h2>
          <ul>
            <li>Dessert Cart</li>
            <li>Boho Umbrella</li>
            <li>3 Hours of Service</li>
            <li>Dry Ice</li>
            <li>2 Flavors</li>
            <li>Drop-off and Pick-up within</li>
            <li>20 Mile Radius (SD County)</li>
          </ul>
        </div>
      </div>

      <div className="dessert-sections-container">

        {/* Ice Cream Cups */}
        <div className="dessert-package">
          <h2>Ice Cream Cups</h2>
          <ul>
            <li>Black Sesame</li>
            <li>Chocolate</li>
            <li>Coffee</li>
            <li>Cookies n' Cream</li>
            <li>Mango</li>
            <li>Matcha Green Tea</li>
            <li>Mint Chocolate Chip</li>
            <li>Strawberry Shortcake</li>
            <li>Thai Ice Tea</li>
            <li>Ube</li>
            <li>Vanilla</li>
            <br />
            <span className="price">50 SERVINGS - $290</span>
            <br />
            <span className="price">100 SERVINGS - $395</span>
          </ul>
        </div>

        {/* Mochi Ice Creams */}
        <div className="dessert-package">
          <h2>Mochi Ice Creams</h2>
          <ul>
            <li>Cookies n' Cream</li>
            <li>Cookie Dough</li>
            <li>Double Chocolate</li>
            <li>Mango</li>
            <li>Matcha Green Tea</li>
            <li>Strawberry</li>
            <li>Strawberry (V)</li>
            <br />
            <span className="price">50 SERVINGS - $245</span>
            <br />
            <span className="price">100 SERVINGS - $295</span>
            <br />
            <span className="price">150 SERVINGS - $350</span>
          </ul>
        </div>

        {/* Macaron Ice Cream Sandwiches */}
        <div className="dessert-package">
          <h2>Macaron Ice Cream Sandwiches</h2>
          <ul>
            <li>Coffee</li>
            <li>Green Tea</li>
            <li>Mango</li>
            <li>Strawberry</li>
            <li>Thai Tea</li>
            <li>Ube Taro</li>
            <li>Vanilla</li>
            <br />
            <span className="price">50 SERVINGS - $370</span>
            <br />
            <span className="price">100 SERVINGS - $540</span>
          </ul>
        </div>

        {/* Boba Teas (W/ Boba) */}
        <div className="dessert-package">
          <h2>Boba Teas (W/ Boba)</h2>
          <ul>
            <li>Classic Milk Tea</li>
            <li>Honeydew Milk Tea</li>
            <li>Jasmine Milk Tea</li>
            <li>Matcha Milk Tea</li>
            <li>Okinawa Milk Tea</li>
            <li>Pandan Milk Tea</li>
            <li>Strawberry Milk Tea</li>
            <li>Taro Milk Tea</li>
            <li>Ube Milk Tea</li>
            <li>Wintermelon Milk Tea</li>
            <br />
            <li>Mango Fruit Tea</li>
            <li>Passion Fruit Tea</li>
            <li>Strawberry Fruit Tea</li>
            <br />
            <span className="price">100 SERVINGS - $465</span>
            <br />
            <span className="price">150 SERVINGS - $590</span>
          </ul>
        </div>

        {/* Mango Sticky Rice Cups */}
        <div className="dessert-package">
          <h2>Mango Sticky Rice Cups</h2>
          <ul>
            <li>Fresh cut mango with coconut sticky rice served with handcrafted coconut sauce and roasted sesame seeds</li>
          </ul>
          <br />
          <span className="price">50 SERVINGS - $345</span>
          <br />
          <span className="price">100 SERVINGS - $450</span>
          <br />
          <span className="price">200 SERVINGS - $600</span>
        </div>

      </div>

      <div className="dessert-sections-container">

        {/* Add-Ons */}
        <div className="dessert-package add-ons">
          <h2>Add-Ons</h2>
          <ul>
            <li>Per Extra Hour - <span className="price">$40</span></li>
            <li>Delivery Outside 20 Mile Radius - <span className="price">$75</span></li>
            <li>Personalized Labeling (Per 50 qty) - <span className="price">$20</span></li>
            <li>Per Additional Flavor - <span className="price">$25</span></li>
            <li>Dessert Pick-Up - <span className="price">$30</span></li>
            <li>Flower Garland - <span className="price">$10</span></li>
            <li>Balloon Garland - <span className="price">$40</span></li>
            <li>10.5 ft inflatable screen rental (projector, set-up & break down not included) - <span className="price">$30</span></li>
          </ul>
        </div>

        {/* Just Cart Rental */}
        <div className="dessert-package just-cart-rental">
          <h2>Just Cart Rental</h2>
          <ul>
            <li>Dessert Cart</li>
            <li>Boho Umbrella</li>
            <li>3 Hours of Service</li>
            <li>Dry Ice</li>
            <li>No Self served desserts</li>
            <li>Drop-off and Pick-up within</li>
            <li>20 Mile Radius (SD County)</li>
            <br />
            <span className="price">$185</span>
          </ul>
        </div>
      </div>
      <Socials />
    </div>
  );
};

export default DessertSelection;

