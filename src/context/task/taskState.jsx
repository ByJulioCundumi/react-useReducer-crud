import taskContext from "./taskContext";
import taskReducer from "./taskReducer"
import { useReducer } from "react";
import { getTasksRequest, postTasksRequest, putTasksRequest, deleteTasksRequest } from "../../api/tasks";

const initialState = {
    tasks: []
}

const TaskProvider = ({children})=>{
    const [state, dispatch] = useReducer(taskReducer, initialState)

    const getTasks = async ()=>{
        const result = await getTasksRequest()
        dispatch({
            type: "GET_TASKS",
            payload: result
        })
    }

    const postTask = async (data)=>{
        const result = await postTasksRequest(data)
        dispatch({
            type: "POST_TASK",
            payload: data
        })
    }

    const putTask = async (data,id)=>{
        const result = await putTasksRequest(data,id)
        dispatch({
            type: "PUT_TASK",
            payload: {data, id}
        })
    }

    const deleteTask = async (id)=>{
        const result = await deleteTasksRequest(id)
        dispatch({
            type:"DELETE_TASK",
            payload: id
        })
    }

    return <taskContext.Provider value={{
        tasks: state.tasks,
        getTasks,
        postTask,
        putTask,
        deleteTask
    }}>
        {children}
    </taskContext.Provider>

}

export default TaskProvider;