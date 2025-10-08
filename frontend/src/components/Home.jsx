import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { updateCartItem } from "./cart/actions";


function Home({cart, updateCartItem}) {
   const dispatch = useDispatch()
   const [itemList, setItemList] = useState([]);

   const handleAddToCart = (cartitem) => {
       console.log("handleAddToCart")
       console.log(cart);
       const item = cart.items.find(it => it.cartitem._id === cartitem._id);
       const prevQuantity = item ? item.quantity : 0;
       dispatch(updateCartItem({
           cartitem,
           quantity: prevQuantity + 1
       }));
   }

   useEffect(() => {
       const fetchItems = async () => {
           const res = await axios.get("/api/items");
           setItemList(res.data);
       };
       fetchItems();
   }, []);
   return (
       <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
           <ul className="space-y-4">
       {itemList.map((item) => (
         <li
           key={item._id}
           className="border border-gray-700 rounded-lg p-4 bg-gray-800 shadow-md"
         >
           <p className="text-indigo-400 text-lg font-semibold">
               <b>{item.title}</b>
           </p>
           <p className="text-gray-300 mt-2">
             <b>{item.description}</b>
           </p>
           <p className="text-gray-300 mt-2">
             <b>${item.price}</b>
           </p>
           <p className="text-gray-300 mt-2">
             <b>Seller {item.createdBy}</b>
           </p>
           <button
                   type="submit"
                   className="px-6 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                   onClick={(e) => handleAddToCart(item)}
               >
                   Add to Cart
           </button>
         </li>
       ))}
     </ul>
       </div>
   );
};


const mapStateToProps = state => ({
 cart: state.cart
});


export default connect(
 mapStateToProps,
 {updateCartItem}
)(Home);