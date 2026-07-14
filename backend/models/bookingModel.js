const db = require("../config/db");

// Create Booking
const createBooking = (
  property_id,
  tenant_id,
  owner_id,
  check_in,
  check_out,
  guests,
  callback
) => {
  const sql = `
    INSERT INTO bookings
    (property_id, tenant_id, owner_id, check_in, check_out, guests)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      property_id,
      tenant_id,
      owner_id,
      check_in,
      check_out,
      guests,
    ],
    callback
  );
};

// Get Tenant Bookings
const getBookingsByTenant = (tenantId, callback) => {
  const sql = `
   SELECT
  b.*,
  p.title,
  p.city,
  p.image,
  p.rent,

  u.full_name AS owner_name,
  u.email AS owner_email,
  u.phone AS owner_phone

FROM bookings b

JOIN properties p
ON b.property_id = p.id

JOIN users u
ON b.owner_id = u.id

WHERE b.tenant_id = ?

ORDER BY b.created_at DESC
  `;

  db.query(sql, [tenantId], callback);
};

// Get Owner Booking Requests
const getBookingsByOwner = (ownerId, callback) => {
  const sql = `
    SELECT
      b.*,
      p.title,
      p.city,
      p.image,
      u.full_name AS tenant_name,
      u.email AS tenant_email
    FROM bookings b
    JOIN properties p
      ON b.property_id = p.id
    JOIN users u
      ON b.tenant_id = u.id
    WHERE b.owner_id = ?
    ORDER BY b.created_at DESC
  `;

  db.query(sql, [ownerId], callback);
};

// Update Booking Status
const updateBookingStatus = (
  bookingId,
  status,
  callback
) => {
  const sql = `
    UPDATE bookings
    SET status = ?
    WHERE id = ?
  `;

  db.query(sql, [status, bookingId], callback);
};

 const getBookingStatsByOwner = (ownerId, callback) => {
  const sql = `
    SELECT
      COUNT(*) AS totalBookings,

      SUM(CASE WHEN status='pending' THEN 1 ELSE 0 END) AS pendingBookings,

      SUM(CASE WHEN status='accepted' THEN 1 ELSE 0 END) AS acceptedBookings,

      SUM(CASE WHEN status='rejected' THEN 1 ELSE 0 END) AS rejectedBookings

    FROM bookings
    WHERE owner_id = ?
  `;

  db.query(sql, [ownerId], callback);
};

module.exports = {
  createBooking,
  getBookingsByTenant,
  getBookingsByOwner,
  updateBookingStatus,
  getBookingStatsByOwner,
};