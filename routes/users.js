const router = require("express").Router();
const { getUsers, getCurrentUser } = require("../controllers/users");

//router.get("/", getUsers);

router.get("/me", getCurrentUser);

// router.post("/", createUser);

module.exports = router;
