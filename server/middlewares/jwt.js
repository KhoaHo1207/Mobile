const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const generateAccessToken = (payload) => {
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return accessToken;
};

module.exports = { generateAccessToken };
