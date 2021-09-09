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
            return resolve(result);
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

module.exports = {
  createNewUser,
  updatePassword,
  editUser,
  getUserById,
};
