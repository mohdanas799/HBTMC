import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaChevronLeft, FaChevronRight, FaArrowAltCircleRight } from "react-icons/fa";
import { useRef } from "react";

const DepartmentsSection = () => {
  const swiperRef = useRef(null);

  const departments = [
    {
      name: "Anatomy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: "https://i.ibb.co/3SL29LW/2867197-1.png",
    },
    {
      name: "Biochemistry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: "https://i.ibb.co/3SL29LW/2867197-1.png",
    },
    {
      name: "Pathology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: "https://i.ibb.co/3SL29LW/2867197-1.png",
    },
    {
      name: "Pharmacology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: "https://i.ibb.co/3SL29LW/2867197-1.png",
    },
    {
      name: "Physiology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: "https://i.ibb.co/3SL29LW/2867197-1.png",
    },
  ];

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <>
      <div className="relative bg-white py-10 px-5 sm:px-10 md:px-20 lg:px-32 xl:px-20 container mx-auto">
        <h2 className="text-left text-4xl font-bold mb-8">Departments</h2>

        {/* Navigation Icons positioned at the top-right */}
        <div className="absolute top-4 right-4 flex gap-4">
          <div
            className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors duration-200"
            onClick={handlePrev}
          >
            <FaChevronLeft className="text-white text-xl" />
          </div>
          <div
            className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors duration-200"
            onClick={handleNext}
          >
            <FaChevronRight className="text-white text-xl" />
          </div>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          loop
          className="mySwiper"
        >
          {departments.map((dept, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-gray-50 rounded-lg dm:py-10 shadow-md p-6 cursor-pointer text-center">
                <img
                  src={dept.icon}
                  alt={dept.name}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                <p className="text-gray-600 font-sans mb-10">{dept.description}</p>
                
                {/* Arrow icon positioned at the bottom-right */}
                <div className="absolute bottom-4 right-4 text-[#F0BC71] text-2xl font-bold">
                  <FaArrowAltCircleRight />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bg-[#2C315D] text-white text-center text-5xl p-8 dm:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        “Inspiring Excellence in Medical Education”
      </div>
    </>
  );
};

export default DepartmentsSection;
