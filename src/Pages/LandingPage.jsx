import React from 'react';

const LandingPage = ({ onEnterPortfolio }) => {
  return (
    <div id="landing-page">
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