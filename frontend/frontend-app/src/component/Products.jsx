import React from 'react'
import productimg from '../photo/Screenshot 2024-01-18 195819.png'
// import ratingimg from '../photo/'
import '../component-css/Products.css'

export default function Products() {

  // {courses.map((course) => (  
  //   <li key={course.course}>
  //     {course.course}
  //   </li>
  // ))}



  return (
    <>
    {/* <div className='card'>
    <img className='product-img' src={productimg} alt="logo" />
    {products.map((product) =>(
    <>
      <div className='card-container'>
      <p className='product-name' key = {product.productName}>{product.productName}</p>
      <p className='rating' key = {product.productName}>{product.rating}</p>
      <img className='rating-img' src={ratingimg} alt="logo" />
      </div>
      <p className='product-intro' key = {product.productName}>{product.productShortDetail}</p>
      <p className='price' key = {product.productName}>Rs.{product.price}<span className='discount'>(67% off)</span> </p>  
    </>   
      ))}
    </div> */}
    </>
  )
}
