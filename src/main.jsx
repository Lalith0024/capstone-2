import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx'; // ✅ import your new register page

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<App />} />
        <Route path="/register" element={<Register />} /> {/* ✅ Register route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
