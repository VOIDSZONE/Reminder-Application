const express = require("express");
const router = express.Router();

const userController = require("../controller/Auth");
const reminderController = require("../controller/Reminder");
const { authenticateJWT } = require("../middleware/auth");

// Signup route
router.post("/signup", userController.signup);

// Login route
router.post("/login", userController.login);

// Protected route that requires authentication
router.get("/profile", authenticateJWT, (req, res) => {
  // This route is protected and can only be accessed with a valid JWT token
  res.json({ message: "Protected route", userId: req.user.userId });
});

// Create a new reminder
router.post("/reminders", authenticateJWT, reminderController.createReminder);

// Get all reminders for the authenticated user
router.get(
  "/getreminders",
  authenticateJWT,
  reminderController.getAllRemindersForUser
);

//View a specific reminder
router.get("/reminders/:id", authenticateJWT, reminderController.viewReminder);

//Modify a specific reminder
router.get(
  "/modify-reminders/:id",
  authenticateJWT,
  reminderController.modifyReminder
);

//Disable a specific reminder
router.get(
  "/reminders/:id/disable",
  authenticateJWT,
  reminderController.disableReminder
);

//Enable a specific reminder
router.get(
  "/reminders/:id/enable",
  authenticateJWT,
  reminderController.enableReminder
);

//Delete a specific reminder
router.get(
  "/reminders/delete/:id",
  authenticateJWT,
  reminderController.deleteReminder
);

module.exports = router;
