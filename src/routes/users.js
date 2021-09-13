const userRouter = require("express").Router();
const userHandler = require("../handlers/users");
const authMiddleware = require("../middlewares/auth");
const uploadMiddleware = require("../middlewares/upload");

/* http://localhost:8000/users */
userRouter.get("/", authMiddleware.checkToken, userHandler.getUserById);
userRouter.patch(
  "/update-password",
  authMiddleware.checkToken,
  userHandler.updatePassword
);
userRouter.patch(
  "/edit-user",
  authMiddleware.checkToken,
  uploadMiddleware.upload.single("image"),
  userHandler.editUser
);
userRouter.get('/classes/', userHandler.getClassByUser);

module.exports = userRouter;
