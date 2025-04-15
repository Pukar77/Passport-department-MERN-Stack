import React from 'react'
import Navbar from '../navbar/Navbar'
import Secondnavbar from '../navbar/Secondnavbar'
import { CheckCircle } from 'lucide-react'

function Epassport() {
  return (
    <div>
      <Navbar />
      <Secondnavbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          How to Get an e-Passport in Nepal
        </h1>

        {/* Step 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Online Pre-Enrollment</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Visit the official Department of Passports website: <a href="https://nepalpassport.gov.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">nepalpassport.gov.np</a></li>
            <li>Go to the “Apply for e-Passport” section.</li>
            <li>Fill in the online application form with accurate personal details.</li>
            <li>Choose your nearest passport collection center.</li>
            <li>Book an appointment date and time for biometric enrollment.</li>
            <li>Print the pre-enrollment slip (appointment receipt).</li>
          </ul>
        </div>

        {/* Step 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Document Preparation</h2>
          <p className="text-gray-700 mb-2">Prepare the following documents before your appointment:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Original Nepali Citizenship Certificate</li>
            <li>Previous passport (if applying for renewal)</li>
            <li>Birth Certificate (for minors)</li>
            <li>Marital status verification documents (if applicable)</li>
            <li>Pre-enrollment form and appointment slip</li>
            <li>Passport-size photo (only if requested)</li>
          </ul>
        </div>

        {/* Step 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Visit the Enrollment Center</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Visit the designated office on your appointment date</li>
            <li>Submit your documents at the counter</li>
            <li>Complete biometric enrollment:
              <ul className="ml-6 list-disc">
                <li>Digital photo</li>
                <li>Fingerprints</li>
                <li>Signature capture</li>
              </ul>
            </li>
            <li>Verify your details before final submission</li>
          </ul>
        </div>

        {/* Step 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Pay the Passport Fee</h2>
          <p className="text-gray-700">Pay the applicable fee based on urgency and passport type. Payment methods may vary by location (bank voucher or online).</p>
        </div>

        {/* Step 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Collect Your e-Passport</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Track your application online or wait for SMS notification</li>
            <li>Visit your collection center with:
              <ul className="ml-6 list-disc">
                <li>Your receipt</li>
                <li>Valid identification</li>
              </ul>
            </li>
            <li>Collect your new e-passport from the counter</li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <CheckCircle className="inline-block text-green-600 w-6 h-6 mr-2" />
          <span className="text-green-700 font-medium">Process complete — You're ready to travel with your e-passport!</span>
        </div>
      </div>
    </div>
  )
}

export default Epassport
