const mainRouter = require("express").Router();

const userRouter = require("./users");
const authRouter = require("./auth");
const classRouter = require("./classes");
const subjectRouter = require("./subjects");

mainRouter.use("/auth", authRouter);
mainRouter.use("/users", userRouter);
mainRouter.use("/classes", classRouter);
mainRouter.use("/subjects", subjectRouter);

module.exports = mainRouter;
