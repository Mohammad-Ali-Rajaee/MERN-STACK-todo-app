const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("title", todoSchema);
