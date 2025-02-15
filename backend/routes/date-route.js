const express = require("express");
const getAppointment = require("../controller/date-route-controller");
const getUserDetail = require("../controller/getuserdetail-controller");
const uploadImage = require("../controller/image-controller");
const uploadMiddleware = require("../middleware/upload-middleware");
const searchuser = require("../controller/searchuser-controller");

const routes = express.Router();

routes.post("/appointmentdate", getAppointment);
routes.post("/userdetail", getUserDetail);
routes.post("/search", searchuser);
routes.post("/uploadimage", uploadMiddleware.array("images", 9), uploadImage);

module.exports = routes;
