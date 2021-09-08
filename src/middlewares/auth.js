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
              "Token Expired, Silahkan Login Kembali"
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

module.exports = {
  checkToken,
};
