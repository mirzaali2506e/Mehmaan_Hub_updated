const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");


const {
  createBooking,
  getMyBookings,
  getOwnerBookings,
  updateBookingStatus,
} = require("../controllers/bookingController");

// Tenant
router.post("/", verifyToken, createBooking);

// Tenant
router.get("/my-bookings", verifyToken, getMyBookings);

// Owner
router.get("/owner-bookings", verifyToken, getOwnerBookings);

// Owner
router.put("/:id", verifyToken, updateBookingStatus);

module.exports = router;