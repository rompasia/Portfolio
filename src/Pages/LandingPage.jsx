import React from 'react';
import PortLogo from '../Assets/PortLogo.png';

const LandingPage = ({ onEnterPortfolio }) => {
  return (
    <div id="landing-page">
      <div className="Landing-Logo">
        <img src={PortLogo} alt="Logo" className="landing-logo" />
      </div>

      <div className="landing-content">
        <div className="glitch-container">
          Just Portfolio
          <span>Just Portfolio</span>
          <span>Just Portfolio</span>
        </div>
        <div className="landing-buttons">
          <button onClick={onEnterPortfolio}>Enter Portfolio</button>
          <button disabled>More Soon</button>
        </div>
      </div>

      <div className="loader">
        <div className="loader-inner">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="loader-block"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;