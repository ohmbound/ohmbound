"use client";

import React from "react";

const SuperconductivityArticle = () => {
    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          window.location.href
        )}&text=${encodeURIComponent(
          "Check out this article on Solid-State Batteries: The Next Frontier in Energy Storage!"
        )}`,
        reddit: `https://reddit.com/submit?url=${encodeURIComponent(
          window.location.href
        )}&title=${encodeURIComponent(
          "Solid-State Batteries: The Next Frontier in Energy Storage"
        )}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          window.location.href
        )}`,
      };
  return (
    <article
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        marginTop: "20px",
        fontFamily: "'Arial', sans-serif",
        lineHeight: "1.8",
        color: "#333",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          textAlign: "center",
          color: "#000",
        }}
      >
        Applications of Superconductivity
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 20px",
            backgroundColor: "#1DA1F2",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Share on Twitter
        </a>
        <a
          href={shareLinks.reddit}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 20px",
            backgroundColor: "#FF4500",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Share on Reddit
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4267B2",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Share on Facebook
        </a>
      </div>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Introduction
        </h2>
        <p>
          Superconductivity, discovered over a century ago, is a quantum
          phenomenon where materials exhibit zero electrical resistance and expel
          magnetic fields below a critical temperature. While initially seen as
          a scientific curiosity, superconductivity has evolved into a
          cornerstone of modern technology. From healthcare to transportation,
          energy, and particle physics, superconductors have transformed the way
          we understand and utilize the laws of physics.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Applications in Healthcare
        </h2>
        <p>
          One of the most well-known applications of superconductivity is in
          healthcare, particularly in magnetic resonance imaging (MRI). MRI
          machines utilize superconducting magnets to generate strong magnetic
          fields, allowing for detailed imaging of soft tissues inside the body.
        </p>
        <p>
          The high field strength achieved by superconducting magnets provides
          unparalleled resolution, aiding in the diagnosis of various medical
          conditions, from tumors to neurological disorders.
        </p>
        <p>
          Additionally, superconducting quantum interference devices (SQUIDs)
          are used in magnetoencephalography (MEG) to monitor brain activity
          with remarkable precision, advancing neuroscience and medical
          research.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Superconductors in Energy Transmission
        </h2>
        <p>
          Superconductors are revolutionizing energy transmission. Traditional
          power grids suffer from energy losses due to resistance in
          transmission lines. Superconducting cables, on the other hand, enable
          lossless power transmission, significantly improving efficiency and
          reducing waste.
        </p>
        <p>
          High-temperature superconductors (HTS) are being deployed in pilot
          projects worldwide to enhance grid reliability and increase power
          capacity. These advancements are crucial for integrating renewable
          energy sources into the grid and meeting future energy demands.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Advancements in Transportation
        </h2>
        <p>
          Superconductors are driving innovation in transportation, especially
          in the development of magnetic levitation (maglev) trains. These
          trains use superconducting magnets to levitate above the tracks,
          virtually eliminating friction and allowing for extremely high speeds.
        </p>
        <p>
          Countries like Japan and China are pioneering maglev technology,
          showcasing its potential to revolutionize high-speed rail networks.
          Superconducting maglev systems not only offer faster travel but also
          reduce wear and tear, making them more sustainable and cost-effective
          in the long run.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Superconductivity in Particle Physics
        </h2>
        <p>
          Superconducting magnets are essential in particle accelerators, such
          as the Large Hadron Collider (LHC) at CERN. These magnets generate
          the powerful magnetic fields required to steer and accelerate
          particles to near-light speeds, enabling groundbreaking experiments
          in particle physics.
        </p>
        <p>
          The use of superconductors allows for more compact and efficient
          designs, reducing energy consumption and enhancing the performance of
          these scientific instruments. These advancements are helping
          scientists explore fundamental questions about the universe, from the
          origins of matter to the nature of dark energy.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Quantum Computing and Superconductivity
        </h2>
        <p>
          Quantum computing relies heavily on superconducting circuits, which
          allow qubits to function with minimal interference. The zero-resistance
          properties of superconductors make them ideal for maintaining quantum
          coherence, a key challenge in building scalable quantum computers.
        </p>
        <p>
          Companies like IBM and Google are leveraging superconducting
          technologies to develop quantum processors, accelerating the race
          toward practical quantum computing. These advancements have the
          potential to revolutionize fields such as cryptography, material
          science, and artificial intelligence.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Challenges and Future Outlook
        </h2>
        <p>
          Despite their immense potential, superconductors face challenges,
          including the need for extremely low temperatures in traditional
          superconductors and the high costs of manufacturing high-temperature
          superconductors. Researchers are exploring new materials and
          techniques to make superconductors more accessible and practical for
          widespread use.
        </p>
        <p>
          The future of superconductivity looks promising, with ongoing research
          aimed at discovering room-temperature superconductors. Such a
          breakthrough would transform industries and enable new applications,
          from compact fusion reactors to advanced medical imaging technologies.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Conclusion
        </h2>
        <p>
          Superconductivity is not just a fascinating scientific phenomenon—it is a
          driving force behind some of the most transformative technologies of our
          time. From revolutionizing energy transmission to enabling advanced
          medical imaging and quantum computing, superconductors are shaping the
          future. As research continues to push the boundaries, the potential
          applications of superconductivity are limited only by our imagination.
        </p>
      </section>
    </article>
  );
};

export default SuperconductivityArticle;
