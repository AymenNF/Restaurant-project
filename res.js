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
  const data = request.body;

  client.query('SELECT * FROM res WHERE numtel = $1', [data.numtel], (error, result) => {
    if (error) {
      // Handle the error
      return;
    }

    if (result.rows.length > 0) {
      // A user with this email address is already registered
      response.sendFile(__dirname + '/reserver.html');
    } else {
      // The email address is not registered, so we can register the user
      // ...
      client.query('INSERT INTO res (name, numtel) VALUES ($1, $2)', [data.name, data.numtel], (error, results) => {
        if (error) {
          throw error;
        }
        console.log(results);
      }); 
      response.sendFile(__dirname + '/reser.html');
    }
  });
});






app.listen(3000);