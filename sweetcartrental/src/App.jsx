import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PackagesPage from './components/PackagesPage';
import DessertSelectionsPage from './components/DessertSelectionsPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/dessert-selections" component={DessertSelectionsPage} />
      </Routes>
    </Router>
  );
};

export default App;
