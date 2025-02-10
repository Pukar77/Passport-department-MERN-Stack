import React from "react";
import logo from "../assets/logo.png";

function Thirdnavbar() {
  return (
    <div>
      <div className="flex justify-around items-center mt-5">
        <img className="h-17" src={logo} alt="Nepal government logo" />
        <div className="flex gap-20">
          <a href="#">Home</a>
          <a href="#">Services</a>
        </div>
      </div>
    </div>
  );
}

export default Thirdnavbar;
