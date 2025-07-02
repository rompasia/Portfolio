import React from 'react';
import logic from '../Assets/logic.png';
import drafting from '../Assets/drafting.png'; 
import drafting4 from '../Assets/drafting4.png';
import drafting5 from '../Assets/drafting5.png';    
import Flood from '../Assets/Flood.png';
import extrarobotics from '../Assets/extrarobotics.png';
import Iot1 from '../Assets/Iot1.png';
import Radar from '../Assets/Radar.png';    
import robotics1 from '../Assets/robotics1.png';
import robotics2 from '../Assets/robotics2.png';
import RobotArm1 from '../Assets/RobotArm1.png';
import RobotArm2 from '../Assets/RobotArm2.png';
import VPS1 from '../Assets/VPS1.jpg';
import VPS2 from '../Assets/VPS2.jpg';
import VPS3 from '../Assets/VPS3.jpg';
import VPS4 from '../Assets/VPS4.jpg';


const Gallery = ({ isOpen, onClose }) => {
  const galleryImages = [
    { src: logic, alt: "Logic Circuit Design" },
    { src: drafting, alt: "Circuit Drafting" },
    { src: drafting4, alt: "Technical Drafting" },
    { src: drafting5, alt: "Engineering Drafting" },
    { src: Flood, alt: "Flood Monitoring System" },
    { src: extrarobotics, alt: "Robotics Project" },
    { src: Iot1, alt: "IoT Implementation" },
    { src: Radar, alt: "Radar System" },
    { src: robotics1, alt: "Robotics Competition" },
    { src: robotics2, alt: "Robotics Setup" },
    { src: RobotArm1, alt: "6-DOF Robot Arm" },
    { src: RobotArm2, alt: "Robot Arm Control" },
    { src: VPS1, alt: "Variable Power Supply1" },
    { src: VPS2, alt: "VPS Power Supply2" },
    { src: VPS3, alt: "VPS Power Supply3" },
    { src: VPS4, alt: "VPS Power Supply4" }
  ];

  if (!isOpen) return null;

  return (
    <div className="gallery-overlay">
      <div className="gallery-modal">
        <div className="gallery-header">
          <h1>Project Gallery</h1>
          <p>See samples of my work and past projects.</p>
          <button className="gallery-close" onClick={onClose}>
            ✕
          </button>
        </div>
        
        <div className="gallery-content">
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="gallery-footer">
          <button className="back-button" onClick={onClose}>
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;