const User = require("../models/user");
const {
  INVAILD_ERROR,
  NON_EXISTENT_ERROR,
  DEFAULT_ERROR,
} = require("../utils/errors");

// {
//     "name": "Test User",
//     "avatar": "https://images.unsplash.com/photo-1556079337-a837a2d11f04?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9zdG9ufGVufDB8fDB8fHww",
//     "_id": "691ca576600a5e8324ca9793",
//     "__v": 0
// }

const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      console.error(err);
      return res
        .status(DEFAULT_ERROR)
        .send({ message: "An error has occurred on the server" });
    });
};

const getUser = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .orFail(() => {
      const error = new Error("User ID not found");
      error.statusCode = 404;
      error.name = "DocumentNotFoundError";
      throw error;
    })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      console.error(err);
      if (err.name === "DocumentNotFoundError") {
        res.status(NON_EXISTENT_ERROR).send({ message: "Not found" });
      } else if (err.name === "CastError") {
        res.status(INVAILD_ERROR).send({ message: "Casting Error" });
      }
      return res
        .status(DEFAULT_ERROR)
        .send({ message: "An error has occurred on the server" });
    });
};

const createUser = (req, res) => {
  const { name, avatar } = req.body;
  User.create({ name, avatar })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      console.error(err);
      if (err.name === "ValidationError") {
        return res.status(INVAILD_ERROR).send({ message: "Validation error" });
      }
      return res
        .status(DEFAULT_ERROR)
        .send({ message: "An error has occurred on the server" });
    });
};

module.exports = { getUsers, getUser, createUser };
