const express = require("express");
const Admin = require("../model/admin-model");

// Register Admin
const admininfo = async (req, res) => {
  try {
    console.log("admininfo function called");

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: "admin" });

    if (!existingAdmin) {
      const newAdmin = new Admin({
        username: "admin",
        password: "admin", // Storing plain text password (Not secure)
      });

      await newAdmin.save();
      console.log("Admin user created successfully");
      return res.status(201).send("Admin created successfully");
    } else {
      console.log("Admin already exists");
      return res.status(400).send("Admin already exists");
    }
  } catch (e) {
    console.log("Error occurred", e);
    return res.status(500).send("Error occurred while creating admin");
  }
};

// Login Admin
const loginadmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Fix: Await the database query
    const auth = await Admin.findOne({ username });

    if (auth && auth.password === password) {
      return res.status(200).json({
        message: "Login successful",
        status: true,
      });
    } else {
      return res.status(401).json({
        message: "Invalid username or password",
        status: false,
      });
    }
  } catch (error) {
    console.log("Error during login:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};

// Export both functions correctly
module.exports = admininfo;
module.exports = loginadmin;
