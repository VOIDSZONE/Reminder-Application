import React, { useState } from "react";
import axios from "axios";

function Registration() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to the registration API endpoint
      const response = await axios.post("/api/register", formData);

      // Display a success message if registration is successful
      setSuccessMessage("Registration successful. You can now log in.");

      // Clear the form
      setFormData({ username: "", password: "" });
    } catch (error) {
      // Display an error message if registration fails
      setError("Registration failed. Please try again.");

      // Clear the form
      setFormData({ ...formData, password: "" });
    }
  };

  return (
    <div className="registration">
      <h2>Registration</h2>
      {error && <div className="error">{error}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
