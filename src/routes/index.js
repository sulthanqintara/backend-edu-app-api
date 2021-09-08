const mainRouter = require('express').Router();

// const userRouter = require('./users');
const authRouter = require('./auth');
// const classRouter = require('./classes');

mainRouter.use('/auth', authRouter);
// mainRouter.use('/users', userRouter);
// mainRouter.use('/classes', classRouter);

module.exports = mainRouter;