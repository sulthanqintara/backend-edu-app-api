const db = require("../database/mysql");
const jwt = require("jsonwebtoken");

const responseHelper = require("../helpers/response");

const checkToken = (req, res, next) => {
  const bearerToken = req.header("x-access-token");
  if (!bearerToken)
    return responseHelper.error(res, 401, "Silahkan Login Terlebih Dahulu");
  const token = bearerToken.split(" ")[1];
  jwt.verify(
    token,
    process.env.SECRET_KEY,
    { issuer: "Arkademy" },
    (err, payload) => {
      if (err) {
        const queryDelete = `DELETE FROM active_token WHERE token = "${token}"`;
        db.query(queryDelete, (err, result) => {
          if (err) return new Error(responseHelper.error(res, 500, err));
          else
            return responseHelper.error(
              res,
              403,
              "Token Invalid, Silahkan Login Terlebih Dahulu"
            );
        });
      } else {
        const query = `SELECT token FROM active_token WHERE token = "${token}"`;
        db.query(query, (err, result) => {
          if (err) return new Error(responseHelper.error(res, 500, err));
          if (!result.length)
            return new Error(
              responseHelper.error(res, 401, "Silahkan Login Terlebih Dahulu")
            );
          req.token = token;
          req.payload = payload;
          next();
        });
      }
    }
  );
};

const authFacilitator = (req, res, next) => {
  const token = req.token;
  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err) return new Error(responseHelper.error(res, 401, err));
    req.payload = payload;
    console.log(payload);
    if (payload.role_id !== 1)
      return new Error(responseHelper.error(res, 403, "Not a Facilitator!"));
    next();
  });
};

const authUser = (req, res, next) => {
  const token = req.token;
  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err) return new Error(responseHelper.error(res, 401, err));
    req.payload = payload;
    if (payload.role_id !== 2)
      return new Error(responseHelper.error(res, 403, "Not a User!"));
    next();
  });
};

module.exports = {
  checkToken,
  authUser,
  authFacilitator,
};
