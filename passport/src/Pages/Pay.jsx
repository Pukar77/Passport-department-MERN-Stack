import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

function Pay() {
  const [formdata, Setformdata] = useState({
    amount: "100",
    tax_amount: "0",
    total_amount: "100",
    transaction_uuid: uuidv4(),
    product_service_charge: "0",
    product_delivery_charge: "0",
    product_code: "EPAYTEST",
    success_url: "https://localhost:5173/success",
    failure_url: "https://localhost:5173/failure",
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature: "",
    secret: "8gBm/:&EnhH.1/q",
  });

  //generate signature function
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

  //useeffect
  useEffect(() => {
    const { total_amount, transaction_uuid, product_code, secret } = formdata;
    const hashedSignature = generatesignature(
      total_amount,
      transaction_uuid,
      product_code,
      secret
    );
    console.log(hashedSignature);

    Setformdata({ ...formdata, signature: hashedSignature });
  }, [formdata.amount]);

  const formsubmit = (e) => {
    // e.preventDefault();
    console.log(formdata);
  };

  return (
    <div>
      <form
        onSubmit={formsubmit}
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
        <input
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
        />

        <input
          type="text"
          id="tax_amount"
          name="tax_amount"
          value={formdata.tax_amount}
          required
        />
        <input
          type="text"
          id="total_amount"
          name="total_amount"
          value={formdata.total_amount}
          required
        />
        <input
          type="text"
          id="transaction_uuid"
          name="transaction_uuid"
          value={formdata.transaction_uuid}
          required
        />
        <input
          type="text"
          id="product_code"
          name="product_code"
          value={formdata.product_code}
          required
        />
        <input
          type="text"
          id="product_service_charge"
          name="product_service_charge"
          value={formdata.product_service_charge}
          required
        />
        <input
          type="text"
          id="product_delivery_charge"
          name="product_delivery_charge"
          value={formdata.product_delivery_charge}
          required
        />
        <input
          type="text"
          id="success_url"
          name="success_url"
          value={formdata.success_url}
          required
        />
        <input
          type="text"
          id="failure_url"
          name="failure_url"
          value={formdata.failure_url}
          required
        />
        <input
          type="text"
          id="signed_field_names"
          name="signed_field_names"
          value={formdata.signed_field_names}
          required
        />
        <input
          type="text"
          id="signature"
          name="signature"
          value={formdata.signature}
          required
        />
        <input value="Submit" type="submit" />
      </form>
    </div>
  );
}

export default Pay;
