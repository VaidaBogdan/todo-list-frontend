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

const useRemoveTask = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {tasks, setTasks} = useTasks();

    const removeTask = async (id) =>{
        setIsLoading(true);
        try{
            const data = await axios.delete(`/api/v1/tasks/${id}`);
            if(data.error){
                throw new Error(data.error)
            }
            setTasks(tasks.filter(task => task.id !== id));
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

    return {isLoading, removeTask};
}

export default useRemoveTask;