import React from "react";
import Thirdnavbar from "../navbar/Thirdnavbar";

function Userdetail() {
  return (
    <>
      <Thirdnavbar />

      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        {/* Form Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 w-full max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
            Demographic Information
          </h1>

          <form className="space-y-4">
            {/* First & Last Name */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
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
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Father's Last Name
                </label>
                <input
                  type="text"
                  name="fatherlastname"
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
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
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Mother's Last Name
                </label>
                <input
                  type="text"
                  name="motherlastname"
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Gender Selection */}
            <div>
              <label className="block font-medium text-gray-700">Gender</label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="form-radio text-blue-500"
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="form-radio text-blue-500"
                  />
                  <span>Female</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="others"
                    className="form-radio text-blue-500"
                  />
                  <span>Others</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Userdetail;
