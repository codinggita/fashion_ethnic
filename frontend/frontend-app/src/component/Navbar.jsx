import React from 'react';
import {Link} from 'react-router-dom'; 
import heartimg from '../photo/heart-solid.svg'
import cartimg from '../photo/cart-shopping-solid.svg'
import '../component-css/Navbar.css'
import downimg from '../photo/caret-down-solid.svg'
import NavDrawer from './NavDrawer'
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {

  const {isAuthenticated, user} = useAuth0();
  return (
    <>
    <div className='outer-container1'>
     <div className='burger-img'>
      < NavDrawer/>
     </div>
    <div className='inner-container'>
    <img className='down-img' src={downimg} alt="logo" />
    {isAuthenticated && <img className='profile-img' src={user.picture} alt={user.name} />}
    <Link className='link' to="/Profile">{ isAuthenticated && <p className='name' id='name1'>{user.name}</p>}</Link>
    <img className='heart-img' src={heartimg} alt="logo" />
    <Link className='link' to="/Wishlist"><p className='name' id='name2'>Wishlist</p></Link>
    <Link to='/Cart'><img className='cart-img' src={cartimg} alt="logo" /></Link>
    <p className='name' id='name3'>0</p>
    </div>
    </div>
    </>
  )
}
