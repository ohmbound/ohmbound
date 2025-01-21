"use client";

import React from "react";

const GravitationalLensingArticle = () => {
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
        The Science of Gravitational Lensing
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
          Gravitational lensing is a fascinating phenomenon predicted by Albert
          Einstein’s General Theory of Relativity. It occurs when a massive
          object, such as a galaxy or a cluster of galaxies, bends the path of
          light coming from a more distant object. This bending of light not
          only creates stunning cosmic visuals but also provides astronomers
          with a unique tool for studying the universe. By analyzing the
          distorted images produced by gravitational lensing, scientists can
          uncover the distribution of dark matter, measure the expansion of the
          universe, and even detect exoplanets.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          What is Gravitational Lensing?
        </h2>
        <p>
          Gravitational lensing occurs because massive objects warp the fabric
          of spacetime. According to Einstein’s theory, light does not travel in
          straight lines through curved spacetime but instead follows the
          curvature caused by the presence of mass. This effect can magnify,
          distort, and even duplicate the appearance of background objects,
          leading to phenomena such as Einstein rings, arcs, and multiple
          images.
        </p>
        <p>
          The phenomenon is categorized into three types based on the
          configuration of the light source, the lensing object, and the
          observer:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Strong Lensing:</strong> This occurs when the lensing
            object, such as a galaxy cluster, produces dramatic distortions,
            including multiple images or Einstein rings.
          </li>
          <li>
            <strong>Weak Lensing:</strong> The distortions are subtler and
            require statistical analysis of many background objects to detect.
          </li>
          <li>
            <strong>Microlensing:</strong> This occurs when a smaller object,
            like a star or planet, acts as the lens, causing temporary
            brightening of the background source.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          The Physics Behind Gravitational Lensing
        </h2>
        <p>
          Gravitational lensing is governed by the equations of General
          Relativity. The mass of the lensing object creates a gravitational
          potential that bends the trajectory of photons traveling near it. The
          degree of bending depends on the mass and distribution of the lensing
          object and the alignment of the source, lens, and observer.
        </p>
        <p>
          Mathematically, gravitational lensing can be described using the
          lensing equation:
        </p>
        <p>
          <i>β = θ - (D<sub>ls</sub>/D<sub>s</sub>) × α(θ)</i>
        </p>
        <p>
          Here, <i>β</i> is the true position of the source, <i>θ</i> is the
          observed position, <i>D<sub>ls</sub></i> and <i>D<sub>s</sub></i> are
          the angular diameter distances between the lens-source and
          observer-source, respectively, and <i>α(θ)</i> is the deflection
          angle caused by the lens.
        </p>
        <p>
          The magnification and distortion effects depend on the geometry and
          mass distribution of the lensing object, providing a wealth of
          information about the cosmos.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Applications of Gravitational Lensing
        </h2>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Mapping Dark Matter:</strong> Gravitational lensing is one
            of the few tools available to study dark matter, an invisible
            substance that makes up about 27% of the universe. By analyzing the
            lensing effects of galaxy clusters, scientists can infer the
            distribution and density of dark matter.
          </li>
          <li>
            <strong>Measuring Cosmic Expansion:</strong> Lensed objects can be
            used to measure the Hubble constant, a key parameter that describes
            the rate of expansion of the universe.
          </li>
          <li>
            <strong>Exoplanet Detection:</strong> Microlensing events caused by
            stars and planets in our galaxy provide a unique method for
            detecting exoplanets, even those that are far from their parent
            stars.
          </li>
          <li>
            <strong>Studying the Early Universe:</strong> Gravitational lensing
            magnifies light from distant galaxies, allowing astronomers to study
            objects that would otherwise be too faint to observe, shedding light
            on the formation and evolution of galaxies.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Challenges and Future Prospects
        </h2>
        <p>
          Despite its potential, gravitational lensing presents several
          challenges. Accurately modeling the mass distribution of lensing
          objects is complex and requires advanced computational techniques.
          Additionally, distinguishing lensing effects from other cosmic
          phenomena demands highly sensitive instruments and meticulous data
          analysis.
        </p>
        <p>
          However, the future of gravitational lensing research is promising.
          Upcoming space telescopes like the James Webb Space Telescope (JWST)
          and the Nancy Grace Roman Space Telescope will enhance our ability to
          observe lensing phenomena with unprecedented detail. These
          advancements will deepen our understanding of dark matter, cosmic
          structure, and the early universe.
        </p>
      </section>

      <section>
        <h2
          style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}
        >
          Conclusion
        </h2>
        <p>
          Gravitational lensing is a powerful tool that bridges the gap between
          theoretical physics and observational astronomy. By bending the light
          of distant objects, it reveals the hidden structures of the universe
          and provides insights into some of the most profound mysteries of
          modern science. As technology advances, gravitational lensing will
          continue to play a pivotal role in unraveling the secrets of the
          cosmos.
        </p>
      </section>
    </article>
  );
};

export default GravitationalLensingArticle;
