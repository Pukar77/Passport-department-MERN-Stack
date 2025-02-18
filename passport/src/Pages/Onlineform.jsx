import React, { useState } from "react";
import Thirdnavbar from "../navbar/Thirdnavbar";
import { useNavigate } from "react-router";

function Onlineform() {
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("Nepal");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [provience, setProvience] = useState("koshi");

  const navigate = useNavigate();

  const handlesubmit = async () => {
    if (date && country) {
      try {
        let response = await fetch(
          "http://localhost:8000/api/user/appointmentdate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              country: country,
              date: date,
              provience: provience,
            }),
            credentials: "include",
          }
        );
        const result = await response.json();
        console.log(result);

        if (response.ok) {
          alert(result.message);
          navigate("/userdetail");
        } else {
          alert(result.message);
        }
      } catch (e) {
        console.log("Some error occured", e);
      }
    } else {
      alert("You must select country and date first");
    }
  };

  // Function to generate a random CAPTCHA
  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8).toUpperCase(); // Generates a 6-character string
  }

  // Handle date selection
  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    const selectedDay = new Date(dateValue).getDay();

    if (selectedDay === 6) {
      alert("Saturday is not available. Please choose another date.");
      setDate(""); // Use setDate to update date
    } else {
      setDate(dateValue); // Use setDate to update date
    }
  };

  // Handle country change
  const handleCountryChange = (event) => {
    setCountry(event.target.value); // Use setCountry to update country
  };

  const handleproviencechange = (e) => {
    setProvience(e.target.value);
  };

  // Handle CAPTCHA input
  const handleCaptchaChange = (event) => {
    setUserCaptcha(event.target.value);
    setIsCaptchaValid(event.target.value.toUpperCase() === captcha);
  };

  // Handle CAPTCHA refresh
  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setUserCaptcha("");
    setIsCaptchaValid(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Thirdnavbar />
      <div className="flex justify-center items-center min-h-screen p-4">
        {/* Card Layout */}
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 w-full max-w-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-700">
            Book Your Appointment
          </h1>

          {/* Country Selection */}
          <div>
            <label className="block font-medium text-gray-600">
              Appointed Country
            </label>
            <select
              className="border-2 w-full p-2 rounded mt-1"
              value={country}
              onChange={handleCountryChange}
            >
              <option value="Nepal">Nepal</option>
              <option value="India">India</option>
              <option value="Bhutan">Bhutan</option>
              <option value="America">America</option>
            </select>
          </div>

          {/* Province Selection (Dimmed if country is not Nepal) */}
          <div
            className={`mt-4 transition-all ${
              country !== "Nepal" ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <label className="block font-medium text-gray-600">
              Appointment Province
            </label>
            <select
              className="border-2 w-full p-2 rounded mt-1"
              disabled={country !== "Nepal"}
              onClick={handleproviencechange}
            >
              <option value="koshi">Koshi</option>
              <option value="Bagmati">Bagmati</option>
              <option value="Sudhur-Pashchim">Sudhur Pashchim</option>
              <option value="Karnali">Karnali</option>
              <option value="Madesh">Madesh</option>
              <option value="Lumbini">Lumbini</option>
            </select>
          </div>

          {/* Date Picker */}
          <div className="mt-6">
            <label className="block font-medium text-gray-600">
              Select Appointment Date
            </label>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="border-2 w-full p-2 rounded mt-1"
            />
          </div>

          {/* CAPTCHA Section */}
          <div className="mt-6">
            <label className="block font-medium text-gray-600">
              Enter CAPTCHA to proceed
            </label>
            <div className="flex items-center space-x-3 mt-2">
              <span className="text-lg font-mono bg-gray-200 px-4 py-2 rounded shadow-inner">
                {captcha}
              </span>
              <button
                onClick={refreshCaptcha}
                className="text-gray-600 hover:text-blue-600"
              >
                🔄
              </button>
            </div>
            <input
              type="text"
              value={userCaptcha}
              onChange={handleCaptchaChange}
              placeholder="Enter CAPTCHA"
              className="border-2 w-full p-2 rounded mt-2"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handlesubmit}
              disabled={!isCaptchaValid}
              className={`w-full py-3 rounded text-white cursor-pointer font-semibold transition ${
                isCaptchaValid
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onlineform;
