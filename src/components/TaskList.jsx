import React from 'react'
import useGetTasks from '../hooks/useGetTasks'
import Task from './Task'
import { useState } from 'react'

function TaskList() {

    const {isLoading, tasks} = useGetTasks();
    const [filter, setFilter] = useState('All');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'All') return true;
        return task.status === filter;
    });

    return (
        <>
            <div className="flex justify-center my-4">
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border-2 border-gray-400 rounded-md p-2 bg-gray-200">
                    <option value="All">All</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            {isLoading && <div>Loading...</div>}
            {filteredTasks.map(task => (
                <Task 
                    key={task.id} 
                    id={task.id}
                    name={task.nume} 
                    description={task.descriere} 
                    status={task.status} 
                    onDelete={() => console.log(`Delete task ${task.id}`)} 
                    onUpdate={() => console.log(`Update task ${task.id}`)} 
                />
            ))}
        </>
    )
}

export default TaskList