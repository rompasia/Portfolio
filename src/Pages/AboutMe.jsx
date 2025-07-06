import React, { useState } from 'react';
import ForHer from './ForHer'; 
import AI_Robotics1 from '../Me/AI_RoboticsCompe.jpg';
import AI_Robotics2 from '../Me/AI_RoboticsCompe2.jpg';
import AI_Robotics3 from '../Me/AI_RoboticsCompe3.jpg';
import Snaps1 from '../Me/Snaps1.jpg';
import Snaps2 from '../Me/Snaps2.jpg'; 
import Snaps3 from '../Me/Snaps3.jpg';
import Snaps4 from '../Me/Snaps4.jpg';
import Snaps5 from '../Me/Snaps5.jpg';
import CoffeeMe from '../Me/Coffee_me.png';
import Kape1 from '../Me/Kape1.jpg';
import Kape2 from '../Me/Kape2.jpg';
import London1 from '../Me/London1.jpg';
import piano1 from '../Me/piano1.png';
import piano2 from '../Me/piano2.png';
import piano3 from '../Me/piano3.png';


const AboutMe = () => {
  const [isTechnicalSkillsOpen, setIsTechnicalSkillsOpen] = useState(false);
  const [isSoftSkillsOpen, setIsSoftSkillsOpen] = useState(false);
  const [selectedTechnicalSkill, setSelectedTechnicalSkill] = useState(null);
  const [selectedSoftSkill, setSelectedSoftSkill] = useState(null);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showForHer, setShowForHer] = useState(false);

  const personalInfo = {
    age: 23,
     
    hobbies: [
      "Building and Programming Embedded Systems",
      "Circuit Design and Electronics",
      "Gaming",
      "Sports (Badminton, Bowling, Swimming)",
      "Music (Listening and Playing Piano)",
    ],
    likes: [
      "OPM, OST, KPOP, POP, RnB",
      "Robotics and Mechatronics",
      "Gaming and eSports",
      { text: "Her", action: () => setShowForHer(true) },
      "Automation and IoT projects",
      "Coffee and Tea",
    ],
    dislikes: [
      "Repetitive manual tasks",
      "MYself",
      "My Supervisor",
      "My Boss"
    ],
    photos: [
      AI_Robotics1,
      AI_Robotics2,
      AI_Robotics3, 
      Snaps1,
      Snaps2,
      Snaps3,
      Snaps4,
      Snaps5,
      CoffeeMe,
      Kape1,
      Kape2,
      London1,
      piano1,
      piano2,
      piano3
    ]  
    };

  //eslint-disable-next-line
  /*const gradegree = "Master of Science in Computer Engineering"; 
  const Specialization = "Mechatronics and Robotics";
  const gradyear = 2028;*/
  const degree = "Bachelor of Science in Computer Engineering";
  const track = "Robotics";
  const university = "Technological Institute of the Philippines Manila";
  const graduationYear = "Present";
  const SeniorHigh = "Science Technology Engineering and Mathematics Strand";
  const SeniorHighSchool = "Mapua University Intramuros";
  const graduationYearshs = 2020;
  const JuniorHigh = "Manila Cathedral School";
  const graduationYearjhs = 2018;

  const technicalSkills = [
    {
      name: "C/C++",
      description: "Systems programming, embedded programming, and algorithm implementation. Used extensively for robotics control systems and competitive programming.",
      level: "Mid-Advanced"
    },
    {
      name: "JavaScript",
      description: "Full-stack web development with modern frameworks. Experience in asynchronous programming, and building interactive web applications.",
      level: "Mid-Intermediate"
    },
    {
      name: "Verilog",
      description: "Hardware description language for digital circuit design and FPGA programming. Used for designing logic circuits and digital systems.",
      level: "Low-Intermediate"
    },
    {
      name: "Python",
      description: "Data analysis, machine learning, automation scripts, and IoT development. Familiar with libraries like NumPy, Pandas, and OpenCV.",
      level: "Mid-Intermediate"
    },
    {
      name: "HTML",
      description: "Semantic markup and web accessibility standards. Experience in creating structured, friendly web content.",
      level: "Mid-Intermediate"
    },
    {
      name: "CSS",
      description: "Modern styling techniques including Color Scheming, Grid, animations, and responsive design. Experience with frameworks and Interface making.",
      level: "Mid-Intermediate"
    },
    {
      name: "Git",
      description: "Version control, branching strategies, and collaborative development workflows. Experience with GitHub, and team-based projects.",
      level: "Low-Intermediate"
    },
    {
      name: "SQL",
      description: "Database design, query optimization, and data management. Experience with MySQL, PostgreSQL, and database integration in applications.",
      level: "Mid-Intermediate"
    },
    {
      name: "PHP",
      description: "Server-side web development, API integration, and database integration. Experience with the frameworks and practices.",
      level: "Mid-Intermediate"
    },
    {
      name: "IoT",
      description: "Internet of Things development including sensor integration, microcontroller programming, and wireless communication protocols.",
      level: "Mid-Advanced"
    },
    {
      name: "Control Systems",
      description: "Design and implementation of automated control systems for robotics applications. Experience with Programmable Logic Circuits (PLC).",
      level: "Low-Intermediate"
    },
    {
      name: "Circuit Drafting and Design",
      description: "PCB design, schematic creation, and electronic circuit analysis. Proficient in CAD tools and circuit simulation software.",
      level: "Mid-Intermediate"
    }
  ];

  const softSkills = [
    {
      name: "Leadership",
      description: "Led robotics teams from junior high through college, coordinating team efforts and guiding technical decisions. Experience in project management.",
      level: "Mid-Intermediate"
    },
    {
      name: "Problem Solving",
      description: "Analytical thinking developed through competitive programming and robotics challenges. Ability to break down some complex problems into manageable solutions.",
      level: "Mid-Intermediate"
    },
    {
      name: "Team Collaboration",
      description: "Effective collaboration in multidisciplinary teams, combining technical expertise with communication skills to achieve project goals.",
      level: "High-Intermediate"
    },
    {
      name: "Communication",
      description: "Ability to explain technical concepts to both technical and non-technical audiences. Experience in presenting project results and technical documentation.",
      level: "Mid-Intermediate"
    },
    {
      name: "Adaptability",
      description: "Quick to learn new technologies and adapt to changing project requirements. Comfortable working with diverse tasks and frameworks.",
      level: "Low-Advanced"
    },
    {
      name: "Critical Thinking",
      description: "Analytical approach to system design and debugging. Strong logical reasoning skills developed through engineering coursework and practical applications.",
      level: "Mid-Intermediate"
    },
    {
      name: "Time Management",
      description: "Prioritization and scheduling of multiple projects and academic responsibilities. Proven ability to meet deadlines in competitive environments.",
      level: "Low-Intermediate"
    },
    {
      name: "Creativity",
      description: "Innovative approach to technical challenges, finding unique solutions in robotics design and programming. Experience in creative problem-solving competitions.",
      level: "Low-Intermediate"
    }
  ];

  const achievements = [
    "2nd Place AI Robotics at MRSP 8th National Skills Competition (2025)",
    "Led a team for ITCUP Robotics-ROBOMAN Challenge by TECHNOKIDS and La Salle Computer Society (2014 to 2018)",
    "Math Quiz Bee Champion Grade 9 (2017)",
  ];

  const openPhotoModal = (photo, index) => {
    setSelectedPhoto({ src: photo, index });
    setIsPhotoModalOpen(true);
  };
  
  const closePhotoModal = () => {
    setIsPhotoModalOpen(false);
    setSelectedPhoto(null);
  };
  
  const navigatePhoto = (direction) => {
    if (!selectedPhoto) return;
    
    const currentIndex = selectedPhoto.index;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex + 1 >= personalInfo.photos.length ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex - 1 < 0 ? personalInfo.photos.length - 1 : currentIndex - 1;
    }
    
    setSelectedPhoto({
      src: personalInfo.photos[newIndex],
      index: newIndex
    });
  };

  const openTechnicalSkillsModal = () => {
    setIsTechnicalSkillsOpen(true);
  };

  const closeTechnicalSkillsModal = () => {
    setIsTechnicalSkillsOpen(false);
    setSelectedTechnicalSkill(null);
  };

  const openSoftSkillsModal = () => {
    setIsSoftSkillsOpen(true);
  };

  const closeSoftSkillsModal = () => {
    setIsSoftSkillsOpen(false);
    setSelectedSoftSkill(null);
  };

  const selectTechnicalSkill = (skill) => {
    setSelectedTechnicalSkill(skill);
  };

  const selectSoftSkill = (skill) => {
    setSelectedSoftSkill(skill);
  };

   // Photo Modal Component
   const PhotoModal = () => {
    if (!isPhotoModalOpen || !selectedPhoto) return null;

    return (
      <div 
        className="photo-modal-overlay" 
        onClick={closePhotoModal}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}
      >
        <div 
          className="photo-modal-content"
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Close button */}
          <button
            onClick={closePhotoModal}
            style={{
              position: 'absolute',
              top: '-40px',
              right: '0',
              background: 'transparent',
              border: 'none',
              color: '#00ff88',
              fontSize: '24px',
              cursor: 'pointer',
              zIndex: 1001,
              padding: '5px',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ✕
          </button>

          {/* Previous button */}
          <button
            onClick={() => navigatePhoto('prev')}
            style={{
              position: 'absolute',
              left: '-50px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 255, 136, 0.2)',
              border: '1px solid #00ff88',
              color: '#00ff88',
              fontSize: '20px',
              cursor: 'pointer',
              padding: '10px 15px',
              borderRadius: '50%',
              zIndex: 1001
            }}
          >
            ‹
          </button>

          {/* Photo */}
          <img
            src={selectedPhoto.src}
            alt={`Personal snapshot ${selectedPhoto.index + 1}`}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '8px',
              border: '2px solid #00ff88'
            }}
          />

          {/* Next button */}
          <button
            onClick={() => navigatePhoto('next')}
            style={{
              position: 'absolute',
              right: '-50px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 255, 136, 0.2)',
              border: '1px solid #00ff88',
              color: '#00ff88',
              fontSize: '20px',
              cursor: 'pointer',
              padding: '10px 15px',
              borderRadius: '50%',
              zIndex: 1001
            }}
          >
            ›
          </button>

          {/* Photo counter */}
          <div
            style={{
              position: 'absolute',
              bottom: '-40px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#00ff88',
              fontSize: '14px',
              background: 'rgba(0, 0, 0, 0.7)',
              padding: '5px 10px',
              borderRadius: '15px'
            }}
          >
            {selectedPhoto.index + 1} / {personalInfo.photos.length}
          </div>
        </div>
      </div>
    );
  };

  const TechnicalSkillsModal = () => {
    if (!isTechnicalSkillsOpen) return null;
    

    return (
      <div className="skills-overlay">
        <div className="skills-modal">
          <div className="skills-header">
            <h2>Hard Skills</h2>
            <p>Click on any skill to learn more about my technical experience</p>
            <button className="skills-close" onClick={closeTechnicalSkillsModal}>
              ✕
            </button>
          </div>
          
          <div className="skills-content">
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`skill-card ${selectedTechnicalSkill?.name === skill.name ? 'active' : ''}`}
                  onClick={() => selectTechnicalSkill(skill)}
                >
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}</span>
                </div>
              ))}
            </div>
            
            {selectedTechnicalSkill && (
              <div className="skill-details">
                <h3>{selectedTechnicalSkill.name}</h3>
                <div className="skill-meta">
                  <span className="skill-level-badge">{selectedTechnicalSkill.level}</span>
                </div>
                <p>{selectedTechnicalSkill.description}</p>
              </div>
            )}
          </div>
          
          <div className="skills-footer">
            <button className="back-button" onClick={closeTechnicalSkillsModal}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  };

  const SoftSkillsModal = () => {
    if (!isSoftSkillsOpen) return null;

    return (
      <div className="skills-overlay">
        <div className="skills-modal">
          <div className="skills-header">
            <h2>Soft Skills</h2>
            <p>Click on any skill to learn more about my interpersonal abilities</p>
            <button className="skills-close" onClick={closeSoftSkillsModal}>
              ✕
            </button>
          </div>
          
          <div className="skills-content">
            <div className="skills-grid">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`skill-card ${selectedSoftSkill?.name === skill.name ? 'active' : ''}`}
                  onClick={() => selectSoftSkill(skill)}
                >
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}</span>
                </div>
              ))}
            </div>
            
            {selectedSoftSkill && (
              <div className="skill-details">
                <h3>{selectedSoftSkill.name}</h3>
                <div className="skill-meta">
                  <span className="skill-level-badge">{selectedSoftSkill.level}</span>
                </div>
                <p>{selectedSoftSkill.description}</p>
              </div>
            )}
          </div>
          
          <div className="skills-footer">
            <button className="back-button" onClick={closeSoftSkillsModal}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="about-me" className="container" aria-label="About Me">
        <h2>About Me</h2>
        <div className="details">
          <div className="detail-column">
            <h3>Profile</h3>
            <p><strong>Aspiring Field-Programmable Gate Array Engineer</strong></p>            
            <p><strong>Age:</strong> {personalInfo.age}</p>
            <h4>Hobbies</h4>
            <ul className="hobbies">
              {personalInfo.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
            <h4>Likes</h4>
            <ul className="likes">
              {personalInfo.likes.map((like, index) => (
                <li key={index}>
                  {typeof like === 'object' ? (
                    <button onClick={like.action} className="link-button">
                      {like.text}
                    </button>
                  ) : (
                    like
                  )}
                </li>
              ))}
            </ul>
            <h4>Dislikes</h4>
            <ul className="dislikes">
              {personalInfo.dislikes.map((dislike, index) => (
                <li key={index}>{dislike}</li>
              ))}
            </ul>
            <h4>Gallery</h4>
              <div className="photo-gallery">
                {personalInfo.photos.map((src, idx) => (
                  <figure key={idx} className="photo-item"
                  onClick={() => openPhotoModal(src, idx)}>
                    <img
                      src={src}
                      alt={`Personal snapshot ${idx + 1}`}
                      loading="lazy"
                    />
                  </figure>
                ))}
              </div>
          </div>
          <div className="detail-column">
            <h3>Education</h3>
         {/*<h4>Graduate School</h4>
            <p>{gradegree}</p>
            <p>Specialization: {Specialization}</p>
            <p>Technological Institute of the Philippines</p>
            <p>2026 to {gradyear}</p>*/}
            <h4>College</h4>
            <p>{degree}</p>
            <p>Track Elective: {track}</p>
            <p>{university}</p>
            <p>2021 to {graduationYear}</p>
            <h4>Senior High School</h4>
            <p>{SeniorHigh}</p>
            <p>{SeniorHighSchool}</p>
            <p>2018 to {graduationYearshs}</p>
            <h4>Junior High School</h4>
            <p>{JuniorHigh}</p>
            <p>2014 to {graduationYearjhs}</p>
            <div className="extra-curricular">
            <h4>Extra-Curricular</h4>
            <br></br>
            <h5>Computer Engineering Student Society</h5>
            <p>Student Organization at TIP Manila 2022-Present</p>
            <br></br>
            <h5>Inhinyera</h5>
            <p>Student Organization at TIP Manila 2023-Present</p>
            <br></br>
            <h5>Microsoft Student Community</h5>
            <p>Student Organization at TIP Manila 2023-2024</p>
            <br></br>
            <h5>Robotics Club</h5>
            <p>Manila Cathedral School - 2014-2018</p>
            <br></br>
            <h5>Reserve Officer Training Course</h5> 
            <p>Mapua University - 2018-2021</p>
            <br></br>
            <h5>Citizenship Army Training</h5> 
            <p>Cadet-Captain, Intelligence</p>
            <p>Manila Cathedral School - 2014-2018</p>
          </div>
            <br></br>
            <h4>Objective</h4>
            <p>I’m a Computer Engineering student currently exploring opportunities in FPGA and digital hardware design. 
              I have a solid background in embedded systems, digital logic, and C/C++ programming, and 
              I’m now gaining hands-on experience with Verilog and FPGA development using tools like Vivado. 
              I'm looking forward to learning and exploring more opportunities where I can apply what I know, continue creating 
              real-world projects, and be part of building smart and practical hardware solutions.
            </p>
            <h4>Immersion, Experiences, Others</h4>
            <br></br>
            <h5>Creotech Philippines INC.</h5>
            <p>Worked as a Quality Assurance for Electronic Printed Circuit Board - February 2020 - March 2020</p>
            <h5>UK Telco Company (NDA)</h5>
            <p>Worked as a Virtual Assistant. Schedule Appointments, Answer Tickets and Queries. - February 2024 - Present</p>
            <h5>UK Telco Company (NDA)</h5>
            <p>Worked as a Customer Service. Answer Calls, create tickets (Fixing of Subscription/s, Data Balances, Customer Information) - August 2023 - January 2024</p>
          </div>
          <div className="detail-column">
            <h3>Skills</h3>
            <h4>Hard Skills</h4>
            <ul className="skills">
              {technicalSkills.slice(0, 6).map(skill => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
            <button className="view-all-skills" onClick={openTechnicalSkillsModal}>
              View All Technical Skills ({technicalSkills.length})
            </button>
            
            <h4 className="soft-skills-header">Soft Skills</h4>
            <ul className="skills">
              {softSkills.slice(0, 4).map(skill => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
            <button className="view-all-skills" onClick={openSoftSkillsModal}>
              View All Soft Skills ({softSkills.length})
            </button>
          </div>

          <div className="detail-column">
            <h3>Achievements</h3>
            <ul className="achievements">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
        <a href={`${process.env.PUBLIC_URL}/Resume_FPGA.pdf`} 
        className='download-resume-button' 
        download="Resume_FPGA.pdf">
          Download Resume
        </a>
        {showForHer && (
          <div className="modal-overlay" onClick={() => setShowForHer(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="close-button" onClick={() => setShowForHer(false)}>×</button>
              <ForHer />
            </div>
          </div>
          )}
      </section>
      
      <personalInfo />
      <TechnicalSkillsModal />
      <SoftSkillsModal />
      <PhotoModal />
    </>
  );
};

export default AboutMe;