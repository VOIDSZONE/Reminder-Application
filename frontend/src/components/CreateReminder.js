import React, { useState } from "react";
import axios from "axios";

function CreateReminder() {
  const [formData, setFormData] = useState({
    // Define the form fields and initial values here
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to create a new reminder
      await axios.post("/api/reminders", formData);
      // Add success handling here
    } catch (error) {
      // Add error handling here
      console.error("Error creating reminder:", error);
    }
  };

  return (
    <div>
      <h2>Create Reminder</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form fields here */}
        <button type="submit">Create Reminder</button>
      </form>
    </div>
  );
}

export default CreateReminder;
