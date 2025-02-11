import React, { useState } from "react";
import { Upload } from "lucide-react";
import Thirdnavbar from "../navbar/Thirdnavbar";
import { useNavigate } from "react-router";

function Photo() {
  const navigate = useNavigate();
  const [files, setFiles] = useState({
    citizenshipFront: null,
    citizenshipBack: null,
    nationalId: null,
  });

  const handleFileChange = (event, key) => {
    setFiles({ ...files, [key]: event.target.files[0] });
  };

  const showStatus = () => {
    if (
      !files.citizenshipFront ||
      !files.citizenshipBack ||
      !files.nationalId
    ) {
      alert(
        "Please upload Citizenship Front, Citizenship Back, and National ID before proceeding."
      );
      return;
    }
    navigate("/status");
  };

  return (
    <>
      <Thirdnavbar />
      <div className="max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
          Upload Required Documents
        </h2>

        {/* Upload Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Citizenship Certificate (Front Side) */}
          <div className="flex flex-col items-center gap-2 p-4 border border-gray-300 rounded-lg">
            <label className="text-gray-600 font-medium">
              Citizenship Certificate (Front Side){" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <input
                type="file"
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                onChange={(e) => handleFileChange(e, "citizenshipFront")}
              />
              <div
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg cursor-pointer 
                ${
                  files.citizenshipFront
                    ? "bg-green-100 text-green-600"
                    : "bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                }`}
              >
                <Upload className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {files.citizenshipFront ? "Uploaded" : "Choose File"}
                </span>
              </div>
            </div>
          </div>

          {/* Citizenship Certificate (Back Side) */}
          <div className="flex flex-col items-center gap-2 p-4 border border-gray-300 rounded-lg">
            <label className="text-gray-600 font-medium">
              Citizenship Certificate (Back Side){" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <input
                type="file"
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                onChange={(e) => handleFileChange(e, "citizenshipBack")}
              />
              <div
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg cursor-pointer 
                ${
                  files.citizenshipBack
                    ? "bg-green-100 text-green-600"
                    : "bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                }`}
              >
                <Upload className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {files.citizenshipBack ? "Uploaded" : "Choose File"}
                </span>
              </div>
            </div>
          </div>

          {/* National ID */}
          <div className="flex flex-col items-center gap-2 p-4 border border-gray-300 rounded-lg">
            <label className="text-gray-600 font-medium">
              National ID <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <input
                type="file"
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                onChange={(e) => handleFileChange(e, "nationalId")}
              />
              <div
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg cursor-pointer 
                ${
                  files.nationalId
                    ? "bg-green-100 text-green-600"
                    : "bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                }`}
              >
                <Upload className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {files.nationalId ? "Uploaded" : "Choose File"}
                </span>
              </div>
            </div>
          </div>

          {/* Other Documents */}
          {[
            "Academic Certificate",
            "Marriage Certificate",
            "Any Other Supporting Certificate",
            "Additional I",
            "Additional II",
            "Additional III",
          ].map((doc, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 border border-gray-300 rounded-lg"
            >
              <label className="text-gray-600 font-medium">{doc}</label>
              <div className="relative w-full">
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                />
                <div className="flex items-center justify-center gap-2 py-3 px-4 bg-blue-100 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-200 transition">
                  <Upload className="w-5 h-5" />
                  <span className="text-sm font-medium">Choose File</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={showStatus}
          className={`w-full py-3 mt-5 rounded-md text-white font-semibold text-lg transition 
          ${
            files.citizenshipFront && files.citizenshipBack && files.nationalId
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={
            !files.citizenshipFront ||
            !files.citizenshipBack ||
            !files.nationalId
          }
        >
          Proceed
        </button>
      </div>
    </>
  );
}

export default Photo;
