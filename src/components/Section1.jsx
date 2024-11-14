import React from "react";

const sections = [
  {
    title: "Hospital",
    links: [
      "Administration",
      "About Medical Superintendent",
      "OPD Timings & Location",
      "Indoor Services",
      "Diagnostic and Investigation services",
      "Vision",
      "Hospital Infection Control",
      "National Tuberculosis Eradication Program(NTEP) (RNTCP)",
      "Internal Quality Assurance Cell",
      "Disability Medical Board",
    ],
  },
  {
    title: "MUHS Mandate",
    links: [
      "ACADEMIC YEAR 2022-23 : Master Time Table | LIC Inspection | Annexure | UG Time Table of Lecture | UG Time Table of Clinical Posting | PG Teaching Program",
      "ACADEMIC YEAR 2024-25 : Master Time Table | LIC Inspection | Annexure | UG Time Table of Lecture | UG Time Table of Clinical Posting | PG Teaching Program",
      "ACADEMIC YEAR 2023-24 : Master Time Table | LIC Inspection | Annexure | UG Time Table of Lecture | UG Time Table of Clinical Posting | PG Teaching Program",
    ],
  },
  {
    title: "College",
    links: [
      "Affiliation University",
      "About Dean",
      "Administration",
      "Faculty",
      "Events",
      "Departments",
      "Medical Education Unit",
      "Academic Council",
      "Staff and Research Society",
    ],
  },
  {
    title: "Students",
    links: [
      "Administration",
      "About Medical Superintendent",
      "OPD Timings & Location",
      "Indoor Services",
      "Diagnostic and Investigation services",
      "Vision",
      "Hospital Infection Control",
      "National Tuberculosis Eradication Program(NTEP) (RNTCP)",
      "Internal Quality Assurance Cell",
      "Disability Medical Board",
    ],
  },
  {
    title: "Committees",
    links: [
      "Administration",
      "About Medical Superintendent",
      "OPD Timings & Location",
      "Indoor Services",
      "Diagnostic and Investigation services",
      "Vision",
      "Hospital Infection Control",
      "National Tuberculosis Eradication Program(NTEP) (RNTCP)",
      "Internal Quality Assurance Cell",
      "Disability Medical Board",
    ],
  },
];

const InfoSections = () => {
  return (
    <div className="bg-[#F0BC71E5] text-[#414141] dm:py-6 dm:px-3 p-6">
      <div className=" container mx-auto px-16 dm:px-2">
        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
              {section.title}
            </h3>
            <p className="text-gray-800 font-sans text-sm sm:text-base">
              {section.links.map((link, i) => (
                <span key={i} className="block sm:inline">
                  {link}
                  {i < section.links.length - 1 && (
                    <span className="hidden sm:inline"> | </span>
                  )}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSections;
