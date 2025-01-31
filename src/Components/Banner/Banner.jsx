import React from 'react'
import { Assets } from '../../Assets'
import  './Banner.css'

const Banner = () => {
  return (
    <div className='banner-container' 
    style={{
        backgroundImage:`url(${Assets.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

    }}>
        <div className='banner-text'>
            <h1>MENU</h1>
            <span>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</span>
        </div>
      
    </div>
  )
}

export default Banner
