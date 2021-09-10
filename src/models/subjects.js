const db = require("../database/mysql");

const addNewSubject = (body) =>
  new Promise((resolve, reject) => {
    const queryString = "INSERT INTO subjects SET ?";
    db.query(queryString, body, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
const getAllSubjects = (body) =>
  new Promise((resolve, reject) => {
    const queryString = "SELECT * FROM subjects";
    db.query(queryString, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

const getSubjectById = (id) =>
  new Promise((resolve, reject) => {
    const queryString = "SELECT * FROM subjects WHERE id = ?";
    db.query(queryString, id, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

const updateSubjectById = (body, id) =>
  new Promise((resolve, reject) => {
    const queryString = "UPDATE subjects SET ? WHERE id = ?";
    db.query(queryString, [body, id], (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

const deleteSubject = (id) =>
  new Promise((resolve, reject) => {
    const queryString = "DELETE FROM subjects WHERE id = ?";
    db.query(queryString, id, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

module.exports = {
  addNewSubject,
  getAllSubjects,
  getSubjectById,
  updateSubjectById,
  deleteSubject,
};
