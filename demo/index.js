// const express = require("express");

// const app = express();

// // console.dir(app);

// app.use((req, res) => {
//   console.log(req);
//   res.send("<h1>Hello world</h1>");
// });

// app.listen(8080, () => {
//   console.log("Server is listening on port 8080");
// });

const jokes = require("give-me-a-joke");

jokes.getRandomDadJoke(function (joke) {
  console.log(joke);
});
