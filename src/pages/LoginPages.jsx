import { Login } from "components/Login";
import React from "react";
import { Link } from "react-router-dom";
const LoginPages = ()=>{
    return(
        <>
        <div className="login">
        <h1 className="loginTitle">Login</h1>
            <Login/>
        <p>
            Registr <Link to="/register">now</Link>
        </p>
        </div>
        </>
    )
}
export default LoginPages