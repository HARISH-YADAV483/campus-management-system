const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  name: String,
  rollnumber: String,
  cntcnumber: String,
  place: String,
  startDate: String,
  endDate: String,
  totalDays: Number,
  uploadTime: String,
  email: String
});

module.exports = mongoose.model("Record", recordSchema);