// Committees.js
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
    title: "Alumni Association",
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
    <div className="p-8 px-20 dm:px-5 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">Committees</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {committees.map((committee) => (
          <div
            key={committee.id}
            className="p-6 bg-white py-1  rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center mb-4">
              <span className="text-6xl font-bold text-gray-400 mr-4">
                {String(committee.id).padStart(2, "0")}
              </span>
              <div className=" pt-5">
                <h1 className="text-xl font-semibold">{committee.title}</h1>
                <p className="text-gray-600 font-sanss text-sm mb-4">{committee.description}</p>
                <button className="text-yellow-500 hover:text-yellow-600 text-xl">
                <FaArrowAltCircleRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committees;
