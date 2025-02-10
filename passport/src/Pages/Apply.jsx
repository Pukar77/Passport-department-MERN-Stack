import React from "react";
import passdepart from "../assets/passbuilding.jpg";
import Applycarts from "../Components/Applycarts";
import Applycarts1 from "../Components/Applycarts1";
import Thirdnavbar from "../navbar/Thirdnavbar";

function Apply() {
  return (
    <>
      <Thirdnavbar/>
      <div className="relative w-full h-screen mt-3">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover"
          src={passdepart}
          alt="Passport department"
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col gap-5 justify-center items-center text-center">
          <p className="text-white text-5xl font-semibold">
            Pre-enrollment for e-Passport
          </p>
          <p className="text-white text-xl">विद्युतीय राहदानीको लागि आवेदन</p>
          <div className="flex gap-10">
            <button className="text-white text-2xl cursor-pointer bg-blue-400 w-60 h-10 hover:bg-amber-300 hover:scale-105 transition-all transtion delay-150 duration-300 ease-in-out">
              Apply for passport
            </button>

            <button className="text-white text-2xl cursor-pointer bg-blue-400 w-60 h-10 hover:bg-amber-300 hover:scale-105 transition-all transtion delay-150 duration-300 ease-in-out">
              Edit/View Application
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 p-10">
          <div className="max-w-md w-full">
            <Applycarts />
          </div>
          <div className="max-w-md w-full">
            <Applycarts1 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Apply;
