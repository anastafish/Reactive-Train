import React from 'react'

function Trip({from, to}) {
  return (
        <div className='flex sm:flex-row flex-col items-center justify-between
         border-black border-[2px] border-opacity-20 rounded-lg p-5 gap-5 w-[70%]'>
            <div className='flex flex-col sm:items-start items-center gap-2 w-[50%]'>
                <h1 className='self-start'>Lowest Rate</h1>
                <div className='flex items-center justify-center gap-5'>
                    <h1>05:00</h1>
                    <hr className='w-[95px] h-[2px] bg-black text-black text-center'/>
                    <h1>06:00</h1>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <h1>{from}</h1>
                    <h1 className='w-[100px] text-center'>Non-stop, 1h</h1>
                    <h1>{to}</h1>
                </div>
            </div>

            <div className='flex items-center sm:justify-between justify-center gap-3 w-[30%]'>
                <div className='flex flex-col items-center border-black border-[2px]
                 p-3 border-opacity-40 hover:bg-gray-200 cursor-pointer rounded-lg'>
                  <h1 className='select-none'>Economy</h1>  
                  <h1 className='select-none'>SAR 1600</h1>
                </div>

                <div className='flex flex-col items-center border-black border-[2px]
                 p-3 border-opacity-40 hover:bg-gray-200 cursor-pointer rounded-lg'>
                    <h1 className='select-none'>First</h1>    
                    <h1 className='select-none'>SAR 1600</h1>
                </div>
            </div>
        </div>
  )
}

export default Trip