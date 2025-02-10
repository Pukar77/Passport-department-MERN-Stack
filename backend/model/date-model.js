const express = require("express");
const mongoose = require("mongoose");

const dateSchema = new mongoose.Schema({
  country: {
    require: true,
    type: String,
  },
  provience: {
    type: String,
  },
  date: {
    require: true,
    type: Date,
  },
});
module.exports = mongoose.model("appointment", dateSchema);
