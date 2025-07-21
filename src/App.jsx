import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Categories from './pages/category';
import Login from './pages/Login';
import Register from './pages/register';

import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="page-container">
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
