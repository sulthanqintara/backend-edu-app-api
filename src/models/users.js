const bcrypt = require("bcrypt");
const db = require("../database/mysql");

// CREATE NEW
const createNewUser = (body) =>
  new Promise((resolve, reject) => {
    const { email } = body;
    const getQuery = "SELECT * FROM users WHERE email = ?";
    db.query(getQuery, email, (err, result) => {
      if (err) return reject(err);
      if (result.length) return reject(409);
      bcrypt.genSalt(10, (err, salt) => {
        if (err) return reject(err);
        bcrypt.hash(body.password, salt, (error, hash) => {
          if (error) return reject(error);
          const userData = {
            ...body,
            password: hash,
          };
          const qs = "INSERT INTO users SET ?";
          db.query(qs, userData, (err, result) => {
            if (err) return reject(err);
            return resolve("User Registered");
          });
        });
      });
    });
  });

const updatePassword = (body) => {
  return new Promise((resolve, reject) => {
    const { id, oldPass, newPass } = body;
    const getPassQuery = "SELECT password FROM users WHERE id = ?";
    db.query(getPassQuery, id, (err, res) => {
      if (err) return reject(err);
      bcrypt.compare(oldPass, res[0].password, (err, result) => {
        if (err) return reject(err);
        if (!result) return reject(403);
        bcrypt.hash(newPass, 10, (err, hash) => {
          if (err) return reject(err);
          const newPassword = {
            password: hash,
          };
          const updateQuery = "UPDATE users SET ? WHERE id = ?";
          db.query(updateQuery, [newPassword, id], (err, result) => {
            if (err) return reject(err);
            return resolve("Password sudah diganti");
          });
        });
      });
    });
  });
};

const editUser = (file, body) => {
  return new Promise((resolve, reject) => {
    const id = body.id;
    const getFileQuery = "SELECT image FROM users WHERE id = ?";

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
      const updateQuery = "UPDATE users SET ? WHERE id = ?";
      db.query(updateQuery, [newBody, id], (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  });
};

const getUserById = (query, hostname) => {
  return new Promise((resolve, reject) => {
    const userId = query?.id;
    const queryGet = `SELECT * FROM users WHERE id = ? `;
    db.query(queryGet, userId, (error, result) => {
      if (error) return reject(error);
      if (!result.length) return reject(404);
      console.log(result[0].image);
      if (!result[0].image) return resolve(result[0]);
      else {
        return resolve({
          ...result[0],
          image: `http://${hostname}:8000${result[0].image}`,
        });
      }
    });
  });
};

const getClassByUser = (query, hostname) =>
  new Promise((resolve, reject) => {
    const keyword = query?.keyword ? query.keyword : "";
    const category_id = query?.category_id ? query.category_id : 0;
    const level_id = query?.level_id ? query.level_id : 0;
    const user_id = query?.user_id ? query.user_id : 0;
    const price = query?.price ? query.price : 0;
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const offset = limit * (page - 1);
    const queryString = `SELECT u.name AS student, c.name AS class_name, ca.name AS category, l.name AS level, c.pricing AS price FROM user_class uc JOIN classes c ON uc.class_id = c.id JOIN users u ON uc.user_id = u.id JOIN categories ca ON c.category_id = ca.id JOIN levels l ON c.level_id = l.id WHERE c.name LIKE "%${keyword}%" AND c.category_id >= ? AND c.level_id >= ? AND c.pricing >= ? AND uc.user_id = ? LIMIT ? OFFSET ?`;
    db.query(
      queryString,
      [category_id, level_id, price, user_id, limit, offset],
      (error, result) => {
        if (error) return reject(error);
        if (!result.length) return reject(404);
        const queryCountTotal = `SELECT COUNT(c.id) AS total FROM user_class uc JOIN classes c ON uc.class_id = c.id JOIN users u ON uc.user_id = u.id WHERE c.name LIKE "%${keyword}%" AND c.category_id = ? AND c.level_id >= ? AND c.pricing >= ? AND uc.user_id = ?`;
        db.query(
          queryCountTotal,
          [category_id, level_id, price, user_id],
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
            query.user_id &&
              ((urlPrevPage = urlPrevPage + `user_id=${user_id}&`),
              (urlNextPage = urlNextPage + `user_id=${user_id}&`));
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

module.exports = {
  createNewUser,
  updatePassword,
  editUser,
  getUserById,
  getClassByUser,
};
