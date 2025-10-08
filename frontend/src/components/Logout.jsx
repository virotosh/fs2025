import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";


function Logout() {
   const navigate = useNavigate();
   const { isLoggedIn, logout } = useAuth();


   useEffect(() => {
       const signout = async () => {
           try {
               await axios.post("/api/users/logout", {});
               document.cookie =
                   "jwt=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
               logout();
               navigate("/login");
           } catch (err) {
               console.error(err);
           }
       };


       signout();
   }, [navigate, isLoggedIn]);


   return (<div>Logging out...</div>);
}


export default Logout;
