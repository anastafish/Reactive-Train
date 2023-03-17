import React, { useState, useContext } from 'react'
import { UserContext } from '..';
import {  TextField, Select, MenuItem, Button, Stepper, StepLabel, Step} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import {DateTimePicker } from '@mui/x-date-pickers';
import { Link } from 'react-router-dom';

function Reservation() {
  const [user, setUser] = useContext(UserContext)
  const [trip, setTrip] = useState('return')
  
  function handleChange(e){
    setTrip(e.target.value)
    console.log(trip)
  }

  const steps = ['Reservation', 'Avaliable Trips','Customize Trip', 'Payment']

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='flex flex-col justify-evenly gap-5 items-center w-[100vw] h-[100vh]'>      
        <Stepper style={{width:'100%'}} activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className='flex flex-col sm:gap-3 gap-3 items-center justify-center'>
          <div className='flex sm:flex-row flex-col sm:gap-0 gap-3 items-center justify-center mt-5'>
            <TextField label='From'/>
            <TextField label='To'/>
            <Select onChange={handleChange} defaultValue={'return'} slotProps={{
            root: { className: 'sm:w-auto w-full' },
                    }}
                    >
              <MenuItem value="oneway">One Way</MenuItem>
              <MenuItem value="return">Return</MenuItem>
            </Select>
            <DateTimePicker label="Depart"/>
            {trip === 'return' && <DateTimePicker label="Return"/>}
          </div>
          <div className='flex sm:flex-row flex-col sm:gap-0 gap-3 items-center'>
            <TextField type={'number'} label="Adults"/>
            <TextField type={'number'} label="Kids"/>
            <TextField type={'number'} max='10' min='1' label="Special needs"/>
          </div>
        </div>
        <Link to="/trips">
          <Button color='success' variant="contained" >Search
            </Button>
        </Link>
      </div>
    </LocalizationProvider>

  )
}

export default Reservation