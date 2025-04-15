import React from "react";
import { NavLink } from "react-router-dom";

function Secondnavbar() {
  return (
    <div className="flex justify-center items-center gap-10 mt-10 bg-blue-700 h-20 text-white">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutus">About us</NavLink>
      <NavLink to="/rule">Acts and rules</NavLink>
     
      <NavLink to="/epassport">How to get epassport</NavLink>
      <NavLink to="/press">Press & Notice</NavLink>
      
      <NavLink to="/pass">Passport Act of Nepal</NavLink>
      <NavLink to="/admin">Admin Login</NavLink>
    </div>
  );
}

export default Secondnavbar;
