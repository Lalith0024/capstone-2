import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="appname">Recipe Maker</div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>Home</li>
        <li>Categories</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar" style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></div>
        <div className="bar" style={{ opacity: menuOpen ? 0 : 1 }}></div>
        <div className="bar" style={{ transform: menuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none" }}></div>
      </div>
    </nav>
  );
};

export default Header;
