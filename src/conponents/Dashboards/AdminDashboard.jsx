import React from "react";

import { Header } from "../nav/Header";
import { CreactTask } from "../nav/CreactTask";
import { AllTask } from "../nav/AllTask";

export const AdminDashboard = () => {
    return (
        <div className=" w-screen h-screen p-10 ">
            <Header></Header>
            <CreactTask></CreactTask>
            <AllTask></AllTask>
        </div>
    )
}