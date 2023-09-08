# Reminder Application

Welcome to the Reminder Application! This application allows users to manage their reminders, view them, enable or disable them, and more. It's built using React for the frontend, Node.js with Express for the backend, and MongoDB for the database.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create new reminders with date, subject, description, and more.
- Modify existing reminders.
- Enable or disable reminders.
- View a list of reminders.
- User authentication with JWT.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB installed and running.
- Postman or a similar tool for testing API endpoints.

### Installation

1. Clone this repository:

   ```shell
   https://github.com/VOIDSZONE/Reminder-Application.git

   ```

2. cd reminder-application

3. cd backend
   npm install

4. cd ../frontend
   npm install

### Configuration

Create a .env file in the backend directory and configure the following environment variables

PORT=3000
MONGODB_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret

### API ENDPOINTS

POST /api/register: Register a new user.
POST /api/login: Login with valid credentials and receive a JWT token.
GET /api/reminders: Get all reminders for the authenticated user.
POST /api/reminders: Create a new reminder.
GET /api/reminders/:id: View a specific reminder.
PUT /api/reminders/:id: Modify a specific reminder.
PATCH /api/reminders/:id/disable: Disable a specific reminder.
PATCH /api/reminders/:id/enable: Enable a specific reminder.
DELETE /api/reminders/:id: Delete a specific reminder.

### Authentication

Authentication is required for creating, modifying, disabling, enabling, and deleting reminders.
Use the JWT token obtained after logging in as the "Authorization" header in API requests.
