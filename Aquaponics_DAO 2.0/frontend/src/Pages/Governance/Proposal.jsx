
import React from "react";
import { Plus, Leaf, CheckCircle, XCircle } from "lucide-react";

const GovernanceTable = () => {
  const proposals = [
    {
      title: "Update USDe Comet on Mantle to support more collaterals",
      status: "ACTIVE",
      date: "Feb 7th, 2025",
      governor: "Compound Governor",
      votesFor: "320.07K",
      votesAgainst: "0",
      totalVotes: "320.07K",
      addresses: "8 addresses",
    },
    {
      title: "Update USDC, USDT and WETH Comets on Optimism to support...",
      status: "ACTIVE",
      date: "Feb 7th, 2025",
      governor: "Compound Governor",
      votesFor: "320.07K",
      votesAgainst: "0",
      totalVotes: "320.07K",
      addresses: "9 addresses",
    },
  ];

  // Function that would handle navigation (to be implemented with your routing solution)
  const navigateTo = (path) => {
    console.log(`Navigate to: ${path}`);
    // This is where you would implement your navigation logic
    // For example with window.location or a routing library
  };

  return (
    <div className="relative px-4 py-8 mx-auto max-w-6xl">
      {/* Background with glass morphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 to-teal-50/90 backdrop-blur-sm rounded-xl"></div>

      <div className="relative bg-white/60 backdrop-blur-md rounded-xl shadow-lg border border-green-100 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border-b border-green-200">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-2 rounded-lg shadow-md">
              <Leaf size={20} className="text-white" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              All Proposals
            </h2>
          </div>
          
          <button 
            onClick={() => navigateTo("/governance/addproposal")}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Plus size={18} />
            <span>New Proposal</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-green-100">
                <th className="px-6 py-4 text-left text-sm font-semibold text-green-800">Proposal</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-green-800">Votes For</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-green-800">Votes Against</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-green-800">Total Votes</th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody className="divide-y divide-green-100">
              {proposals.map((proposal, index) => (
                <tr 
                  key={index} 
                  className="hover:bg-green-50/50 transition-colors duration-200 cursor-pointer"
                  onClick={() => navigateTo(`/governance/proposal/${index}`)}
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-800 hover:text-green-700 transition-colors">
                        {proposal.title}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="bg-gradient-to-r from-green-100 to-teal-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                          {proposal.status}
                        </span>
                        <span className="text-xs text-gray-500">{proposal.date}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></span>
                        {proposal.governor}
                      </p>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex justify-end items-center gap-2 text-green-600 font-medium">
                      <CheckCircle size={16} className="text-green-500" />
                      <span>{proposal.votesFor}</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex justify-end items-center gap-2 text-red-500 font-medium">
                      {parseInt(proposal.votesAgainst) > 0 ? (
                        <XCircle size={16} className="text-red-500" />
                      ) : null}
                      <span>{proposal.votesAgainst}</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-green-100 to-teal-100 px-3 py-1 rounded-full text-green-700 font-medium text-sm shadow-sm">
                        {proposal.totalVotes}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Empty state - only shown when no proposals exist */}
        {proposals.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <div className="bg-gradient-to-br from-green-100 to-teal-100 p-4 rounded-full mb-4">
              <Leaf size={32} className="text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No proposals yet</h3>
            <p className="text-gray-500 mb-6 max-w-md">
              Create the first proposal for the Aquaponics DAO to start building the future of sustainable farming
            </p>
            <button 
              onClick={() => navigateTo("/governance/addproposal")}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300"
            >
              <Plus size={18} />
              <span>Create First Proposal</span>
            </button>
          </div>
        )}
        
        {/* Pagination - can be enabled if needed */}
        <div className="flex justify-between items-center p-6 border-t border-green-100">
          <p className="text-sm text-gray-500">{proposals.length} proposals found</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-md border border-green-200 text-green-700 hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <button className="px-3 py-1 rounded-md bg-gradient-to-r from-green-100 to-teal-100 text-green-700 hover:from-green-200 hover:to-teal-200 shadow-sm">
              1
            </button>
            <button className="px-3 py-1 rounded-md border border-green-200 text-green-700 hover:bg-green-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceTable;




// import React from "react";
// import { Link } from "react-router-dom";

// const GovernanceTable = () => {
//   const proposals = [
//     {
//       title: "Update USDe Comet on Mantle to support more collaterals",
//       status: "ACTIVE",
//       date: "Feb 7th, 2025",
//       governor: "Compound Governor",
//       votesFor: "320.07K",
//       votesAgainst: "0",
//       totalVotes: "320.07K",
//       addresses: "8 addresses",
//     },
//     {
//       title: "Update USDC, USDT and WETH Comets on Optimism to support...",
//       status: "ACTIVE",
//       date: "Feb 7th, 2025",
//       governor: "Compound Governor",
//       votesFor: "320.07K",
//       votesAgainst: "0",
//       totalVotes: "320.07K",
//       addresses: "9 addresses",
//     },
//   ];

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 mx-[8%] border border-gray-200">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4 border-b border-gray-400 pb-3">
//         <h2 className="text-lg font-semibold text-purple-600">All Proposals</h2>
//         <Link to="/governance/addproposal">
//         <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
//           + New proposal
//         </button>
//         </Link>
//       </div>

//       {/* Table */}
//       <div className=" rounded-lg overflow-hidden">
//         <table className="min-w-full divide-y divide-gray-200 border-collapse">
//           {/* Table Header */}
//           <thead className="">
//             <tr>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Proposal</th>
//               <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">Votes for</th>
//               <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">Votes against</th>
//               <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">Total votes</th>
//             </tr>
//           </thead>

//           {/* Table Body */}
//           <tbody className="bg-white divide-y divide-gray-200">
//             {proposals.map((proposal, index) => (
//               <tr key={index}>
//                 <td className="px-4 py-4">
//                   <div>
//                     <p className="text-sm font-semibold text-black">{proposal.title}</p>
//                     <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
//                       <span className="bg-purple-200 text-purple-600 px-2 py-1 rounded-md text-xs font-semibold">
//                         {proposal.status}
//                       </span>
//                       <span>{proposal.date}</span>
//                     </div>
//                     <p className="text-xs text-gray-500 mt-2">{proposal.governor}</p>
//                   </div>
//                 </td>
//                 <td className="px-4 py-2 text-right text-green-500 font-medium">{proposal.votesFor}</td>
//                 <td className="px-4 py-2 text-right text-red-500 font-medium">{proposal.votesAgainst}</td>
//                 <td className="px-4 py-2 text-right font-medium text-black">{proposal.totalVotes}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default GovernanceTable;
