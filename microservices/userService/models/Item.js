const mongoose = require("mongoose")

const itemSchema = mongoose.Schema({
   title: {
       type: String,
       required: true,
   },
   description: {
       type: String,
       required: true,
   },
   price: {
       type: Number,
       required: true,
   },
   createdBy: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User",
   },
   createdAt: {
       type: Date,
       default: new Date(new Date().getTime()),
   },
});

module.exports = mongoose.model("Item", itemSchema);