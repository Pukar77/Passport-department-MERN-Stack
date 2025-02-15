const express = require("express");
const userschema = require("../model/user-detail");
const dateschema = require("../model/date-model");

const getuserdetail = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      dob,
      fatherfirstname,
      fatherlastname,
      motherfirstname,
      motherlastname,
      gender,
    } = req.body;

    // Find the latest appointment entry (sorted by creation time)
    const latestAppointment = await dateschema.findOne().sort({ _id: -1 });

    if (!latestAppointment) {
      return res.status(400).json({
        message: "No appointment found. Please create an appointment first.",
      });
    }

    const appointmentId = latestAppointment._id; // Get the latest appointment's ID

    // Create user entry linked to the latest appointment
    const insert = await userschema.create({
      firstname,
      lastname,
      dob,
      fatherfirstname,
      fatherlastname,
      motherfirstname,
      motherlastname,
      gender,
      appointmentId, // Store reference automatically
    });

    return res.status(200).json({
      message: "Successfully inserted into database",
      status: true,
      userId: insert._id,
      appointmentId, // Return associated appointment ID
    });
  } catch (e) {
    console.error("Some error occurred while inserting data", e);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getuserdetail;
