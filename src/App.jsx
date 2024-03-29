import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SweetCartMenu from './components/SweetCartMenu';
import FAQ from './components/FAQ';
import Photos from './components/Photos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sweetcartmenu" element={<SweetCartMenu />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </Router>
  );
};

export default App;
