const imageModel = require("../model/image-model");
const dateschema = require("../model/date-model");
const uploadToCloudinary = require("../helper/Cloudinary-helper");
const fs = require("fs");
const path = require("path");

const uploadImage = async (req, res) => {
  try {
    if(!req.session.appointmentId){
      return res.status(500).json({
        
      })
    }
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No images uploaded" });
    }

    // Find the latest appointment entry
    const latestAppointment = await dateschema.findOne().sort({ _id: -1 });

    if (!latestAppointment) {
      return res.status(400).json({
        message: "No appointment found. Please create an appointment first.",
      });
    }

    const appointmentId = latestAppointment._id; // Get the latest appointment's ID

    const uploadedImages = await Promise.all(
      req.files.map(async (file) => {
        try {
          const { url, publicId } = await uploadToCloudinary(file.path);

          // Save to database with appointmentId
          const savedImage = await imageModel.create({
            url,
            publicId,
            appointmentId,
          });

          // Delete file only if Cloudinary upload is successful
          const filePath = path.resolve(file.path);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }

          return savedImage;
        } catch (error) {
          console.error(`Error uploading file: ${file.filename}`, error);
          return null;
        }
      })
    );

    // Remove any null values (failed uploads)
    const successfulUploads = uploadedImages.filter((img) => img !== null);

    if (successfulUploads.length === 0) {
      return res.status(500).json({
        status: "Error",
        message: "All uploads failed",
      });
    }

    return res.status(200).json({
      status: "Success",
      message: "Successfully uploaded images",
      data: successfulUploads,
    });
  } catch (error) {
    console.error("Error uploading images:", error);
    return res.status(500).json({ status: "Error", message: "Upload failed" });
  }
};

module.exports = uploadImage;
