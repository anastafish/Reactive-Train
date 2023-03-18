import React, { useContext } from 'react'
import { UserContext } from '..';
import { Link } from "react-router-dom"
import {  TextField, Button } from '@mui/material';
import { useState } from 'react';


function Login() {
  const [user, setUser] = useContext(UserContext)  
  const [loginInfo, setLoginInfo] = useState({
    email:'',
    password:'',
  })

  function handleChange(e){
    setLoginInfo(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  function login(){
    if (loginInfo.email === user.userInfo.email && loginInfo.password === user.userInfo.password){
      window.open('#/reservation', '_self')
    }
    else {
      alert('the email or password are incorrect')
    }
  }

  return (
    <div className='flex flex-col items-center gap-5'>
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