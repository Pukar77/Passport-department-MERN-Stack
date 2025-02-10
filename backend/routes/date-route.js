const express = require("express");
const getappointment = require("../controller/date-route-controller");
const getuserdetail = require("../controller/getuserdetail-controller");

const routes = express.Router();

routes.post("/appointmentdate", getappointment);
routes.post("/userdetail", getuserdetail);

module.exports = routes;
