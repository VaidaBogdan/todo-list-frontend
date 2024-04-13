import axios from "axios";
import {toast } from "react-toastify";
import { useState } from "react";
import { useTasks } from "./useTasks";

const toastOptions = {

    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: false,
    draggable: false,
    hideProgressBar: true,
};

const useAddTask = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {tasks, setTasks} = useTasks();

    const addTask = async (task) =>{
        setIsLoading(true);
        try{
            const data = await axios.post("/api/v1/tasks", task);
            if(data.error){
                throw new Error(data.error)
            }
            setTasks([...tasks, data.data]);
            console.log(data.data);

        }
        catch (error) {
            console.log(error.response.data.message)
            toast(error.response.data.message, toastOptions);
        }
        finally {
            setIsLoading(false);
        }
    }

    return {isLoading, addTask};
};

export default useAddTask;