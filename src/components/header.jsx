import React, { useState } from 'react';
import '/Users/kasulalalithendra/Desktop/capstone-2/src/style/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="appname">Recipe Maker</div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>Category Wise</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
}

export default Header;
