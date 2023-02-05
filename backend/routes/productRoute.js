const router = require("express").Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
// const productsModel = require("../models/productModel");
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} = require("../controllers/productController");

router.route("/products").get(getAllProducts);
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router
  .route("/admin/product/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)

  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);

router.route("/product/:id").get(getProduct);

// router.post("/api/product", async (req, res) => {
//   try {
//     const newItem = new productsModel({
//       title: req.body.title,
//       category: req.body.category,
//       // image: req.body.image,
//       // rating: {
//       //   rate: req.body.rate,
//       //   count: req.body.count,
//       // },
//     });
//     const saveItem = await newItem.save();
//     res.status(200).json(saveItem);
//   } catch (err) {
//     res.json(err);
//     console.log(err);
//   }
// });

// router.get("/api/products", async (req, res) => {
//   try {
//     const allProducts = await productsModel.find({});
//     res.status(200).json(allProducts);
//   } catch (err) {
//     res.json(err);
//   }
// });

// router.put("/api/product/:id", async (req, res) => {
//   try {
//     const updateProduct = await productsModel.findByIdAndUpdate(req.params.id, {
//       $set: req.body,
//     });
//     res.status(200).json("product updated");
//   } catch (err) {
//     res.json(err);
//   }
// });

// router.delete("/api/product/:id", async (req, res) => {
//   try {
//     const deleteProduct = await productsModel.findByIdAndDelete(req.params.id);
//     res.status(200).json("product deleted");
//   } catch (err) {
//     res.json(err);
//   }
// });

module.exports = router;
