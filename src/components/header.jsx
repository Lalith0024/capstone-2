import { useState } from "react";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="appname">Recipe Maker</div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>Home</li>
        <li>Category Wise</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Header;
