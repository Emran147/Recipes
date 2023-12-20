const express = require('express');
const userHandler = require('./userHandler');

const router = express.Router();

router.get('/', function(req, res) {
    res.send(userHandler.getUsers());
});

router.post('/', function(req, res) {
    const user = req.body;
    userHandler.addUser(user);
    console.log('succeeded');
    console.log(userHandler.getUsers());
    res.send(userHandler.getUsers());
});

module.exports = router;
