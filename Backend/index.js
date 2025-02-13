const express = require("express");
const cors = require("cors");

// command to kill port => npx kill-port 5060

const app = express();

// If you post the data from frontend then collect the data using req.body then ensure to
// call express.json()
app.use(express.json());

// if we create an api and fetch this api from frontend so this api will block by cors
// policy so we need to install a package to by pass this cors. => npm i cors
app.use(cors());

const database = [];

app.post("/todo", (req, res) => {
  console.log(req.body);
  const { task, taskMsg } = req.body;
  database.push({ id: Math.floor(Math.random() * 99999999), task, taskMsg });
  res.json(database);
});

app.listen(5065, () => {
  console.log("Server is running on 5065 port");
});
