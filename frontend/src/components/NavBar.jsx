import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <nav className="bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-full lg:flex lg:items-center lg:w-auto block">
                    <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 mt-4 lg:mt-0">
                        <li>
                            <Link
                                className="text-white hover:text-gray-300 text-lg"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        {!isLoggedIn && (
                            <>
                            <li>
                                <Link
                                    className="text-white hover:text-gray-300 text-lg"
                                    to="/signup"
                                >
                                    Sign Up
                                </Link>
                            </li>
                            </>
                        )}
                        {!isLoggedIn && (
                            <>
                            <li>
                                <Link
                                    className="text-white hover:text-gray-300 text-lg"
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </li>
                            </>
                        )}
                        {isLoggedIn && (
                            <>
                            <li>
                                <Link
                                    className="text-white hover:text-gray-300 text-lg"
                                    to="/profile"
                                >
                                    Profile
                                </Link>
                            </li>
                            </>
                        )}
                        {isLoggedIn && (
                            <>
                            <li>
                                <Link
                                    className="text-white hover:text-gray-300 text-lg"
                                    to="/logout"
                                >
                                    Logout
                                </Link>
                            </li>
                            </>
                        )}
                        {isLoggedIn && (
                          <>
                          <li>
                              <Link
                                  className="text-white hover:text-gray-300 text-lg"
                                  to="/createitem"
                              >
                                  Create Item
                              </Link>
                          </li>
                          </>
                      )}

                    </ul>
                </div>
            </div>
        </nav>
    );
 
};

export default NavBar;
