const Product = require('../models/product.model');

const createProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};
const getAllProducts = async () => {
    return await Product.find();
  };
  const getProductById = async (id) => {
    return await Product.findById(id);
  };
  const updateProductById = async (id, updateData) => {
    return await Product.findByIdAndUpdate(id, updateData, { new: true });
  };
  const deleteProductById = async (id) => {
    return await Product.findByIdAndDelete(id);
  };
  
module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,

};
