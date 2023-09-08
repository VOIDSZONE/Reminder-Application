const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (replace with your MongoDB URI)
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection with Db Successfull");
  })
  .catch((error) => {
    console.log("SOmething went wrong");
    console.error(error);
    process.exit(1);
  });

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", route);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
