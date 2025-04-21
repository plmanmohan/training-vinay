import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return (
            <Navigate to='/loginpage' replace/>
        );
    }  else {
        return children;
    }
}

export default ProtectedRoute;