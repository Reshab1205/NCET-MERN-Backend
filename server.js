const express = require("express");
const mongoose = require("mongoose");

const { configDotenv } = require("dotenv");

configDotenv();
const app = express();

app.use(express.json()); // built-in middleware

const db = require('./middlewares/dB')
db()

// const url = process.env.DB_URL;

// mongoose
//   .connect(url)
//   .then(() => console.log("Db Connected"))
//   .catch((err) => console.log("Db Error", err));

app.get("/", (req, res) => {
  res.send("Hello Techies");
});

app.get("/home", (req, res) => {
  res.send("Hello This is Homepage");
});

app.get("/contact", (req, res) => {
  res.send("Hello This is Contact page");
});

app.get("/profile", (req, res) => {
  res.send("Hello This is Profile page");
});

app.get("/dashboard", (req, res) => {});

app.get("/reels", (req, res) => {});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("Hii");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Login");
});

app.listen(8090, () => {
  console.log(`Server started on 8090`);
});
