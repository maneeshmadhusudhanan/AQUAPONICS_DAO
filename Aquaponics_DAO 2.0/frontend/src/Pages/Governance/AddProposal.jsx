import React from "react";
// import { Button } from "../../components/ui/moving-border";
// import { Magnetic } from "../../components/ui/magnetic-button";

const AddProposal = () => {
  return (
    <div className="mx-[10%] mt-[3%]">
      <div className="flex items-center justify-center gap-[5%]">
        <div className="w-[40%] space-y-3">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Propose Certificate
          </h2>
          <input
            type="text"
            placeholder="Certificate ID"
            className="w-full text-gray-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Name"
            className="w-full text-gray-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Course"
            className="w-full text-gray-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Grade"
            className="w-full text-gray-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="date"
            className="w-full text-gray-800 border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition">
            Propose Certificate
          </button>
        </div>

        <div className="space-y-3 w-[40%] mt-[-1%]">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Voting Section
          </h2>
          <select className="w-[30%] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black">
            <option>For</option>
            <option>Abstain</option>
            <option>Against</option>
          </select>

          <textarea
            type="text"
            placeholder="Enter voting reason"
            className="w-full h-20 border text-gray-800 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="w-full bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600 transition">
            Vote
          </button>

          <button className="w-full bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600 transition">
            Queue Proposal
          </button>

          <button className="w-full bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600 transition">
            Execute Proposal
          </button>


        </div>
      </div>
    </div>
  );
};

export default AddProposal;
