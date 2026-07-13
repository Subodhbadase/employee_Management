import React from "react";


import { Header } from "../nav/Header";
import { TaskNumber } from "../nav/TaskNumber";
import { TaskList } from "../Tasks/TaskList";

export const EmployeeDashboard = ({data}) => {
    return(
        <div className="w-screen h-screen p-10 pl-10 bg-[#1c1c1c]">
            <Header data={data}></Header>
            <TaskNumber data={data}></TaskNumber>
            <TaskList data={data}></TaskList>
        </div>
    )
}