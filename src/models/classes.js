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


module.exports = {
    addNewClass,
    getAllClasses,
}