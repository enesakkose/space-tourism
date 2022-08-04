import React, {useState} from 'react'
import Header from '@/components/Header'
import data from '@/data.json'
import './Crew.scss'

function Crew() {

  const [no, setNo] = useState(0)

  return (
    <div className='crew'>
      <Header/>
        <div className="container">
            <h5><span>02</span> MEET YOUR CREW</h5>

            <main className="crew__main">
              <div className="crew__main__info">
                <h3>{data.crew[no].role.toUpperCase()}</h3>
                <h1>{data.crew[no].name.toUpperCase()}</h1>
                <p>{data.crew[no].bio}</p>

                <div className="crew__main__info__slide">
                  {data.crew.map((item, index) => (
                    <button key={index} onClick={() => setNo(index)} className={`${index === no && 'activeSlide'}`}></button>
                  ))}
                </div>

              </div>
              <img src={data.crew[no].images.png} alt="" />
            </main>

        </div>
    </div>
  )
}

export default Crew