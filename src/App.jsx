import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Category from './pages/Category';

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <main className="main-content">

          <nav className="navbar">
            <div className="appname">Recipe Maker</div>

            <ul className="navbar-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/category">Category Wise</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </nav>

          <section className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </section>

        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>© 2025 RecipeFinder</p>
            <div className="footer-links">
              <a href="https://github.com/Lalith0024">GitHub</a>
              <a href="https://www.instagram.com/instagram/?hl=en">Instagram</a>
              <a href="https://www.linkedin.com/in/kasula-lalithendra-1b90b7323/">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
