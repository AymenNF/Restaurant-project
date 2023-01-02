const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Client } = require('pg');
var path = require('path')

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'OUSSAMA2003',
  database: 'postgres'
});

client.connect();

// Parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.post('/insert', (request, response) => {
  // Read the form data from the request body
  const data = request.body;

  // Insert the data into the database
  client.query('INSERT INTO res (name, numtel) VALUES ($1, $2)', [data.name, data.numtel], (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);
  });

  // Send a response to the client
  response.send('Data inserted successfully');
});

app.listen(3000);