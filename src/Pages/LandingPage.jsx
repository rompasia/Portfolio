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
      <div class="glitch-container">
          Just Portfolio
        <span>Just Portfolio</span>
        <span>Just Portfotio</span>
      </div>
        <div className="landing-buttons">
          <button onClick={onEnterPortfolio}>Enter Portfolio</button>
          <button disabled>More Soon</button>
        </div>
      </div>
      <div class="loader">
        <div class="loader-inner"> 
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
          <div class="loader-block"></div>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;