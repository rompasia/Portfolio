import React from 'react';

const ProjectsResearches = ({ onOpenGallery }) => {
  const projects = [
    {
      title: "Microcontroller-based Flood Monitoring System with Short Message Service Feedback using GSM Module",
      description: "A flood monitoring system with SMS feedback using Arduino Uno and GSM module and a prototype for the flood monitoring system with an alert notification. The study used Arduino Uno as the microcontroller, SIM800L V2 5V as the GSM module for SMS messaging, rain water-level sensor for flood detection, and android phone for receiving the SMS message. The system showed that the prototype received SMS from a cellular phone and send an SMS notification when the flood was detected. Overall, the prototype and its system were successfully tested, and the detection and feedback system followed.",
      link: "https://docs.google.com/document/d/16P0KaUoZwxemztIybw2FL00oNiQfQLYaSyYseESZINk/edit?usp=sharing"
    },
    {
      title: "BCD to 7-Segment Decoder Logic Circuit",
      description: "A digital logic circuit that converts 4-bit BCD input to a 7-segment display output using minimized Boolean expressions and Karnaugh maps.",
      link: "https://docs.google.com/document/d/1dHSTzw68xsVuqmgrjThZk4tX2V6vH3GFAeJStk4Xi-4/edit?usp=sharing"
    },
    {
      title: "6-DOF Robotic Arm Control System",
      description: "A manually controlled 6-DOF robotic arm using Arduino, PWM, and potentiometers to demonstrate real-time servo coordination.",
      link: "https://docs.google.com/document/d/133mn6vUpSG6f_k369jXCPDaZSMtSp7-0EvUZKwDgV7Q/edit?usp=sharing"
    },

    {
      title: "Design and Implementation of a Variable DC Power Supply",
      description: " A reliable and adjustable power supply capable of providing a range of output voltages. Designed to meet performance standards for modern electronics, it achieves stable and consistent operation through accurate voltage regulation and minimal ripple.",
      link: "https://docs.google.com/document/d/1l-Qe4ElKKkGAH99crxNv7_H6n4r5T8sW5pGFprP9Jok/edit?usp=sharing"
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