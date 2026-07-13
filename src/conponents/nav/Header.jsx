import React, { useState } from "react";

export const Header = ({data}) => {
    
    // const[userName, setUserName] = useState(' ')

    // if(!data){
    //     setUserName('Admin')
    // } else{
    //     setUserName(data.firstName)
    // }

    const logOutUser = () => {
        localStorage.setItem('loggedInUser','')
        window.location.reload()
        alert("User Try To Log Out")
    }

    return(
        <div className="flex items-end justify-between">
            <h1 className=" font-medium text-2xl"> Hello <br /> <span className=" font-bold text-3xl">userName 👋</span> </h1>
            <button onClick={logOutUser} className=" bg-red-600 text-xl px-3 py-2 rounded-xl">Log Out</button>
        </div>
    );
}