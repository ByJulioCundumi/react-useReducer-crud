import './App.css'
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreateTask from './pages/createTask/createTask'
import UpdateTask from './pages/updateTask/updateTask'
import Tasks from './pages/tasks/tasks'
import TaskProvider from './context/task/taskState'

function App() {

  return (
    <TaskProvider>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tasks/>}/>
            <Route path="/add-task" element={<CreateTask/>}/>
            <Route path="/update-task/:id" element={<UpdateTask/>}/>
          </Routes>
    </BrowserRouter>
    </TaskProvider>
  )
}

export default App
