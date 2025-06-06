const express = require("express");
require("dotenv").config();
const { connectDB } = require("./src/dbLayer/dbLayer"); // Import DB connection
const users = require("./src/routes/users.router");
const products = require('./src/routes/products.router')
const app = express();
const port = process.env.PORT || 1022;

connectDB(); 

app.use(express.json()); 
app.use("/", users);
// app.use('/products',products)
app.use('/api', products);

console.log("MONGO_URL:", process.env.MONGO_URL);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
