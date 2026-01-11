const express = require('express')
const mongoose =require('mongoose')
const cors=require('cors')
const User =require('./Models/User')

const app =express()
app.use(cors())
app.use(express.json())


app.post('/api/register/',async(req,res)=>{
   const {name,email,passwod}=req.body
   
   if(!name || !email || !password)
   {
    return res.status(400).json({message:"All feild are required"})
   }

   const userExits = await User.findOne({email})
   if(userExits){
    return res.status(400).json({message:"user already exists "})
   }

   
})


mongoose.connect('mongodb://localhost:27017/LogReg',)


app.listen(3000,()=>{
    console.log('Server is connected on port 3000')
})