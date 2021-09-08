const classRouter = require("express").Router();
const classHandler = require("../handlers/classes");

/* http://localhost:8000/classes */
classRouter.post("/", classHandler.addNewClass);

module.exports = classRouter;
