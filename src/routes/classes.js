const classRouter = require("express").Router();
const classHandler = require("../handlers/classes");

/* http://localhost:8000/classes */
classRouter.post("/", classHandler.addNewClass);
classRouter.get('/', classHandler.getAllClasses);
classRouter.get('/:id', classHandler.getClassById);
classRouter.patch('/:id', classHandler.updateClassById);
classRouter.delete('/:id', classHandler.deleteClass);

module.exports = classRouter;
