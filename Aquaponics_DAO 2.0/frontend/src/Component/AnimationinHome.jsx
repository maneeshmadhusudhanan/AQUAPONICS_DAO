
import React from "react";
import { Link } from "react-router-dom";

const images = [
  "/images/plantsimages/WhatsApp Image 2025-04-07 at 2.42.40 PM.jpeg",
  "/images/plantsimages/WhatsApp Image 2025-04-07 at 2.43.42 PM.jpeg",
  "/images/plantsimages/WhatsApp Image 2025-04-07 at 2.44.06 PM.jpeg",
  "/images/plantsimages/WhatsApp Image 2025-04-07 at 2.44.14 PM.jpeg",
];

const AnimationHome = () => {
  return (
    <section className="bg-green-50 min-h-screen py-16 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Welcome to Aquaponics DAO
      </h1>
      <p className="max-w-2xl text-gray-700 text-center mb-8">
        A decentralized platform where the community decides what to grow next!
      </p>

      <Link to="/getstarted">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg mb-12 transition duration-300">
          Get Started
        </button>
      </Link>

      <div className="space-y-12 w-full max-w-6xl">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border border-green-300 shadow-lg ${
              i % 2 === 0 ? "animate-slide-left" : "animate-slide-right"
            }`}
          >
            <div className="flex w-fit gap-4 animate-marquee pause-on-hover">
              {images.concat(images).map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Plant ${idx}`}
                  className="w-[300px] h-[200px] object-cover rounded-xl"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimationHome;

// import React from "react";
// import { Link } from "react-router-dom";
// <link rel="stylesheet" href="style.css" />

// const AnimationHome = () => {
//   return (
//     <div>
// <body>

// </body>




// <section>
//     <div className="content">
//         {/* <p>
//             Aquaponics DAO is a decentralized autonomous organization that empowers the community to collectively decide which plant to grow next. By leveraging blockchain technology and governance tokens, this platform puts the power in the hands of the community.

//         </p> */}
//         <button>Getstarted</button>
//         <div className="sliders">
//             <div className="slider-container" id="slider0"></div>
//             <div className="slider-track">
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.42.40 PM.jpeg" alt="" /></div>
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.43.42 PM.jpeg" alt="" /></div>
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.44.06 PM.jpeg" alt="" /></div>
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.44.14 PM.jpeg" alt="" /></div>
//             </div>

//         </div>
//         <div className="slider-container" id="slider1"></div>
//             <div className="slider-track">
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.42.40 PM.jpeg" alt="" /></div>
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.43.42 PM.jpeg" alt="" /></div>
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.44.06 PM.jpeg" alt="" /></div>
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.44.14 PM.jpeg" alt="" /></div>
//             </div>

//             <div className="slider-container" id="slider2"></div>
//             <div className="slider-track">
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.42.40 PM.jpeg" alt="" /></div>
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.43.42 PM.jpeg" alt="" /></div>
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.44.06 PM.jpeg" alt="" /></div>
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.44.14 PM.jpeg" alt="" /></div>
//             </div>

//             <div className="slider-container" id="slider3"></div>
//             <div className="slider-track">
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.42.40 PM.jpeg" alt="" /></div>
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.43.42 PM.jpeg" alt="" /></div>
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.44.06 PM.jpeg" alt="" /></div>
//                 <div className="slide"><img src="/images/plantsimages/WhatsApp Image 2025-04-07 at 2.44.14 PM.jpeg" alt="" /></div>
//             </div>

        
//     </div>

// </section>


// <script>

// </script>


//         </div>
//   );
// };

// export default AnimationHome;
