const classModel = require('../models/classes');
const responseHelper = require('../helpers/response');

const addNewClass = (req, res) => {
    const { body } = req;
    classModel.addNewClass(body)
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message))
}

const getAllClasses = (req, res) => {
    classModel.getAllClasses()
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message))
}

const getClassById = (req, res) => {
    const { params } = req;
    classModel.getClassById(params.id)
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message))
}

const updateClassById = (req, res) => {
    const { params } = req;
    classModel.updateClassById(params.id)
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message))
}

const deleteClass = (req, res) => {
    const { params } = req;
    classModel.deleteClass(params.id)
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message))
}

module.exports = {
    addNewClass,
    getAllClasses,
    getClassById,
    updateClassById,
    deleteClass
}