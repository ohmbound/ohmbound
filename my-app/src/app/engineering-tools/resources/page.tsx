"use client";

import React from "react";
import Link from "next/link";

const resources = {
  books: [
    { title: "Chemistry (Libre Texts)", description: "Campus Bookshelves for College Chemistry", link: "https://chem.libretexts.org/Bookshelves" },
    { title: "Physics (Libre Texts)", description: "Physics Bookshelves for College Physics", link: "https://phys.libretexts.org/Bookshelves" },
    { title: "Engineering (Libre Texts)", description: "Engineering Bookshelves for all concentrations", link: "https://eng.libretexts.org/Bookshelves" },
  ],
  references: [
    { title: "SI Units and Conversion Factors", description: "Complete list of SI units and constants.", link: "https://www.govinfo.gov/content/pkg/GOVPUB-C13-f10c2ff9e7af2091314396a2d53213e4/pdf/GOVPUB-C13-f10c2ff9e7af2091314396a2d53213e4.pdf" },
    { title: "Periodic Table of Elements", description: "Interactive periodic table with detailed information.", link: "https://ptable.com/" },
    { title: "Material Properties Data", description: "Detailed properties of engineering materials.", link: "https://www.matweb.com/" },
    { title: "Physics Constants Handbook", description: "Comprehensive list of universal physics constants.", link: "https://physics.nist.gov/cuu/pdf/all.pdf" },
    { title: "Engineering Standards Guide", description: "Detailed guide to international engineering standards.", link: "https://researchguides.dartmouth.edu/engrstandards" },
    { title: "Organic Chemistry Reactions Chart", description: "Quick reference for organic reactions.", link: "https://www.masterorganicchemistry.com/summary-sheets/" },
    { title: "Fluid Dynamics Data Sheets", description: "Key properties of fluids for engineering applications.", link: "https://www.solidworks.com/sites/default/filesd10/migration/2018-08/3DS-2018-SWK-Launch2019-DataSheet-FlowSim.pdf" },
    { title: "Math Formulas Reference", description: "Comprehensive list of mathematical formulas.", link: "https://www.math.csi.cuny.edu/~ikofman/calculus_formulas.pdf" },
    { title: "Thermodynamic Tables", description: "Detailed tables for entropy, enthalpy, and Gibbs energy.", link: "https://engineering.wayne.edu/mechanical/pdfs/thermodynamic-_tables-updated.pdf" },
    { title: "Mechanical Properties of Metals", description: "Reference for Young's modulus and strength data.", link: "https://www.huyett.com/blog/mechanical-properties-of-metals?srsltid=AfmBOookOE56tvunVERHJlDglzxh5M4fD_9MO2glZr2U-yO8P34HzEvv" },
    { title: "Acid-Base pKa Chart", description: "Quick access to pKa values for acids and bases.", link: "https://library.gwu.edu/sites/default/files/2023-12/Table%20of%20Acids%20w%20Kas%20and%20pKas.pdf" },
    { title: "Optics and Photonics Data", description: "Reference guide for optical properties and phenomena.", link: "https://www.optica-opn.org/" },
  ],
  tools: [
    { title: "PhET Interactive Simulations", description: "Physics, chemistry, and engineering simulations for interactive learning.", link: "https://phet.colorado.edu/en/simulations/filter?type=html" },
    { title: "Molecular Modeling Tools", description: "Explore molecular structures with this modeling tool.", link: "https://www.eyesopen.com/" },
    { title: "Onshape AutoCAD Online", description: "Browser-based version of AutoCAD for drafting.", link: "https://www.onshape.com/en/" },
    { title: "Wolfram Alpha", description: "Advanced computational engine for mathematical and scientific queries.", link: "https://www.wolframalpha.com/" },
    { title: "ChemDraw Online", description: "Draw and analyze chemical structures and reactions.", link: "https://revvitysignals.com/products/research/chemdraw" },
    { title: "CircuitLab", description: "Online circuit simulator for design and testing.", link: "https://www.circuitlab.com/" },
  ],
};

const ResourcesPage = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", textAlign: "center" }}>Resources</h1>
      {Object.keys(resources).map((category) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "15px",
              textTransform: "capitalize",
              color: "#0070f3",
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {resources[category].map((resource) => (
              <div
                key={resource.title}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                  backgroundColor: "#f9f9f9",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "220px", // Ensures all cards have the same height
                }}
              >
                <h3 style={{ marginBottom: "10px", color: "#333" }}>{resource.title}</h3>
                <p style={{ marginBottom: "10px", color: "#000" }}>{resource.description}</p>
                <Link
                  href={resource.link}
                  target="_blank"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#0070f3",
                    color: "#fff",
                    borderRadius: "5px",
                    textDecoration: "none",
                    marginTop: "auto",
                  }}
                >
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourcesPage;