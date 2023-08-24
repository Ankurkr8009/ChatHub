const jwt = require("jsonwebtoken");
const secret="piyush"

const generateToken = (id) => {
  return jwt.sign({ id }, secret, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
