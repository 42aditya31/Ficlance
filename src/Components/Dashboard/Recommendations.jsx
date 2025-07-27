import { RiFolderAddLine, RiRoadMapLine, RiTeamLine, RiArrowRightLine } from 'react-icons/ri';

const Recommendations = () => {
  return (
    <div className="grid grid-cols-1 p-8 rounded-2xl bg-white gap-4">
      {/* Project Recommendation */}
      <div className="p-4 border border-gray-100 rounded-lg hover:border-primary/20 hover:bg-primary/5 transition">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
            <RiFolderAddLine className="text-green-600 text-lg" />
          </div>
          <h3 className="font-medium text-gray-900">Try This Project Next</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Authentication System with OAuth - This project aligns with your backend development goals.
        </p>
        <button className="text-primary text-sm font-medium hover:underline flex items-center whitespace-nowrap">
          View Project
          <div className="w-4 h-4 ml-1 flex items-center justify-center">
            <RiArrowRightLine />
          </div>
        </button>
      </div>

      {/* Learning Path Recommendation */}
      <div className="p-4 border border-gray-100 rounded-lg hover:border-primary/20 hover:bg-primary/5 transition">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
            <RiRoadMapLine className="text-purple-600 text-lg" />
          </div>
          <h3 className="font-medium text-gray-900">Advanced Frontend Path</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          You're 70% ready for our Advanced Frontend Developer learning path. Complete 2 more projects to unlock.
        </p>
        <button className="text-primary text-sm font-medium hover:underline flex items-center whitespace-nowrap">
          View Learning Path
          <div className="w-4 h-4 ml-1 flex items-center justify-center">
            <RiArrowRightLine />
          </div>
        </button>
      </div>

      {/* Collaboration Recommendation */}
      <div className="p-4 border border-gray-100 rounded-lg hover:border-primary/20 hover:bg-primary/5 transition">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
            <RiTeamLine className="text-yellow-600 text-lg" />
          </div>
          <h3 className="font-medium text-gray-900">Join a Team Project</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Collaborative E-commerce Platform - 3 developers are looking for a frontend specialist to join.
        </p>
        <button className="text-primary text-sm font-medium hover:underline flex items-center whitespace-nowrap">
          Learn More
          <div className="w-4 h-4 ml-1 flex items-center justify-center">
            <RiArrowRightLine />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Recommendations;
