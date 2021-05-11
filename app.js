const express = require("express");
const app = express();
const port = 2500;

// a middleware that enables us to read the received JSON data
app.use(express.json());

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 20 },
  { name: "Mark", age: 19 },
];

// a GET request on endpoint http://localhost:3000/users
app.get("/users", (req, res) => {
  // set the response status code to 200 (OK)
  res.status(200);
  // sends back a response of all users
  res.json(users);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

