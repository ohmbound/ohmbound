"use client";

import React from "react";

const AutonomousShipsArticle = () => {
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
        Autonomous Ships: Engineering at Sea
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
          The maritime industry, a cornerstone of global trade and transportation,
          is undergoing a groundbreaking transformation with the advent of
          autonomous ships. These vessels, equipped with cutting-edge
          technologies, are capable of navigating and operating with minimal or
          no human intervention. Autonomous ships promise to revolutionize
          maritime operations by enhancing safety, reducing costs, and improving
          efficiency.
        </p>
        <p>
          From commercial cargo ships to research vessels and military
          applications, autonomous ships represent the future of engineering at
          sea. This article delves into the technology behind these vessels, their
          potential benefits, and the challenges that lie ahead in making them a
          reality.
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
          What Are Autonomous Ships?
        </h2>
        <p>
          Autonomous ships are vessels that use advanced technologies such as
          artificial intelligence (AI), machine learning, sensors, and
          communication systems to operate without human intervention. They are
          designed to navigate, monitor the environment, and make real-time
          decisions to ensure safe and efficient operations.
        </p>
        <p>
          These ships are categorized based on their level of autonomy:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Remote-Controlled Ships:</strong> Operated by humans from a
            remote control center, with no crew on board.
          </li>
          <li>
            <strong>Partially Autonomous Ships:</strong> Require minimal human
            intervention and rely on AI for certain operations.
          </li>
          <li>
            <strong>Fully Autonomous Ships:</strong> Operate entirely on their
            own, using AI and sensors for navigation and decision-making.
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
          Key Technologies Behind Autonomous Ships
        </h2>
        <p>
          The development of autonomous ships relies on a combination of
          advanced technologies:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Artificial Intelligence (AI):</strong> Enables ships to
            process vast amounts of data, learn from patterns, and make
            real-time decisions.
          </li>
          <li>
            <strong>Sensors and Radar:</strong> Include LIDAR, sonar, cameras,
            and radar systems to detect obstacles, monitor the environment, and
            ensure safe navigation.
          </li>
          <li>
            <strong>Autonomous Navigation Systems:</strong> Allow ships to
            determine optimal routes, avoid collisions, and adapt to changing
            conditions.
          </li>
          <li>
            <strong>Internet of Things (IoT):</strong> Facilitates communication
            between onboard systems and external control centers for seamless
            operations.
          </li>
          <li>
            <strong>Cybersecurity Measures:</strong> Protect autonomous systems
            from hacking and unauthorized access, ensuring operational integrity.
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
          Advantages of Autonomous Ships
        </h2>
        <p>
          Autonomous ships offer a range of benefits that make them a
          game-changer in the maritime industry:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Enhanced Safety:</strong> By eliminating human error, which
            is responsible for a majority of maritime accidents, autonomous ships
            can significantly improve safety at sea.
          </li>
          <li>
            <strong>Cost Reduction:</strong> Automation reduces the need for crew
            members, leading to lower labor costs and increased operational
            efficiency.
          </li>
          <li>
            <strong>Environmental Sustainability:</strong> Autonomous ships can
            optimize fuel consumption and reduce emissions through efficient
            navigation and speed management.
          </li>
          <li>
            <strong>Increased Efficiency:</strong> Real-time data analysis and
            route optimization allow for faster and more efficient delivery of
            goods.
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
          Challenges and Limitations
        </h2>
        <p>
          Despite their potential, autonomous ships face several challenges:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Regulatory Hurdles:</strong> International maritime laws
            need to be updated to accommodate autonomous ship operations.
          </li>
          <li>
            <strong>Technical Complexity:</strong> Developing reliable systems
            that can handle diverse maritime conditions is a significant
            challenge.
          </li>
          <li>
            <strong>Cybersecurity Risks:</strong> Protecting autonomous systems
            from cyberattacks is crucial to ensure safe operations.
          </li>
          <li>
            <strong>Cost of Implementation:</strong> High initial costs for
            research, development, and deployment may hinder widespread adoption.
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
          Future Prospects
        </h2>
        <p>
          The future of autonomous ships looks promising, with ongoing
          advancements in AI, robotics, and maritime technologies. Research and
          pilot projects by companies like Rolls-Royce, Kongsberg, and others
          are paving the way for commercial deployment. Autonomous cargo ships,
          ferries, and research vessels are likely to become more common in the
          next decade, contributing to a safer, greener, and more efficient
          maritime industry.
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
          Autonomous ships represent a bold leap forward in maritime technology.
          By integrating advanced systems and innovative engineering, these
          vessels promise to revolutionize the shipping industry while
          addressing pressing challenges like safety, efficiency, and
          environmental sustainability. As the technology matures, autonomous
          ships will undoubtedly play a pivotal role in shaping the future of
          global maritime operations.
        </p>
      </section>
    </article>
  );
};

export default AutonomousShipsArticle;
