import React, { useState } from "react";
import Thirdnavbar from "../navbar/Thirdnavbar";
import { useNavigate } from "react-router";

function Userdetail() {
  const navigate = useNavigate();

  const [apidata, setApidata] = useState([]);

  const [userdata, setUserdata] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    fatherfirstname: "",
    fatherlastname: "",
    motherfirstname: "",
    motherlastname: "",
    gender: "",
    district: "",
    wardno: "",
    email: "",
  });

  const validateForm = () => {
    for (const key in userdata) {
      if (userdata[key].trim() === "") {
        alert(`Please fill in all fields.`);
        return false;
      }
    }
    return true;
  };

  const insertintodatabase = async () => {
    console.log("Sending data:", userdata); // Debugging

    try {
      let response = await fetch("http://localhost:8000/api/user/userdetail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
        credentials: "include",
      });

      let data = await response.json();
      // setApidata(data.appoinmentdata);
      console.log("Response received:", data); // Debugging

      if (response.ok) {
        alert("Success");
        navigate("/photo");
      } else {
        alert("Some error occurred");
      }
    } catch (e) {
      console.log("Error while inserting data into database", e);
    }
  };

  const handleinput = (e) => {
    const { name, value } = e.target;
    setUserdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const display = (e) => {
    e.preventDefault();

    if (validateForm()) {
      insertintodatabase();
    }
  };

  return (
    <>
      <Thirdnavbar />
      <form onSubmit={display}>
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 w-full max-w-2xl">
            <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
              Demographic Information
            </h1>

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
                    value={userdata.firstname}
                    onChange={handleinput}
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={userdata.lastname}
                    onChange={handleinput}
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                    required
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
                  value={userdata.dob}
                  onChange={handleinput}
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                  required
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
                    value={userdata.fatherfirstname}
                    onChange={handleinput}
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Father's Last Name
                  </label>
                  <input
                    type="text"
                    name="fatherlastname"
                    value={userdata.fatherlastname}
                    onChange={handleinput}
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                    required
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
                    value={userdata.motherfirstname}
                    onChange={handleinput}
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Mother's Last Name
                  </label>
                  <input
                    type="text"
                    name="motherlastname"
                    value={userdata.motherlastname}
                    onChange={handleinput}
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700">
                    District
                  </label>
                  <input
                    type="text"
                    name="district"
                    value={userdata.district}
                    onChange={handleinput}
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Ward Number
                  </label>
                  <input
                    type="text"
                    name="wardno"
                    value={userdata.wardno}
                    onChange={handleinput}
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Email adddress
                </label>
                <input
                  type="email"
                  name="email"
                  value={userdata.email}
                  onChange={handleinput}
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              {/* Gender Selection */}
              <div>
                <label className="block font-medium text-gray-700">
                  Gender
                </label>
                <div className="flex gap-4 mt-1">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={userdata.gender === "male"}
                      onChange={handleinput}
                      className="form-radio text-blue-500"
                      required
                    />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={userdata.gender === "female"}
                      onChange={handleinput}
                      className="form-radio text-blue-500"
                      required
                    />
                    <span>Female</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="gender"
                      value="others"
                      checked={userdata.gender === "others"}
                      onChange={handleinput}
                      className="form-radio text-blue-500"
                      required
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
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Userdetail;
