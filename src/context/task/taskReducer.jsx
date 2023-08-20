import { GET_TASKS, GET_TASK, POST_TASK, PUT_TASK, DELETE_TASK } from "../type";

export default (state, action)=>{
    const {type, payload} = action;

    switch(type){
        case GET_TASKS: 
            return {
                ...state,
                tasks: payload
            }
        case POST_TASK: 
            return {
                ...state,
                tasks: [...state.tasks, payload]
            }
        case PUT_TASK: 
            const updatedTask = state.tasks.map((e)=>{
                if(e.id === payload.id){
                    e.title = payload.data.title,
                    e.description = payload.data.description
                }
                return e;
            })
            
            return {
                ...state,
                tasks: updatedTask
            }
        case DELETE_TASK: 
            return {
                ...state,
                tasks: state.tasks.filter((e)=>{return e.id !== payload})
            }
        default: return state
    }
}