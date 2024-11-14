import axios from "axios"

const baseUrl = "http://localhost:5000"

const getAllToDo = async (setTodo) => {
    axios.get(baseUrl)
    .then(({data})=>{
        setTodo(data)
    })
}

const addToDo = async (text,setText,setTodo) =>{
    axios.post(`${baseUrl}/add`,{task:text})
    .then((data)=>{
    setText("")
     getAllToDo(setTodo)
    })
    
}

const updateToDo = async (todoId , text ,setText ,setTodo , setIsUpdating ) =>{
    
    axios.post(`${baseUrl}/update`,{id:todoId,task:text})
    .then((data)=>{
        setText("")
        getAllToDo(setTodo)
        setIsUpdating(false)
    })
    .catch((err)=>console.log(err))
}

const deleteToDo = async (todoId ,setTodo) =>{
    axios.post(`${baseUrl}/delete` ,{id:todoId})
    .then((data)=>{
        getAllToDo(setTodo)
    })
    .catch((err)=>console.log(err))
}
export {getAllToDo , addToDo ,updateToDo ,deleteToDo}