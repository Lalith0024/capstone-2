import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="page-container">
        <main className="main-content">

          {/* Navigation Bar */}
          <nav className="navbar">
            <div className="appname">Recipe Maker</div>

            <ul className="navbar-links">
              <li><button>Home</button></li>
              <li><button>Category Wise</button></li>
              <li><button>About Us</button></li>
              <li><button>Contact Us</button></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section className="content">
            <h1>Find Your Perfect Recipe!</h1>
          </section>

        </main>

        {/* Footer */}
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
    </>
  );
}

export default App;
