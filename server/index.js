const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

// https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Lamaracuja123',
  database: 'employee_system'
});

app.post('/create', (req, res) => {
  const name = req.body.name
  const age = req.body.age
  const country = req.body.country
  const position = req.body.position
  const wage = req.body.wage

  db.query(
    'INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?) ',
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send('Values Inserted');
      }
    }
  );
});

app.get('/employees', (req, res) => {
  db.query('SELECT * FROM employees', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  });
});

app.put('/update', (req, res) => {
  const id = req.body.id
  db.query('UPDATE SET employees WHERE id=id', (req, res) => {

  });
});

app.listen(3001, () => console.log('server running properly'))
