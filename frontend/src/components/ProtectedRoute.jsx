import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const location = useLocation();
    const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("jwt="))
        ?.split("=")[1];
    console.log("go through Protected Route!")
    return token ? (
        <Component {...rest} />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
 };
 
 
 export default ProtectedRoute;