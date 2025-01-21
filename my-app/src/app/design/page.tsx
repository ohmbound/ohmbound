"use client";

import React from "react";

const FeaturedProjects = () => {
  const projects = {
    physics: [
        { title: "Build a Simple Pendulum", description: "Investigate the effects of length on oscillation period." },
        { title: "Magnetic Levitation Experiment", description: "Use magnets to demonstrate levitation principles." },
        { title: "DIY Cloud Chamber", description: "Detect cosmic rays using alcohol vapor." },
        { title: "Build a Simple Electromagnet", description: "Explore the relationship between current and magnetic field strength." },
        { title: "Construct a Solar Oven", description: "Investigate heat concentration using reflective surfaces." },
        { title: "Friction Experiment", description: "Measure frictional force using different materials and surfaces." },
        { title: "Investigate Projectile Motion", description: "Analyze the effects of launch angle on range." },
        { title: "Build a Wind Turbine", description: "Test different blade designs for energy efficiency." },
        { title: "DIY Van de Graaff Generator", description: "Explore static electricity and charge buildup." },
        { title: "Water Rocket Physics", description: "Test the effects of water volume on launch height." },
        { title: "Design a Simple Electric Motor", description: "Investigate the interaction of magnets and current." },
        { title: "Sound Wave Experiment", description: "Visualize sound waves using a Ruben’s tube." },
        { title: "Build a Tesla Coil", description: "Demonstrate wireless energy transfer." },
        { title: "Experiment with Lenses", description: "Explore focal length and magnification using convex lenses." },
        { title: "Balloon-Powered Car", description: "Demonstrate Newton’s third law with a simple car model." },
        { title: "Centripetal Force Demonstration", description: "Investigate the relationship between radius and velocity." },
        { title: "Double-Slit Experiment", description: "Recreate Young’s experiment to explore wave interference." },
        { title: "Build a Water Clock", description: "Measure time using water flow." },
        { title: "DIY Spectrometer", description: "Analyze the spectrum of light from various sources." },
        { title: "Thermoelectric Generator", description: "Generate electricity using a temperature gradient." },
        { title: "Solar Panel Efficiency Test", description: "Analyze the effects of tilt angle on energy output." },
        { title: "Build a Seismometer", description: "Detect vibrations and simulate earthquake conditions." },
        { title: "Resonance Experiment", description: "Find natural frequencies of objects like strings or rods." },
        { title: "Construct a Newton’s Cradle", description: "Demonstrate conservation of momentum and energy." },
        { title: "Laser Diffraction Experiment", description: "Explore the diffraction pattern of light through slits." },
        { title: "DIY Hovercraft", description: "Build a model to demonstrate principles of air pressure." },
        { title: "DIY Foucault Pendulum", description: "Demonstrate Earth’s rotation using a long pendulum." },
        { title: "Thermal Conductivity Test", description: "Compare heat conduction in different metals." },
        { title: "DIY Faraday Cage", description: "Block electromagnetic signals using conductive materials." },
        { title: "Light Polarization Experiment", description: "Use filters to investigate polarization of light." },
        { title: "DIY Magnetic Compass", description: "Build a basic compass using a magnetized needle." },
        { title: "Candle Thermodynamics", description: "Analyze heat transfer from a candle flame." },
        { title: "Build a Simple Gyroscope", description: "Explore angular momentum and stability." },
        { title: "Experiment with Surface Tension", description: "Test how detergents affect surface tension of water." },
        { title: "DIY IR Detector", description: "Detect infrared light using a phone camera or special sensors." },
        { title: "Static Electricity Experiment", description: "Use a balloon to observe electrostatic attraction." },
        { title: "Investigate Terminal Velocity", description: "Analyze the fall of objects in a fluid." },
        { title: "DIY Magnetic Linear Accelerator", description: "Use magnets to accelerate a projectile." },
        { title: "DIY Balloon Barometer", description: "Measure air pressure changes using a balloon." },
        { title: "Study Doppler Effect", description: "Demonstrate frequency shift due to relative motion." },
        { title: "Cloud in a Bottle", description: "Create a cloud using pressure changes in a sealed bottle." },
        { title: "Heat Transfer in Liquids", description: "Investigate convection currents in liquids." },
        { title: "DIY Water Turbine", description: "Build a model to explore fluid energy transfer." },
        { title: "DIY Solar Cell Phone Charger", description: "Convert solar energy into usable electricity." },
        { title: "Investigate Buoyancy", description: "Analyze Archimedes' principle using floating objects." },
        { title: "Magnetic Field Visualization", description: "Use iron filings to observe magnetic field patterns." },
        { title: "DIY Pressure Cooker Science", description: "Explore boiling point changes at different pressures." },
        { title: "DIY Capacitor Experiment", description: "Store and discharge energy using DIY capacitors." },
        { title: "Thermal Expansion of Liquids", description: "Measure the expansion of water under heat." },
        { title: "DIY Electric Generator", description: "Generate electricity using mechanical motion." },
        { title: "DIY Stirling Engine", description: "Build a simple engine powered by heat differentials." },
        { title: "Model Rocket Physics", description: "Study propulsion and aerodynamics in rocket launches." },
    ],
    chemistry: [
        { title: "Build a pH Meter", description: "Create a tool to measure acidity in liquids." },
        { title: "Electrolysis of Water", description: "Separate water into hydrogen and oxygen gases." },
        { title: "Chemical Reaction Rates", description: "Investigate how temperature affects reaction speed." },
        { title: "Crystallization Experiment", description: "Grow crystals using supersaturated solutions." },
        { title: "Build a Homemade Battery", description: "Generate electricity using common household items." },
        { title: "Acid-Base Titration", description: "Determine the concentration of an unknown solution." },
        { title: "Endothermic vs. Exothermic Reactions", description: "Compare temperature changes in chemical reactions." },
        { title: "DIY Lava Lamp", description: "Use oil, water, and effervescence to create a visual display." },
        { title: "Exploring Solubility", description: "Test how temperature and solvents affect solubility." },
        { title: "Color Change Reactions", description: "Investigate pH changes using natural indicators." },
        { title: "Chemical Kinetics Experiment", description: "Study reaction rates with different concentrations." },
        { title: "Density Experiment", description: "Compare densities of liquids by layering them." },
        { title: "Gas Laws Experiment", description: "Demonstrate Boyle’s or Charles’s law using balloons." },
        { title: "Build a Simple Fuel Cell", description: "Convert hydrogen and oxygen into electricity." },
        { title: "Reaction of Metals with Acids", description: "Explore gas evolution reactions." },
        { title: "Soap-Making Experiment", description: "Create soap using fats and sodium hydroxide." },
        { title: "DIY Fire Extinguisher", description: "Produce CO₂ to extinguish a flame." },
        { title: "Reaction Time with Catalysts", description: "Compare reaction rates with and without a catalyst." },
        { title: "Explore Redox Reactions", description: "Study oxidation and reduction in chemical reactions." },
        { title: "Chroma: Paper Chromatography", description: "Separate pigments from inks or leaves." },
        { title: "Chemical Magic: Invisible Ink", description: "Write with solutions that reveal under heat." },
        { title: "Polymer Creation", description: "Make slime or bouncy balls using polymers." },
        { title: "DIY Alka-Seltzer Rockets", description: "Investigate chemical reactions that release gas." },
        { title: "Exploring Buffers", description: "Test how buffers maintain pH in solutions." },
        { title: "Flame Test Experiment", description: "Identify metal ions based on flame color." },
        { title: "Metal Displacement Reactions", description: "Explore reactivity series of metals." },
        { title: "Carbonation Experiment", description: "Study factors that affect fizz in sodas." },
        { title: "DIY Bioplastic", description: "Create biodegradable plastic using natural materials." },
        { title: "Reaction of Baking Soda and Vinegar", description: "Measure gas production rates." },
        { title: "Experiment with Diffusion", description: "Observe diffusion of molecules in liquids." },
        { title: "Grow Alum Crystals", description: "Use alum solutions to grow large crystals." },
        { title: "Test Water Hardness", description: "Investigate mineral content in local water supplies." },
        { title: "Exploring Emulsions", description: "Create stable emulsions using surfactants." },
        { title: "DIY Aspirin Synthesis", description: "Synthesize aspirin and purify the product." },
        { title: "Neutralization Reactions", description: "Explore acid-base reactions using indicators." },
        { title: "Homemade Oxygen Generator", description: "Generate oxygen from hydrogen peroxide." },
        { title: "Supercooling Water", description: "Demonstrate supercooled water freezing instantly." },
        { title: "Chemical Reactions in Food", description: "Investigate Maillard reaction in cooking." },
        { title: "Test for Starch in Food", description: "Use iodine to identify starch presence." },
        { title: "Explore Electroplating", description: "Coat metals using electrochemical processes." },
        { title: "Hydrophobic and Hydrophilic Surfaces", description: "Compare water behavior on different materials." },
        { title: "Luminol Chemiluminescence", description: "Create glowing solutions in the dark." },
        { title: "Experiment with Bioluminescence", description: "Study glowing organisms like fireflies." },
        { title: "The Effect of Light on Photosynthesis", description: "Investigate CO₂ uptake in plants." },
        { title: "Chemical Garden Experiment", description: "Grow colored crystals in a silicate solution." },
        { title: "DIY Carbon Dioxide Detector", description: "Use limewater to detect CO₂." },
        { title: "Conductivity of Ionic Solutions", description: "Compare electrical conductivity of solutions." },
        { title: "Temperature Effect on Enzymes", description: "Study how temperature affects enzyme activity." },
        { title: "Chemical Analysis of Soaps", description: "Compare properties of different soap brands." },
        { title: "Evaporation Rates of Liquids", description: "Investigate factors affecting evaporation." },
    ],
    engineering: [
        { title: "Wind Turbine Design", description: "Test different blade designs for energy efficiency." },
        { title: "DIY Hydraulic Lift", description: "Demonstrate Pascal’s principle using syringes." },
        { title: "Build a Bridge Model", description: "Test load-bearing capacity with different designs." },
        { title: "DIY Hovercraft", description: "Build a model to demonstrate principles of air pressure." },
        { title: "Design a Solar Tracker", description: "Build a system that follows the sun’s path for optimal energy." },
        { title: "Construct a Robotic Arm", description: "Build a simple robotic arm using servos." },
        { title: "Build a Water Purifier", description: "Filter water using natural and synthetic materials." },
        { title: "DIY Catapult", description: "Experiment with launch angles to optimize range." },
        { title: "Build a Rube Goldberg Machine", description: "Create a chain reaction to perform a simple task." },
        { title: "Design a Structural Dome", description: "Explore strength-to-weight ratios using geometric domes." },
        { title: "DIY Solar Car", description: "Build a car powered by solar energy." },
        { title: "DIY Stirling Engine", description: "Construct a heat engine powered by temperature differences." },
        { title: "Build a Drone", description: "Assemble and program a quadcopter drone." },
        { title: "Create a Prosthetic Hand", description: "Build a mechanical hand using simple materials." },
        { title: "DIY Electric Bike", description: "Convert a regular bike into an electric-powered vehicle." },
        { title: "Design a Suspension Bridge", description: "Model a suspension bridge and test its load capacity." },
        { title: "Construct a Wind Tunnel", description: "Test aerodynamic designs using a DIY wind tunnel." },
        { title: "Build a Vacuum Chamber", description: "Explore the effects of reduced pressure on objects." },
        { title: "Design a Water Harvesting System", description: "Collect and filter rainwater using an efficient system." },
        { title: "DIY Smart Home System", description: "Build an automated home system using IoT devices." },
        { title: "Design a Vertical Farm", description: "Create a model for efficient urban farming." },
        { title: "Build a Hoverboard", description: "Use magnetic levitation to construct a hoverboard prototype." },
        { title: "DIY Seismometer", description: "Detect vibrations and simulate earthquake conditions." },
        { title: "Construct a 3D Printer", description: "Assemble a basic 3D printer for prototyping." },
        { title: "DIY Automated Irrigation System", description: "Design a system that waters plants automatically." },
        { title: "Build a Battery Management System", description: "Monitor and manage rechargeable batteries efficiently." },
        { title: "DIY Robotic Vacuum Cleaner", description: "Build and program a basic robotic vacuum cleaner." },
        { title: "Build a Water Wheel", description: "Harness energy from flowing water to generate power." },
        { title: "DIY Magnetic Linear Accelerator", description: "Accelerate a projectile using magnets." },
        { title: "Construct a Smart Mirror", description: "Create a mirror that displays weather, time, and news." },
        { title: "Build a Firefighting Robot", description: "Design a robot that can detect and extinguish flames." },
        { title: "DIY Electric Generator", description: "Generate electricity using mechanical motion." },
        { title: "Design a Solar Water Heater", description: "Build a system to heat water using solar energy." },
        { title: "Build a Tidal Energy Generator", description: "Harness energy from tides to generate electricity." },
        { title: "DIY Air Purifier", description: "Design a system to filter and clean air in a room." },
        { title: "Build an Autonomous Car", description: "Program a car to navigate using sensors and AI." },
        { title: "DIY Floating City Model", description: "Design a self-sustaining floating city model." },
        { title: "Build a Robotic Gripper", description: "Construct a gripper to pick up and move objects." },
        { title: "Design a Smart Traffic Light", description: "Use sensors to optimize traffic light timing." },
        { title: "DIY Weather Station", description: "Measure temperature, humidity, and wind speed." },
        { title: "Build a Biomechanical Prosthesis", description: "Design a functional and affordable prosthetic limb." },
        { title: "Create a Miniature Wind Farm", description: "Test efficiency with multiple small turbines." },
        { title: "DIY Electromagnetic Crane", description: "Lift heavy metal objects using electromagnets." },
        { title: "Build a Solar-Powered Phone Charger", description: "Convert solar energy into usable electricity." },
        { title: "Construct a High-Pressure Pump", description: "Design a pump for efficient fluid transport." },
        { title: "DIY Smart Waste Bin", description: "Build a bin that sorts waste into categories automatically." },
        { title: "Design an Exoskeleton", description: "Build a wearable device to enhance human strength." },
        { title: "Create an Automated Greenhouse", description: "Control temperature and watering using sensors." },
        { title: "DIY Piezoelectric Generator", description: "Generate electricity from vibrations or pressure." },
        { title: "Build a Laser Engraver", description: "Construct a machine to engrave designs on surfaces." },
    ],
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Featured Projects</h1>

      {/* Physics Section */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #6a5acd", paddingBottom: "10px" }}>Physics Projects</h2>
        <ul>
          {projects.physics.map((project, index) => (
            <li key={index} style={{ marginBottom: "15px" }}>
              <strong>{project.title}</strong>
              <p style={{ margin: "5px 0", fontSize: "0.9rem", color: "#555" }}>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Chemistry Section */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #6a5acd", paddingBottom: "10px" }}>Chemistry Projects</h2>
        <ul>
          {projects.chemistry.map((project, index) => (
            <li key={index} style={{ marginBottom: "15px" }}>
              <strong>{project.title}</strong>
              <p style={{ margin: "5px 0", fontSize: "0.9rem", color: "#555" }}>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Engineering Section */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #6a5acd", paddingBottom: "10px" }}>Engineering Projects</h2>
        <ul>
          {projects.engineering.map((project, index) => (
            <li key={index} style={{ marginBottom: "15px" }}>
              <strong>{project.title}</strong>
              <p style={{ margin: "5px 0", fontSize: "0.9rem", color: "#555" }}>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedProjects;
