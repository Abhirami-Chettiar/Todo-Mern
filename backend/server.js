const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/todoRoutes')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connected")
})
.catch((err)=>{console.log(err)})

app.use(cors())
app.use(express.json())

app.use(routes)
app.listen(port,()=>{
    console.log(`listening at ${port}`)
})