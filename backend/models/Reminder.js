const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  smsNo: {
    type: String,
    required: true,
  },
  recurForNext: {
    type: [String], // This will store an array of selected checkboxes
    enum: ["7 Days", "5 Days", "3 Days", "2 Days"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Reminder = mongoose.model("Reminder", reminderSchema);

module.exports = Reminder;
