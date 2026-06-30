const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();

const {
  registerUser,
  loginUser,
   getProfile,
  updateProfile,
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, getProfile);

router.put(
  "/profile",
  verifyToken,
  upload.single("profile_image"),
  updateProfile
);

module.exports = router;