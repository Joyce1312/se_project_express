const router = require("express").Router();
const user = require("../models/user");
const item = require("../models/clothingItem");

router.get("/", () => {
  console.log("GET users");
});

router.get("/:userId", () => {
  console.log("GET userId");
});

router.post("/", () => {
  console.log("POST user");
});
module.exports = router;
