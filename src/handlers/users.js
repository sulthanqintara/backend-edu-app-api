const userModel = require("../models/users");
const responseHelper = require("../helpers/response");

const editUser = (req, res) => {
  const { file, body } = req;
  userModel
    .editUser(file, body)
    .then((result) => responseHelper.success(res, 200, result))
    .catch((err) => responseHelper.error(res, 500, err));
};

const updatePassword = (req, res) => {
  const { body } = req;
  userModel
    .updatePassword(body)
    .then((result) => responseHelper.success(res, 200, result))
    .catch((err) => {
      if (err === 403) responseHelper.error(res, 403, "Wrong Password!");
      else responseHelper.error(res, 500, err);
    });
};

const getUserById = (req, res) => {
  const { query, hostname } = req;
  userModel
    .getUserById(query, hostname)
    .then((result) => responseHelper.success(res, 200, result))
    .catch((err) => {
      if (err === 404) responseHelper.error(res, 404, "User Not Found!");
      else responseHelper.error(res, 500, err);
    });
};

module.exports = {
  updatePassword,
  editUser,
  getUserById,
};
