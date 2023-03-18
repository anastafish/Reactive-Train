import React, { useState, useContext} from 'react'
import { UserContext } from '..';
import {  TextField, Select, MenuItem, Button, Stepper, StepLabel, Step} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import {DateTimePicker } from '@mui/x-date-pickers';

function Reservation() {
  const [user, setUser] = useContext(UserContext)
  const [trip, setTrip] = useState('return')
  const [reservation, setReservation] = useState({
    from:'',
    to:'',
    depart:'',
    return:'empty',
    adults:'',
    kids:'',
    special_needs:'',
  })

  function handleChangeRes(e){
    setReservation(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    console.log(reservation)
  }
  
  function handleChange(e){
    setTrip(e.target.value)
  }

  function search(){
    setUser(prevState => ({
      ...prevState,
      reservation:reservation
    }))
    const values = Object.values(reservation)
    for (let i = 0; i < values.length; i++){
      if (!values[i]){
        alert('Complete the missing information please!')
        return 
      }
    } 
    window.open('#/trips', '_self')
    console.log(user)
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
            <TextField name='from' onChange={handleChangeRes} value={reservation.from} label='From'/>
            <TextField name='to' onChange={handleChangeRes} value={reservation.to} label='To'/>
            <Select onChange={handleChange} defaultValue={'return'} slotProps={{
            root: { className: 'sm:w-auto w-full' },
                    }}
                    >
              <MenuItem value="oneway">One Way</MenuItem>
              <MenuItem value="return">Return</MenuItem>
            </Select>
            <DateTimePicker name='depart' label="Depart" value={reservation.depart}
             onChange={(e) => setReservation(prevState => ({...prevState, depart:e}))}
             />
            {trip === 'return' && <DateTimePicker name='return' value={reservation.return} 
            label="Return"
            onChange={(e) => setReservation(prevState => ({...prevState, return:e}))}       
            />}
          </div>
          <div className='flex sm:flex-row flex-col sm:gap-0 gap-3 items-center'>
            <TextField type={'number'} label="Adults" name='adults' onChange={handleChangeRes} value={reservation.adults}/>
            <TextField type={'number'} label="Kids" name='kids' onChange={handleChangeRes} value={reservation.kids}/>
            <TextField type={'number'} max='10' min='1' label="Special needs" name='special_needs' onChange={handleChangeRes} value={reservation.special_needs}/>
          </div>
        </div>
          <Button color='success' variant="contained" onClick={search}>Search
            </Button>
      </div>
    </LocalizationProvider>

  )
}

export default Reservation