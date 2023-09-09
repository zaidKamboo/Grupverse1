const express = require("express");
const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/grupverse";

const app = express();
app.use(express.json());
var cors = require("cors");

const User = require("./Models/User");
const port = 5000;

//Connecting to the DB
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Mongo db connected");
  })
  .catch((err) => console.log(err));

app.use(cors());
//Available Routes
app.use("/api/auth", require("./Routes/auth.js"));

// ALL POST RELATED TASKS SHOULD BE PERFORMED HERE.
// app.use("/api/posts", require("./Routes/posts.js"));

app.listen(port, () => {
  console.log(`iNoteBook backend Listening at http://localhost:${port}`);
});
