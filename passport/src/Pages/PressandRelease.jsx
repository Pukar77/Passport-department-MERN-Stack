import React from 'react';
import Navbar from '../navbar/Navbar';
import Secondnavbar from '../navbar/Secondnavbar';

function PressandRelease() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Secondnavbar />

      <div className="max-w-5xl mx-auto p-6 mt-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          Press and Notice
        </h1>

        <p className="text-gray-700 leading-relaxed text-justify space-y-4">
          The Department of Passports (DoP), under the Ministry of Foreign Affairs, Government of Nepal, maintains a strong commitment to ensuring transparency, accountability, and timely communication with the public. One of the vital channels through which the department interacts with citizens and stakeholders is its <strong>Press and Notices</strong> section. This segment is dedicated to disseminating important announcements, public notices, service updates, procedural changes, and urgent instructions related to passport issuance and travel documents.
          <br /><br />
          In an era where timely and accurate information is essential, the Department has prioritized keeping the public well-informed through official press releases and regular notices. These communications serve multiple purposes — from notifying the public about holidays and office closures, to providing updates on policy changes, newly introduced services, technical maintenance, and digital system upgrades.
          <br /><br />
          The Press and Notices section is especially crucial during times of emergency or major policy shifts. For instance, during natural disasters, political events, or global pandemics, the department uses this platform to inform citizens about altered service hours, safety protocols, or temporary suspensions and resumption of services. It also provides vital guidelines for applying for passports during such critical times.
          <br /><br />
          Moreover, the Department often uses press releases to highlight its achievements, future plans, international collaborations, and technological advancements — such as the introduction of e-passports, integration of biometric systems, and improvements in application tracking mechanisms.
          <br /><br />
          All public notices are issued in both English and Nepali to ensure maximum reach and comprehension among all citizens. These notices are published on the official website, displayed in the premises of the Department, and disseminated through national newspapers and digital platforms for wider accessibility.
          <br /><br />
          Through its Press and Notices, the Department of Passports strives to build trust, ensure transparency, and foster a responsive environment for all service-seekers. The department encourages all applicants and concerned individuals to regularly check this section to stay updated and informed about the latest developments and instructions.
        </p>
      </div>
    </div>
  );
}

export default PressandRelease;
