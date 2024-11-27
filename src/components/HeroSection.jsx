// import React from "react";
// import { FaHospitalAlt, FaGraduationCap } from "react-icons/fa";
// import { FaBuildingColumns, FaArrowRightLong } from "react-icons/fa6";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// // import "swiper/swiper-bundle.min.css"; // Import Swiper styles

// const DeansMessageSection = () => {
//   // Data for the cards
//   const cards = [
//       {
//       icon: <FaGraduationCap size={40} color="#F0BC71" />,
//       title: "Students",
//       description:
//         "At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum",
//     },
//     {
//       icon: <FaGraduationCap size={40} color="#F0BC71" />,
//       title: "Students",
//       description:
//         "At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum",
//     },
//     {
//       icon: <FaGraduationCap size={40} color="#F0BC71" />,
//       title: "Students",
//       description:
//         "At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum",
//     },
//     {
//       icon: <FaGraduationCap size={40} color="#F0BC71" />,
//       title: "Students",
//       description:
//         "At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum",
//     },
//     {
//       icon: <FaGraduationCap size={40} color="#F0BC71" />,
//       title: "Students",
//       description:
//         "At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum",
//     },
//     {
//       icon: <FaGraduationCap size={40} color="#F0BC71" />,
//       title: "Students",
//       description:
//         "At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum",
//     },
//   ];

//   return (
//     <>
//       <div className="bg-gray-100 py-10">
//         {/* Main container */}
//         <div className="container mx-auto  dm:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 dm:gap-0 md:gap-0 -mt-10 px-4 md:px-0">
//           {/* Left Image */}
//           <div className="relative">
//             <img
//               src="https://i.ibb.co/42ZMnSz/image-11.png"
//               alt="Hospital Building"
//               className="w-full h-full object-cover "
//             />
//           </div>

//           {/* Right - Dean's Message */}
//           <div className="bg-[#F0BC71] p-8 px-14 dm:px-5 pt-28 dm:pt-28 relative">
//             <h2 className="text-3xl dm:text-2xl font-bold text-gray-800">
//               Deans Message
//             </h2>

//             <h3 className="text-lg font-sanss font-semibold mt-14">
//               Dr. Shailesh C. Mohite
//             </h3>

//             <p className="text-gray-600 font-sanss">
//               MD, DFM, DNB, PGDHA, MBA (HCS), LLB
//             </p>
//             <p className="mt-10 text-lg font-sanss text-gray-700">
//               Hindurudaysamrat Balasaheb Thackarey Medical College (HBTMC) and
//               Dr. Rustom Narsi Cooper Municipal General Hospital is a major
//               hospital in western suburbs. It is the fourth medical college of
//               Municipal Corporation of Greater Mumbai apart from three other
//               MCGM Medical Colleges.
//             </p>
//             <div className="mt-4">
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
//                 Know More
//               </button>
//             </div>
//             <div className="absolute top-28 right-28 dm:top-10 dm:right-4">
//               <img
//                 src="https://i.ibb.co/gdL2FSV/Mask-group.png"
//                 alt="Dean Dr. Shailesh C. Mohite"
//                 className="w-40 h-40 rounded object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Cards Section - Implement Swiper slider */}
//         <div className="container mx-auto px-0 md:px-20 dm:px-4 -mt-16 dm:mt-4">
//           <Swiper
//             modules={[Autoplay]}
//             autoplay={{ delay: 2000, disableOnInteraction: false }}
//             spaceBetween={20}
//             slidesPerView={1}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 2,
//               },
//               1024: {
//                 slidesPerView: 3,
//               },
//             }}
//             className="mySwiper"
//           >
//             {cards.map((card, index) => (
//               <SwiperSlide key={index}>
//                 <div className="bg-white shadow-md rounded-3xl p-7  text-center">
//                   <div className="flex justify-start items-left mb-4">
//                     {card.icon}
//                     <h3 className="text-2xl font-semibold pl-5">{card.title}</h3>
//                   </div>
//                   <p className="text-gray-600 text-left flex font-sanss text-sm">
//                     {card.description}
//                     <div className=""><FaArrowRightLong size={27} color="#F0BC71" /></div>
//                   </p>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       {/* Marquee Text Section */}
//       <div className="overflow-hidden bg-gray-100 py-6">
//         <motion.div
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{
//             duration: 70,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="inline-block text-[2.5rem] md:text-[5rem] text-black whitespace-nowrap px-4"
//         >
//           Welcome to H.B.T. Medical College & Dr. R.N. Cooper Municipal Gen
//           Hospital, Mumbai
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default DeansMessageSection;

import React, { useState } from "react";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl"; // Import the icons

import { FaHospitalAlt, FaGraduationCap } from "react-icons/fa";

import { FaBuildingColumns } from "react-icons/fa6";

import { motion } from "framer-motion";

const DeansMessageSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://i.ibb.co/42ZMnSz/image-11.png", // Replace with actual image URLs

    "https://i.ibb.co/pnBdvSD/Property-1-Variant4.png",

    "https://i.ibb.co/mB4YD9g/Property-1-Variant3.png",

    "https://i.ibb.co/zrmq5kf/Property-1-Variant2.png",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="bg-gray-100 py-10">
        {/* Main container */}

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 -mt-10">
          {/* Left Image */}

          <div className="relative">
            <img
              src={images[currentImageIndex]}
              alt="Hospital Building"
              className="w-full h-full object-cover"
            />

            {/* Navigation Icons */}

            <div className="absolute inset-0 flex justify-between items-center px-4">
              {/* Left Icon */}

              <div
                onClick={prevImage}
                className="bg-[#F0BC71] text-white w-10 h-10 p-2 rounded-full cursor-pointer hover:scale-110 flex items-center justify-center"
              >
                <SlArrowLeft className="text-2xl" />
              </div>

              {/* Right Icon */}

              <div
                onClick={nextImage}
                className="bg-[#F0BC71] text-white w-10 h-10 p-2 rounded-full cursor-pointer hover:scale-110 flex items-center justify-center"
              >
                <SlArrowRight className="text-2xl" />
              </div>
            </div>
          </div>

          {/* Right - Dean's Message */}

          <div className="bg-[#F0BC71] p-8 px-14 dm:px-5 pt-28 dm:pt-[-400px] relative">
            <h2 className="text-3xl dm:text-2xl font-bold text-gray-800">
              Dean's Message
            </h2>

            <h3 className="text-lg font-sanss font-semibold mt-14">
              Dr. Shailesh C. Mohite
            </h3>

            <p className="text-gray-600 font-sanss">
              MD, DFM, DNB, PGDHA, MBA (HCS), LLB
            </p>

            <p className="mt-14 text-lg font-sanss text-gray-700">
              Hindurudaysamrat Balasaheb Thackarey Medical College (HBTMC) and
              Dr. Rustom Narsi Cooper Municipal General Hospital is a major
              hospital in western suburbs. It is the fourth medical college of
              Municipal Corporation of Greater Mumbai apart from three other
              MCGM Medical Colleges.
            </p>

            <div className="mt-4">
              <button className="bg-[#2C315D] text-white px-9 py-2 rounded-md">
                Know More
              </button>
            </div>

            <div className="absolute top-28 right-28 dm:top-10 dm:right-4">
              <img
                src="https://i.ibb.co/gdL2FSV/Mask-group.png"
                alt="Dean Dr. Shailesh C. Mohite"
                className="w-40 h-40 rounded object-cover"
              />
            </div>
          </div>
        </div>

        {/* Cards Section */}

        <div className="container px-28 dm:px-4 -mt-16 dm:mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Hospital Card */}

          <div className="bg-white shadow-md rounded-lg p-4 z-10 text-center">
            <div className="flex justify-center items-center mb-4">
              <FaHospitalAlt size={35} color="#F0BC71" />

              <h3 className="text-xl font-semibold pl-5">Hospital</h3>
            </div>

            <p className="text-gray-600 font-sanss text-sm">
              At vero eos et accusamus et justo odio dignissimos ducimus qui
              blanditiis praesentium voluptatum
            </p>
          </div>

          {/* College Card */}

          <div className="bg-white shadow-md rounded-lg p-4 pl-[-30rem] z-10 text-center">
            <div className="flex justify-center items-center mb-4">
              <FaBuildingColumns size={35} color="#F0BC71" />

              <h3 className="text-xl font-semibold pl-5">College</h3>
            </div>

            <p className="text-gray-600 font-sanss text-sm">
              At vero eos et accusamus et justo odio dignissimos ducimus qui
              blanditiis praesentium voluptatum
            </p>
          </div>

          {/* Students Card */}

          <div className="bg-white shadow-md rounded-lg p-4 z-10 text-center">
            <div className="flex justify-center items-center mb-4">
              <FaGraduationCap size={40} color="#F0BC71" />

              <h3 className="text-xl font-semibold pl-5">Students</h3>
            </div>

            <p className="text-gray-600 font-sanss text-sm">
              At vero eos et accusamus et justo odio dignissimos ducimus qui
              blanditiis praesentium voluptatum
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-gray-100">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 70,

            repeat: Infinity,

            ease: "linear",
          }}
          className="inline-block text-[2.5rem] md:text-[5rem] text-black whitespace-nowrap px-4"
        >
          Welcome to H.B.T. Medical College & Dr. R.N. Cooper Municipal Gen
          Hospital, Mumbai
        </motion.div>
      </div>
    </>
  );
};

export default DeansMessageSection;
