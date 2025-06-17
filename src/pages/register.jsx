// Register.jsx
import React, { useState} from 'react';
import '../style/register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [agreed, setAgreed] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email.includes('@')) newErrors.email = "Must include '@'";
    if (!username) newErrors.username = 'Username required';
    if (password.length < 6) newErrors.password = 'Minimum 6 characters';
    if (confirmPassword !== password) newErrors.confirmPassword = 'Passwords do not match';
    if (!agreed) newErrors.agreed = 'You must accept terms';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();
    setErrors(foundErrors);
    setTouched({ email: true, username: true, password: true, confirmPassword: true });
    if (Object.keys(foundErrors).length === 0) {
      console.log('Registration successful!');
    }
  };

  return (
    <div className="register-container">
      <div className="register-illustration">
        <h1 className="brand-name">🍲 Recipe Maker</h1>
        <p className="tagline">Create your culinary identity!</p>
      </div>

      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>

        <div className={`input-box ${touched.email && errors.email ? 'error' : ''}`}>
          <label>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
          />
          {touched.email && errors.email && <span className="tooltip">{errors.email}</span>}
        </div>

        <div className={`input-box ${touched.username && errors.username ? 'error' : ''}`}>
          <label>Username</label>
          <input
            type="text"
            placeholder="your_username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, username: true }))}
          />
          {touched.username && errors.username && <span className="tooltip">{errors.username}</span>}
        </div>

        <div className={`input-box ${touched.password && errors.password ? 'error' : ''}`}>
          <label>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
          />
          <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
          </span>
          {touched.password && errors.password && <span className="tooltip">{errors.password}</span>}
        </div>

        <div className={`input-box ${touched.confirmPassword && errors.confirmPassword ? 'error' : ''}`}>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, confirmPassword: true }))}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <span className="tooltip">{errors.confirmPassword}</span>
          )}
        </div>

        <div className="terms-box">
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="terms">I agree to the Terms & Conditions</label>
          {errors.agreed && <span className="tooltip">{errors.agreed}</span>}
        </div>

        <button className="register-btn" type="submit" disabled={!agreed}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
