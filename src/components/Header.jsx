import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/');
  }

  const handleButtonClick = () => {
    navigate('/addTask');
  }

  return (
    <div className="bg-gray-800">
      <div className="h-16 flex items-center p-4 justify-between">
        <p onClick={handleTitleClick} className="text-white font-bold cursor-pointer">To-Do-List (with react and spring!!)</p>
        <button onClick={handleButtonClick} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-l mr-2">
          +
        </button>
      </div>
    </div>
  )
}

export default Header