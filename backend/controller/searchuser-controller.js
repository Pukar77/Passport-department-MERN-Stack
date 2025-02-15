const express = require("express");
const date = require("../model/date-model");
const user = require("../model/user-detail");
const image = require("../model/image-model");

const searchuser = async (req, res) => {
  const { userid } = req.body;
  const result = await date.findOne({ _id: userid });
  const result1 = await user.findOne({ appointmentId: userid });

  if (result && result1) {
    return res.status(200).json({
      message: "Passport Recovering going on",
      status: true,
      appoinmentdata: result,
      userdetail: result1,
    });
  } else {
    return res.status(500).json({
      message: "Passport number is not matching",
      status: false,
    });
  }
};
module.exports = searchuser;
