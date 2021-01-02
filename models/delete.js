const express = require('express');
const connection = require('./db');

function Delete(req, res) {
try {
    var data = req.query;
    console.log(data);
    connection.query('DELETE FROM USER WHERE id = ?',[data.id], function (error, result, fields) {
    if(error) {
        throw error;
    }
    // console.log(result);
    if(result.affectedRows == 0) { return res.status(404).send('ID Not Found'); }
    res.status(200).send('Deleted');
    });  
} catch (error) {
    throw error; }
}

module.exports = { Delete };