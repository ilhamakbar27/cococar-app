const jwt = require("jsonwebtoken");
const secretKey = "makanmalam";

const createToken = (payload) =>
  jwt.sign(payload, secretKey, { expiresIn: "24h" });

const verifyToken = (token) => jwt.verify(token, secretKey);

module.exports = {
  createToken,
  verifyToken,
};
