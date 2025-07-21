// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home.jsx';

function App() {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
