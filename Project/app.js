
const http = require('http');
const express = require("express");
const controller = require('./controller')
// const mysql = require('@mysql/xdevapi');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });

// });

// server.listen(3200, '127.0.0.1');
// console.log('server running on port: 3200')
const Router = require("express")

var router = Router();

const app = express();
var bodyParser = require('body-parser')
const port = process.env.PORT || 4000;
app.use(bodyParser.json())

router.post('/add',controller.add);

app.use('/api', router)




// get data from mysql database
// var getData = connection.query( //`SELECT * FROM Course WHERE cCode = ${16} `
//     `SELECT * FROM Course`,function(err,result,fields){
//     if(err) throw err
//         console.log('result',result)
//         // console.log('field',fields)
//     }
// );

// add data into mysql database
// var addData = connection.query(
//     "INSERT INTO Course(cName) VALUES('Data Science')", (err,result,fields) => {
//         if(err) throw err
//         console.log('result',result)
//     }
// )

// var deleteTableData = connection.query(
//     "TRUNCATE Course"
// )

app.listen(port, () => {
    console.log(port)
})

