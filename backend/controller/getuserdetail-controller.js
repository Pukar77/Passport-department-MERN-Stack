const express = require("express");
const userschema = require("../model/user-detail");

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

    const insert = userschema.create({
      firstname,
      lastname,
      dob,
      fatherfirstname,
      fatherlastname,
      motherfirstname,
      motherlastname,
      gender,
    });

    if (insert) {
      return res.status(200).json({
        message: "Successfully inserted into database",
        status: true,
      });
    } else {
      return res.status(500).json({
        message: "Failed to insert data in database",
        status: false,
      });
    }
  } catch (e) {
    console.log("Some error occured while inserting data to database", e);
  }
};
module.exports = getuserdetail;
