const mongoose = require('mongoose')

const todoModel = new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('TodoModel',todoModel)