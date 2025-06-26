import React from 'react';

const Navbar = ({ onHomeClick }) => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about-me", label: "About Me" },
    { id: "projects-researches", label: "Projects & Researches" },
    { id: "trainings-seminars", label: "Trainings & Seminars" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact Me" },
  ];

  // Scroll handler: smooth scroll to target section
  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (id === "home") {
      onHomeClick(); // Trigger landing page
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav>
      <ul>
        {sections.map(section => (
          <li key={section.id}>
            <a href={"#" + section.id} onClick={e => handleNavClick(e, section.id)}>
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;