import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorShown, setErrorShown] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const btnRef = useRef(null);

  const validateEmail = email.includes('@');
  const isFormValid = validateEmail && password.length > 0 && agreed;

  const shiftClasses = ['shift-left', 'shift-right', 'shift-top', 'shift-bottom'];

  const resetButtonPosition = () => {
    shiftClasses.forEach(cls => btnRef.current?.classList.remove(cls));
  };

  const handleHover = () => {
    if (!isFormValid) {
      const currentClass = shiftClasses.find(cls => btnRef.current.classList.contains(cls));
      const nextClass =
        shiftClasses[(shiftClasses.indexOf(currentClass) + 1) % shiftClasses.length];
      shiftClasses.forEach(cls => btnRef.current.classList.remove(cls));
      btnRef.current.classList.add(nextClass);
      setErrorShown(true);
    } else {
      resetButtonPosition();
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid) {
      resetButtonPosition();
      toast.success('Login successful');
      navigate('/home');
    } else {
      setErrorShown(true);
      toast.error('Please fill all fields correctly');
    }
  };

  return (
    <div className="login-container">
      <div className="login-illustration">
        <h1 className="brand-name">🍲 RecipeHunt</h1>
        <p className="tagline">Discover. Cook. Enjoy.</p>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login to Continue</h2>
        <div className={`input-box ${errorShown && !validateEmail ? 'error' : ''}`}>
          <label>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorShown && !validateEmail && (
            <span className="tooltip">Must include '@'</span>
          )}
        </div>
        <div className={`input-box ${errorShown && password === '' ? 'error' : ''}`}>
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
          {errorShown && password === '' && (
            <span className="tooltip">Password required</span>
          )}
        </div>
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="agree">I accept the Terms & Conditions</label>
        </div>
        {errorShown && !agreed && (
          <span className="tooltip">You must accept terms to continue</span>
        )}
        <div className="button-wrapper">
          <button
            ref={btnRef}
            className="login-btn"
            type="submit"
            onMouseEnter={handleHover}
          >
            Log In
          </button>
        </div>
        <p className="register-link">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
