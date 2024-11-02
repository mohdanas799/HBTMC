import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowAltCircleRight } from "react-icons/fa";

const DepartmentsSection = () => {
  const departments = [
    {
      name: "Anatomy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: "https://i.ibb.co/3SL29LW/2867197-1.png", // Corrected path
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

  return (
    <>
      <div className="bg-white py-10 px-20 dm:px-5 ">
        <h2 className="text-left text-4xl font-bold mb-8">Departments</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
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
              <div className="bg-gray-50 rounded-lg shadow-md p-6 cursor-pointer text-center">
                <img
                  src={dept.icon}
                  alt={dept.name}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                <p className="text-gray-600 font-sanss mb-4">{dept.description}</p>
                <div className="text-[#F0BC71] text-right pl-60 text-2xl font-bold">
                  <FaArrowAltCircleRight />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bg-[#2C315D] text-white text-center text-5xl p-8 dm:text-2xl ">
        “Inspiring Excellence in Medical Education”
      </div>
    </>
  );
};

export default DepartmentsSection;
