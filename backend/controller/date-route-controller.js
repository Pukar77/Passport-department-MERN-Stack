const express = require("express");
const dateschema = require("../model/date-model");

const getappointment = async (req, res) => {
  try {
    const { country, provience, date } = req.body;
    const insert = await dateschema.create({ country, provience, date });

    if (insert) {
      req.session.appointmentId = insert._id;
      await req.session.save();
      return res.status(200).json({
        message: "Successfully stored data",
        status: true,
        appointmentId: insert._id,
      });
    } else {
      return res.status(500).json({
        message: "Failed to store data due to internal server issue",
        status: false,
      });
    }
  } catch (e) {
    console.log("Some error occured", e);
  }
};
module.exports = getappointment;
