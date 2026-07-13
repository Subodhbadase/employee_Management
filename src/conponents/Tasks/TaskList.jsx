import React from "react";

import { AcceptedTask } from "./AcceptedTask";
import { NewTask } from "./NewTask";
import { CompletedTask } from "./completedTask";
import { FailTask } from "./FailTask";

export const TaskList = ({data}) => {
    console.log(data)
    return(
        <div id="taskList" className=" flex overflow-x-auto gap-5  w-full h-[50%] mt-10 " >
            {data.tasks.map((elem) => {
                if(elem.active){
                    return <AcceptedTask data={elem}></AcceptedTask>
                }
                if(elem.completed){
                    return <CompletedTask data={elem}></CompletedTask>
                }
                if(elem.failed){
                    return <FailTask data={elem}></FailTask>
                }
                if(elem.newTask && elem.active){
                    return <NewTask data={elem}></NewTask>
                }
            }
            )}
        </div>
    )
}