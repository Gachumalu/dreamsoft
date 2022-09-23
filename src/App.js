import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar';

import './App.css';
import Services from './components/services/Services';
import LatestPro from './components/latestProjects/LatestPro';
import MeetTeam from './components/meetTeam/MeetTeam';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<LatestPro />} />
        <Route path="/team" element={<MeetTeam />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
