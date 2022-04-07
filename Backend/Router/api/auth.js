let router = require('express').Router();
let AuthController = require('../../Controller/AuthController');
let ValidatorMiddleware = require('../../Services/Middleware/validatorMiddleware').validate

router.post('/signup', ValidatorMiddleware, AuthController.signup);
router.post('/login', ValidatorMiddleware, AuthController.login);
router.post('/update/socket', AuthController.addSocketId);

module.exports = router;