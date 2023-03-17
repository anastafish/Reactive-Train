import React from 'react'
import {Stepper, StepLabel, Step} from '@mui/material';
import Trip from '../components/Trip';


function Trips() {
  const steps = ['Reservation', 'Avaliable Trips','Customize Trip', 'Payment']

  return (
    <div className='flex flex-col justify-evenly gap-5 items-center w-[100vw] h-[100vh]'>
      <Stepper style={{width:'100%'}} activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div className='w-full flex flex-col items-center gap-4'>
          <Trip />
          <Trip />
          <Trip />
        </div>
    </div>
  )
}

export default Trips