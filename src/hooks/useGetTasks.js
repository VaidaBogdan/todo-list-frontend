import { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTasks } from './useTasks';

const toastOptions = {

    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: false,
    draggable: false,
    hideProgressBar: true,
};

const useGetTasks = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {tasks, setTasks} = useTasks();

    useEffect(() => {
        const getTasks = async () => {
            setIsLoading(true);
            try{
                const data = await axios.get("/api/v1/tasks");
                setTasks(data.data);
            }
            catch (error) {
                console.log(error.response.data.message)
                toast(error.response.data.message, toastOptions);
            }
            finally {
                setIsLoading(false);
            }
        }
        getTasks();
    }, [setTasks]);

    return {isLoading, tasks};
}

export default useGetTasks;