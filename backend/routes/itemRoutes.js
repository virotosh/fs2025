const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
    createItem,
    deleteItem,
    getAllItems,
    getItemById,
 } = require("../controllers/itemController")


router.route("/").get(getAllItems)
router.route("/").post(authMiddleware, createItem);
router.route("/:id").delete(authMiddleware, deleteItem)
      .get(getItemById);


module.exports = router;