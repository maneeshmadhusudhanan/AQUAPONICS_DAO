
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf, Droplet } from "lucide-react";

const Navbar = () => {
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
            <h1 className="text-xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent group-hover:from-green-500 group-hover:to-teal-500 transition-all duration-300">
              AQUAPONICS DAO
            </h1>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-green-600 hover:text-green-800 transition-colors focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation links */}
          <div 
            className={`absolute top-full left-0 right-0 md:static md:flex md:items-center md:space-x-2 backdrop-blur-lg md:backdrop-blur-none bg-white/80 md:bg-transparent shadow-lg md:shadow-none border-b border-green-100 md:border-0 transition-all duration-300 ${
              isOpen ? "block" : "hidden md:flex"
            }`}
          >
            <NavLink to="/governance/proposals">PROPOSALS</NavLink>
            <NavLink to="/governance">GOVERNANCE</NavLink>
            <NavLink to="/docs">DOCS</NavLink>
          </div>

          {/* Connect wallet button */}
          <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:-translate-y-1">
            <Droplet size={18} />
            <span>CONNECT WALLET</span>
          </button>
        </div>
      </div>
      
      {/* Mobile connect wallet button (shown only on mobile) */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden px-4 py-3 bg-white/80 backdrop-blur-lg shadow-inner border-t border-green-100`}>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300">
          <Droplet size={18} />
          <span>Connect Wallet</span>
        </button>
      </div>
    </nav>
  );
};

// Custom NavLink component for consistent styling
const NavLink = ({ to, children }) => (
  <Link 
    to={to}
    className="block px-6 py-4 md:py-2 text-green-700 font-medium hover:text-green-900 hover:bg-green-100/50 md:hover:bg-transparent md:rounded-lg transition-all duration-200 relative group"
  >
    <span>{children}</span>
    <span className="absolute bottom-2 left-6 right-6 md:bottom-0 h-0.5 bg-gradient-to-r from-green-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </Link>
);

export default Navbar;

////////////////////////////////////////////////////////////////////



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="w-full h-20">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
//                 <div className="flex items-center justify-between h-full">
//                     <Link to="/" className="flex items-center">
//                         <h1 className="text-xl font-bold hover:text-purple-700 cursor-pointer">
//                         AQUAPONICS DAO
//                         </h1>
//                     </Link>

//                     <button
//                         className="md:hidden text-[#9e5af7]"
//                         onClick={() => setIsOpen(!isOpen)}
//                     >
//                         {isOpen ? <X size={28} /> : <Menu size={28} />}
//                     </button>

//                     <div
//                         className={`absolute top-20 left-0 w-full bg-white shadow-md md:static md:w-auto md:flex md:space-x-8 md:shadow-none md:bg-transparent ${
//                             isOpen ? "block" : "hidden"
//                         }`}
//                     >
//                        <Link to="/governance/proposals">
//                                   <button className="block px-6 py-4 text-md font-semibold hover:text-[#5d238d] transition-colors md:inline">
//                                     Proposals
//                                   </button>
//                                 </Link>




//                         <Link
//                             to="/governance/"
//                             className="block px-6 py-4 text-md font-semibold hover:text-[#5d238d] transition-colors md:inline"
//                         >
//                             Governance
//                         </Link>
//                         <Link
//                             to="/docs"
//                             className="block px-6 py-4 text-md font-semibold hover:text-[#5d238d] transition-colors md:inline"
//                         >
//                             Docs
//                         </Link>
//                     </div>


//             <button className="px-3 text-sm bg-gray-800 font-semibold border border-gray-200 hover:border-gray-800 rounded-md p-2 transition-colors text-white" >
//             Connect<span>wallet</span>
//           </button>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;