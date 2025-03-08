const express = require("express");
const date = require("../model/date-model");
const user = require("../model/user-detail");
const nodemailer = require("nodemailer");

const adminsearch = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await date.findOne({ _id: id });
    const result1 = await user.findOne({ appointmentId: id });

    if (!result || !result1) {
      return res.status(404).json({
        message: "Passport number is not matching",
        status: false,
      });
    }

    // Setup email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pukarrimal11@gmail.com",
        pass: "afcb wspm jbpe tczz",
      },
    });

    // Email content
    const mailOptions = {
      from: '"Passport Service" <pukarrimal11@gmail.com>',
      to: result1.email, // User's email from database
      subject: "Passport Printing",
      text: `Hello ${result1.firstname},\n\nYour passport has been printed out.\nPlease visit the passport department to obtain it.\n\nThank you!`,
    };

    // Send email
    const emailResponse = await transporter.sendMail(mailOptions);

    console.log("Email sent:", emailResponse.messageId);

    return res.status(200).json({
      message: "Email sent successfully",
      status: true,
      appoinmentdata: result,
      userdetail: result1,
    });
  } catch (error) {
    console.error("Error in adminsearch:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: false });
  }
};

module.exports = adminsearch;
