const classModel = require('../models/classes');
const responseHelper = require('../helpers/response');

const addNewClass = (req, res) => {
    const { body } = req;
    classModel.addNewClass(body)
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message))
}

module.exports = {
    addNewClass,
}