import ExploreBtn from '@/components/ExploreBtn'
import Header from '@/components/Header'
import React from 'react'
import './Home.scss'

function Home() {
  return (
    <div className='home'>
        <Header/>
        <div className="container">
          <main className="home__main">
            <div className="home__main__text">
              <h4>SO, YOU WANT TO TRAVEL TO</h4>
              <h1>SPACE</h1>
              <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="home__main__btn">
              <ExploreBtn/>
            </div>
          </main>
        </div>
    </div>
  )
}

export default Home