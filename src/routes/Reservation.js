import React, { useState, useContext} from 'react'
import { UserContext } from '..';
import {  TextField, Select, MenuItem, Button, Stepper, StepLabel, Step, Alert} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import {DateTimePicker } from '@mui/x-date-pickers';
import { Nav } from '../components';
import whitebg from '../images/whitebg.jpg'


function Reservation() {
  
  const [, setUser] = useContext(UserContext)
  const [trip, setTrip] = useState('return')
  const cities = ['Jeddah', 'Makka', 'Madina', 'Dammmam', 'Riyadh']
  const [reservation, setReservation] = useState({
    from:'From',
    to:'To',
    depart:'',
    return:'empty',
    adults:'',
    kids:'',
    special_needs:'',
  })
  const [error, setError] = useState('')

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
        setError('Complete the missing information please!')
        setTimeout(() => setError(''), 5000)
        return 
      }
    } 
    window.open('#/trips', '_self')
  }

  const steps = ['Reservation', 'Avaliable Trips','Customize Trip', 'Payment']

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div 
        style={{ backgroundImage:`url(${whitebg})`, backgroundRepeat:"no-repeat",
        backgroundSize:"cover"}}
        className='flex flex-col justify-center p-2 gap-14 items-center w-[100vw] h-[100vh]'>
         
        {error && <Alert
             severity="warning"
              className='absolute top-5'
              >{error}</Alert> }
              <div className='flex flex-col justify-between gap-14 p-2 items-center w-full'>
          <Nav />
            <Stepper style={{width:'100%'}} activeStep={0} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div className='flex flex-col bg-white bg-opacity-80
             rounded-lg sm:gap-3 gap-3 items-center justify-center
             p-6
             '>
              <div className='flex sm:flex-row flex-col sm:gap-0 gap-3 items-center justify-center mt-5'>
                  <Select defaultValue={'From'} name='from' onChange={handleChangeRes} value={reservation.from}>
                    <MenuItem value='From' disabled>From</MenuItem>
                    {cities.map(city => <MenuItem key={city} value={city}>{city}</MenuItem> )}
                  </Select>
                <Select defaultValue={'To'} name='to' onChange={handleChangeRes} value={reservation.to}>
                 <MenuItem value='To' disabled>To</MenuItem>
                  {cities
                  .filter(city => city === reservation.from ? false : true)
                  .map(city => <MenuItem key={city} value={city}>{city}</MenuItem> )}
                </Select>
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
              <Button style={{marginBottom:'4rem', marginTop:'1rem'}} color='success' variant="contained" onClick={search}>Search
                </Button>
                <a
                className='absolute bottom-0 left-0 text-black max-w-[200px] text-center'
                target='_blank'
                rel="noreferrer"
                href="https://www.freepik.com/free-photo/white-painted-wall-texture-background_18416494.htm#page=2&query=website%20background&position=0&from_view=search&track=ais">background by rawpixel.com on Freepik</a>
        </div>
      </div>
    </LocalizationProvider>

  )
}

export default Reservation