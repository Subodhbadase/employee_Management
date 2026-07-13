import React from "react";

export const CreactTask = () => {
    return (
        <div className="bg-[#1c1c1c] mt-10 p-10 rounded">
            <form className=" flex items-center justify-between w-full h-full">
                <div className=" w-full h-full">
                    <div>
                        <h3>Task Tital</h3>
                        <input type="text" placeholder="Task tital" className=" border-2 border-gray-400 px-3 w-120 mt-1 outline-none rounded-md" />
                    </div>

                    <div className=" mt-3">
                        <h3>Date</h3>
                        <input type="date" name="" id="" className=" border-2 border-gray-400 px-3 w-120 mt-1 outline-none rounded-md" />
                    </div>

                    <div className=" mt-3">
                        <h3>Assigning to:</h3>
                        <input type="text" placeholder="Employee Name" className=" border-2 border-gray-400 px-3 w-120 mt-1 outline-none rounded-md" />
                    </div>

                    <div className=" mt-3">
                        <h3>Categary</h3>
                        <input type=" text" placeholder="Desing" className=" border-2 border-gray-400 px-3 w-120 mt-1 outline-none rounded-md" />
                    </div>
                </div>

                <div>
                    <div>
                        <h3>Add description</h3>
                        <textarea name="" id="" cols="30" rows="8" className=" border-2 border-gray-400 px-3 w-120 mt-1 outline-none rounded-md"></textarea>
                    </div>
                    <button className=" bg-emerald-400 font-semibold w-120 py-1.5 mt-2 rounded-md"> Create Task</button>
                </div>
            </form>
        </div>
    );
}