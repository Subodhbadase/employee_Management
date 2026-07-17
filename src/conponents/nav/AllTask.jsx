import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx"

export const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)
    // console.log(authData.employees)
    return (
        <div className=" bg-[#1c1c1c] p-5 mt-5 rounded h-65 ">
            <div className=" bg-red-400 rounded flex justify-between p-4 mb-2">
                <h2 className="w-1/5">Employee Name</h2>
                <h3 className="w-1/5">New Task</h3>
                <h3 className="w-1/5">Active Task</h3>
                <h3 className="w-1/5">Complected</h3>
                <h3 className="w-1/5">Failed</h3>
            </div>
            <div className="h-[80%] overflow-auto">
                {userData.employees.map((elem, idx) => {
                    return <div key={idx} className=" bg-[#1c1c1c] border-2 border-emerald-600 rounded flex justify-between p-4 mb-2">
                        <h2 className="w-1/5 font-semibold">{elem.firstName}</h2>
                        <h3 className="w-1/5 text-blue-400">{elem.taskNumbers.newTask}</h3>
                        <h3 className="w-1/5 text-yellow-400">{elem.taskNumbers.active}</h3>
                        <h3 className="w-1/5 text-green-400">{elem.taskNumbers.completed}</h3>
                        <h3 className="w-1/5 text-red-600">{elem.taskNumbers.failed}</h3>
                    </div>
                })}
            </div>
        </div>
    )
}