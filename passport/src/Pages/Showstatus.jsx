import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";

function Showstatus() {
  const [id, setId] = useState("");

  useEffect(() => {
    const storedId = localStorage.getItem("appoinmentid");
    setId(storedId || "Not available");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <Navbar />
      <div className="flex justify-center items-center h-screen px-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center transition-all transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Passport Status
          </h2>
          <div className="bg-green-100 text-green-700 font-semibold text-lg py-3 px-6 rounded-md shadow-inner">
            {id}
          </div>
          <p className="mt-6 text-gray-600 font-medium">
            <span className="text-red-500 font-bold">Note:</span> Please enter this passport number in the **Show Status** section, download the **PDF**, and visit the **Passport Department** or **CDO Office**.
          </p>
         
        </div>
      </div>
    </div>
  );
}

export default Showstatus;
