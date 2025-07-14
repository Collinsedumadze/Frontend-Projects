import React from 'react'
import './Footer.css'
import logo from "../../assets/logo.svg"

const Footer = () => {
  return (
        <footer>
          <div className="container">
            <div className="logo-div">
              <img src={logo} alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="company-div">
              <h2>Company</h2>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Private Policy</a></li>
              </ul>
            </div>

            <div className="get-in-touch">
              <h2>Get in touch</h2>
              <div className="text">
                <p>+233 596 536 522</p>
                <p>egyircollins@gmail.com</p>
              </div>
            </div>
          </div>
            <p className='p'>
                Copyright 2025 © Created with love. All Right Reserved.
            </p>
    </footer>
  )
}

export default Footer
