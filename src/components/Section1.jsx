// InfoSections.js
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
    <div className="bg-yellow-600 text-black px-20 dm:px-5 p-8">
      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">{section.title}</h3>
          <p className="text-gray-800 font-sanss">
            {section.links.map((link, i) => (
              <span key={i}>
                {link}
                {i < section.links.length - 1 && " | "}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InfoSections;
