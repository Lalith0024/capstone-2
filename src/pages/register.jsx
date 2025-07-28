import React, { useState } from "react";
import "../style/register.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      toast.success('Registration successful');
      navigate('/home');
    }
  };

  const renderStep = () => {
    if (step === 1) {
      return (
        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
      );
    } else if (step === 2) {
      return (
        <div className="input-box">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Choose a username"
          />
        </div>
      );
    } else if (step === 3) {
      return (
        <div className="input-box">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
          />
          <span
            className="show-hide-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
      );
    }
  };

  return (
    <div className="register-container">
      <div className="register-illustration">
        <h1 className="brand-name">RecipeHunt</h1>
        <p className="tagline">Cook, Create & Share your favorite dishes!</p>
      </div>
      <form className="register-form" onSubmit={(e) => e.preventDefault()} data-step={step}>
        <h2>Create Account</h2>
        {renderStep()}
        <button
          type="button"
          className="register-btn"
          onClick={handleNext}
        >
          {step < 3 ? "Next →" : "Register"}
        </button>
        <div className="login-link">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
