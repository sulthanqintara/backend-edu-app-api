const classRouter = require("express").Router();
const classHandler = require("../handlers/classes");
const authMiddleware = require("../middlewares/auth");

/* http://localhost:8000/classes */
classRouter.post(
  "/",
  authMiddleware.checkToken,
  authMiddleware.authFacilitator,
  classHandler.addNewClass
);
classRouter.get("/", classHandler.getClasses);
classRouter.get("/:id", classHandler.getClassById);
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
