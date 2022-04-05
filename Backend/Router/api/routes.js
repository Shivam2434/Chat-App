let router = require('express').Router();
let UserController = require('../../Controller/UserController');

router.get('/getUsers', UserController.getUsers);

module.exports = router;