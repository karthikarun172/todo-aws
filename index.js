/** @format */

const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const config = require("config");
const mongoose = require("mongoose");
const Todos = require("./Route/TodosRoute");
const path = require("path"); 


mongoose.connect(
    "mongodb+srv://arunkarthik:Timetolead007@cluster0.tltln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error(err));

  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  app.use(helmet());
  app.use("/api/todo", Todos);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
