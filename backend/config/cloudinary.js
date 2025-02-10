const cloudinary = require("cloudinary").v2;

//connect to cloudinary

cloudinary.config({
  cloud_name: "dtmiggnjn",
  api_key: "768732164244328",
  api_secret: "oDdW_NgJoEU7IA5Qlfwc5B0_eI8", // Click 'View API Keys' above to copy your API secret
});

module.exports = cloudinary;