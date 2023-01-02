const { request } = require('express')

const Pool =require('pg').Pool
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "OUSSAMA2003",
    database: "RESTAURANT"
}) 
 const tnames =(request,response) => {
    const  nom=request.body.name
    const numtele=request.body.phone
    pool.query('INSERT INTO reservation (nom, numtele) VALUES ($1,$2) ',[nom, numtele], (error,results) =>{
        if (error) {
            throw error
        }
    response.status(200).send('un nouveau client est ajouté')
    })
 }
 module.exports ={
  tnames,  
 }
 /*var mysql = require('mysql2')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'harouy', //
  password: 'OUSSAMA2003', //
  database: 'restaurant',
})
connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected')
})
module.exports = connection*/