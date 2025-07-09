import React, { useEffect, useState } from 'react'
import './HeaderSlider.css'
import arrow_icon from "../../assets/arrow_icon.svg"
import header_headphone_image from "../../assets/header_headphone_image.png"
import header_playstation_image from "../../assets/header_playstation_image.png"
import header_macbook_image from "../../assets/header_macbook_image.png"


const HeaderSlider = () => {
    const sliderData = [
    {
      id: 1,
      title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      imgSrc: header_headphone_image,
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      offer: "Hurry up only few lefts!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: header_playstation_image,
    },
    {
      id: 3,
      title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: header_macbook_image,
    },
  ];

     const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

 

  return (
    <div className='header-slider' >
      <div className="card" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
        {sliderData.map((card) => (
            <div key={card.id} className="main-container">
                <div className="text-container">
                    <p>{card.offer}</p>
                    <h1>{card.title}</h1>
                    <div className="btn">
                        <button>{card.buttonText1}</button>
                        <button>
                            {card.buttonText1}
                            <img src={arrow_icon} alt="" />
                        </button>
                    </div>
                </div>
                <div className="image-container">
                    <img src={card.imgSrc} alt="" />
                </div>
            </div>
        ))}
      </div>
      <div className="dots">
        {sliderData.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleSlideChange(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default HeaderSlider
