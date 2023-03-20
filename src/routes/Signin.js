import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '..';
import { Link } from "react-router-dom"
import {  TextField, Button, Alert } from '@mui/material';
import bg from '../images/bg.jpg'
import ClipLoader from "react-spinners/ClipLoader";


function Signin() {

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, []);

  const [loading, setLoading] = useState(true)
  const [, setUser] = useContext(UserContext)
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
    <div className='flex flex-col items-center justify-center w-[100vw] h-[100vh]'>
      {loading && <ClipLoader
          size={125}
          height='20'
          color='#94A9A8 '
          aria-label="Loading Spinner"
          data-testid="loader"
          />}
      {!loading && <div
      style={{ backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat",
       backgroundSize:"cover"}}
       className='flex flex-col items-center justify-center w-[100vw] h-[100vh] gap-5'>        
        {error && <Alert
               severity="warning"
                className='absolute top-5'
                >{error}</Alert> }
           <div className='bg-white bg-opacity-95 rounded-lg p-5
                          flex flex-col items justify-center gap-3
          '>
            <h1 className='text-[33px] self-start font-extrabold'>Sign Up</h1>
            <div className='flex flex-col gap-2 w-[100%]'>
                <TextField name='name' autoFocus value={userInfo.name} onChange={handleChange} fullWidth={true} label="Full Name"/>
                <TextField name='email' value={userInfo.email} onChange={handleChange} label="Email Address"/>
                <TextField name='password' value={userInfo.password} onChange={handleChange} label="Password" type='password'/>
                <TextField name='confirmPassword' value={userInfo.confirmPassword} onChange={handleChange} label="Confirm Password" type='password'/>
            </div>
            <Button color='warning' variant="contained" onClick={signUp}>Signup now</Button>
            <Link to={'/login'}>
                <h4 className='text-blue-400 text-center'>Already have an account?</h4>
            </Link>
            <a className='absolute bottom-0 text-white'
            target='_blank'
            rel="noreferrer"
             href="https://www.freepik.com/free-photo/two-elderly-people-train-station_7629829.htm#query=train%20background&position=3&from_view=keyword&track=ais">
              Image by wirestock on Freepik</a>
          </div>      
      </div>}
    </div>

  )
}

export default Signin