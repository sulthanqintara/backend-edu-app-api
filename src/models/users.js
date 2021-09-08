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

module.exports = {
  createNewUser,
};
