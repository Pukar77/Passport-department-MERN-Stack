import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkstatus() {
  const navigate = useNavigate();
  const [refno, setRefno] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!refno) {
      alert("You must enter an refno");
    }
    try {
      const response = await fetch("http://localhost:8000/api/user/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: refno,
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
    <div>
      <h1 className="m-5 text-3xl font-bold text-center">
        Check Latest Passport Status
      </h1>
      <form onSubmit={handlesubmit}>
        <div className="flex justify-center items-center">
          <div className="text-center bg-blue-700 w-2xl   min-h-[200px] py-10 px-4 rounded-lg flex flex-col gap-7 items-center ">
            <p className="text-2xl  text-white ">Enter Reference Number</p>
            <input
              className=" bg-white w-60 h-10 p-3 rounded-1xl text-black focus:outline-none"
              type="textbox"
              placeholder="Ref-no"
              onChange={(e) => setRefno(e.target.value)}
              value={refno}
            />

            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-orange-600 text-white w-40 h-12"
            >
              Check Status
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkstatus;
