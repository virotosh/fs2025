const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is userRoutes');
 });

const {
	registerUser,
    loginUser,
} = require("../controllers/userController");
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;