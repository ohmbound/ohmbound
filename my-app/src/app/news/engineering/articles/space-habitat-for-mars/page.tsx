"use client";

import React from "react";

const MarsHabitatArticle = () => {
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
        Space Habitat Design for Mars: Building a Home on the Red Planet
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
          As humanity ventures further into the cosmos, Mars represents the next great frontier. Designing a sustainable and livable habitat on the Red Planet is not just a dream for the distant future—it’s an engineering and scientific challenge being tackled today. With its thin atmosphere, extreme temperatures, and dusty surface, Mars poses unique challenges for habitat design. Yet, with innovative technologies and careful planning, creating a Martian home is within reach.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Challenges of Living on Mars
        </h2>
        <p>
          Designing habitats for Mars requires addressing several environmental challenges:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Atmosphere:</strong> Mars’ atmosphere is 95% carbon dioxide, with almost no oxygen. It is also about 100 times thinner than Earth’s, offering minimal protection from radiation and meteoroids.
          </li>
          <li>
            <strong>Radiation:</strong> Without a strong magnetic field, Mars is bombarded by cosmic rays and solar radiation. Long-term exposure poses serious health risks.
          </li>
          <li>
            <strong>Temperature Extremes:</strong> Surface temperatures on Mars can range from -125°C at night to 20°C during the day, requiring robust thermal insulation and climate control systems.
          </li>
          <li>
            <strong>Dust Storms:</strong> Martian dust storms can last for weeks, blocking sunlight and potentially damaging equipment.
          </li>
          <li>
            <strong>Resource Limitations:</strong> All materials and resources must be transported from Earth or extracted from the Martian surface, making resource efficiency critical.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Key Features of a Mars Habitat
        </h2>
        <p>
          A successful Martian habitat must combine advanced technology with sustainable design principles. Key features include:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Radiation Shielding:</strong> Habitats will likely be built partially underground or covered with Martian regolith to shield against cosmic rays and solar radiation.
          </li>
          <li>
            <strong>Life Support Systems:</strong> Closed-loop systems for oxygen production, carbon dioxide removal, and water recycling are essential. Technologies like electrolysis can split water into oxygen and hydrogen, while algae and plants can aid in air revitalization.
          </li>
          <li>
            <strong>Temperature Regulation:</strong> Advanced insulation materials and climate control systems will maintain a stable internal environment despite the extreme temperature variations outside.
          </li>
          <li>
            <strong>Food Production:</strong> Hydroponics and vertical farming will allow astronauts to grow fresh food, reducing dependence on resupply missions from Earth.
          </li>
          <li>
            <strong>Energy Generation:</strong> Solar panels and small modular nuclear reactors will provide reliable energy for habitat operations.
          </li>
          <li>
            <strong>Modular Design:</strong> Habitats will be modular and expandable, allowing additional units to be added as missions grow.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Construction Techniques on Mars
        </h2>
        <p>
          Transporting building materials from Earth to Mars is expensive and impractical for large-scale construction. Instead, future Martian habitats will likely rely on in-situ resource utilization (ISRU). This approach uses materials found on Mars to build structures and reduce reliance on Earth-based supplies.
        </p>
        <p>Key construction methods include:</p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>3D Printing:</strong> Advanced robotic 3D printers can use Martian regolith to create building blocks or entire structures. This technique minimizes the need for transporting materials.
          </li>
          <li>
            <strong>ISRU-Based Materials:</strong> Martian soil can be processed to create bricks or cement, while ice deposits can be used for construction and water supply.
          </li>
          <li>
            <strong>Inflatable Habitats:</strong> Lightweight inflatable structures can be transported from Earth and covered with regolith for added protection.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Human Factors in Habitat Design
        </h2>
        <p>
          Beyond the technical challenges, habitat design must also consider the psychological and social well-being of the inhabitants:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Living Spaces:</strong> Habitats must include private and communal spaces to balance privacy and social interaction.
          </li>
          <li>
            <strong>Lighting:</strong> Artificial lighting that mimics Earth’s day-night cycle can help regulate circadian rhythms.
          </li>
          <li>
            <strong>Mental Health:</strong> Access to Earth-like features such as greenery, recreational activities, and virtual reality systems can alleviate the psychological effects of isolation and confinement.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          The Future of Mars Habitats
        </h2>
        <p>
          With organizations like NASA, SpaceX, and private companies leading the charge, the dream of establishing a human presence on Mars is closer than ever. Future habitats will likely evolve from small, temporary outposts into permanent, self-sustaining colonies capable of supporting hundreds or even thousands of people.
        </p>
        <p>
          These habitats will serve as a stepping stone for further exploration of the solar system, fostering international collaboration and inspiring generations to come. The journey to Mars is not just about technology—it's about humanity’s resilience and determination to push the boundaries of what’s possible.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Conclusion
        </h2>
        <p>
          Designing a habitat for Mars is one of the most complex engineering challenges humanity has ever faced. By addressing the unique challenges of the Martian environment, leveraging cutting-edge technologies, and prioritizing human well-being, we can turn the Red Planet into a home for future explorers.
        </p>
        <p>
          As we take our first steps toward becoming an interplanetary species, Mars habitats will play a crucial role in shaping our place in the universe.
        </p>
      </section>
    </article>
  );
};

export default MarsHabitatArticle;
