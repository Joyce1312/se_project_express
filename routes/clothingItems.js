const router = require("express").Router();
const verifyToken = require("../middlewares/auth");
const {
  getClothingItem,
  createClothingItem,
  deleteClothingItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");
const { validateCardBody, validateId } = require("../middlewares/validation");

router.get("/", getClothingItem);

router.post("/", verifyToken, validateCardBody, createClothingItem);

router.delete("/:itemId", verifyToken, validateId, deleteClothingItem);

router.put("/:itemId/likes", verifyToken, validateId, likeItem);

router.delete("/:itemId/likes", verifyToken, validateId, dislikeItem);

module.exports = router;
