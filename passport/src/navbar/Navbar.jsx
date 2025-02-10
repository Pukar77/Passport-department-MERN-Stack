import React from "react";
import logo from "../assets/logo.png";
import nepalgif from "../assets/nepalgif.gif";

function Navbar() {
  return (
    <div>
      <div className="flex justify-center items-center gap-20">
        <img clas src={logo} alt="Logo of Passport department" />
        <div>
          <p> The First NS/ISO 9001:2015 </p>

          <p>Certified Government Organization of Nepal</p>
        </div>
        <img className="h-16" src={nepalgif} alt="Nepal Flag" />
      </div>
    </div>
  );
}

export default Navbar;
