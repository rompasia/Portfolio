import React from 'react';

const TrainingsSeminars = () => {
  const trainings = [

    {
      title: "You had me at DATA: Building the Foundation of Data Science and Analytics",
      organizer: "Technological Institute of the Philippines - Collaborative Analytics and Data Science Society",
      year: 2026
    },

    {
      title: "SUSTAINOVATE 2025: Design Thinking Meets Sustainable Development",
      organizer: "Technological Institute of the Philippines - Computer Engineering Department",
      year: 2025
    },

    {
      title: "CodeBuild Pocket Edition: Discover the Building Blocks of Mobile Development",
      organizer: "Technological Institute of the Philippines - Computer Engineering Department",
      year: 2025
    },

    {
      title: "Into the Cloud: The Future  of Computing",
      organizer: "Technological Institute of the Philippines - Computer Engineering Department",
      year: 2025
    },

    {
      title: "Transforming Future: Computer Vision and Generative AI in Computer Engineering",
      organizer: "Technological Institute of the Philippines - Computer Engineering Department",
      year: 2025
    },


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