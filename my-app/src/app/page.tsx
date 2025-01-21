import React from "react";
import EquationOfTheWeek from "../components/EquationOfTheWeek";
import FeaturedProjects from "../components/FeaturedProjects";
import TrendingArticles from "../components/TrendingArticles";

const HomePage = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Equation of the Week Section */}
      <EquationOfTheWeek />
      <FeaturedProjects />
      <TrendingArticles />
    </div>
  );
};

export default HomePage;
