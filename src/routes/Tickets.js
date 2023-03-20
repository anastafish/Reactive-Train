import React, {useContext } from 'react'
import { UserContext } from '..';
import Summary from '../components/Summary';
import { Nav } from '../components';
import whitebg from '../images/whitebg.jpg'



function Tickets() {
    const [user] = useContext(UserContext)

  return (
    <div
    style={{ backgroundImage:`url(${whitebg})`, backgroundRepeat:"no-repeat",
        backgroundSize:"cover"}} 
    className='flex flex-col gap-14 p-2 items-center h-[100vh] w-[100vw]'>
        <Nav />
        <div className='flex flex-col'>
          <h1 className='sm:text-[60px] text-center text-[30px] font-mono'>Your Tickets</h1>
          <div className='flex flex-col gap-5 p-5 items-center overflow-y-scroll scrol'>
              {user.tickets ? user.tickets.map(ticket => <Summary
                  from={ticket.from}
                  to={ticket.to}
                  seats={ticket.seats}
                  qty={ticket.qty}
                  total={user.trip.split('\n')}
                  depart={ticket.depart}
                  turn={ticket.return}
                  // key={}
              />) : <h1 className='text-[25px]'>You Don't Have any tickets!</h1>}
              </div>
        </div>
    </div>
  )
}

export default Tickets