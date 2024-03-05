import React from 'react'
import '../component-css/Signin.css'
import welcomeimg from '../photo/undra.svg';
import logo from '../photo/Untitled__3_-removebg-preview.png'
import Login from './Loginbtn'

export default function Signin() {

 
  return (
    <>
      <div className='outer-container'>
        <img className='Welcome-img' src={welcomeimg} alt='welcome'></img>
        <div className='form'>
        <div className='image-circle'>
          <img className='logo' src={logo} alt='logo'/>
          </div>
          <h1 className='sign'>SIGN IN TO FASHION ETHNIC</h1>
          <Login/>
        </div>
      </div>
    </>
  )
}
