"use client";

import React from "react";

const CarbonNanotubesArticle = () => {
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
        Carbon Nanotubes in Construction: Revolutionizing the Built Environment
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
          The construction industry, long reliant on conventional materials like
          steel, concrete, and wood, is now exploring advanced nanotechnology to
          revolutionize infrastructure and building designs. Among these
          cutting-edge materials, carbon nanotubes (CNTs) have emerged as a
          promising innovation due to their unparalleled strength, flexibility,
          and conductivity. These microscopic cylindrical structures are poised
          to redefine what is possible in construction, offering enhanced
          durability, energy efficiency, and sustainability.
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
          What Are Carbon Nanotubes?
        </h2>
        <p>
          Carbon nanotubes are nanoscale cylindrical structures composed of
          carbon atoms arranged in a hexagonal lattice. These tubes can be
          single-walled (SWCNTs) or multi-walled (MWCNTs), with diameters
          ranging from a few nanometers to tens of nanometers. Despite their
          tiny size, CNTs are incredibly strong—100 times stronger than steel
          at one-sixth the weight. Additionally, they possess excellent thermal
          and electrical conductivity, making them versatile for various
          applications.
        </p>
        <p>
          Discovered in the early 1990s, CNTs have since been studied for use in
          fields ranging from electronics to medicine. In construction, their
          unique properties open the door to innovations that could address
          long-standing challenges like structural degradation and material
          inefficiency.
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
          Applications of Carbon Nanotubes in Construction
        </h2>
        <p>
          The integration of carbon nanotubes into construction materials has
          transformative potential. Here are some of the key applications:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Reinforced Concrete:</strong> CNTs can be mixed into
            concrete to enhance its compressive strength, reduce cracking, and
            improve its durability. This not only extends the lifespan of
            structures but also reduces maintenance costs.
          </li>
          <li>
            <strong>Structural Steel Enhancement:</strong> By embedding CNTs
            into steel, engineers can create lighter yet stronger materials,
            ideal for skyscrapers, bridges, and other large-scale projects.
          </li>
          <li>
            <strong>Thermal Insulation:</strong> CNT-based composites can be
            used to improve the thermal insulation properties of building
            materials, enhancing energy efficiency in residential and commercial
            buildings.
          </li>
          <li>
            <strong>Electrically Conductive Materials:</strong> Due to their
            excellent conductivity, CNTs can be integrated into smart building
            materials that monitor structural health or power embedded sensors.
          </li>
          <li>
            <strong>Anti-Corrosion Coatings:</strong> CNTs can be added to
            protective coatings, offering improved resistance to corrosion and
            extending the lifespan of metal components.
          </li>
          <li>
            <strong>Fire-Resistant Materials:</strong> When incorporated into
            polymers or composites, CNTs can improve the fire resistance of
            construction materials, enhancing building safety.
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
          Advantages of Carbon Nanotubes in Construction
        </h2>
        <p>
          The unique properties of CNTs provide numerous advantages for the
          construction industry:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Unmatched Strength:</strong> CNTs have one of the highest
            tensile strengths of any material, making them ideal for reinforcing
            structural components.
          </li>
          <li>
            <strong>Lightweight:</strong> CNTs are significantly lighter than
            traditional materials like steel, enabling the construction of
            lighter yet equally strong structures.
          </li>
          <li>
            <strong>Sustainability:</strong> CNTs can reduce material waste by
            improving the performance of construction materials, contributing to
            more sustainable building practices.
          </li>
          <li>
            <strong>Enhanced Longevity:</strong> By increasing durability and
            resistance to environmental factors, CNT-based materials can extend
            the lifespan of infrastructure.
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
          Despite their promise, the use of CNTs in construction is not without
          challenges:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>High Cost:</strong> The production of CNTs is still
            expensive, limiting their widespread adoption in cost-sensitive
            industries like construction.
          </li>
          <li>
            <strong>Scalability:</strong> Manufacturing CNT-based composites at
            a scale suitable for large construction projects remains a technical
            hurdle.
          </li>
          <li>
            <strong>Health and Safety Concerns:</strong> The potential
            toxicity of CNTs to humans and the environment needs to be
            thoroughly studied and mitigated.
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
          Future Outlook
        </h2>
        <p>
          As nanotechnology advances, the integration of carbon nanotubes into
          construction materials is expected to become more feasible and
          cost-effective. Research into scalable production methods, such as
          chemical vapor deposition (CVD) and plasma-enhanced processes, is
          paving the way for wider adoption. Additionally, the development of
          regulations and safety protocols will be essential to address health
          and environmental concerns.
        </p>
        <p>
          In the coming decades, CNT-enhanced materials could revolutionize the
          construction industry, enabling the creation of smarter, stronger, and
          more sustainable buildings and infrastructure.
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
          Carbon nanotubes represent a groundbreaking innovation in the field of
          construction. With their exceptional strength, durability, and
          versatility, they have the potential to address many of the
          challenges faced by traditional building materials. While hurdles
          remain, ongoing research and technological advancements are bringing
          CNT-based construction materials closer to reality. As we strive for
          more sustainable and resilient infrastructure, carbon nanotubes could
          play a pivotal role in shaping the future of the built environment.
        </p>
      </section>
    </article>
  );
};

export default CarbonNanotubesArticle;
