import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white text-black shadow-md">
      {/* Top section with logos and contact details */}
      <div className="bg-gray-100 pr-14 dm:pr-1">
        <div className="container mx-auto flex justify-end pt-2 space-x-4 text-sm px-4 md:px-0">
          <div className="flex items-center space-x-1">
            <FaEnvelope color="#F0BC71" />
            <span>info@hbtmc.edu.in</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaPhoneAlt color="#F0BC71" />
            <span>022 2620 7254</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-4 px-20 dm:px-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 px-4">
          <img
            src="https://i.ibb.co/z611bTt/Untitled-1-1.png"
            alt="Left Logo"
            className="w-28 h-28 dm:hidden"
          />
          <div className="text-center dm:flex">
            <img
              src="https://i.ibb.co/z611bTt/Untitled-1-1.png"
              alt="Left Logo"
              className="w-16 h-16 2xl:hidden"
            />
            <h1 className="text-2xl dm:text-lg font-sans font-bold">
              Hinduhridaysamrat Balasaheb Thackeray Medical College <br />
              Dr. Rustom Narsi Cooper Municipal General Hospital
            </h1>
          </div>
          <img
            src="https://i.ibb.co/z611bTt/Untitled-1-1.png"
            alt="Right Logo"
            className="w-28 h-28 dm:hidden"
          />
        </div>
      </div>

      <nav>
        {/* Middle Section */}
        <div className=" px-20 dm:px-0">
          <div className="container mx-auto dm:bg-[#2C315D]  flex justify-between items-center px-4 md:px-0">
            <button
              className="md:hidden flex items-center px-2 py-1 bg-[#2C315D] text-white rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex bg-[#2C315D] text-white py-3 px-16 dm:px-0`}
        >
          <div className="container mx-auto flex flex-col md:flex-row  justify-between px-4">
            <ul className="flex flex-col text-xl dm:text-left md:flex-row md:space-x-12 space-y-2 md:space-y-0">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/anatomy" className="hover:underline">
                  Anatomy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hospital
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  College
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Committees
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Patients
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  College
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Students
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <button className="bg-white text-[#2C315D] border border-[#2C315D] px-3 py-1 rounded-md">
                Admission{" "}
                <span role="img" aria-label="document">
                  📄
                </span>
              </button>
            </ul>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="bg-orange-100 p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Anatomy</h1>
          <div className="text-gray-600 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7l6 6-6 6m6-6h12"
              />
            </svg>
            <p>Home</p>
            <span>›</span>
            <p>Anatomy</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar2;
