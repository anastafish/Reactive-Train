import React, { useContext } from 'react'
import { UserContext } from '..';
import { MenuItem, Select, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import profile from '../images/profile.svg'
import home from '../images/home.svg'
import ticket from '../images/ticket.svg'



function Nav() {

  const [user, setUser] = useContext(UserContext)


  function handleTheme() {
    setUser(prevState => ({
      ...prevState,
      theme:!user.theme
    }))
    if (user.theme) {
        document.body.style.background = 'white'
    }
    else if (!user.theme) {
        document.body.style.background = 'gray'
    }
}
  return (
        <div className='flex items-center p-5 justify-between w-full h-[5%]'>
          <ul className='flex items-center gap-8 mt-8 justify-center'>
            <li className='flex flex-col items-center'>
              <Link to='/reservation' className='flex flex-col items-center'>
              <img src={home} alt="home-icon" className='w-[30px] h-[30px]'/>
              <h1>Home</h1>
              </Link>
            </li>
            <li className='flex flex-col items-center'>              
                <Link to='' className='flex flex-col items-center'>
                  <img src={profile} alt="profile-icon" className='w-[30px] h-[30px]'/>
                  <h1>Profile</h1>
                </Link>
            </li>
            <li className='flex flex-col items-center'>
              <Link to='/tickets' className='flex flex-col items-center'>
                <img src={ticket} alt="ticket-icon" className='w-[30px] h-[30px]'/>
                <h1>Your Tickets</h1>
              </Link>
            </li>
          </ul>
          <div className='flex items-center'>
          <div className='flex gap-2'>
                <Switch
                 checked={user.theme}
                 onClick={handleTheme}/>
                 {/* <img src={moon} alt="moon" className='h-[35px] w-[35px]'/> */}
            </div>
            <Select defaultValue={'language'} style={{height:'2rem'}}>
              <MenuItem disabled value='Language'>Language</MenuItem>
              <MenuItem value='english'>English</MenuItem>
              <MenuItem value='arabic'>Arabic</MenuItem>
            </Select>
          </div>
        </div>
  )
}

export default Nav