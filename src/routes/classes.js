const classRouter = require("express").Router();
const classHandler = require("../handlers/classes");
const authMiddleware = require("../middlewares/auth");
const uploadMiddleware = require("../middlewares/upload");

/* http://localhost:8000/classes */
classRouter.get("/day", classHandler.getClassByDay);
classRouter.get("/day-others", classHandler.getClassByDayOther);
classRouter.get("/progress", classHandler.getProgressByUser);
classRouter.get("/:id", classHandler.getClassById);
classRouter.get("/students/:id", classHandler.getStudentsOfClass);
classRouter.get("/", classHandler.getClasses);
classRouter.post(
  "/",
  authMiddleware.checkToken,
  authMiddleware.authFacilitator,
  uploadMiddleware.upload.single("image"),
  classHandler.addNewClass
);
classRouter.post(
  "/apply",
  authMiddleware.checkToken,
  authMiddleware.authUser,
  classHandler.applyNewClass
);
classRouter.patch(
  "/:id",
  authMiddleware.checkToken,
  authMiddleware.authFacilitator,
  classHandler.updateClassById
);
classRouter.delete(
  "/:id",
  authMiddleware.checkToken,
  authMiddleware.authFacilitator,
  classHandler.deleteClass
);

module.exports = classRouter;
