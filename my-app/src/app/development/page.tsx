"use client";

import React from "react";

const EquationLibrary = () => {
  const equations = {
    physics: [
      { title: "Ohm's Law", formula: "V = IR", description: "Relates voltage, current, and resistance." },
      { title: "Newton's Second Law", formula: "F = ma", description: "Force equals mass times acceleration." },
      { title: "Gravitational Force", formula: "F = G(m₁m₂)/r²", description: "Attractive force between two masses." },
      { title: "Kinetic Energy", formula: "KE = ½mv²", description: "Energy due to motion." },
      { title: "Potential Energy", formula: "PE = mgh", description: "Energy due to position in a gravitational field." },
      { title: "Work Done", formula: "W = Fd cos(θ)", description: "Work done by a force over a distance." },
      { title: "Power", formula: "P = W/t", description: "Rate of doing work or transferring energy." },
      { title: "Wave Speed", formula: "v = fλ", description: "Speed of a wave based on frequency and wavelength." },
      { title: "Coulomb's Law", formula: "F = k(q₁q₂)/r²", description: "Force between two charges." },
      { title: "Electric Field", formula: "E = F/q", description: "Force experienced by a unit charge." },
      { title: "Magnetic Force", formula: "F = qvB sin(θ)", description: "Force on a charge in a magnetic field." },
      { title: "Momentum", formula: "p = mv", description: "Product of mass and velocity." },
      { title: "Impulse", formula: "J = Δp", description: "Change in momentum." },
      { title: "Hooke's Law", formula: "F = kx", description: "Force exerted by a spring." },
      { title: "Period of a Pendulum", formula: "T = 2π√(L/g)", description: "Time for one oscillation of a pendulum." },
      { title: "Thermal Energy", formula: "Q = mcΔT", description: "Energy transferred due to temperature change." },
      { title: "Entropy Change", formula: "ΔS = Q/T", description: "Change in disorder of a system." },
      { title: "Einstein's Equation", formula: "E = mc²", description: "Energy-mass equivalence." },
      { title: "Planck's Equation", formula: "E = hf", description: "Energy of a photon." },
      { title: "Snell's Law", formula: "n₁sin(θ₁) = n₂sin(θ₂)", description: "Refraction of light at an interface." },
      { title: "Torque", formula: "τ = rF sin(θ)", description: "Rotational force applied to an object." },
      { title: "Angular Momentum", formula: "L = Iω", description: "Momentum of a rotating object." },
      { title: "Capacitance", formula: "C = Q/V", description: "Charge stored per unit voltage." },
      { title: "Energy Stored in a Capacitor", formula: "E = ½CV²", description: "Energy in an electric field." },
      { title: "Thermal Conductivity", formula: "q = -kA(dT/dx)", description: "Heat transfer through a material." },
      { title: "Lenz's Law", formula: "ε = -dΦ/dt", description: "Induced EMF opposes the change in flux." },
      { title: "Bohr's Equation", formula: "E = -13.6/n² eV", description: "Energy levels of a hydrogen atom." },
      { title: "Photoelectric Effect", formula: "Kmax = hf - Φ", description: "Maximum kinetic energy of ejected electrons." },
      { title: "Relativistic Energy", formula: "E² = (pc)² + (mc²)²", description: "Energy including momentum and rest mass." },
      { title: "Lorentz Force", formula: "F = q(E + v × B)", description: "Force on a charge in electromagnetic fields." },
      { title: "Doppler Effect", formula: "f' = f(v±v₀)/(v±vs)", description: "Frequency shift due to relative motion." },
      { title: "Escape Velocity", formula: "v = √(2GM/R)", description: "Velocity needed to escape a gravitational field." },
      { title: "Angular Frequency", formula: "ω = 2πf", description: "Frequency in radians per second." },
      { title: "Diffraction", formula: "dsinθ = nλ", description: "Condition for constructive interference in a grating." },
      { title: "Intensity of Light", formula: "I = P/A", description: "Power per unit area of a wave." },
      { title: "Refractive Index", formula: "n = c/v", description: "Ratio of speed of light in a vacuum to a medium." },
      { title: "Mass-Energy Relation", formula: "E = mc²", description: "Energy equivalent of mass in relativity." },
      { title: "Specific Heat Capacity", formula: "c = Q/mΔT", description: "Heat energy required to raise temperature." },
      { title: "Fluid Pressure", formula: "P = ρgh", description: "Pressure at depth in a fluid." },
      { title: "Stokes' Law", formula: "F = 6πηrv", description: "Drag force on a spherical object in fluid." },
      { title: "Heat Transfer Rate", formula: "Q/t = kA(ΔT/L)", description: "Rate of heat conduction." },
      { title: "Bragg's Law", formula: "nλ = 2dsinθ", description: "Condition for X-ray diffraction." },
      { title: "Maxwell's First Equation", formula: "∇·E = ρ/ε₀", description: "Gauss's law for electricity." },
      { title: "Maxwell's Second Equation", formula: "∇·B = 0", description: "No magnetic monopoles exist." },
      { title: "Maxwell's Third Equation", formula: "∇ × E = -dB/dt", description: "Faraday's law of induction." },
      { title: "Maxwell's Fourth Equation", formula: "∇ × B = μ₀J + μ₀ε₀dE/dt", description: "Ampere's law with Maxwell's correction." },
      { title: "Planck's Radiation Law", formula: "Eλ = (8πhc/λ⁵) / (e^(hc/λkT)-1)", description: "Spectral distribution of black body radiation." },
      { title: "Thermodynamic Efficiency", formula: "η = (T₁ - T₂)/T₁", description: "Efficiency of a heat engine." },
      { title: "Radioactive Decay", formula: "N = N₀e^(-λt)", description: "Number of atoms remaining after time t." },
      { title: "Hubble's Law", formula: "v = H₀d", description: "Recession speed of galaxies proportional to distance." },
    ],
      chemistry: [
        { title: "Ideal Gas Law", formula: "PV = nRT", description: "Relationship between pressure, volume, and temperature of an ideal gas." },
        { title: "Boyle's Law", formula: "P₁V₁ = P₂V₂", description: "Pressure and volume relationship at constant temperature." },
        { title: "Charles' Law", formula: "V₁/T₁ = V₂/T₂", description: "Volume and temperature relationship at constant pressure." },
        { title: "Avogadro's Law", formula: "V/n = constant", description: "Volume is proportional to the number of moles at constant pressure and temperature." },
        { title: "Dalton's Law of Partial Pressures", formula: "Ptotal = P₁ + P₂ + ... + Pn", description: "Total pressure is the sum of the partial pressures." },
        { title: "Combined Gas Law", formula: "(P₁V₁)/T₁ = (P₂V₂)/T₂", description: "Combines Boyle's, Charles', and Gay-Lussac's laws." },
        { title: "Van der Waals Equation", formula: "[P + a(n/V)²](V - nb) = nRT", description: "Modification of the ideal gas law for real gases." },
        { title: "Mole Fraction", formula: "X = n₁/n_total", description: "Ratio of moles of a substance to the total moles in a mixture." },
        { title: "Raoult's Law", formula: "Psolution = Xsolvent × Psolvent", description: "Vapor pressure of a solution depends on mole fraction." },
        { title: "Henry's Law", formula: "C = kP", description: "Solubility of gas is proportional to pressure." },
        { title: "Beer-Lambert Law", formula: "A = εlc", description: "Absorbance of light is proportional to concentration." },
        { title: "Arrhenius Equation", formula: "k = Ae^(-Ea/RT)", description: "Relationship between rate constant and activation energy." },
        { title: "Nernst Equation", formula: "E = E⁰ - (RT/nF)lnQ", description: "Electrode potential depends on concentration and temperature." },
        { title: "Gibbs Free Energy", formula: "ΔG = ΔH - TΔS", description: "Energy available to do work in a chemical reaction." },
        { title: "Equilibrium Constant", formula: "K = [products]/[reactants]", description: "Ratio of concentrations of products and reactants at equilibrium." },
        { title: "Le Chatelier's Principle", formula: "Shift ∝ ΔConditions", description: "System shifts to counteract a change in equilibrium conditions." },
        { title: "Entropy Change", formula: "ΔS = qrev/T", description: "Change in disorder during a reversible process." },
        { title: "Enthalpy Change", formula: "ΔH = q at constant P", description: "Heat exchanged at constant pressure." },
        { title: "Heat of Reaction", formula: "q = mcΔT", description: "Heat absorbed or released during a reaction." },
        { title: "Specific Heat Capacity", formula: "c = q/mΔT", description: "Heat required to change the temperature of a unit mass." },
        { title: "Hess's Law", formula: "ΔHreaction = ΣΔHproducts - ΣΔHreactants", description: "Total enthalpy change is the sum of individual steps." },
        { title: "Faraday's Law of Electrolysis", formula: "m = (ItM)/(nF)", description: "Mass of substance deposited depends on current and time." },
        { title: "Electrochemical Cell Potential", formula: "Ecell = Ered - Eox", description: "Cell potential is the difference between reduction and oxidation potentials." },
        { title: "Colligative Properties", formula: "ΔT = Kb × m", description: "Boiling point elevation depends on molality." },
        { title: "Osmotic Pressure", formula: "π = MRT", description: "Pressure required to stop osmosis." },
        { title: "Rate Law", formula: "Rate = k[A]ᵐ[B]ⁿ", description: "Rate of reaction depends on concentration of reactants." },
        { title: "Half-Life", formula: "t₁/₂ = 0.693/k", description: "Time required for half the reactant to decay." },
        { title: "pH Formula", formula: "pH = -log[H⁺]", description: "Measure of acidity." },
        { title: "pOH Formula", formula: "pOH = -log[OH⁻]", description: "Measure of basicity." },
        { title: "Relationship between pH and pOH", formula: "pH + pOH = 14", description: "Sum of pH and pOH in aqueous solution." },
        { title: "Ka and pKa", formula: "pKa = -logKa", description: "Strength of an acid." },
        { title: "Kb and pKb", formula: "pKb = -logKb", description: "Strength of a base." },
        { title: "Kw Formula", formula: "Kw = [H⁺][OH⁻]", description: "Autoionization constant of water." },
        { title: "Buffers", formula: "pH = pKa + log([A⁻]/[HA])", description: "pH of a buffer solution." },
        { title: "Redox Reaction Balancing", formula: "Oxidation = Reduction", description: "Electrons lost equal electrons gained." },
        { title: "Molarity", formula: "M = moles/L", description: "Concentration of a solution." },
        { title: "Molality", formula: "m = moles/kg", description: "Moles of solute per kilogram of solvent." },
        { title: "Percent Composition", formula: "% = (mass of element/total mass) × 100", description: "Percentage of each element in a compound." },
        { title: "Empirical Formula", formula: "Ratio of elements", description: "Simplest ratio of elements in a compound." },
        { title: "Molecular Formula", formula: "n × empirical formula", description: "Actual number of atoms in a molecule." },
        { title: "Avogadro's Number", formula: "6.022 × 10²³", description: "Number of particles in a mole." },
        { title: "Atomic Mass", formula: "Weighted Average", description: "Weighted average of isotopic masses." },
        { title: "Reaction Quotient", formula: "Q = [products]/[reactants]", description: "Indicates reaction direction." },
        { title: "Lattice Energy", formula: "U = k(q₁q₂)/r", description: "Energy required to separate ionic lattice." },
        { title: "Hydrolysis", formula: "AB + H₂O → AOH + HB", description: "Reaction with water to form hydroxide and acid." },
        { title: "Bond Energy", formula: "ΔH = ΣBond broken - ΣBond formed", description: "Energy required to break or form bonds." },
        { title: "Limiting Reagent", formula: "Reactant consumed first", description: "Determines maximum product formed." },
        { title: "Percentage Yield", formula: "Yield = (Actual/Theoretical) × 100", description: "Efficiency of a reaction." },
        { title: "Energy of a Photon", formula: "E = hf", description: "Energy associated with a photon." },
        { title: "Thermodynamic Efficiency", formula: "η = (W/Qh) × 100", description: "Efficiency of a heat engine." },
      ],
      engineering: [
          { title: "Stress", formula: "σ = F/A", description: "Force per unit area on a material." },
          { title: "Strain", formula: "ε = ΔL/L₀", description: "Deformation per unit original length." },
          { title: "Young's Modulus", formula: "E = σ/ε", description: "Material's stiffness or elasticity." },
          { title: "Hooke's Law (Engineering)", formula: "σ = Eε", description: "Stress is proportional to strain." },
          { title: "Moment of Inertia", formula: "I = ∫y²dA", description: "Resistance to bending or rotation." },
          { title: "Beam Deflection", formula: "δ = FL³/3EI", description: "Deflection of a beam under load." },
          { title: "Shear Stress", formula: "τ = VQ/It", description: "Stress due to shear force." },
          { title: "Thermal Expansion", formula: "ΔL = αL₀ΔT", description: "Change in length due to temperature." },
          { title: "Torque", formula: "T = Fd", description: "Rotational force times distance." },
          { title: "Power (Mechanical)", formula: "P = τω", description: "Rotational power in a system." },
          { title: "Fluid Flow Rate", formula: "Q = Av", description: "Volume of fluid flowing per unit time." },
          { title: "Bernoulli’s Equation", formula: "P + ½ρv² + ρgh = constant", description: "Energy conservation in fluid flow." },
          { title: "Reynolds Number", formula: "Re = ρvd/μ", description: "Dimensionless number for flow type." },
          { title: "Frictional Force", formula: "F = μN", description: "Force opposing motion due to friction." },
          { title: "Heat Transfer", formula: "Q = kAΔT/L", description: "Conduction of heat through a material." },
          { title: "Fourier's Law", formula: "q = -k∇T", description: "Rate of heat conduction." },
          { title: "Stress Concentration", formula: "K = σmax/σnominal", description: "Ratio of maximum to nominal stress." },
          { title: "Safety Factor", formula: "n = σfailure/σworking", description: "Design safety measure." },
          { title: "Efficiency of a Machine", formula: "η = (Pout/Pin) × 100", description: "Ratio of output to input power." },
          { title: "Electric Power", formula: "P = VI", description: "Power in an electrical circuit." },
          { title: "Heat Exchanger Effectiveness", formula: "ε = Qactual/Qmax", description: "Efficiency of heat transfer." },
          { title: "Hydraulic Power", formula: "P = QΔP", description: "Power in a hydraulic system." },
          { title: "Gear Ratio", formula: "GR = Nout/Nin", description: "Ratio of gear teeth." },
          { title: "Specific Energy", formula: "SE = E/m", description: "Energy per unit mass." },
          { title: "Buckling Load", formula: "Pcr = π²EI/L²", description: "Critical load causing buckling." },
          { title: "Thermal Efficiency", formula: "η = (Qin - Qout)/Qin", description: "Ratio of useful energy to input energy." },
          { title: "Compressive Strength", formula: "σ = F/A", description: "Material strength under compression." },
          { title: "Fluid Drag Force", formula: "F = ½ρv²CdA", description: "Force exerted by fluid flow." },
          { title: "Heat Capacity", formula: "C = Q/ΔT", description: "Heat energy required to raise temperature." },
          { title: "Pipe Flow Velocity", formula: "v = Q/A", description: "Velocity of fluid in a pipe." },
          { title: "Thermodynamic Work", formula: "W = -PΔV", description: "Work done by a system." },
          { title: "Boiling Heat Transfer", formula: "q = hA(Tsurface - Tsaturation)", description: "Rate of heat transfer during boiling." },
          { title: "Stress-Strain Relationship", formula: "σ = Eε", description: "Stress proportional to strain within elastic limit." },
          { title: "Truss Force", formula: "F = Tcosθ", description: "Force in a truss member." },
          { title: "Voltage Drop", formula: "V = IR", description: "Voltage loss across a resistor." },
          { title: "Thermal Resistance", formula: "R = L/kA", description: "Resistance to heat flow in a material." },
          { title: "Critical Reynolds Number", formula: "Re = 2300", description: "Value determining laminar to turbulent flow." },
          { title: "Tensile Stress", formula: "σ = F/A", description: "Stress due to tension." },
          { title: "Shear Modulus", formula: "G = τ/γ", description: "Material's resistance to shear." },
          { title: "Specific Weight", formula: "γ = ρg", description: "Weight per unit volume of a fluid." },
          { title: "Hydraulic Head", formula: "H = P/γ", description: "Height equivalent of fluid pressure." },
          { title: "Moment of a Force", formula: "M = Fd", description: "Rotational effect of a force." },
          { title: "Pipe Head Loss", formula: "hf = f(L/D)(v²/2g)", description: "Energy loss due to friction in pipes." },
          { title: "Rotational Kinetic Energy", formula: "KErot = ½Iω²", description: "Energy due to rotation." },
          { title: "Fluid Power", formula: "P = ρgQH", description: "Power in fluid systems." },
          { title: "Axial Load", formula: "P = σA", description: "Load applied along the axis of a member." },
          { title: "Welding Heat Input", formula: "H = VI/S", description: "Heat transferred during welding." },
          { title: "Circuit Resistance", formula: "Rtotal = R₁ + R₂ + ...", description: "Total resistance in a series circuit." },
          { title: "Inductor Energy", formula: "E = ½LI²", description: "Energy stored in an inductor." },
          { title: "Capacitor Energy", formula: "E = ½CV²", description: "Energy stored in a capacitor." },
        ],
    
  };

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Equation Library</h1>
      <p style={{ marginBottom: "30px", lineHeight: "1.8" }}>
        Explore a comprehensive collection of equations across Physics, Chemistry, and Engineering. Each equation is
        presented with a brief explanation to aid your understanding and application.
      </p>

      {Object.entries(equations).map(([category, eqs], idx) => (
        <div key={idx} style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#6a5acd", marginBottom: "20px" }}>{category.toUpperCase()}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}>
            {eqs.map((equation, index) => (
              <div
                key={index}
                style={{
                  padding: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <h3 style={{ marginBottom: "10px", color: "#333" }}>{equation.title}</h3>
                <h4 style={{ marginBottom: "10px", fontFamily: "monospace", color: "#6a5acd" }}>
                  {equation.formula}
                </h4>
                <p style={{ margin: 0, lineHeight: "1.5", color: "#555" }}>{equation.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EquationLibrary;
