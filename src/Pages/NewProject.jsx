import React from "react";
import NavbarBelowSection from "../Components/NewProject/Search";
import SearchFilterSection from "../Components/NewProject/SearchFilterSection";
import ProjectSection from "../Components/NewProject/ProjectSection";
import SimulationParameters from "../Components/NewProject/SimulationParameters";

const NewProject = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavbarBelowSection />
      <div className="p-4 md:p-8">
        <SearchFilterSection
          onAddSkill={(skill) => alert(`Added skill: ${skill}`)}
          onRemoveSkill={(skill) => console.log("Removed:", skill)}
          onDifficultyChange={(difficulty) =>
            console.log("Difficulty:", difficulty)
          }
          onDurationChange={(duration) => console.log("Duration:", duration)}
        />
      </div>
      <ProjectSection/>
      <SimulationParameters/>
    </div>
  );
};

export default NewProject;
