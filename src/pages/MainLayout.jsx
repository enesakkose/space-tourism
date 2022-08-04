import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import './MainLayout.scss'

function MainLayout() {
  return (
    <div className="mainLayout">
        <div className='container'>
            <Header/>
            <Outlet/>
        </div>  
    </div>
    
  )
}

export default MainLayout