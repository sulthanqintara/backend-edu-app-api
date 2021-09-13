const classModel = require("../models/classes");
const responseHelper = require("../helpers/response");

const addNewClass = (req, res) => {
  const { file, body } = req;
  classModel
    .addNewClass(file, body)
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message));
};

const applyNewClass = (req, res) => {
  const { body } = req;
  classModel
    .applyNewClass(body)
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message));
};

const getClasses = (req, res) => {
  const { query, hostname } = req;
  classModel
    .getClasses(query, hostname)
    .then(
      ({ result, totalData, totalPage, currentPage, prevPage, nextPage }) => {
        const info = {
          data: result,
          totalData,
          totalData,
          totalPage,
          currentPage,
          prevPage,
          nextPage,
        };
        responseHelper.success(res, 201, info);
      }
    )
    .catch((err) => responseHelper.error(res, 500, err));
};

const getClassById = (req, res) => {
  const { params } = req;
  classModel
    .getClassById(params.id)
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message));
};

const updateClassById = (req, res) => {
  const { body, params } = req;
  classModel
    .updateClassById(body, params.id)
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message));
};

const deleteClass = (req, res) => {
  const { params } = req;
  classModel
    .deleteClass(params.id)
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message));
};

const getProgressByUser = (req, res) => {
  const { query } = req;
  classModel.getProgressByUser(query)
  .then((result) => responseHelper.success(res, 201, result))
  .catch((err) => responseHelper.error(res, 500, err.message));
}

module.exports = {
  addNewClass,
  applyNewClass,
  getClasses,
  getClassById,
  updateClassById,
  deleteClass,
  getProgressByUser,
};
