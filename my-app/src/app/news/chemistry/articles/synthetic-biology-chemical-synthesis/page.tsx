"use client";

import React from "react";

const SyntheticBiologyArticle = () => {
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
        Synthetic Biology and Chemical Synthesis: A New Frontier
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
          Synthetic biology is an interdisciplinary field that merges biology, engineering, and chemistry to design and construct new biological parts, devices, and systems. One of its most promising applications lies in chemical synthesis, where engineered biological systems are used to produce complex chemicals that were previously difficult or costly to synthesize. By leveraging synthetic biology, researchers aim to revolutionize industries such as medicine, agriculture, and renewable energy.
        </p>
        <p>
          This article explores how synthetic biology is reshaping chemical synthesis, its applications, and the challenges that lie ahead in this rapidly evolving field.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          What Is Synthetic Biology?
        </h2>
        <p>
          Synthetic biology is a discipline that involves designing and constructing new biological systems or reprogramming existing ones for specific purposes. It builds upon genetic engineering but takes it a step further by using tools like DNA synthesis, CRISPR gene editing, and computational modeling to create entirely new biological pathways or organisms.
        </p>
        <p>
          At its core, synthetic biology treats DNA as a programmable language, where sequences of genes can be "written" and "edited" to produce desired outcomes. By programming microorganisms such as bacteria or yeast, researchers can transform them into living factories capable of producing chemicals, drugs, or biofuels.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Synthetic Biology in Chemical Synthesis
        </h2>
        <p>
          Traditional chemical synthesis often relies on harsh conditions, expensive catalysts, and significant energy inputs. Synthetic biology offers a sustainable and efficient alternative by enabling the use of biological systems to perform complex chemical reactions. This approach is particularly useful for producing compounds that are otherwise difficult to synthesize using conventional methods.
        </p>
        <p>
          Engineered microorganisms such as bacteria, yeast, and algae can be programmed to produce high-value chemicals by introducing novel metabolic pathways. For instance:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Pharmaceuticals:</strong> Synthetic biology is used to produce drugs such as artemisinin, a potent anti-malarial compound, and insulin, a life-saving medication for diabetics.
          </li>
          <li>
            <strong>Biofuels:</strong> Microbes are engineered to convert plant biomass into bioethanol, biodiesel, and other renewable fuels.
          </li>
          <li>
            <strong>Specialty Chemicals:</strong> Synthetic pathways enable the production of flavors, fragrances, and industrial chemicals with precision and efficiency.
          </li>
          <li>
            <strong>Polymers and Materials:</strong> Synthetic biology can create biopolymers like spider silk and other high-performance materials with applications in textiles, construction, and medicine.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Advantages of Synthetic Biology in Chemical Synthesis
        </h2>
        <p>
          Synthetic biology offers several advantages over traditional chemical synthesis methods:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Sustainability:</strong> Biological systems operate under mild conditions, reducing energy consumption and reliance on toxic chemicals.
          </li>
          <li>
            <strong>Precision:</strong> Synthetic biology enables highly selective reactions, minimizing byproducts and waste.
          </li>
          <li>
            <strong>Scalability:</strong> Engineered microbes can be cultured on a large scale, making the production of valuable chemicals more economical.
          </li>
          <li>
            <strong>Versatility:</strong> By modifying genetic pathways, a wide variety of products can be synthesized from simple feedstocks.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Challenges and Future Directions
        </h2>
        <p>
          Despite its potential, synthetic biology in chemical synthesis faces several challenges:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Complexity:</strong> Biological systems are inherently complex, and engineering them for specific purposes requires a deep understanding of metabolic pathways.
          </li>
          <li>
            <strong>Scalability:</strong> While synthetic biology works well in the lab, scaling up processes to industrial levels can be difficult and costly.
          </li>
          <li>
            <strong>Regulatory Hurdles:</strong> The use of genetically modified organisms (GMOs) raises ethical and regulatory concerns, particularly in food and pharmaceutical applications.
          </li>
          <li>
            <strong>Economic Viability:</strong> Competing with established chemical synthesis methods requires synthetic biology to be both cost-effective and reliable.
          </li>
        </ul>
        <p>
          To overcome these challenges, researchers are developing advanced tools such as machine learning algorithms, high-throughput screening techniques, and synthetic gene circuits. These innovations aim to streamline the design-build-test cycle, making synthetic biology more efficient and accessible.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Conclusion
        </h2>
        <p>
          Synthetic biology and chemical synthesis are transforming industries by providing sustainable, efficient, and innovative solutions to some of the most pressing challenges of our time. From producing life-saving drugs to developing renewable fuels, synthetic biology has the potential to revolutionize how we create and utilize chemicals.
        </p>
        <p>
          As technology advances, the integration of synthetic biology with other disciplines such as artificial intelligence, nanotechnology, and material science will further expand its capabilities. The future of synthetic biology promises a world where biology and engineering converge to create a more sustainable and prosperous future.
        </p>
      </section>
    </article>
  );
};

export default SyntheticBiologyArticle;
