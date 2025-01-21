"use client";

import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState(""); // State for email input
  const [message, setMessage] = useState(""); // Feedback message for the user
  const [isSuccess, setIsSuccess] = useState(false); // To handle message styling

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email format
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      setIsSuccess(false);
      return;
    }

    try {
      // Simulate a subscription process (replace with your API logic if needed)
      setTimeout(() => {
        setEmail("");
        setMessage("Thanks for subscribing, you will shortly receive an email.");
        setIsSuccess(true);
      }, 500); // Simulate a delay for better UX
    } catch (error) {
      console.error(error);
      setMessage("There was an error. Please try again.");
      setIsSuccess(false);
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        padding: "40px 20px",
        textAlign: "left",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Section */}
        <div style={{ flex: "1 1 300px", marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Logo or Small Picture */}
            <img
              src="/ohmbound.jpg" // Replace with your image path
              alt="OhmBound Logo"
              style={{ width: "40px", height: "40px", borderRadius: "10%" }}
            />
            <h3 style={{ margin: "0" }}>OhmBound</h3>
          </div>
          <p style={{ fontSize: "0.9rem", lineHeight: "1.5", marginTop: "10px" }}>
            Engineering news, tips, and tools at your fingertips.
          </p>
        </div>

        {/* Center Sections */}
        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h4 style={{ marginBottom: "10px" }}>Products</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>
              <a
                href="https://ohmbound.com"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}>
                Web
              </a>
            </li>
            <li>
              <a 
                href="https://ohmbound.com"
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}>
                App
              </a>
            </li>
            <li>
              <a href="/software-tools" style={linkStyle}>
                Software
              </a>
            </li>
            <li>
              <a href="/ecommerce" style={linkStyle}>
                Feedback
              </a>
            </li>
          </ul>
        </div>
        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h4 style={{ marginBottom: "10px" }}>Resources</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>
              <a href="/development" style={linkStyle}>
                Equation Library
              </a>
            </li>
            <li>
              <a href="/design" style={linkStyle}>
                Featured Projects
              </a>
            </li>
            <li>
              <a href="/glossary" style={linkStyle}>
                Engineering Glossary
              </a>
            </li>
            <li>
              <a
                href="https://pubs.aip.org/physicstoday/?gad_source=1&gclid=Cj0KCQiAs5i8BhDmARIsAGE4xHytymFKuSer7VIzL18kOzdwQdKYDOMLr5e7_kn83TpjElSgU5DP-zkaAj1MEALw_wcB/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}>
                Recommended Reads
              </a>
            </li>
          </ul>
        </div>
        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h4 style={{ marginBottom: "10px" }}>Company</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>
              <a href="/terms" style={linkStyle}>
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" style={linkStyle}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div style={{ flex: "1 1 300px", marginBottom: "20px" }}>
          <h4 style={{ marginBottom: "10px" }}>Get in Touch</h4>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <a
              href="https://ohmbound.com"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
            >
              🌐
            </a>
            <a
              href="https://github.com/ohmbound"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
            >
              📘
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@eluthera.net"
              target="_blank"
              style={iconStyle}
            >
              🔗
            </a>
          </div>
          {/* Newsletter Subscription Form */}
          <form
            onSubmit={handleSubscribe}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                color: "#333",
              }}
              required
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#6a5acd",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
          {/* Feedback Message */}
          {message && (
            <p
              style={{
                marginTop: "10px",
                color: isSuccess ? "green" : "red",
                fontSize: "0.9rem",
              }}
            >
              {message}
            </p>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          borderTop: "1px solid #333333",
          paddingTop: "20px",
          textAlign: "center",
          fontSize: "0.9rem",
        }}
      >
        2024-2025 Ohmbound. Physics Knowledge, Sharing Innovation.
      </div>
    </footer>
  );
};

const linkStyle = {
  color: "#6a5acd",
  textDecoration: "none",
};

const iconStyle = {
  backgroundColor: "#333333",
  color: "white",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
};

export default Footer;
