"use client";

import React from "react";

const DarkEnergyArticle = () => {
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
        Dark Energy and the Expanding Universe
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
          The universe is expanding, a fact that has been firmly established
          since the groundbreaking work of Edwin Hubble in the 1920s. However,
          in the late 1990s, astronomers made a startling discovery: the
          expansion of the universe is not slowing down, as previously
          believed, but accelerating. This unexpected phenomenon led to the
          introduction of "dark energy," a mysterious force that constitutes
          about 68% of the universe and is thought to be driving this cosmic
          acceleration.
        </p>
        <p>
          Understanding dark energy is one of the most profound challenges in
          modern cosmology and theoretical physics. Its nature, origins, and
          implications hold the key to unraveling the ultimate fate of the
          universe.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          What is Dark Energy?
        </h2>
        <p>
          Dark energy is a term used to describe the unknown force or property
          of space responsible for the accelerating expansion of the universe.
          Unlike matter or dark matter, which exert gravitational pull, dark
          energy appears to have a repulsive effect, counteracting gravity on
          the largest cosmic scales. Its existence was inferred from the
          observation of distant Type Ia supernovae, which revealed that these
          cosmic explosions were farther away than they should have been in a
          decelerating universe.
        </p>
        <p>
          The leading theoretical explanation for dark energy involves the
          concept of vacuum energy, which originates from quantum fluctuations
          in empty space. According to this idea, even a perfect vacuum has a
          small, positive energy density that exerts a negative pressure,
          driving the acceleration of the universe's expansion.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Evidence for Dark Energy
        </h2>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Supernova Observations:</strong> The discovery of the
            universe's accelerating expansion came from studying Type Ia
            supernovae, which act as "standard candles" for measuring cosmic
            distances.
          </li>
          <li>
            <strong>Cosmic Microwave Background (CMB):</strong> Observations of
            the CMB, such as those by the Planck satellite, provide evidence for
            dark energy by showing that the universe is spatially flat and that
            dark energy dominates its energy budget.
          </li>
          <li>
            <strong>Baryon Acoustic Oscillations (BAO):</strong> BAO refers to
            periodic fluctuations in the density of visible baryonic matter in
            the universe. These oscillations serve as a "cosmic ruler" to
            measure the effects of dark energy on large-scale structure.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Theories and Models of Dark Energy
        </h2>
        <p>
          Several theories attempt to explain the nature of dark energy:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Cosmological Constant (Λ):</strong> Proposed by Einstein as
            a modification to his equations of General Relativity, the
            cosmological constant represents a uniform energy density filling
            space. This is the simplest explanation for dark energy but raises
            questions about its extraordinarily small value compared to
            theoretical predictions.
          </li>
          <li>
            <strong>Quintessence:</strong> This model suggests that dark energy
            arises from a dynamic scalar field that evolves over time, unlike
            the static nature of the cosmological constant.
          </li>
          <li>
            <strong>Modified Gravity:</strong> Some theories propose that
            General Relativity breaks down on cosmic scales, and dark energy is
            a manifestation of these deviations from standard gravity.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Implications for the Universe's Fate
        </h2>
        <p>
          Dark energy's influence on the universe's expansion has profound
          implications for its ultimate fate:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>The Big Freeze:</strong> If dark energy continues to
            dominate, the universe will expand forever, causing galaxies to move
            farther apart. Stars will eventually burn out, leaving a cold and
            desolate cosmos.
          </li>
          <li>
            <strong>The Big Rip:</strong> In some scenarios, dark energy's
            repulsive force could grow stronger over time, eventually tearing
            apart galaxies, stars, planets, and even atomic particles.
          </li>
          <li>
            <strong>The Big Crunch:</strong> If dark energy is not constant and
            reverses its effect, the universe's expansion could halt and
            collapse back into a singularity.
          </li>
        </ul>
      </section>

      <section>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Conclusion
        </h2>
        <p>
          Dark energy remains one of the greatest enigmas in modern science. Its
          discovery has reshaped our understanding of the cosmos and sparked a
          new era of exploration in physics and astronomy. As observational
          tools and theoretical models continue to improve, the mysteries of
          dark energy may one day be unveiled, offering profound insights into
          the nature of the universe and its ultimate destiny.
        </p>
      </section>
    </article>
  );
};

export default DarkEnergyArticle;
