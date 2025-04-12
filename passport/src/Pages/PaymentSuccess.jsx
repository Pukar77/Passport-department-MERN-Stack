import React from "react";
import payment from "../assets/payment.webp";
import Navbar from "../navbar/Navbar";
import Secondnavbar from "../navbar/Secondnavbar";
import { NavLink } from "react-router-dom"; // corrected import

function PaymentSuccess() {
  return (
    <div>
      <Navbar />
      <Secondnavbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 p-6">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-md text-center">
          <img
            className="mx-auto w-40 h-40 mb-6"
            src={payment}
            alt="Payment Success"
          />
          <h1 className="text-2xl font-bold text-green-700 mb-4">
            Contract Renewed Successfully!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for renewing your contract. We're excited to continue
            working with you and providing seamless service.
          </p>
          <NavLink
            to="/"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-300"
          >
            Go to Home Page
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
