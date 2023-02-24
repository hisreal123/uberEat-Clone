import React from 'react'
import { BrowserRouter, Routes, Link, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import Home from './pages/Home';
// import NoPage from './pages/NoPage';

import Header from './components/Header/Header'
import Login from './pages/Login/Login';
import About from './pages/About';

// const HeaderLayout = () => {
//   return (
//     <>
//       <Header />
//       <Outlet />
//     </>
//   )
// }
const router = createBrowserRouter([
  {
    // element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <Home show={true} />
        //TODO: Fix show side menu 
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/about',
        element: <About />
      },
    ]
  }
])

function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
