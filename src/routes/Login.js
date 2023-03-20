import React, { useContext } from 'react'
import { UserContext } from '..';
import { Link } from "react-router-dom"
import {  TextField, Button, Alert } from '@mui/material';
import { useState } from 'react';


function Login() {
  const [user, setUser] = useContext(UserContext)  
  const [loginInfo, setLoginInfo] = useState({
    email:'',
    password:'',
  })
  const [error, setError] = useState('')

  function handleChange(e){
    setLoginInfo(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  function login(){
    if (user.userInfo){
    if (loginInfo.email === user.userInfo.email && loginInfo.password === user.userInfo.password){
      window.open('#/reservation', '_self')
    }
    else {
      setError('The Email or The password are wrong!')
      setTimeout(() => setError(''), 5000)
    }
  }
  else {
    setError('Sign Up first!')
    setTimeout(() => setError(''), 5000)
  }
}


  return (
    <div className='flex flex-col items-center gap-5'>
      {error && <Alert
             severity="warning"
              className='absolute top-5'
              >{error}</Alert> }    
    <h1 className='text-[33px] self-start font-extrabold'>Login</h1>
    <div className='flex flex-col gap-2 w-[100%]'>
        <TextField name='email' value={loginInfo.email} onChange={handleChange} label="Email Address" type='email'/>
        <TextField name='password' value={loginInfo.password} onChange={handleChange} label="Password" type='password'/>
    </div>

    <Button color='warning' variant="contained" onClick={login}>Login</Button>
    <Link to={'/'}>
        <h4 className='text-blue-400'>Don't have an account?</h4>
    </Link>
</div>

    
  )
}

export default Login