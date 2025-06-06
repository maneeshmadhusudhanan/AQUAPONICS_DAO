


import React from "react";
import { Link } from "react-router-dom";
import { Leaf,Twitter,Github,Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to- to-white/10 backdrop-blur-md border-t border-green-200/30 text-green-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

        {/* Column 1: Logo & Motto */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-2 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-green-300/50">
              <Leaf size={28} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent group-hover:from-green-500 group-hover:to-teal-500 transition-all duration-300">
              Aquaponics DAO
            </h2>
          </div>
          <p className="text-green-700 text-sm opacity-80">
            Empowering sustainable ecosystems through decentralized governance 🌿
          </p>



          <div className="mt-10 flex justify-center">
          <img 
            src="/images/imagekba1.jpg" 
            alt="Aquaponics Visual" 
            className="w-[80%] md:w-[70%] rounded-2xl border-2 border-transparent hover:border-green-900 shadow-2xl hover:shadow-[0_0_25px_#90EE90] transition-all duration-500"
          />
        </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col gap-3 text-green-700 font-medium text-md">
          <h4 className="text-lg font-semibold text-green-800 mb-2">Explore</h4>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/governance">Governance</FooterLink>
          <FooterLink to="/governance/proposals">Proposals</FooterLink>
          <FooterLink to="/docs">Docs</FooterLink>
        </div>

        {/* Column 3: Social Media */}
        <div className="flex flex-col gap-3 text-green-700 font-medium text-md">
          <h4 className="text-lg font-semibold text-green-800 mb-2">Follow Us</h4>
          <SocialLink href="https://twitter.com" icon={<Twitter size={20} />}>Twitter</SocialLink>
          <SocialLink href="https://github.com" icon={<Github size={20} />}>GitHub</SocialLink>
          <SocialLink href="mailto:info@aquaponicsdao.org" icon={<Mail size={20} />}>Email Us</SocialLink>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-3">Newsletter</h4>
          <p className="text-sm text-green-700 opacity-80 mb-3">
            Get the latest updates on proposals and community decisions.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg bg-white/80 text-green-800 border border-green-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-green-200/30 py-6 text-center text-green-600 text-sm bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm">
        © {new Date().getFullYear()} Aquaponics DAO. All rights reserved.
      </div>

      {/* Background logo image */}
      <img
        src="/Logo1.png"
        alt="Logo Background"
        className="absolute bottom-0 right-0 w-64 opacity-10 select-none pointer-events-none"
      />
    </footer>
  );
};

// Reusable Footer Link
const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="hover:text-green-900 hover:underline underline-offset-4 transition-all duration-300"
  >
    {children}
  </Link>
);

// Reusable Social Link
const SocialLink = ({ href, icon, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-green-900 transition-colors duration-300"
  >
    {icon}
    {children}
  </a>





);

export default Footer;




// import React from "react";
// import { Link } from "react-router-dom";
// import { Leaf } from "lucide-react";

// const Footer= () => {
//   return (
//     <footer className="relative w-full bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-md border-t border-green-200/30 mt-12">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">

//         {/* Left side: Logo and brand */}
//         <div className="flex items-center gap-3 group">
//           {/* Logo */}
//           <div className="bg-gradient-to-br from-green-500 to-teal-600 p-2 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-green-300/50">
//             <Leaf size={28} className="text-white" />
//           </div>
//           {/* Brand name */}
//           <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent group-hover:from-green-500 group-hover:to-teal-500 transition-all duration-300">
//             Aquaponics DAO
//           </h2>
//         </div>

//         {/* Center: Navigation Links */}
//         <div className="flex flex-wrap justify-center items-center gap-8 text-green-700 font-medium text-lg">
//           <FooterLink to="/">Home</FooterLink>
//           <FooterLink to="/governance">Governance</FooterLink>
//           <FooterLink to="/governance/proposals">Proposals</FooterLink>
//           <FooterLink to="/docs">Docs</FooterLink>
//         </div>

//         {/* Right side: Connect or image */}
//         <div className="flex flex-col items-center gap-2">
//           <img 
//             src="/imagekba1.jpg" 
//             alt="Aquaponics Illustration" 
//             className="w-32 h-32 object-cover rounded-2xl shadow-md hover:scale-105 transition-all duration-500" 
//           />
//           <p className="text-green-700 text-sm mt-2 opacity-80">Growing Together 🌱</p>
//         </div>

//       </div>

//       {/* Bottom copyright */}
//       <div className="border-t border-green-200/30 py-6 text-center text-green-600 text-sm bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm">
//         © {new Date().getFullYear()} Aquaponics DAO. All rights reserved.
//       </div>

//       {/* Background image (Logo) */}
//       <img 
//         src="/Logo1.png" 
//         alt="Logo Background" 
//         className="absolute bottom-0 right-0 w-64 opacity-10 select-none pointer-events-none"
//       />
//     </footer>
//   );
// };

// // FooterLink reusable component
// const FooterLink = ({ to, children }) => (
//   <Link 
//     to={to} 
//     className="hover:text-green-900 hover:underline underline-offset-4 transition-all duration-300"
//   >
//     {children}
//   </Link>
// );

// export default Footer;
