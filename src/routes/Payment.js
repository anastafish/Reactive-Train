import React, { useState, useContext } from 'react'
import { UserContext } from '..';
import {  TextField, Select, MenuItem, Button, Stepper, StepLabel, Step} from '@mui/material';

function Payment() {
    const steps = ['Reservation', 'Avaliable Trips','Customize Trip', 'Payment']
    const [user, setUser] = useContext(UserContext)

  return (
    <div className='flex flex-col justify-evenly gap-5 items-center w-[100vw] h-[100vh]'>      
        <Stepper style={{width:'100%'}} activeStep={3} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

    </div>
  )
}

export default Payment