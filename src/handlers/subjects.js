const subjectModel = require('../models/subjects');
const responseHelper = require('../helpers/response');

const addNewSubject = (req, res) => {
    const { body } = req;
    subjectModel.addNewSubject(body)
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message))
}

const getAllSubjects = (req, res) => {
    // const { params } = req;
    subjectModel.getAllSubjects()
    .then((result) => responseHelper.success(res, 201, result))
    .catch((err) => responseHelper.error(res, 500, err.message))
}

const getAverageScore = (req, res) => {
    const { query } = req;
    subjectModel.getAverageScore(query)
    .then(({scResult, avgResult}) => 
    {
        const allResult = {
            scResult,
            avgResult
        }
        // console.log("allResult");
        responseHelper.success(res, 201, allResult)})
    .catch((err) => responseHelper.error(res, 500, err.message))
}

const getSubjectById = (req, res) => {
    const { params } = req;
    subjectModel.getSubjectById(params.id)
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message))
}

const updateSubjectById = (req, res) => {
    const { body, params } = req;
    subjectModel.updateSubjectById( body, params.id)
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message))
}

const deleteSubject = (req, res) => {
    const { params } = req;
    subjectModel.deleteSubject(params.id)
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message))
}

const addScoring = (req, res) => {
    const {body} = req;
    subjectModel.addScoring(body)
    .then((data) => responseHelper.success(res, 201, data))
    .catch((err) => responseHelper.error(res, 500, err.message))
}

module.exports = {
    addNewSubject,
    getAllSubjects,
    getSubjectById,
    updateSubjectById,
    deleteSubject,
    addScoring,
    getAverageScore
}