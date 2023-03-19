import React, { useState, useContext } from 'react'
import { UserContext } from '..';
import Summary from '../components/Summary';
import moment from "moment";
import { Nav } from '../components';


function Tickets() {
    const [user, setUser] = useContext(UserContext)

  return (
    <div className='flex flex-col gap-5  p-2 items-center h-[100vh] w-[100vw]'>
        <Nav />
        <h1 className='sm:text-[60px] text-center text-[30px] font-mono'>Your Tickets</h1>
        <div className='flex flex-col gap-5 p-5 items-center overflow-y-scroll scrol'>
            {user.tickets ? user.tickets.map(ticket => <Summary
                from={ticket.from}
                to={ticket.to}
                seats={ticket.seats}
                qty={ticket.qty}
                total={user.trip.split('\n')}
                depart={moment(ticket.depart).format('DD/MM/YYYY')}
                turn={ticket.tur}
                // key={}
            />) : <h1 className='text-[25px]'>You Don't Have any tickets!</h1>}           
                        
        </div>
    </div>
  )
}

export default Tickets