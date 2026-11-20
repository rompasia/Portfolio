import React from 'react';
import myphoto from '../Assets/myphoto.jpg';

const Home = () => {
  return (
    <section id="home" aria-label="Home">
      <div className="home-content">
        <img
          src={myphoto}
          alt="Profile"
          className="profile-photo"
        />
        <div className="welcome-text">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Hello! I am Joshua Rom Pasia and I'm a passionate Computer Engineer student specialized in embedded systems, circuit drafting and design, IoT, and robotics.
            Explore my projects, skills, trainings, and certifications below.
          </p>
        </div>
      </div>
      <div className="heart-rate">
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width={550} height={210} viewBox="0 0 550 210"> </svg>
      </div>
    </section>
  );
};

export default Home;