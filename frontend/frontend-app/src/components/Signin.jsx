import React from 'react'
import '../component-css/Signin.css'
import welcomeimg from '../photo/undra.svg';
import userimg from '../photo/user-solid.svg';
import userimg1 from '../photo/lock-solid.svg'
import facebook from '../photo/facebook1.svg'
import google from '../photo/google.svg'
import twitter from '../photo/twitter.svg'

export default function Signin() {
  return (
    <>
      <div className='outer-container'>
        <img className='Welcome-img' src={welcomeimg} alt='welcome'></img>
        <div className='form'>
          <h1 className='sign'>SIGN IN</h1>
          <div className='inner-container1'>
            <img className='user-img' src={userimg} alt='logo'></img>
            <input className='input-area' type='textarea' placeholder='Username/ email address'></input>
          </div>
          <div className='inner-container2'>
            <img className='user-img' src={userimg1} alt='logo'></img>
            <input className='input-area' type='textarea' placeholder='Password'></input>
          </div>
          <button className='log-button'><p className='log'>Log In</p></button>
          <div className='inner-container3'>
            <p className='plane-text'>Or Login with</p>
            <img className='social-img' src={facebook} alt='facebook'></img>
            <img className='social-img' src={google} alt='google'></img>
            <img className='social-img' src={twitter} alt='twitter'></img>
          </div>
          <p className='underline-text'>Create an account</p>
        </div>
      </div>
    </>
  )
}
