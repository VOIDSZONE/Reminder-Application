import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import ReminderList from "./components/ReminderList";
import CreateReminder from "./components/CreateReminder";
import ModifyReminder from "./components/ModifyReminder";
import DeleteReminder from "./components/DeleteReminder"; // Import DeleteReminder
import EnableReminder from "./components/EnableReminder"; // Import EnableReminder
import DisableReminder from "./components/DisableReminder"; // Import DisableReminder

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Redirect to login by default */}
          <Redirect exact from="/" to="/login" />

          {/* Registration */}
          <Route path="/register">
            <Registration />
          </Route>

          {/* Login */}
          <Route path="/login">
            <Login />
          </Route>

          {/* Reminder List */}
          <Route path="/reminders">
            <ReminderList />
          </Route>

          {/* Create Reminder */}
          <Route path="/create-reminder">
            <CreateReminder />
          </Route>

          {/* Modify Reminder */}
          <Route path="/modify-reminder/:id">
            <ModifyReminder />
          </Route>

          {/* Delete Reminder */}
          <Route path="/delete-reminder/:id">
            <DeleteReminder />
          </Route>

          {/* Enable Reminder */}
          <Route path="/enable-reminder/:id">
            <EnableReminder />
          </Route>

          {/* Disable Reminder */}
          <Route path="/disable-reminder/:id">
            <DisableReminder />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
