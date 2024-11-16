import React from "react";
import { FaPhoneAlt, FaEnvelope, FaSearch } from "react-icons/fa";
import Navbar2 from "../components/Navbar2";

import Gallery2 from "../components/Gallery2";
import InfoSections from "../components/Section1";
import TimeTable from "../components/TimeTable";
import Activities from "../components/Activities";
import Teaching from "../components/Teaching";

const Anatomy = () => {
  return (
    <div>
      <Navbar2 />
      <Teaching />
      <Activities />
      <TimeTable />
      <TimeTable />
      <TimeTable />
      <Activities />
      <Gallery2 />
      <InfoSections />
    </div>
  );
};

export default Anatomy;
