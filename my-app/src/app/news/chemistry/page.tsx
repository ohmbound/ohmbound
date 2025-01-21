"use client";

import React from "react";

const ChemistryArticles = () => {
  const articles = [
    {
      title: "Perovskite Solar Cells: The Future of Renewable Energy",
      description: "How perovskites are revolutionizing solar energy with improved efficiency and cost-effectiveness.",
      link: "/news/chemistry/articles/perovskite-solar-cells",
    },
    {
      title: "Solid-State Batteries: The Next Frontier in Energy Storage",
      description: "Explore the potential of solid-state batteries as safer and more efficient energy solutions.",
      link: "/news/chemistry/articles/solid-state-batteries",
    },
    {
      title: "Chemistry in 3D Bioprinting",
      description: "The role of chemical engineering in creating biocompatible materials for 3D bioprinting.",
      link: "/news/chemistry/articles/3d-bioprinting-chemistry",
    },
    {
      title: "MOFs for Carbon Capture",
      description: "Metal-Organic Frameworks and their applications in reducing carbon emissions.",
      link: "/news/chemistry/articles/MOFs-carbon-capture",
    },
    {
      title: "Electrochemical Synthesis: Cleaner Reactions",
      description: "Revolutionizing chemical synthesis with electrochemical methods.",
      link: "/news/chemistry/articles/electrochemical-synthesis",
    },
    {
      title: "Artificial Enzymes for Industry",
      description: "How artificial enzymes are advancing industrial chemical processes.",
      link: "/news/chemistry/articles/artificial-enzymes-industry",
    },
    {
      title: "Chemistry of Lab-Grown Meat",
      description: "The chemical innovations behind sustainable, lab-grown meat.",
      link: "/news/chemistry/articles/chemistry-lab-grown-meat",
    },
    {
      title: "Self-Healing Materials: The Future of Repair-Free Products",
      description: "Learn how chemistry is creating materials that can heal themselves.",
      link: "/news/chemistry/articles/self-healing-materials-products",
    },
    {
      title: "Ammonia as a Green Fuel",
      description: "Ammonia’s potential to replace fossil fuels in the energy transition.",
      link: "/news/chemistry/articles/ammonia-green-fuel",
    },
    {
      title: "Nanocages in Drug Delivery",
      description: "Revolutionizing medicine with nanostructures for targeted drug delivery.",
      link: "/news/chemistry/articles/nanocages-drug-delivery",
    },
    {
      title: "Liquid Metal Chemistry for Wearable Electronics",
      description: "Exploring liquid metals for flexible and wearable devices.",
      link: "/news/chemistry/articles/liquid-metal-chemistry-electronics",
    },
    {
      title: "Atom-Economy Reactions: Eliminating Waste in Synthesis",
      description: "Green chemistry approaches for minimizing waste in chemical reactions.",
      link: "/news/chemistry/articles/atom-economy-reactions-synthesis",
    },
    {
      title: "Battery-Free Chemical Sensors",
      description: "Advances in sensors that operate without batteries for real-time monitoring.",
      link: "/news/chemistry/articles/battery-free-chemical-sensors",
    },
    {
      title: "Chiral Chemistry in Pharmaceuticals",
      description: "How chirality impacts drug design and effectiveness.",
      link: "/news/chemistry/articles/chiral-chemistry-pharmaceuticals",
    },
    {
      title: "The Molecular Science of Quantum Dots",
      description: "The chemistry of quantum dots and their applications in imaging and displays.",
      link: "/news/chemistry/articles/molecular-science-quantum-dots",
    },
    {
      title: "Chemiresistive Sensors: Revolutionizing Real-Time Air Quality Monitoring",
      description: "New breakthroughs in air quality monitoring using chemiresistive materials.",
      link: "/news/chemistry/articles/chemiresistive-sensors-quality",
    },
    {
      title: "Plasmonic Catalysis: Light-Driven Chemical Transformations",
      description: "Using plasmonic nanoparticles for efficient chemical reactions.",
      link: "/news/chemistry/articles/plasmoic-catalysis",
    },
    {
      title: "CRISPR Chemistry",
      description: "Understand the chemical basis of genetic editing tools.",
      link: "/news/chemistry/articles/CRISPR-chemistry",
    },
    {
      title: "The Chemistry of Fluorinated Polymers",
      description: "Explore the unique properties of Teflon and related materials.",
      link: "/news/chemistry/articles/chemistry-flourinated-polymers",
    },
    {
      title: "Advances in Organic Solar Cells",
      description: "How organic compounds are revolutionizing solar technology.",
      link: "/news/chemistry/articles/organic-solar-cells-advances",
    },
    {
      title: "The Chemistry of Explosives",
      description: "A safe dive into the science behind powerful reactions.",
      link: "/news/chemistry/articles/chemistry-of-explosives",
    },
    {
      title: "Enzyme Catalysis: The Key to Life",
      description: "How enzymes speed up essential biological reactions.",
      link: "/news/chemistry/articles/enzyme-catalysis-key-to-life",
    },
    {
      title: "Synthetic Biology and Chemical Synthesis",
      description: "How chemistry aids in creating artificial life systems.",
      link: "/news/chemistry/articles/synthetic-biology-chemical-synthesis",
    },
    {
      title: "Understanding Metal-Organic Frameworks",
      description: "Porous materials with applications in gas storage and more.",
      link: "/news/chemistry/articles/metal-organic-frameworks",
    },
    {
      title: "The Role of Chemistry in Carbon Capture",
      description: "The science of reducing greenhouse gases.",
      link: "/news/chemistry/articles/role-of-chemistry-in-carbon-capture",
    },
    {
      title: "Water Splitting for Hydrogen Energy",
      description: "How chemistry is key to clean hydrogen fuel production.",
      link: "/news/chemistry/articles/water-splitting-hydrogen-energy",
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
        Chemistry Articles
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

export default ChemistryArticles;
