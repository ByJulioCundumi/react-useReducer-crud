import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom"

const CreateTask = ()=>{
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    return <>
        <div className="">
            <p className="lead text-center">Create task</p>
        </div>
    </>
}

export default CreateTask;