import React, { useContext, useState } from 'react'
import { UserContext } from '..';
import {Stepper, StepLabel, Step} from '@mui/material';
import {  TextField, Button } from '@mui/material';
import { Nav } from '../components';

import '../styles/customize.css'



function Customize() {
    const steps = ['Reservation', 'Avaliable Trips','Customize Trip', 'Payment']
    const [user, setUser] = useContext(UserContext)
    const [luggage, setLuggage] = useState(0)
    const qty = Number(user.reservation.adults) + Number(user.reservation.kids) + Number(user.reservation.special_needs)


    function handleClick(e){
        if (e.target.className === `seat selected`) {
            e.target.className = 'seat'
        }
        else {
            e.target.className = 'seat selected'
        }
    }

    function handleChange(e) {
        setLuggage(e.target.value)
    }

    function selectSeats(){
        const seatsId = []
        let seatsArr = document.getElementsByClassName('seat selected')
        for (let i = 0; i < seatsArr.length; i++){
            seatsId.push(seatsArr[i].id)
        } if(seatsId.length === qty && luggage){
        setUser(prevState => ({
            ...prevState, 
            custom:{
                seats:seatsId,
                luggage:luggage
            }
        }))
        console.log(user)
        window.open('#/payment', '_self')
    }
    else{
        alert('Choose A seat and luggage size')
    }
        
    }

  return (
    <div className='flex flex-col justify-evenly items-center w-[100vw] h-[100vh]'>
        <Nav />
         <Stepper style={{width:'100%'}} activeStep={2} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
            
        <div className='flex flex-col gap-5 items-center
         border-black rounded-lg border-[1.5px]'>
        <div className='flex justify-between gap-2 p-2 items-center bg-red-400'>
                <div className='flex items-center'>
                    <div className="seat bg-green-800"></div>
                    <h1>Your Seat</h1>
                </div>
                <div className='flex items-center'>
                    <div className="seat sold"></div>
                    <h1>Reserved</h1>
                </div>
                <div className='flex items-center'>
                    <div className="seat "></div>
                    <h1>Avaliable</h1>
                </div>
            </div>
            <div className="">         


            <div className="flex justify-evenly gap-3">
                <h1>A</h1>
                <h1>B</h1>
                <h1>C</h1>
                <h1>D</h1>
                <h1>E</h1>
                  </div>
                  <div className="row">
            <h1 className='mr-1 text-[20px]'>1</h1>
            <div className="seat sold cursor-not-allowed" id='A1'></div>
            <div className="seat sold cursor-not-allowed" id='B1'></div>
            <div className="seat" id='C1' onClick={handleClick}></div>
            <div className="seat" id='D1' onClick={handleClick}></div>
            <div className="seat" id='E1' onClick={handleClick}></div>
                  </div>
                  <div className="row">
            <h1 className='mr-1 text-[20px]'>2</h1>
            <div className="seat" id='A2' onClick={handleClick}></div>
            <div className="seat" id='B2' onClick={handleClick}></div>
            <div className="seat sold cursor-not-allowed" id='C2'></div>
            <div className="seat sold cursor-not-allowed" id='D2'></div>
            <div className="seat" id='E2' onClick={handleClick}></div>
                  </div>
                  <div className="row">
            <h1 className='mr-1 text-[20px]'>3</h1>
            <div className="seat" id='A3' onClick={handleClick}></div>
            <div className="seat sold cursor-not-allowed" id='B3'></div>
            <div className="seat sold cursor-not-allowed" id='C3'></div>
            <div className="seat sold cursor-not-allowed" id='D3'></div>
            <div className="seat" id='E3' onClick={handleClick}></div>
                  </div>
                  <div className="row">
            <h1 className='mr-1 text-[20px]'>4</h1>
            <div className="seat" id='A4' onClick={handleClick}></div>
            <div className="seat" id='B4' onClick={handleClick}></div>
            <div className="seat sold cursor-not-allowed" id='C4'></div>
            <div className="seat" id='D4' onClick={handleClick}></div>
            <div className="seat" id='E4' onClick={handleClick}></div>
                  </div>
                  <div className="row">
            <h1 className='mr-1 text-[20px]'>5</h1>
            <div className="seat" id='A5' onClick={handleClick}></div>
            <div className="seat" id='B5' onClick={handleClick}></div>
            <div className="seat" id='C5' onClick={handleClick}></div>
            <div className="seat" id='D5' onClick={handleClick}></div>
            <div className="seat" id='E5' onClick={handleClick}></div>
                  </div>
                  <div className="row">
            <h1 className='mr-1 text-[20px]'>6</h1>
            <div className="seat" id='A6' onClick={handleClick}></div>
            <div className="seat" id='B6' onClick={handleClick}></div>
            <div className="seat sold cursor-not-allowed" id='C6' ></div>
            <div className="seat" id='D6' onClick={handleClick}></div>
            <div className="seat" id='E6' onClick={handleClick}></div>
                  </div>
                  <div className="row">
            <h1 className='mr-1 text-[20px]'>7</h1>
            <div className="seat" id='A7' onClick={handleClick}></div>
            <div className="seat" id='B7' onClick={handleClick}></div>
            <div className="seat" id='C7' onClick={handleClick}></div>
            <div className="seat" id='D7' onClick={handleClick}></div>
            <div className="seat" id='E7' onClick={handleClick}></div>
                  </div>
                  <div className="row">
            <h1 className='mr-1 text-[20px]'>8</h1>
            <div className="seat" id='A8' onClick={handleClick}></div>
            <div className="seat sold cursor-not-allowed" id='B8'></div>
            <div className="seat sold cursor-not-allowed" id='C8'></div>
            <div className="seat sold cursor-not-allowed" id='D8'></div>
            <div className="seat" id='E8' onClick={handleClick}></div>
                  </div>
                  <div className="row">
            <h1 className='mr-1 text-[20px]'>9</h1>
            <div className="seat" id='A9' onClick={handleClick}></div>
            <div className="seat sold cursor-not-allowed" id='B9'></div>
            <div className="seat sold cursor-not-allowed" id='C9'></div>
            <div className="seat" id='D9' onClick={handleClick}></div>
            <div className="seat" id='E9' onClick={handleClick}></div>
                  </div>
                </div>
                <div className='flex items-center flex-col'>
                    <TextField label='Luggage Weight (Kg)' name='luggage'
                     type='number' onChange={handleChange} value={luggage} />
                    <Button color='success' variant="contained"
                     onClick={selectSeats} style={{ margin:'5px'}}>processed to Payment</Button>
                </div>
        </div>
        </div>
  )
}

export default Customize