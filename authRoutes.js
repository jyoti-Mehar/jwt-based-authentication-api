const role = require("../middleware/roleMiddleware");
const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);

router.get("/profile", auth, (req, res) => {
    res.json({ msg: "Welcome Jyoti 😎" });
});

router.get("/admin", auth, role("admin"), (req, res) => {
    res.json({ msg: "Welcome Admin 👑" });
});

module.exports = router;

