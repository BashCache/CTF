const express = require('express');
const connection = require('./db');

function Find(req, res) {
try {
    var data = req.query;
    // console.log(data);
    connection.query('SELECT * FROM USER WHERE id = ?',[data.id], function (error, result, fields) {
    if(error) {
        throw error;
    }
    // console.log(typeof(result));
    if(Object.keys(result).length == 0) { return res.status(404).send('ID Not Found'); }
    res.status(200).json({
        body: result,
    });
    });  
} catch (error) {
    throw error; }
}

module.exports = { Find };