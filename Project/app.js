// const mysql = require('@mysql/xdevapi');
// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('hello world!');
// });

// server.listen(3200,'127.0.0.1');
// console.log('server running on port: 3200')

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'mohsin',
    password: '123456',
    database: 'NodeDB',
    port: '3306'
});

connection.connect();

// get data from mysql database
var getData = connection.query(
    'SELECT * FROM Course',function(err,result,fields){
        if(err) throw err
        console.log('result',result)
    }
);

// add data into mysql database
var addData = connection.query(
    "INSERT INTO Course(cName) VALUES('DBMS'),('TOA'),('Linear Algebra'),('Probability'),('POM')", (err,result,fields) => {
        if(err) throw err
        console.log('result',result)
    }
)

connection.end();

