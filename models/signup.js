const express = require('express');
const app = express();
const connection = require('./db');
const crypto = require('crypto');

function Signup(req, res) {
try {
    var data = req.body;
    var hash = crypto.createHash('sha256').update(data.password).digest('base64');
    console.log(data.username, data.password, hash);
    connection.query("INSERT INTO `ADMIN` (`username`, `password`) VALUES('"+data.username+"', '"+hash+"')", function (error, result, fields) {
        if(error) {
            // if (error.errno == 1062) return res.status(400).send('Violates primary key constraint'); 
            throw error;
        }
        res.status(200).send('Record added to DB');
    });  
} catch (error) {
    throw error; }
}

module.exports = { Signup };