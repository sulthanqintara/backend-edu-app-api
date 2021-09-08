const classRouter = require('express').Router();
const classHandler = require('../handlers/classes');

classRouter.post('/', classHandler.addNewClass);

module.exports = classRouter;