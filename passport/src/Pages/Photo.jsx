import React, { useState } from "react";
import { Upload } from "lucide-react";
import Thirdnavbar from "../navbar/Thirdnavbar";
import { useNavigate } from "react-router-dom";

function Photo() {
  const navigate = useNavigate();
  const [files, setFiles] = useState(Array(9).fill(null)); // Initialize an array for 9 files

  // Handle file change for each field
  const handleFileChange = (index, event) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      console.log(`File selected for index ${index}:`, file); // Log the selected file
      setFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        updatedFiles[index] = file;
        return updatedFiles;
      });
    }
  };

  // Upload files to the backend
  const uploadFiles = async () => {
    // Check if required fields are uploaded
    const requiredFields = [0, 1, 2]; // Corresponding to citizenshipFront, citizenshipBack, nationalId
    const missingFields = requiredFields.filter((index) => !files[index]);

    if (missingFields.length > 0) {
      alert("Please upload all required documents before proceeding.");
      return;
    }

    const formData = new FormData();

    files.forEach((file, index) => {
      if (file) {
        formData.append(`images`, file);
      }
    });

    console.log("Sending formData:", formData);

    try {
      const response = await fetch(
        "http://localhost:8000/api/user/uploadimage",
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        alert("Files uploaded successfully!");
        localStorage.setItem("appoinmentid", data.data[0].appointmentId);
        navigate("/status");
      } else {
        console.error("Upload failed:", data); // Log the error response
        alert("Failed to upload files: " + data.message);
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("An error occurred while uploading files.");
    }
  };

  return (
    <>
      <Thirdnavbar />
      <div className="max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
          Upload Required Documents
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              key: 0,
              label: "Citizenship Certificate (Front Side)",
              required: true,
            },
            {
              key: 1,
              label: "Citizenship Certificate (Back Side)",
              required: true,
            },
            { key: 2, label: "National ID", required: true },
            { key: 3, label: "Marriage Certificate", required: false },
            { key: 4, label: "Additional Information I", required: false },
            { key: 5, label: "Additional Information II", required: false },
            { key: 6, label: "Additional Information III", required: false },
            { key: 7, label: "Supporting Document", required: false },
            { key: 8, label: "License Document", required: false },
          ].map(({ key, label, required }) => (
            <div
              key={key}
              className="flex flex-col items-center gap-2 p-4 border border-gray-300 rounded-lg"
            >
              <label className="text-gray-600 font-medium">
                {label} {required && <span className="text-red-500">*</span>}
              </label>
              <div className="relative w-full">
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                  onChange={(e) => handleFileChange(key, e)}
                />
                <div
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg cursor-pointer 
                  ${
                    files[key]
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                  }`}
                >
                  <Upload className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {files[key] ? "Uploaded" : "Choose File"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={uploadFiles}
          className={`w-full py-3 mt-5 rounded-md text-white font-semibold text-lg transition cursor-pointer
          ${
            files[0] && files[1] && files[2]
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!(files[0] && files[1] && files[2])}
        >
          Upload & Proceed
        </button>
      </div>
    </>
  );
}

export default Photo;
