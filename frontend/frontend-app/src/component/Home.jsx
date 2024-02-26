import React from 'react'
import Navbar from './Navbar'
import '../component-css/Home.css'
import homeimg from '../photo/K15R-_1_600x.webp'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import Products from './Products'
import Pagination from './Paginationcount'
import Dropdown from './Dropdown'
// import { useState } from 'react'
// import axios from 'axios';
// import  { useEffect } from 'react'


export default function Home() {

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
      <Dropdown/>
    </div>
    <div className='product-container'>
    <Products/>
    </div>
    <div className='paginationcount'>
    <Pagination/>
    </div>
    <Footer/>
    </>
  )
}
