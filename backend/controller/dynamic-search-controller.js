const express = require("express");
const date = require("../model/date-model");
const user = require("../model/user-detail");
const image = require("../model/image-model");

const searchdynamically = async (req, res) => {
  const { id } = req.params;
  const result = await date.findOne({ _id: id });
  const result1 = await user.findOne({
    appointmentId: id,
  });

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
module.exports = searchdynamically;
