/* eslint-disable react-hooks/exhaustive-deps */

import { useState ,useEffect} from 'react';
import './App.css';
import Todo from './Todo';
import { addToDo, deleteToDo, getAllToDo ,updateToDo} from './handleApi';

function App() {

  const [todo,setTodo] = useState([])
  const [text ,setText] = useState("")
  const [isUpdating , setIsUpdating] = useState(false)
  const [todoId , setTodoId] = useState()
  useEffect(()=>{
    getAllToDo(setTodo)
    console.log(todo)
  },[])

  const updateMode=( id ,todoText)=>{
    setIsUpdating(true)
    setTodoId(id)
    setText(todoText)
  }
  return (
    <div className="app">
    <div className="container">

      <div className="top">
        <h1>Todo App</h1>
        <div className="input">
        <input type="text" name="" id="" placeholder='Add Todos...'  value={text} onChange={(e)=>setText(e.target.value)}/>
        <button className="add" onClick={isUpdating ? ()=>{updateToDo(todoId , text , setText ,setTodo , setIsUpdating)} 
        :  ()=>{addToDo(text,setText,setTodo)}}>
        {isUpdating ?  "Update" :"Add"  }
        </button>
      </div>
      </div>
      <div className='list'>
        
          {todo.map((item)=>
            <Todo className="todo"  key={item._id} text={item.task} updateMode = {()=>{updateMode(item._id,item.task)}}
            deleteToDo={()=>{deleteToDo(item._id,setTodo)}}
            ></Todo>
            
          )}
          
       
      </div>
    </div>
    </div>
  );
}

export default App;
