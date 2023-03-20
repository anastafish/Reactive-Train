import React, { useContext } from 'react'
import { UserContext } from '..';
import {Stepper, StepLabel, Step} from '@mui/material';
import Trip from '../components/Trip';
import { Nav } from '../components';
import whitebg from '../images/whitebg.jpg'


function Trips() {
  const steps = ['Reservation', 'Avaliable Trips','Customize Trip', 'Payment']
  const [user] = useContext(UserContext)

  return (
    <div
    style={{ backgroundImage:`url(${whitebg})`, backgroundRepeat:"no-repeat",
        backgroundSize:"cover"}}  
    className='flex flex-col justify-evenly gap-5 items-center w-[100vw] h-[100vh]'>
      <Nav />
      <Stepper style={{width:'100%', margin:'20px'}} activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div className='w-full flex flex-col scrol items-center gap-4
         p-5 overflow-y-scroll'>
          <Trip from={user.reservation.from} to={user.reservation.to} />
          <Trip from={user.reservation.from} to={user.reservation.to} />
          <Trip from={user.reservation.from} to={user.reservation.to} />
          <Trip from={user.reservation.from} to={user.reservation.to} />
          <Trip from={user.reservation.from} to={user.reservation.to} />
          <Trip from={user.reservation.from} to={user.reservation.to} />
        </div>
        <a
              className='absolute bottom-0 left-0 text-black max-w-[200px] text-center'
              target='_blank'
              rel="noreferrer"
              href="https://www.freepik.com/free-photo/white-painted-wall-texture-background_18416494.htm#page=2&query=website%20background&position=0&from_view=search&track=ais">background by rawpixel.com on Freepik</a>
    </div>
  )
}

export default Trips