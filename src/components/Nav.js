import React, { useContext, useState } from 'react'
import { UserContext } from '..';
import { MenuItem, Select, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import profile from '../images/profile.svg'
import home from '../images/home.svg'
import ticket from '../images/ticket.svg'
import menu from '../images/icon-menu.svg'
import menu_closed from '../images/icon-menu-close.svg'




function Nav() {

  const [user, setUser] = useContext(UserContext)
  const [toggle, setToggle] = useState(false)


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
        <div className='flex items-center pl-5 mb-2 justify-between w-full h-[5%]'>
                <img src={toggle ? menu_closed : menu} alt="" className='sm:hidden block'
                 onClick={() => setToggle(prev => !prev)}/>                 
                 <div className={`${toggle ? "blcok" : 'hidden'}
                  sm:hidden flex flex-col
                   items-center justify-center w-full
                   mt-12 bg-dark_violet rounded-lg
                   p-5
                   `}>
                   <ul className='sm:hidden flex items-center justify-center gap-6'>
            <li className='flex flex-col items-center'>
              <Link to='/reservation' className='flex flex-col items-center'>
              <img src={home} alt="home-icon" className='sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]'/>
              <h1 className='sm:text-[18px] text-[16px]'>Home</h1>
              </Link>
            </li>
            <li className='flex flex-col items-center'>              
                <Link to={`${user.userInfo ? '/profile' : '/'}`} className='flex flex-col items-center'>
                  <img src={profile} alt="profile-icon" className='sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]'/>
                  <h1 className='sm:text-[18px] text-[16px]'>Profile</h1>
                </Link>
            </li>
            <li className='flex flex-col items-center'>
              <Link to='/tickets' className='flex flex-col items-center'>
                <img src={ticket} alt="ticket-icon" className='sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]'/>
                <h1 className='sm:text-[18px] text-[16px] text-center'>Your Tickets</h1>
              </Link>
            </li>
          </ul>
          <div className='flex items-center'>
            <Select defaultValue={'Language'} style={{height:'2rem', fontSize:'15px'}}>
                <MenuItem disabled value='Language'>Language</MenuItem>
                <MenuItem value='english'>English</MenuItem>
                <MenuItem value='arabic'>Arabic</MenuItem>
              </Select>
              <Switch
                   checked={user.theme}
                   onClick={handleTheme}/>
          </div>
                 </div>

          <ul className='sm:flex hidden items-center gap-8 mt-8 justify-center'>
            <li
            onClick={() => setUser(prevState => ({...prevState, active:'home'}))}
            className={`flex flex-col items-center`}>
              <Link to='/reservation' className='flex flex-col items-center'>
              <img src={home} alt="home-icon" className='sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]'/>
              <h1 className={`sm:text-[18px] ${user.userInfo && user.active === 'home' && 'font-extrabold'}  text-[16px]`}>Home</h1>
              </Link>
            </li>
            <li
            onClick={() => setUser(prevState => ({...prevState, active:'profile'}))}
            className={`flex flex-col items-center`}>              
                <Link to={`${user.userInfo ? '/profile' : '/'}`} className='flex flex-col items-center'>
                  <img src={profile} alt="profile-icon" className='sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]'/>
                  <h1 className={`sm:text-[18px] ${user.userInfo && user.active === 'profile' && 'font-extrabold'} text-[16px]`}>Profile</h1>
                </Link>
            </li>
            <li
            onClick={() => setUser(prevState => ({...prevState, active:'ticket'}))}
            className={`flex flex-col items-center`}>
              <Link to='/tickets' className='flex flex-col items-center'>
                <img src={ticket} alt="ticket-icon" className='sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]'/>
                <h1 className={`sm:text-[18px] ${user.userInfo && user.active === 'ticket' && 'font-extrabold'} text-[16px] text-center`}>Your Tickets</h1>
              </Link>
            </li>
          </ul>
          <div
           className='sm:flex flex-row
            justify-center items-center
            hidden'>
          <div className='flex gap-2'>
                <Switch
                 checked={user.theme}
                 onClick={handleTheme}/>
                 {/* <img src={moon} alt="moon" className='h-[35px] w-[35px]'/> */}
            </div>
            <Select defaultValue={'Language'} style={{height:'2rem', fontSize:'15px'}}>
              <MenuItem disabled value='Language'>Language</MenuItem>
              <MenuItem value='english'>English</MenuItem>
              <MenuItem value='arabic'>Arabic</MenuItem>
            </Select>
          </div>
        </div>
  )
}

export default Nav