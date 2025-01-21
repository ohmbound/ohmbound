"use client";

import React from "react";

const PhotonRingArticle = () => {
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
        The Photon Ring Around Black Holes
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
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Introduction
        </h2>
        <p>
          Black holes have long captured the imagination of scientists and the
          public alike, representing some of the most mysterious and extreme
          phenomena in the universe. One of the most intriguing aspects of
          black holes is the photon ring—a thin, bright circle of light formed
          by photons trapped in orbit near the event horizon. The photon ring
          offers a unique window into the physics of black holes, allowing us to
          study their immense gravitational effects and gain insights into
          fundamental laws of nature.
        </p>
        <p>
          The photon ring was first visualized in the historic 2019 image of
          the supermassive black hole in the galaxy M87, captured by the Event
          Horizon Telescope (EHT). This groundbreaking observation marked a new
          era in black hole astrophysics, showcasing the incredible potential
          of advanced imaging technology.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          What Is the Photon Ring?
        </h2>
        <p>
          The photon ring is a circular feature of light that surrounds a black
          hole’s shadow. It is created by photons (light particles) that travel
          near the black hole and are bent by its intense gravitational field.
          Some of these photons are deflected multiple times, creating a
          concentrated ring of light that appears brighter than the surrounding
          regions.
        </p>
        <p>
          The photon ring is not a physical structure but rather a visual
          artifact caused by gravitational lensing, a phenomenon predicted by
          Einstein’s theory of general relativity. The ring represents the
          boundary where photons are so strongly influenced by the black hole’s
          gravity that they orbit the event horizon before escaping to be
          observed.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Formation of the Photon Ring
        </h2>
        <p>
          The formation of the photon ring is governed by the interplay of
          light and gravity. As light travels through the curved spacetime
          around a black hole, it experiences gravitational lensing. Near the
          event horizon—the point beyond which nothing can escape—a delicate
          balance occurs: photons are pulled toward the black hole but can also
          escape if their trajectories allow it.
        </p>
        <p>
          Photons that pass extremely close to the black hole are bent around
          it, with some completing multiple orbits before escaping. These
          photons form a narrow, bright ring that encircles the black hole’s
          shadow. The size and shape of the photon ring are determined by the
          black hole’s mass, spin, and surrounding environment.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Why Is the Photon Ring Important?
        </h2>
        <p>
          The photon ring is a powerful tool for studying black holes and the
          extreme physics of their environments. Key reasons for its importance
          include:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Testing General Relativity:</strong> The photon ring’s
            structure provides a direct test of Einstein’s theory of general
            relativity under extreme gravitational conditions.
          </li>
          <li>
            <strong>Measuring Black Hole Properties:</strong> The ring’s size
            and brightness are closely related to the black hole’s mass and
            spin, enabling precise measurements of these properties.
          </li>
          <li>
            <strong>Probing Accretion Disks:</strong> Light from the photon ring
            can carry information about the black hole’s accretion disk—a
            swirling disk of gas and dust that emits intense radiation.
          </li>
          <li>
            <strong>Understanding Light Behavior:</strong> The photon ring
            reveals how light behaves in the presence of extremely curved
            spacetime, offering insights into fundamental physics.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Observing the Photon Ring
        </h2>
        <p>
          Observing the photon ring is no small feat, requiring state-of-the-art
          technology and international collaboration. The Event Horizon
          Telescope (EHT) is a network of radio telescopes spread across the
          globe, working together to achieve the resolution needed to capture
          such fine details. By combining data from multiple locations, the EHT
          creates a virtual telescope as large as Earth itself.
        </p>
        <p>
          The first image of a photon ring, captured in 2019, was a major
          milestone in astrophysics. It provided direct visual evidence of a
          black hole’s event horizon and confirmed theoretical predictions
          about the photon ring’s appearance. Future observations aim to
          capture even finer details, such as the ring’s substructure and
          polarization, to unlock more secrets about black holes.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          The Future of Photon Ring Studies
        </h2>
        <p>
          Research on photon rings is just beginning. Upcoming advancements in
          telescope technology, such as the Next Generation Event Horizon
          Telescope (ngEHT), promise to enhance our ability to study these
          phenomena. By capturing higher-resolution images, scientists hope to
          gain deeper insights into black hole dynamics, accretion processes,
          and the nature of spacetime itself.
        </p>
        <p>
          Additionally, photon ring observations may help address some of the
          biggest questions in physics, such as the unification of general
          relativity and quantum mechanics. The extreme environments around
          black holes serve as natural laboratories for exploring these
          fundamental mysteries.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Conclusion
        </h2>
        <p>
          The photon ring around black holes is more than just a beautiful
          feature—it is a gateway to understanding some of the universe’s most
          profound phenomena. Through its study, scientists can probe the
          nature of gravity, test fundamental theories, and unravel the
          mysteries of black holes. As technology advances and observations
          become more detailed, the photon ring will continue to illuminate the
          enigmatic world of black holes and spacetime.
        </p>
      </section>
    </article>
  );
};

export default PhotonRingArticle;
