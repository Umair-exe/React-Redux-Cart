import React, { useEffect } from 'react'

import "swiper/css/bundle";
import "./MainSlider.css";
import MainSlider from './MainSlider'
import Body from './Body'


const Home = () => {
    useEffect(() => {
      window.scrollTo(0,0);
    
      return () => {
        
      }
    }, [])
    



    return (
        <div>
            <MainSlider />
            <Body />
        </div>
    )
}

export default Home
