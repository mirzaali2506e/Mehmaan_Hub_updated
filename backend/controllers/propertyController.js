const Booking = require("../models/bookingModel");
const Property = require("../models/propertyModel");

const addProperty = (req, res) => {
  const image = req.file ? req.file.filename : null;
  const {
    title,
    description,
    city,
    address,
    rent,
    property_type,
  } = req.body;

  const owner_id = req.user.id;

  if (
    !title ||
    !description ||
    !city ||
    !address ||
    !rent ||
    !property_type
  ) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  Property.createProperty(
    title,
    description,
    city,
    address,
    rent,
    property_type,
    image,
    owner_id,
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.status(201).json({
        message: "Property added successfully",
      });
    }
  );
};

const getProperties = (req, res) => {
  Property.getAllProperties((err, results) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.status(200).json(results);
  });
};

const getProperty = (req, res) => {
  const { id } = req.params;

  Property.getPropertyById(id, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.status(200).json(results[0]);
  });
};

const searchProperties = (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({
      message: "City is required",
    });
  }

  Property.searchPropertiesByCity(city, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.status(200).json(results);
  });
};

const removeProperty = (req, res) => {
  const propertyId = req.params.id;
  const userId = req.user.id;

  Property.getPropertyOwner(propertyId, (err, result) => {
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

    if (result[0].owner_id !== userId) {
      return res.status(403).json({
        message: "You can only delete your own property",
      });
    }

    Property.deleteProperty(propertyId, (err) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.status(200).json({
        message: "Property deleted successfully",
      });
    });
  });
};

const editProperty = (req, res) => {
  const propertyId = req.params.id;
  const userId = req.user.id;

  const {
    title,
    description,
    city,
    address,
    rent,
    property_type,
  } = req.body;

  Property.getPropertyOwner(propertyId, (err, result) => {
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

    if (result[0].owner_id !== userId) {
      return res.status(403).json({
        message: "You can only update your own property",
      });
    }

    Property.updateProperty(
      propertyId,
      title,
      description,
      city,
      address,
      rent,
      property_type,
      (err) => {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }

        res.status(200).json({
          message: "Property updated successfully",
        });
      }
    );
  });
};
const getMyProperties = (req, res) => {
  const ownerId = req.user.id;

  Property.getPropertiesByOwner(ownerId, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.status(200).json(results);
  });
};
const getDashboardStats = (req, res) => {
  const ownerId = req.user.id;

  Property.getPropertyCount(ownerId, (err, propertyResult) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    Booking.getBookingStatsByOwner(ownerId, (err, bookingResult) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.json({
        totalProperties: propertyResult[0].total,

        totalBookings:
          bookingResult[0].totalBookings || 0,

        pendingBookings:
          bookingResult[0].pendingBookings || 0,

        acceptedBookings:
          bookingResult[0].acceptedBookings || 0,

        rejectedBookings:
          bookingResult[0].rejectedBookings || 0,

        totalViews: 0,
        earnings: 0,
      });
    });
  });
};

module.exports = {
  addProperty,
  getProperties,
  getProperty,
  getMyProperties,
  searchProperties,
  removeProperty,
  editProperty,
  getDashboardStats,
};