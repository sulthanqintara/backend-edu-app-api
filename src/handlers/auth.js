const authModel = require('../models/auth');
const userModel = require('../models/users');
const responseHelper = require('../helpers/response');

const signIn = (req, res) => {
    const { body } = req;
    authModel.signIn(body)
    .then((result) => responseHelper.success(res, 201, { token: result }))
    .catch((err) => responseHelper.error(res, 500, err.message));
}

const register = (req, res) => {
    const { body } = req;
    userModel.createNewUser(body)
    .then((result) => responseHelper.success(res, 201, result))
    .catch((err) => responseHelper.error(res, 500, err.message));
}

module.exports = {
    signIn,
    register,
}