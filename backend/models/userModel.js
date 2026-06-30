const db = require("../config/db");

const createUser = (full_name, email, password, role, callback) => {
  const sql =
    "INSERT INTO users (full_name, email, password, role) VALUES (?, ?, ?, ?)";

  db.query(sql, [full_name, email, password, role], callback);
};

const findUserByEmail = (email, callback) => {
  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], callback);
};

const getUserById = (id, callback) => {
  const sql = `
    SELECT 
      id,
      full_name,
      email,
      role,
      phone,
      city,
      profile_image,
      bio,
      created_at
    FROM users
    WHERE id = ?
  `;

  db.query(sql, [id], callback);
};

const updateUserProfile = (
  id,
  full_name,
  phone,
  city,
  bio,
  profile_image,
  callback
) => {
  const sql = `
    UPDATE users
    SET
      full_name = ?,
      phone = ?,
      city = ?,
      bio = ?,
      profile_image = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [full_name, phone, city, bio, profile_image, id],
    callback
  );
};

module.exports = {
  createUser,
  findUserByEmail,
  getUserById,
  updateUserProfile,
};