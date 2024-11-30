import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const NewsEventsSection = () => {
  return (
    <div className="bg-gray-100 py-12 pl-">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-start px-6 md:px-20">
        {/* News & Events Section */}
        <div className="bg-white rounded-xl w-[51rem]  shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 border-b pb-3">
            News & Events
          </h2>
          <div className="overflow-hidden rounded-lg">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: ".custom-pagination" }}
              loop
              className="news-swiper"
            >
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/JpJ0gRy/Rectangle-239.png"
                  alt="News Image 1"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/JpJ0gRy/Rectangle-239.png"
                  alt="News Image 2"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/JpJ0gRy/Rectangle-239.png"
                  alt="News Image 3"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </SwiperSlide>
              {/* Custom pagination */}
              <div className="custom-pagination"></div>
            </Swiper>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-xl w-[60%] ml-40 shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 border-b pb-3">
            Achievements
          </h2>
          <ul className="space-y-4">
            {Array(6)
              .fill()
              .map((_, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <span className="text-gray-700 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                  <span className="bg-[#F0BC71] text-white rounded-full font-bold text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsEventsSection;
