import {useForm} from "react-hook-form"
import { useNavigate, Link } from "react-router-dom"
import taskContext from "../../context/task/taskContext"
import { useContext } from "react"

const CreateTask = ()=>{
    const {register, handleSubmit} = useForm()
    const {postTask, tasks} = useContext(taskContext)
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data)=>{
        postTask(data)
        console.log(tasks)
        navigate("/")
    })

    return <>
        <div className="container page">
            <div className="row justify-content-center">
                <div className="col-12 mt-5">
                    <div className="d-flex justify-content-end">
                        <Link to="/" className="btn btn-info">See Tasks</Link>
                    </div>
                </div>
                <div className="col-12 col-md-9 mt-5">
                    <form onSubmit={onSubmit} className="p-4 shadow rounded-4 border">
                        <h2 className="text-center">Add Task</h2>
                        <div className="form-floating mt-3">
                            <input type="text" id="title" className="form-control" placeholder="" {... register("title")}/>
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="form-floating mt-3">
                            <textarea id="description" className="form-control" placeholder="" {... register("description")}/>
                            <label htmlFor="description">Description</label>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn btn-outline-info col-4" type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default CreateTask;