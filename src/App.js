import React from 'react';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Servies';
import NavBar from './Component/NavBar';
import Departments from './Component/Departments';
import { Routes, Route } from 'react-router-dom';
import Contact from './Component/Contact';
import './App.css';
import './StyleHome.css';
import './StyleAbout.css';
import './StyleDep.css';
import './Stylecontact.css';
import './StyleSer.css';
import './Navbar.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home name="Ahmed" age="24" />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>


  );
}

export default App;

