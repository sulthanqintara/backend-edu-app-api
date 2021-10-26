const db = require("../database/mysql");

const addNewClass = (file, body) =>
  new Promise((resolve, reject) => {
    const id = body.id;
    const getFileQuery = "SELECT image FROM classes";

    db.query(getFileQuery, id, (err, dbUrl) => {
      if (err) return reject(err);
      let input;

      if (file) {
        const imageUrl = `/images/${file.filename}`;
        input = {
          image: imageUrl,
        };
      }
      if (!file) {
        input = {
          image: dbUrl[0]?.image,
        };
      }

      const newBody = { ...body, ...input };
      const insertQuery = "INSERT INTO classes SET ?";
      db.query(insertQuery, [newBody, id], (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  });

const applyNewClass = (body) =>
  new Promise((resolve, reject) => {
    const queryString = "INSERT INTO user_class SET ?";
    db.query(queryString, body, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

const getClasses = (query, hostname) =>
  new Promise((resolve, reject) => {
    const keyword = query?.keyword ? query.keyword : "";
    const category_id = query?.category_id ? query.category_id : 0;
    const level_id = query?.level_id ? query.level_id : 3;
    const price = query?.price ? query.price : 9999999;
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const offset = limit * (page - 1);
    const queryString = `SELECT * FROM classes WHERE name LIKE "%${keyword}%" AND category_id >= ? AND level_id <= ? AND pricing <= ? LIMIT ? OFFSET ?`;
    db.query(
      queryString,
      [category_id, level_id, price, limit, offset],
      (error, result) => {
        if (error) return reject({ status: 500, msg: error.message });
        if (!result.length)
          return reject({ status: 404, msg: "Class not found!" });
        const queryCountTotal = `SELECT COUNT(id) AS total FROM classes WHERE name LIKE "%${keyword}%" AND category_id = ? AND level_id <= ? AND pricing <= ?`;
        db.query(
          queryCountTotal,
          [category_id, level_id, price],
          (err, totalResult) => {
            if (err) return reject(err);
            const totalData = totalResult[0].total;
            const totalPage = Math.ceil(totalData / limit);
            const baseURL = `http://${hostname}:8000/classes?limit=${limit}&`;
            let urlPrevPage = baseURL;
            let urlNextPage = baseURL;
            query.keyword &&
              ((urlPrevPage = urlPrevPage + `keyword=${keyword}&`),
              (urlNextPage = urlNextPage + `keyword=${keyword}&`));
            query.category_id &&
              ((urlPrevPage = urlPrevPage + `category_id=${category_id}&`),
              (urlNextPage = urlNextPage + `category_id=${category_id}&`));
            query.level_id &&
              ((urlPrevPage = urlPrevPage + `level_id=${level_id}&`),
              (urlNextPage = urlNextPage + `level_id=${level_id}&`));
            query.price &&
              ((urlPrevPage = urlPrevPage + `price=${price}&`),
              (urlNextPage = urlNextPage + `price=${price}&`));
            const prevPage = page > 1 ? urlPrevPage + `page=${page - 1}` : null;
            const nextPage =
              page < totalPage ? urlNextPage + `page=${page + 1}` : null;
            return resolve({
              result,
              totalData,
              totalPage,
              currentPage: page,
              prevPage,
              nextPage,
            });
          }
        );
      }
    );
  });

const getClassById = (id) =>
  new Promise((resolve, reject) => {
    const queryString = `SELECT u.name AS "student_name", r.name AS "role", c.name AS "course_name", ca.name AS "category", l.name AS "level", c.pricing FROM users u JOIN user_class uc ON u.id = uc.user_id JOIN classes c ON uc.class_id = c.id JOIN roles r ON u.role_id = r.id JOIN categories ca ON c.category_id = ca.id JOIN level l ON c.level_id = l.id WHERE uc.class_id = ?`;
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

const getProgressByUser = (query) => {
  return new Promise((resolve, reject) => {
    const user_id = query?.user_id ? query.user_id : 0;
    const class_id = query?.class_id ? query.class_id : 0;
    const queryString = `SELECT COUNT(*) normal_count FROM scoring sc JOIN users u ON sc.user_id = u.id JOIN subjects su ON sc.subject_id = su.id WHERE sc.user_id = ? AND su.class_id = ?`;
    db.query(queryString, [user_id, class_id], (error, countResult) => {
      if (error) return reject(error);
      const notNullQs = `SELECT COUNT(score) AS count_null FROM scoring sc JOIN users u ON sc.user_id = u.id JOIN subjects su ON sc.subject_id = su.id WHERE sc.user_id = ? AND su.class_id = ?`;
      db.query(notNullQs, [user_id, class_id], (error, notNullResult) => {
        if (error) return reject(error);
        const countData = countResult[0].normal_count;
        const notNullData = notNullResult[0].count_null;
        const overallProgress = (countData / notNullData) * 100;
        console.log(overallProgress);
        return resolve(overallProgress);
      });
    });
  });
};

module.exports = {
  addNewClass,
  applyNewClass,
  getClasses,
  getClassById,
  updateClassById,
  deleteClass,
  getProgressByUser,
};
