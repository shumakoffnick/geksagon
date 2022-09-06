import { SignUp } from "../components/SignUp";
import React from "react";
import { Link } from "react-router-dom";

const RegisterPages = ()=>{
    return(
        <>
        <div className="register">
        <h1>Register</h1>
        <SignUp/>
        <p>
            Login <Link to="/login">now</Link>
        </p>
        </div>
        </>
    )
}
export default RegisterPages