
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [itemList, setItemList] = useState([]);
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
             <b>€{item.price}</b>
           </p>
           <p className="text-gray-300 mt-2">
             <b>{item.createdBy}</b>
           </p>
         </li>
       ))}
     </ul>
       </div>
    )
}

export default Home;