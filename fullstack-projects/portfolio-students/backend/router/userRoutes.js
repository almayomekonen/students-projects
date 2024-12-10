const express = require("express");
const userController = require("../controllers/user");
const verified = require("../guard");
const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/verify", verified.authenticateUser, (req, res) => {
  res.status(200).json({
    message: "Token is valid",
    user: req.user,
  });
});

module.exports = router;
