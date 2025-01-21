"use client";

import React from "react";

const ChemistryOfExplosivesArticle = () => {
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
        The Chemistry of Explosives
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
          Explosives have played a significant role in human history, from their
          use in construction and mining to their application in warfare and
          scientific research. The chemistry of explosives revolves around
          carefully controlled chemical reactions that release massive amounts
          of energy in a very short time. This article explores the fascinating
          science behind explosives, the types of reactions involved, and their
          various applications.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          What Are Explosives?
        </h2>
        <p>
          Explosives are materials that undergo rapid chemical reactions,
          producing gases and releasing large amounts of heat and pressure. This
          rapid release of energy is what causes an explosion. The essential
          components of an explosive material include a fuel, an oxidizer, and
          in some cases, additional stabilizing compounds.
        </p>
        <p>
          Explosives are typically categorized into two main types: low
          explosives and high explosives. Low explosives, such as gunpowder,
          burn relatively slowly and produce gas pressure useful for propulsion
          (e.g., in firearms). High explosives, on the other hand, detonate
          almost instantaneously, creating a shockwave and destructive force.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          The Chemistry Behind Explosions
        </h2>
        <p>
          Explosions occur due to exothermic chemical reactions, where bonds in
          the reactants break and new bonds form in the products. These
          reactions release energy in the form of heat and light, along with
          expanding gases. The key reactions involved include:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Combustion:</strong> The rapid oxidation of a fuel produces
            heat and gaseous products, which expand and generate pressure.
          </li>
          <li>
            <strong>Decomposition:</strong> Some explosives, such as TNT
            (trinitrotoluene), decompose into smaller molecules, releasing
            energy stored in chemical bonds.
          </li>
          <li>
            <strong>Deflagration vs. Detonation:</strong> Low explosives undergo
            deflagration, a slower reaction driven by heat transfer, while high
            explosives detonate, creating a supersonic shockwave.
          </li>
        </ul>
        <p>
          The energy released in these reactions is often quantified in terms
          of detonation velocity and pressure, both of which determine the
          explosive's power and application.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Types of Explosives
        </h2>
        <p>
          Explosives are categorized based on their chemical composition and
          behavior. The most common types include:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Primary Explosives:</strong> These are highly sensitive to
            heat, shock, or friction and are used as initiators in detonators.
            Examples include lead azide and mercury fulminate.
          </li>
          <li>
            <strong>Secondary Explosives:</strong> Less sensitive than primary
            explosives, these are used for larger-scale applications, such as
            TNT, RDX (Research Department Explosive), and PETN (Pentaerythritol
            Tetranitrate).
          </li>
          <li>
            <strong>Tertiary Explosives:</strong> Also known as blasting agents,
            these require a significant amount of energy to detonate. Examples
            include ANFO (ammonium nitrate-fuel oil).
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Applications of Explosives
        </h2>
        <p>
          The controlled use of explosives has revolutionized various
          industries, including:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Mining and Construction:</strong> Explosives are used to
            break apart rocks and create tunnels in mining operations and
            infrastructure projects.
          </li>
          <li>
            <strong>Military:</strong> High explosives are used in weapons,
            bombs, and missiles for offensive and defensive purposes.
          </li>
          <li>
            <strong>Aerospace:</strong> Explosive bolts and separation charges
            are used in spacecraft to separate stages or deploy equipment.
          </li>
          <li>
            <strong>Pyrotechnics:</strong> Fireworks and special effects in the
            entertainment industry rely on low explosives for controlled
            displays.
          </li>
          <li>
            <strong>Research:</strong> Explosives are used in scientific
            research to study shockwaves, material properties, and high-energy
            physics.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Safety and Environmental Concerns
        </h2>
        <p>
          While explosives are invaluable tools, their use comes with inherent
          risks. Proper handling, storage, and transportation are critical to
          ensure safety. Additionally, explosives can have significant
          environmental impacts, including soil and water contamination and air
          pollution from detonation byproducts.
        </p>
        <p>
          Researchers are actively working on developing "green explosives" that
          minimize environmental harm while maintaining performance. These
          efforts include the use of biodegradable materials and alternative
          oxidizers.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#0070f3" }}>
          Conclusion
        </h2>
        <p>
          The chemistry of explosives is a fascinating field that combines
          physics, chemistry, and engineering to harness the immense power of
          chemical reactions. From their historical use in mining and warfare to
          modern applications in aerospace and pyrotechnics, explosives have
          shaped the world in countless ways. As technology advances, the focus
          on safety, sustainability, and innovation will continue to drive the
          development of explosive materials for diverse applications.
        </p>
      </section>
    </article>
  );
};

export default ChemistryOfExplosivesArticle;
