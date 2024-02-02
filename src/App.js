// App.js for react-router-dom v6
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import Home from './Home';
import Contact from './Contact';
import HeroSection from './HeroSection';
import ProjectSection from './ProjectSection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        <main>
          <Routes>
          <Route path="/" element={<Header />} />
            <Route path="/" element={<HeroSection />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<ProjectSection />} />
            <Route path="/" element={<Footer />} />
          </Routes>
        </main>
    
      </div>
    </Router>
  );
}

export default App;
