import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import image1 from '../photo/Screenshot 2024-01-18 195928.png'
import image2 from '../photo/Screenshot 2024-01-18 232014.png'
import image3 from '../photo/Screenshot 2024-01-18 232037.png'
import image4 from '../photo/Screenshot 2024-01-18 232103.png'
import bagimg from '../photo/bag-shopping-solid.svg'
import likeimg from '../photo/heart-regular.svg'
import '../component-css/Productdetails.css'

export default function productdetails() {
  return (
    <>
    <Navbar/>
    <div className='detail-container'>
      <div className='image-div'>
      <div className='image-container1'>
        <img className='product-image' src={image1} alt="logo" />
        <img className='product-image' src={image2} alt="logo" />
      </div>
      <div className='image-container2'>
        <img className='product-image' src={image3} alt="logo" />
        <img className='product-image' src={image4} alt="logo" />
      </div>
      </div>
      <div className='text-detail-container'>
        <p className='name'>KRAFT INDIA</p>
        <p className='short-detail'>Men Yellow Ethnic Motifs Jacquard Kurta</p>
        <p className='product_price'>Rs. 1199.89<span className='discount'>  (67% OFF)</span></p>
        <p className='tax'>inclusive of all taxes</p>
        <p className='detail-line'>__________________________________________</p>
        <p className='size-text'>SELECT SIZE <span className='chart'>SIZE CHART</span></p>
        <div className='size'> 
          <button className='size-button'>S</button>
          <button className='size-button'>M</button>
          <button className='size-button'>L</button>
          <button className='size-button'>XL</button>
          <button className='size-button'>XLL</button>
        </div>
        <div className='button-container'>
          <button className='detail-button'><img className='bag-img' src={bagimg} alt='logo' />Add to bag</button>
          <button className='detail-button'><img className='bag-img' src={likeimg} alt="logo" />Wishlist</button>
        </div>
        <p className='detail-line'>__________________________________________</p>
        <ul className='product_detail_list'>PRODUCT DETAILS
          <li className='p_d_l'>Colour: yellow</li>
          <li className='p_d_l'>Ethnic motifs woven design</li>
          <li className='p_d_l'>Mandarin collar</li>
          <li className='p_d_l'>Long, regular sleeves</li>
          <li className='p_d_l'>Straight shape with regular style</li>
          <li className='p_d_l'>Knee length with straight hem</li>
          <li className='p_d_l'>Machine weave jacquard dupion silk</li>
        </ul>
        <ul className='product_detail_list'>Material & Care
          <li className='p_d_l'>Dupion Silk</li>
          <li className='p_d_l'>Dry Clean</li>
        </ul>
        <p className='detail-line'>__________________________________________</p>
        <p className='product-rating'>RATINGS</p>
        <p className='rate-num'>4.2</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}
