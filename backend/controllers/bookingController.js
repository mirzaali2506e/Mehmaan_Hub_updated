const Booking = require("../models/bookingModel");
const Property = require("../models/propertyModel");

// Create Booking
const createBooking = (req, res) => {
  const { property_id, check_in, check_out, guests } = req.body;

  const tenant_id = req.user.id;

  if (!property_id || !check_in || !check_out) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  // Get Property Owner
  Property.getPropertyById(property_id, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    const owner_id = result[0].owner_id;

    // Prevent owner booking own property
    if (owner_id === tenant_id) {
      return res.status(400).json({
        message: "You cannot book your own property",
      });
    }

    Booking.createBooking(
      property_id,
      tenant_id,
      owner_id,
      check_in,
      check_out,
      guests || 1,
      (err) => {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }

        res.status(201).json({
          message: "Booking request sent successfully",
        });
      }
    );
  });
};

// Tenant Bookings
const getMyBookings = (req, res) => {
  Booking.getBookingsByTenant(req.user.id, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.json(result);
  });
};

// Owner Booking Requests
const getOwnerBookings = (req, res) => {
  Booking.getBookingsByOwner(req.user.id, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.json(result);
  });
};

// Accept / Reject Booking
const updateBookingStatus = (req, res) => {
  const { status } = req.body;

  if (!["accepted", "rejected"].includes(status)) {
    return res.status(400).json({
      message: "Invalid status",
    });
  }

  Booking.updateBookingStatus(
    req.params.id,
    status,
    (err) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.json({
        message: "Booking updated successfully",
      });
    }
  );
};

module.exports = {
  createBooking,
  getMyBookings,
  getOwnerBookings,
  updateBookingStatus,
};