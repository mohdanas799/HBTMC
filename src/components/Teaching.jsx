import React from "react";

const Teaching = () => {
  return (
    <section className="bg-gray-100 p-8 px-20 dm:px-6 container mx-auto">
      {/* Email section */}
      <div className="text-gray-600 flex items-center mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12H3m13 0a4 4 0 01-4-4V5m0 14v-3m0-3h11m0 0a4 4 0 01-4 4h-3"
          />
        </svg>
        <p>anatomyhbtmc@gmail.com</p>
      </div>

      {/* Teaching Faculty Table */}
      <div className="bg-white shadow-md rounded-2xl mb-8">
        <h2 className="text-2xl font-bold text-gray-800 p-6">Teaching Faculty</h2>
        <table className="min-w-full text-left border-separate" style={{ borderSpacing: "0" }}>
          <thead>
            <tr className="bg-indigo-900 text-white">
              <th className="p-4 rounded-tl-xl">SR No.</th>
              <th className="p-4 border-l border-white">Name of Faculty</th>
              <th className="p-4 border-l border-white rounded-tr-xl">Designation</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 font-sanss">
            {/* Teaching Faculty Rows */}
            {[
              { id: 1, name: "Dr. Mehera Bhoir", designation: "Professor & Head" },
              { id: 2, name: "Dr. Meenakshi Borkar", designation: "Associate Professor" },
              { id: 3, name: "Dr. Swapna Chavan", designation: "Associate Professor" },
              { id: 4, name: "Dr. Nilofer Mulla", designation: "Assistant Professor" },
              { id: 5, name: "Dr. Neha Saraf", designation: "Assistant Professor" },
              { id: 6, name: "Mrs. Deepika Rani", designation: "Assistant Professor" },
              { id: 7, name: "Dr. Aparna Dhoke", designation: "Junior Resident 2" },
              { id: 8, name: "Dr. Raina Sanasam", designation: "Junior Resident 2" },
              { id: 9, name: "Dr. Namrata Nage", designation: "Junior Resident 2" },
              { id: 10, name: "Dr. Malu Murali", designation: "Junior Resident 1" },
              { id: 11, name: "Dr. Smita Khade", designation: "Tutor" },
            ].map((faculty, index) => (
              <tr key={faculty.id} className=" rounded-md">
                <td className={`p-4 ${index === 10 ? 'rounded-bl-xl' : ''}`}>{faculty.id}</td>
                <td className="p-4 border-l border-gray-300">{faculty.name}</td>
                <td className={`p-4 border-l border-gray-300 ${index === 10 ? 'rounded-br-xl' : ''}`}>{faculty.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Non-Teaching Staff Table */}
      <div className="bg-white shadow-md rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 p-6">Non Teaching Staff</h2>
        <table className="min-w-full text-left border-separate" style={{ borderSpacing: "0" }}>
          <thead>
            <tr className="bg-indigo-900 text-white">
              <th className="p-4 rounded-tl-xl">SR No.</th>
              <th className="p-4 border-l border-white">Name of Faculty</th>
              <th className="p-4 border-l border-white rounded-tr-xl">Designation</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 font-sanss">
            {/* Non-Teaching Staff Rows */}
            {[
              { id: 1, name: "Mr. Sameer Ausekar", designation: "Lab-Technician" },
              { id: 2, name: "Mr. Rupesh Bagwe", designation: "Clerk" },
            ].map((staff, index) => (
              <tr key={staff.id} className=" rounded-md">
                <td className={`p-4 ${index === 1 ? 'rounded-bl-xl' : ''}`}>{staff.id}</td>
                <td className="p-4 border-l border-gray-300">{staff.name}</td>
                <td className={`p-4 border-l border-gray-300 ${index === 1 ? 'rounded-br-xl' : ''}`}>{staff.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Teaching;