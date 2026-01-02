const router = require("express").Router();
const verifyToken = require("../middlewares/auth");
const {
  getClothingItem,
  createClothingItem,
  deleteClothingItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");

router.get("/", getClothingItem);

router.post("/", verifyToken, createClothingItem);

router.delete("/:itemId", verifyToken, deleteClothingItem);

router.put("/:itemId/likes", verifyToken, likeItem);

router.delete("/:itemId/likes", verifyToken, dislikeItem);

module.exports = router;
