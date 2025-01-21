"use client";

import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

const EquationOfTheWeek = () => {
  const equation = {
    formula: "K_a = \\frac{[H^+][A^-]}{[HA]}",
    description: (
      <>
        The acid dissociation constant <InlineMath>{"K_a"}</InlineMath> measures
        the strength of an acid in solution. It quantifies how much the acid dissociates into its ions:
        <ul>
          <li>
            <InlineMath>{"[H^+]"}</InlineMath>: Concentration of hydrogen ions
            (protons).
          </li>
          <li>
            <InlineMath>{"[A^-]"}</InlineMath>: Concentration of the conjugate base
            of the acid.
          </li>
          <li>
            <InlineMath>{"[HA]"}</InlineMath>: Concentration of the undissociated
            acid.
          </li>
        </ul>
        A higher <InlineMath>{"K_a"}</InlineMath> value indicates a stronger acid,
        as more of the acid dissociates into ions. This equation is essential
        for understanding acid-base equilibria and pH calculations in chemistry.
      </>
    ),
    example: {
      problem: (
        <>
          Suppose a 0.1 M solution of acetic acid (
          <InlineMath>{"CH_3COOH"}</InlineMath>) has a hydrogen ion concentration
          of <InlineMath>{"[H^+] = 1.34 \\times 10^{-3} \\, M"}</InlineMath>.
          The concentration of the conjugate base,{" "}
          <InlineMath>{"[CH_3COO^-]"}</InlineMath>, is the same as{" "}
          <InlineMath>{"[H^+]"}</InlineMath>, and the concentration of
          undissociated acetic acid,{" "}
          <InlineMath>{"[CH_3COOH]"}</InlineMath>, is approximately{" "}
          <InlineMath>
            {"0.1 - 1.34 \\times 10^{-3} = 0.0987 \\, M"}
          </InlineMath>
          . Calculate the acid dissociation constant{" "}
          <InlineMath>{"K_a"}</InlineMath>.
        </>
      ),
      solution: (
        <>
          <p>Using the formula:</p>
          <BlockMath>{"K_a = \\frac{[H^+][CH_3COO^-]}{[CH_3COOH]}"}</BlockMath>
          <p>Substituting the values:</p>
          <BlockMath>
            {"K_a = \\frac{(1.34 \\times 10^{-3})(1.34 \\times 10^{-3})}{0.0987}"}
          </BlockMath>
          <p>Simplify:</p>
          <BlockMath>
            {"K_a = \\frac{1.7976 \\times 10^{-6}}{0.0987} = 1.82 \\times 10^{-5}"}
          </BlockMath>
          <p>
            Therefore, the acid dissociation constant for acetic acid is{" "}
            <InlineMath>{"K_a = 1.82 \\times 10^{-5}"}</InlineMath>.
          </p>
        </>
      ),
    },
    contributor: "Bronsted and Lowry",
  };

  return (
    <section
      style={{
        backgroundColor: "#f4f4f4",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        margin: "20px 0",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#000" }}>
        ✨ Equation of the Week ✨
      </h2>
      <div
        style={{
          fontSize: "1.5rem",
          color: "#333",
          marginBottom: "10px",
          overflowX: "auto",
        }}
      >
        <BlockMath>{equation.formula}</BlockMath>
      </div>
      <div
        style={{
          fontSize: "1rem",
          color: "#666",
          marginTop: "10px",
          lineHeight: "1.6",
          textAlign: "justify",
        }}
      >
        {equation.description}
      </div>
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#e0e0e0",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          textAlign: "left",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            marginBottom: "10px",
            color: "#0070f3",
            fontWeight: "bold",
          }}
        >
          Example Problem
        </h3>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            marginBottom: "10px",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          {equation.example.problem}
        </p>
        <h4 style={{ fontSize: "1.2rem", marginBottom: "10px", color: "#0070f3" }}>
          Solution
        </h4>
        <div style={{ fontSize: "1rem", lineHeight: "1.6", color: "#000" }}>
          {equation.example.solution}
        </div>
      </div>
      <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "10px" }}>
        <strong>Contributor:</strong> {equation.contributor}
      </p>
    </section>
  );
};

export default EquationOfTheWeek;
