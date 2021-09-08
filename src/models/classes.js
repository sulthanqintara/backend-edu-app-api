const db = require('../database/mysql');

const addNewClass = (body) => new Promise((resolve, reject) => {
  const queryString = 'INSERT INTO classes SET ?';
  db.query(queryString, body, (err, result) => {
    if (err) return reject(err);
    return resolve(result);
  });
});

module.exports = {
    addNewClass,
}