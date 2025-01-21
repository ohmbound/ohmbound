"use client";

import React from "react";

const MaterialsScienceArticles = () => {
  const articles = [
    {
      title: "Metamaterials: Redefining the Limits of Physics",
      description: "Learn how metamaterials are breaking conventional physical boundaries.",
      link: "/news/materials-science/articles/metamaterials-redefining-the-limits-of-physics",
    },
    {
      title: "MXenes: The Two-Dimensional Superconductors",
      description: "Discover MXenes and their revolutionary role in superconductivity.",
      link: "/news/materials-science/articles/MXenes-two-dimensional-superconductors",
    },
    {
      title: "Hydrogel Applications in Medicine",
      description: "Explore how hydrogels are transforming medical applications.",
      link: "/news/materials-science/articles/hydrogel-applications-in-medicine",
    },
    {
      title: "Graphene’s Role in Flexible Electronics",
      description: "Dive into graphene’s contributions to flexible and wearable technologies.",
      link: "/news/materials-science/articles/graphene-role-in-flexible-electronics",
    },
    {
      title: "Photonic Crystals: Materials for Light Manipulation",
      description: "Understand how photonic crystals control and manipulate light.",
      link: "/news/materials-science/articles/photonic-crystals-materials-for-light-manipulation",
    },
    {
      title: "Carbon Aerogels: The Lightest Materials Ever Made",
      description: "The fascinating science behind ultra-light carbon aerogels.",
      link: "/news/materials-science/articles/carbon-aerogels-the-lightest-materials-ever-made",
    },
    {
      title: "Superhydrophobic Surfaces: The Science of Water Repellency",
      description: "Explore how superhydrophobic surfaces repel water for diverse applications.",
      link: "/news/materials-science/articles/superhydrophobic-surfaces-science-of-water-repellency",
    },
    {
      title: "Thermoelectric Materials: Converting Heat into Energy",
      description: "Learn about thermoelectric materials and their role in energy conversion.",
      link: "/news/materials-science/articles/thermoelectronic-materials-converting-heat-into-energy",
    },
    {
      title: "Nanowires for Quantum Computing",
      description: "How nanowires are paving the way for quantum computing breakthroughs.",
      link: "/news/materials-science/articles/nanowires-for-quantum-computing",
    },
    {
      title: "Spintronics: Materials for Future Electronics",
      description: "Spin-based electronics and their potential to transform the tech industry.",
      link: "/news/materials-science/articles/spintronics-materials-for-future-electronics",
    },
    {
      title: "Antibacterial Surfaces in Public Health",
      description: "The importance of antibacterial surfaces in preventing infections.",
      link: "/news/materials-science/articles/antibacterial-surfaces-in-public-health",
    },
    {
      title: "Zirconia Ceramics in Dentistry",
      description: "Discover the applications of zirconia ceramics in modern dentistry.",
      link: "/news/materials-science/articles/zirconia-ceramics-in-dentistry",
    },
    {
      title: "Piezoelectric Materials: Harvesting Energy from Motion",
      description: "How piezoelectric materials are transforming energy harvesting technologies.",
      link: "/news/materials-science/articles/piezoelectric-materials-harvesting-energy-from-motion",
    },
    {
      title: "Metallic Glass: The Strongest and Most Elastic Materials",
      description: "The incredible properties of metallic glass in engineering and beyond.",
      link: "/news/materials-science/articles/metalic-glass-strongest-and-most-elastic-materials",
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
        Materials Science Articles
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
            <p style={{ fontSize: "0.9rem", color: "#555" }}>{article.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MaterialsScienceArticles;
