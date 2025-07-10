import React from 'react'
import './ProductCard.css'
import header_macbook_image from "../../assets/header_macbook_image.png"
import heart_icon from "../../assets/heart_icon.svg"
import star_icon from "../../assets/star_icon.svg"
import star_dul_icon from "../../assets/star_dull_icon.svg"

const ProductCard = ({key, name , description , rating , price , imgSrc}) => {
  return (
    <div className='product-card-container'>

        <div className="image-container">
            <img src={imgSrc} alt="" />
            <button>
                <img src={heart_icon} alt="" />
            </button>
        </div>
        <p className='title' >{name}</p>
        <p className='sub-title' >{description}</p>
        <div className="star">
            <p>{rating}</p>
            <div>
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" /> 
            <img src={star_icon} alt="" /> 
            <img src={star_icon} alt="" /> 
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
      