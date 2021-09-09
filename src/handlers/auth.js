const authModel = require("../models/auth");
const userModel = require("../models/users");
const responseHelper = require("../helpers/response");

const signIn = (req, res) => {
  const { body } = req;
  authModel
    .signIn(body)
    .then((result) => responseHelper.success(res, 200, result))
    .catch((err) => {
      if (err === 401)
        responseHelper.error(res, 401, "Invalid Email or Password!");
      else responseHelper.error(res, 500, err.message);
    });
};

const register = (req, res) => {
  const { body } = req;
  userModel
    .createNewUser(body)
    .then((result) => responseHelper.success(res, 201, result))
    .catch((err) => {
      if (err === 409) responseHelper.error(res, 409, "Email sudah terdaftar!");
      else responseHelper.error(res, 500, err);
    });
};

const signOut = (req, res) => {
  authModel
    .signOut(req)
    .then((result) => responseHelper.success(res, 200, result))
    .catch((err) => responseHelper.error(res, 500, err));
};

module.exports = {
  signIn,
  register,
  signOut,
};
