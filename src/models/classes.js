const db = require('../database/mysql');

const addNewClass = (body) => new Promise((resolve, reject) => {
  const queryString = 'INSERT INTO classes SET ?';
  db.query(queryString, body, (err, result) => {
    if (err) return reject(err);
    return resolve(result);
  });
});

const getAllClasses = () => new Promise((resolve, reject) => {
  const queryString = 'SELECT * FROM classes';
  db.query(queryString, (error, result) => {
    if (error) return reject(error);
    return resolve(result);
  });
});

const getClassById = (id) => new Promise((resolve, reject) => {
  const queryString = 'SELECT c.id, c.name, u.name AS facilitator FROM classes c JOIN users u ON c.author_id = u.id WHERE c.id = ?';
  db.query(queryString, id, (error, result) => {
    if (error) return reject(error);
    return resolve(result);
  });
});

const updateClassById = (id) => new Promise((resolve, reject) => {
  const queryString = `UPDATE classes SET ? WHERE id = ?`;
  db.query(queryString, id, (error, result) => {
    if (error) return reject(error);
    return resolve(result);
  });
});

const deleteClass = (id) => new Promise((resolve, reject) => {
  const queryString = 'DELETE FROM classes WHERE id = ?';
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
}