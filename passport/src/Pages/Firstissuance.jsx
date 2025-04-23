import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import passbuilding from "../assets/passbuilding.jpg";
import { useNavigate } from "react-router";
import Thirdnavbar from "../navbar/Thirdnavbar";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Firstissuance() {
  const [selectedoption, Setselectedoption] = useState(null);
  const navigate = useNavigate();

  const handlenavigate = () => {
    if (!selectedoption) {
      toast.error("You must select an passport type first");
      return;
    } else {
      navigate("/onlineform", { state: { passportType: selectedoption } });
    }
  };

  return (
    <div>
      <Thirdnavbar />
      <ToastContainer/>

      <div className="relative w-full h-40 mt-4 flex justify-center items-center">
        <img
          className="w-full h-40 object-cover object-[top_10%]"
          src={passbuilding}
          alt="Building"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <p className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
          Passport First Issuance
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center border-4 border-green-400 w-4xl mt-2 p-5">
          <p className="text-2xl">यो पढेर मात्र प्रिइनरोलमेन्ट गर्नुहोला</p>
          <p className="text-2xl">READ BEFORE PRE-ENROLLMENT</p>
          <div className="flex flex-col gap-5 mt-4">
            <p>
              १) राहदानीको निवेदन पेश गर्नको लागि प्रिइनरोलमेन्ट पहिलो चरण हो ।
              लाइभइनरोलमेन्ट गर्ने ठाउँमा गएर बायोमेट्रिक बिबरण (तस्विर खिच्ने,
              औठा छाप लगाउने आदि) उपलब्ध गराए पछि मात्र यो चरण पुरा हुन्छ ।
              <br />
              Submission of the pre-enrollment application for a Passport is the
              first step and the process ends with providing biometric details
              (photograph, finger print etc).
            </p>

            <p>
              २) यसरी भरेको निवेदन सच्याउन र लाइभइनरोलमेन्टको लागि बुक गरेको
              मिति १५ दिन भित्र परिवर्तन गर्न सकिन्छ ।<br /> The filled-in
              application can be edited and appointment date can also be
              rescheduled within 15 days.
            </p>
            <p>
              ३) प्रिइनरोलमेन्ट गरेको निवेदन अनिवार्यरुपमा प्रिन्ट गरेर अरु
              कागजात सहित पेश गर्नु पर्दछ । यदि त्यो हरायो भने पुन: लग इन गरेर
              अर्को प्रिन्ट निकाल्नु पर्छ ।<br /> A printed copy of the
              pre-enrolled form must be submitted along with other documents. If
              it is lost, the applicant needs to log in and take another
              printout.
            </p>
            <p>
              {" "}
              ४) यदि लाइभइनरोलमेन्टको लागि समय लिएको दिन सार्वजनिक बिदा पऱ्यो
              भने अर्को समय बुक गर्नु पर्छ । यस्तो अवस्थामा निवेदकले कित १५
              कार्य दिन भित्र अर्को समय लिनु पर्छ कि उक्त समयभित्र सीधै
              इनरोलमेन्ट गर्ने ठाउँमा जानु पर्छ ।<br /> The appointment will be
              canceled if Government announces public holiday on the scheduled
              date and the applicant either needs to set another appointment
              within 15 working days or go to the enrollment station within the
              period.{" "}
            </p>

            <p> Please choose from the following available Passport types</p>
            <div className="flex items-center gap-10">
              <label className="flex items-center gap-2">
                <input
                  className="w-4 h-4"
                  type="radio"
                  name="passport"
                  value="Ordinary 33 page"
                  onChange={(e) => Setselectedoption(e.target.value)}
                />
                Ordinary 33 page
              </label>

              <label className="flex items-center gap-2">
                <input
                  className="w-4 h-4"
                  type="radio"
                  name="passport"
                  value="Ordinary 66 page"
                  onChange={(e) => Setselectedoption(e.target.value)}
                />
                Ordinary 66 page
              </label>
            </div>

            <div className="flex justify-around">
              <NavLink
                to="/"
                className="bg-red-600 px-6 py-2 text-white rounded hover:bg-red-700 transition-all duration-300 text-lg font-medium text-center"
              >
                Cancel
              </NavLink>
              <button
                onClick={handlenavigate}
                className="bg-green-600 cursor-pointer w-34 h-10 text-white transition-all delay-150 duration-300 hover:w-38 hover:h-11 flex items-center justify-center"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstissuance;
