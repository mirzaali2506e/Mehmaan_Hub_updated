const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const {
  addProperty,
  getProperties,
  searchProperties,
  getProperty,
  removeProperty,
  editProperty,
  getMyProperties,
  getDashboardStats,
} = require("../controllers/propertyController");

// router.post(
//   "/",
//   verifyToken,
//   upload.single("image"),
//   addProperty
// );
// router.get("/", getProperties);
// router.get("/search", searchProperties);
// router.get("/my-properties", verifyToken, getMyProperties);
// router.get("/:id", getProperty);
// router.put("/:id", verifyToken, editProperty);
// router.delete("/:id", verifyToken, removeProperty);
// router.get(
//    "/dashboard-stats",
//    verifyToken,
//    getDashboardStats
// );


router.post(
  "/",
  verifyToken,
  upload.single("image"),
  addProperty
);

router.get("/", getProperties);
router.get("/search", searchProperties);
router.get("/my-properties", verifyToken, getMyProperties);

// 👇 Dashboard route yahan hona chahiye
router.get("/dashboard-stats", verifyToken, getDashboardStats);

// 👇 Dynamic routes hamesha LAST
router.get("/:id", getProperty);
router.put("/:id", verifyToken, editProperty);
router.delete("/:id", verifyToken, removeProperty);


module.exports = router;