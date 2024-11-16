import React from 'react';

const TimeTable = () => {
  return (
    <section className="bg-gray-100 p-8 container mx-auto px-20 dm:px-6 text-black">
      <h2 className="text-2xl font-bold mb-6">Time Table Batch 2023 - 2024</h2>
      
      {/* Timetable Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="p-3 text-left rounded-tl-lg">Date and Day</th>
              <th className="p-3 text-left">9:30 AM - 10:15 AM</th>
              <th className="p-3 text-left">10:15 AM - 11:00 AM</th>
              <th className="p-3 text-left">10:15 AM - 11:00 AM</th>
              <th className="p-3 text-left">10:15 AM - 11:00 AM</th>
              <th className="p-3 text-left">9:30 AM - 10:15 AM</th>
              <th className="p-3 text-left">10:15 AM - 11:00 AM</th>
              <th className="p-3 text-left">10:15 AM - 11:00 AM</th>
              <th className="p-3 text-left rounded-tr-lg">10:15 AM - 11:00 AM</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {/* Row 1 */}
            <tr className="border-b">
              <td className="p-3">01-09-2023 Friday</td>
              <td className="p-3">Dean’s Address</td>
              <td className="p-3">Dean’s Address</td>
              <td className="p-3">Dean’s Address</td>
              <td className="p-3">Dean’s Address</td>
              <td className="p-3">Break</td>
              <td className="p-3">Campus visit (1st MBBS) by Senior Council students & Parent Teacher Meeting</td>
              <td className="p-3">Campus visit (1st MBBS) by Senior Council students & Parent Teacher Meeting</td>
              <td className="p-3">Campus visit (1st MBBS) by Senior Council students & Parent Teacher Meeting</td>
            </tr>

            {/* Row 2 */}
            <tr className="border-b">
              <td className="p-3">02-09-2023 Saturday</td>
              <td className="p-3">Foundation Course</td>
              <td className="p-3">Foundation Course</td>
              <td className="p-3">Foundation Course</td>
              <td className="p-3">Foundation Course</td>
              <td className="p-3">Break</td>
              <td className="p-3">Foundation Course</td>
              <td className="p-3">Foundation Course</td>
              <td className="p-3">Foundation Course</td>
            </tr>

            {/* Row 3 */}
            <tr className="border-b">
              <td className="p-3">05-09-2023 Tuesday</td>
              <td className="p-3">Foundation Course</td>
              <td className="p-3">Foundation Course</td>
              <td className="p-3">Foundation Course</td>
              <td className="p-3">Foundation Course</td>
              <td className="p-3">Break</td>
              <td className="p-3">Foundation Course</td>
              <td className="p-3">Foundation Course</td>
              <td className="p-3">Foundation Course</td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td className="p-3">07-09-2023 Thursday</td>
              <td className="p-3">Holiday</td>
              <td className="p-3">Holiday</td>
              <td className="p-3">Holiday</td>
              <td className="p-3">Holiday</td>
              <td className="p-3">Holiday</td>
              <td className="p-3">Holiday</td>
              <td className="p-3">Holiday</td>
              <td className="p-3">Holiday</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TimeTable;