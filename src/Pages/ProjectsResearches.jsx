import React from 'react';

const ProjectsResearches = ({ onOpenGallery }) => {
  const projects = [
    {
      title: "Microcontroller-based Flood Monitoring System with Short Message Service Feedback using GSM Module",
      description: "A GSM-based flood monitoring prototype using Arduino and water-level sensors, capable of sending real-time SMS alerts upon flood detection.",
      link: ""
    },
    {
      title: "BCD to 7-Segment Decoder Logic Circuit",
      description: "A digital logic circuit that converts 4-bit BCD input to a 7-segment display output using minimized Boolean expressions and Karnaugh maps.",
      link: ""
    },
    {
      title: "6-DOF Robotic Arm Control System",
      description: "A manually controlled 6-DOF robotic arm using Arduino, PWM, and potentiometers to demonstrate real-time servo coordination.",
      link: ""
    }
  ];

  return (
    <section id="projects-researches" className="container content-section" aria-label="Projects and Researches">
      <h2>Projects &amp; Researches</h2>
      <ul>
        {projects.map((project, idx) => (
          <li key={idx}>
            <strong>{project.title}</strong> - {project.description}{" "}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{color: '#1abc9c'}}>
                [View]
              </a>
            )}
          </li>
        ))}
      </ul>
      <button className="gallery-button" onClick={onOpenGallery}>
        View Gallery
      </button>
    </section>
  );
};

export default ProjectsResearches;