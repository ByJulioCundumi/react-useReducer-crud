export const getTasksRequest = async ()=>{
    try {
        const data = await fetch("https://64e24a59ab0037358818e718.mockapi.io/api/tasks")
        return await data.json()
    } catch (error) {
        console.log(error)
    }
}

export const postTasksRequest = async (value)=>{
    try {
        const data = await fetch("https://64e24a59ab0037358818e718.mockapi.io/api/tasks", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(value)
        })
        return await data.json()
    } catch (error) {
        console.log(error)
    }
}

export const putTasksRequest = async (value,id)=>{
    try {
        const data = await fetch(`https://64e24a59ab0037358818e718.mockapi.io/api/tasks/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(value)
        })
        return await data.json()
    } catch (error) {
        console.log(error)
    }
}

export const deleteTasksRequest = async (id)=>{
    try {
        const data = await fetch(`https://64e24a59ab0037358818e718.mockapi.io/api/tasks/${id}`, {
            method: "DELETE"
        })
        return await data.json()
    } catch (error) {
        console.log(error)
    }
}