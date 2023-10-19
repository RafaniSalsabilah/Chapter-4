import React, { useState, useEffect } from 'react'
import { useLoginUser } from '../services/auth/get-user-login'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const { mutate : loginUser , isSuccess , error , status } = useLoginUser()
  const navigate = useNavigate()

  const handleInput = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value)
    }
    if (e.target.id === "password") {
      setPassword(e.target.value)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      navigate('/dashboard');
    }
  }, [status])
  

  console.log(Email, "Email")
  console.log(Password, "Password")
  console.log(isSuccess, "isSuccess")
  console.log(error, "error")

  if (error) {
    console.log(error.response.data.message, "Sedang Error")
  }

  const LogUser = () => {
    loginUser({
      "email": Email,
      "password": Password
    })
  }
  
  return (
    <div className='flex flex-col'>
      <span>Email : <input id='email' className='border-2 rounded my-[.5rem] ml-[1.6rem]' type='email' onChange={handleInput}></input></span>
      <span>Password : <input id='password' className='border-2 rounded mb-[.5rem]' type='password' onChange={handleInput}></input></span>
      <button onClick={()=>{LogUser()}} className='mt-[.1rem] bg-red-600 text-white font-semibold rounded-full ml-[1rem] mt-[1rem] h-10 w-24'>Login</button>
    </div>
  )
}
