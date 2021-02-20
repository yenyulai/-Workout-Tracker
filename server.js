const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// var uri = "mongodb+srv://yenyulai:lannie5i@cluster0.rhldq.mongodb.net/workout?retryWrites=true&w=majority"

// mongoose.connect(uri, { useNewUrlParser: true,})
// MONGODB_URI="mongodb+srv://yenyulai:3345678@cluster0.rhldq.mongodb.net?retryWrites=true&w=majority"




mongoose.connect(MONGODB_URI || "mongodb://localhost/workout", 
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false });

// routes
app.use(require("./route/api.js"));
app.use(require("./route/html.js"));



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

