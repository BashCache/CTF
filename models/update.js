const express = require('express');
const app = express();
const connection = require('./db');

function Update(req, res) {
try {
    var data = req.body;
    console.log(data);
    connection.query("UPDATE USER SET name = ? WHERE id = ?", [data.name, data.id], function (error, result, fields) {
        if(error) {
            throw error;
        }
        if(result.affectedRows == 0) { return res.status(404).send('ID Not Found'); }
        res.status(200).send('Updated');
    });  
} catch (error) {
    throw error; }
}

module.exports = { Update };