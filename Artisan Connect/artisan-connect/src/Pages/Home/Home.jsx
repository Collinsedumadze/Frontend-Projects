import React from 'react'
import "./Home.css"
import HeaderSlider from '../../components/HeaderSlider/HeaderSlider'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="home">
      <HeaderSlider/>
      </div>
    </div>
  )
}

export default Home
