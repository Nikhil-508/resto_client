import React from 'react'
import { Assets } from '../../Assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='single-box'>
            <h1>CONNECT WITH US</h1>
            <div className='new-display'>
                <img src={Assets.tel} alt="" />
                <span>+91 9567843340</span>
            </div>
            <div className='new-display'>
                <img src={Assets.mail} alt="" />
                <span>info@deepnetsoft.com</span>
            </div>
        </div>
        <div className='single-box'>
            <img className='brandName' src={Assets.brandname} alt="" />
            <ul className='social'>
                <li><img src={Assets.twit} alt="" /></li>
                <li><img src={Assets.ytbe} alt="" /></li>
                <li><img src={Assets.insta} alt="" /></li>
                <li><img src={Assets.fb} alt="" /></li>
            </ul>

        </div>
        <div className='single-box'>
            <h1>FIND US</h1>
            <div className='address'>
                <img src={Assets.loc} alt="" />
                <span>First floor, Geo infopark, Infopark EXPY, Kakkanad</span>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
