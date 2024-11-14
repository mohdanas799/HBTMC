import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-[#2C315D]  text-white p-6 dm:py-6 dm:px-6 ">
      <div className="container mx-auto px-16 dm:px-0 grid md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm font-sanss leading-relaxed">
            Hospital started as a Maternity Home in 1969 which was upgraded to General Hospital in 1970. Since 1977, it was recognized as Teaching Hospital, affiliated to KEM Hospital. In 2006, MCGM decided to redevelop it and accordingly redevelopment work has started in 2009. The new redeveloped Cooper hospital was inaugurated on 30/11/2013. It is 636 bedded secondary care hospital with all general specialities. Hospital accredited by national board of examinations for training residents for DNB in nine general specialities since 2007.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className='ml-40 dm:ml-0'>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <ul className="text-sm font-sanss space-y-2">
             <li>➤ About Dean</li>
             <li>➤ About Medical Superintendent</li>
             <li>➤ College</li>
             <li>➤ Dean Messages</li>
             <li>➤ Know Your Institute</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contacts</h2>
          <p className="text-sm font-sanss leading-relaxed">
            <span className="block">Bhaktivedanta Swami Marg, Juhu Scheme, Juhu, Mumbai, Maharashtra 400056.</span>
            <span className="block mt-2">📞 022 2620 7254</span>
            <span className="block mt-2">✉️ info@hbtmc.edu.in</span>
            <span className="block">✉️ deancooper2015@gmail.com</span>
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center text-sm border-t font-sanss border-gray-500 pt-4">
        <p>Copyright © coopermcgh.org | Designed by <a href="#" className="text-blue-300 hover:underline">NEXGENO</a></p>
      </div>
    </footer>
  );
}

export default Footer;
