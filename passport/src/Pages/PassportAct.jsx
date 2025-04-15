import React from 'react';
import Navbar from '../navbar/Navbar';
import Secondnavbar from '../navbar/Secondnavbar';

function PassportAct() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <Secondnavbar />
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-900">Passport Act of Nepal (राहदानी ऐन)</h1>
        <p className="text-lg leading-relaxed mb-6">
          The <strong>Passport Act of Nepal</strong>, officially known as the <strong>Passport Act, 2076 B.S. (2019 A.D.)</strong>,
          is a legal framework enacted by the Government of Nepal to regulate the issuance, renewal, suspension,
          cancellation, and administration of passports and travel documents. This Act replaced older provisions
          with a modern legal structure aligned with <strong>International Civil Aviation Organization (ICAO)</strong> standards.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Objectives and Scope</h2>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Safeguard national security and sovereignty by regulating the issuance of passports.</li>
            <li>Establish clear legal procedures for obtaining travel documents.</li>
            <li>Prevent misuse of Nepali passports.</li>
            <li>Incorporate machine-readable and electronic passports (e-passports).</li>
            <li>Ensure transparency, efficiency, and accountability in passport services.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Applicability</h2>
          <ul className="list-disc list-inside ml-4">
            <li>All Nepali citizens seeking passports.</li>
            <li>Eligible foreign nationals under specific conditions.</li>
            <li>Government bodies involved in passport processing.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Key Provisions</h2>

          <div className="mb-4">
            <h3 className="font-semibold">Types of Passports and Travel Documents:</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Ordinary Passport</li>
              <li>Official Passport</li>
              <li>Diplomatic Passport</li>
              <li>Special Travel Documents</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Issuing Authority:</h3>
            <p>The Department of Passports under the Ministry of Foreign Affairs is the central issuing body.</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Eligibility Criteria:</h3>
            <p>All Nepali citizens with proper documentation are eligible. Special provisions exist for minors and emergencies.</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Validity and Renewal:</h3>
            <p>Valid for 10 years (adults) and 5 years (children under 10). Renewal requires re-verification.</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Fees:</h3>
            <p>Fees vary based on type and urgency of service (normal vs. fast-track).</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Revocation and Suspension:</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Obtained via false documents or fraud.</li>
              <li>Criminal or anti-national activity involvement.</li>
              <li>By judicial or security authority request.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Offenses and Penalties:</h3>
            <p>Strict actions including fines and imprisonment for forgery, misuse, or official misconduct.</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Digital and Biometric Integration:</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Biometric data collection</li>
              <li>Electronic chips (e-passports)</li>
              <li>Linkage with national ID and immigration systems</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Appeals and Legal Recourse:</h3>
            <p>Applicants may appeal to the Ministry and ultimately seek judicial resolution if necessary.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Modernization Through the Act</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Introduction of e-passports (from 2021)</li>
            <li>Improved coordination with foreign missions</li>
            <li>Online application and tracking systems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Conclusion</h2>
          <p>
            The <strong>Passport Act of Nepal</strong> represents the government’s commitment to secure, efficient, and internationally recognized travel documents.
            It strengthens accountability, ensures safety, and simplifies processes for citizens at home and abroad.
          </p>
        </section>
      </div>
    </div>
  );
}

export default PassportAct;
