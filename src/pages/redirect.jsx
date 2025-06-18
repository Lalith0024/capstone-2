import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/redirect.css'; // make sure this path is correct

const RedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="redirect-page">
      <div className="confetti-container">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="confetti"></div>
        ))}
      </div>
      <div className="popup">
        <h1 className="success-text">🎉 Registered Successfully!</h1>
        <p className="subtext">Redirecting to Homepage…</p>
      </div>
    </div>
  );
};

export default RedirectPage;
