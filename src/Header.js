import React from 'react';
import './Header.css';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1>Portfolio</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;