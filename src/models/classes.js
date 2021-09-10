const db = require("../database/mysql");

const addNewClass = (body) =>
  new Promise((resolve, reject) => {
    const queryString = "INSERT INTO classes SET ?";
    db.query(queryString, body, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

const getClasses = (query, hostname) =>
  new Promise((resolve, reject) => {
    const keyword = query?.keyword ? query.keyword : "";
    const category = query?.category ? query.category : "";
    const level = query?.level ? query.level : "";
    const price = query?.price ? query.price : 0;
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const offset = limit * (page - 1);
    const queryString = `SELECT * FROM classes WHERE name LIKE "%${keyword}%" AND category LIKE "%${category}%" AND level LIKE "%${level}%" AND pricing >= ? LIMIT ? OFFSET ?`;
    db.query(queryString, [price, limit, offset], (error, result) => {
      if (error) return reject(error);
      if (!result.length) return reject(404);
      const queryCountTotal = `SELECT COUNT(id) AS total FROM classes WHERE name LIKE "%${keyword}%" AND category LIKE "%${category}%" AND level LIKE "%${level}%" AND pricing >= ?`;
      db.query(queryCountTotal, price, (err, totalResult) => {
        if (err) return reject(err);
        const totalData = totalResult[0].total;
        const totalPage = Math.ceil(totalData / limit);
        const baseURL = `http://${hostname}:8000/classes?limit=${limit}&`;
        let urlPrevPage = baseURL;
        let urlNextPage = baseURL;
        query.keyword &&
          ((urlPrevPage = urlPrevPage + `keyword=${keyword}&`),
          (urlNextPage = urlNextPage + `keyword=${keyword}&`));
        query.category &&
          ((urlPrevPage = urlPrevPage + `category=${category}&`),
          (urlNextPage = urlNextPage + `category=${category}&`));
        query.level &&
          ((urlPrevPage = urlPrevPage + `level=${level}&`),
          (urlNextPage = urlNextPage + `level=${level}&`));
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
      });
    });
  });

const getClassById = (id) =>
  new Promise((resolve, reject) => {
    const queryString = `SELECT u.name AS "student_name", r.name AS "role", c.name AS "course_name" FROM users u JOIN user_class uc ON u.id = uc.user_id JOIN classes c ON uc.class_id = c.id JOIN roles r ON u.role_id = r.id WHERE uc.class_id = ?`;
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
  getClasses,
  getClassById,
  updateClassById,
  deleteClass,
};
