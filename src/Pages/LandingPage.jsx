import React from 'react';
import PortLogo from '../Assets/PortLogo.png';


const LandingPage = ({ onEnterPortfolio }) => {
  return (
    <div id="landing-page">
      <div classname="Landing-Logo">
        <img
          src= {PortLogo}
          alt="Logo"
          className="landing-logo"
        />
      </div>
      <div className="landing-content">
        <h1>Welcome</h1>
        <div className="landing-buttons">
          <button onClick={onEnterPortfolio}>Enter Portfolio</button>
          <button disabled>More Soon</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;