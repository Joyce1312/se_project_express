const { NON_EXISTENT_ERROR } = require("../utils/errors");

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = NON_EXISTENT_ERROR;
  }
}

module.exports = NotFoundError;
