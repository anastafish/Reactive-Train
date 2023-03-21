import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createHashRouter, RouterProvider, Navigate} from "react-router-dom";
import {Login, Signin, Reservation, Trips, Customize, Payment, Tickets, ProfilePage} from './components'
import './index.css';
import { useState } from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import './i18n/config'

const router = createHashRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "login/",
    element: <Login />,
    errorElement: <Signin />

  },
  {
    path:'reservation/',
    element: <Reservation />,
    errorElement: <Signin />
  },
  {
    path:'trips',
    element: <Trips />,
    errorElement: <Signin />

  },
  {
    path:'customize',
    element:<Customize />,
    errorElement: <Signin />
  },
  {
    path:'payment',
    element:<Payment />,
    errorElement: <Signin />,    
  },
  {
    path:'tickets',
    element: <Tickets />,
    errorElement: <Signin />,
  },
  {
    path:'profile',
    element: <ProfilePage />,
    errorElement: <Signin />
  },
  {
    path:'*',
    element:<Navigate to="/" />
  }
]);

export const UserContext = React.createContext();


function Context(){
  const [name, setName] = useState({theme:false, active:'home', language:'en'})

  return (
    <UserContext.Provider value={[name,setName]}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <Context />
    </ProSidebarProvider>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
