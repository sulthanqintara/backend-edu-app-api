const classRouter = require('express').Router();
const classHandler = require('../handlers/classes');

classRouter.post('/', classHandler.addNewClass);
classRouter.get('/', classHandler.getAllClasses);

module.exports = classRouter;