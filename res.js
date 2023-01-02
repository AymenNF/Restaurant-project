const express =require('express')

const bodyParser =require('body-parser')
const { request, response } = require('express')
const app =express()
const port =3000
const path=require('path');
const publicPath=path.join(__dirname,"C:\Users\P15S 1\Desktop\restaurant")
app.use(express.static(publicPath));


app.use(bodyParser.json())
const Pool =require('pg').Pool
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "OUSSAMA2003",
    database: "RESTAURANT"
}) 

app.use(
    bodyParser.urlencoded({
        extended: true,
    })

)
/*app.post('/RESTAURANT',db.tnames)*/ 
app.post('/process-form', (req, res) => {
    const {nom,numtele}=req.body
    pool.query('INSERT INTO reservation SET?',{nom:nom,numtele:numtele}, (error,results) =>{
        if (error) {
            throw error
        }
        else {
          return res.render('register', {
              message: 'User registered!'
          })
      }
    })
  })
 
 app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())
 
app.listen(3000);


