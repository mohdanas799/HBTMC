import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const NewsEventsSection = () => {
  return (
    <div className="bg-gray-100 p-8 ">
      <div className="w-[90%]  dm:ml-0 grid md:grid-cols-2 items-center ml-44 -mr-44 gap-2">
        {/* News & Events Section */}
        <div className="bg-white rounded-lg dm:w-[370px] dm:-ml-[21px] shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">News & Events</h2>
          <div className="overflow-hidden rounded-lg">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
            >
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/JpJ0gRy/Rectangle-239.png"
                  alt="News Image 1"
                  className="w-full h-auto rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/JpJ0gRy/Rectangle-239.png"
                  alt="News Image 2"
                  className="w-full h-auto rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/JpJ0gRy/Rectangle-239.png"
                  alt="News Image 3"
                  className="w-full h-auto rounded-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-lg w-[29rem] dm:w-[370px] dm:-ml-[21px] py-8 shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Achievements</h2>
          <ul className="space-y-4 font-sanss">
            <li className="flex items-center justify-between border-b pb-4">
              <span className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <span className="text-yellow-500 font-bold">&gt;</span>
            </li>
            <li className="flex items-center justify-between border-b pb-4">
              <span className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <span className="text-yellow-500 font-bold">&gt;</span>
            </li>
            <li className="flex items-center justify-between border-b pb-4">
              <span className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <span className="text-yellow-500 font-bold">&gt;</span>
            </li>
            <li className="flex items-center justify-between border-b pb-4">
              <span className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <span className="text-yellow-500 font-bold">&gt;</span>
            </li>
            <li className="flex items-center justify-between border-b pb-4">
              <span className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <span className="text-yellow-500 font-bold">&gt;</span>
            </li>
            <li className="flex items-center justify-between border-b pb-4">
              <span className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <span className="text-yellow-500 font-bold">&gt;</span>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsEventsSection;