const express = require('express');
const connection = require('./db');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

function Login(req, res) {
try {
    var data = req.body;
    var hash = crypto.createHash('sha256').update(data.password).digest('base64');
    // console.log(data);
    connection.query('SELECT * FROM ADMIN WHERE username = ?',[data.username], function (error, result, fields) {
    if(error) {
        throw error;
    }
    // console.log(typeof(result));
    if(Object.keys(result).length == 0) { return res.status(404).send('ID Not Found'); }
    else if(hash != result[0].password) { return res.status(400).send('Incorrect Password'); }
    const token = jwt.sign({
        username: result[0].username
    }, 'secret', {
        expiresIn: '2d'
    })
    res.status(200).json({
        "username": result[0].username,
        "token": token,
    });
    });  
} catch (error) {
    throw error; }
}

module.exports = { Login };