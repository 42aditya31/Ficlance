import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Nav from './Components/Nav';
import DashBoard from './Pages/DashBoard';
import NewProject from './Pages/NewProject';
import PortfolioPage from './Pages/PortfolioPage';

const App = () => {
  return (
   <BrowserRouter>
  <Nav />
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<DashBoard />} />
    <Route path="/new-project" element={<NewProject />} />
    <Route path="/portfolio" element={<PortfolioPage />} />
  </Routes>
</BrowserRouter>
  );
};

export default App;
