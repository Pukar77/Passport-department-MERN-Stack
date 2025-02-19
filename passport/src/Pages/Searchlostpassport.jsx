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
        body: JSON.stringify({
          userid: passport,
        }),
      });
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        navigate("/statusresult", { state: { userData: result } });
      } else {
        console.log("Failed to handle api request");
      }
    } catch (e) {
      console.log("Error in backend of frontend", e);
    }
  };
  return (
    <>
      <Navbar />
      <Secondnavbar />
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
      <div className=" flex flex-col justify-center items-center mt-4">
        <div className="w-2xl flex flex-col justify-center items-center gap-2 ">
          <label className="block font-bold text-2xl text-gray-600">
            Enter Your Passport Number
          </label>
          <input
            value={passport}
            onChange={(e) => setPassport(e.target.value)}
            className="border-2 w-full p-2 rounded mt-1"
            type="text"
          />
        </div>

        <div>
          <button
            onClick={handlesubmit}
            className="cursor-pointer bg-[#EF510A] text-white font-medium p-3 w-30 hover:p-4 hover:w-35 transition-all transtion delay-150 duration-300 ease-in-out mt-4 "
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Searchlostpassport;
