const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRouter");
const userRoutes = require("./routes/userRouter");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/app/todos", todoRoutes);
app.use("/api/auth", userRoutes);

mongoose
  .connect(
    `${process.env.DB_PROTOCOL}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?${process.env.DB_PARAMS}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(port, () => console.log("listening to port ", port));

    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
