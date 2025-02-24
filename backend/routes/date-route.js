const express = require("express");
const getAppointment = require("../controller/date-route-controller");
const getUserDetail = require("../controller/getuserdetail-controller");
const uploadImage = require("../controller/image-controller");
const uploadMiddleware = require("../middleware/upload-middleware");
const searchuser = require("../controller/searchuser-controller");
const searchdynamically = require("../controller/dynamic-search-controller");
const admininfo = require("../controller/admin-controller");

const routes = express.Router();

routes.post("/appointmentdate", getAppointment);
routes.post("/userdetail", getUserDetail);
routes.post("/search", searchuser);
routes.get("/search/:id", searchdynamically);
routes.post("/uploadimage", uploadMiddleware.array("images", 9), uploadImage);
routes.post("/admin", admininfo);

module.exports = routes;
