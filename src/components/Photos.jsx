import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import Socials from './Socials';
import '../App.css';


import icecream from '../images/cup-icecream.jpeg';
import drinkpouch from '../images/drinkpouch.webp';
import macaron from '../images/macaron.webp';
import mochi from '../images/mochi-ice-cream-034.jpeg';


const Photos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    { id: 1, path: icecream, description: 'Single Ice Cream Cups' },
    { id: 2, path: drinkpouch, description: 'Boba Drink Pouches' },
    { id: 3, path: macaron, description: 'Macaron Ice Cream Sandwiches' },
    { id: 4, path: mochi, description: 'Mochi Ice Cream Sandwiches' },
  ];

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      <div className="photos-page">
        <h1 className="photos-heading">PHOTO GALLERY</h1>
      </div>

      <HamburgerMenu />

      <div className="photos-container">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-thumbnail" onClick={() => openModal(photo)}>
            <img src={photo.path} alt="" />
            <p>{photo.description}</p>
            <button className="view-button">View</button>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="photo-modal">
          <img src={selectedPhoto.path} alt="" />
          <p>{selectedPhoto.description}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}

      <Socials />
    </div>
  );
};

export default Photos;
