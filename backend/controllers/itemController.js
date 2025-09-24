const Item = require("../models/Item");

const getAllItems = async (req, res) => {
   try {
       const items = await Item.find();
       res.status(200).json(items);
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
};


const getItemById = async (req, res) => {
   const { id } = req.params;
   try {
       const items = await Item.findById(id);
       if (!item){
           return res.status(404).json({ message: "Item not found" });
       }
       res.status(200).json(item);
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
};


const createItem = async (req, res) => {
   const { title, description, price} = req.body;
   const userId = req.user.id;


   try {
       const item = await Item.create({
           title,
           description,
           price,
           createdBy: userId,
       });


       res.status(201).json(item);
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
};


const deleteItem = async (req, res) => {
   const { id } = req.params;
   const userId = req.user.id;


   try {
       const item = await Item.findById(id);


       if (!item) {
           return res.status(404).json({ message: "Item not found" });
       }


       if (item.createdBy.toString() !== userId) {
           return res.status(403).json({ message: "Unauthorized action" });
       }


       await item.deleteOne();


       res.json({ message: "Item removed" });
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
};


module.exports = {
   createItem,
   deleteItem,
   getAllItems,
   getItemById,
};
