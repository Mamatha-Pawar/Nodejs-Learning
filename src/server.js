require("dotenv").config();
const express = require("express");
const connectDB = require("./dbLayer/dbLayer");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users.router");

connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
