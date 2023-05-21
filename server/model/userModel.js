const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 5,
    max: 100,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 50,
  },
  emailConfirmed: {
    type: Boolean,
    required: true,
    default: false,
  },
  emailToken: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
