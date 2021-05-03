// const { request } = require("express");
// const express = require("express");
// const User = require("../models/user") 

// const {getUserById, getUser,updateUser,userPurchaseList } = require("../controllers//user");
// const {isAuthenticated, isSignedIn, isAdmin } = require("../controllers/auth");
// const router = require("./auth");

// router.param("userId",getUserById) ;
// //middlewear 
// router.get("/user/:userId", isSignedIn, isAuthenticated ,getUser);
// // router.get("/users",getAllUsers)
// router.put("/user/:userId", isSignedIn, isAuthenticated ,updateUser)
// router.put("/orders/user/:userId", isSignedIn, isAuthenticated ,userPurchaseList)

// module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  updateUser,
  userPurchaseList
} = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

router.get(
  "/orders/user/:userId",
  isSignedIn,
  isAuthenticated,
  userPurchaseList
);

module.exports = router;
