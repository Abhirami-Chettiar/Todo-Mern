const todoModel = require('../models/todoModel')


module.exports.getAllTodo=async (req,res)=>{
    const todos = await todoModel.find()
    res.send(todos)
}


module.exports.addTodo = async(req,res)=>{
    const {task} = req.body
   
    todoModel.create({task})
    .then((data)=>{
        console.log("Added Successfully...")
        console.log(data)
        res.send(data)
    })
    .catch((err)=>console.log(err))

    
}

module.exports.updateToDo= async (req ,res)=>{
    const {id ,task} = req.body
    todoModel.findByIdAndUpdate({_id:id},{task})
    .then(()=>{
        res.send("Updated Successfully...")
    })
    .catch((err)=>console.log(err))
}

module.exports.deleteToDo = async (req ,res) =>{
    const {id} = req.body
    todoModel.findOneAndDelete({_id:id})
    .then(()=>{
        res.send("Deleted Successfully...")

    })
    .catch((err)=>console.log(err))
}