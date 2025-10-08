import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState, useEffect } from "react";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const token = document.cookie
   .split("; ")
   .find((row) => row.startsWith("jwt="))
   ?.split("=")[1];

   useEffect( () => {
    if (token) {
      login();
    }
    else {
      logout();
    }
  }, [token]);

 return (
  <AuthProvider value={{ isLoggedIn, login, logout }}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
   </AuthProvider>
 );
}
export default App;