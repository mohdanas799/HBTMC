import React from "react";
import { FaHospitalAlt, FaGraduationCap } from "react-icons/fa";
import { FaBuildingColumns, FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/swiper-bundle.min.css"; // Import Swiper styles

const DeansMessageSection = () => {
  // Data for the cards
  const cards = [
      {
      icon: <FaGraduationCap size={40} color="#F0BC71" />,
      title: "Students",
      description:
        "At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    },
    {
      icon: <FaGraduationCap size={40} color="#F0BC71" />,
      title: "Students",
      description:
        "At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    },
    {
      icon: <FaGraduationCap size={40} color="#F0BC71" />,
      title: "Students",
      description:
        "At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    },
    {
      icon: <FaGraduationCap size={40} color="#F0BC71" />,
      title: "Students",
      description:
        "At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    },
    {
      icon: <FaGraduationCap size={40} color="#F0BC71" />,
      title: "Students",
      description:
        "At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    },
    {
      icon: <FaGraduationCap size={40} color="#F0BC71" />,
      title: "Students",
      description:
        "At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 py-10">
        {/* Main container */}
        <div className="container mx-auto  dm:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 dm:gap-0 md:gap-0 -mt-10 px-4 md:px-0">
          {/* Left Image */}
          <div className="relative">
            <img
              src="https://i.ibb.co/42ZMnSz/image-11.png"
              alt="Hospital Building"
              className="w-full h-full object-cover "
            />
          </div>

          {/* Right - Dean's Message */}
          <div className="bg-[#F0BC71] p-8 px-14 dm:px-5 pt-28 dm:pt-28 relative">
            <h2 className="text-3xl dm:text-2xl font-bold text-gray-800">
              Deans Message
            </h2>

            <h3 className="text-lg font-sanss font-semibold mt-14">
              Dr. Shailesh C. Mohite
            </h3>

            <p className="text-gray-600 font-sanss">
              MD, DFM, DNB, PGDHA, MBA (HCS), LLB
            </p>
            <p className="mt-10 text-lg font-sanss text-gray-700">
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
                src="https://i.ibb.co/gdL2FSV/Mask-group.png"
                alt="Dean Dr. Shailesh C. Mohite"
                className="w-40 h-40 rounded object-cover"
              />
            </div>
          </div>
        </div>

        {/* Cards Section - Implement Swiper slider */}
        <div className="container mx-auto px-0 md:px-20 dm:px-4 -mt-16 dm:mt-4">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-md rounded-3xl p-7  text-center">
                  <div className="flex justify-start items-left mb-4">
                    {card.icon}
                    <h3 className="text-2xl font-semibold pl-5">{card.title}</h3>
                  </div>
                  <p className="text-gray-600 text-left flex font-sanss text-sm">
                    {card.description}
                    <div className=""><FaArrowRightLong size={27} color="#F0BC71" /></div>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Marquee Text Section */}
      <div className="overflow-hidden bg-gray-100 py-6">
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
