"use client";

import React from "react";
import Link from "next/link";

const NewsPage = () => {
  const categories = [
    {
      name: "Chemistry",
      description: "Explore the latest breakthroughs and updates in the world of chemistry.",
      link: "/news/chemistry",
    },
    {
      name: "Engineering",
      description: "Dive into engineering news and advancements shaping our future.",
      link: "/news/engineering",
    },
    {
      name: "Emerging Technologies",
      description: "Discover cutting-edge technologies redefining industries.",
      link: "/news/emerging-technologies",
    },
    {
      name: "Materials Science",
      description: "Learn about innovations in materials and their applications.",
      link: "/news/materials-science",
    },
    {
      name: "Physics",
      description: "Stay updated on groundbreaking research and discoveries in physics.",
      link: "/news/physics",
    },
    {
      name: "Startups",
      description: "Get inspired by startup stories and technological ventures.",
      link: "/news/startups",
    },
  ];

  return (
    <section
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        marginTop: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "20px",
          color: "#000",
        }}
      >
        News Categories
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "15px" }}>
              <h2 style={{ fontSize: "1.5rem", color: "#0070f3", marginBottom: "10px" }}>
                {category.name}
              </h2>
              <p style={{ fontSize: "1rem", color: "#555", marginBottom: "15px" }}>
                {category.description}
              </p>
              <Link
                href={category.link}
                style={{
                  color: "#0070f3",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Explore →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsPage;
