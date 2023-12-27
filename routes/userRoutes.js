const express = require('express');
const userHandler = require('../serverHandlers/userHandler');

const router = express.Router();

router.post('/checkuser', function(req, res) {
    const user = req.body
    let result = userHandler.checkUser(user)
    res.send(result);
});

router.post('/signUp', function(req, res) {
    const user = req.body;
    let result = userHandler.addUser(user);
    res.send(result);
})

module.exports = router;
