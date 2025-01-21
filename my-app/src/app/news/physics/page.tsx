"use client";

import React from "react";

const PhysicsArticles = () => {
  const articles = [
    { 
      title: "The Physics of Time Crystals", 
      description: "Explore the fascinating world of time crystals and their unique properties.", 
      link: "/news/physics/articles/physics-of-time-crystals",
    },
    { 
      title: "Plasma Physics in Fusion Energy", 
      description: "Discover the role of plasma physics in achieving sustainable fusion energy.", 
      link: "/news/physics/articles/plasma-physics-in-fusion-energy",
    },
    { 
      title: "The Search for Axions: Dark Matter Candidates", 
      description: "Could axions be the key to understanding dark matter?", 
      link: "/news/physics/articles/axions-dark-matter-canadidates",
    },
    { 
      title: "Exoplanet Atmospheres: Alien Worlds", 
      description: "Dive into the study of distant planets and their mysterious atmospheres.", 
      link: "/news/physics/articles/exoplanet-atmospheres-alien-worlds",
    },
    { 
      title: "Solitons: Waves That Never Die", 
      description: "Learn about solitons, the eternal waves with fascinating applications.", 
      link: "/news/physics/articles/solitons-waves-that-never-die",
    },
    { 
      title: "The Physics of Quantum Cryptography", 
      description: "Understand how quantum mechanics is revolutionizing secure communication.", 
      link: "/news/physics/articles/quantum-cryptography",
    },
    { 
      title: "The Multiverse Debate: Physics Beyond the Observable Universe", 
      description: "Explore the multiverse theory and its implications for modern physics.", 
      link: "/news/physics/articles/physics-beyond-the-observable-universe",
    },
    { 
      title: "Holographic Principle: The Universe as a Hologram", 
      description: "What if our universe is a projection of higher dimensions?", 
      link: "/news/physics/articles/holographic-principle-universe-as-a-hologram", 
    },
    { 
      title: "The Role of Entropy in Black Hole Physics", 
      description: "Uncover the connection between entropy and black hole thermodynamics.", 
      link: "/news/physics/articles/entropy-in-black-hole-physics", 
    },
    { 
      title: "Gravitational Wave Astronomy: A New Window on the Universe", 
      description: "Discover how gravitational waves are reshaping our understanding of the cosmos.", 
      link: "/news/physics/articles/gravitational-wave-astronomy",
    },
    { 
      title: "The Photon Ring Around Black Holes", 
      description: "Investigate the photon rings that reveal secrets about black holes.", 
      link: "/news/physics/articles/photon-ring-around-black-holes",
    },
    { 
      title: "Topological Insulators: A New State of Matter", 
      description: "Learn about topological insulators and their revolutionary properties.", 
      link: "/news/physics/articles/topological-insulators-new-state-of-matter",
    },
    { 
      title: "Lattice QCD: Simulating the Strong Force", 
      description: "How physicists simulate quantum chromodynamics to understand the strong force.", 
      link: "/news/physics/articles/lattice-QCD-simulating-the-strong-force", 
    },
    { 
      title: "The Arrow of Time: Why Does Time Flow Forward?", 
      description: "Explore the mystery of time's unidirectional flow.", 
      link: "/news/physics/articles/arrow-of-time-why-does-time-flow-forward", 
    },
    { 
      title: "Laser Interferometry: Unlocking the Secrets of Space-Time", 
      description: "Understand how laser interferometers measure cosmic phenomena.", 
      link: "/news/physics/articles/laser-interferometry-secrets-of-space-time", 
    },
    { 
      title: "The Mysteries of Quantum Tunneling", 
      description: "Explore how particles pass through seemingly impenetrable barriers.", 
      link: "/news/physics/articles/mysteries-of-quantum-tunneling", 
    },
    { 
      title: "The Secrets of Neutron Stars", 
      description: "Discover the densest stars and their fascinating physics.", 
      link: "/news/physics/articles/secrets-of-neutron-stars", 
    },
    { 
      title: "Applications of Superconductivity", 
      description: "Learn about the revolutionary technologies using superconductors.", 
      link: "/news/physics/articles/applications-of-superconductivity",
    },
    { 
      title: "Cosmic Microwave Background Explained", 
      description: "The remnants of the Big Bang and their significance in cosmology.", 
      link: "/news/physics/articles/cosmic-microwave-background-explained",
    },
    { 
      title: "Laser Cooling and Trapping Atoms", 
      description: "How lasers are used to slow and trap particles for experiments.", 
      link: "/news/physics/articles/laser-cooling-and-trapping-atoms", 
    },
    { 
      title: "Understanding Quantum Decoherence", 
      description: "Dive into how quantum systems lose coherence.", 
      link: "/news/physics/articles/understanding-quantum-decoherence",
    },
    { 
      title: "The Science of Gravitational Lensing", 
      description: "How gravity bends light to reveal hidden parts of the universe.", 
      link: "/news/physics/articles/science-of-gravitational-lensing",
    },
    { 
      title: "Dark Energy and the Expanding Universe", 
      description: "What drives the universe's accelerated expansion?", 
      link: "/news/physics/articles/dark-energy-and-the-expanding-universe",
    },
    { 
      title: "Magnetars: The Strongest Magnetic Fields", 
      description: "Learn about stars with extreme magnetic forces.", 
      link: "/news/physics/articles/magnetars-the-strongest-magnetic-fields",
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
        Physics Articles
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

export default PhysicsArticles;