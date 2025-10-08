import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { isLoggedIn, login } = useAuth();

    useEffect(() => {
        console.log(isLoggedIn);
        if (isLoggedIn) {
            navigate("/profile");
        }
    }, [isLoggedIn, navigate]);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(
                "/api/users/login",
                { username, password },
                { withCredentials: true }
            );
            if (res.status === 200) {
                navigate("/profile");
                login();
            }
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    
    return (
        <div
          className="flex items-center justify-center min-h-screen bg-gray-700 bg-cover bg-center"
      >
          <div className="w-full max-w-md p-8 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg">
              <h2 className="mb-6 text-3xl font-semibold text-white text-center">
                  Login
              </h2>
              <form onSubmit={handleLogin} className="space-y-4">
                  <div className="flex items-center border rounded-md border-gray-600 bg-gray-700">
                      <a className="w-0 h-6 text-gray-400 ml-3" />
                      <input
                          type="text"
                          className="w-full px-4 py-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value) }
                          required
                      />
                  </div>
                  <div className="flex items-center border rounded-md border-gray-600 bg-gray-700">
                      <a className="w-0 h-6 text-gray-400 ml-3" />
                      <input
                          type="password"
                          className="w-full px-4 py-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                      />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                      <p className="text-white">
                          Don{"'"}t have an account?{" "}
                          <Link
                              to="/signup"
                              className="text-indigo-300 hover:underline"
                          >
                              Signup
                          </Link>
                      </p>
                      <button
                          type="submit"
                          className="px-6 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                          disabled={loading}
                      >
                          Login
                      </button>
                  </div>
              </form>
              {error && (
                  <div className="mt-4 text-red-300 text-center">{error}</div>
              )}
          </div>
      </div>
    )
}

export default Login;