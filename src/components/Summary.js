import React from 'react'
import station from '../images/station.jpg'
import moment from "moment";


function Summary({from, to, seats, qty, total, depart, turn}) {
  return (
    <div className='flex flex-col bg-green-100 rounded-lg
     p-2 select-none w-full'>
        <div className='flex items-center gap-2 w-full justify-between'>
            <img src={station} className='w-[120px] h-[80px] rounded-lg' alt="" />
              <div className='w-full'>
                  <h1 className='font-bold sm:text-[22px] text-[18px]'>{total[0]} Class</h1>
                  <p className='sm:text-[18px] text-[15px] opacity-50 select-text'>Seat: {seats.map( seat => `${seat} `)}</p>
                  <p className='sm:text-[18px] text-[15px] opacity-50'>Qty:{qty}</p>
              </div>
              <div className='flex flex-col items-end justify-center w-full gap-4'>
                  <p className='sm:text-[20px] text-[16px] opacity-80 select-text text-center font-semibold'>depart: <br/> {moment(depart).format('DD/MM/YYYY HH:MM')}</p>
                  {turn !== 'empty' && <p className='sm:text-[20px] text-[16px] opacity-80 text-center font-semibold'>return: <br/> {moment(turn).format('DD/MM/YYYY HH:MM')}</p>}
              </div>
        </div>
        <h1>From {from} To {to}</h1>
        <div className='flex justify-between w-full'>
            <h1>Total Amount</h1>
            <h1 className='font-semibold'>{Number(total[1].split(' ')[1])* qty} <span className='font-bold'>SAR</span></h1>
        </div>
    </div>
  )
}

export default Summary