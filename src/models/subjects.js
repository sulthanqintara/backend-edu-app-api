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

const addScoring = (body) =>
  new Promise((resolve, reject) => {
    let user_id = body?.user_id ? body.user_id : 0;
    let subject_id = body?.subject_id ? body.subject_id : 0;
    let score = body?.score ? body.score : 0;
    // let status_id = body?.status_id ? body.status_id : 1;
    let status_id = 0
    status_id = score > 75 ? (status_id = 2) : (status_id = 3);
    const queryString = "INSERT INTO scoring SET user_id = ?, subject_id = ?, score = ?, status_id = ?";
    db.query(queryString, [user_id, subject_id, score, status_id], (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

  const updateScoring = (body, id) =>
  new Promise((resolve, reject) => {
    const queryString = "UPDATE scoring SET ? WHERE id = ?";
    db.query(queryString, [body, id], (err, result) => {
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
  addScoring,
  updateScoring,
};
