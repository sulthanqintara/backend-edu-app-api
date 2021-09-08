const authRouter = require('express').Router();

const authHandler = require('../handlers/auth');

authRouter.post('/signin', authHandler.signIn);
authRouter.post('/register', authHandler.register);

module.exports = authRouter;