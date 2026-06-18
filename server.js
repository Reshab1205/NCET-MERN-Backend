const express = require("express");
const mongoose = require("mongoose");
const { configDotenv } = require("dotenv");
const db = require('./middlewares/dB')
const userRoutes = require('./routes/userRoutes')

const app = express();
configDotenv();
app.use(express.json()); // built-in middleware
db()
app.use('/user', userRoutes) //Router level middleware

app.listen(8090, () => {
  console.log(`Server started on 8090`);
});