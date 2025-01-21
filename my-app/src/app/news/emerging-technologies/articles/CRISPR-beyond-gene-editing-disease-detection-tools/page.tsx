"use client";

import React from "react";

const CRISPRDiseaseDetectionArticle = () => {
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
        CRISPR Beyond Gene Editing: Disease Detection Tools
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
          Since its discovery, CRISPR (Clustered Regularly Interspaced Short
          Palindromic Repeats) has revolutionized the field of genetic
          engineering. While initially celebrated for its gene-editing
          capabilities, CRISPR technology is now being utilized in an
          entirely different realm: disease detection. By harnessing the
          precision and programmability of CRISPR-associated (Cas) proteins,
          researchers have developed novel diagnostic tools that offer
          unparalleled speed, accuracy, and accessibility. These advancements
          are transforming how we identify and monitor diseases, from
          infectious outbreaks to chronic conditions.
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
          What is CRISPR?
        </h2>
        <p>
          CRISPR technology is based on a naturally occurring defense mechanism
          found in bacteria. These microorganisms use CRISPR sequences and Cas
          proteins to recognize and neutralize invading viruses. In the
          laboratory, scientists have repurposed this system to precisely target
          and edit specific DNA or RNA sequences, opening the door to
          revolutionary advancements in genetic research and medicine.
        </p>
        <p>
          Beyond its gene-editing capabilities, CRISPR has demonstrated
          remarkable potential in detecting specific genetic markers associated
          with diseases. By leveraging the ability of Cas proteins, such as
          Cas9, Cas12, and Cas13, to bind or cleave nucleic acids, researchers
          have developed CRISPR-based diagnostic tools that are sensitive,
          specific, and highly versatile.
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
          How CRISPR is Used in Disease Detection
        </h2>
        <p>
          CRISPR-based diagnostic systems work by identifying unique genetic
          sequences that serve as biomarkers for specific diseases. When the
          CRISPR system detects its target sequence, it triggers a molecular
          reaction, often accompanied by a fluorescent or colorimetric signal,
          indicating the presence of the disease. Key systems include:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>SHERLOCK (Specific High-sensitivity Enzymatic Reporter
            unLOCKing):</strong> Developed by the Broad Institute, SHERLOCK
            uses Cas13 to detect RNA sequences with high sensitivity. It is
            particularly effective in identifying viral and bacterial
            infections, including Zika and SARS-CoV-2.
          </li>
          <li>
            <strong>DETECTR (DNA Endonuclease-Targeted CRISPR Trans
            Reporter):</strong> This system utilizes Cas12 to detect DNA-based
            biomarkers. DETECTR has been used for detecting human papillomavirus
            (HPV) and COVID-19 with exceptional precision.
          </li>
          <li>
            <strong>CRISPR-Chip:</strong> A biosensor platform that combines
            CRISPR technology with graphene transistors for label-free
            detection of specific genetic sequences. This platform offers rapid
            and portable diagnostics.
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
          Advantages of CRISPR in Diagnostics
        </h2>
        <p>
          CRISPR-based diagnostics offer several key advantages over traditional
          methods such as PCR (polymerase chain reaction) and antibody tests:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Speed:</strong> CRISPR diagnostics can deliver results in
            under an hour, significantly reducing the turnaround time compared
            to traditional methods.
          </li>
          <li>
            <strong>Accuracy:</strong> These tools can detect genetic sequences
            with unmatched specificity, minimizing false positives and false
            negatives.
          </li>
          <li>
            <strong>Cost-Effectiveness:</strong> CRISPR diagnostics are
            relatively inexpensive to produce, making them accessible for
            low-resource settings.
          </li>
          <li>
            <strong>Portability:</strong> Many CRISPR-based tools are
            compact and do not require complex laboratory infrastructure,
            enabling point-of-care testing.
          </li>
          <li>
            <strong>Versatility:</strong> CRISPR systems can be programmed to
            detect a wide range of genetic markers, making them adaptable to
            diverse diagnostic needs.
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
          Real-World Applications
        </h2>
        <p>
          CRISPR-based diagnostics are being deployed across a variety of
          medical and public health applications:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Infectious Disease Detection:</strong> CRISPR diagnostics
            have been used to identify pathogens such as HIV, Zika virus,
            hepatitis, and COVID-19.
          </li>
          <li>
            <strong>Cancer Diagnostics:</strong> Researchers are exploring
            CRISPR's potential to detect cancer biomarkers, enabling early
            diagnosis and personalized treatment.
          </li>
          <li>
            <strong>Genetic Disorder Screening:</strong> CRISPR tools can
            identify mutations associated with genetic diseases, such as
            cystic fibrosis and sickle cell anemia.
          </li>
          <li>
            <strong>Environmental Monitoring:</strong> CRISPR-based sensors
            can detect harmful pathogens in water or food supplies, ensuring
            public safety.
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
          Challenges and the Future
        </h2>
        <p>
          While CRISPR diagnostics hold great promise, challenges remain.
          Regulatory approval, large-scale manufacturing, and integration into
          existing healthcare systems are critical hurdles to overcome.
          Additionally, ensuring equitable access to this technology is
          essential for maximizing its global impact.
        </p>
        <p>
          As research advances, CRISPR diagnostics are expected to become even
          more powerful, with potential applications in multi-disease panels,
          wearable biosensors, and real-time monitoring. The future of CRISPR
          diagnostics is bright, with the potential to revolutionize healthcare
          on a global scale.
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
          CRISPR technology has evolved far beyond its origins as a
          gene-editing tool. Its application in disease detection represents a
          transformative step in diagnostics, offering faster, cheaper, and more
          accurate solutions. As this technology continues to mature, it will
          play a pivotal role in shaping the future of medicine and public
          health.
        </p>
      </section>
    </article>
  );
};

export default CRISPRDiseaseDetectionArticle;
