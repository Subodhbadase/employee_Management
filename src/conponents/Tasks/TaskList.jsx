import React from "react";

import { AcceptedTask } from "./AcceptedTask";
import { NewTask } from "./NewTask";
import { CompletedTask } from "./completedTask";
import { FailTask } from "./FailTask";

export const TaskList = ({ data }) => {
    console.log(data)
    return (
        <div id="taskList" className=" flex overflow-x-auto gap-5  w-full h-[50%] mt-10 " >
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    if (elem.newTask) {
                        return <NewTask data={elem} key={idx}></NewTask>
                    }
                    return <AcceptedTask data={elem} key={idx}></AcceptedTask>
                }
                if (elem.completed) {
                    return <CompletedTask data={elem} key={idx}></CompletedTask>
                }
                if (elem.failed) {
                    return <FailTask data={elem} key={idx}></FailTask>
                }
                // if(elem.newTask && elem.active){
                //     return <NewTask data={elem}></NewTask>
                // }
            }
            )}
        </div>
    )
}