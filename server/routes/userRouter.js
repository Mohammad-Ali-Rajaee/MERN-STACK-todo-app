const express = require("express");
const router = express.Router();

const {
  register,
  confirmEmailToken,
  login,
} = require("../controllers/userControllers");

router.post("/register", register);
router.get("/confirm-email/:emailToken", confirmEmailToken);
router.post("/login", login);
module.exports = router;
