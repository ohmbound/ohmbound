"use client";

import React from "react";

const FeaturedProjects = () => {
  const projects = [
    {
      description:
        "This project makes a model artificial pancreas using Arduino to simulate insulin delivery and glucose regulation.",
      link: "https://www.sciencebuddies.org/science-fair-projects/project-ideas/HumBio_p040/human-biology-health/developing-an-artificial-pancreas",
    },
    {
      description:
        "This project guides you to create obstacle-detecting glasses for visually impaired individuals using an ultrasonic sensor and buzzer, enhancing navigation and safety.",
      link: "https://www.sciencebuddies.org/science-fair-projects/project-ideas/Elec_p108/electricity-electronics/obstacle-detecting-glasses",
    },
    {
      description:
        "This project demonstrates how to build a circuit using LEDs and photoresistors to differentiate ripe produce based on reflected light color.",
      link: "https://www.sciencebuddies.org/science-fair-projects/project-ideas/Elec_p088/electricity-electronics/build-a-circuit-to-detect-ripe-produce",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        margin: "20px 0",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "20px",
          textAlign: "center",
          color: "#000",
        }}
      >
        Project Spotlight
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 30%",
              padding: "10px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // Ensures even spacing between elements
              height: "150px", // Set a consistent height for all cards
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                marginBottom: "10px",
                color: "#555",
                flexGrow: 1, // Allows descriptions to take up available space evenly
              }}
            >
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0070f3",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                alignSelf: "center", // Centers the "Learn More" link
              }}
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
