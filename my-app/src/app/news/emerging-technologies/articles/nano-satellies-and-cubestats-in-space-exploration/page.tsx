"use client";

import React from "react";

const NanoSatellitesArticle = () => {
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
        lineHeight: "1.6",
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
        Nano-Satellites and CubeSats in Space Exploration
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
          style={{
            fontSize: "1.8rem",
            marginBottom: "10px",
            color: "#0070f3",
          }}
        >
          Introduction
        </h2>
        <p>
          The advent of nano-satellites and CubeSats has revolutionized space
          exploration and satellite technology. These miniature spacecraft,
          typically weighing less than 10 kilograms, have democratized access to
          space, enabling universities, startups, and even high school students
          to participate in space research. By reducing costs and complexity,
          nano-satellites and CubeSats are transforming how we observe Earth,
          conduct experiments, and explore the cosmos.
        </p>
        <p>
          In recent years, their applications have expanded beyond educational
          and experimental purposes to include scientific research, Earth
          observation, telecommunications, and even interplanetary missions.
          This article delves into the technology, applications, and future of
          nano-satellites and CubeSats in space exploration.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "10px",
            color: "#0070f3",
          }}
        >
          What Are Nano-Satellites and CubeSats?
        </h2>
        <p>
          Nano-satellites are small satellites that typically weigh between 1
          and 10 kilograms. Among them, CubeSats are a specific class of
          nano-satellites defined by their modular design. A single CubeSat
          unit, or 1U, measures 10 cm x 10 cm x 10 cm and weighs approximately
          1.33 kilograms. Larger CubeSats are built by combining multiple units,
          such as 2U (two units) or 3U (three units).
        </p>
        <p>
          The standardized design of CubeSats, combined with the availability of
          commercial off-the-shelf components, has significantly reduced the
          cost and complexity of satellite development. This accessibility has
          opened up new opportunities for small organizations and researchers to
          conduct space missions.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "10px",
            color: "#0070f3",
          }}
        >
          Applications of Nano-Satellites and CubeSats
        </h2>
        <p>
          Nano-satellites and CubeSats have a wide range of applications in
          various fields:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Earth Observation:</strong> CubeSats equipped with cameras
            and sensors can monitor environmental changes, track weather
            patterns, and provide real-time data for disaster management.
          </li>
          <li>
            <strong>Telecommunications:</strong> These small satellites can
            establish communication networks in remote areas, enhancing internet
            connectivity worldwide.
          </li>
          <li>
            <strong>Scientific Research:</strong> CubeSats enable affordable
            space-based experiments, such as studying the effects of
            microgravity on biological systems or testing new technologies.
          </li>
          <li>
            <strong>Interplanetary Missions:</strong> Advanced CubeSats have
            been deployed for interplanetary exploration, such as NASA's
            MarCO-A and MarCO-B, which provided communication support during the
            InSight mission on Mars.
          </li>
          <li>
            <strong>Space Weather Monitoring:</strong> Nano-satellites can study
            the Sun's activity and its impact on Earth's magnetosphere, helping
            to predict space weather events.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "10px",
            color: "#0070f3",
          }}
        >
          Advantages of Nano-Satellites and CubeSats
        </h2>
        <p>
          The popularity of nano-satellites and CubeSats stems from their
          numerous advantages over traditional satellites:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Low Cost:</strong> Developing and launching CubeSats is
            significantly cheaper than traditional satellites, making space
            exploration accessible to a wider range of entities.
          </li>
          <li>
            <strong>Quick Development Time:</strong> CubeSats can be designed
            and built within months, compared to years for traditional
            satellites.
          </li>
          <li>
            <strong>Modularity:</strong> The standardized design allows for
            easy customization and scalability, enabling diverse mission
            objectives.
          </li>
          <li>
            <strong>Ride-Share Launches:</strong> Nano-satellites can
            piggyback on larger missions, reducing launch costs and increasing
            access to space.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "10px",
            color: "#0070f3",
          }}
        >
          Challenges in Nano-Satellite Development
        </h2>
        <p>
          Despite their advantages, nano-satellites and CubeSats face several
          challenges:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Limited Payload Capacity:</strong> The small size of
            CubeSats restricts the number and complexity of instruments they can
            carry.
          </li>
          <li>
            <strong>Short Lifespan:</strong> Due to their low orbit and
            exposure to atmospheric drag, many CubeSats have a limited lifespan
            of a few months to a few years.
          </li>
          <li>
            <strong>Reliability:</strong> Miniaturized components can be more
            susceptible to radiation and other space hazards.
          </li>
          <li>
            <strong>Space Debris:</strong> The proliferation of CubeSats
            increases the risk of space debris, necessitating better end-of-life
            management.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "10px",
            color: "#0070f3",
          }}
        >
          The Future of Nano-Satellites and CubeSats
        </h2>
        <p>
          The future of nano-satellites and CubeSats is promising, with ongoing
          advancements in miniaturization, propulsion systems, and autonomous
          operations. Emerging technologies, such as AI and machine learning,
          are being integrated to enhance their capabilities and autonomy.
        </p>
        <p>
          The development of swarms of CubeSats, working collaboratively, is
          another exciting area of research. These swarms can perform complex
          tasks, such as creating 3D maps of Earth's surface or studying
          planetary atmospheres.
        </p>
      </section>

      <section>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "10px",
            color: "#0070f3",
          }}
        >
          Conclusion
        </h2>
        <p>
          Nano-satellites and CubeSats are reshaping the landscape of space
          exploration, making it more accessible, affordable, and versatile.
          While challenges remain, their potential to revolutionize industries
          and expand our understanding of the universe is undeniable. As
          technology continues to evolve, nano-satellites and CubeSats will
          undoubtedly play a pivotal role in humanity's journey to the stars.
        </p>
      </section>
    </article>
  );
};

export default NanoSatellitesArticle;
