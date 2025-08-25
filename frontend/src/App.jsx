import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import CreateItem from "./components/CreateItem";
import { AuthProvider } from "./contexts/AuthContext";
import { useState, useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

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
          <Route path="/logout" element={<Logout />} />
          <Route
							path="/profile"
							element={<ProtectedRoute component={Profile} />}
						/>
          <Route
              path="/createitem"
              element={<ProtectedRoute component={CreateItem} />}
            />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;