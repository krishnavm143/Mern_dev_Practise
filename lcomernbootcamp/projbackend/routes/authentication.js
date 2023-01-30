const express = require("express");
const router = express.Router();
const { check, body, validationResult } = require("express-validator");

const {
  signout,
  signup,
  signin,
  isSignedIn,
} = require("../controllers/authentication");

router.post(
  "/signup",
  body("name", "min 3").isLength({ min: 3 }),
  body("email", "email field is required").isEmail(),
  body("password", "password should be min 5").isLength({ min: 5 }),
  signup
);

router.post(
  "/signin",
  body("email", "email field is required").isEmail(),
  body("password", "password filed is required").isLength({ min: 1 }),
  signin
);

router.get("/signout", signout);

router.get("/testRoutes", isSignedIn, (req, res) => {
  res.json(req.auth);
});

module.exports = router;
