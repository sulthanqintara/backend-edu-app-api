const mainRouter = require('express').Router();

const userRouter = require('./users');
const authRouter = require('./auth');
const classRouter = require('./classes');

mainRouter.use('/users', userRouter);
mainRouter.use('/auth', authRouter);
mainRouter.use('/classes', classRouter);

module.exports = mainRouter;