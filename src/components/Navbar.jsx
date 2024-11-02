import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white text-black shadow-md">
      {/* Top section with logos and contact details */}
      <div className="bg-gray-100 flex pl-[67rem] pt-5 space-x-4 dm:pl-20 text-sm">
        <div className="flex items-center font-sanss space-x-1">
          <FaEnvelope />
          <span>info@hbtmc.edu.in</span>
        </div>
        <div className="flex items-center font-sanss space-x-1">
          <FaPhoneAlt />
          <span>022 2620 7254</span>
        </div>
      </div>

      <div className="flex justify-between  items-center px-[4rem] dm:px-2 py-4 bg-gray-100">
        <div className="flex items-center space-x-[300px] dm:space-x-[10px]">
          <img
            src="https://i.ibb.co/z611bTt/Untitled-1-1.png"
            alt="Left Logo"
            className="w-16 h-16"
          />
          <div className="text-center">
            <h1 className="text-2xl dm:text-sm font-sans font-bold">
              Hinduhridaysamrat Balasaheb Thackeray Medical College <br />
              Dr. Rustom Narsi Cooper Municipal General Hospital
            </h1>
          </div>
          <img
            src="https://i.ibb.co/z611bTt/Untitled-1-1.png"
            alt="Right Logo"
            className="w-16 h-16"
          />
        </div>
      </div>

<nav className="">
      {/* Top section */}
      <div className="flex justify-between bg-[#F0BC71] p-4 items-center">
        <p className="text-lg font-sanss text-gray-800 hidden md:block">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praeser
        </p>
        <div className="space-x-2 flex">
          <button className="bg-[#2C315D] text-white font-sanss px-2 md:px-4 py-1 rounded-md">MUHS</button>
          <button className="bg-[#2C315D] text-white font-sanss px-2 md:px-4 py-1 rounded-md">NAAC</button>
          <button className="bg-[#2C315D] text-white font-sanss px-2 md:px-4 py-1 rounded-md">NMC</button>
          <button className="bg-white text-[#2C315D] border font-sanss border-[#2C315D] px-2 md:px-4 py-1 rounded-md">
            Admission <span role="img" aria-label="document">📄</span>
          </button>
          {/* Toggle Button */}
          <button
            className="md:hidden flex items-center px-2 py-1  bg-[#2C315D] text-white rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Bottom section */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:flex bg-[#2C315D] text-white p-3 justify-between items-center`}>
        <ul className="flex flex-col md:flex-row md:space-x-6 font-sanss space-y-2 md:space-y-0">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">History</a></li>
          <li><a href="#" className="hover:underline">Hospital</a></li>
          <li><a href="#" className="hover:underline">College</a></li>
          <li><a href="#" className="hover:underline">Students</a></li>
          <li><a href="#" className="hover:underline">Committees</a></li>
          <li><a href="#" className="hover:underline">Patients</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>
        <div className="hidden md:flex items-center bg-gray-200 p-2 rounded-md">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 text-[#2C315D] outline-none text-sm"
          />
          <button>
            <svg className="h-4 w-4 text-[#2C315D]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.41-1.41l4.38 4.37a1 1 0 01-1.41 1.42l-4.38-4.38zM10 16a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
