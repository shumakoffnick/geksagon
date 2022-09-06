import React from "react";
import {Form} from '../components/Form'
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {setUser} from '../store/slices/userSlice'
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const goBack = ()=>{navigate('/')}
    const handleLogin = (email, password)=>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) =>{
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }))
            goBack()
        })
        .catch(console.error)
    }
    return(
        <>
        <Form
        title="sign in"
        handleClick={handleLogin}
        />
        </>
    )
}
export {Login}