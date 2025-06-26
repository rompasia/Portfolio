import React, { useState } from 'react';

const AboutMe = () => {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const degree = "Bachelor of Science in Computer Engineering";
  const track = "Robotics";
  const university = "Technological Institute of the Philippines";
  const graduationYear = "Present";
  const SeniorHigh = "Science Technology Engineering and Mathematics Strand";
  const graduationYearshs = 2020;
  const JuniorHigh = "Manila Cathedral School";
  const graduationYearjhs = 2018;

  const skills = [
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

  const achievements = [
    "2nd Place AI Robotics at MRSP 8th National Skills Competition (2025)",
    "Led a team for JHS Robotics by IT-CUP (2014 to 2018)",
    "Math Quiz Bee Champion Grade 9 (2017)",
  ];

  const openSkillsModal = () => {
    setIsSkillsOpen(true);
  };

  const closeSkillsModal = () => {
    setIsSkillsOpen(false);
    setSelectedSkill(null);
  };

  const selectSkill = (skill) => {
    setSelectedSkill(skill);
  };

  const SkillsModal = () => {
    if (!isSkillsOpen) return null;

    return (
      <div className="skills-overlay">
        <div className="skills-modal">
          <div className="skills-header">
            <h2>Technical Skills</h2>
            <p>Click on any skill to learn more about my experience</p>
            <button className="skills-close" onClick={closeSkillsModal}>
              ✕
            </button>
          </div>
          
          <div className="skills-content">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`skill-card ${selectedSkill?.name === skill.name ? 'active' : ''}`}
                  onClick={() => selectSkill(skill)}
                >
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}</span>
                </div>
              ))}
            </div>
            
            {selectedSkill && (
              <div className="skill-details">
                <h3>{selectedSkill.name}</h3>
                <div className="skill-meta">
                  <span className="skill-level-badge">{selectedSkill.level}</span>
                </div>
                <p>{selectedSkill.description}</p>
              </div>
            )}
          </div>
          
          <div className="skills-footer">
            <button className="back-button" onClick={closeSkillsModal}>
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
            <ul className="skills">
              {skills.slice(0, 6).map(skill => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
            <button className="view-all-skills" onClick={openSkillsModal}>
              View All Skills ({skills.length})
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
      
      <SkillsModal />
    </>
  );
};

export default AboutMe;