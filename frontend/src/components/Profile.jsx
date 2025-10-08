import { useEffect, useState } from "react";
import axios from "axios";

function Profile(){
    const [ user, setUser ] = useState("");
    useEffect (() => {
        const fetchUser = async () => {
            const token = document.cookie
                .split("; ")
                .find((row) => row.startsWith("jwt="))
                ?.split("=")[1];
            if (token) {
                try {
                    const res = await axios.post(
                        "/api/users/profile",
                        {}, // empty data
                        {
                            headers: { Authorization: `Bearer ${token}` },
                        }
                    );
                    setUser(res.data);
                    console.log(res.data);
                } catch (error) {
                    console.error(error);
                }
            }
        };
        fetchUser();
    },[]);
 
    return (
        <div className="min-h-screen px-4 py-12 text-gray-300 bg-gray-900 sm:px-6 lg:px-8">
           <div className="mx-auto max-w-7xl">
               <div className="overflow-hidden bg-gray-800 rounded-lg shadow-xl">
                   <div className="p-6 sm:p-10">
                       <h2 className="mb-6 text-3xl font-extrabold text-white">
                           Profile
                       </h2>
                       <div className="p-6 mb-8 bg-gray-700 rounded-lg">
                           <p className="mb-2 text-lg">
                               <span className="font-semibold text-purple-400">
                                   Username:
                               </span>{" "}
                               {user.username}
                           </p>
                           <p className="mb-2 text-lg">
                               <span className="font-semibold text-purple-400">
                                   User Id:
                               </span>{" "}
                               {user.id}
                           </p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default Profile;