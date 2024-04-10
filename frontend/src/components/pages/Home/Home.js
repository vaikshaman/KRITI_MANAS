import React from 'react'
import HomeFeed from './HomeFeed'
import Navbar from '../../header/Navbar'

function Home() {
  return (
    <div className='Home_Main'>
        <Navbar className="z-index:100"/> 
        <div className='homer'>
            <HomeFeed className="Homefeed"></HomeFeed>
        </div>
    </div>
  )
}

export default Home;