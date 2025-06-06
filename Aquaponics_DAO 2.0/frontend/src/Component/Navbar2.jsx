import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

const GovernanceNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black-100/70 backdrop-blur-md border-b border-green-200/50"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-2 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-green-300/50">
              <Leaf size={24} className="text-white" />
            </div>
            <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent group-hover:from-green-500 group-hover:to-teal-500 transition-all duration-300">
              AQUAPONICS DAO
            </h1>
          </Link>

          {/* Hamburger menu button (mobile) */}
          <button
            className="md:hidden text-green-600 hover:text-green-800 transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavButton to="/governance/proposals">PROPOSALS</NavButton>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (only visible when isOpen = true) */}
      <div
        className={`md:hidden absolute w-full bg-white/80 backdrop-blur-lg shadow-md border-t border-green-100 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center py-4 gap-4">
          <NavButtonMobile to="/governance/">Home</NavButtonMobile>
          <NavButtonMobile to="/governance/proposals">Proposals</NavButtonMobile>
        </div>
      </div>
    </nav>
  );
};

// Desktop Button Component
const NavButton = ({ to, children }) => (
  <Link to={to} className="relative group">
    <button className="flex items-center gap-2 px-4 py-2 text-green-700 font-semibold hover:text-green-900 shadow-md">
      {children}
      {/* Hover underline effect */}
      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-green-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </button>
  </Link>
);

// Mobile Button Component (simpler but consistent)
const NavButtonMobile = ({ to, children }) => (
  <Link to={to}>
    <button className="w-[90%] flex items-center justify-center gap-2 px-4 py-2 text-green-700 font-semibold rounded-lg border border-green-300 backdrop-blur-sm bg-white/50 hover:bg-green-100/50 transition-all duration-300 hover:border-green-600 hover:text-green-900 shadow-md">
      {children}
    </button>
  </Link>
);

export default GovernanceNavbar;


// import React from "react";
// import { Link } from "react-router-dom";

// const GovernanceNavbar = () => {
//   return (
//     <nav className="w-full h-20 bg-white shadow-md text-black border-b border-gray-300">
//       <div className="flex justify-between mx-[10%] py-5 items-center">
//         <Link to="/" className="flex items-center">
//           <button className="border-gray-200 rounded-md border p-1 text-md px-5 font-bold hover:border-gray-800 cursor-pointer">
//             Dao
//           </button>
//         </Link>

//         <div className="flex gap-[5%] items-center">
//           <Link to="/governance/">
//             <button className="px-3 text-sm font-semibold border border-gray-200 hover:border-gray-800 rounded-md p-1 transition-colors">
//               Home
//             </button>
//           </Link>
//           <Link to="/governance/proposals">
//             <button className="px-3 text-sm font-semibold border border-gray-200 hover:border-gray-800 rounded-md p-1 transition-colors">
//               Proposals
//             </button>
//           </Link>
          
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default GovernanceNavbar;
