const mongoose = require("mongoose");
const validator = require("validator");

const clothingItemSchema = new mongoose.Schema({
  name: {
    required: [true, "The name field is required."],
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  weather: {
    required: [true, "The weather field is required."],
    type: String,
    enum: ["hot", "warm", "cold"],
  },
  imageUrl: {
    required: [true, "The imageUrl field is required."],
    type: String,
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: "You must enter a valid URL",
    },
  },
  owner: {
    required: [true, "The owner field is required."],
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("item", clothingItemSchema);
