const classRouter = require("express").Router();
const classHandler = require("../handlers/classes");
const authMiddleware = require("../middlewares/auth");

/* http://localhost:8000/classes */
classRouter.post('/', authMiddleware.checkToken, classHandler.addNewClass);
classRouter.get('/', classHandler.getAllClasses);
classRouter.get('/:id', classHandler.getClassById);
classRouter.patch('/:id', authMiddleware.checkToken, classHandler.updateClassById);
classRouter.delete('/:id', authMiddleware.checkToken, classHandler.deleteClass);

module.exports = classRouter;
