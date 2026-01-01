const bcrypt = require("bcryptjs");
const User = require("../models/user");
const {
  INVAILD_ERROR,
  NON_EXISTENT_ERROR,
  DEFAULT_ERROR,
  DUPLICATE_ERROR,
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
        return res.status(NON_EXISTENT_ERROR).send({ message: "Not found" });
      }
      if (err.name === "CastError") {
        return res.status(INVAILD_ERROR).send({ message: "Casting Error" });
      }
      return res
        .status(DEFAULT_ERROR)
        .send({ message: "An error has occurred on the server" });
    });
};

const createUser = (req, res) => {
  console.log("Entering createUser function");
  const { name, avatar, email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    User.create({ name, avatar, email, password: hash })
      .then((user) => {
        res.status(201).send({
          email: user.email,
          name: user.name,
          avatar: user.avatar,
        });
      })
      .catch((err) => {
        console.error(err);
        console.log("Error Name: " + err.name);
        if (err.name === "ValidationError") {
          return res
            .status(INVAILD_ERROR)
            .send({ message: "Validation error" });
        }
        if (err.code === 11000) {
          return res
            .status(DUPLICATE_ERROR)
            .send({ message: "Email already exists" });
        }
        return res
          .status(DEFAULT_ERROR)
          .send({ message: "An error has occurred on the server" });
      });
  });
};

module.exports = { getUsers, getUser, createUser };
