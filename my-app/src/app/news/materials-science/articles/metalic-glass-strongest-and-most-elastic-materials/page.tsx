"use client";

import React from "react";

const MetallicGlassArticle = () => {
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
        Metallic Glass: The Strongest and Most Elastic Materials
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
          Metallic glass, also known as amorphous metal, is a class of materials
          that combines the strength of metals with the flexibility of glass.
          These materials are characterized by their disordered atomic
          structure, which sets them apart from traditional crystalline metals.
          The unique structure of metallic glass gives it extraordinary
          mechanical, magnetic, and corrosion-resistant properties, making it a
          revolutionary material in various industries, from aerospace to
          biomedical engineering.
        </p>
        <p>
          This article explores the science, applications, and future potential
          of metallic glass, a material that holds the promise of transforming
          modern engineering and design.
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
          What Is Metallic Glass?
        </h2>
        <p>
          Metallic glass is a solid material with a disordered atomic
          arrangement, unlike the orderly lattice structure found in
          conventional metals. This amorphous structure is achieved by cooling
          molten metal alloys so rapidly that their atoms do not have time to
          arrange themselves into a crystalline pattern. The result is a
          material with a glass-like, non-crystalline structure.
        </p>
        <p>
          The lack of grain boundaries, which are present in traditional
          metals, eliminates many weak points, making metallic glass
          exceptionally strong and resistant to deformation. Commonly used
          metallic glass alloys include zirconium, titanium, copper, and
          magnesium, each tailored for specific applications.
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
          Properties of Metallic Glass
        </h2>
        <p>
          Metallic glass exhibits a range of remarkable properties that make it
          an attractive choice for advanced engineering applications:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>High Strength:</strong> Metallic glass is significantly
            stronger than conventional metals due to its lack of grain
            boundaries and defects.
          </li>
          <li>
            <strong>Elasticity:</strong> These materials can endure greater
            elastic deformation without permanent damage, making them highly
            resilient under stress.
          </li>
          <li>
            <strong>Corrosion Resistance:</strong> Metallic glass is highly
            resistant to oxidation and chemical corrosion, extending its
            lifespan in harsh environments.
          </li>
          <li>
            <strong>Magnetic Properties:</strong> Some metallic glass alloys
            exhibit excellent soft magnetic properties, making them ideal for
            use in transformers and magnetic sensors.
          </li>
          <li>
            <strong>Wear Resistance:</strong> The smooth, defect-free surface
            of metallic glass offers exceptional resistance to wear and
            abrasion.
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
          Applications of Metallic Glass
        </h2>
        <p>
          The unique properties of metallic glass have enabled its use in a
          variety of cutting-edge applications:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Structural Components:</strong> Metallic glass is used in
            aerospace and automotive industries to manufacture lightweight yet
            strong components that improve fuel efficiency and performance.
          </li>
          <li>
            <strong>Medical Devices:</strong> Biocompatible metallic glass
            alloys are used to create surgical instruments, implants, and
            medical tools with high precision and durability.
          </li>
          <li>
            <strong>Consumer Electronics:</strong> The high wear resistance and
            aesthetic appeal of metallic glass make it an ideal material for
            smartphone cases, watches, and other electronic devices.
          </li>
          <li>
            <strong>Magnetic Applications:</strong> Metallic glass is used in
            magnetic cores for transformers and inductors, offering high
            efficiency and reduced energy losses.
          </li>
          <li>
            <strong>Sports Equipment:</strong> Its lightweight and resilient
            properties have made metallic glass popular in the design of sports
            equipment like golf clubs and tennis rackets.
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
          Advantages of Metallic Glass
        </h2>
        <p>
          Metallic glass offers several key advantages over conventional
          materials:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Improved Performance:</strong> Its superior mechanical and
            physical properties result in better performance and durability in
            various applications.
          </li>
          <li>
            <strong>Design Flexibility:</strong> The amorphous structure of
            metallic glass allows for more intricate designs and shapes,
            enabling innovation in product development.
          </li>
          <li>
            <strong>Environmental Benefits:</strong> Metallic glass can be
            recycled, and its durability reduces waste by extending the
            lifespan of products.
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
          Challenges and Future Directions
        </h2>
        <p>
          While metallic glass has numerous advantages, challenges remain in its
          widespread adoption. The production process requires rapid cooling
          rates, limiting the size of components that can be manufactured. High
          production costs also pose a barrier to large-scale applications.
        </p>
        <p>
          Researchers are exploring new alloy compositions and advanced
          manufacturing techniques, such as additive manufacturing, to overcome
          these limitations. As technology advances, metallic glass is expected
          to play an increasingly important role in industries ranging from
          energy to healthcare.
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
          Conclusion
        </h2>
        <p>
          Metallic glass represents a groundbreaking material that combines the
          best properties of metals and glass. With its exceptional strength,
          elasticity, and versatility, it has the potential to revolutionize
          numerous industries. As research and innovation continue, metallic
          glass will likely become a cornerstone of modern engineering and
          design, paving the way for stronger, lighter, and more durable
          products.
        </p>
      </section>
    </article>
  );
};

export default MetallicGlassArticle;
