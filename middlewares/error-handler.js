const { DEFAULT_ERROR } = require("../utils/errors");

const errorHandler = (err, req, res, next) => {
  console.error(err);
  if (err.statusCode) {
    return res.status(err.statusCode).send({ message: err.message });
  }
  return res
    .status(DEFAULT_ERROR)
    .send({ message: "An error occurred on the server" });
};

module.exports = errorHandler;
