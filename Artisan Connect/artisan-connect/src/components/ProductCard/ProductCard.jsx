import React, { useState } from 'react'
import './ProductCard.css'
import header_macbook_image from "../../assets/header_macbook_image.png"
/* import heart_icon from "../../assets/heart_icon.svg" */
import star_icon from "../../assets/star_icon.svg"
import star_dull_icon from "../../assets/star_dull_icon.svg"

const ProductCard = ({ name , description , rating , price , imgSrc}) => {


    const [star, setStar] = useState(false)

    const starred = () => {
        setStar(prev => !prev)
    }

  return (
    <div className='product-card-container'>

        <div className="image-container">
            <img src={imgSrc} alt="" />
            <button onClick={starred}>
                {star?<img src={star_icon} alt="" />:<img src={star_dull_icon} alt="" />}
            </button>
        </div>
        <p className='title' >{name}</p>
        <p className='sub-title truncate' >{description}</p>
        <div className="star">
            <p>{rating}</p>
            <div>
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" /> 
            <img src={star_icon} alt="" /> 
            <img src={star_icon} alt="" /> 
            <img src={star_dull_icon} alt="" /> 
            </div>
        </div>
        <div className="price-btn">
            <p>{price}</p>
            <button>Buy Now</button>
        </div>


    </div>
  )
}

export default ProductCard




























      {/*   {productData.map((product) => (
            <div className='product-card' key={product.id}>
            <img src={product.imgSrc} alt={product.name} className='product-image' />
            <h3 className='product-name'>{product.name}</h3>
            <p className='product-description'>{product.description}</p>
            <div className='product-rating'>Rating: {product.rating} ★</div>
            <div className='product-price'>{product.price}</div>
            </div>
        ))} */}
      