import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas"; // Import html2canvas
import { useRef } from "react";

function Showstatus() {
  const contentRef = useRef();

  const [id, setId] = useState("");
  const [apiresponse, setApiResponse] = useState({});

  useEffect(() => {
    const storedId = localStorage.getItem("appoinmentid");
    if (storedId) {
      setId(storedId);
    }
  }, []);

  useEffect(() => {
    if (id && id !== "Not available") {
      showuser();
    }
  }, [id]);

  const fixUnsupportedColors = () => {
    const allElements = contentRef.current.querySelectorAll("*");
    allElements.forEach((element) => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      const borderColor = computedStyle.borderColor;

      // Check if the color uses "oklch" and replace it
      if (color.includes("oklch")) {
        element.style.color = "rgb(0, 0, 0)"; // Replace with a default color
      }
      if (backgroundColor.includes("oklch")) {
        element.style.backgroundColor = "rgb(255, 255, 255)"; // Replace with white or your desired color
      }
      if (borderColor.includes("oklch")) {
        element.style.borderColor = "rgb(0, 0, 0)"; // Replace with a default border color
      }
    });

    // Force reflow
    contentRef.current.offsetHeight; // This line forces a reflow
  };

  const handleDownloadPDF = () => {
    fixUnsupportedColors(); // Ensure unsupported colors are fixed

    html2canvas(contentRef.current, {
      useCORS: true,
      scale: 2, // Adjust scale for better resolution
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgWidth = 190; // Adjust width as needed
        const pageHeight = pdf.internal.pageSize.height;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("passport_info.pdf");
      })
      .catch((error) => {
        console.error("Error during HTML to canvas conversion:", error);
      });
  };

  const showuser = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/user/search/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result);
      setApiResponse(result);

      if (response.ok) {
        console.log("Success");
      } else {
        console.log("Failed to handle API request");
      }
    } catch (e) {
      console.log("Error in backend of frontend", e);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div>
        <div ref={contentRef}>
          <Navbar />

          <form>
            <div className="flex justify-center items-center min-h-screen p-4">
              <div className="bg-white shadow-md rounded-lg p-6 md:p-10 w-full max-w-2xl">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
                  Personal Information
                </h1>
                <div className="flex justify-center my-6">
                  <div className="bg-white border border-gray-300 shadow-lg rounded-lg px-6 py-4 text-center">
                    <h2 className="text-gray-600 text-lg font-medium uppercase tracking-wide">
                      Your Reference Number
                    </h2>
                    <p className="text-gray-800 text-2xl font-bold mt-2 tracking-wider">
                      {id}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* First & Last Name */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        value={apiresponse.userdetail?.firstname}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        value={apiresponse.userdetail?.lastname}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block font-medium text-gray-700">
                      Date of Birth
                    </label>
                    <input
                      type="text"
                      name="dob"
                      value={apiresponse.userdetail?.dob}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                      readOnly
                    />
                  </div>

                  {/* Father's Name */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-gray-700">
                        Father's First Name
                      </label>
                      <input
                        type="text"
                        name="fatherfirstname"
                        value={apiresponse.userdetail?.fatherfirstname}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700">
                        Father's Last Name
                      </label>
                      <input
                        type="text"
                        name="fatherlastname"
                        value={apiresponse.userdetail?.fatherlastname}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Mother's Name */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-gray-700">
                        Mother's First Name
                      </label>
                      <input
                        type="text"
                        name="motherfirstname"
                        value={apiresponse.userdetail?.motherfirstname}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700">
                        Mother's Last Name
                      </label>
                      <input
                        type="text"
                        name="motherlastname"
                        value={apiresponse.userdetail?.motherlastname || ""}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                        readOnly
                      />
                    </div>
                  </div>

                  {/* District and Ward Number */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-gray-700">
                        District
                      </label>
                      <input
                        type="text"
                        name="district"
                        value={apiresponse.userdetail?.district}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700">
                        Ward Number
                      </label>
                      <input
                        type="text"
                        name="wardno"
                        value={apiresponse.userdetail?.wardno}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Country and Province */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-gray-700">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={apiresponse.appoinmentdata?.country}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700">
                        Province
                      </label>
                      <input
                        type="text"
                        name="province"
                        value={apiresponse.appoinmentdata?.provience}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Gender Selection */}
                  <div>
                    <label className="block font-medium text-gray-700">
                      Gender
                    </label>
                    <input
                      type="text"
                      name="gender"
                      value={apiresponse.userdetail?.gender}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                      readOnly
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={apiresponse.userdetail?.email}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                      readOnly
                    />
                  </div>

                  {/* Download PDF Button */}
                  <div className="text-center mt-6">
                    <button
                      type="button"
                      onClick={handleDownloadPDF} // Call the function on click
                      className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                    >
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="text-center font-semibold">
          Note: Please visit the Passport deparment or CDO office taking the
          original citizenship as well as this document in printed form.
        </div>
      </div>
    </div>
  );
}

export default Showstatus;
