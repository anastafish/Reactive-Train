import React, { useContext, useState } from 'react'
import { Button, Modal, Box, TextField} from '@mui/material';
import { UserContext } from '..';
import { Nav } from '../components';
import profile from '../images/profile.svg'
import whitebg from '../images/whitebg.jpg'

export default function ProfilePage() {
  const [user, setUser] = useContext(UserContext)
  const [popUp, setPopUp] = useState(false)

  const [newUserInfo, setNewUserInfo] = useState({
    name:user.userInfo.name,
    email:user.userInfo.email,
    password:user.userInfo.password,
    confirmPassword:user.userInfo.password,
  })

  function handleChange(e){
    setNewUserInfo(prevState => ({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  function editUserInfo(){
    setUser(prevState => ({
      ...prevState,
      userInfo:newUserInfo
    }))
    setPopUp(false)
    console.log(user)
  }

  function logOut(){
    setUser(prevState => ({...prevState, active:'home'}))
    window.open('#/', '_self')
  }

  return (
    <div 
    style={{ backgroundImage:`url(${whitebg})`, backgroundRepeat:"no-repeat",
        backgroundSize:"cover"}} 
    className=' p-2 items-center justify-center w-[100vw] h-[100vh] overflow-hidden'>
      <Modal open={popUp}>
            <Box style={{position:'absolute', top:'30%', right:'40%'}}>
                <div 
                className='bg-white border-[2px] items-center gap-4
                 flex flex-col border-black p-4 rounded-sm'>
                  <TextField name='name' label='User Name' value={newUserInfo.name} onChange={handleChange}/>
                  <TextField name='email' label='Email' value={newUserInfo.email} onChange={handleChange}/>
                    <Button
                     variant="contained" style={{width:'50%'}} onClick={editUserInfo}>
                        Save
                        </Button>
                    </div>
            </Box>
        </Modal>
        <Nav className=''/>
        <div className='mt-20 w-full h-full'>
          <div className='flex flex-col items-center justify-center mt-20 gap-5 '>
            <h1 className='text-[50px]'>Profile</h1>
            <div className='flex items-center bg-gray-400 gap-4 rounded-lg p-5'>
              <img src={profile} alt="user-icon" className='w-[60px] h-[70px]'/>
              <div className='flex flex-col items-center'>
                <h1 className='text-[20px]'>Name: {user.userInfo.name}</h1>
                <h1 className='text-[20px]'>Email: {user.userInfo.email}</h1>
              </div>
            </div>
              <Button onClick={() => setPopUp(true)}
               variant='contained' color='warning'>Edit Profile</Button>
               <Button onClick={() => logOut()}
               variant='contained' color='error'>LogOut</Button>
          </div>
        </div>
        </div>

        
  );
}

