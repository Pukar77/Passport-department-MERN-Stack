import React from "react";

function Checkstatus() {
  return (
    <div>
      <h1 className="m-5 text-3xl font-bold text-center">
        Check Latest Passport Status
      </h1>

      <div className="flex justify-center items-center">
        <div className="text-center bg-blue-700 w-2xl   min-h-[200px] py-10 px-4 rounded-lg flex flex-col gap-7 items-center ">
          <p className="text-2xl  text-white ">Enter Reference Number</p>
          <input
            className=" bg-white w-60 h-10 p-3 rounded-1xl text-black focus:outline-none"
            type="textbox"
            placeholder="Ref-no"
          />

          <button className="cursor-pointer rounded-lg bg-orange-600 text-white w-40 h-12">
            Check Status
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkstatus;
