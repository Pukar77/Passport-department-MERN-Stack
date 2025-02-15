const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    require: true,
    type: String,
  },
  lastname: {
    require: true,
    type: String,
  },
  dob: {
    require: true,
    type: String,
  },

  fatherfirstname: {
    require: true,
    type: String,
  },

  fatherlastname: {
    require: true,
    type: String,
  },

  motherfirstname: {
    require: true,
    type: String,
  },

  motherlastname: {
    require: true,
    type: String,
  },

  gender: {
    require: true,
    type: String,
  },
  appointmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "appointment", // Reference to the Appointment Schema
    required: true,
  },
});

module.exports = mongoose.model("userdetail", userSchema);
