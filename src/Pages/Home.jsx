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
    </section>
  );
};

export default Home;