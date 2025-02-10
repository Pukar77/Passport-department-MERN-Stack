const express = require("express");
const getappointment = require("../controller/date-route-controller");
const getuserdetail = require("../controller/getuserdetail-controller");
const uploadimage = require("../controller/image-controller");
const uploadMiddleware = require("../middleware/upload-middleware");

const routes = express.Router();

routes.post("/appointmentdate", getappointment);
routes.post("/userdetail", getuserdetail);
routes.post("/uploadimage", uploadMiddleware.single("image"), uploadimage);

module.exports = routes;
