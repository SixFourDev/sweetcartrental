import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SweetCartMenu from './components/SweetCartMenu';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sweetcartmenu" element={<SweetCartMenu />} />
      </Routes>
    </Router>
  );
};

export default App;
