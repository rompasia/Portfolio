import React from 'react';

const TrainingsSeminars = () => {
  const trainings = [
    {
      title: "Basic Occupational Safety and Health for Safety Officer 1",
      organizer: "BESO Safety Trainings and Consultancy Services",
      year: 2024
    },
    {
      title: "English Enhancement for GEC 005 - Purposive Communication",
      organizer: "TIP College of Arts",
      year: 2024
    },
    {
      title: "TechnoHealth Computer Curriculum: Database Management",
      organizer: "Manila Cathedral School",
      year: "2017"
    },

    {
      title: "Robotics Camp",
      organizer: "Manila Cathedral School",
      year: "2016"
    },

    {
      title: "Mathematics Teachers Association of the Philippines (MTAP)",
      organizer: "Manila Cathedral School",
      year: "2015 to 2018"
    },
  ];

  return (
    <section id="trainings-seminars" className="container content-section" aria-label="Trainings and Seminars">
      <h2>Trainings &amp; Seminars</h2>
      <ul>
        {trainings.map((item, idx) => (
          <li key={idx}>
            <strong>{item.title}</strong> by {item.organizer} ({item.year})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrainingsSeminars;