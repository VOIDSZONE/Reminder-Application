const Reminder = require("../models/Reminder");

// Create a new reminder
exports.createReminder = async (req, res) => {
  const userId = req.user; // Assuming you have userId in the JWT payload
  const { date, subject, description, email, contactNo, smsNo, recurForNext } =
    req.body;

  try {
    const newReminder = new Reminder({
      userId,
      date,
      subject,
      description,
      email,
      contactNo,
      smsNo,
      recurForNext,
    });
    await newReminder.save();
    res.status(201).json({ message: "Reminder created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all reminders for a specific user
exports.getAllRemindersForUser = async (req, res) => {
  const { userId } = req.user; // Assuming you have userId in the JWT payload

  try {
    const reminders = await Reminder.find({ userId });
    res.status(200).json(reminders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//View a specific Reminder
exports.viewReminder = async (req, res) => {
  try {
    // Extract the reminder ID and userId as strings from the request parameters
    const reminderId = req.params.reminderId;
    const userId = req.params.userId;

    // Check if the reminder exists and belongs to the specified user (userId as a string)
    const existingReminder = await Reminder.findOne({
      _id: reminderId,
      userId,
    });

    if (!existingReminder) {
      return res.status(404).json({ error: "Reminder not found" });
    }

    res.status(200).json(existingReminder);
  } catch (error) {
    console.error("Error viewing reminder:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Modify an existing reminder by ID
exports.modifyReminder = async (req, res) => {
  try {
    // Extract the reminder ID and userId as strings from the request parameters and body
    const reminderId = req.params.reminderId;
    const { userId, date, subject, description } = req.body;

    // Check if the reminder exists and belongs to the specified user (userId as a string)
    const existingReminder = await Reminder.findOne({
      _id: reminderId,
      userId,
    });

    if (!existingReminder) {
      return res.status(404).json({ error: "Reminder not found" });
    }

    // Update the existing reminder fields
    existingReminder.date = date;
    existingReminder.subject = subject;
    existingReminder.description = description;

    // Save the modified reminder
    const updatedReminder = await existingReminder.save();

    res.status(200).json(updatedReminder);
  } catch (error) {
    console.error("Error modifying reminder:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a reminder by ID
exports.deleteReminder = async (req, res) => {
  try {
    // Extract the reminder ID and userId as strings from the request parameters
    const reminderId = req.params.reminderId;
    const userId = req.params.userId;

    // Check if the reminder exists and belongs to the specified user (userId as a string)
    const existingReminder = await Reminder.findOne({
      _id: reminderId,
      userId,
    });

    if (!existingReminder) {
      return res.status(404).json({ error: "Reminder not found" });
    }

    // Delete the reminder from the database
    await existingReminder.remove();

    res.status(204).send(); // No content (successful deletion)
  } catch (error) {
    console.error("Error deleting reminder:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Disable a specific reminder by ID
exports.disableReminder = async (req, res) => {
  try {
    // Extract the reminder ID and userId as strings from the request parameters
    const reminderId = req.params.reminderId;
    const userId = req.params.userId;

    // Check if the reminder exists and belongs to the specified user (userId as a string)
    const existingReminder = await Reminder.findOne({
      _id: reminderId,
      userId,
    });

    if (!existingReminder) {
      return res.status(404).json({ error: "Reminder not found" });
    }

    // Update the reminder's status to "disabled" (or another suitable status)
    existingReminder.status = "disabled";

    // Save the modified reminder in the database
    await existingReminder.save();

    res.status(200).json({ message: "Reminder disabled successfully" });
  } catch (error) {
    console.error("Error disabling reminder:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.enableReminder = async (req, res) => {
  try {
    // Extract the reminder ID and userId as strings from the request parameters
    const reminderId = req.params.reminderId;
    const userId = req.params.userId;

    // Check if the reminder exists and belongs to the specified user (userId as a string)
    const existingReminder = await Reminder.findOne({
      _id: reminderId,
      userId,
    });

    if (!existingReminder) {
      return res.status(404).json({ error: "Reminder not found" });
    }

    // Update the reminder's status to "enabled" (or another suitable status)
    existingReminder.status = "enabled";

    // Save the modified reminder in the database
    await existingReminder.save();

    res.status(200).json({ message: "Reminder enabled successfully" });
  } catch (error) {
    console.error("Error enabling reminder:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
