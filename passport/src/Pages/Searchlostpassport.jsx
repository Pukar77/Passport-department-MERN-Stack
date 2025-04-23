import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Secondnavbar from "../navbar/Secondnavbar";
import passdepart from "../assets/passbuilding.jpg";
import { useNavigate } from "react-router";

function Searchlostpassport() {
  const navigate = useNavigate();
  const [passport, setPassport] = useState("");

  const handlesubmit = async () => {
    if (!passport) {
      alert("You must enter your passport number first");
      return;
    }
    try {
      const response = await fetch("http://localhost:8000/api/user/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userid: passport }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        navigate("/statusresult", { state: { userData: result } });
      } else {
        console.log("Failed to handle API request");
      }
    } catch (e) {
      console.log("Error in backend of frontend", e);
    }
  };

  return (
    <>
      <Navbar />
      <Secondnavbar />
      {/* Header Section */}
      <div className="relative w-full h-40 mt-4 flex justify-center items-center">
        <img
          className="w-full h-40 object-cover object-[top_10%]"
          src={passdepart}
          alt="Building"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <p className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
          Search Lost Passport
        </p>
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center items-center mt-8 px-4">
        <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
          <label className="block text-xl font-semibold text-gray-700 mb-2 text-center">
            Enter Your Passport Number
          </label>
          <input
            value={passport}
            onChange={(e) => setPassport(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            placeholder="e.g., N1234567"
          />
          <button
            onClick={handlesubmit}
            className="w-full mt-4 bg-[#EF510A] hover:bg-orange-600 text-white font-semibold py-2 rounded transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Searchlostpassport;
