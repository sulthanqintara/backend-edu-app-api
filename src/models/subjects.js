const db = require("../database/mysql");

const addNewSubject = (body) =>
  new Promise((resolve, reject) => {
    const queryString = "INSERT INTO subjects SET ?";
    db.query(queryString, body, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

const getAllSubjects = () =>
  new Promise((resolve, reject) => {
    const queryString = `SELECT s.name AS "subject_name", s.subject_date AS "date", s.start_time, s.end_time, c.name AS "class_name" FROM subjects s JOIN classes c ON s.class_id = c.id`;
    db.query(queryString, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

const getAverageScore = (query) => {
  return new Promise((resolve, reject) => {
    const class_id = query?.class_id ? query.class_id : 0;
    const user_id = query?.user_id ? query.user_id : 0; 
    const queryString = `SELECT sc.score, u.name AS student, su.name AS subject FROM scoring sc JOIN users u ON sc.user_id = u.id JOIN subjects su ON sc.subject_id = su.id WHERE su.class_id = ? AND sc.user_id = ?`;
    db.query(
      queryString, 
      [class_id, user_id], 
      (err, scoreResult) => {
        console.log(class_id);
        if (err) return reject(err);
        const avgQs = `SELECT AVG (sc.score) FROM scoring sc JOIN subjects su ON sc.subject_id = su.id WHERE su.class_id = ? AND sc.user_id = ?`;
        db.query(avgQs, [class_id, user_id], (err, averageResult) => {
          if (err) return reject(err);
          return resolve({
            scResult: scoreResult,
            avgResult: averageResult,
          });
        });
      });
    });
  };

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
    let status_id = 0;
    status_id = score > 75 ? (status_id = 2) : (status_id = 3);
    const queryString =
      "INSERT INTO scoring SET user_id = ?, subject_id = ?, score = ?, status_id = ?";
    db.query(
      queryString,
      [user_id, subject_id, score, status_id],
      (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      }
    );
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
  getAverageScore,
};
