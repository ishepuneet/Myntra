'use client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import Living from './Living';
import Beauty from './Beauty';
import Studio from './Studio';
import Error from './Error';
import Mainpage from './mainpage';
import Profilecard from './Profilecard';
import Menstopwear from './Menstopwear';
import Login from './Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
const routing = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Men',
    element: <Men />
  },
  {
    path: '/Women',
    element: <Women />
  },
  {
    path: '/Kids',
    element: <Kids />
  },
  {
    path: '/Living',
    element: <Living />
  },
  {
    path: '/Beauty',
    element: <Beauty/>
  },
  {
    path: '/Studio',
    element: <Studio />
  },
  {
    path: '/mainpage',
    element: <Mainpage/>
  },
  {
    path: '*',
    element: <Error/>
  },
  {
    path: '/Profilecard',
    element: <Profilecard/>
  },
  {
    path: '/Menstopwear',
    element: <Menstopwear/>
  },
  {
    path:'/Login',
    element:<Login/>
  }
  
])
root.render(
  <React.StrictMode>
    <RouterProvider router={routing}/>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
