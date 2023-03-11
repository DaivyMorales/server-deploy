import express from "express";

const app = express();

const PORT = 3000;

app.listen(port);

app.get("/", (req, res) => {
  res.send("Your deploy has been sucess! 💪🏼");
});
console.log(`This server is running on port ${port}`);
