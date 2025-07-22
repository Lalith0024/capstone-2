import React, { useState } from "react";
import "../style/register.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const navigate = useNavigate();

  const isEmailValid = email.includes("@") && email.includes(".");
  const isUsernameValid = username.length >= 4;
  const isPasswordStrong =
    password.length >= 6 && /[A-Z]/.test(password) && /[!@#$%^&*]/.test(password);
  const doPasswordsMatch = password === confirmPass;

  const getPasswordStrength = () => {
    if (isPasswordStrong) return "strong";
    else if (password.length >= 4) return "medium";
    return "weak";
  };

  const handleNext = () => {
    if (step === 1 && isEmailValid) {
      setStep(2);
    } else if (step === 2 && isUsernameValid) {
      setStep(3);
    } else if (step === 3 && isPasswordStrong) {
      setStep(4);
    } else if (step === 4 && doPasswordsMatch && acceptedTerms) {
      toast.success('Registration successful');
      navigate('/home');
    } else {
      toast.error('Please fill all fields correctly');
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
        <>
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
          <div className="input-box">
            <label>Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              placeholder="Confirm your password"
            />
            <span
              className="show-hide-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </span>
          </div>
        </>
      );
    } else if (step === 4) {
      return (
        <>
          <div className="input-box">
            <label>Email</label>
            <input type="text" value={email} disabled />
          </div>
          <div className="input-box">
            <label>Username</label>
            <input type="text" value={username} disabled />
          </div>
        </>
      );
    }
  };

  return (
    <div className="register-container">
      <div className="register-illustration">
        <h1 className="brand-name">Recipe Maker</h1>
        <p className="tagline">Cook, Create & Share your favorite dishes!</p>
      </div>

      <form className="register-form" onSubmit={(e) => e.preventDefault()} data-step={step}>
        <h2>{step < 4 ? "Create Account" : "Confirm Details"}</h2>
        {renderStep()}
        <button
          type="button"
          className="register-btn"
          onClick={handleNext}
          disabled={
            (step === 1 && !isEmailValid) ||
            (step === 2 && !isUsernameValid) ||
            (step === 3 && !isPasswordStrong) ||
            (step === 4 && (!doPasswordsMatch || !acceptedTerms))
          }
        >
          {step < 4 ? "Next →" : "Register"} 
        </button>

        <div className="login-link">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
