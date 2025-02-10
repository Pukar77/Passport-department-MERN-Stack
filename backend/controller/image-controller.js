const image = require("../model/image-model");

const uploadtocloudinary = require("../helper/Cloudinary-helper");
const fs = require("fs");
const cloudinary = require("../config/cloudinary");

const uploadimage = async (req, res) => {
  try {
    const { url, publicId } = await uploadtocloudinary(req.file.path);

    const insertIntoDatabase = await image.create({
      url,
      publicId,
    });
    if (insertIntoDatabase) {
      return res.status(200).json({
        status: "Success",
        message: "Successfully inserted into database",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = uploadimage;
