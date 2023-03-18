import React, { useContext } from 'react'
import { UserContext } from '..';
import { Link } from "react-router-dom"
import {  TextField, Button } from '@mui/material';


function Login() {
  const [user, setUser] = useContext(UserContext)

  return (
    <div className='flex flex-col items-center gap-5'>
    <h1 className='text-[33px] self-start font-extrabold'>Login</h1>
    <div className='flex flex-col gap-2 w-[100%]'>
        <TextField label="Email Address" type='email'/>
        <TextField label="Password" type='password'/>
    </div>

    <Button color='warning' variant="contained">Login</Button>
    <Link to={'/'}>
        <h4 className='text-blue-400'>Don't have an account?</h4>
    </Link>
</div>

    
  )
}

export default Login