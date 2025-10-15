import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthProvider } from "./contexts/AuthContext";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./screens/Home"
import Login from "./screens/Login"
import Logout from "./screens/Logout"
import Profile from "./screens/Profile"

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState("");
    const [tokenExpire, setTokenExpire] = useState("");

    const login = () => {
      setIsLoggedIn(true);
    };

    const logout = () => {
      setIsLoggedIn(false);
    };

    const getToken = async () => {
      try {
        const _tokenExpire = await AsyncStorage.getItem("tokenExpire");
        if (_tokenExpire !== null) {
          setTokenExpire(_tokenExpire);
        }
        if (parseInt(tokenExpire)<Date.now()){
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
        }
        else{
          const _token = await AsyncStorage.getItem("token");
          if (_token !== null) {
            setToken(_token);
          }
        }
      } catch (e) {
        console.error("Error while loading token!");
      }
    };

    useEffect( () => {
      getToken();
      if (token) {
        login();
        console.log("login");
      }
      else {
        logout();
        console.log("logout");
      }
    }, [token]);
  return (
     <NavigationContainer>
      <AuthProvider value={{ isLoggedIn, login, logout }}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
          {isLoggedIn && (
            <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
          )}
          {!isLoggedIn && (
            <Tab.Screen name="Login" component={Login} options={{headerShown: false}}/>
          )}
          {isLoggedIn && (
            <Tab.Screen name="Logout" component={Logout} options={{headerShown: false}}/>
          )}
        </Tab.Navigator>
       </AuthProvider>
     </NavigationContainer>
 );
}