import React, { useState, useLayoutEffect, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../contexts/AuthContext";


const Logout = ({navigation}) => {
   const { isLoggedIn, logout } = useAuth();
   useEffect(() => {
       const removeToken = async () => {
           try {
               await AsyncStorage.removeItem("token");
           } catch (e) {
               console.log("Error! While remove token");
           }
       };
       const removeTokenExpire = async () => {
           try {
               await AsyncStorage.removeItem("tokenExpire");
           } catch (e) {
               console.log("Error! While remove tokenExpire");
           }
       };       
removeToken();
       removeTokenExpire();
       logout();
       navigation.navigate("Home");
   }, []);
   return (
     ""
   );
}
export default Logout;