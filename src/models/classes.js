const db = require("../database/mysql");

const addNewClass = (body) =>
  new Promise((resolve, reject) => {
    const queryString = "INSERT INTO classes SET ?";
    db.query(queryString, body, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

const getAllClasses = () =>
  new Promise((resolve, reject) => {
    const queryString = "SELECT * FROM classes";
    db.query(queryString, (error, result) => {
      if (error) return reject(error);
      return resolve(result);
    });
  });

const getClassById = (id) =>
  new Promise((resolve, reject) => {
    const queryString =
    `SELECT u.name AS "student_name", r.name AS "role", c.name AS "course_name" FROM users u JOIN user_class uc ON u.id = uc.user_id JOIN classes c ON uc.class_id = c.id JOIN roles r ON u.role_id = r.id WHERE uc.class_id = ?`
    db.query(queryString, id, (error, result) => {
      if (error) return reject(error);
      return resolve(result);
    });
  });

const updateClassById = (body, id) =>
  new Promise((resolve, reject) => {
    const queryString = `UPDATE classes SET ? WHERE id = ?`;
    db.query(queryString, [body, id], (error, result) => {
      if (error) return reject(error);
      return resolve(result);
    });
  });

const deleteClass = (id) =>
  new Promise((resolve, reject) => {
    const queryString = "DELETE FROM classes WHERE id = ?";
    db.query(queryString, id, (error, result) => {
      if (error) return reject(error);
      return resolve(result);
    });
  });

module.exports = {
  addNewClass,
  getAllClasses,
  getClassById,
  updateClassById,
  deleteClass,
};
