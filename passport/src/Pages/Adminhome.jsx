import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Secondnavbar from "../navbar/Secondnavbar";

function Adminhome() {
  const [apidata, setApiData] = useState({ alldata: [] });

  const handleapi = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/user/getuser");
      const data = await response.json();
      console.log(data);
      setApiData(data);
    } catch (e) {
      console.log("Some error occurred while fetching API");
    }
  };

  useEffect(() => {
    handleapi();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Secondnavbar />
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-2 text-left">User ID</th>
                <th className="px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {apidata.alldata.length > 0 ? (
                apidata.alldata.map((item) => (
                  <tr key={item._id} className="border-t border-gray-200">
                    <td className="px-4 py-3 text-gray-700">{item._id}</td>
                    <td className="px-4 py-3 text-center">
                      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-200 cursor-pointer">
                        Verify Now
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center py-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Adminhome;
