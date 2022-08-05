import React, { useState } from 'react'
import Header from '@/components/Header'
import data from '@/data.json'
import { useMediaQuery } from 'react-responsive'
import './Technology.scss'

function Technology() {

  const [ no, setNo ] = useState(0)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  
  return (
    <div className='technology'>
        <Header/>
      <div className="container">
          <h5><span>03</span>SPACE LAUNCH 101</h5>  
          
        <main className="technology__main">
          <div className="technology__main__text">
            <div className="technology__main__text__sliderBtn">
              {data.technology.map((item, index) => (
                <button key={index} onClick={() => setNo(index)} className={`${index === no && 'active'}`}>{index + 1}</button>
              ))}
            </div>
            
            <div className="technology__main__text__info">
              <h6>THE TERMINOLOGY...</h6>
              <h2>{data.technology[no].name.toUpperCase()}</h2>
              <p>{data.technology[no].description}</p>
            </div>
          </div>
          <div className="technology__main__img">
            <img src={isTabletOrMobile ? data.technology[no].images.landscape : data.technology[no].images.portrait} alt="" />
          </div>
        </main>
      </div>
        
    </div>
  )
}

export default Technology