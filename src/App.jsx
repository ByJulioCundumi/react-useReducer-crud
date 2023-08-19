import './App.css'
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreateTask from './pages/createTask/createTask'
import UpdateTask from './pages/updateTask/updateTask'
import Tasks from './pages/tasks/tasks'

function App() {

  return (
    <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Tasks/>}/>
            <Route path="/add-task" element={<CreateTask/>}/>
            <Route path="/update-task" element={<UpdateTask/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
