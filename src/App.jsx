import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Nav from './Components/Nav';
import DashBoard from './Pages/DashBoard';

const App = () => {
  return (
   <BrowserRouter>
  <Nav />
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<DashBoard />} />
  </Routes>
</BrowserRouter>
  );
};

export default App;
