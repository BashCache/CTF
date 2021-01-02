const express = require('express');
const connection = require('./db');

function Read(req, res) {
try {
    connection.query('SELECT * from `USER`', function (error, result, fields) {
    if(error) {
        throw error;
    }
    res.status(200).json({
        body: result,
    });
    });  
} catch (error) {
    throw error; }
}

module.exports = { Read };