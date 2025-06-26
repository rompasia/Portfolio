import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      name: "CCNA: Enterprise Networking, Security, and Automation",
      year: 2025
    },
    {
      name: "EF SET English: C2 Proficient",
      year: 2024
    },
    {
      name: "EF SET English: C1 Advanced",
      year: 2024
    },
    {
      name: "CCNA: Switching, Routing, and Wireless Essentials",
      year: 2024
    },
    {
      name: "BOSH1: Safety Officer 1",
      year: 2024
    },
    {
      name: "Partner: PCAP - Programming Essentials in Python",
      year: 2023
    }
  ];

  return (
    <section id="certifications" className="container content-section" aria-label="Certifications">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert, idx) => (
          <li key={idx}>{cert.name} - {cert.year}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;