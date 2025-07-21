import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// pending go to top button complete it 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Quick Links</h3>
        <Link to="/about">About Us</Link>
        <Link to="/home">Services</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <a href="mailto:Kasulalalithendra@gmail.com">Kasulalalithendra@gmail.com</a>
        <a href="tel:+1390073500">+1 390 073 500</a>
      </div>

      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/lalithendra-kasula-1b90b7323/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/lalith_5379/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Your Company Name. All rights reserved.</p>
      </div>
      <button className="gotopbtn">⬆</button>

    </footer>
  );
};

export default Footer;
