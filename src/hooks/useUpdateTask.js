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

const useUpdateTask = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {tasks, setTasks} = useTasks();

    const updateTask = async (task) =>{
        setIsLoading(true);
        try{
            const data = await axios.put(`/api/v1/tasks/${task.id}`, task);
            if(data.error){
                throw new Error(data.error)
            }
            setTasks(tasks.map(t => t.id === task.id ? data.data : t));

        }
        catch (error) {
            console.log(error.response.data.message)
            toast(error.response.data.message, toastOptions);
        }
        finally {
            setIsLoading(false);
        }
    }

    return {isLoading, updateTask};
}

export default useUpdateTask;