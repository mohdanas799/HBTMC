import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const committees = [
  {
    id: 1,
    title: "Ethics Committee",
    description:
      "The Institutional Ethics Committee (IEC) has a primary duty to safeguard the rights, safety, and welfare of research participants.",
  },
  {
    id: 2,
    title: "Grievance Redressal Committee",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    id: 3,
    title: "ANTI - RAGGING COMMITTEE",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    id: 4,
    title: "Prevention of Sexual",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    id: 5,
    title: "Local Management Committee",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    id: 6,
    title: "Local Management Committee",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

const Committees = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Committees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committees.map((committee) => (
            <div
              key={committee.id}
              className="p-4 pb-0 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start mb-4">
                <span className="text-5xl md:text-6xl font-bold text-[#B1B1B1] mr-4">
                  {String(committee.id).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h1 className="text-base md:text-lg font-semibold text-[#414141]">{committee.title}</h1>
                  <p className="text-sm md:text-base text-[#414141] mt-2 mb-4">{committee.description}</p>
                  <button className="text-[#F0BC71] ml-[280px] dm:ml-[210px] text-xl md:text-2xl float-right md:float-none">
                    <FaArrowAltCircleRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committees;
