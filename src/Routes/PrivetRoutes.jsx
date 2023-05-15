import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading) {
        return <progress className="progress w-56 text-center"></progress>
    }

    if(user) {
        return children
    }

    return <Navigate to="/login"></Navigate>;
};

export default PrivetRoutes;