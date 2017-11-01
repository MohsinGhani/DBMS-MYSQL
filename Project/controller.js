var mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'mohsin',
    password: '123456',
    database: 'NodeDB',
    port: '3306'
});
connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});

exports.add = (req, res) => {
    let course = req.body.cName;
    console.log('req.body', course)

    connection.query(`INSERT INTO Course(cName) VALUES('${course}')`, function (error, results, fields) {
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            console.log('The solution is: ', results);
            res.send({
                "code": 200,
                "success": "user registered sucessfully"
            });
        }
    });



}
// connection.end()