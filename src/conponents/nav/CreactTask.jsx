import React from "react";
import { useState } from "react";
import { NewTask } from "../Tasks/NewTask";


export const CreactTask = () => {

    const [taskTital, setTaskTital] = useState('');
    const [date, setDate] = useState('');
    const [assig, setAssig] = useState('');
    const [category, setCategory] = useState('');
    const [decription, setDecription] = useState('');

    const [newtask, setNewTask] = useState({});

    const submitHandler = (e) => {
        e.preventDefault()
        setNewTask({ taskTital, date, assig, category, decription, active: true, completed: false, newTask: true, failed: false })

        const data = JSON.parse(localStorage.getItem('Employee'))

        data.forEach((elem) => {
            if (assig == elem.firstName) {
                elem.tasks.push(newtask)
            }
        })

        localStorage.setItem('Employee', JSON.stringify(data))

        setTaskTital('');
        setDate('');
        setAssig('');
        setCategory('');
        setDecription('');

    }

    return (
        <div className="bg-[#1c1c1c] mt-10 p-10 rounded">
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className=" flex items-center justify-between w-full h-full">
                <div className=" w-full h-full">
                    <div>
                        <h3>Task Tital</h3>
                        <input
                            value={taskTital}
                            onChange={(e) => {
                                setTaskTital(e.target.value)
                            }}
                            type="text" placeholder="Task tital" className=" border-2 border-gray-400 px-3 w-120 mt-1 outline-none rounded-md" />
                    </div>

                    <div className=" mt-3">
                        <h3>Date</h3>
                        <input
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value)
                            }}
                            type="date" name="" id="" className=" border-2 border-gray-400 px-3 w-120 mt-1 outline-none rounded-md" />
                    </div>

                    <div className=" mt-3">
                        <h3>Assigning to:</h3>
                        <input
                            value={assig}
                            onChange={(e) => {
                                setAssig(e.target.value)
                            }}
                            type="text" placeholder="Employee Name" className=" border-2 border-gray-400 px-3 w-120 mt-1 outline-none rounded-md" />
                    </div>

                    <div className=" mt-3">
                        <h3>Categary</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            type=" text" placeholder="Desing" className=" border-2 border-gray-400 px-3 w-120 mt-1 outline-none rounded-md" />
                    </div>
                </div>

                <div>
                    <div>
                        <h3>Add description</h3>
                        <textarea
                            value={decription}
                            onChange={(e) => {
                                setDecription(e.target.value)
                            }}
                            name="" id="" cols="30" rows="8" className=" border-2 border-gray-400 px-3 w-120 mt-1 outline-none rounded-md"></textarea>
                    </div>
                    <button className=" bg-emerald-400 font-semibold w-120 py-1.5 mt-2 rounded-md"> Create Task</button>
                </div>
            </form>
        </div>
    );
}