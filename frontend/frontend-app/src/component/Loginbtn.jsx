import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function Loginbtn() {
    const { loginWithRedirect } = useAuth0();
  return (
    <>
       <button className='log-button' onClick={() => loginWithRedirect()}><p className='log'>Sign In</p></button>
    </>
  )
}
