const express = require('express')
const mongoose =require('mongoose')
const cors=require('cors')
const bcrypt=require('bcrypt')
const User =require('./Models/User')

const app =express()
app.use(cors())
app.use(express.json())


app.post('/api/register',async(req,res)=>{
   const {username,email,passwod}=req.body
   
   if(!username || !email || !password)
   {
    return res.status(400).json({message:"All feild are required"})
   }

   const userExits = await User.findOne({email})
   if(userExits){
    return res.status(400).json({message:"user already exists "})
   }
    
   const salt =await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(passwod,salt)
   

   const newUser =new User({
    name,
    email,
    password:hashedPassword
   })

   await newUser.save()
})


mongoose.connect('mongodb://localhost:27017/LogReg',)


app.listen(3000,()=>{
    console.log('Server is connected on port 3000')
})