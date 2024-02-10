import React from 'react'
import '../component-css/Signin.css'
import welcomeimg from '../photo/undra.svg';
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../photo/Fashionethnic.png'

export default function Signin() {

  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div className='outer-container'>
        <img className='Welcome-img' src={welcomeimg} alt='welcome'></img>
        <div className='form'>
          <img className='logo' src={logo} alt='logo'/>
          <h1 className='sign'>SIGN IN TO FASHION ETHNIC</h1>
          <button className='log-button' onClick={() => loginWithRedirect()}><p className='log'>Sign In</p></button>
        </div>
      </div>
    </>
  )
}
