const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

const db = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'lidera'
    }
})
//const mysql = require('mysql')
/*
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'lidera'
})*/

const dependencies = {
    //connection
    db
}

clients = require('./routes/clients')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))
app.use('/clients', clients(dependencies))

app.get('/', (req, res) => {
    res.render('home')
})

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//connection.connect(()=>{
    if (db){
        app.listen(port, ()=> console.log('CRUD listen on port ' + port))
    }

//})
