const ClothingItem = require("../models/clothingItem");
const { NON_EXISTENT_ERROR } = require("../utils/errors");
const BadRequestError = require("../errors/badRequestError");
const NotFoundError = require("../errors/notFoundError");
const ForbiddenError = require("../errors/forbiddenError");

const getClothingItem = (req, res, next) => {
  ClothingItem.find({})
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((err) => {
      return next(err);
      // console.error(err);
      // return res
      //   .status(DEFAULT_ERROR)
      //   .send({ message: "An error has occurred on the server" });
    });
};

const createClothingItem = (req, res, next) => {
  const { name, weather, imageUrl } = req.body;

  ClothingItem.create({ name, weather, imageUrl, owner: req.user._id })
    .then((item) => {
      res.status(201).send(item);
    })
    .catch((err) => {
      // console.error(err);
      if (err.name === "ValidationError") {
        return next(new BadRequestError("Validation error"));
        // return res.status(INVAILD_ERROR).send({ message: "Validation error" });
      } else {
        return next(err);
      }
      // return res
      //   .status(DEFAULT_ERROR)
      //   .send({ message: "An error has occurred on the server" });
    });
};

const deleteClothingItem = (req, res, next) => {
  const { itemId } = req.params;
  const userId = req.user._id;
  ClothingItem.findById(itemId)
    .orFail(() => {
      const error = new Error("Item ID not found");
      error.statusCode = NON_EXISTENT_ERROR;
      error.name = "DocumentNotFoundError";
      throw error;
    })
    .then((item) => {
      if (item.owner.toString() !== userId) {
        return next(new ForbiddenError("Forbidden Error"));
        // return res.status(FORBIDDEN_ERROR).send({ message: "Forbidden Error" });
      }
      return ClothingItem.findByIdAndDelete(itemId).then((deletedItem) => {
        res.status(200).send(deletedItem);
      });
    })
    .catch((err) => {
      // console.error(err);
      if (err.name === "DocumentNotFoundError") {
        return next(new NotFoundError("Not found"));
        // return res.status(NON_EXISTENT_ERROR).send({ message: "Not found" });
      }
      if (err.name === "CastError") {
        return next(new BadRequestError("Casting Error"));
        // return res.status(INVAILD_ERROR).send({ message: "Casting Error" });
      }
      return next(err);
      // return res
      //   .status(DEFAULT_ERROR)
      //   .send({ message: "An error has occurred on the server" });
    });
};

const likeItem = (req, res, next) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndUpdate(
    itemId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => {
      const error = new Error("Item ID not found");
      error.statusCode = NON_EXISTENT_ERROR;
      error.name = "DocumentNotFoundError";
      throw error;
    })
    .then((item) => {
      res.status(200).send(item);
    })
    .catch((err) => {
      // console.error(err);
      if (err.name === "DocumentNotFoundError") {
        return next(new NotFoundError("Not found"));
        // return res.status(NON_EXISTENT_ERROR).send({ message: "Not found" });
      }
      if (err.name === "CastError") {
        return next(new BadRequestError("Casting Error"));
        // return res.status(INVAILD_ERROR).send({ message: "Casting Error" });
      }
      return next(err);
      // return res
      //   .status(DEFAULT_ERROR)
      //   .send({ message: "An error has occurred on the server" });
    });
};

const dislikeItem = (req, res, next) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndUpdate(
    itemId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => {
      const error = new Error("Item ID not found");
      error.statusCode = NON_EXISTENT_ERROR;
      error.name = "DocumentNotFoundError";
      throw error;
    })
    .then((item) => {
      res.status(200).send(item);
    })
    .catch((err) => {
      // console.error(err);
      if (err.name === "DocumentNotFoundError") {
        return next(new NotFoundError("Not found"));
        // return res.status(NON_EXISTENT_ERROR).send({ message: "Not found" });
      }
      if (err.name === "CastError") {
        return next(new BadRequestError("Casting Error"));
        // return res.status(INVAILD_ERROR).send({ message: "Casting Error" });
      }
      return next(err);
      // return res
      //   .status(DEFAULT_ERROR)
      //   .send({ message: "An error has occurred on the server" });
    });
};

module.exports = {
  getClothingItem,
  createClothingItem,
  deleteClothingItem,
  likeItem,
  dislikeItem,
};
