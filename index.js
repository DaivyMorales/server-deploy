import express from "express";

const app = express();

const PORT = 3000;

app.listen(PORT);

app.get("/", (req, res) => {
  res.send("Your deploy has been sucess! 💪🏼");
});

app.get("/product", (req, res) => {
  res.send("Obtaining Product!");
});

console.log(`This server is running on port ${PORT}`);
