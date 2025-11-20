const router = require("express").Router();
const userRouter = require("./users");
const itemRouter = require("./clothingItems");
const { NON_EXISTENT_ERROR } = require("../utils/errors");

router.use("/users", userRouter);
router.use("/items", itemRouter);

router.use((req, res) => {
  res
    .status(NON_EXISTENT_ERROR)
    .send({ message: "Requested resource not found" });
});

module.exports = router;
