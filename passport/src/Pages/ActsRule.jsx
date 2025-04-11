import React from "react";
import { Link } from "react-router";

function ActsRule() {
  return (
    <div>
      <Link
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 m-5"
        to="/"
      >
        Go to home page
      </Link>

      <div className="h-screen w-screen scale-100 top-right">
        <iframe
          className="h-full w-full"
          src={"/passport.pdf#zoom=150"}
        ></iframe>
      </div>
    </div>
  );
}

export default ActsRule;
