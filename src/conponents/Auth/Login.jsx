import React, { useState } from "react";


export const Login = ({handleLogin}) =>{

    const[ email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
        handleLogin(email, password)
        // console.log("email is", email);
        // console.log("password is", password);

        setEmail("");
        setPassword("");
    }


    return(
        <div className="flex h-screen w-screen items-center justify-center  bg-black">
            <div className="border-2 border-emerald-600 rounded-xl p-20">
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className="flex flex-col items-center">
                    <input 
                    value={email} 
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                     type="email" required placeholder="Enter your Email" className=" border-2 border-emerald-600 rounded-full outline-none px-5 py-3" />
                    <input
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                     type="password" required placeholder="Enter Password" className=" border-2 border-emerald-600 rounded-full outline-none px-5 py-3 mt-3"/>
                    <button className="bg-emerald-600 border-emerald-600 rounded-full outline-none px-10 py-3 mt-3 ">Log In</button>
                </form>
            </div>
            
        </div>
        
    )
}