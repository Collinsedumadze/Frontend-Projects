import React from 'react'
import './Banner.css'
import arrow_icon_white from '../../assets/arrow_icon_white.svg'
import jbl_soundbox_image from '../../assets/jbl_soundbox_image.png'
import md_controller_image from '../../assets/md_controller_image.png'
import sm_controller_image from '../../assets/sm_controller_image.png'


const Banner = () => {
  return (
    <div className="banner">
      <img src={jbl_soundbox_image} alt="" className='img1'/>
      <div className="text-format">
        <h2>Level Up Your Gaming Experience</h2>
        <p>From immersive sound to precise controls—everything you need to win</p>
        <button>
            Buy Now
            <img src={arrow_icon_white} alt="" />
        </button>
      </div>
      <img src={md_controller_image} alt="" className='img2' />
      <img src={sm_controller_image} alt="" className='img3'/>
    </div>
  )
}

export default Banner
