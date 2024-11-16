import React from "react";

const Activities = () => {
  return (
    <section className="bg-gray-100 p-8 container mx-auto px-20 dm:px-6 text-black">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-8">Activities of the Department</h2>

      {/* Upcoming Events */}
      <div className="mb-8 font-sanss">
        <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
        <ul className="list-disc pl-5">
          <li>World Organ Donation Day - 13th August 2022</li>
        </ul>
      </div>

      {/* Awards */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Awards</h3>
        <p className="font-sanss">
          <strong>Addition:</strong> Dr. Mehera Bhoir was awarded the Savitribai Phule Award by the SPGRC and MCGM in her capacity as the Chairperson of the PSHWW Committee on the occasion of International Women’s Day on 8th March 2022.
        </p>
      </div>

      {/* UG Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">UG</h3>
        <p className="font-sanss">
          The department of Anatomy imparts holistic medical education to 200 undergraduate medical students in accordance with the CBME guidelines provided by the NMC, including all aspects of human anatomy as well as bioethics, AETCOM, ECE, SDL, and foundation courses to mold competent and compassionate healthcare providers of the future. The department also encourages an innovative approach to teaching and promotes research in the field of Anatomy.
        </p>
      </div>

      {/* PG Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">PG</h3>
        <p className="font-sanss">
          The department has been approved to train 5 postgraduate students for MD Anatomy degree by MUHS and NMC.
        </p>
      </div>

      {/* Research Publications */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Research Publications (2019-20, 2020-21)</h3>
        <ul className="list-disc pl-5 font-sanss">
          <li>
            Bilateral variations in the terminal branches of facial nerve - a case report<br />
            <strong>Authors:</strong> Alka Bhingardeo, Mehera Bhoir, Tejas Shelar<br />
            <em>MedPulse-International Journal of Anatomy. Feb 2019;9(2):21-23</em>
          </li>
          <li>
            An Anatomical evaluation of variations in the terminal branching pattern of Facial Nerve<br />
            <strong>Authors:</strong> Alka Bhingardeo, Mehera Bhoir<br />
            <em>MedPulse-International Journal of Anatomy. May 2019: 10(2):45-49</em>
          </li>
          <li>
            Inferior mesenteric vein variation in draining pattern: A cadaver study<br />
            <strong>Authors:</strong> Borkar M, Chavan S, Bhoir M<br />
            <em>MedPulse-International Journal of Anatomy. June 2019;10(3):54-56</em>
          </li>
          <li>
            Subhepatic caecum – its clinical and embryological significance<br />
            <strong>Authors:</strong> Shobha Verma, Mehera Bhoir, Manisha Nakhate<br />
            <em>Medpulse – International Journal of Anatomy. July 2019-11(1):23-25</em>
          </li>
          <li>
            Comparative study for estimation of fetal weight by using two different ultrasonographical formulae in high risk pregnant patients<br />
            <strong>Authors:</strong> Rupali S. Kavitake, Mehera Bhoir<br />
            <em>Medpulse – International Journal of Anatomy October 2019, 12(1):31-35</em>
          </li>
          <li>
            Morphometric Study of Ventral Branches of Abdominal Aorta<br />
            <strong>Authors:</strong> Prajkta Karuley, Mehera Bhoir, MV Ambiye<br />
            <em>Indian Journal of Anatomy, vol 9 number 2 April June 2020;9(2):112-117</em>
          </li>
          <li>
            Study of Microscopic Features of Placenta In Pregnancy Induced Hypertension<br />
            <strong>Authors:</strong> Shraddha Bhadarge, Mehera Bhoir<br />
            <em>International Journal of Medical Science and Innovative Research (IJMSIR) Volume – 5, Issue – 4, July – 2020, Page No.: 239 – 245</em>
          </li>
          <li>
            Study of Morphological Changes of Placenta in Pregnancy Induced Hypertension<br />
            <strong>Authors:</strong> Shraddha Bhadarge, Mehera Bhoir<br />
            <em>International Journal of Medical Science and Innovative Research (IJMSIR) Volume – 5, Issue – 4, August – 2020, Page No.: 147 – 153</em>
          </li>
        </ul>
      </div>

      {/* Additional Courses */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Additional Courses</h3>
        <p className="font-sanss">Teaching 1st year Nursing students.</p>
      </div>

      {/* CMEs and Other Activities */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Details of Following Activities Since Inception</h3>
        <ul className="list-disc pl-5 font-sanss">
          <li>Conducted the following CMEs:</li>
          <ul className="list-disc pl-10">
            <li>Medical Genetics in 2016</li>
            <li>Cadaveric Endoscopy in collaboration with departments of ENT and Orthopedics in 2017</li>
          </ul>
          <li>Organised the Dr. Ganesh Shinde Oration in 2017 and 2018</li>
          <li>Organised the Sixth Foundation Day Celebrations of HBTMC on 15th June 2021</li>
          <li>Organised World Organ Donation day on 13th August</li>
        </ul>
      </div>
    </section>
  );
};

export default Activities;