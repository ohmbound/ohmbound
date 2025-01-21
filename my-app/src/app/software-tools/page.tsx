"use client";

import React from "react";

const UpcomingSoftwarePage = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Upcoming Software: OhmBound Suite</h1>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        At Ohmbound, we are thrilled to announce the development of our upcoming flagship software,
        <strong>OhmBound Suite</strong>. This innovative tool is designed to empower engineers,
        students, and professionals alike by offering a comprehensive suite of engineering and
        physics tools in one seamless platform.
      </p>

      <h2 style={{ marginBottom: "15px" }}>Key Features</h2>
      <ul style={{ listStyleType: "disc", marginLeft: "20px", fontSize: "1rem", lineHeight: "1.8" }}>
        <li>
          <strong>Equation Solver:</strong> Solve complex engineering and physics equations
          effortlessly, with step-by-step solutions provided for greater understanding.
        </li>
        <li>
          <strong>Interactive Simulations:</strong> Visualize and interact with simulations of
          circuits, fluid dynamics, thermodynamics, and more.
        </li>
        <li>
          <strong>Material Database:</strong> Access an extensive library of material properties,
          including tensile strength, thermal conductivity, and elastic modulus.
        </li>
        <li>
          <strong>Design Optimization:</strong> Use AI-powered algorithms to optimize your designs
          for efficiency, cost, and performance.
        </li>
        <li>
          <strong>CAD Integration:</strong> Seamlessly integrate with popular CAD tools to enhance
          your design workflow.
        </li>
        <li>
          <strong>Project Management:</strong> Collaborate with teams, track progress, and manage
          project timelines directly within the suite.
        </li>
      </ul>

      <h2 style={{ marginBottom: "15px", marginTop: "30px" }}>Why Choose OhmBound Suite?</h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        OhmBound Suite is built with the needs of engineers, students, and educators in mind. Our
        goal is to simplify complex engineering tasks, save time, and enhance learning and
        productivity. The software offers a user-friendly interface, high-performance tools, and
        reliable resources, all while keeping accessibility at its core.
      </p>

      <h2 style={{ marginBottom: "15px", marginTop: "30px" }}>Target Audience</h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        OhmBound Suite is designed for:
      </p>
      <ul style={{ listStyleType: "disc", marginLeft: "20px", fontSize: "1rem", lineHeight: "1.8" }}>
        <li>Engineering students who need reliable tools to enhance their academic projects.</li>
        <li>Professional engineers looking for advanced software for design and analysis.</li>
        <li>Educators aiming to create interactive learning experiences for their students.</li>
      </ul>

      <h2 style={{ marginBottom: "15px", marginTop: "30px" }}>Development Timeline</h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        The development of OhmBound Suite is currently underway, with the following milestones:
      </p>
      <ul style={{ listStyleType: "disc", marginLeft: "20px", fontSize: "1rem", lineHeight: "1.8" }}>
        <li><strong>Phase 1:</strong> Core feature development (January 2025 - April 2025).</li>
        <li><strong>Phase 2:</strong> Beta testing and user feedback (May 2025 - July 2025).</li>
        <li><strong>Phase 3:</strong> Final release and launch (August 2025).</li>
      </ul>

      <h2 style={{ marginBottom: "15px", marginTop: "30px" }}>Join the Beta Program</h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Be among the first to experience OhmBound Suite! Sign up for our beta program and provide
        valuable feedback to shape the future of engineering software. Participants will receive
        exclusive perks and early access to new features.
      </p>

      <h2 style={{ marginBottom: "15px", marginTop: "30px" }}>Stay Updated</h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Follow us on our social media channels and subscribe to our newsletter to receive the
        latest updates, sneak peeks, and announcements about OhmBound Suite.
      </p>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("Thank you for your interest! Sign-up form coming soon.")}
        >
          Sign Up for Updates
        </button>
      </div>
    </div>
  );
};

export default UpcomingSoftwarePage;