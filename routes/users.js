const router = require("express").Router();
const { getCurrentUser, updateUserInfo } = require("../controllers/users");

// router.get("/", getUsers);

router.get("/me", getCurrentUser);

router.patch("/me", updateUserInfo);

// router.post("/", createUser);

module.exports = router;
