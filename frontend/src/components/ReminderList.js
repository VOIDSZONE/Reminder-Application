import React, { useEffect, useState } from "react";
import axios from "axios";

function ReminderList() {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    // Fetch reminders from the API when the component mounts
    axios
      .get("/api/reminders")
      .then((response) => {
        setReminders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reminders:", error);
      });
  }, []);

  return (
    <div>
      <h2>Reminders</h2>
      <ul>
        {reminders.map((reminder) => (
          <li key={reminder._id}>{reminder.subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReminderList;
