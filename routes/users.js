const router = require("express").Router();
const user = require("../models/user");
const item = require("../models/clothingItem");
const { getUsers, getUser, createUser } = require("../controllers/users");

router.get("/", getUsers);

router.get("/:userId", getUser);

router.post("/", createUser);
module.exports = router;
