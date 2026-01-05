const router = require("express").Router();
const { getCurrentUser, updateUserInfo } = require("../controllers/users");
const verifyToken = require("../middlewares/auth");

router.get("/me", verifyToken, getCurrentUser);

router.patch("/me", verifyToken, updateUserInfo);

module.exports = router;
