const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.port || "1022";
const users = require("./src/users.router");

// app.use("/", users);
app.listen(port, () => {
  console.log(`http://localhost: ${port}`);
});
