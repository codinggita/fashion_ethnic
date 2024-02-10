import React from 'react'
import productimg from '../photo/Screenshot 2024-01-18 195819.png'
// import ratingimg from '../photo/'
// import '../component-css/Product.css'

export default function Product(props) {
  // debugger;
  const { product } = props; // Destructuring for easier access

  return (
    <>
      <div className='card'>
        <img className='product-img' src={productimg} alt="Product" />
        <div className='card-container'>
          <p className='product-name'>{product.productName}</p>
          <p className='rating'>{product.rating}</p>
          {/* <img className='rating-img' src={ratingimg} alt="Rating" /> */}
        </div>
        <p className='product-intro'>{product.productShortDetail}</p>
        <p className='price'>Rs.{product.price}<span className='discount'>(67% off)</span></p>
      </div>
    </>
  )
}
