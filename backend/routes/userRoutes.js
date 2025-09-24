const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    logoutUser,
    userProfile,
} = require("../controllers/userController");

router.get('/', (req, res) => {
   res.send('this is userRoutes');
});

router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/register", registerUser);
router.post("/profile", userProfile);

module.exports = router;