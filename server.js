// Dependencies
const express = require("express");
const app = express();
const PORT = 3000;

// Database
const drinks = require("./models/drinks");
const food = require("./models/food");

// Middleware
app.use(express.static("public"));

// Index
app.get("/", (req, res) => {
  res.send(
    `Hello! Welcome to the gitPut app! Please go to <a href="/pub">localhost:3000/pub</a> to get started!`
  );
});
// Index - get drinks
app.get("/pub", (req, res) => {
  res.render("index.ejs", { drinks: drinks, food: food });
});
// Config
app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
