"use client";

import React from "react";

const EmergingTechArticles = () => {
  const articles = [
    {
      title: "Fusion Energy Breakthroughs: Powering Tomorrow",
      description: "Discover the latest advancements in sustainable nuclear fusion energy.",
      link: "/news/emerging-technologies/articles/fusion-energy-breakthroughs-powering-tomorrow",
    },
    {
      title: "Soft Robotics: The Future of Flexible Machines",
      description: "Explore how soft robotics is revolutionizing industries with flexibility and adaptability.",
      link: "/news/emerging-technologies/articles/soft-robotics-future-of-flexible-machines",
    },
    {
      title: "Quantum Sensors for Precision Measurements",
      description: "Learn about quantum sensors and their role in precision measurement systems.",
      link: "/news/emerging-technologies/articles/quantum-sensors-for-precision-measurements",
    },
    {
      title: "Brain-Computer Interfaces: Direct Communication with Machines",
      description: "How BCIs enable seamless communication between the brain and computers.",
      link: "/news/emerging-technologies/articles/brain-computer-interfaces-direct-communication-with-machines",
    },
    {
      title: "Solid-State Sensors for Advanced Robotics",
      description: "Advancing robotics with durable and high-performance solid-state sensors.",
      link: "/news/emerging-technologies/articles/solid-state-sensors-for-advanced-robotics",
    },
    {
      title: "4D Printing: Materials That Morph Over Time",
      description: "The next evolution of printing technologies with shape-changing materials.",
      link: "/news/emerging-technologies/articles/4D-printing-materials-that-morph-overtime",
    },
    {
      title: "Biodegradable Electronics: A Cleaner Tech Revolution",
      description: "Innovations in sustainable, eco-friendly biodegradable electronics.",
      link: "/news/emerging-technologies/articles/biodegrable-electronics-a-cleaner-tech-revolution",
    },
    {
      title: "Nano-Satellites and CubeSats in Space Exploration",
      description: "Small satellites with big impacts on space exploration.",
      link: "/news/emerging-technologies/articles/nano-satellies-and-cubestats-in-space-exploration",
    },
    {
      title: "Digital Twins for Smart Manufacturing",
      description: "How digital twins are transforming the manufacturing industry.",
      link: "/news/emerging-technologies/articles/digital-twins-for-smart-manufacturing",
    },
    {
      title: "CRISPR Beyond Gene Editing: Disease Detection Tools",
      description: "CRISPR technology evolving into advanced disease detection systems.",
      link: "/news/emerging-technologies/articles/CRISPR-beyond-gene-editing-disease-detection-tools",
    },
    {
      title: "Wireless Power Transmission for IoT Devices",
      description: "Enabling efficient, wireless power delivery for IoT ecosystems.",
      link: "/news/emerging-technologies/articles/wireless-power-transmission-for-IoT-devices",
    },
    {
      title: "Hyper-Accurate GPS Technology",
      description: "Next-gen GPS systems offering unparalleled location accuracy.",
      link: "/news/emerging-technologies/articles/hyper-accurate-gps-technology",
    },
  ];

  return (
    <section
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        marginTop: "20px",
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
        Emerging Technology Articles
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px",
        }}
      >
        {articles.map((article, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
            }}
          >
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#0070f3",
                textDecoration: "none",
              }}
            >
              {article.title}
            </a>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>
              {article.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmergingTechArticles;
