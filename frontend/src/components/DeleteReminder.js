import React, { useEffect } from "react";
import axios from "axios";

function DeleteReminder(props) {
  const reminderId = props.match.params.id;

  useEffect(() => {
    // Send a DELETE request to delete the reminder
    axios
      .delete(`/api/reminders/${reminderId}`)
      .then((response) => {
        // Add success handling here (e.g., redirect)
      })
      .catch((error) => {
        // Add error handling here
        console.error("Error deleting reminder:", error);
      });
  }, [reminderId]);

  return (
    <div>
      <h2>Deleting Reminder...</h2>
      {/* You can add a loading indicator or redirect to another page */}
    </div>
  );
}

export default DeleteReminder;
