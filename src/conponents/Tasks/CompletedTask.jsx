import React from 'react';

export const CompletedTask = ({data}) => {
    return (
        <div className=" shrink-0 bg-green-400 h-full w-[30%] p-5 rounded-xl">
            <div className=" flex justify-between">
                <h3 className=" bg-red-600 px-4 py-2 rounded-sm">{data.category}</h3>
                <h2 className=" font-medium">{data.taskDate}</h2>
            </div>
            <h1 className=" text-2xl font-semibold mt-3 ">{data.taskTital}</h1>
            <p className=" text-sm mt-2">{data.taskDescription}</p>
            <div className=' mt-4'>
                <button className=' bg-green-700 px-2 py-1 rounded text-sm w-full'>Completed Task</button>
            </div>
        </div>
    )
}