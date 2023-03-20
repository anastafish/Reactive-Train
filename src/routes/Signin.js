import React, { useContext, useState } from 'react'
import { UserContext } from '..';
import { Link } from "react-router-dom"
import {  TextField, Button, Alert } from '@mui/material';



function Signin() {
  const [user, setUser] = useContext(UserContext)
  const [error, setError] = useState('')

  const [userInfo, setUserInfo] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
  })

  function handleChange(e){
    setUserInfo(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  function signUp(){
    if (userInfo.password !== userInfo.confirmPassword) {
      setError("The passwords don't match!")
      setTimeout(() => setError(''), 5000)
    }
    else if (!userInfo.name || !userInfo.email || !userInfo.password || !userInfo.confirmPassword){
      setError("Please fill all the required fields")
      setTimeout(() => setError(''), 5000)
    }
    else {
    setUser(prevState => ({
      ...prevState,
      userInfo:userInfo
    }))
    window.open('#/login', '_self')
  }  
  }

  return (
    <div className='flex flex-col items-center gap-5'>
      {error && <Alert
             severity="warning"
              className='absolute top-5'
              >{error}</Alert> }
        <h1 className='text-[33px] self-start font-extrabold'>Sign Up</h1>
        <div className='flex flex-col gap-2 w-[100%]'>
            <TextField name='name' value={userInfo.name} onChange={handleChange} fullWidth={true} label="Full Name"/>
            <TextField name='email' value={userInfo.email} onChange={handleChange} label="Email Address"/>
            <TextField name='password' value={userInfo.password} onChange={handleChange} label="Password" type='password'/>
            <TextField name='confirmPassword' value={userInfo.confirmPassword} onChange={handleChange} label="Confirm Password" type='password'/>
        </div>

        <Button color='warning' variant="contained" onClick={signUp}>Signup now</Button>
        <Link to={'/login'}>
            <h4 className='text-blue-400'>Already have an account?</h4>
        </Link>
    </div>

  )
}

export default Signin