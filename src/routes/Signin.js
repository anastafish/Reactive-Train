import React, { useContext } from 'react'
import { UserContext } from '..';
import { Link } from "react-router-dom"
import {  TextField } from '@mui/material';
import { Button } from '@mui/material';



function Signin() {
  const [user, setUser] = useContext(UserContext)
  return (
    <div className='flex flex-col items-center gap-5'>
        <h1 className='text-[33px] self-start font-extrabold'>Sign Up</h1>
        <div className='flex flex-col gap-2 w-[100%]'>
            <TextField fullWidth={true} label="Full Name"/>
            <TextField label="Email Address"/>
            <TextField label="Password" type='password'/>
            <TextField label="Confirm Password" type='password'/>
        </div>

        <Button color='warning' variant="contained">Signup now</Button>
        <Link to={'/login'}>
            <h4 className='text-blue-400'>Already have an account?</h4>
        </Link>
    </div>

  )
}

export default Signin