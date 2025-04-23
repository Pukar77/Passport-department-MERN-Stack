const express = require("express");
const mongoose = require("mongoose");
const dbconnection = require("./dbconection/dbconnection");
const routes = require("./routes/date-route");
const session = require("express-session");
const cors = require("cors");

const PORT = 8000;

const app = express();

dbconnection();

app.use(
  cors({
    origin: "http://localhost:8000", 
    credentials: true, 
  })
);

app.use(
  session({
    secret: "pukarishero",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(express.json());

app.use("/api/user", routes);

app.listen(PORT, () => {
  console.log(`App is running successfully in port no ${PORT}`);
});

//clodinary roadmap

// model ==>  uploadmiddleware   ==> Upload image(controller) ==>config  ==>Helper
