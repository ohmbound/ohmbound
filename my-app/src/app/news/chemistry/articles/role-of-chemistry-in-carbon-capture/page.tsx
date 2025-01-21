"use client";

import React from "react";

const CarbonCaptureArticle = () => {
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
        The Role of Chemistry in Carbon Capture: Paving the Way for a Sustainable Future
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
          Carbon capture has emerged as a critical tool in the fight against climate change, offering a way to reduce the amount of carbon dioxide (CO₂) released into the atmosphere. As the primary greenhouse gas responsible for global warming, CO₂ emissions must be curtailed to meet global climate targets. Chemistry plays a pivotal role in this endeavor, providing the scientific foundation for innovative technologies and materials that can efficiently capture, store, and utilize carbon dioxide.
        </p>
        <p>
          This article delves into the chemical principles behind carbon capture, exploring the innovative materials, processes, and challenges associated with this transformative technology.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          What Is Carbon Capture?
        </h2>
        <p>
          Carbon capture refers to the process of capturing carbon dioxide emissions from industrial processes, power plants, and even directly from the atmosphere. Once captured, the CO₂ can either be stored underground in geological formations or repurposed for industrial applications, such as in the production of synthetic fuels, building materials, or chemicals.
        </p>
        <p>
          The process typically involves three main steps:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Capture:</strong> Extracting CO₂ from exhaust gases or ambient air using chemical or physical methods.
          </li>
          <li>
            <strong>Transport:</strong> Moving the captured CO₂ to a storage or utilization site via pipelines or other means.
          </li>
          <li>
            <strong>Storage/Utilization:</strong> Permanently storing the CO₂ in geological formations or converting it into useful products.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          The Chemistry Behind Carbon Capture
        </h2>
        <p>
          At the heart of carbon capture technologies lies the application of advanced chemical principles. Different approaches leverage unique chemical properties to extract CO₂ efficiently:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Absorption:</strong> This process uses liquid solvents, such as amines, to chemically bind with CO₂. The CO₂-laden solvent is then heated to release the gas, regenerating the solvent for reuse.
          </li>
          <li>
            <strong>Adsorption:</strong> Solid materials like zeolites, activated carbon, and Metal-Organic Frameworks (MOFs) capture CO₂ on their surfaces through physical or chemical interactions. MOFs are particularly promising due to their high porosity and tunable properties.
          </li>
          <li>
            <strong>Membrane Separation:</strong> Advanced polymer or ceramic membranes selectively allow CO₂ to pass through while blocking other gases, enabling efficient separation.
          </li>
          <li>
            <strong>Cryogenic Separation:</strong> This technique cools gases to extremely low temperatures, causing CO₂ to condense into a liquid that can be separated from other gases.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Applications of Carbon Capture
        </h2>
        <p>
          Carbon capture technologies have a broad range of applications that extend across multiple industries:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Power Plants:</strong> Carbon capture systems installed at coal and natural gas power plants can significantly reduce emissions from energy production.
          </li>
          <li>
            <strong>Industrial Processes:</strong> Cement, steel, and chemical production are major sources of CO₂ emissions. Capturing carbon from these processes is essential for decarbonizing heavy industry.
          </li>
          <li>
            <strong>Direct Air Capture (DAC):</strong> Technologies that capture CO₂ directly from the atmosphere could help offset emissions from sectors where reduction is difficult, such as aviation and shipping.
          </li>
          <li>
            <strong>Enhanced Oil Recovery (EOR):</strong> Captured CO₂ can be injected into depleted oil fields to enhance oil extraction, simultaneously storing the gas underground.
          </li>
          <li>
            <strong>Carbon Utilization:</strong> CO₂ can be converted into useful products like synthetic fuels, plastics, and building materials, creating a circular carbon economy.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Challenges in Carbon Capture
        </h2>
        <p>
          While the potential of carbon capture is immense, there are several challenges that must be addressed to make these technologies more viable:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Cost:</strong> The high costs associated with capturing, transporting, and storing CO₂ remain a significant barrier to widespread adoption.
          </li>
          <li>
            <strong>Energy Intensity:</strong> Many carbon capture processes require substantial energy input, reducing the overall efficiency of industrial systems.
          </li>
          <li>
            <strong>Infrastructure:</strong> Developing the necessary infrastructure for CO₂ transport and storage, including pipelines and storage facilities, is a complex and resource-intensive task.
          </li>
          <li>
            <strong>Scalability:</strong> Scaling up carbon capture technologies to meet global demand is a monumental challenge requiring international collaboration.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Conclusion
        </h2>
        <p>
          The role of chemistry in carbon capture is undeniable, offering the scientific foundation for transformative technologies that can mitigate climate change. From innovative materials like MOFs to efficient chemical processes like absorption and adsorption, chemistry is paving the way for a more sustainable future.
        </p>
        <p>
          While challenges remain, continued investment in research and development, coupled with international collaboration, can unlock the full potential of carbon capture technologies. As we strive to meet global climate targets, the integration of chemistry into carbon capture will undoubtedly play a pivotal role in shaping a cleaner, greener world.
        </p>
      </section>
    </article>
  );
};

export default CarbonCaptureArticle;
