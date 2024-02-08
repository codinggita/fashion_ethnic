import React from 'react'
import Navbar from './Navbar'
import '../component-css/Home.css'
import homeimg from '../photo/K15R-_1_600x.webp'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import Products from './Products'
import { useState } from 'react'
import axios from 'axios';
import  { useEffect } from 'react'


export default function Home() {

  const[products,setProducts]=useState();

  useEffect(() => {
    axios.get('http://localhost:7000/home')
    .then((response) => {
      setProducts(response.data)
    })
    .catch((error) => {
      console.error(`Error fetching details for frontend:`, error);
    });
  },[])

  return (
    <>
    <Navbar/>
    <div className='outer-container3'>
      <div>
      <p className='para1'>Vibrant. Cultural.<br/> Trendsetting.</p>
      <p className='para2'>Elevate your style, celebrate diversity-<br/>where tradition meets trends in every thread.</p>
      <Link className='link' to='/Products'><button className='button'><p className='para3'>Shop New Arrivals</p></button></Link>
      </div>
      <img className='home-img' src={homeimg} alt="img" />
    </div>
    <p className='line'>_________________________________________________________________________________________________________________________________________________________________</p>
    <div className='filter-container'>
      <button className='filter'>FILTERS</button>
      <select className='dropdown'>
        <option className='dropdown-ops' disabled selected hidden>Sort by</option>
        <option className='dropdown-ops'>Price Low-High</option>
        <option className='dropdown-ops'>Price High-Low</option>
      </select>
      {/* <input className='sortby' type='dropdown'>Sort by<img className='downarrow-img' src={downarrow} alt='logo'/></input> */}
    </div>
    <div className='product-container'>
      <Link className='link' to='/Productdetails'><Products/></Link>
      <Link className='link' to='/Productdetails'><Products/></Link>
      <Link className='link' to='/Productdetails'><Products/></Link>
      <Link className='link' to='/Productdetails'><Products/></Link>
    </div>
    <div className='product-container'>
      <Link className='link' to='/Productdetails'><Products/></Link>
      <Link className='link' to='/Productdetails'><Products/></Link>
      <Link className='link' to='/Productdetails'><Products/></Link>
      <Link className='link' to='/Productdetails'><Products/></Link>
    </div>
    <div className='product-container'>
      <Link className='link' to='/Productdetails'><Products/></Link>
      <Link className='link' to='/Productdetails'><Products/></Link>
      <Link className='link' to='/Productdetails'><Products/></Link>
      <Link className='link' to='/Productdetails'><Products/></Link>
    </div>
    <Footer/>
    </>
  )
}
