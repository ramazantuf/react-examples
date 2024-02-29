import { useAuth } from "../context/GirisContext";
import { Navigate,useLocation } from "react-router-dom";
export default function PrivateRoute({children}){
    const {user} = useAuth()
    const location = useLocation()
    if(!user){
        return <Navigate to="/auth/login" replace={true} state={{return_url: location.pathname + location.search}}/>
    }

    return children
}