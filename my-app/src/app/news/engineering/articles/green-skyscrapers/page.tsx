"use client";

import React from "react";

const GreenSkyscrapersArticle = () => {
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
        Green Skyscrapers: Building the Future of Sustainable Cities
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
          As urban populations grow and cities continue to expand vertically,
          the demand for sustainable building practices has never been greater.
          Green skyscrapers, also known as eco-skyscrapers, are transforming the
          way we think about urban architecture and environmental responsibility.
          These buildings combine cutting-edge technologies, innovative
          materials, and sustainable design principles to reduce energy
          consumption, minimize environmental impact, and create healthier
          spaces for inhabitants.
        </p>
        <p>
          By incorporating features like renewable energy systems, vertical
          gardens, and smart building technologies, green skyscrapers are
          leading the way in the global fight against climate change and
          resource depletion. This article explores the key features,
          advantages, and future prospects of these groundbreaking structures.
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
          What Are Green Skyscrapers?
        </h2>
        <p>
          Green skyscrapers are high-rise buildings designed with sustainability
          at their core. These structures aim to reduce their environmental
          footprint through energy-efficient systems, water conservation
          measures, and the use of eco-friendly materials. They often feature
          innovative design elements such as:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Vertical Gardens:</strong> Large-scale greenery integrated
            into the building’s façade or interior spaces to improve air
            quality, regulate temperature, and promote biodiversity.
          </li>
          <li>
            <strong>Renewable Energy Systems:</strong> Solar panels, wind
            turbines, and geothermal energy systems that generate clean energy
            for the building's operations.
          </li>
          <li>
            <strong>Smart Building Technologies:</strong> IoT-enabled systems
            that optimize energy use, monitor air quality, and enhance occupant
            comfort.
          </li>
          <li>
            <strong>Rainwater Harvesting:</strong> Systems designed to collect
            and reuse rainwater for irrigation, cooling, and other purposes.
          </li>
          <li>
            <strong>Energy-Efficient Materials:</strong> The use of materials
            such as low-emissivity glass and recycled steel to reduce energy
            consumption and waste.
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
          Benefits of Green Skyscrapers
        </h2>
        <p>
          Green skyscrapers offer a wide range of environmental, economic, and
          social benefits:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Environmental Impact:</strong> By reducing energy
            consumption and utilizing renewable resources, green skyscrapers
            help lower greenhouse gas emissions and combat climate change.
          </li>
          <li>
            <strong>Cost Savings:</strong> Energy-efficient systems and smart
            technologies reduce operational costs over the building's lifetime,
            making them economically viable in the long term.
          </li>
          <li>
            <strong>Healthier Living Spaces:</strong> Improved air quality,
            natural lighting, and biophilic design elements contribute to the
            physical and mental well-being of occupants.
          </li>
          <li>
            <strong>Resource Conservation:</strong> Water recycling and the use
            of sustainable materials reduce the strain on natural resources.
          </li>
          <li>
            <strong>Enhanced Urban Aesthetics:</strong> Green skyscrapers often
            feature iconic designs that enrich the visual appeal of cityscapes.
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
          Notable Examples of Green Skyscrapers
        </h2>
        <p>
          Several green skyscrapers around the world have set benchmarks for
          sustainable architecture:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Bosco Verticale (Vertical Forest), Milan:</strong> This
            residential tower features over 20,000 trees and plants, providing
            natural insulation and improving air quality.
          </li>
          <li>
            <strong>The Edge, Amsterdam:</strong> Known as one of the greenest
            office buildings in the world, The Edge uses solar panels, smart
            lighting, and rainwater harvesting systems.
          </li>
          <li>
            <strong>Shanghai Tower, China:</strong> This skyscraper integrates
            wind turbines, a double-skin façade, and a rainwater recycling
            system to achieve high energy efficiency.
          </li>
          <li>
            <strong>One Central Park, Sydney:</strong> This mixed-use building
            features a massive vertical garden and innovative heliostat
            technology to redirect sunlight.
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
          Challenges and Future Prospects
        </h2>
        <p>
          Despite their advantages, green skyscrapers face several challenges,
          including high upfront costs, complex design requirements, and the
          need for specialized expertise. However, advances in materials
          science, renewable energy technologies, and urban planning are paving
          the way for more widespread adoption.
        </p>
        <p>
          As cities continue to grow and environmental concerns take center
          stage, green skyscrapers will play a crucial role in creating
          sustainable and resilient urban environments. Innovations such as
          carbon-capturing façades, AI-driven energy management, and modular
          construction techniques are expected to further enhance their
          feasibility and impact.
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
          Green skyscrapers are more than just architectural marvels—they are
          essential components of a sustainable future. By integrating
          cutting-edge technologies and eco-friendly practices, these buildings
          demonstrate how urbanization and environmental stewardship can go hand
          in hand. As the world embraces the green revolution, green
          skyscrapers will continue to inspire innovation and set new standards
          for sustainability in architecture.
        </p>
      </section>
    </article>
  );
};

export default GreenSkyscrapersArticle;
