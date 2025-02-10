const mongoose = require("mongoose");

const dbconnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pukarrimal11:pukarrimal11@cluster0.octkw.mongodb.net/passport"
    );
    console.log("Database connection successfull");
  } catch (e) {
    console.log("Error occured while connecting through database ");
  }
};

module.exports = dbconnection;
