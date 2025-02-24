import React from "react";
import { NavLink } from "react-router-dom";

function Secondnavbar() {
  return (
    <div className="flex justify-center items-center gap-10 mt-10 bg-blue-700 h-20 text-white">
      <a href="#">Home</a>
      <a href="#">About us</a>
      <a href="#">Acts and rules</a>
      <a href="#">Citizens Charter</a>
      <a href="#">Download</a>
      <a href="#">Press & Notice</a>
      <a href="#">Gallery</a>
      <a href="#">Blog</a>
      <NavLink to="/admin">Admin Login</NavLink>
    </div>
  );
}

export default Secondnavbar;
