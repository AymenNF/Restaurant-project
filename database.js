const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
app.get('/', (req, res) => {
  res.sendFile('path/to/index.html');
});
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit', async (req, res) => {
  // access form data in the request body
  const name = req.body.name;
  const phone = req.body.phone;

  // connect to the database
  const client = new Client({
    user: 'postgres',
    password: 'OUSSAMA2003',
    host: 'localhost',
    port: 5432,
    database: 'RESTAURANT',
  });
  await client.connect();

  // execute a SQL INSERT statement
  await client.query('INSERT INTO enregistrement (nom complet, numtele) VALUES ($1, $2)', [name, phone]);
  await client.end();

  res.send('Data submitted successfully');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
