import React, { useEffect } from "react";
import axios from "axios";

function EnableReminder(props) {
  const reminderId = props.match.params.id;

  useEffect(() => {
    // Send a PATCH request to enable the reminder
    axios
      .patch(`/api/reminders/${reminderId}/enable`)
      .then((response) => {
        // Add success handling here (e.g., redirect)
      })
      .catch((error) => {
        // Add error handling here
        console.error("Error enabling reminder:", error);
      });
  }, [reminderId]);

  return (
    <div>
      <h2>Enabling Reminder...</h2>
      {/* You can add a loading indicator or redirect to another page */}
    </div>
  );
}

export default EnableReminder;
