import React, { useState } from 'react';
import '../style/register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email.includes('@')) newErrors.email = "Must include '@'";
    else if (!username) newErrors.username = 'Username required';
    else if (!password) newErrors.password = 'Password required';
    else if (password.length < 6) newErrors.password = 'Min 6 characters';
    else if (confirmPassword !== password) newErrors.confirmPassword = 'Passwords do not match';
    else if (!acceptedTerms) newErrors.terms = 'You must accept the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validate()) {
      // Placeholder: Navigate or register logic
      alert('Registered successfully!');
    }
  };

  return (
    <div className="register-container">
      <div className="register-illustration">
        <h1 className="brand-name">🍲 Recipe Maker</h1>
        <p className="tagline">Create. Share. Inspire.</p>
      </div>

      <form className="register-form" onSubmit={handleRegister}>
        <h2>Create Account</h2>

        <div className={`input-box ${errors.email ? 'error' : ''}`}>
          <label>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="tooltip">{errors.email}</span>}
        </div>

        <div className={`input-box ${errors.username ? 'error' : ''}`}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <span className="tooltip">{errors.username}</span>}
        </div>

        <div className={`input-box ${errors.password ? 'error' : ''}`}>
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
          {errors.password && <span className="tooltip">{errors.password}</span>}
        </div>

        <div className={`input-box ${errors.confirmPassword ? 'error' : ''}`}>
          <label>Confirm Password</label>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span
            className="toggle-password"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? 'Hide' : 'Show'}
          </span>
          {errors.confirmPassword && <span className="tooltip">{errors.confirmPassword}</span>}
        </div>

        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            id="terms"
          />
          <label htmlFor="terms"> I agree to the Terms and Privacy Policy</label>
        </div>
        {errors.terms && <span className="tooltip">{errors.terms}</span>}

        <button className="register-btn" type="submit" disabled={!acceptedTerms}>
          Register
        </button>

        <p className="login-link">
          Already have an account? <a href="#">Log In</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
