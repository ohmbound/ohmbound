"use client";

import React from "react";

const FloatingCitiesArticle = () => {
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
        The Rise of Floating Cities: A Vision for Sustainable Living
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
          As urban populations grow and climate change accelerates, traditional land-based cities are struggling to meet the challenges of sustainability, overcrowding, and rising sea levels. Enter floating cities—a futuristic solution that promises to redefine how and where we live. These engineered marvels, designed to float on water, could provide a sustainable alternative to conventional urban environments while mitigating the impact of natural disasters and rising oceans.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          What Are Floating Cities?
        </h2>
        <p>
          Floating cities are urban developments constructed on platforms or vessels that float on water bodies such as oceans, lakes, or rivers. Unlike land-based cities, these self-contained structures are designed to be modular, adaptable, and resilient to environmental challenges. They can range from small, community-sized clusters to large-scale, interconnected metropolises.
        </p>
        <p>
          The concept of floating cities isn’t entirely new. From the floating villages of Cambodia’s Tonlé Sap Lake to the houseboats of Amsterdam, humans have long experimented with living on water. However, modern floating city designs take this idea to a new level, incorporating cutting-edge technology, renewable energy, and sustainable living practices.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Why Floating Cities?
        </h2>
        <p>
          Several factors are driving the development of floating cities:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Climate Change:</strong> Rising sea levels threaten to submerge coastal cities and displace millions of people. Floating cities offer a proactive solution by creating habitable spaces above the water.
          </li>
          <li>
            <strong>Urban Overcrowding:</strong> As global populations continue to urbanize, land-based cities face increasing pressure on infrastructure and resources. Floating cities can alleviate this burden by expanding urban areas onto water bodies.
          </li>
          <li>
            <strong>Sustainability:</strong> Floating cities are designed to be eco-friendly, utilizing renewable energy, closed-loop waste systems, and sustainable construction materials to minimize their environmental impact.
          </li>
          <li>
            <strong>Disaster Resilience:</strong> Floating structures are inherently resistant to flooding and earthquakes, making them ideal for disaster-prone regions.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Key Features of Floating Cities
        </h2>
        <p>
          Floating cities are designed with sustainability and resilience at their core. Key features include:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Modular Design:</strong> Floating cities are built as interconnected modules, allowing for easy expansion and adaptation to different needs.
          </li>
          <li>
            <strong>Renewable Energy:</strong> Solar panels, wind turbines, and wave energy converters provide clean, renewable energy to power the city.
          </li>
          <li>
            <strong>Water Management:</strong> Advanced desalination and water recycling systems ensure a steady supply of fresh water.
          </li>
          <li>
            <strong>Vertical Farming:</strong> Space-efficient agriculture techniques provide fresh produce, reducing the need for imports.
          </li>
          <li>
            <strong>Closed-Loop Systems:</strong> Waste is converted into energy or recycled, creating a self-sustaining ecosystem.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Examples of Floating City Projects
        </h2>
        <p>
          Several ambitious projects are already underway to bring the concept of floating cities to life:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Oceanix City:</strong> Supported by the United Nations, Oceanix City is a prototype floating city designed to house up to 10,000 residents. It incorporates sustainable materials, renewable energy, and modular expansion.
          </li>
          <li>
            <strong>Seasteading Institute:</strong> This organization is exploring floating communities as platforms for political and social experimentation, offering a new approach to governance and living.
          </li>
          <li>
            <strong>Maldives Floating City:</strong> This project aims to create a sustainable, climate-resilient urban area in the Maldives, a nation particularly vulnerable to rising sea levels.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Challenges and Criticisms
        </h2>
        <p>
          While floating cities offer immense potential, they also face several challenges:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>High Costs:</strong> Building and maintaining floating cities require significant upfront investment, which could limit accessibility.
          </li>
          <li>
            <strong>Environmental Concerns:</strong> Large-scale floating structures could disrupt marine ecosystems if not carefully managed.
          </li>
          <li>
            <strong>Social Acceptance:</strong> Adapting to life on water may not appeal to everyone, and integrating these cities into existing political and economic frameworks could be challenging.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          The Future of Floating Cities
        </h2>
        <p>
          Despite these challenges, the rise of floating cities represents an exciting vision for the future of urban living. As technology advances and the urgency of climate change grows, these innovative solutions could become a vital part of our global response. Floating cities offer a unique opportunity to reimagine urban life, prioritizing sustainability, resilience, and adaptability.
        </p>
        <p>
          By addressing environmental challenges and fostering collaboration between governments, scientists, and private organizations, floating cities could pave the way for a new era of sustainable development.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Conclusion
        </h2>
        <p>
          The rise of floating cities is not just a solution to today’s challenges—it’s a bold step toward a sustainable future. By leveraging cutting-edge technology and innovative design, floating cities have the potential to redefine how we live, work, and interact with our environment.
        </p>
        <p>
          As we look to the future, these aquatic marvels could play a critical role in creating a more resilient and sustainable world.
        </p>
      </section>
    </article>
  );
};

export default FloatingCitiesArticle;
