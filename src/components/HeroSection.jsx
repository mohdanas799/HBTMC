import React from "react";
import { FaHospitalAlt, FaGraduationCap } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { motion } from "framer-motion";


const DeansMessageSection = () => {
  return (
    <>
      <div className="bg-gray-100 py-10">
        {/* Main container */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 -mt-10">
          {/* Left Image */}
          <div className="relative">
            <img
              src="https://i.ibb.co/42ZMnSz/image-11.png" // Replace with actual image URL
              alt="Hospital Building"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Dean's Message */}
          <div className="bg-[#F0BC71] p-8 px-14 dm:px-5 pt-28 dm:pt-[-400px] relative">
            <h2 className="text-3xl dm:text-2xl font-bold text-gray-800">
              Deans Message
            </h2>

            <h3 className="text-lg font-sanss font-semibold mt-14">
              Dr. Shailesh C. Mohite
            </h3>

            <p className="text-gray-600 font-sanss">MD, DFM, DNB, PGDHA, MBA (HCS), LLB</p>
            <p className="mt-14 text-lg font-sanss text-gray-700">
              Hindurudaysamrat Balasaheb Thackarey Medical College (HBTMC) and
              Dr. Rustom Narsi Cooper Municipal General Hospital is a major
              hospital in western suburbs. It is the fourth medical college of
              Municipal Corporation of Greater Mumbai apart from three other
              MCGM Medical Colleges.
            </p>
            <div className="mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Know More
              </button>
            </div>
            <div className="absolute top-28 right-28 dm:top-10 dm:right-4">
              <img
                src="https://i.ibb.co/gdL2FSV/Mask-group.png" // Replace with actual image URL
                alt="Dean Dr. Shailesh C. Mohite"
                className="w-40 h-40 rounded object-cover"
              />
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="container px-28 dm:px-4 -mt-16 dm:mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 ">
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
          <div className="bg-white shadow-md rounded-lg p-4 pl-[-30rem] z-10  text-center">
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
          <div className="bg-white shadow-md rounded-lg p-4  z-10 text-center">
            <div className="flex justify-center items-center mb-4">
              <FaGraduationCap size={40} color="#F0BC71" />{" "}
              <h3 className="text-xl font-semibold pl-5">Students</h3>
            </div>

            <p className="text-gray-600 font-sanss text-sm">
              At vero eos et accusamus et justo odio dignissimos ducimus qui
              blanditiis praesentium voluptatum
            </p>
          </div>
        </div>
      </div>


      <div className="overflow-hidden bg-gray-100 ">
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 70, // Adjust duration for the desired speed
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-block text-[2.5rem] md:text-[5rem] text-black whitespace-nowrap px-4"
      >
        Welcome to H.B.T. Medical College & Dr. R.N. Cooper Municipal Gen Hospital, Mumbai
      </motion.div>
    </div>
    </>
  );
};

export default DeansMessageSection;
