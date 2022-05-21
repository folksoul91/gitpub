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
  // loop through each drink in the database in order to properly capitalize them all
  for (let drink of drinks) {
    // split name into every separate word
    let splitName = drink.name.split(" ");
    // loop through each individual word
    for (let i = 0; i < splitName.length; i++) {
      // split the word into its individual letters
      let splitWord = splitName[i].split("");
      // uppercase the first letter
      splitWord[0] = splitWord[0].toUpperCase();
      // rejoin the word
      splitName[i] = splitWord.join("");
    }
    // rejoin the words
    drink.name = splitName.join(" ");
  }
  // rendering the index
  res.render("index.ejs", {
    drinks: drinks,
    food: food,
  });
});
// Config
app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
