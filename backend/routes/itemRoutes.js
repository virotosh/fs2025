const express = require("express");
const router = express.Router();
const {
    createItem,
    deleteItem,
    getAllItems,
    getItemById,
} = require("../controllers/itemController")

const authMiddleware = require("../middleware/authMiddleware");

router.route("/").get(getAllItems)
router.route("/").post(authMiddleware, createItem);
router.route("/:id")
        .get(getItemById);
module.exports = router;