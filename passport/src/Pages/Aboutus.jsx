import React from "react";
import Navbar from "../navbar/Navbar";
import Secondnavbar from "../navbar/Secondnavbar";
import intro from "../assets/intro.jpg";

function Aboutus() {
  return (
    <div>
      <Navbar />
      <Secondnavbar />

      {/* Introduction Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gray-100">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4 text-blue-700">Introduction</h1>
          <p className="text-gray-700 leading-relaxed text-justify">
            The Department of Passports (DoP), a Department under Ministry of Foreign Affairs of the Government of Nepal, issues passports to Nepalese citizens and Travel Documents to legally eligible persons in accordance with the Passport Act 2076, Passport Regulations 2077, Passport Directives 2071 (First Amendment), Passport Procedures 2078, ICAO standard and other related government rules and regulations. The Department was established on 26 January 2012 (2068/10/12 B.S.). 
            <br /><br />
            Prior to that, Passport Section under the Protocol Division of the Ministry was assigned with the passport and travel document related functions until the establishment of Central Passport Office (CPO) on 25 May 2010 (2067/02/11 B.S). 
            <br /><br />
            As the demand for passports began to soar rapidly along with the requirement to migrate to machine readable passports, a separate Department was deemed necessary. Department of Passports is committed to providing transparent, efficient, responsive, prompt, predictable and secure service to its service-seekers.
          </p>
        </div>
        <div className="md:w-1/3">
          <img src={intro} alt="Intro" className="rounded-xl shadow-lg w-full object-cover" />
        </div>
      </section>

      {/* Function Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 p-8">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-green-700">Functions</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            The Department of Passports has been assigned the following responsibilities as per the Passport Rules (First and Second Amendment, 2067):
            <ul className="list-disc list-inside mt-3 ml-4">
              <li>To issue the Machine Readable Passport, Electronic Passport, Biometric Passport, and Emergency Passports pursuant to the standard specified by the Document 9303 of International Civil Aviation Organization (ICAO).</li>
              <li>To prepare and submit appropriate passport specifications to the Government of Nepal for approval and distribute passports accordingly.</li>
              <li>To distribute passports following due process of examining required documents.</li>
              <li>To receive applications for travel documents and issue travel documents.</li>
            </ul>
          </p>
        </div>
        <div className="md:w-1/3">
          <img src={intro} alt="Function" className="rounded-xl shadow-lg w-full object-cover" />
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
