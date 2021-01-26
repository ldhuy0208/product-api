const express = require("express");
const mongoose = require("mongoose");
const User = require("./user.js");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb://localhost:27017/task-manager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.get("/user", (req, res) => {
  res.send({name: 'xịp', description: 'doremon'})
});

app.listen(process.env.PORT || 3000);
