"use client";

import React from "react";

const CRISPRChemistryArticle = () => {
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
        CRISPR Chemistry: Revolutionizing Genetic Engineering
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
          CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) is a
          groundbreaking genetic engineering technology that has transformed the
          fields of biology and medicine. At its core, CRISPR relies on precise
          molecular interactions to edit DNA with unparalleled accuracy. By
          understanding the chemistry behind CRISPR, scientists have unlocked a
          powerful tool for modifying genomes, advancing gene therapy, and
          exploring the fundamental mechanisms of life.
        </p>
        <p>
          This article delves into the chemistry behind CRISPR, its working
          principles, and its revolutionary applications in science and
          healthcare.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          The Chemistry of CRISPR
        </h2>
        <p>
          CRISPR systems are based on natural mechanisms that bacteria use to
          defend themselves against viruses. At the heart of CRISPR chemistry is
          the Cas9 protein, an endonuclease enzyme that cuts DNA, guided by a
          synthetic RNA molecule known as a guide RNA (gRNA). The specificity and
          efficiency of CRISPR rely on several key chemical interactions:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>DNA-RNA Hybridization:</strong> The guide RNA is designed to
            be complementary to a specific DNA sequence. This base-pairing
            ensures that Cas9 is directed to the correct target site.
          </li>
          <li>
            <strong>Cas9 Conformational Change:</strong> When the gRNA binds to
            Cas9, it induces a conformational change in the protein, activating
            its nuclease domains. This activation enables precise cleavage of
            the DNA.
          </li>
          <li>
            <strong>Double-Strand Break (DSB):</strong> Cas9 introduces a
            double-strand break in the target DNA, a critical step for genome
            editing. Cellular repair mechanisms then take over, allowing for
            gene modifications.
          </li>
          <li>
            <strong>Protospacer Adjacent Motif (PAM):</strong> Cas9 recognizes a
            short DNA sequence adjacent to the target site, known as the PAM.
            This sequence ensures that Cas9 only binds to the intended region of
            the genome.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          How CRISPR Works
        </h2>
        <p>
          CRISPR operates through a series of highly coordinated molecular steps:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Guide RNA Design:</strong> Scientists design a gRNA that is
            complementary to the target DNA sequence. This gRNA serves as the
            GPS for Cas9, guiding it to the correct location in the genome.
          </li>
          <li>
            <strong>Cas9 Activation:</strong> The gRNA binds to Cas9, forming a
            ribonucleoprotein complex. This complex scans the DNA for the
            complementary sequence and PAM site.
          </li>
          <li>
            <strong>DNA Cleavage:</strong> Upon binding to the target site, Cas9
            cuts both strands of the DNA, creating a double-strand break.
          </li>
          <li>
            <strong>Repair Mechanisms:</strong> The cell’s repair machinery fixes
            the break via one of two pathways: non-homologous end joining (NHEJ),
            which can introduce mutations, or homology-directed repair (HDR),
            which allows for precise edits using a DNA template.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Applications of CRISPR Chemistry
        </h2>
        <p>
          The versatility and precision of CRISPR have led to its widespread
          adoption in various fields:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Gene Therapy:</strong> CRISPR is being used to correct
            genetic mutations responsible for diseases like cystic fibrosis, sickle
            cell anemia, and Duchenne muscular dystrophy.
          </li>
          <li>
            <strong>Agriculture:</strong> Scientists are using CRISPR to develop
            crops with improved traits, such as drought resistance, enhanced
            nutritional content, and pest resistance.
          </li>
          <li>
            <strong>Drug Discovery:</strong> By enabling precise gene edits,
            CRISPR allows researchers to study disease pathways and develop
            targeted therapies.
          </li>
          <li>
            <strong>Biotechnology:</strong> CRISPR is being used to engineer
            microbes for biofuel production, bioplastics, and environmental
            remediation.
          </li>
          <li>
            <strong>Functional Genomics:</strong> CRISPR enables high-throughput
            screening of genes, providing insights into their functions and
            interactions.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Challenges and Ethical Considerations
        </h2>
        <p>
          Despite its transformative potential, CRISPR raises several challenges
          and ethical questions:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Off-Target Effects:</strong> CRISPR can occasionally edit
            unintended regions of the genome, leading to off-target effects.
            Improving the specificity of Cas9 and developing alternative
            nucleases, such as Cas12 and Cas13, are active areas of research.
          </li>
          <li>
            <strong>Delivery Methods:</strong> Ensuring efficient and safe
            delivery of CRISPR components to target cells remains a challenge.
            Techniques such as viral vectors and lipid nanoparticles are being
            explored.
          </li>
          <li>
            <strong>Ethical Concerns:</strong> The use of CRISPR for germline
            editing—altering DNA in embryos that can be passed on to future
            generations—raises significant ethical questions. The potential for
            misuse in creating "designer babies" has sparked global debates
            about the limits of genetic engineering.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Conclusion
        </h2>
        <p>
          CRISPR chemistry represents a monumental leap forward in our ability
          to manipulate DNA with precision and efficiency. Its applications in
          medicine, agriculture, and biotechnology are already transforming the
          world, and ongoing research promises even greater breakthroughs.
          However, as with any powerful technology, responsible use and ethical
          oversight are essential to ensure its benefits are maximized while
          minimizing potential risks.
        </p>
      </section>
    </article>
  );
};

export default CRISPRChemistryArticle
