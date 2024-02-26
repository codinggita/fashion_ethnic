import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import '../component-css/Loginbtn.css';

export default function Loginbtn() {
    const { loginWithRedirect } = useAuth0();
  return (
    <>
       <button className='loginbtn' onClick={() => loginWithRedirect()}><p className='log'>Sign In</p></button>
    </>
  )
}
