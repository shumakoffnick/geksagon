import React from "react";
import { useState } from "react";
const Form = ({title, handleClick}) =>{
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    return(
        <>
        <div className="formComp">
        <input className="inpForm" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
        <input className="inpForm" type="password" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="Password"/>
        <button className="formBtn" onClick={()=>handleClick(email, pass)}>
            {title}
        </button>
        </div>
        </>
    )
}
export {Form}