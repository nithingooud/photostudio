const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const PORT = 2000
require('./models/User')
const User = mongoose.model('User')

mongoose.connect('mongodb://localhost:27017')

mongoose.connection.on('connected',()=>{
    console.log('connected to mongo')
})

mongoose.connection.on('error',()=>{
    console.log('error in connecting mongo')
})

app.get('/',(req,res)=>{
    res.send('hello World')
})

app.post('/register-user',async (req,res)=>{
    const {email,password} = req.body
    User.create({email:email,password:password})   
    res.send({message:'saved successfully'})
})

app.listen(PORT,()=>{
    console.log('server is running on PORT 2000')
})
