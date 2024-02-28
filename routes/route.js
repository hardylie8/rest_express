const express = require("express");
const {
  getProducts,
  showProducts,
  postProducts,
  patchProducts,
  deleteProduct,
} = require("./../controllers/productController");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", showProducts);
router.post("/", postProducts);
router.patch("/:id", patchProducts);
router.delete("/:id", deleteProduct);
module.exports = router;
