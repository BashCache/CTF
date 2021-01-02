const express = require('express');
const jwt = require('jsonwebtoken');

function Auth(req, res, next) {
try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, 'secret');
    next();
} catch(error) {
    // throw error;
    return res.status(401).send('Authorization failed');
}
}

module.exports = Auth