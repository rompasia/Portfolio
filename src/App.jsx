import React, { useState, useEffect } from 'react';
import Navbar from './Pages/Navbar';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import ProjectsResearches from './Pages/ProjectsResearches';
import TrainingsSeminars from './Pages/TrainingsSeminars';
import Certifications from './Pages/Certifications';
import ContactMe from './Pages/ContactMe';
import Gallery from './Pages/Gallery';
import './Styles/styles.css';
import './Styles/skills.css';

const App = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnterPortfolio = () => {
    setShowLanding(false);
  };

  const handleHomeClick = () => {
    setShowLanding(true);
  };

  const handleOpenGallery = () => {
    setShowGallery(true);
  };

  const handleCloseGallery = () => {
    setShowGallery(false);
  };

  return (
    <>
      {showLanding ? (
        <LandingPage onEnterPortfolio={handleEnterPortfolio} />
      ) : (
        <>
          <Navbar onHomeClick={handleHomeClick} />
          <main>
            <Home />
            <AboutMe />
            <ProjectsResearches onOpenGallery={handleOpenGallery} />
            <TrainingsSeminars />
            <Certifications />
            <ContactMe />

            <a
              href="mailto:mjrpasia@tip.edu.ph"
              className="floating-email"
              title="Send me an email"
            >
              📧
            </a>
          </main>

          <footer>
            <p>© {new Date().getFullYear()} Computer Engineer Portfolio. All rights reserved.</p>
          </footer>

          <Gallery isOpen={showGallery} onClose={handleCloseGallery} />
        </>
      )}
    </>
  );
};

export default App;