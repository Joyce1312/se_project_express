const { DUPLICATE_ERROR } = require("../utils/errors");

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = DUPLICATE_ERROR;
  }
}

module.exports = ConflictError;
