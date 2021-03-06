const subjectRouter = require("express").Router();
const authMiddleware = require("../middlewares/auth");
const subjectHandler = require("../handlers/subjects");

/** http://localhost:8000/subjects */
subjectRouter.post(
  "/",
  authMiddleware.checkToken,
  authMiddleware.authFacilitator,
  subjectHandler.addNewSubject
);
subjectRouter.post(
  "/scoring",
  authMiddleware.checkToken,
  authMiddleware.authFacilitator,
  subjectHandler.addScoring
);
subjectRouter.patch(
  "/scoring",
  authMiddleware.checkToken,
  authMiddleware.authFacilitator,
  subjectHandler.updateScore
);
subjectRouter.get("/scoring", subjectHandler.getAverageScore);
subjectRouter.get("/classes/:id", subjectHandler.getAllSubjects);

subjectRouter.get("/:id", subjectHandler.getSubjectById);

subjectRouter.patch(
  "/:id",
  authMiddleware.checkToken,
  authMiddleware.authFacilitator,
  subjectHandler.updateSubjectById
);
subjectRouter.delete(
  "/:id",
  authMiddleware.checkToken,
  authMiddleware.authFacilitator,
  subjectHandler.deleteSubject
);

module.exports = subjectRouter;
