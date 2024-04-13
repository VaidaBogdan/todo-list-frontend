import { Route,Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import AddPage from './pages/AddPage'
import TasksPage from './pages/TasksPage'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <TasksPage/> } />
          <Route path="/addTask" element={ <AddPage/> } />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
  </>
  )
}

export default App
