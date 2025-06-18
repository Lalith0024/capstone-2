import React, { useState} from "react";
import "../style/register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [humanCheck, setHumanCheck] = useState(false);

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
    if (step === 1 && isEmailValid) setStep(2);
    else if (step === 2 && isUsernameValid) setStep(3);
    else if (step === 3 && isPasswordStrong) setStep(4);
  };

  const handleRegister = () => {
    if (doPasswordsMatch && acceptedTerms && humanCheck) {
      setShowPopup(true);
      setTimeout(() => {
        navigate("/home");
      }, 2000); // 2-second delay
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className={`input-box ${email && !isEmailValid ? "error" : email && isEmailValid ? "valid" : ""}`}>
            <label>Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {email && (
              <span className={`tooltip ${isEmailValid ? "valid" : "invalid"}`}>
                {isEmailValid ? "Email looks valid" : "Include '@' and '.'"}
              </span>
            )}
          </div>
        );
      case 2:
        return (
          <div className={`input-box ${username && !isUsernameValid ? "error" : username && isUsernameValid ? "valid" : ""}`}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Minimum 4 characters"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {username && (
              <span className={`tooltip ${isUsernameValid ? "valid" : "invalid"}`}>
                {isUsernameValid ? "Username available" : "Minimum 4 characters required"}
              </span>
            )}
          </div>
        );
      case 3:
        return (
          <div className={`input-box ${password && !isPasswordStrong ? "error" : password && isPasswordStrong ? "valid" : ""}`}>
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={getPasswordStrength()}
              />
              <span
                className="show-hide-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            {password && (
              <>
                <span className={`strength ${getPasswordStrength()}`}>
                  Strength: {getPasswordStrength()}
                </span>
                <span className={`tooltip ${isPasswordStrong ? "valid" : "invalid"}`}>
                  Use 6+ chars, 1 uppercase, 1 special character
                </span>
              </>
            )}
          </div>
        );
      case 4:
        return (
          <>
            <div className={`input-box ${confirmPass && !doPasswordsMatch ? "error" : confirmPass && doPasswordsMatch ? "valid" : ""}`}>
              <label>Confirm Password</label>
              <div className="password-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
                <span
                  className="show-hide-toggle"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </span>
              </div>
              {confirmPass && (
                <span className={`tooltip ${doPasswordsMatch ? "valid" : "invalid"}`}>
                  {doPasswordsMatch ? "Passwords match" : "Passwords do not match"}
                </span>
              )}
            </div>

            <div className="terms-box">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
              />
              <label>I accept the terms and conditions</label>
            </div>

            <div className="terms-box">
              <input
                type="checkbox"
                checked={humanCheck}
                onChange={() => setHumanCheck(!humanCheck)}
              />
              <label>I'm not a robot</label>
            </div>
          </>
        );
      default:
        return null;
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

        {step < 4 ? (
          <button
            type="button"
            className="register-btn"
            onClick={handleNext}
            disabled={
              (step === 1 && !isEmailValid) ||
              (step === 2 && !isUsernameValid) ||
              (step === 3 && !isPasswordStrong)
            }
          >
            Next →
          </button>
        ) : (
          <button
            type="button"
            className="register-btn final"
            onClick={handleRegister}
            disabled={!doPasswordsMatch || !acceptedTerms || !humanCheck}
          >
            Register
          </button>
        )}

        <div className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>🎉 Registered Successfully!</h2>
            <p>Redirecting to Home…</p>
            <div className="loader"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
