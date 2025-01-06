import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "./constants";
import { useState } from "react";


function ProtectedRoute({children}){
    const [isAuthorized, setIsAuthorized] = useState(null);

    // refresh accesstoken automatically
    const refreshToken = async() => {

    }

    // check if we need to refresh the access token or not
    const auth = async() => {

    }

    if (isAuthorized === null){
        return <h1 style={{textAlign:"center",color:"red"}}>Loading ....</h1>
    }

    return isAuthorized ? children : <Navigate to="/login" />
}

