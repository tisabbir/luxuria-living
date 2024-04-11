import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const ProtectedRoute = ({children}) => {
    const {user,loading} = useAuth();

    const location = useLocation();
    
    

        if(loading){
            return <div className="flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>
        } 
        if(user){
           return children;
        }
       return <Navigate to={'/login'} state={location.pathname}></Navigate>
 

    

   
};

export default ProtectedRoute;