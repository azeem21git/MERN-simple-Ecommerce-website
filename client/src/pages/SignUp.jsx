import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link, Navigate} from 'react-router-dom'

const SignUp = () => {
 
const [formData ,setFormData] = useState({username:"",email:"",password:"",confirmPassword:""})
const [loading ,setLoading]=useState(false)


const handleChange =(e)=>{
    setFormData({...formData , [e.target.name]:e.target.value})
}


const HandleSignUp=async(e)=>{
       e.preventDefault()

       if(formData.password !==formData.confirmPassword)
       {
        return alert("password not match!")
       }
       setLoading(true)
       try {
         const res=await axios.post('http://localhost:3000/api/register',{
          name:formData.username,
          email:formData.email,
          password:formData.password
         })
         if(res.status ===201)
         {
          alert("Registration success")
          Navigate('/login')
         }
          

       } catch (error) {
        
       }
       setLoading(false)

}
 

  useEffect(()=>{

  },[])
 



  return (
    <section>
      <form action="" onSubmit={HandleSignUp}>
        <div>
          <header>
            <h1>SignUp Page</h1>
          </header>
        </div>

        <div>
          <label htmlFor="username">UserName</label>
          <input type="text" id="username" name="username" onChange={handleChange} value={formData.username}/>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} value={formData.email}/>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={handleChange} value={formData.password}/>
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword}/>
        </div>

        <div>
         <button type="submit" >SignUp</button>
        </div>

        <div>
          <p>Do you have an account?</p> <Link to='/login'>Login</Link>
        </div>
      </form>
    </section>
  )
}

export default SignUp
