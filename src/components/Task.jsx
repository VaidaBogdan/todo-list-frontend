import React from 'react'
import useRemoveTask from '../hooks/useRemoveTask'
import useUpdateTask from '../hooks/useUpdateTask';

function Task({ id, name, description, status}) {

  const {isLoading, removeTask} = useRemoveTask();
  const {isLoading2, updateTask} = useUpdateTask();

  const handleDelete = async (e) => {
    e.preventDefault();
    await removeTask(id);
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    let status2 = ''
    if(status === 'Active'){
      status2 = 'Completed'
    }
    else{
      status2 = 'Active'
    }
    await updateTask({id, nume: name, descriere: description, status: status2});

  }
    return (
      <div className="flex items-center justify-between bg-gray-200 p-4 w-full mb-4">
        <div className="flex-1 pr-4 flex items-center">
          <div className={`h-4 w-4 rounded-full mr-2 ${status === 'Active' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
          <div>
            <h2 className="font-bold">{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div>
          <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l mr-2 ${isLoading2 ? 'disabled:true' : 'disabled:false'}`} onClick={handleUpdate}>
            Change Status
          </button>
          <button className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r ${isLoading ? 'disabled:true' : 'disabled:false'}`} onClick={handleDelete}> 
            Delete
          </button>
        </div>
      </div>
    )
  }

export default Task