const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passowrd: 'abhinay_sharma',
    database: 'exam_hub'
});