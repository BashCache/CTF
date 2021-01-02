const mysql = require('mysql');
const dbConfig = require('../config/db-config.js');

// Create a connection to the database
// console.log(dbConfig.HOST, dbConfig.USER)
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("CREATE TABLE IF NOT EXISTS USER (id INTEGER PRIMARY KEY, name VARCHAR(255) NOT NULL, createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP)", function (error, result, fields) {
      if (error) throw error;
      console.log(result);
    });
  connection.query("CREATE TABLE IF NOT EXISTS ADMIN (username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL)", function (error, result, fields) {
      if (error) throw error;
      console.log(result);
    });
});

module.exports = connection;