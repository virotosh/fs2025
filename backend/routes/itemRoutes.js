const express = require("express");
const router = express.Router();
const {

} = require("../controllers/itemController")
router.get("/",(req, res)=>{
    res.status(200).json({message: "this is itemRoutes"});
});

module.exports = router;