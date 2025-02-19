const express = require("express");
const userschema = require("../model/user-detail");

const getuserdetail = async (req, res) => {
  try {
    console.log("Session is ", req.session);
    if (!req.session.appointmentId) {
      return res.status(500).json({
        message: "Please fill out the appoinment form first",
        status: false,
      });
    }
    const appointmentId = req.session.appointmentId;

    const {
      firstname,
      lastname,
      dob,
      fatherfirstname,
      fatherlastname,
      motherfirstname,
      motherlastname,
      gender,
      district,
      wardno,
      email,
    } = req.body;

    const insert = await userschema.create({
      firstname,
      lastname,
      dob,
      fatherfirstname,
      fatherlastname,
      motherfirstname,
      motherlastname,
      gender,
      district,
      wardno,
      email,
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
