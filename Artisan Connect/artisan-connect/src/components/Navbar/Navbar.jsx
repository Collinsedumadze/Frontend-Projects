import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.svg"
import search_icon from "../../assets/search_icon.svg"
import user_icon from "../../assets/user_icon.svg"


const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <div className="navlinks">
        <li>Home</li>
        <li>Shop</li>
        <li>ABout Us</li>
        <li>Contact</li>
      </div>
      <div className="left-nav">
        <img src={search_icon} alt="" className='search'/>
        <div className="account-section">
            <img src={user_icon} alt="" />
            <p>Account</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
