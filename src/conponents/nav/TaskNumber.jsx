import React from "react";

export const TaskNumber = ({data}) => {
    return(
        <div className=" flex w-full mt-10 gap-5 justify-between">
            <div className=" bg-blue-400 w-[40%] px-5 py-10 rounded-xl">
                <h1 className=" text-2xl font-semibold">{data.taskNumbers.newTask}</h1>
                <h3 className=" font-medium">New Task</h3>
            </div>
            <div className=" bg-red-400 w-[40%] px-5 py-10 rounded-xl">
                <h1 className=" text-2xl font-semibold">{data.taskNumbers.failed}</h1>
                <h3 className=" font-medium">Failed Task</h3>
            </div>
            <div className=" bg-green-400 w-[40%] px-5 py-10 rounded-xl">
                <h1 className=" text-2xl font-semibold">{data.taskNumbers.completed}</h1>
                <h3 className=" font-medium">Completed Task</h3>
            </div>
            <div className=" bg-yellow-400 w-[40%] px-5 py-10 rounded-xl">
                <h1 className=" text-2xl font-semibold">{data.taskNumbers.active}</h1>
                <h3 className=" font-medium">Accepted Task</h3>
            </div>
        </div>

    )
}