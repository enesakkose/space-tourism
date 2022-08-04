import React, {useState} from 'react'
import Icon from '@/components/Icon'
import { NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {

    const [open , setOpen] = useState(false)

  return (
    <header className='header'>
        <Icon className='logo' name='circle' size={48}/>
        <div className="header__line"></div>
        <nav className="header__navbar">
            <NavLink to='/'>
                <span>00</span> HOME
                <div className="bottom"/>
            </NavLink>
            <NavLink to='/destination'>
                <span>01</span>DESTINATION
                <div className="bottom"/>
            </NavLink>
            <NavLink to='/crew'>
                <span>02</span>CREW
                <div className="bottom"/>
            </NavLink>
            <NavLink to='/technology'>
                <span>03</span>TECHNOLOGY
                <div className="bottom"/>
            </NavLink>
        </nav>
        <button onClick={() => setOpen(true)} className="header__hamburger">
            <Icon name='hamgurger' size='24'/>
        </button>
        
        <div className={`header__hamburger__menu ${open ? 'open' : ''}`}>
            <button onClick={() => setOpen(false)} className='close'>
              <Icon name='close' size='20' />  
            </button>
            <div className="header__hamburger__menu__links">
                <NavLink to='/'>
                    <span>00</span> HOME
                </NavLink>
                <NavLink to='/destination'>
                    <span>01</span>DESTINATION
                </NavLink>
                <NavLink to='/crew'>
                    <span>02</span>CREW
                </NavLink>
                <NavLink to='/technology'>
                    <span>03</span>TECHNOLOGY
                </NavLink>
            </div>
        </div>
    </header>
  )
}

export default Header