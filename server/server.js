const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/todoRouter");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", routes);
app.listen(port, () => console.log("listening to port ", port));
