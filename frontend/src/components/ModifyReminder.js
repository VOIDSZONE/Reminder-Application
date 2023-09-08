import React, { useState, useEffect } from "react";
import axios from "axios";

function ModifyReminder(props) {
  const reminderId = props.match.params.id;
  const [formData, setFormData] = useState({
    // Define the form fields and initial values here
  });

  useEffect(() => {
    // Fetch the reminder data when the component mounts
    axios
      .get(`/api/reminders/${reminderId}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reminder data:", error);
      });
  }, [reminderId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a PUT request to modify the reminder
      await axios.put(`/api/reminders/${reminderId}`, formData);
      // Add success handling here
    } catch (error) {
      // Add error handling here
      console.error("Error modifying reminder:", error);
    }
  };

  return (
    <div>
      <h2>Modify Reminder</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form fields here */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default ModifyReminder;
