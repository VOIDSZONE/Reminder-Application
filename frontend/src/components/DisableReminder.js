import React, { useEffect } from "react";
import axios from "axios";

function DisableReminder(props) {
  const reminderId = props.match.params.id;

  useEffect(() => {
    axios
      .patch(`/api/reminders/${reminderId}/disable`)
      .then((response) => {
        // Add success handling here (e.g., redirect)
      })
      .catch((error) => {
        console.error("Error disabling reminder:", error);
      });
  }, [reminderId]);

  return (
    <div>
      <h2>Disabling Reminder...</h2>
      {/* You can add a loading indicator or redirect to another page */}
    </div>
  );
}

export default DisableReminder;
