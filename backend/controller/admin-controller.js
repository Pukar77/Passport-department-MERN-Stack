const express = require("express");
const adminSchema = require("../model/admin-model");

const admininfo = async (req, res) => {
  try {
    console.log("admininfo function called");
    const newadmin = new adminSchema({
      username: "admin",
      password: "admin",
    });
    await newadmin.save();
    console.log("Admin user created successfully");
    res.status(201).send("Admin created successfully");
  } catch (e) {
    console.log("Error occurred", e);
    res.status(500).send("Error occurred while creating admin");
  }
};

module.exports = admininfo;
