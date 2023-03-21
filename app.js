const express = require("express");
const bodyParser = require("body-parser");
const users = require("./models/user.model");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((user) => user.id === userId);
  res.status(200).json(user);
});

// Use postman for endpoints below
app.post("/users", (req, res) => {
  const user = {
    id: req.body.id,
    name: req.body.name,
  };
  users.push(user);
  res.status(200).json(users);
});

app.put("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  let user = users.find((user) => user.id === userId);
  user.name = req.body.name;
  res.status(200).json(user);
});

app.delete("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  newUsers = users.filter((user) => user.id !== userId);
  res.status(200).json(newUsers);
});

app.listen(port, () => {
  console.log(`Server is listening in port ${port}...`);
});
