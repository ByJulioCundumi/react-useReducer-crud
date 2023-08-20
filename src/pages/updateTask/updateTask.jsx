import {useForm} from "react-hook-form"
import { useNavigate, Link, useParams } from "react-router-dom"
import { useEffect, useContext } from "react"
import taskContext from "../../context/task/taskContext"

const UpdateTask = ()=>{
    const {tasks, putTask} = useContext(taskContext)
    const {id} = useParams()
    const {register, handleSubmit, setValue} = useForm()
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data)=>{
        putTask(data,id)
        navigate("/")
    })

    useEffect(()=>{
        const task = tasks.find((e)=>{
            return e.id === id;
        })
        setValue("title", task.title)
        setValue("description", task.description)
    })

    return <>
        <div className="container ">
            <div className="row justify-content-center page align-items-center">
                <div className="col-12">
                    <div className="d-flex justify-content-end">
                        <Link to="/" className="btn btn-info">See Tasks</Link>
                    </div>
                </div>
                <div className="col-12 col-md-9">
                    <form onSubmit={onSubmit} className="p-4 shadow rounded-4 border">
                        <h2 className="text-center">Update Task</h2>
                        <div className="mt-3">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" className="form-control" placeholder="Title" {... register("title")}/>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" className="form-control" placeholder="Description" {... register("description")}/>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn btn-outline-info col-4">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default UpdateTask;