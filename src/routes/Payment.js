import React, { useState, useContext } from 'react'
import { UserContext } from '..';
import {  TextField, Select, MenuItem, Button, Stepper, StepLabel, Step} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import {DatePicker } from '@mui/x-date-pickers';
import Summary from '../components/Summary';
import front from  '../images/bg-card-front.png'
import back from  '../images/bg-card-back.png'



function Payment() {
    const steps = ['Reservation', 'Avaliable Trips','Customize Trip', 'Payment']
    const [user, setUser] = useContext(UserContext)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className='flex flex-col justify-evenly gap-5 items-center w-[100vw] h-[100vh]'>      
        <Stepper style={{width:'100%'}} activeStep={3} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
            <Summary from={user.reservation.from} to={user.reservation.to} />
            <div className='flex gap-5'>
                <div className='flex-col gap-5 sm:flex hidden'>
                    <div className='relative'>
                        <img src={front} alt="" className='w-[250px]'/>
                        <h1 className='absolute bottom-10 left-5  text-white '>0000  0000  0000  0000</h1>
                        <h1 className='absolute bottom-3 left-5  text-white '>ANAS TAFESH</h1>

                        </div>
                    <div className='relative'>
                        <img src={back} alt="" className='w-[250px]'/>
                        <h1 className='absolute bottom-[58px] right-6  text-white '>000</h1>
                        </div>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <TextField label='Card Number'/>
                    <DatePicker label=''/>
                    <TextField label='CVV' type='number' inputProps={{max:3}}/>
                    <TextField label="Card Holder's Name" inputProps={{ maxLength: 12 }}/>
                </div>
                </div>  
                <Button color='success' variant='contained'>Pay</Button>  
    </div>
    </LocalizationProvider>
  )
}

export default Payment