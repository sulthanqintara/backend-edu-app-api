const authRouter = require("express").Router();

const authHandler = require("../handlers/auth");

/* http://localhost:8000/auth */
authRouter.post("/signin", authHandler.signIn);
authRouter.post("/register", authHandler.register);
authRouter.delete("/signout", authHandler.signOut);

module.exports = authRouter;
