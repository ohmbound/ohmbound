"use client";

import React from "react";

const CosmicMicrowaveBackgroundArticle = () => {
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
        Cosmic Microwave Background Explained
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
          The Cosmic Microwave Background (CMB) is often referred to as the
          "afterglow" of the Big Bang. It is a faint microwave radiation
          permeating the universe, offering a glimpse into its earliest moments.
          First detected in 1965 by Arno Penzias and Robert Wilson, the CMB is
          one of the most compelling pieces of evidence supporting the Big Bang
          theory. Its study has revolutionized our understanding of cosmology,
          shedding light on the universe's origins, composition, and evolution.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          What Is the Cosmic Microwave Background?
        </h2>
        <p>
          The CMB is the residual thermal radiation left over from the hot,
          dense state of the early universe, approximately 380,000 years after
          the Big Bang. At this point, the universe had cooled enough for atoms
          to form, allowing photons to travel freely for the first time. This
          process, known as "recombination," marked the transition from an
          opaque plasma to a transparent universe.
        </p>
        <p>
          The photons released during recombination have stretched over time due
          to the universe's expansion. Originally emitted as high-energy light,
          these photons have redshifted into the microwave part of the
          electromagnetic spectrum, resulting in what we now observe as the CMB.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          The Discovery of the CMB
        </h2>
        <p>
          The discovery of the CMB was accidental. In 1965, Arno Penzias and
          Robert Wilson, working at Bell Labs, were calibrating a radio antenna
          when they detected an unexpected noise. Initially, they suspected
          interference from pigeons nesting in the equipment, but even after
          removing the birds and cleaning the antenna, the noise persisted.
        </p>
        <p>
          Unbeknownst to them, scientists at Princeton University, led by Robert
          Dicke, were searching for this very signal, which they believed to be
          evidence of the Big Bang. When Penzias and Wilson reported their
          findings, the connection was made, and their discovery earned them the
          1978 Nobel Prize in Physics.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Mapping the CMB
        </h2>
        <p>
          The CMB is not uniform; it contains tiny temperature fluctuations
          (anisotropies) that provide a wealth of information about the early
          universe. These anisotropies are imprints of density variations in the
          primordial plasma, which later evolved into galaxies, stars, and
          cosmic structures.
        </p>
        <p>
          Modern satellites like the Cosmic Background Explorer (COBE), the
          Wilkinson Microwave Anisotropy Probe (WMAP), and the Planck spacecraft
          have mapped the CMB with increasing precision. These maps reveal a
          nearly uniform temperature of 2.725 Kelvin, with minuscule
          fluctuations on the order of microkelvins.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Why Is the CMB Important?
        </h2>
        <p>
          The CMB is a treasure trove of information about the universe. Its
          detailed study has led to several groundbreaking discoveries:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Age of the Universe:</strong> Analysis of the CMB allows
            scientists to estimate the universe's age, currently calculated to
            be approximately 13.8 billion years.
          </li>
          <li>
            <strong>Composition:</strong> The CMB provides insights into the
            universe's composition, revealing that it consists of 5% ordinary
            matter, 27% dark matter, and 68% dark energy.
          </li>
          <li>
            <strong>Inflation:</strong> The uniformity of the CMB across vast
            cosmic distances supports the theory of cosmic inflation, a rapid
            expansion of the universe shortly after the Big Bang.
          </li>
          <li>
            <strong>Large-Scale Structure:</strong> The anisotropies in the CMB
            are the seeds of large-scale structures, helping scientists
            understand galaxy formation and distribution.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Challenges in CMB Observations
        </h2>
        <p>
          Observing the CMB is not without challenges. Foreground emissions from
          our galaxy and other cosmic sources can interfere with measurements.
          Advanced data-processing techniques are required to separate these
          signals from the true CMB signal. Additionally, as observations
          become more precise, even tiny sources of noise, such as temperature
          variations in the instruments themselves, must be accounted for.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          The Future of CMB Research
        </h2>
        <p>
          The study of the CMB is far from over. Upcoming missions like the
          Simons Observatory and the proposed CMB-S4 experiment aim to delve
          deeper into its mysteries. These projects will focus on detecting
          primordial gravitational waves, which could provide direct evidence
          for cosmic inflation.
        </p>
        <p>
          Advances in CMB research will continue to refine our understanding of
          the universe's origins, composition, and ultimate fate. As technology
          improves, the CMB will remain a vital tool for probing the cosmos.
        </p>
      </section>

      <section>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Conclusion
        </h2>
        <p>
          The Cosmic Microwave Background is more than just an echo of the Big
          Bang; it is a window into the universe's infancy, offering insights
          into its origins, structure, and evolution. As one of the most
          significant discoveries in modern cosmology, the CMB continues to
          inspire scientists and deepen our understanding of the cosmos. Its
          study exemplifies humanity's quest to unravel the mysteries of the
          universe and our place within it.
        </p>
      </section>
    </article>
  );
};

export default CosmicMicrowaveBackgroundArticle;
