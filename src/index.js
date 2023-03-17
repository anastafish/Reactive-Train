import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createHashRouter, RouterProvider} from "react-router-dom";
import {Login, Signin, Reservation, Trips} from './components'
import './index.css';

const router = createHashRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "login/",
    element: <Login />,
  },
  {
    path:'reservation/',
    element: <Reservation />
  },
  {
    path:'trips',
    element: <Trips />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
