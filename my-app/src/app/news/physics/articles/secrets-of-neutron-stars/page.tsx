"use client";

import React from "react";

const NeutronStarsArticle = () => {
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
        The Secrets of Neutron Stars
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
          Neutron stars are among the most fascinating and extreme objects in the
          universe. Born from the fiery death of massive stars, these celestial
          remnants possess extraordinary density, magnetic fields, and gravitational
          forces. A teaspoon of neutron star material would weigh billions of tons,
          encapsulating the immense pressures and forces at work in their interiors.
        </p>
        <p>
          Despite their relatively small size—typically about 20 kilometers in
          diameter—neutron stars are packed with mysteries that challenge our
          understanding of physics. This article delves into the formation,
          properties, and enigmatic phenomena associated with neutron stars.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Formation of Neutron Stars
        </h2>
        <p>
          Neutron stars form during supernova explosions, which occur when a massive
          star exhausts its nuclear fuel and its core collapses under gravity. During
          this collapse, protons and electrons are crushed together to form neutrons,
          leaving behind a dense, neutron-rich core. The outer layers of the star are
          ejected into space, creating a spectacular explosion that can briefly
          outshine an entire galaxy.
        </p>
        <p>
          The resulting neutron star is incredibly compact, with a density comparable
          to the nucleus of an atom. This density is so extreme that a single sugar
          cube of neutron star material would outweigh Mount Everest. The intense
          gravitational forces prevent the star from collapsing further, balancing
          the inward pull with the pressure from neutron degeneracy—a quantum
          mechanical effect that prevents neutrons from occupying the same quantum
          state.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Properties of Neutron Stars
        </h2>
        <p>
          Neutron stars exhibit a range of extraordinary properties that make them
          unique cosmic laboratories for studying extreme physics:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Density:</strong> Neutron stars are the densest objects in the
            universe, outside of black holes. Their density increases toward the
            core, where exotic states of matter may exist, such as quark-gluon plasma.
          </li>
          <li>
            <strong>Magnetic Fields:</strong> Neutron stars can have magnetic fields
            trillions of times stronger than Earth's. These magnetic fields influence
            the star's emissions and can generate phenomena like magnetars, which are
            neutron stars with exceptionally strong magnetic fields.
          </li>
          <li>
            <strong>Spin:</strong> Many neutron stars spin rapidly, completing
            hundreds of rotations per second. These "pulsars" emit beams of radiation
            that sweep across space like cosmic lighthouses.
          </li>
          <li>
            <strong>Gravitational Force:</strong> The gravity on the surface of a
            neutron star is about 2 billion times stronger than Earth's, meaning that
            even light is significantly affected by the star's intense gravitational
            field.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Exotic Phenomena
        </h2>
        <p>
          Neutron stars are known for producing a variety of exotic phenomena that
          challenge our understanding of physics:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Pulsars:</strong> These rapidly spinning neutron stars emit
            periodic pulses of electromagnetic radiation, which can be detected as
            regular radio signals on Earth. Pulsars are used as precise cosmic clocks
            for testing theories of gravity and mapping the galaxy.
          </li>
          <li>
            <strong>Magnetars:</strong> These neutron stars have magnetic fields so
            strong that they can deform atoms and generate intense bursts of gamma
            rays and X-rays. Magnetars are believed to power some of the most
            energetic explosions in the universe.
          </li>
          <li>
            <strong>Gravitational Waves:</strong> When neutron stars merge in binary
            systems, they generate ripples in spacetime known as gravitational waves.
            These events provide valuable insights into the nature of matter and the
            universe's evolution.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Neutron Stars and the Limits of Physics
        </h2>
        <p>
          Neutron stars serve as natural laboratories for exploring the limits of
          physics. Their extreme conditions allow scientists to study phenomena that
          cannot be replicated on Earth, such as the behavior of matter at nuclear
          densities and the effects of ultra-strong magnetic fields.
        </p>
        <p>
          One of the most intriguing questions in astrophysics is the nature of
          matter at the core of neutron stars. The extreme pressures and densities
          may cause neutrons to break down into their constituent quarks, creating a
          state of matter known as quark-gluon plasma. Understanding these exotic
          states of matter could shed light on the conditions that existed shortly
          after the Big Bang.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Conclusion
        </h2>
        <p>
          Neutron stars are extraordinary objects that reveal the universe's most
          extreme and mysterious phenomena. From their formation in stellar
          explosions to their exotic properties and role in gravitational wave
          astronomy, neutron stars provide a wealth of knowledge about the cosmos and
          the fundamental laws of nature. As technology advances and observational
          techniques improve, we are likely to uncover even more secrets about these
          enigmatic celestial objects.
        </p>
      </section>
    </article>
  );
};

export default NeutronStarsArticle;
