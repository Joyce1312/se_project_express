const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    required: [true, "The name field is required."],
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    required: [true, "The avatar field is required."],
    type: String,
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: "You must enter a valid URL",
    },
  },
});

module.exports = mongoose.model("user", userSchema);
