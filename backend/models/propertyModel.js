const db = require("../config/db");

const createProperty = (
  title,
  description,
  city,
  address,
  rent,
  property_type,
  image,
  owner_id,
  callback
) => {
  const sql = `
   INSERT INTO properties
(title, description, city, address, rent, property_type, image, owner_id)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [title, description, city, address, rent, property_type, image, owner_id],
    callback
  );
};

const getAllProperties = (callback) => {
  const sql = `
    SELECT 
      p.*,
      u.full_name AS owner_name,
      u.email AS owner_email
    FROM properties p
    JOIN users u ON p.owner_id = u.id
    ORDER BY p.created_at DESC
  `;

  db.query(sql, callback);
};
const getPropertyCount = (ownerId, callback) => {
  const sql = `
    SELECT COUNT(*) AS total
    FROM properties
    WHERE owner_id = ?
  `;

  db.query(sql, [ownerId], callback);
};

module.exports = {
  createProperty,
  getAllProperties,
  getPropertyCount,
  getPropertyById: (id, callback) => {
    const sql = `
    SELECT 
    p.*,
    u.full_name AS owner_name,
    u.email AS owner_email
    FROM properties p
    JOIN users u ON p.owner_id = u.id
    WHERE p.id = ?
    `;
    
    db.query(sql, [id], callback);
  },
  searchPropertiesByCity: (city, callback) => {
    const sql = `
    SELECT 
    p.*,
    u.full_name AS owner_name
    FROM properties p
    JOIN users u ON p.owner_id = u.id
    WHERE p.city = ?
    ORDER BY p.created_at DESC
    `;
    
    db.query(sql, [city], callback);
},
getPropertyOwner: (propertyId, callback) => {
  const sql = "SELECT owner_id FROM properties WHERE id = ?";

  db.query(sql, [propertyId], callback);
},

deleteProperty: (propertyId, callback) => {
  const sql = "DELETE FROM properties WHERE id = ?";

  db.query(sql, [propertyId], callback);
},
updateProperty: (
  propertyId,
  title,
  description,
  city,
  address,
  rent,
  property_type,
  callback
) => {
  const sql = `
  UPDATE properties
  SET
  title = ?,
  description = ?,
  city = ?,
  address = ?,
  rent = ?,
  property_type = ?
  WHERE id = ?
  `;
  
  db.query(
    sql,
    [
      title,
      description,
      city,
      address,
      rent,
      property_type,
      propertyId,
    ],
    callback
  );
},
getPropertiesByOwner :(ownerId, callback) => {
  const sql = `
  SELECT *
  FROM properties
  WHERE owner_id = ?
  ORDER BY created_at DESC
  `;
  
 
  db.query(sql, [ownerId], callback);
}


};