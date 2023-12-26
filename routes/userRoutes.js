const express = require('express');
const userHandler = require('../serverHandlers/userHandler');

const router = express.Router();

router.post('/checkuser', function(req, res) {
    const user = req.body
    let result = userHandler.checkUser(user)
    console.log('this is the result from check user route',result)
    res.send(result);
});

router.post('/signUp', function(req, res) {
    const user = req.body;
    let result = userHandler.addUser(user);
    console.log('this is the result from adding user route',result)
    res.send(result);
})

module.exports = router;
