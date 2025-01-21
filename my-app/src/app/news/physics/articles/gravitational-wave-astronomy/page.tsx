"use client";

import React from "react";

const GravitationalWaveArticle = () => {
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
        Gravitational Wave Astronomy: A New Window on the Universe
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
          Gravitational wave astronomy has revolutionized our understanding of
          the cosmos, providing a completely new way to observe and study the
          universe. First predicted by Albert Einstein in his General Theory of
          Relativity, gravitational waves are ripples in spacetime caused by
          the acceleration of massive objects, such as colliding black holes or
          merging neutron stars. The detection of these waves has opened a new
          frontier in astronomy, allowing scientists to probe phenomena that
          were previously invisible through traditional methods.
        </p>
        <p>
          Since the groundbreaking detection of gravitational waves by the
          Laser Interferometer Gravitational-Wave Observatory (LIGO) in 2015,
          this field has rapidly expanded, leading to numerous discoveries that
          deepen our understanding of black holes, neutron stars, and the early
          universe.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          What Are Gravitational Waves?
        </h2>
        <p>
          Gravitational waves are distortions in spacetime caused by the motion
          of massive objects. Imagine spacetime as a flexible sheet: when heavy
          objects move, they create ripples on this sheet. These ripples, or
          gravitational waves, travel outward at the speed of light, carrying
          information about the events that generated them.
        </p>
        <p>
          The most significant sources of gravitational waves are cataclysmic
          events, such as:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Black Hole Mergers:</strong> When two black holes spiral
            inward and collide, they release immense amounts of energy in the
            form of gravitational waves.
          </li>
          <li>
            <strong>Neutron Star Collisions:</strong> The collision of neutron
            stars produces gravitational waves and often emits electromagnetic
            signals like gamma-ray bursts.
          </li>
          <li>
            <strong>Supernovae:</strong> Exploding stars can create gravitational
            waves, though these signals are harder to detect.
          </li>
          <li>
            <strong>The Big Bang:</strong> Primordial gravitational waves may
            carry information about the universe's earliest moments.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          The First Detection: A Milestone in Science
        </h2>
        <p>
          On September 14, 2015, LIGO made history by detecting gravitational
          waves from the merger of two black holes approximately 1.3 billion
          light-years away. This discovery confirmed a major prediction of
          Einstein's theory of general relativity and marked the birth of
          gravitational wave astronomy. The signal, known as GW150914, lasted
          only a fraction of a second but carried groundbreaking implications.
        </p>
        <p>
          The detection of GW150914 was achieved through the use of highly
          sensitive interferometers. LIGO's two detectors, located in
          Washington and Louisiana, use laser beams to measure minute changes
          in distance caused by passing gravitational waves. These changes are
          smaller than the width of a proton, demonstrating the incredible
          precision required for such measurements.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Expanding the Cosmic Frontier
        </h2>
        <p>
          Gravitational wave astronomy has opened new avenues for exploring the
          universe. Unlike electromagnetic waves, such as light or radio waves,
          gravitational waves are not obstructed by matter. This allows them to
          travel vast distances without being absorbed or scattered, providing
          a clear view of the most violent and energetic events in the cosmos.
        </p>
        <p>
          For example, the detection of a neutron star collision in 2017
          (GW170817) marked the first time gravitational waves were observed
          alongside electromagnetic signals. This multi-messenger observation
          provided valuable insights into the production of heavy elements like
          gold and platinum, as well as the origins of gamma-ray bursts.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          The Technology Behind Detection
        </h2>
        <p>
          Gravitational wave detection requires cutting-edge technology and
          extreme precision. LIGO and its European counterpart, Virgo, use
          laser interferometry to detect the tiny distortions caused by passing
          gravitational waves. These detectors consist of long arms (several
          kilometers in length) arranged in an L-shape. Laser beams travel back
          and forth along these arms, and any change in their lengths due to
          gravitational waves is measured with incredible accuracy.
        </p>
        <p>
          Future detectors, such as the space-based Laser Interferometer Space
          Antenna (LISA), will expand our detection capabilities, allowing us
          to observe lower-frequency gravitational waves from sources such as
          supermassive black holes and early-universe phenomena.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Implications for the Future
        </h2>
        <p>
          Gravitational wave astronomy is still in its infancy, but its
          potential is vast. By studying these ripples in spacetime, scientists
          hope to:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Understand Black Hole Formation:</strong> Observing black
            hole mergers provides clues about their formation and evolution.
          </li>
          <li>
            <strong>Explore Neutron Star Physics:</strong> Gravitational waves
            from neutron stars reveal information about their extreme densities
            and exotic states of matter.
          </li>
          <li>
            <strong>Probe the Early Universe:</strong> Primordial gravitational
            waves could offer insights into the universe's first moments,
            including the mysterious inflationary epoch.
          </li>
          <li>
            <strong>Test General Relativity:</strong> Gravitational wave data
            allows scientists to test Einstein's theory under extreme
            conditions.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Conclusion
        </h2>
        <p>
          Gravitational wave astronomy represents a revolutionary leap in our
          ability to explore the universe. By detecting and analyzing these
          spacetime ripples, we can uncover secrets about the most extreme
          objects and events in existence. As technology advances and new
          detectors come online, the future of this field promises even more
          groundbreaking discoveries, providing humanity with an unprecedented
          window into the cosmos.
        </p>
      </section>
    </article>
  );
};

export default GravitationalWaveArticle;
