import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

  const validateEmail = email.includes('@');
  const isFormValid = validateEmail && password.length > 0;

  const handleHover = () => {
    if (!isFormValid) {
      setIsShaking(true);
      setButtonPosition({
        top: Math.random() * 80 - 40,
        left: Math.random() * 80 - 40,
      });
      setTimeout(() => setIsShaking(false), 400);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <div className="login-illustration">
        <h1 className="brand-name">🍲 Recipe Maker</h1>
        <p className="tagline">Discover. Cook. Enjoy.</p>
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login to Continue</h2>

        <div className={`input-box ${!validateEmail && email ? 'error' : ''}`}>
          <label>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!validateEmail && email && <span className="tooltip">Must include '@'</span>}
        </div>

        <div className={`input-box ${password === '' && email !== '' ? 'error' : ''}`}>
          <label>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
          {password === '' && email !== '' && <span className="tooltip">Password required</span>}
        </div>

        <button
          className={`login-btn ${isShaking ? 'shake' : ''}`}
          style={{
            transform: `translate(${buttonPosition.left}px, ${buttonPosition.top}px)`
          }}
          onMouseEnter={handleHover}
          type="submit"
        >
          Log In
        </button>

        <p className="register-link">
          Don’t have an account? <a href="#">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
