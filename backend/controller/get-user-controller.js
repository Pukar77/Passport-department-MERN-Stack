const express = require("express");
const mongoose = require("mongoose");
const user = require("../model/date-model");

const getalluser = async (req, res) => {
  try {
    const alldata = await user.find({}, "_id");
    if (alldata.length > 0) {
      return res.status(200).json({
        message: "All user retrieved successfully",
        status: true,
        alldata,
      });
    } else {
      return res.status(404).json({
        message: "Failed to fetch the user detail",
        status: false,
      });
    }
  } catch (e) {
    console.log("Some error occured", e);
  }
};

module.exports = getalluser;
