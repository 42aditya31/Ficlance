import React from "react";
import NavbarBelowSection from "../Components/NewProject/Search";
import SearchFilterSection from "../Components/NewProject/SearchFilterSection";

const NewProject = () => {
  return (
    <div>
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
    </div>
  );
};

export default NewProject;
