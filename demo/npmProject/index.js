// const jokes = require("give-me-a-joke");

// jokes.getRandomDadJoke(function (joke) {
//   console.log(joke);
// });
const express = require("express");
const path = require("path");

const app = express();

// app.use((req, res) => {
//   console.log(req);
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/homepage.html"));
});

//Express path parameter
app.get("/detailsPage/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Welcome ${name} to the Home page`);
});

app.get("/detailsPage/:name/:rank", (req, res) => {
  const { name, rank } = req.params;
  res.send(`Congrats ${name} got ${rank} rank.`);
});

// Query strings
app.get("/searchPage", (req, res) => {
  const { name } = req.query;
  // res.send(`Congrats ${name} got ${rank} rank.`);
  res.send(`${name} record is found`);
});

app.get("/HTMLPage", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(80, () => {
  console.log("server z on port 80");
});
