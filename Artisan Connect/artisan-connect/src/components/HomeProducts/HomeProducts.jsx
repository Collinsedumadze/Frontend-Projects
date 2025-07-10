import React, { useState } from 'react'
import "./HomeProducts.css"
import products from '../../assets/productData'
import ProductCard from '../ProductCard/ProductCard'

const HomeProducts = () => {

    const [showAll, setShowAll] = useState(false);

    const popularProducts = showAll ? products : products.slice(0, 8);

    const handleShowAll = () => {
        setShowAll(!showAll);
    };

  return (
    <div className='home-products'>
        <p className='p-title'>Popular products</p>
        <div className="crad-container">
      {popularProducts.map((product) => (
        <ProductCard 
                key = {product.id}
                name = {product.name}
                description = {product.description}
                rating = {product.rating}
                price = {product.price}
                imgSrc = {product.imgSrc}
        />
      ))}
    </div>

    <button onClick={handleShowAll} className='see-more'>{showAll?"See Less":"See More"}</button>
    </div>
  )
}

export default HomeProducts
