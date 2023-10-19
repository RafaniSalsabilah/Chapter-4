import React, { useState } from 'react'
import { useCreateUser } from '../services/auth/get-user-regist'

export const Register = () => {
  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  const [Email, setEmail] = useState("")

  const { mutate : regiterUser , isSuccess , error } = useCreateUser()

  const handleInput = (e) => {
    if (e.target.id === "username") {
      setUsername(e.target.value)
    }
    if (e.target.id === "password") {
      setPassword(e.target.value)
    }
    if (e.target.id === "email") {
      setEmail(e.target.value)
    }
  }

  console.log(Username, "Username")
  console.log(Email, "Email")
  console.log(Password, "Password")
  console.log(isSuccess, "isSuccess")
  console.log(error, "error")

  if (error) {
    console.log(error.response.data.message, "Sedang Error")
  }

  const registerUser = () => {
    regiterUser({
      "email": Email,
      "name": Username,
      "password": Password
    })
  }

  return (
    <div className='flex flex-col'>
      <span>Email : <input id='email' className='border-2 rounded my-[.5rem] ml-[1.6rem]' type='email' onChange={handleInput}></input></span>
      <span>Nama : <input id='username' className='border-2 rounded mb-[.5rem] ml-[1.4rem]' type='text' onChange={handleInput}></input></span>
      <span>Password : <input id='password' className='border-2 rounded mb-[.5rem]' type='password' onChange={handleInput}></input></span>
      <button onClick={()=>{registerUser()}} className='mt-[.1rem] bg-red-600 text-white font-semibold rounded-full ml-[1rem] mt-[1rem] h-10 w-24'>Register</button>
    </div>
  )
}
