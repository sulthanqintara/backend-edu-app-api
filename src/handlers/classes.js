const classModel = require("../models/classes");
const responseHelper = require("../helpers/response");

const addNewClass = (req, res) => {
  const { file, body } = req;
  classModel
    .addNewClass(file, body)
    .then((result) => responseHelper.success(res, 201, result))
    .catch((err) => responseHelper.error(res, 500, err.message));
};

const applyNewClass = (req, res) => {
  const { body } = req;
  classModel
    .applyNewClass(body)
    .then((result) => responseHelper.success(res, 201, result))
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
        responseHelper.success(res, 200, info);
      }
    )
    .catch(({ status, msg }) => responseHelper.error(res, status, msg));
};

const getClassById = (req, res) => {
  const { params } = req;
  classModel
    .getClassById(params.id)
    .then((result) => responseHelper.success(res, 200, result))
    .catch((err) => responseHelper.error(res, 500, err.message));
};

const updateClassById = (req, res) => {
  const { body, params } = req;
  classModel
    .updateClassById(body, params.id)
    .then((result) => responseHelper.success(res, 200, result))
    .catch((err) => responseHelper.error(res, 500, err.message));
};

const deleteClass = (req, res) => {
  const { params } = req;
  classModel
    .deleteClass(params.id)
    .then((result) => responseHelper.success(res, 200, result))
    .catch((err) => responseHelper.error(res, 500, err.message));
};

const getProgressByUser = (req, res) => {
  const { query } = req;
  classModel
    .getProgressByUser(query)
    .then((result) => responseHelper.success(res, 201, result))
    .catch((err) => responseHelper.error(res, 500, err.message));
};

const getClassByDay = (req, res) => {
  const { query } = req;
  classModel.getClassByDay(query)
  .then((result) => responseHelper.success(res, 200, result))
  .catch((err) => responseHelper.error(res, 500, err.message));
}

const getClassByDayOther = (req, res) => {
  const { query } = req;
  classModel.getClassByDayOther(query)
  .then((result) => responseHelper.success(res, 200, result))
  .catch((err) => responseHelper.error(res, 500, err.message));
}

const getStudentsOfClass = (req, res) => {
  const { params } = req;
  classModel.getStudentsOfClass(params.id)
  .then((result) => responseHelper.success(res, 200, result))
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
  getClassByDay,
  getClassByDayOther,
  getStudentsOfClass,
};
