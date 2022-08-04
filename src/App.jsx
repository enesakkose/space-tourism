import Crew from '@/pages/Crew'
import Destination from '@/pages/Destination'
import Technology from '@/pages/Technology'
import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import Header from './components/Header'
import Home from "./pages/Home"



const routes = [
    {
        path: '/',
        element: <Home/> 
    },
    {
      path: '/destination',
      element: <Destination/>
    },
    {
      path: '/crew',
      element: <Crew/>
    },
    {
      path: '/technology',
      element: <Technology/>
    },
    
]

function App() {

  const showRoutes = useRoutes(routes)

  return (
    <>
    {showRoutes}
    </>
    )
}

export default App
