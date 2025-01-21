"use client";

import React from "react";

const EngineeringToolsPage = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px", textAlign: "center" }}>
        Engineering Tools
      </h1>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.6", textAlign: "center" }}>
        Welcome to the Engineering Tools page! Here, you'll find an assortment
        of tools and resources designed to make your engineering work easier
        and more efficient. Explore calculators, simulators, and much more.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {/* Tool 1 */}
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#b0c4de", // Updated background color
          }}
        >
          <h2>Calculators</h2>
          <p>
            Access a variety of engineering calculators to solve problems with
            ease.
          </p>
          <a
            href="/engineering-tools/calculators"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "white",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Explore Calculators
          </a>
        </div>

        {/* Tool 3 */}
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#b0c4de", // Updated background color
          }}
        >
          <h2>Resources</h2>
          <p>
            Browse our collection of engineering articles, guides, and tools.
          </p>
          <a
            href="/engineering-tools/resources"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "white",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            View Resources
          </a>
        </div>
      </div>
    </div>
  );
};

export default EngineeringToolsPage;
