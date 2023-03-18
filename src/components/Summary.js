import React from 'react'
import station from '../images/station.jpg'

function Summary({from, to}) {
  return (
    <div className='flex flex-col bg-gray-100 rounded-lg p-5'>
        <div className='flex items-center gap-2'>
            <div><img src={station} className='w-[120px] h-[80px] rounded-lg' alt="" /></div>
            <div>
                <h1 className='font-bold text-[22px]'>Economy Class</h1>
                <p className='text-[18px] opacity-50'>Seat: A1</p>
                <p className='text-[18px] opacity-50'>Qty:1</p>
            </div>
        </div>
        <h1>From {from} to {to}</h1>
        <div className='flex justify-between w-full'>
            <h1>Total Amount</h1>
            <h1>500$</h1>
        </div>
    </div>
  )
}

export default Summary