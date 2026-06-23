// const bcrypt = require("bcryptjs");
// const User = require("../models/userModel");
// const jwt = require("jsonwebtoken");

// const registerUser = async (req, res) => {
//   try {
//     const { full_name, email, password, role } = req.body;

//     if (!full_name || !email || !password) {
//       return res.status(400).json({
//         message: "All fields are required",
//       });
//     }

//     User.findUserByEmail(email, async (err, result) => {
//       if (err) {
//         return res.status(500).json({
//           message: err.message,
//         });
//       }

//       if (result.length > 0) {
//         return res.status(400).json({
//           message: "Email already exists",
//         });
//       }

//       const hashedPassword = await bcrypt.hash(password, 10);

//       User.createUser(
//         full_name,
//         email,
//         hashedPassword,
//         role || "tenant",
//         (err) => {
//           if (err) {
//             return res.status(500).json({
//               message: err.message,
//             });
//           }

//           res.status(201).json({
//             message: "User registered successfully",
//           });
//         }
//       );
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   registerUser,
// };
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Register User
const registerUser = async (req, res) => {
  try {
    const { full_name, email, password, role } = req.body;

    if (!full_name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    User.findUserByEmail(email, async (err, result) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      if (result.length > 0) {
        return res.status(400).json({
          message: "Email already exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      User.createUser(
        full_name,
        email,
        hashedPassword,
        role || "tenant",
        (err) => {
          if (err) {
            return res.status(500).json({
              message: err.message,
            });
          }

          res.status(201).json({
            message: "User registered successfully",
          });
        }
      );
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Login User
const loginUser = (req, res) => {
  const { email, password } = req.body;

  User.findUserByEmail(email, async (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
      },
    });
  });
};

module.exports = {
  registerUser,
  loginUser,
};