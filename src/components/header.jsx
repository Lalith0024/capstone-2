import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/Header.css';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <header className={`navbar${menuOpen ? ' blur-bg' : ''}`}>
      <div className="appname">
        <Link to="/home">RecipeHunt</Link>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/categories" className={location.pathname === '/categories' ? 'active' : ''}>
            Categories
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </li>
        <li className="user-menu">
          <span onClick={toggleUserMenu} className="user-icon">
            <FaUserCircle size={26} />
          </span>
          {userMenuOpen && (
            <div className="user-dropdown">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {menuOpen && <div className="side-drawer-bg" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
