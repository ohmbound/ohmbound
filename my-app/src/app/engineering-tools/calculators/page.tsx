"use client";

import React from "react";
import Link from "next/link";

const calculators = {
  chemistry: [
    {
      title: "Stoichiometry Calculator",
      description: "Solve for moles, grams, and volume ratios in chemical reactions.",
      equation: "n = m / M",
      link: "http://thermobook.net/stoichiometry/",
    },
    {
      title: "Ideal Gas Law Calculator",
      description: "Solve for pressure, volume, temperature, or moles using PV=nRT.",
      equation: "PV = nRT",
      link: "https://www.sensorsone.com/ideal-gas-law-calculator/",
    },
    {
      title: "pH and pOH Calculator",
      description: "Determine the acidity or basicity of solutions using -log[H+] or -log[OH-].",
      equation: "pH = -log[H⁺], pOH = -log[OH⁻]",
      link: "https://calculator.academy/ph-to-poh-calculator/",
    },
    {
      title: "Reaction Yield Calculator",
      description: "Calculate theoretical yield and percent yield from reactants and products.",
      equation: "Percent Yield = (Actual Yield / Theoretical Yield) × 100",
      link: "https://www.inchcalculator.com/theoretical-yield-calculator/",
    },
    {
      title: "Dilution Calculator",
      description: "Calculate the volumes or concentrations required for dilution.",
      equation: "M₁V₁ = M₂V₂",
      link: "https://www.tocris.com/resources/dilution-calculator",
    },
    {
      title: "Reaction Rate Calculator",
      description: "Solve for the rate of reaction based on reactant concentrations and rate laws.",
      equation: "Rate = k[A]^m[B]^n",
      link: "https://www.desmos.com/calculator/72ajuoe9ua",
    },
    {
      title: "Nernst Equation Calculator",
      description: "Compute electrode potential for electrochemical cells.",
      equation: "E = E° - (RT / nF) lnQ",
      link: "https://www.physiologyweb.com/calculators/nernst_potential_calculator.html",
    },
    {
      title: "Van 't Hoff Factor Calculator",
      description: "Solve for colligative properties like boiling point elevation and freezing point depression.",
      equation: "ΔT = i K_f m",
      link: "http://calistry.org/calculate/vantHoffEquation",
    },
    {
      title: "Redox Reaction Balancer",
      description: "Balance oxidation-reduction reactions step-by-step.",
      equation: "Oxidation Half-Reaction + Reduction Half-Reaction = Balanced Equation",
      link: "https://calculator-online.net/redox-reaction-calculator/",
    },
    {
      title: "Chemical Half-Life Calculator",
      description: "Determine the time required for a reactant to decrease by half.",
      equation: "t₁/₂ = 0.693 / k",
      link: "https://www.calculator.net/half-life-calculator.html",
    },
    {
      title: "Chemical Equilibrium Calculator (ICE Table)",
      description: "Solve for equilibrium concentrations of reactants and products using the equilibrium constant.",
      equation: "K = [Products]^coefficients / [Reactants]^coefficients",
      link: "https://www.aatbio.com/tools/ice-table-initial-change-equilibrium-calculator-solver",
    },
    {
      title: "Bond Energy Calculator (Enthalpy)",
      description: "Calculate the total energy required to break all bonds in a molecule or reaction.",
      equation: "ΔH = ∑(Bond Energies of Reactants) - ∑(Bond Energies of Products)",
      link: "https://domycalculations.com/thermodynamics/bond-energy-calculator/",
    },
    {
      title: "Partial Pressure Calculator",
      description: "Determine the partial pressure of gases in a mixture using Dalton's Law.",
      equation: "P_total = ΣP_gas",
      link: "https://www.aatbio.com/tools/solve-equation-calculator/partial-pressure-ideal-gas-law",
    },
    {
      title: "Henderson-Hasselbalch Equation Calculator",
      description: "Calculate pH or pKa for buffer solutions, based on the concentration of acids and conjugate bases.",
      equation: "pH = pKa + log([A⁻] / [HA])",
      link: "https://www.aatbio.com/tools/quick-calculator/henderson-hasselbalch-acid-calculator",
    },
    {
      title: "Enthalpy Change Calculator",
      description: "Compute the enthalpy change (ΔH) for chemical reactions using bond enthalpies or heats of formation.",
      equation: "ΔH = ∑ΔH(products) - ∑ΔH(reactants)",
      link: "https://www.calctool.org/thermodynamics/enthalpy",
    },
    {
      title: "Molecular Weight Calculator",
      description: "Calculate the molecular weight of compounds from their chemical formula.",
      equation: "MW = Σ(Atomic Mass × Number of Atoms)",
      link: "https://www.lenntech.com/calculators/molecular/molecular-weight-calculator.htm",
    },
    {
      title: "Freezing Point Depression Calculator",
      description: "Calculate the change in freezing point for a solution.",
      equation: "ΔT_f = i K_f m",
      link: "https://www.calctool.org/physical-chemistry/freezing-point-depression",
    },
    {
      title: "Boiling Point Elevation Calculator",
      description: "Solve for the boiling point elevation in solutions.",
      equation: "ΔT_b = i K_b m",
      link: "https://newtum.com/calculators/chemistry/boiling-point-elevation-calculator",
    },
    {
      title: "Electrolysis Calculator",
      description: "Calculate the amount of substance produced or consumed in an electrolytic reaction.",
      equation: "m = (I × t × M) / (n × F)",
      link: "https://www.omnicalculator.com/chemistry/electrolysis",
    },
    {
      title: "Gibbs Free Energy Calculator (my favourite!)",
      description: "Calculate the Gibbs free energy change for a reaction.",
      equation: "ΔG = ΔH - TΔS",
      link: "https://www.omnicalculator.com/chemistry/gibbs-energy",
    }
  ],
  physics: [
    {
      title: "Projectile Motion Calculator",
      description: "Analyze the motion of projectiles, including range and maximum height.",
      equation: "Range = (v² × sin(2θ)) / g",
      link: "https://amesweb.info/Physics/Projectile-Motion-Calculator.aspx",
    },
    {
      title: "Kinetic Energy Calculator",
      description: "Calculate the kinetic energy of objects in motion.",
      equation: "KE = 0.5 × m × v²",
      link: "https://www.calculatorsoup.com/calculators/physics/kinetic.php",
    },
    {
      title: "Ohm's Law Calculator",
      description: "Solve for voltage, current, or resistance in circuits.",
      equation: "V = I × R",
      link: "https://www.calculator.net/ohms-law-calculator.html",
    },
    {
      title: "Newton's Second Law Calculator",
      description: "Compute the force, mass, or acceleration using F=ma.",
      equation: "F = m × a",
      link: "https://www.calculatorsoup.com/calculators/physics/force.php",
    },
    {
      title: "Gravitational Force Calculator",
      description: "Calculate the gravitational force between two masses.",
      equation: "F = G × (m₁ × m₂) / r²",
      link: "https://www.omnicalculator.com/physics/gravitational-force",
    },
    {
      title: "Work and Energy Calculator",
      description: "Solve for work done or energy in physical systems.",
      equation: "W = F × d × cos(θ)",
      link: "https://www.calculatorsoup.com/calculators/physics/work.php",
    },
    {
      title: "Circular Motion Calculator",
      description: "Analyze forces, speed, and acceleration in circular motion.",
      equation: "F_c = m × v² / r",
      link: "https://www.omnicalculator.com/physics/centripetal-force",
    },
    {
      title: "Momentum Calculator",
      description: "Calculate the momentum of an object based on mass and velocity.",
      equation: "p = m × v",
      link: "https://www.calculatorsoup.com/calculators/physics/momentum.php",
    },
    {
      title: "Spring Force Calculator",
      description: "Determine force and energy in springs using Hooke's Law.",
      equation: "F = -k × x",
      link: "https://www.calculatorsoup.com/calculators/physics/hookes-law.php",
    },
    {
      title: "Wave Speed Calculator",
      description: "Compute the speed of waves based on frequency and wavelength.",
      equation: "v = f × λ",
      link: "https://www.calculatorsoup.com/calculators/physics/wavelength.php",
    },
    {
      title: "Power Calculator",
      description: "Determine power output in mechanical and electrical systems.",
      equation: "P = W / t",
      link: "https://www.omnicalculator.com/physics/work-and-power",
    },
    {
      title: "Specific Heat Calculator",
      description: "Calculate heat transfer in substances using specific heat capacity.",
      equation: "q = m × c × ΔT",
      link: "https://www.inchcalculator.com/specific-heat-calculator/",
    },
    {
      title: "Torque Calculator",
      description: "Solve for torque in rotational systems using force and distance.",
      equation: "τ = F × r × sin(θ)",
      link: "https://www.omnicalculator.com/physics/torque",
    },
    {
      title: "Terminal Velocity Calculator",
      description: "Find the maximum velocity of an object in free fall with drag.",
      equation: "v_t = √((2 × m × g) / (ρ × A × C_d))",
      link: "https://www.omnicalculator.com/physics/terminal-velocity",
    },
    {
      title: "Lens Equation Calculator",
      description: "Analyze image formation in lenses using the lens equation.",
      equation: "1/f = 1/v + 1/u",
      link: "https://www.omnicalculator.com/physics/thin-lens-equation",
    },
    {
      title: "Escape Velocity Calculator",
      description: "Find the velocity required to escape a planet's gravitational pull.",
      equation: "v_e = √(2 × G × M / r)",
      link: "https://www.omnicalculator.com/physics/escape-velocity",
    },
    {
      title: "Pressure Calculator",
      description: "Solve for pressure in fluids and gases using force and area.",
      equation: "P = F / A",
      link: "https://www.calculatorsoup.com/calculators/physics/pressure.php",
    },
    {
      title: "Heat Transfer Calculator",
      description: "Calculate heat transfer through conduction, convection, or radiation.",
      equation: "Q = k × A × ΔT / d",
      link: "https://durathermfluids.com/resources/calculators/heat-transfer/",
    },
    {
      title: "Fluid Dynamics Calculator",
      description: "Analyze fluid flow rates, pressure, and velocity using Bernoulli's principle.",
      equation: "P₁ + 0.5ρv₁² + ρgh₁ = P₂ + 0.5ρv₂² + ρgh₂",
      link: "https://www.omnicalculator.com/physics/bernoulli-equation",
    },
    {
      title: "Electric Field Calculator",
      description: "Determine the electric field due to a charge distribution.",
      equation: "E = F / q",
      link: "https://calculator.academy/electric-field-calculator/",
    },
    {
      title: "Blackbody Radiation Calculator",
      description: "Analyze radiative properties of blackbody objects using Planck's law.",
      equation: "E = σT⁴",
      link: "https://www.omnicalculator.com/physics/blackbody-radiation",
    },
    {
      title: "Relativity Time Dilation Calculator",
      description: "Compute time dilation effects based on relative speeds.",
      equation: "Δt' = Δt / √(1 - v²/c²)",
      link: "https://www.omnicalculator.com/physics/time-dilation",
    },
    {
      title: "Thermal Expansion Calculator",
      description: "Calculate expansion in materials due to temperature changes.",
      equation: "ΔL = α × L₀ × ΔT",
      link: "https://www.omnicalculator.com/physics/thermal-expansion",
    },
    {
      title: "Buoyancy Calculator",
      description: "Solve for buoyant force in fluids using Archimedes' principle.",
      equation: "F_b = ρ × V × g",
      link: "https://www.omnicalculator.com/physics/buoyancy",
    },
  ],
  engineering: [
    {
      title: "Beam Buckling Calculator",
      description: "Calculate the critical load at which a column will buckle.",
      equation: "P_cr = π²EI / (KL)²",
      link: "https://www.omnicalculator.com/physics/buckling",
    },
    {
      title: "Heat Sink Calculator",
      description: "Determine the thermal resistance required for a heat sink to dissipate heat.",
      equation: "R_th = (T_j - T_a) / P",
      link: "https://www.heatsinkcalculator.com/heat-sink-size-calculator.html",
    },
    {
      title: "Bolt Shear Strength Calculator",
      description: "Compute the maximum shear force a bolt can withstand.",
      equation: "F_s = τ × A",
      link: "https://www.engineersedge.com/material_science/bolt_single_shear_calcs.htm",
    },
    {
      title: "Reinforced Concrete Beam Calculator",
      description: "Calculate the moment capacity and reinforcement requirements for concrete beams.",
      equation: "M = f_c × b × d²",
      link: "https://bendingmomentdiagram.com/free-calculator/reinforced-concrete-beam-calculator/",
    },
    {
      title: "Hydraulic Cylinder Force Calculator",
      description: "Determine the force output of hydraulic cylinders.",
      equation: "F = P × A",
      link: "https://www.baumhydraulics.com/images/calculators/cyl_calc.htm",
    },
    {
      title: "Gear Ratio Calculator",
      description: "Calculate gear ratios and output speeds for mechanical systems.",
      equation: "Gear Ratio = T₂ / T₁ = N₁ / N₂",
      link: "https://www.omnicalculator.com/physics/gear-ratio",
    },
    {
      title: "Shaft Torsion Calculator",
      description: "Solve for torque and stress in rotating shafts.",
      equation: "τ = T × r / J",
      link: "https://eicac.co.uk/torsion-in-shaft-calculator/",
    },
    {
      title: "Thermal Stress Calculator",
      description: "Compute stress induced in materials due to temperature changes.",
      equation: "σ = E × α × ΔT",
      link: "https://www.omnicalculator.com/physics/thermal-stress",
    },
    {
      title: "Welding Heat Input Calculator",
      description: "Analyze heat input for welding processes.",
      equation: "H = (V × I × 60) / S",
      link: "https://www.colliewelding.com/hicalculators.php",
    },
    {
      title: "HVAC Duct Sizing Calculator",
      description: "Determine the optimal dimensions for HVAC ducts.",
      equation: "Q = A × v",
      link: "https://www.servicetitan.com/tools/hvac-duct-calculator",
    },
    {
      title: "Cantilever Beam Calculator",
      description: "Analyze deflection and stresses in cantilever beams.",
      equation: "y_max = (F × L³) / (3EI)",
      link: "https://www.omnicalculator.com/construction/beam-deflection",
    },
    {
      title: "Concrete Slab Load Calculator",
      description: "Calculate load capacity and reinforcement requirements for slabs.",
      equation: "q = (f_c × b × h²) / L",
      link: "https://www.buildingsguide.com/calculators/structural/FCSGSG/?srsltid=AfmBOop5mS7TVeXsPzX1S2Je3C875ueSR_-bqavHCz0TmmPH4GS9WmWO",
    },
    {
      title: "Wind Load Calculator",
      description: "Determine wind pressure and forces on structures.",
      equation: "F = 0.5 × ρ × v² × A × C_d",
      link: "https://www.omnicalculator.com/physics/wind-load",
    },
    {
      title: "Pipe Flow Calculator",
      description: "Analyze fluid flow rates and pressure drops in pipes.",
      equation: "ΔP = f × (L / D) × (ρ × v² / 2)",
      link: "https://www.omnicalculator.com/physics/pipe-flow",
    },
    {
      title: "Seismic Load Calculator",
      description: "Calculate earthquake-induced forces on buildings.",
      equation: "F = C_s × W",
      link: "https://courses.cit.cornell.edu/arch264/calculators/seismic-wind/index.html",
    },
    {
      title: "Vibration Analysis Calculator",
      description: "Analyze vibration frequencies and amplitudes in mechanical systems.",
      equation: "f = 1 / (2π) √(k / m)",
      link: "https://www.modalshop.com/rental/learn/calculators/vibration-calculator",
    },
    {
      title: "Bridge Deflection Calculator",
      description: "Compute deflection in bridges under various loads.",
      equation: "Δ = (5 × w × L⁴) / (384 × EI)",
      link: "https://www.tech-calculation.com/Mechanics/Beam%20Deflection%20Calculator-Bridge%20Beam/",
    },
    {
      title: "Pump Efficiency Calculator",
      description: "Calculate the efficiency of hydraulic pump systems.",
      equation: "Efficiency = (P_out / P_in) × 100",
      link: "https://calculator.academy/pump-efficiency-calculator/",
    },
    {
      title: "Solar Panel Tilt Calculator",
      description: "Optimize the angle of solar panels for maximum energy capture.",
      equation: "Tilt Angle = Latitude + 15° (Winter) / Latitude - 15° (Summer)",
      link: "https://www.solartap.com/blogs/solar-101/solar-panel-angle-calculator",
    },
    {
      title: "Insulation Thickness Calculator",
      description: "Determine the required insulation thickness to reduce heat loss.",
      equation: "R = ΔT / q",
      link: "https://thermaflex.com/calculator/",
    },
    {
      title: "Pressure Vessel Calculator",
      description: "Analyze stresses and thickness requirements for pressure vessels.",
      equation: "σ = (P × r) / t",
      link: "https://www.calqlata.com/productpages/00065-help.html",
    },
    {
      title: "Water Hammer Calculator",
      description: "Calculate pressure surges caused by sudden changes in fluid flow.",
      equation: "ΔP = ρ × c × Δv",
      link: "http://irrigation.wsu.edu/Content/Calculators/General/Water-Hammer.php",
    },
    {
      title: "Electric Motor Efficiency Calculator",
      description: "Determine the efficiency of electric motors in systems.",
      equation: "Efficiency = (Output Power / Input Power) × 100",
      link: "https://www.engineeringtoolbox.com/electrical-motor-calculator-d_832.html",
    },
  ],
}

const CalculatorsPage = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px", textAlign: "center" }}>Calculators</h1>
      {Object.keys(calculators).map((category) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "15px", textTransform: "capitalize", color: "#0070f3" }}>
            {category}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {calculators[category].map((calc) => (
              <div
                key={calc.title}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                  color: "#000",
                  backgroundColor: "#f0f8ff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <h3 style={{ marginBottom: "10px", color: "#333" }}>{calc.title}</h3>
                <p style={{ marginBottom: "10px" }}>{calc.description}</p>
                <p style={{ fontStyle: "italic", marginBottom: "10px", color: "#555" }}>
                  Equation: {calc.equation}
                </p>
                <Link
                  href={calc.link}
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

export default CalculatorsPage;