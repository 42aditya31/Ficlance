import React from "react";
import InprogressProject from "./InprogressProject";

const MainGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <div className="lg:col-span-2">
        <InprogressProject/>
      </div>
    </div>
  );
};

export default MainGrid;
