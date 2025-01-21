"use client";

import React from "react";

const TrendingArticles = () => {
  const articles = {
    physics: [
      { title: "The Mysteries of Quantum Tunneling", description: "Explore how particles pass through barriers in quantum mechanics.", link: "/news/physics/articles/mysteries-of-quantum-tunneling" },
      { title: "The Secrets of Neutron Stars", description: "Discover the densest stars and their fascinating physics.", link: "/news/physics/articles/secrets-of-neutron-stars" },
      { title: "Applications of Superconductivity", description: "Learn about the revolutionary technologies using superconductors.", link: "/news/physics/articles/applications-of-superconductivity" },
      { title: "Cosmic Microwave Background Explained", description: "The remnants of the Big Bang and their significance in cosmology.", link: "/news/physics/articles/cosmic-microwave-background-explained" },
      { title: "Laser Cooling and Trapping Atoms", description: "How lasers are used to slow and trap particles for experiments.", link: "/news/physics/articles/laser-cooling-and-trapping-atoms" },
      { title: "Understanding Quantum Decoherence", description: "Dive into how quantum systems lose coherence.", link: "/news/physics/articles/understanding-quantum-decoherence" },
      { title: "The Science of Gravitational Lensing", description: "How gravity bends light to reveal hidden parts of the universe.", link: "/news/physics/articles/science-of-gravitational-lensing" },
      { title: "Dark Energy and the Expanding Universe", description: "What drives the universe's accelerated expansion?", link: "/news/physics/articles/dark-energy-and-the-expanding-universe" },
      { title: "Magnetars: The Strongest Magnetic Fields", description: "Learn about stars with extreme magnetic forces.", link: "/news/physics/articles/magnetars-the-strongest-magnetic-fields" },
    ],
    chemistry: [
      { title: "CRISPR Chemistry", description: "Understand the chemical basis of genetic editing tools.", link: "/news/chemistry/articles/CRISPR-chemistry" },
      { title: "The Chemistry of Fluorinated Polymers", description: "Explore the unique properties of Teflon and related materials.", link: "/news/chemistry/articles/chemistry-flourinated-polymers" },
      { title: "Advances in Organic Solar Cells", description: "How organic compounds are revolutionizing solar technology.", link: "/news/chemistry/articles/organic-solar-cells-advances" },
      { title: "The Chemistry of Explosives", description: "A safe dive into the science behind powerful reactions.", link: "/news/chemistry/articles/chemistry-of-explosives" },
      { title: "Enzyme Catalysis: The Key to Life", description: "How enzymes speed up essential biological reactions.", link: "/news/chemistry/articles/enzyme-catalysis-key-to-life" },
      { title: "Synthetic Biology and Chemical Synthesis", description: "How chemistry aids in creating artificial life systems.", link: "/news/chemistry/articles/synthetic-biology-chemical-synthesis" },
      { title: "Understanding Metal-Organic Frameworks", description: "Porous materials with applications in gas storage and more.", link: "/news/chemistry/articles/metal-organic-frameworks" },
      { title: "The Role of Chemistry in Carbon Capture", description: "The science of reducing greenhouse gases.", link: "/news/chemistry/articles/role-of-chemistry-in-carbon-capture" },
      { title: "Water Splitting for Hydrogen Energy", description: "How chemistry is key to clean hydrogen fuel production.", link: "/news/chemistry/articles/water-splitting-hydrogen-energy" },
    ],
    engineering: [
      { title: "AI-Driven Structural Engineering", description: "How AI optimizes building designs for safety and efficiency.", link: "/news/engineering/articles/ai-driven-structural-engineering" },
      { title: "Hyperloop Transportation Systems", description: "Engineering the future of high-speed transport.", link: "/news/engineering/articles/hyperloop-transportation-systems" },
      { title: "Bionic Prosthetics: A New Frontier", description: "Advancements in engineering life-like prosthetics.", link: "/news/engineering/articles/bionic-prosthetics-a-new-frontier" },
      { title: "The Future of Self-Healing Materials", description: "How materials repair themselves, inspired by nature.", link: "/news/engineering/articles/future-of-self-healing-materials" },
      { title: "Robotics in Hazardous Environments", description: "Engineering robots for rescue missions and extreme conditions.", link: "/news/engineering/articles/robotics-in-hazardous-environments" },
      { title: "Green Skyscrapers", description: "The engineering behind eco-friendly skyscrapers.", link: "/news/engineering/articles/green-skyscrapers" },
      { title: "Autonomous Ships: Engineering at Sea", description: "The rise of self-driving ships in maritime industries.", link: "/news/engineering/articles/autonomous-ships-engineering-at-sea" },
      { title: "3D-Printed Infrastructure", description: "How 3D printing reshapes construction and design.", link: "/news/engineering/articles/3D-printed-infrastructure" },
      { title: "Smart Grids for Renewable Energy", description: "Engineering intelligent energy distribution systems.", link: "/news/engineering/articles/smart-grids-for-renewable-energy" },
    ],
  };

  return (
    <section
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        marginTop: "20px",
      }}
    >
      <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", textAlign: "center", color: "#000" }}>
        Trending Articles
      </h2>

      {Object.keys(articles).map((category) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "20px", textTransform: "capitalize", color: "#000" }}>
            {category}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "15px",
            }}
          >
            {articles[category].map((article, index) => (
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
        </div>
      ))}
    </section>
  );
};

export default TrendingArticles;
