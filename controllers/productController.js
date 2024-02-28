const product = require("./../models/product");

const getProducts = async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const showProducts = async (req, res) => {
  try {
    const products = await product.findById(req.params.id);
    if (!products) return res.status(400).json({ message: "Data not found." });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postProducts = async (req, res) => {
  const newProduct = new product(req.body);
  try {
    const products = await newProduct.save();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const patchProducts = async (req, res) => {
  const checkId = await product.findById(req.params.id);
  if (!checkId) return res.status(400).json({ message: "Data not found." });
  try {
    const updateProduct = await product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const checkId = await product.findById(req.params.id);
  if (!checkId) return res.status(400).json({ message: "Data not found." });
  try {
    const deleteProduct = await product.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  showProducts,
  postProducts,
  patchProducts,
  deleteProduct,
};
