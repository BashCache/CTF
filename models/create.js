const express = require('express');
const app = express();
const connection = require('./db');

function Create(req, res) {
try {
    var data = req.body;
    // console.log(data.id, data.name);
    connection.query("INSERT INTO `USER` (`id`, `name`) VALUES('"+data.id+"', '"+data.name+"')", function (error, result, fields) {
        if(error) {
            if (error.errno == 1062) return res.status(400).send('Violates primary key constraint'); 
            else throw error;
        }
        res.status(200).send('Record added to DB');
    });  
} catch (error) {
    throw error; }
}

module.exports = { Create };