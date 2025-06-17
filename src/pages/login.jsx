import React, { useState } from 'react';
import '/Users/kasulalalithendra/Desktop/capstone-2/src/style/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hovered, setHovered] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter input to login');
      return;
    }

    // Dummy login check
    if (email === "demo@recipe.com" && password === "123456") {
      alert("Login successful!");
    } else {
      alert("Invalid credentials.");
    }
  };

  const isInputEmpty = !email || !password;

  return (
    <div className="login-wrapper">
      <h2>Login to Your Recipe Box</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError('');
          }}
        />

        {error && <p className="error">{error}</p>}

        <div
          className={`login-btn-wrapper ${hovered && isInputEmpty ? 'dodge' : ''}`}
          onMouseEnter={() => isInputEmpty && setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <button type="submit" className="login-btn">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
