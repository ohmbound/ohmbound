"use client";

import React from "react";

const EngineeringArticles = () => {
  const articles = [
    {
      title: "Space Habitat Design for Mars",
      description: "Discover the challenges and innovations in designing habitats for Mars.",
      link: "/news/engineering/articles/space-habitat-for-mars",
    },
    {
      title: "The Rise of Floating Cities",
      description: "Learn how engineers are creating sustainable cities on water.",
      link: "/news/engineering/articles/rise-of-floating-cities",
    },
    {
      title: "Carbon Nanotubes in Construction",
      description: "How carbon nanotubes are revolutionizing construction materials.",
      link: "/news/engineering/articles/carbon-nanotubes-in-construction",
    },
    {
      title: "The Engineering of Drone Swarms",
      description: "Explore how drone swarms are transforming industries.",
      link: "/news/engineering/articles/engineering-of-drone-swarms",
    },
    {
      title: "Electrochromic Glass Technology",
      description: "The future of smart windows that adapt to your environment.",
      link: "/news/engineering/articles/electrochromic-glass-technology",
    },
    {
      title: "Revolutionizing Agriculture with Vertical Farms",
      description: "How vertical farming is reshaping modern agriculture.",
      link: "/news/engineering/articles/agriculture-with-vertical-farms",
    },
    {
      title: "Bridge Engineering for Earthquake Zones",
      description: "Engineering safer bridges in areas prone to earthquakes.",
      link: "/news/engineering/articles/bridge-engineering-for-earthquake-zones",
    },
    {
      title: "Bio-Inspired Robotics",
      description: "Robots designed by mimicking nature's innovations.",
      link: "/news/engineering/articles/bio-inspired-robotics",
    },
    {
      title: "Geoengineering for Climate Control",
      description: "Engineering solutions to combat climate change.",
      link: "/news/engineering/articles/geoengineering-for-climate-control",
    },
    {
      title: "Additive Manufacturing for Aerospace",
      description: "How 3D printing is reshaping the aerospace industry.",
      link: "/news/engineering/articles/additive-manufacturing-for-aerospace",
    },
    {
      title: "AI-Driven Structural Engineering",
      description: "How AI optimizes building designs for safety and efficiency.",
      link: "/news/engineering/articles/ai-driven-structural-engineering",
    },
    {
      title: "Hyperloop Transportation Systems",
      description: "Engineering the future of high-speed transport.",
      link: "/news/engineering/articles/hyperloop-transportation-systems",
    },
    {
      title: "Bionic Prosthetics: A New Frontier",
      description: "Advancements in engineering life-like prosthetics.",
      link: "/news/engineering/articles/bionic-prosthetics-a-new-frontier",
    },
    {
      title: "The Future of Self-Healing Materials",
      description: "How materials repair themselves, inspired by nature.",
      link: "/news/engineering/articles/future-of-self-healing-materials",
    },
    {
      title: "Robotics in Hazardous Environments",
      description: "Engineering robots for rescue missions and extreme conditions.",
      link: "/news/engineering/articles/robotics-in-hazardous-environments",
    },
    {
      title: "Green Skyscrapers",
      description: "The engineering behind eco-friendly skyscrapers.",
      link: "/news/engineering/articles/green-skyscrapers",
    },
    {
      title: "Autonomous Ships: Engineering at Sea",
      description: "The rise of self-driving ships in maritime industries.",
      link: "/news/engineering/articles/autonomous-ships-engineering-at-sea",
    },
    {
      title: "3D-Printed Infrastructure",
      description: "How 3D printing reshapes construction and design.",
      link: "/news/engineering/articles/3D-printed-infrastructure",
    },
    {
      title: "Smart Grids for Renewable Energy",
      description: "Engineering intelligent energy distribution systems.",
      link: "/news/engineering/articles/smart-grids-for-renewable-energy",
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
        Engineering Articles
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
              display: "flex",
              alignItems: "center",
              backgroundColor: "#ffffff",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
            }}
          >
            <div>
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
              <p style={{ fontSize: "0.9rem", color: "#555" }}>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringArticles;
