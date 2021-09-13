const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../database/mysql");

const signIn = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    const getQs = "SELECT * FROM users WHERE email = ? OR username = ?";
    db.query(getQs, [email, email], (err, result) => {
      if (err) return reject(err);
      if (!result.length) return reject(401);
      bcrypt.compare(password, result[0].password, (err, isPasswordValid) => {
        if (err) return reject(err);
        if (!isPasswordValid) return reject(401);
        const userInfo = {
          user_id: result[0].id,
          name: result[0].name,
          username: result[0].username,
          email: result[0].email,
          phone: result[0].phone,
          role_id: result[0].role_id,
          image: result[0].image,
        };
        const payload = {
          name: result[0].name,
          email,
          role_id: result[0].role_id,
        };
        jwt.sign(
          payload,
          process.env.SECRET_KEY,
          {
            expiresIn: "10m",
            issuer: "Arkademy",
          },
          (err, token) => {
            if (err) return reject(err);
            const queryPostToken = `INSERT INTO active_token (token, time_issued) VALUES ("${token}",${Date.now()})`;
            db.query(queryPostToken, (err, result) => {
              if (err) return reject(err);
              return resolve({ token, userInfo: userInfo });
            });
          }
        );
      });
    });
  });
};

const signOut = (req) => {
  return new Promise((resolve, reject) => {
    const { body } = req;
    const queryDelete = `DELETE FROM active_token WHERE token = "${body.token}"`;
    db.query(queryDelete, (err, result) => {
      if (err) return reject(err);
      return resolve("Anda berhasil Log Out");
    });
  });
};

const forgotPassword = (body) => {
  return new Promise((resolve, reject) => {
    const { user } = body;
    const array = new Uint16Array(1);
    const randomNumber = Math.ceil(
      window.crypto.getRandomValues(array)[0] / 10
    );
    const query = `INSERT INTO forgot_password (user, code) VALUES (? ,?)`;
    db.query(query, [user, randomNumber], (err, result) => {
      if (err) return reject(err);
      return resolve("Verification Code Sent to Database");
    });
  });
};

const verifyCodeForgot = (body) => {
  return new Promise((resolve, reject) => {
    const { code } = body;
    const getQuery = `SELECT * FROM forgot_password WHERE code = ?`;
    db.query(getQuery, code, (err, result) => {
      if (err) return reject(err);
      if (!result.length) return reject(401);
      const deleteQuery = `DELETE FROM forgot_password WHERE code = ?`;
      db.query(deleteQuery, code, (err, result) => {
        if (err) return reject(err);
        return resolve("Code Valid");
      });
    });
  });
};

const updateForgotPassword = (body) => {};

module.exports = {
  signIn,
  signOut,
  forgotPassword,
  verifyCodeForgot,
  updateForgotPassword,
};
