import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import burger from '../photo/bars-solid.svg' 
import profileimg from '../photo/DSC02986.JPG'
import heartimg from '../photo/heart-solid.svg'
import cartimg from '../photo/cart-shopping-solid.svg'
import '../component-css/Navbar.css'
import downimg from '../photo/caret-down-solid.svg'
import axios from 'axios'

export default function Navbar({name}) {

  const [customer, setCustomer] = useState([]);
  // const [customername, setCustomerName] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:7000/Navbar/John`)
    .then((response)=>{
      setCustomer(response.data);
    })
    .catch((error) => {
      console.error('Error fetching name:', error);
    });
  },[])
  
  // setCustomerName("123");
  return (
    <>
    <div className='outer-container1'>
    <img className='burger-img' src={burger} alt='logo'></img>
    <div className='inner-container'>
    <img className='down-img' src={downimg} alt="logo" />
    <img className='profile-img' src={profileimg} alt="logo" />
    <Link className='link' to="/Profile">
      <p className='name' id='name1'>{customer.c_name}</p></Link>
    <img className='heart-img' src={heartimg} alt="logo" />
    <Link className='link' to="/Wishlist"><p className='name' id='name2'>Wishlist</p></Link>
    <Link to='/Cart'><img className='cart-img' src={cartimg} alt="logo" /></Link>
    <p className='name' id='name3'>0</p>
    </div>
    </div>
         {/* <div>
         <Link to="/Home">Home</Link>
         <Link to="/Signin">Signin</Link>
        </div> */}
    </>
  )
}
