import React from 'react'
import '../component-css/Footer.css'
import instaimg from '../photo/instagram (2).svg'
import facebookimg from '../photo/facebook (2).svg'
import twitterimg from '../photo/twitter (1).svg'
import youtubeimg from '../photo/youtube.svg'

export default function Footer() {
  return (
    <div className='footer-outer-container'>
      <h1 className='footer-h'>CUSTOMER POLICIES</h1>
      <div className='footer-container'>
        <p id='p1' className='footer-p'>Contact Us</p>
        <p className='footer-p'>FAQ</p>
        <p className='footer-p'>T&C</p>
        <p className='footer-p'>Terms of use</p>
      </div>
      <div id='con'>
        <p id='p2' className='footer-p'>About Us</p>
        <p className='footer-p'>Track Order</p>
        <p className='footer-p'>Privacy Policy</p>
      </div>
      <p className='lowerpara'>KEEP IN TOUCH</p>
      <div className='footer-img-container'>
        <img id='social-img' className='footer-img' src={instaimg} alt="logo" />
        <img className='footer-img' src={facebookimg} alt="logo" />
        <img className='footer-img' src={twitterimg} alt="logo" />
        <img className='footer-img' src={youtubeimg} alt="logo" />
      </div>
    </div>
  )
}
