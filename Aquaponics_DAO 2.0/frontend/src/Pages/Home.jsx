
import React from "react";
import MovingProposals from "@/Component/MovingProposals";
import AnimationHome from "@/Component/AnimationinHome";
import Footer from "@/Component/Footer1";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-gray-900 via-black to-gray-800 text-white">
      {/* Hero Section */}
      <div className="pt-32 text-center">
        <h1 className="text-5xl md:text-8xl font-extrabold bg-gradient-to-r from-green-400 via-teal-500 to-green-600 text-transparent bg-clip-text drop-shadow-lg hover:drop-shadow-[0_0_20px_rgba(100,255,200,0.4)] transition-all duration-300">
          AQUAPONICS DAO
        </h1>

        {/* Decorative Image */}
        <div className="mt-10 flex justify-center">
          <img 
            src="/images/imagekba1.jpg" 
            alt="Aquaponics Visual" 
            className="w-[80%] md:w-[50%] rounded-3xl border-4 border-transparent hover:border-green-900 shadow-2xl hover:shadow-[0_0_25px_#90EE90] transition-all duration-500"
          />
        </div>
      </div>

      {/* Proposals Section */}
      <div className="mt-24 mx-6 md:mx-20">
        <div className="bg-white/10 border border-green-400/40 backdrop-blur-md rounded-3xl shadow-xl p-6 hover:shadow-[0_0_30px_#90EE90] transition-all duration-300">
          <h2 className="text-3xl font-semibold mb-4 text-center text-green-600">Active Proposals</h2>
          <MovingProposals />
        </div>
      </div>

      {/* Animation Section */}
      <div className="mt-24 mx-6 md:mx-20 pb-16">
        <div className="bg-white/10 border border-green-400/40 backdrop-blur-md rounded-3xl shadow-xl p-6 hover:shadow-[0_0_30px_#22c55e66] transition-all duration-300">
          <h2 className="text-3xl font-semibold mb-4 text-center text-green-300">How It Works</h2>
          <AnimationHome />
        </div>
      </div>




      {/* Footer Section */}
      <div className="mt-24">
        <Footer/>
      </div>
     
    </div>




  );
};

export default Home;



// import React from "react";
// import MovingProposals from "@/Component/MovingProposals";
// import AnimationHome from "@/Component/AnimationinHome";

// const Home = () => {
//   return (
//     <div>
//       <div className="mt-[8%] text-center text-5xl font-bold text-white">
//         <h1>
//           <span className="text-[#9669ED] text-8xl ">AQUAPONICS DAO</span>
//         </h1>
//         <br />
// <img className=" mx-auto h-[50%] w-[50%]" src="/images/imagekba1.jpg" alt="" sizes="" srcset="" />

// <br />
//         {/* <h1 className="mt-[1%]">
//           <span className="text-[#9669ED]  text-2xl">In the spirit of decentralized decision-making, this DApp empowers the Aquaponics community to collectively decide which plant to grow next—be it Mint, Basil, or anything else. By leveraging blockchain technology and governance tokens, this platform puts the power in the hands of the community.

// The DApp utilizes OpenZeppelin's Governor Contracts, a custom token (GovToken), and a TimeLock system to ensure transparent, fair, and secure proposal management and voting. </span>
//         </h1> */}
//         <div className="mt-[8%] mx-[5%]">
//           <MovingProposals />
//         </div>

//         <div className="mt-[8%] mx-[5%]">
//           <AnimationHome/>
//         </div>

       
//       </div>
//     </div>
//   );
// };

// export default Home;
