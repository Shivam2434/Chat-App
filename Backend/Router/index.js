let router = require('express').Router();
let authRouter = require('./api/auth');
let appRouter = require('./api/routes');

router.use('/api/auth', authRouter);
router.use('/api/app', appRouter);

module.exports = router;