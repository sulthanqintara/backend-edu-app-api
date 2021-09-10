const subjectRouter = require("express").Router();

const subjectHandler = require("../handlers/subjects");

/** http://localhost:8000/subjects */
subjectRouter.post('/', subjectHandler.addNewSubject);
subjectRouter.get('/', subjectHandler.getAllSubjects);
subjectRouter.get('/:id', subjectHandler.getSubjectById);
subjectRouter.patch('/:id', subjectHandler.updateSubjectById);
subjectRouter.delete('/:id', subjectHandler.deleteSubject);

module.exports = subjectRouter;