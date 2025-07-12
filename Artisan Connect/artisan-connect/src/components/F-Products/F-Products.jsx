import React from 'react'
import "./F-Products.css";
import  girl_with_headphone_image from "../../assets/girl_with_headphone_image.png"
import  girl_with_earphone_image from "../../assets/girl_with_earphone_image.png"
import  boy_with_laptop_image from "../../assets/boy_with_laptop_image.png"


const products = [
  {
    id: 1,
    image: girl_with_headphone_image,
    title: "Unparalleled Sound",
    description: "Experience crystal-clear audio with premium headphones.",
  },
  {
    id: 2,
    image: girl_with_earphone_image,
    title: "Stay Connected",
    description: "Compact and stylish earphones for every occasion.",
  },
  {
    id: 3,
    image: boy_with_laptop_image,
    title: "Power in Every Pixel",
    description: "Shop the latest laptops for work, gaming, and more.",
  },
];

const FProducts = () => {
  return (
    <div className='f-products'>
        <div className="title">
            <p>Featured Product<span>s</span></p> 
            <div className="dash"></div>
        </div>
        <div className="f-products-container">
            {products.map((product)=>(
                <div className="f-product">
                    <img src={product.image} />
                    <div className='absolute'>
                        <p className='title-p'>{product.title}</p>
                        <p>{product.description}</p>
                        <button className='f-buy-btn'>Buy Now</button>
                    </div>
                    
                </div>
            ))} 
        </div>    
    </div>
  )
}

export default FProducts
