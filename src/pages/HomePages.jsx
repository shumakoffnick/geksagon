import React from "react";
import { Navigate } from "react-router-dom";
import {useAuth} from '../hooks/use-auth'
import {useDispatch} from 'react-redux'
import {removeUser} from '../store/slices/userSlice'
import LinkPage from "../LinkPage";

const HomePages = ()=>{
    const {isAuth, email} = useAuth()
    const dispatch = useDispatch()
    return isAuth? (
     <div>
        <h1 className="homepageWelcome">
            Welcome
        </h1>
        <div>
        <LinkPage/>
        </div>
        <button className="homepageButton" onClick={()=>dispatch(removeUser())}>Log out from {email}</button>
     </div>   
    ):(
        <Navigate to="/login" replace/>
    )
}
export default HomePages