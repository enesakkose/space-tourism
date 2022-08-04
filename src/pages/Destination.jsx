import { useState } from 'react'
import Header from '@/components/Header'
import Img from '@/components/Img'
import React from 'react'
import data from '@/data.json'
import './Destination.scss'


function Destination() {
  const [no, setNo] = useState(0)
  
  return (
    <div className='destination'>
        <Header/>
        <div className="container">
            
            <h5><span>01</span>PICK YOUR DESTINATION</h5>
            <main className="destination__main">
            <Img className='planet' src={data.destinations[no].images.png} alt={data.destinations[no].name} size='445' />
            <div className="destination__info">
              <nav className='destination__info__navbar'>
                {data.destinations.map((destination, index) => (
                  <button className={`navbar-btn ${no === index && 'activeNav'}`} key={index} onClick={() => setNo(index)}>
                    {destination.name.toUpperCase()}
                    <div className={`bottom  ${no === index && 'active'}`}></div>
                  </button>
                ))}
              </nav>
              <h2>{data.destinations[no].name.toUpperCase()}</h2>
              <p>{data.destinations[no].description}</p>
              <footer className='destination__info__footer'>
                <div className="destination__info_footer__avg">
                  <h6>AVG.DISTANCE</h6>
                  <span>{data.destinations[no].distance}</span>
                </div>
                <div className="destination__info_footer__travel">
                  <h6>EST.TRAVEL TIME</h6>
                  <span>{data.destinations[no].travel}</span>
                </div>
              </footer>
            </div>
            </main>
        </div>
    </div>
  )
}

export default Destination