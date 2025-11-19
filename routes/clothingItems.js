const router = require("express").Router();
const {
  getClothingItem,
  createClothingItem,
  deleteClothingItem,
} = require("../controllers/clothingItems");

router.get("/", getClothingItem);

router.post("/", createClothingItem);

router.delete("/:itemId", deleteClothingItem);

router.put("/:itemId/likes");

router.delete("/:itemId/likes");

router.use((req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

module.exports = router;
