import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import taskContext from "../../context/task/taskContext";


const Tasks = ()=>{
    const {getTasks, tasks, deleteTask} = useContext(taskContext)
    const navigate = useNavigate()

    useEffect(()=>{
        getTasks()
        console.log(tasks)
    },[])

    return <>
        <div className="container page">
            <div className="row">
                <div className="col-12 mt-4">
                    <div className="d-flex justify-content-end mt-3">
                        <Link to="add-task" className="btn btn-info">Add Task</Link>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <div className="d-flex align-items-center flex-wrap justify-content-md-start gap-2 flex-column flex-md-row">
                    {tasks.length > 0 ? tasks.map((task)=>{
                            return <div className="col-10 col-md-4 p-3 border shadow-sm rounded-2" key={task.id}>
                                <h3 className="text-center border-bottom p-2">{task.title}</h3>
                                <p className="lead">id: {task.id}</p>
                                <p className="lead">{task.description}</p>
                                <div className="d-flex gap-2 justify-content-end">
                                    <button onClick={()=> navigate(`/update-task/${task.id}`)} className="btn btn-info">Editar</button>
                                    <button onClick={()=> deleteTask(task.id)} className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        }) : <p className="lead">No hay tareas para mostrar</p>}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Tasks;