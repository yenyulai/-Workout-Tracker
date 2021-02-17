const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//require("./seeders/seed");

const PORT = process.env.PORT || 3000;

//const Exercise = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// routes
//app.use(require("./route/api.js"));
require("./route/api")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

