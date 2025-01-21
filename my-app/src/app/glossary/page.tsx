"use client";

import React from "react";

const GlossaryPage = () => {
  const physicsGlossary = [
    { term: "Force", definition: "A push or pull acting upon an object." },
    { term: "Velocity", definition: "The rate of change of an object's position with time." },
    { term: "Acceleration", definition: "The rate of change of velocity with time." },
    { term: "Momentum", definition: "The product of an object's mass and velocity." },
    { term: "Work", definition: "The energy transferred by a force over a distance." },
    { term: "Power", definition: "The rate at which work is done." },
    { term: "Energy", definition: "The capacity to do work or produce change." },
    { term: "Thermodynamics", definition: "The study of heat, work, and energy." },
    { term: "Entropy", definition: "A measure of disorder or randomness in a system." },
    { term: "Newton's Laws", definition: "Three fundamental laws describing motion and forces." },
    { term: "Kinetic Energy", definition: "The energy an object has due to its motion." },
    { term: "Potential Energy", definition: "The energy an object has due to its position or configuration." },
    { term: "Friction", definition: "The resistance to motion of two surfaces in contact." },
    { term: "Gravitational Force", definition: "The force of attraction between two masses." },
    { term: "Electromagnetic Waves", definition: "Waves of electric and magnetic fields that propagate through space." },
    { term: "Refraction", definition: "The bending of light as it passes from one medium to another." },
    { term: "Reflection", definition: "The bouncing back of light or sound waves from a surface." },
    { term: "Diffraction", definition: "The bending of waves around obstacles or through openings." },
    { term: "Interference", definition: "The superposition of two or more waves resulting in a new wave pattern." },
    { term: "Polarization", definition: "The orientation of oscillations in a wave, especially light waves." },
    { term: "Coulomb's Law", definition: "The force between two charged objects is proportional to their charges and inversely proportional to the square of the distance between them." },
    { term: "Electric Field", definition: "A field around charged particles that exerts a force on other charges." },
    { term: "Magnetic Field", definition: "A field produced by moving charges or magnetic materials." },
    { term: "Ohm's Law", definition: "The current through a conductor is proportional to the voltage across it and inversely proportional to its resistance." },
    { term: "Resonance", definition: "The increase in amplitude of a vibration when a system is driven at its natural frequency." },
    { term: "Capacitance", definition: "The ability of a system to store an electric charge." },
    { term: "Inductance", definition: "The property of a conductor to oppose a change in current." },
    { term: "Photoelectric Effect", definition: "The emission of electrons from a material when light shines on it." },
    { term: "Quantum Mechanics", definition: "The study of particles on an atomic and subatomic scale." },
    { term: "Superposition", definition: "The principle that a particle can exist in multiple states simultaneously." },
    { term: "Wave-Particle Duality", definition: "The concept that particles exhibit both wave and particle properties." },
    { term: "Uncertainty Principle", definition: "The principle that the position and momentum of a particle cannot both be precisely determined at the same time." },
    { term: "Relativity", definition: "Einstein's theory describing the relationships between space, time, and gravity." },
    { term: "Black Hole", definition: "A region in space where gravity is so strong that nothing, not even light, can escape." },
    { term: "Doppler Effect", definition: "The change in frequency or wavelength of a wave in relation to an observer moving relative to the source." },
    { term: "Radiation", definition: "The emission of energy as electromagnetic waves or particles." },
    { term: "Nuclear Fission", definition: "The process of splitting a nucleus into smaller parts, releasing energy." },
    { term: "Nuclear Fusion", definition: "The process of combining smaller nuclei to form a larger nucleus, releasing energy." },
    { term: "Higgs Boson", definition: "A particle associated with the Higgs field, which gives particles mass." },
    { term: "Dark Matter", definition: "A form of matter that does not emit or interact with electromagnetic radiation, making it invisible." },
  ];

  const chemistryGlossary = [
    { term: "Acid", definition: "A substance that increases the hydrogen ion concentration in a solution." },
    { term: "Base", definition: "A substance that decreases the hydrogen ion concentration in a solution." },
    { term: "Atom", definition: "The smallest unit of matter that retains the properties of an element." },
    { term: "Molecule", definition: "A group of atoms bonded together, representing the smallest unit of a chemical compound." },
    { term: "Ion", definition: "An atom or molecule with a net electric charge due to the loss or gain of electrons." },
    { term: "Isotope", definition: "Atoms of the same element with different numbers of neutrons." },
    { term: "Covalent Bond", definition: "A bond formed when atoms share electrons." },
    { term: "Ionic Bond", definition: "A bond formed by the electrostatic attraction between oppositely charged ions." },
    { term: "Electronegativity", definition: "A measure of an atom's ability to attract electrons in a bond." },
    { term: "Periodic Table", definition: "A chart of the elements arranged by atomic number, electron configuration, and recurring chemical properties." },
    { term: "Avogadro's Number", definition: "The number of particles in one mole of a substance, approximately 6.022 × 10^23." },
    { term: "Mole", definition: "The amount of substance that contains as many particles as there are atoms in 12 grams of carbon-12." },
    { term: "Chemical Reaction", definition: "A process in which substances are transformed into different substances." },
    { term: "Catalyst", definition: "A substance that increases the rate of a chemical reaction without being consumed." },
    { term: "Activation Energy", definition: "The minimum energy required to initiate a chemical reaction." },
    { term: "Oxidation", definition: "The loss of electrons in a chemical reaction." },
    { term: "Reduction", definition: "The gain of electrons in a chemical reaction." },
    { term: "pH", definition: "A scale used to measure the acidity or basicity of a solution." },
    { term: "Solvent", definition: "The substance that dissolves a solute to form a solution." },
    { term: "Solute", definition: "The substance dissolved in a solvent to form a solution." },
    { term: "Hydrocarbon", definition: "Compounds composed of only carbon and hydrogen atoms." },
    { term: "Allotrope", definition: "Different structural forms of the same element in the same physical state." },
    { term: "Organic Chemistry", definition: "The study of carbon-containing compounds and their properties." },
    { term: "Inorganic Chemistry", definition: "The study of non-carbon-containing compounds and their properties." },
    { term: "Electrolysis", definition: "The process of using electricity to break a compound into its components." },
    { term: "Chemical Equilibrium", definition: "The state in which the concentrations of reactants and products remain constant over time." },
    { term: "Buffer", definition: "A solution that resists changes in pH when small amounts of acid or base are added." },
    { term: "Sublimation", definition: "The direct transition of a substance from a solid to a gas without passing through the liquid phase." },
    { term: "Deposition", definition: "The direct transition of a substance from a gas to a solid without passing through the liquid phase." },
    { term: "Enthalpy", definition: "The heat content of a system at constant pressure." },
    { term: "Entropy", definition: "A measure of the disorder or randomness in a system." },
    { term: "Le Chatelier's Principle", definition: "The principle that a system at equilibrium will adjust to counteract changes in conditions." },
    { term: "Valence Electrons", definition: "Electrons in the outermost energy level of an atom, involved in bonding." },
    { term: "Polarity", definition: "The distribution of electrical charge over the atoms joined by a bond." },
    { term: "Amphoteric", definition: "A substance that can act as both an acid and a base." },
    { term: "Precipitate", definition: "An insoluble solid formed during a chemical reaction in a solution." },
    { term: "Endothermic Reaction", definition: "A reaction that absorbs heat from its surroundings." },
    { term: "Exothermic Reaction", definition: "A reaction that releases heat to its surroundings." },
    { term: "Titration", definition: "A technique to determine the concentration of a solute in a solution." },
    { term: "Atomic Number", definition: "The number of protons in the nucleus of an atom." },
    { term: "Atomic Mass", definition: "The weighted average mass of the atoms of an element." },
    { term: "Radioactivity", definition: "The spontaneous emission of radiation by an unstable atomic nucleus." },
    { term: "Half-Life", definition: "The time required for half of the radioactive nuclei in a sample to decay." },
    { term: "Chelation", definition: "The process of forming a complex between a metal ion and a large molecule with multiple bonds." },
    { term: "Lattice Energy", definition: "The energy required to separate a mole of an ionic solid into gaseous ions." },
    { term: "Avogadro's Law", definition: "The volume of a gas is directly proportional to the number of moles of gas at constant temperature and pressure." },
  ];

  const engineeringGlossary = [
    { term: "Actuator", definition: "A device that converts energy into motion." },
    { term: "Adhesion", definition: "The property of materials to stick to other surfaces." },
    { term: "Aerodynamics", definition: "The study of how air flows around objects." },
    { term: "Alloy", definition: "A mixture of two or more metals to create a new material." },
    { term: "Bearing", definition: "A machine element that allows constrained motion with minimal friction." },
    { term: "Beam", definition: "A structural element that primarily resists bending." },
    { term: "CAD", definition: "Software used for creating detailed 2D or 3D designs." },
    { term: "Compressive Strength", definition: "The ability of a material to withstand compression." },
    { term: "Corrosion", definition: "The degradation of metals due to environmental factors." },
    { term: "Elasticity", definition: "The ability of a material to return to its original shape after deformation." },
    { term: "Entropy", definition: "A measure of disorder in a thermodynamic system." },
    { term: "Fatigue", definition: "The weakening of a material caused by repetitive stress over time." },
    { term: "Fluid Dynamics", definition: "The study of fluids in motion." },
    { term: "Gear Ratio", definition: "The ratio between the number of teeth on two meshing gears." },
    { term: "Heat Exchanger", definition: "A device used to transfer heat between two or more fluids." },
    { term: "Kinematics", definition: "The study of motion without considering forces." },
    { term: "Load Factor", definition: "The ratio of applied load to the safe load limit." },
    { term: "Machining", definition: "A process of shaping materials by removing unwanted material." },
    { term: "Moment of Inertia", definition: "A measure of an object's resistance to rotational motion." },
    { term: "Nanotechnology", definition: "Engineering at the scale of atoms and molecules." },
    { term: "Nozzle", definition: "A device designed to control the flow of a fluid." },
    { term: "Orthogonal Cutting", definition: "A machining process where the cutting edge is perpendicular to the tool." },
    { term: "Piping", definition: "A network of pipes used to transport fluids or gases." },
    { term: "Plasticity", definition: "The property of a material to undergo permanent deformation." },
    { term: "Reinforced Concrete", definition: "Concrete embedded with steel bars for added strength." },
    { term: "Resilience", definition: "The ability of a material to absorb energy and return to its shape." },
    { term: "Shear Stress", definition: "A force that causes layers of material to slide against each other." },
    { term: "Stiffness", definition: "The rigidity of an object and its ability to resist deformation." },
    { term: "Strain", definition: "The deformation of a material due to applied stress." },
    { term: "Stress", definition: "The internal force per unit area within a material." },
    { term: "Surface Tension", definition: "The elastic tendency of a fluid surface to minimize its area." },
    { term: "Tensile Strength", definition: "The resistance of a material to breaking under tension." },
    { term: "Thermal Expansion", definition: "The increase in size of a material when heated." },
    { term: "Torque", definition: "A rotational force that causes an object to rotate." },
    { term: "Turbulence", definition: "Irregular fluid flow characterized by vortices and eddies." },
    { term: "Valve", definition: "A device that regulates fluid flow in a system." },
    { term: "Viscosity", definition: "A measure of a fluid's resistance to flow." },
    { term: "Welding", definition: "A process of joining materials, usually metals, by melting and fusing them." },
    { term: "Yield Strength", definition: "The stress at which a material begins to deform plastically." },
    { term: "Zener Diode", definition: "A semiconductor device that allows current to flow in reverse under specific conditions." },
    { term: "Thermodynamics", definition: "The study of heat, work, and energy in systems." },
    { term: "Circuit Breaker", definition: "A safety device that interrupts excessive current flow." },
    { term: "Insulation", definition: "Material used to reduce heat transfer or sound transmission." },
    { term: "Buoyancy", definition: "The force that causes objects to float in a fluid." },
    { term: "Efficiency", definition: "The ratio of useful work output to total energy input." },
    { term: "Friction", definition: "The resistance to motion between two surfaces in contact." },
    { term: "Radiation", definition: "The transfer of energy as electromagnetic waves." },
    { term: "Additive Manufacturing", definition: "The process of creating objects by adding material layer by layer (e.g., 3D printing)." },
    { term: "Anisotropy", definition: "The property of being directionally dependent." },
    { term: "Creep", definition: "The slow deformation of a material under constant stress over time." },
    { term: "Fluidization", definition: "The process of converting a solid into a fluid-like state by passing a gas or liquid through it." },
    { term: "Mechatronics", definition: "An interdisciplinary field combining mechanical, electrical, and software engineering." },
    { term: "Redundancy", definition: "The inclusion of extra components in a system for reliability." },
    { term: "Finite Element Analysis (FEA)", definition: "A computational technique used to predict how structures respond to forces and stresses." },
    { term: "Crystallography", definition: "The study of crystal structures and their properties." },
    { term: "Piezoelectricity", definition: "The property of certain materials to generate an electric charge when mechanically stressed." },
    { term: "Stress Concentration", definition: "The accumulation of stress in a localized area of a material." },
    { term: "Factor of Safety", definition: "The ratio of the maximum load a structure can handle to its intended load." },
    { term: "Thermal Conductivity", definition: "The ability of a material to conduct heat." },
  ];

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Glossary</h1>

      {/* Physics Glossary */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Physics Glossary</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {physicsGlossary.map((entry, index) => (
            <li
              key={index}
              style={{
                marginBottom: "15px",
                padding: "10px",
                backgroundColor: "#f5f5f5",
                borderRadius: "5px",
              }}
            >
              <strong>{entry.term}</strong>: {entry.definition}
            </li>
          ))}
        </ul>
      </section>

      {/* Chemistry Glossary */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Chemistry Glossary</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {chemistryGlossary.map((entry, index) => (
            <li
              key={index}
              style={{
                marginBottom: "15px",
                padding: "10px",
                backgroundColor: "#f5f5f5",
                borderRadius: "5px",
              }}
            >
              <strong>{entry.term}</strong>: {entry.definition}
            </li>
          ))}
        </ul>
      </section>

      {/* Engineering Glossary */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Engineering Glossary</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {engineeringGlossary.map((entry, index) => (
            <li
              key={index}
              style={{
                marginBottom: "15px",
                padding: "10px",
                backgroundColor: "#f5f5f5",
                borderRadius: "5px",
              }}
            >
              <strong>{entry.term}</strong>: {entry.definition}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default GlossaryPage;
