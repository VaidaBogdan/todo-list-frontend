import React from 'react'
import useAddTask from '../hooks/useAddTask'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddTaskForm() {

    const {isLoading, addTask} = useAddTask();
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(taskName, taskDescription);
        if(!taskName || !taskDescription) {
            
            return;
        }
        await addTask({nume: taskName, descriere: taskDescription, status: 'Active'});
        setTaskName('');
        setTaskDescription('');

        navigate('/');
    }


  return (
    <div className="flex flex-col items-center min-h-screen pt-12">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskName">
              Nume Task
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="taskName" type="text" placeholder="Nume Task" onChange={(e) => setTaskName(e.target.value)}/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskDescription">
              Descriere Task
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="taskDescription" placeholder="Descriere Task" onChange={(e) => setTaskDescription(e.target.value)}></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={isLoading}>
              Adaugă Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default AddTaskForm