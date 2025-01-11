 import React from 'react'
import './home.css'

import Navbar from '../../components/Navbar/Navbar'
import hero from '../../assets/hero_banner.jpg'
import heroT from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar /> 
      <div className="hero">
        <img src={hero} alt="image banner" className='banner-img' />
        <div className="hero-caption">
          <img src={heroT} alt="hero title" className='caption' />
          <p>discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>

          <div className="hero-btns">
              <button className='btn'>
                <img src={play} alt="play movie icon" /> Play
              </button>
              <button className='btn dark'>
                <img src={info} alt="movie icon" /> Info
              </button>
        </div>

        <TitleCards />

        </div>
      </div>

      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"From Netlix"} category={"popular"}/>
        <TitleCards title={"Upcoming Movies"} category={"upcoming"}/>
        <TitleCards title={"Top Picks for you"} category={"now_playing"}/>
      </div>

      <Footer />

    </div>
  )
}

export default Home