const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../database/mysql');

const signIn = ({ email, password }) => new Promise((resolve, reject) => {
  const getQs = 'SELECT * FROM users WHERE email = ?';
  db.query(getQs, email, (err, result) => {
    if (err) return reject(err);
    if (!result.length) return reject('Email tidak ditemukan');
    bcrypt.compare(password, result[0].password, (err, isPasswordValid) => {
      if (err) return reject(err);
      if (!isPasswordValid) return reject('Login Gagal');
      const userInfo = {
          user_id: result[0].id,
          name: result[0].name,
          username: result[0].username,
          email: result[0].email,
          phone: result[0].phone,
      }
      const payload = {
        name: result[0].name,
        email,
      };
      jwt.sign(
        payload,
        process.env.SECRET_KEY,
        {
          expiresIn: '3m',
          issuer: 'Arkademy',
        },
        (err, token) => {
          if (err) return reject(err);
          return resolve({token, userInfo: userInfo});
        },
      );
    });
  });
});

module.exports = {
    signIn
};