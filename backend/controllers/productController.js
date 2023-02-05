const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apifeatures");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//add product
exports.createProduct = async (req, res, next) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

//get all products
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const productsCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query).search();
  // .filter();

  let products = await apiFeature.query;

  let filteredProductsCount = products.length;

  // apiFeature.pagination(resultPerPage);

  // products = await apiFeature.query;

  res.status(200).json({
    success: true,
    products,
    productsCount,
    // resultPerPage,
    filteredProductsCount,
  });
});

//get single product
exports.getProduct = async (req, res) => {
  try {
    const getProduct = await Product.findById(req.params.id);
    res.status(200).json(getProduct);
    // console.log(getProduct);
  } catch (err) {
    res.json(err);
  }
};

//update product
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }
  const newProductData = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    image: req.body.image,
  };

  product = await Product.findByIdAndUpdate(req.params.id, newProductData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

//delete product
// exports.deleteProduct = async (req, res) => {
//   try {
//     const deleteProduct = await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json("product deleted");
//   } catch (err) {
//     res.json(err);
//   }
// };

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});
