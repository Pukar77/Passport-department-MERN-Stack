import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
import Secondnavbar from "../navbar/Secondnavbar";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router";

function Pay() {
  const [formdata, Setformdata] = useState({
    amount: "2000",
    tax_amount: "0",
    total_amount: "2000",
    transaction_uuid: uuidv4(),
    product_service_charge: "0",
    product_delivery_charge: "0",
    product_code: "EPAYTEST",
    success_url: "http://localhost:5173/paymentsuccess",
    failure_url: "http://localhost:5173/failure",
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature: "",
    secret: "8gBm/:&EnhH.1/q",
  });

  // Generate signature function
  const generatesignature = (
    total_amount,
    transaction_uuid,
    product_code,
    secret
  ) => {
    const hashstring = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
    const hash = CryptoJS.HmacSHA256(hashstring, secret);
    const hashedsignature = CryptoJS.enc.Base64.stringify(hash);
    return hashedsignature;
  };

  useEffect(() => {
    const { total_amount, transaction_uuid, product_code, secret } = formdata;
    const hashedSignature = generatesignature(
      total_amount,
      transaction_uuid,
      product_code,
      secret
    );
    Setformdata((prev) => ({ ...prev, signature: hashedSignature }));
  }, [formdata.amount]);

  const formsubmit = (e) => {
    console.log(formdata);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Navbar />
      <Secondnavbar />
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🔄 Passport Renewal Portal
        </h2>
        <p className="text-gray-600 mb-4">
          Welcome back! We're glad to continue this journey with you. Please
          review the payment details below and proceed to renew your Passport
          seamlessly through our secure eSewa integration. This process ensures
          uninterrupted service and keeps everything running smoothly.
        </p>
        <p className="text-gray-600 mb-6">
          Your trust means everything to us, and we're committed to providing
          you with the best experience possible. If you have any questions or
          need assistance, feel free to reach out — we’re here to help.
        </p>

        <form
          onSubmit={formsubmit}
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
          className="space-y-4"
        >
          <label className="block text-sm font-medium text-gray-700">
            Amount (Rs)
          </label>
          <input
            className="border border-gray-300 rounded px-3 py-2 w-full"
            type="text"
            id="amount"
            name="amount"
            value={formdata.amount}
            onChange={({ target }) => {
              Setformdata({
                ...formdata,
                amount: target.value,
                total_amount: target.value,
              });
            }}
            required
            readOnly
          />

          {/* Hidden Fields */}
          <input type="hidden" name="tax_amount" value={formdata.tax_amount} />
          <input
            type="hidden"
            name="total_amount"
            value={formdata.total_amount}
          />
          <input
            type="hidden"
            name="transaction_uuid"
            value={formdata.transaction_uuid}
          />
          <input
            type="hidden"
            name="product_code"
            value={formdata.product_code}
          />
          <input
            type="hidden"
            name="product_service_charge"
            value={formdata.product_service_charge}
          />
          <input
            type="hidden"
            name="product_delivery_charge"
            value={formdata.product_delivery_charge}
          />
          <input
            type="hidden"
            name="success_url"
            value={formdata.success_url}
          />
          <input
            type="hidden"
            name="failure_url"
            value={formdata.failure_url}
          />
          <input
            type="hidden"
            name="signed_field_names"
            value={formdata.signed_field_names}
          />
          <input type="hidden" name="signature" value={formdata.signature} />

          <label
            htmlFor="passport_id"
            className="block text-sm font-medium text-gray-700"
          >
            Enter your e-Passport ID
          </label>
          <input
            type="text"
            id="passport_id"
            name="passport_id"
            placeholder="E.g., 123456789"
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            required
          />
          <input
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300"
            value="Renew Contract"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Pay;
