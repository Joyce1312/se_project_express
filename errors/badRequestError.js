const { INVAILD_ERROR } = require("../utils/errors");

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = INVAILD_ERROR;
  }
}

module.exports = BadRequestError;
