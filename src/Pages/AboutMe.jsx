import React, { useState } from 'react';

const AboutMe = () => {
  const [isTechnicalSkillsOpen, setIsTechnicalSkillsOpen] = useState(false);
  const [isSoftSkillsOpen, setIsSoftSkillsOpen] = useState(false);
  const [selectedTechnicalSkill, setSelectedTechnicalSkill] = useState(null);
  const [selectedSoftSkill, setSelectedSoftSkill] = useState(null);

  //eslint-disable-next-line
  /*const gradegree = "Master of Science in Computer Engineering"; 
  const Specialization = "Mechatronics and Robotics";
  const gradyear = 2028;*/
  const degree = "Bachelor of Science in Computer Engineering";
  const track = "Robotics";
  const university = "Technological Institute of the Philippines";
  const graduationYear = "Present";
  const SeniorHigh = "Science Technology Engineering and Mathematics Strand";
  const graduationYearshs = 2020;
  const JuniorHigh = "Manila Cathedral School";
  const graduationYearjhs = 2018;

  const technicalSkills = [
    {
      name: "C/C++",
      description: "Proficient in systems programming, embedded programming, and algorithm implementation. Used extensively for robotics control systems and competitive programming.",
      level: "Mid-Advanced"
    },
    {
      name: "JavaScript",
      description: "Full-stack web development with modern frameworks. Experience in DOM manipulation, asynchronous programming, and building interactive web applications.",
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
      description: "Semantic markup and web accessibility standards. Experience in creating structured, SEO-friendly web content.",
      level: "Mid-Intermediate"
    },
    {
      name: "CSS",
      description: "Modern styling techniques including Flexbox, Grid, animations, and responsive design. Experience with preprocessors and frameworks.",
      level: "Mid-Intermediate"
    },
    {
      name: "Git",
      description: "Version control, branching strategies, and collaborative development workflows. Experience with GitHub, GitLab, and team-based projects.",
      level: "Low-Intermediate"
    },
    {
      name: "SQL",
      description: "Database design, query optimization, and data management. Experience with MySQL, PostgreSQL, and database integration in applications.",
      level: "Intermediate"
    },
    {
      name: "PHP",
      description: "Server-side web development, API creation, and database integration. Experience with modern PHP frameworks and best practices.",
      level: "Intermediate"
    },
    {
      name: "IoT",
      description: "Internet of Things development including sensor integration, microcontroller programming, and wireless communication protocols.",
      level: "Mid-Advanced"
    },
    {
      name: "Control Systems",
      description: "Design and implementation of automated control systems for robotics applications. Experience with PID controllers and system modeling.",
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
      description: "Led robotics teams from junior high through college, coordinating team efforts and guiding technical decisions. Experience in project management and team motivation.",
      level: "Advanced"
    },
    {
      name: "Problem Solving",
      description: "Strong analytical thinking developed through competitive programming and robotics challenges. Ability to break down complex problems into manageable solutions.",
      level: "Advanced"
    },
    {
      name: "Team Collaboration",
      description: "Effective collaboration in multidisciplinary teams, combining technical expertise with communication skills to achieve project goals.",
      level: "Mid-Advanced"
    },
    {
      name: "Communication",
      description: "Ability to explain technical concepts to both technical and non-technical audiences. Experience in presenting project results and technical documentation.",
      level: "Mid-Intermediate"
    },
    {
      name: "Adaptability",
      description: "Quick to learn new technologies and adapt to changing project requirements. Comfortable working with diverse programming languages and frameworks.",
      level: "Advanced"
    },
    {
      name: "Critical Thinking",
      description: "Analytical approach to system design and debugging. Strong logical reasoning skills developed through engineering coursework and practical applications.",
      level: "Mid-Advanced"
    },
    {
      name: "Time Management",
      description: "Effective prioritization and scheduling of multiple projects and academic responsibilities. Proven ability to meet deadlines in competitive environments.",
      level: "Mid-Intermediate"
    },
    {
      name: "Creativity",
      description: "Innovative approach to technical challenges, finding unique solutions in robotics design and programming. Experience in creative problem-solving competitions.",
      level: "Mid-Advanced"
    }
  ];

  const achievements = [
    "2nd Place AI Robotics at MRSP 8th National Skills Competition (2025)",
    "Led a team for JHS Robotics by IT-CUP (2014 to 2018)",
    "Math Quiz Bee Champion Grade 9 (2017)",
  ];

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

  const TechnicalSkillsModal = () => {
    if (!isTechnicalSkillsOpen) return null;

    return (
      <div className="skills-overlay">
        <div className="skills-modal">
          <div className="skills-header">
            <h2>Technical Skills</h2>
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
            <p>2018 to {graduationYearshs}</p>
            <h4>Junior High School</h4>
            <p>{JuniorHigh}</p>
            <p>2014 to {graduationYearjhs}</p>
          </div>
          
          <div className="detail-column">
            <h3>Skills</h3>
            <h4>Technical Skills</h4>
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
      </section>
      
      <TechnicalSkillsModal />
      <SoftSkillsModal />
    </>
  );
};

export default AboutMe;