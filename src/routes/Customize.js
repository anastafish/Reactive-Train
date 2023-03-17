import React, { useContext } from 'react'
import { UserContext } from '..';
import {Stepper, StepLabel, Step} from '@mui/material';



function Customize() {
    const steps = ['Reservation', 'Avaliable Trips','Customize Trip', 'Payment']
    const [user, setUser] = useContext(UserContext)

  return (
    <div className='flex flex-col justify-evenly gap-5 items-center w-[100vw] h-[100vh]'>
         <Stepper style={{width:'100%'}} activeStep={2} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
    </div>
  )
}

export default Customize