const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[a-zA-Z0-9._%+-]+@nitkkr\.ac\.in$/, "Only @nitkkr.ac.in emails are allowed"]
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);