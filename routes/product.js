// const express = require("express");
// const router = express.Router();

// const { getProductById, createProduct } = require("../controllers/product");
// const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
// const { getUserById } = require("../controllers/user");

// //all of params
// router.param("userId", getUserById);
// router.param("productId", getProductById);

// //all of actual routes
// router.post(
//   "/product/create/:userId",
//   isSignedIn,
//   isAuthenticated,
//   isAdmin,
//   createProduct
// );

// module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getProduct,
  photo,updateProduct,deleteProduct,getAllProducts,getAllUniqueCategories
} = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);
router.param("productId", getProductById);

//all of actual routes
//create routes
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

//toget one product 
//reading routes
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);


//delete route 
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,deleteProduct
);


//update route
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,updateProduct
);


//listing of routes

router.get("/products",getAllProducts);
router.get("/products/categories" , getAllUniqueCategories);

module.exports = router;


//  models -controllers to routes