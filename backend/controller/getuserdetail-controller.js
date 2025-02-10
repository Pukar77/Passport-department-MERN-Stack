const express = require("express");
const userdetail = require("../model/user-detail");

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
  } catch (e) {
    console.log("Some error occured while inserting data to database", e);
  }
};
