import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { setLocalStorage } from "../../utils/LocalStorage";

export const CreactTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [taskTital, setTaskTital] = useState('');
    const [date, setDate] = useState('');
    const [assig, setAssig] = useState('');
    const [category, setCategory] = useState('');
    const [decription, setDecription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const taskData = {
            taskTital,
            taskDate: date,
            taskDescription: decription,
            category,
            active: true,
            completed: false,
            newTask: true,
            failed: false,
        };

        const employees = userData?.employees ? [...userData.employees] : [];

        const updatedEmployees = employees.map((elem) => {
            if (assig.trim().toLowerCase() === elem.firstName.toLowerCase()) {
                return {
                    ...elem,
                    tasks: [...elem.tasks, taskData],
                    taskNumbers: {
                        ...elem.taskNumbers,
                        active: elem.taskNumbers.active + 1,
                        newTask: elem.taskNumbers.newTask + 1,
                    },
                };
            }
            return elem;
        });

        const updatedEmployee = updatedEmployees.find(
            (elem) => assig.trim().toLowerCase() === elem.firstName.toLowerCase()
        );

        const updatedUserData = userData
            ? { ...userData, employees: updatedEmployees }
            : { employees: updatedEmployees, admin: null };

        setUserData(updatedUserData);
        // console.log(updatedUserData)
        setLocalStorage(updatedUserData.employees, updatedUserData.admin);

        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
        if (loggedInUser?.role === 'employee' && updatedEmployee) {
            const currentEmployeeName = loggedInUser.data?.firstName?.toLowerCase();
            if (currentEmployeeName === assig.trim().toLowerCase()) {
                const updatedLoggedInUser = {
                    ...loggedInUser,
                    data: updatedEmployee,
                };
                localStorage.setItem('loggedInUser', JSON.stringify(updatedLoggedInUser));
                window.dispatchEvent(new CustomEvent('employee-data-updated', {
                    detail: updatedEmployee,
                }));
            }
        }

        setTaskTital('');
        setDate('');
        setAssig('');
        setCategory('');
        setDecription('');
    };

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