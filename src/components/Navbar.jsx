import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
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
            className="w-16 h-16 hidden dm:flex"
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
        <div className="bg-[#F0BC71] py-3 px-20 dm:px-0">
          <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
            <p className="text-lg hidden md:block font-sanss text-gray-800">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praeser
            </p>
            <div className="flex space-x-2">
              <button className="bg-[#2C315D] text-white px-3 py-[2px] dm:text-[10px] rounded-md">MUHS</button>
              <button className="bg-[#2C315D] text-white px-3 py-[2px] dm:text-[10px] rounded-md">NAAC</button>
              <button className="bg-[#2C315D] text-white px-3 py-[2px] dm:text-[10px] rounded-md">NMC</button>
              <button className="bg-white text-[#2C315D] border border-[#2C315D] px-3 py-1 rounded-md">
                Admission <span role="img" aria-label="document">📄</span>
              </button>
              <button
                className="md:hidden flex items-center px-2 py-1 bg-[#2C315D] text-white rounded-md"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex bg-[#2C315D] text-white container mx-auto py-3 px-16 dm:px-0`}>
          <div className="container mx-auto flex flex-col md:flex-row  justify-between px-4">
            <ul className="flex flex-col  dm:text-left md:flex-row md:space-x-6 space-y-2 md:space-y-0">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/anatomy" className="hover:underline">Anatomy</a></li>
              <li><a href="#" className="hover:underline">Hospital</a></li>
              <li><a href="#" className="hover:underline">College</a></li>
              <li><a href="#" className="hover:underline">Students</a></li>
              <li><a href="#" className="hover:underline">Committees</a></li>
              <li><a href="#" className="hover:underline">Patients</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
            <div className="hidden md:flex -my-3 -mr-20 pr-20 items-center bg-gray-200 p-2 ">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-200 text-[#2C315D]   outline-none text-sm"
              />
              <button>
                <svg className="h-4 w-4  text-[#2C315D]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.9 14.32a8 8 0 111.41-1.41l4.38 4.37a1 1 0 01-1.41 1.42l-4.38-4.38zM10 16a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
         
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
