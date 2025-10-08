import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CreateItem = () => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [error, setError] = useState("");
   const navigate = useNavigate();


   const handleSubmit = async (e) => {
       e.preventDefault();
       const token = document.cookie
           .split("; ")
           .find((row) => row.startsWith("jwt="))
           ?.split("=")[1];
       if (token) {
           try {
               await axios.post(
                   "/api/items",
                   { title, description, price },
                   {
                       headers: { Authorization: `Bearer ${token}` },
                   }
               );
               navigate("/");
           } catch (err) {
               setError("Failed to create item. Please try again.");
               console.error(err);
           }
       }
   };


   return (
       <div className="bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-gray-300">
           <div className="max-w-2xl mx-auto">
               <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden">
                   <div className="p-6 sm:p-10">
                       <h2 className="text-3xl font-extrabold text-white mb-6">
                           Create Item
                       </h2>
                       <form onSubmit={handleSubmit}>
                           <div className="mb-4">
                               <label
                                   htmlFor="title"
                                   className="block text-lg font-medium text-gray-300 mb-1"
                               >
                                   Title
                               </label>
                               <input
                                   id="title"
                                   type="text"
                                   value={title}
                                   onChange={(e) => setTitle(e.target.value)}
                                   className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300"
                                   required
                               />
                           </div>
                           <div className="mb-4">
                               <label
                                   htmlFor="description"
                                   className="block text-lg font-medium text-gray-300 mb-1"
                               >
                                   Description
                               </label>
                               <textarea
                                   id="description"
                                   value={description}
                                   onChange={(e) =>
                                       setDescription(e.target.value)
                                   }
                                   className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300"
                                   required
                               />
                           </div>
                           <div className="mb-4">
                               <label
                                   htmlFor="startingBid"
                                   className="block text-lg font-medium text-gray-300 mb-1"
                               >
                                   Price ($)
                               </label>
                               <input
                                   id="startingBid"
                                   type="number"
                                   value={price}
                                   onChange={(e) =>
                                       setPrice(e.target.value)
                                   }
                                   className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300"
                                   min={0}
                                   required
                               />
                           </div>
                           <button
                               type="submit"
                               className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-300 text-lg font-semibold"
                           >
                               Create
                           </button>
                       </form>
                       {error && <p className="text-red-500 mb-4">{error}</p>}
                   </div>
               </div>
           </div>
       </div>
   );
};


export default CreateItem;