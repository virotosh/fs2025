const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is userRoutes');
 });

const {
	registerUser,
    loginUser,
    logoutUser,
    userProfile,
} = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/profile", authMiddleware, userProfile);

module.exports = router;