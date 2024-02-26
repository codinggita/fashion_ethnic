import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loginbtn from './Loginbtn'
import '../component-css/Logoutbtn.css'

const Logoutbtn = () => {
  const { logout,isAuthenticated,loginWithRedirect } = useAuth0();

  return (
    isAuthenticated ? 
    <button className="Logoutbtn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    : <button onClick={() => loginWithRedirect()}>Log In</button>
  );
};

export default Logoutbtn;