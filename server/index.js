const express = require('express');
const app = express():
// const mysql = require("mysql");

//const db = mysql.createConnection({
  //user: "root",
  //host: "localhost",
  //password: "password",
  //database: "employeeSystem"
//});

app.post("/create", (req, res) => {
  const name = req.body.name
  const age = req.body.age
  const country = req.body.country
  const position = req.body.position
  const wage = req.body.wage

  // db.query()
});

app.listen(3001, () => console.log('server running properly'))
