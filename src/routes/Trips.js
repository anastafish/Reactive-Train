import React, { useContext } from 'react'
import { UserContext } from '..';
import {Stepper, StepLabel, Step} from '@mui/material';
import Trip from '../components/Trip';
import { Nav } from '../components';


function Trips() {
  const steps = ['Reservation', 'Avaliable Trips','Customize Trip', 'Payment']
  const [user] = useContext(UserContext)

  return (
    <div className='flex flex-col justify-evenly gap-5 items-center w-[100vw] h-[100vh]'>
      <Nav />
      <Stepper style={{width:'100%', margin:'20px'}} activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div className='w-full flex flex-col scrol items-center gap-4 overflow-y-scroll'>
          <Trip from={user.reservation.from} to={user.reservation.to} />
          <Trip from={user.reservation.from} to={user.reservation.to} />
          <Trip from={user.reservation.from} to={user.reservation.to} />
          <Trip from={user.reservation.from} to={user.reservation.to} />
          <Trip from={user.reservation.from} to={user.reservation.to} />
          <Trip from={user.reservation.from} to={user.reservation.to} />
        </div>
    </div>
  )
}

export default Trips