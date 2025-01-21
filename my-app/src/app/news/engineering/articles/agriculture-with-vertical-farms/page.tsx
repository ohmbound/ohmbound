"use client";

import React from "react";

const VerticalFarmingArticle = () => {
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
        Revolutionizing Agriculture with Vertical Farms
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
          As the global population continues to grow, so does the demand for
          food. Traditional agricultural methods, however, face numerous
          challenges such as limited arable land, water scarcity, and climate
          change. Enter vertical farming—a groundbreaking approach that
          promises to revolutionize agriculture by growing crops in vertically
          stacked layers, often in controlled indoor environments. Vertical
          farming offers a sustainable, space-efficient, and innovative solution
          to meet the world's increasing food needs.
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
          What Is Vertical Farming?
        </h2>
        <p>
          Vertical farming is a method of growing crops in vertically stacked
          layers, often integrating technologies such as hydroponics,
          aeroponics, and aquaponics. Unlike traditional agriculture, which
          relies on sprawling fields and favorable weather conditions, vertical
          farming allows crops to be grown indoors under carefully controlled
          conditions. These farms are typically located in urban areas, bringing
          food production closer to consumers and reducing transportation
          emissions.
        </p>
        <p>
          Vertical farms utilize artificial lighting, climate control systems,
          and automated nutrient delivery to optimize plant growth. This method
          enables year-round cultivation, high yields per square foot, and
          minimal resource wastage, making it an attractive solution for
          addressing food security challenges.
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
          Benefits of Vertical Farming
        </h2>
        <p>
          Vertical farming offers a range of benefits that make it a promising
          alternative to traditional agriculture:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Space Efficiency:</strong> By growing crops in stacked
            layers, vertical farms maximize production in limited spaces, making
            them ideal for urban environments.
          </li>
          <li>
            <strong>Water Conservation:</strong> Advanced irrigation systems,
            such as hydroponics, use up to 95% less water compared to
            traditional farming.
          </li>
          <li>
            <strong>Year-Round Production:</strong> Controlled environments
            eliminate the reliance on seasonal weather, ensuring consistent crop
            yields throughout the year.
          </li>
          <li>
            <strong>Pesticide-Free Crops:</strong> Indoor farming reduces the
            need for harmful pesticides and herbicides, resulting in healthier
            and more sustainable produce.
          </li>
          <li>
            <strong>Reduced Food Miles:</strong> Locating farms closer to urban
            centers minimizes transportation costs and emissions.
          </li>
          <li>
            <strong>Energy Efficiency:</strong> Emerging technologies, such as
            LED lighting and renewable energy integration, make vertical farming
            more sustainable.
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
          Technologies Driving Vertical Farming
        </h2>
        <p>
          Vertical farming relies on cutting-edge technologies to optimize
          growing conditions and maximize yields:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Hydroponics:</strong> This soil-free method uses nutrient-rich
            water to nourish plants directly, reducing water usage and
            contamination risks.
          </li>
          <li>
            <strong>Aeroponics:</strong> Plants are suspended in air, with roots
            misted with a nutrient solution, further reducing water and space
            requirements.
          </li>
          <li>
            <strong>LED Lighting:</strong> Energy-efficient LEDs provide
            tailored light spectra to optimize photosynthesis and growth.
          </li>
          <li>
            <strong>Automation and AI:</strong> Sensors and machine learning
            systems monitor and adjust variables like temperature, humidity, and
            nutrient levels for optimal growth conditions.
          </li>
          <li>
            <strong>Renewable Energy Integration:</strong> Solar panels and
            wind turbines can power vertical farms, making them more
            self-sufficient and sustainable.
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
          While vertical farming offers numerous advantages, it is not without
          challenges:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>High Initial Costs:</strong> Setting up vertical farms
            requires significant investment in infrastructure, technology, and
            energy systems.
          </li>
          <li>
            <strong>Energy Consumption:</strong> Artificial lighting and climate
            control systems can lead to high energy usage, particularly in areas
            without access to renewable energy.
          </li>
          <li>
            <strong>Crop Limitations:</strong> Vertical farms are better suited
            for leafy greens, herbs, and small fruits, while larger crops like
            grains and tubers remain challenging to grow indoors.
          </li>
          <li>
            <strong>Skilled Workforce:</strong> Operating vertical farms requires
            specialized knowledge in technology and agronomy, which can limit
            scalability.
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
          The Future of Vertical Farming
        </h2>
        <p>
          The future of vertical farming is bright, with advancements in
          automation, renewable energy, and plant genetics set to drive the
          industry forward. Governments and private investors are increasingly
          recognizing the potential of vertical farming to address food
          security challenges while promoting sustainability.
        </p>
        <p>
          Innovations such as carbon-neutral farming systems, enhanced
          crop diversity, and integration with smart cities could further
          transform vertical farming into a mainstream agricultural practice.
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
          Vertical farming represents a paradigm shift in agriculture,
          addressing some of the most pressing challenges of traditional farming
          methods. With its potential to conserve resources, reduce
          environmental impact, and ensure consistent food production, vertical
          farming is poised to play a crucial role in feeding the growing global
          population. By embracing this innovative approach, we can build a
          more sustainable and resilient future for agriculture.
        </p>
      </section>
    </article>
  );
};

export default VerticalFarmingArticle;
